<template>
    <div>
      <div class="main">
        <div class="noFocus" v-show="noFocus">
          <!--搜索框-->
          <form action="/">
          <van-search
            v-model="value"
            placeholder="搜索商品"

            @focus="showOn"
          />
          </form>
          <!--nav-->
          <div class="nav-wrap" v-show="!flag">
            <ul class="nav">
              <li :class="active == 0 ? 'nav-active' : ''" @click="choose(0)">综合排序</li>
              <li :class="active == 1 ? 'nav-active' : ''" @click="choose(1)">销量
                <img src="../../../static/images/index/sort.png" alt="" v-show="countFlag">
                <img src="../../../static/images/index/asc.png" alt="" v-show="!count_sort && !countFlag">
                <img src="../../../static/images/index/desc.png" alt="" v-show="count_sort && !countFlag">
              </li>
              <li :class="active == 2 ? 'nav-active' : ''" @click="choose(2)">价格
                <img src="../../../static/images/index/sort.png" alt="" v-show="priceFlag">
                <img src="../../../static/images/index/asc.png" alt="" v-show="!price_sort && !priceFlag">
                <img src="../../../static/images/index/desc.png" alt="" v-show="price_sort && !priceFlag">
              </li>
            </ul>
          </div>
          <!--nav-->
          <!--搜索结果-->
          <div class="search-res" v-show="flag">
            <p>搜索到{{count}}个结果</p>
          </div>
          <!--搜索结果-->
          <!--商品信息start-->
          <!--<van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >-->
          <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
              <div class="box-wrap">
                <div class="box" v-for="(item, index) in list" :key="index" @click="toDetail(item.goods_id)">
                  <!--多套一层div给border-->
                  <div class="box-border">
                    <div>
                      <!--<img src="../../../static/images/index/gznf.png" alt="" class="box-img">-->
                      <img :src="item.original_img" alt="" class="box-img">
                    </div>
                    <p class="name">{{item.goods_name}}</p>
                    <div class="money">￥{{item.shop_price}}</div>
                  </div>
                </div>
              </div>
            </scroll>
          <!--</van-list>-->
          <!--商品信息end-->
        </div>

        <!--聚焦搜索框start-->
        <div class="onFocus" v-show="onFocus">
          <!--搜索框-->
          <form action="/">
          <van-search
            ref="inputs"
            v-model="value"
            placeholder="搜索商品"
            show-action
            :clearable="false"
            @search="onSearch"
            @cancel="onCancel"
            @clear="onClear"
          />
          </form>
          <!--<div class="search-wrap">
            <form action="/" style="width: 90%;">
              <input type="search" autofocus class="search-input" placeholder="请输入商品名称" ref="inputs" @keypress="search">
            </form>
            <span @click="onCancel">取消</span>
          </div>-->
          <div class="lately">
            <div>
              <img src="../../../static/images/index/orderTime.png" alt="">
              <span>最近搜索</span>
            </div>
            <img src="../../../static/images/index/delete.png" alt="" @click="deleteKeywords">
          </div>
          <!--最近搜索标签-->
          <div class="tag-wrap">
            <ul class="tag">
              <li v-for="(item, index) in tagList" :key="index" class="tag-item" @click="pickKeywords(item.keywords)">{{item.keywords}}</li>
            </ul>
          </div>
        </div>
        <!--聚焦搜索框end-->
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
import scroll from '../common/scroll'
export default {
    name: "shop.vue",
    data () {
      return {
        enableLoadMore: true,
        value: '',
        active: 0,
        noFocus: true,
        onFocus: false,
        loading: false,
        finished: false,
        list: [],
        order_by: 'all', // all: 综合, sales_num: 销量, shop_price: 价格
        is_order: '0',
        order_by_val: '0',
        page: 1,
        cat_id: '898',
        count_sort: false,
        countFlag: true,
        priceFlag: true,
        price_sort: false,
        tagList: [],
        flag: false,
        count: '',
        clear_flag: false // 从第一个搜索框到第二个搜索框变true控制搜索时把list清空，搜索完变为false防止下拉时再次被清空
      }
    },
  components: {
      scroll
  },
  watch: {

  },
  directives: {
    focus: {
      inserted: function (el, {value}) {
        console.log(el,{value})
        if (value) {
          el.focus();
        }
      }
    }
  },
  mounted() {
      this.getGoods()
      // this.getKeywords()
  },
  methods: {
    getGoods () {
      axios.get('/lan/goods_list?order_by=' + this.order_by  + '&page='+ this.page + '&cat_id=' + this.cat_id + '&order_by_val=' + this.order_by_val).then(this.getGoodsSucc).catch(err => console.log(err))
    },
    getGoodsSucc (res) {
      // console.log(res.data.data.list)
      if (res.data.data.list.length == 0) {
        this.enableLoadMore = false
      }
      this.list = this.list.concat(res.data.data.list)
    },
    getKeywords () {
      axios.get('/lan/goods_list?key_words=' + this.value + '&page=' + this.page + '&cat_id=' +this.cat_id).then(this.getKeywordsSucc).catch(err => console.log(err))
    },
    getKeywordsSucc (res) {
      // this.tagList.push(res.data.data.goods_search.keywords)
      this.tagList = res.data.data.goods_search
      // for(let i=0; i<res.data.data.goods_search.length; i++) {
      //   this.tagList.push(res.data.data.goods_search[i].keywords)
      // }
      if (this.tagList.length > 4) {
        this.tagList.pop()
      }
    },
    deleteKeywords () {
      axios.get('/lan/goods_clear_search').then(this.deleteSucc).catch(err => console.log(err))
    },
    deleteSucc (res) {
      if (res.data.code == 2000) {
        this.tagList = []
      }
    },
    onSearch () {
      // Toast('搜索')
        axios.get('/lan/goods_list?key_words=' + this.value + '&page=' + this.page + '&cat_id=' +this.cat_id).then(this.searchSucc).catch(err => console.log(err))
      },
    searchSucc (res) {
      console.log(res.data.data)
      if (res.data.code == 2000) {
        this.enableLoadMore = true
        if (res.data.data.list.length == 0) {
          this.enableLoadMore = false
          // return false
        }
        if (this.clear_flag) {
          this.list = []
        }

        this.list = this.list.concat(res.data.data.list)
        this.count = res.data.data.count
        if (this.value !== '') {
          this.flag = true
        } else {
          this.flag = false
        // 重置图标
          this.active = 0
          this.count_sort = false
          this.countFlag = true
          this.priceFlag = true
          this.price_sort = false
        }
        this.onCancel()
        this.clear_flag = false
      }
    },
    changfouce(){
      this.$nextTick((x)=>{
        /*this.$refs.inputs.focus();*/
        // input自动聚焦
        this.$refs.inputs.firstChild.firstChild.childNodes[1].firstChild.firstChild.focus()
      })
    },
    choose (val) {
      this.active = val
      switch (val) {
        case 0:
          this.page = 1
          this.list = []
          this.enableLoadMore = true
          this.countFlag = true
          this.count_sort = false
          this.priceFlag = true
          this.price_sort = false
          this.order_by = 'all'
          this.order_by_val = '0'
          //获取数据
          this.getGoods()
          break
        case 1:
          this.page = 1
          this.list = []
          this.enableLoadMore = true
          this.priceFlag = true
          this.price_sort = false
          this.countFlag = false
          this.count_sort = !this.count_sort
          // 1为销量排序
          this.order_by = 'sales_num'
          // count_sort为true则为降序0，为false则为升序1
          if (this.count_sort) {
            this.order_by_val = '0'
          } else {
            this.order_by_val = '1'
          }
          //获取数据
          this.getGoods()
          break
        case 2:
          this.page = 1
          this.list = []
          this.enableLoadMore = true
          this.countFlag = true
          this.count_sort = false
          this.priceFlag = false
          this.price_sort = !this.price_sort
          // 2为价格排序
          this.order_by = 'shop_price'
          // price_sort为true则为降序0，为false则为升序1
          if (this.price_sort) {
            this.order_by_val = '0'
          } else {
            this.order_by_val = '1'
          }
          //获取数据
          this.getGoods()
          break
      }
    },
    // showNo () {
    //   this.noFocus = true
    //   this.onFocus = false
    // },
    showOn () {
      this.onFocus = true
      this.noFocus = false
      this.changfouce()
      // 弹出搜索层的时候重置page为1
      this.page = 1
      this.getKeywords()
      this.clear_flag = true
    },
    onCancel () {
      // console.log(this.value)
      this.noFocus = true
      this.onFocus = false
    },
    onClear () {
      this.value = ''
    },
    toDetail (goods_id) {
      this.$router.push({path: '/shop/detail', query: {goods_id: goods_id}})
    },
    getItem () {
      let obj = {name: '美白再生因子深沉抗皱++', price: '399.99'}
      this.list.push(obj)
    },
    onLoadMore(done) {
      setTimeout(()=>{
        if(!this.enableLoadMore) {
          return
        }
        this.page++
        if (this.value == '') {
          this.getGoods();
        } else {
          this.onSearch()
        }
        done();
      }, 200)
    },
    pickKeywords (keywords) {
      this.value = keywords
      this.onSearch()
    }
  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    margin-bottom: 100px;
    background-color: #fff;
  }
  .nav-wrap {}
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 20px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .nav-active {
    color: #15B0AE;
    position: relative;
  }
  .nav-active::after {
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 175%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .box-wrap {
    box-sizing: border-box;
    padding: 0 15px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .box {
    width: 50%;
    margin-bottom: 20px;
  }
  .box:nth-child(2n+1) {
    box-sizing: border-box;
    padding-right: 5px;
  }
  .box:nth-child(2n) {
    box-sizing: border-box;
    padding-left: 5px;
  }
  .box-border {
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .box-img {
    width: 100%;
    height: 150px;
  }
  .name {
    font-size: 14px;
    padding: 18px 10px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .money{
    color: #15B0AE;
    font-size: 14px;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
  }
  .lately {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 15px;
    color: #999;
    font-size: 13px;
  }
  .lately div{
    display: flex;
    align-items: center;
  }
  .lately span{
    padding-left: 5px;
    box-sizing: border-box;
  }
  .tag-wrap {
    box-sizing: border-box;
    padding: 0 15px;
  }
  .tag{
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
  }
  .tag-item{
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding: 5px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  .onFocus {
    min-height: 100vh;
    z-index: 999;
    display: block;
    position: fixed;
    left: 0; top: 0; right: 0; bottom: 0;
    background: #fff;
  }
  .search-res{
    font-size: 13px;
    color: #999;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .search-wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
  }
  .search-input{
    width: 90%;
    height: 30px;
    line-height: 30px;
    background: url("../../../static/images/index/search.png") no-repeat;
    background-position: 3% center;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding-left: 10%;
  }
</style>
