<template>
    <div>
      <div class="main">
        <div class="nav-wrap">
          <ul class="nav">
            <li v-for="(item, index) in goods_category" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item.name}}</li>
          </ul>
        </div>
        <!--tag标签-->
        <div class="subnav-wrap" v-show="subnavList.length !== 0">
          <van-tag round v-for="(item, index) in subnavList" :key="index" :class="['subnav' ,subActive == index ? 'subnav-active' : '']" @click="subChoose(index)">{{item.name}}</van-tag>
        </div>
        <!--tag标签-->
        <!--产品列表start-->
        <!--<van-list
          immediate-check:false
          offset:50
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="box-wrap">
            <div class="box" v-for="(item, index) in list" :key="index">
              &lt;!&ndash;多套一层div给border&ndash;&gt;
              <div class="box-border">
                <div>
                  &lt;!&ndash;<img src="../../../static/images/index/gznf.png" alt="" class="box-img">&ndash;&gt;
                  <img :src="item.original_img" alt="" class="box-img">
                </div>
                <p class="name">{{item.goods_name}}</p>
                <div class="order" @click="toSubscribe">预约</div>
              </div>
            </div>
          </div>
        </van-list>-->
        <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
        <div class="box-wrap">
          <div class="box" v-for="(item, index) in list" :key="index">
            <!--多套一层div给border-->
            <div class="box-border">
              <div>
                <!--<img src="../../../static/images/index/gznf.png" alt="" class="box-img">-->
                <img :src="item.original_img" alt="" class="box-img">
              </div>
              <p class="name">{{item.goods_name}}</p>
              <div class="order" @click="toSubscribe(item.goods_id)">预约</div>
            </div>
          </div>
        </div>
        </scroll>
        <!--产品列表end-->
      </div>
    </div>
</template>

<script>
import axios from 'axios'
// import scroll from '../common/scroll'
import scroll from '../common/scroll';
export default {
    name: "subscribe.vue",
  data () {
    return {
      enableLoadMore: true,
      // loading: false,
      // finished: false,
      over: false,
      flag: false,
      page: 1,
      cat_id: '',
      active: 0,
      subActive: 0,
      subnavList: [],
      list: [],
      goods_category: []
    }
  },
  components: {
    scroll
  },
  mounted() {
      this.getGoods()
  },
  methods: {
    getGoods () {
      axios.get('/lan/goods_list?is_order=1&page=' + this.page + '&cat_id=' + this.cat_id).then(this.getGoodsSucc).catch(err => console.log(err))
    },
    getGoodsSucc (res) {
      // console.log(res.data)
      if (res.data.data.list.length == 0) {
        this.enableLoadMore = false
      }
      // let obj = {name: '全部', son: []}
      this.list = this.list.concat(res.data.data.list)
      this.goods_category = res.data.data.goods_category
      // this.goods_category.unshift(obj)
    },
    choose (index) {
      this.active = index
      this.subnavList = this.goods_category[index].son
      if (this.subnavList.length == 0) {
        this.cat_id = this.goods_category[index].id
      } else {
        this.cat_id = this.goods_category[index].son[0].id
      }
      // console.log(this.cat_id)
      this.page = 1
      this.list = []
      this.enableLoadMore = true
      this.getGoods()
      // console.log(this.goods_category[index])
    },
    subChoose (index) {
      this.subActive = index
      this.cat_id = this.subnavList[index].id
      // console.log(this.subnavList)
      this.page = 1
      this.list = []
      this.enableLoadMore = true
      // console.log(this.goods_category)
      this.getGoods()
    },
    toSubscribe (goods_id) {
      this.$router.push({path: '/subscribe/productDetail', query: {goods_id: goods_id}})
    },
    onLoadMore(done) {
      setTimeout(()=>{
        if(!this.enableLoadMore) {
          return
        }
        this.page++
        this.getGoods();
        done();
      }, 200)
    },
    }
    // onLoad() {
    //   console.log(this.list.length, 11)
    //   if (this.over) {
    //     this.loading = false;
    //     this.finished = true;
    //     return false
    //   }
    //   // 异步更新数据
    //   setTimeout(() => {
    //
    //     this.loading = true
    //     this.page++
    //     this.getGoods()
    //     // 加载状态结束
    //     this.loading = false;
    //
    //     // 数据全部加载完成
    //     // if (this.over) {
    //     //   this.finished = true;
    //     // }
    //   }, 500);
    // }
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
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px 15px;
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

  .subnav-wrap {
    padding: 20px 15px 0 15px;
    box-sizing: border-box;
  }
  .subnav {
    /*padding: 3px 5px;*/
    padding: 0;
    background-color: #F1F1F1;
    color: #999999;
    width: 75px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0 10px 10px 0;
  }
  .subnav-active {
    color: #fff;
    background-color: #15B0AE;
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
    align-items: center;
  }
  .box-img {
    width: 100%;
    height: 150px;
  }
  .name {
    font-size: 16px;
    padding: 18px 5px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .order {
    color: #15B0AE;
    font-size: 16px;
    width: 120px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #15B0AE;
    border-radius: 15px;
    margin-bottom: 20px;
  }
</style>
