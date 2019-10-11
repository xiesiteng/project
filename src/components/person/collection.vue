<template>
    <div class="main">
      <div class="coll-wrap" v-show="noCollect">
        <div class="coll-img">
          <img src="../../../static/images/index/nocol.png" alt="">
        </div>
        <p class="hasNo">这里什么也没有</p>
      </div>

      <div class="time_ass" v-show="!noCollect">

        <!--拼团start-->
        <div class="ass-item" v-for="(item, index) in collect_list" :key="index">
          <div class="item-left">
            <!--<img src="../../../static/images/index/gznf.png" alt="" class="item-img">-->
            <img :src="item.original_img" alt="" class="item-img">
          </div>
          <div class="item-right">
            <p class="title">{{item.goods_name}}</p>
            <div class="tag-wrap">
              <p>剩余名额{{item.store_count}}个</p>
            </div>
            <!--价格和拼团按钮-->
            <div class="price-wrap">
              <div class="include">
                <em>￥</em>
                <p class="price">{{item.shop_price}}</p>
              </div>
              <img src="../../../static/images/index/coll_shop.png" alt="">
            </div>
          </div>
        </div>
        <!--拼团end-->
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "collection",
  data () {
    return{
      noCollect: false,
      collect_list: []
    }
  },
  mounted () {
    this.getCollection()
  },
  methods: {
    getCollection () {
      axios.get('/lan/collect_list').then(this.getCollectionSucc).catch(err => console.log(err))
    },
    getCollectionSucc (res) {
      // console.log(res.data)
      this.collect_list = res.data.data.result
      if (this.collect_list.length == 0) {
        this.noCollect = true
      }
    }
  }
}
</script>

<style scoped>
  .main{
    background-color: #fff;
    min-height: 100vh;
  }
  .coll-img{
    display: flex;
    justify-content: center;
    margin-top: 52px;
    margin-bottom: 30px;
  }
  .hasNo{
    color: #666;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }
  .time_ass{
    color: #000
  }

  .ass-item{
    padding: 16px 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
  }
  .item-img{
    width: 100px;
    height: 100px;
  }
  .item-right{
    width: 100%;
    background-color: #fff;
    padding-left: 16px;
    box-sizing: border-box;
  }
  .title{
    padding: 10px 0;
    color: #222;
    font-size: 16px;
    font-weight: 700;
  }
  .tag-wrap{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .tag-wrap p{
    font-size: 13px;
    color: #999;
  }

  .price-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .include{
    display: flex;
    align-items: baseline;
  }
  em{
    padding-top: 10px;
    font-style: normal;
  }
  .price{
    font-size: 24px
  }
  .pre-price{
    text-decoration: line-through;
    color: #AAAAAA;
    padding-top: 10px;
    margin-left: -15px;
  }
  .ping{
    border: none;
    width: 64px;
    height: 28px;
    background-color: #15B0AE;
    color: #fff;
    font-size: 12px;
  }
</style>
