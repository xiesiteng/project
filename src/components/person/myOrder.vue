<template>
    <div class="main">
      <div class="nav-wrap">
        <ul class="nav">
          <li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>
        </ul>
      </div>

      <div class="wrap" v-show="noProduct">
        <div class="hasNo">
          <img src="../../../static/images/index/car.png" alt="">
        </div>
        <p class="nothing">这里什么也没有</p>
      </div>

      <!--订单信息-->
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore" v-show="!noProduct">
        <div class="order-info" v-for="(item, index) in 5" :key="index">
          <div class="orderNum">
            <p>订单编号：20190801001</p>
            <span>待付款</span>
          </div>
          <div class="info" @click="toDetail">
            <div class="info-left">
              <img src="../../../static/images/index/gznf.png" alt="" class="size">
            </div>
            <div class="info-right">
              <p class="title">光子嫩肤</p>
              <p class="time">预约时间：2019-08-01  10:30am</p>
              <div class="button-group">
                <button @click.stop="cancelOrder">取消订单</button>
                <button @click.stop="send">提醒发货</button>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
</template>

<script>
import { Toast } from 'vant'
import scroll from '../common/scroll'
import axios from 'axios'
export default {
  name: "myOrder",
  data () {
    return {
      navList: ['全部', '待付款', '待发货', '待收货','已完成','已取消', '已评价'],
      active: 0,
      enableLoadMore: true,
      page: 1,
      noProduct: false,
      list: []
    }
  },
  components:{
    scroll
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let order_status = ''
      switch (this.active) {
        case 0:
          order_status = 'all'
          break
        case 1:
          order_status = '0'
          break
        case 2:
          order_status = '1'
          break
        case 3:
          order_status = '2'
          break
        case 4:
          order_status = '3'
          break
        case 5:
          order_status = '4'
          break
        case 6:
          order_status = '5'
          break
      }
      axios.get('/lan/order_lists?order_status=' + order_status + '&order_prom_type=0' + '&page=' + this.page).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        if (res.data.data.list.length == 0) {
          // this.noProduct = true
          this.enableLoadMore = false
        }
        this.list = this.list.concat(res.data.data.list)
      }
    },
    choose (val) {
      this.active = val
      this.page = 1
      this.enableLoadMore = true
      this.list = []
      this.init()
    },
    send () {
      Toast('提醒卖家发货发送消息成功')
    },
    onLoadMore(done) {
      setTimeout(()=>{
        if(!this.enableLoadMore) {
          return
        }
        this.page++
        this.init()
        done();
      }, 200)
    },
    toDetail (order_id) {
      this.$router.push({path: '/person/orderDetail'})
      // this.$router.push({path: '/person/orderDetail', query: {order_id: order_id}})
    },
    cancelOrder (order_id) {
      axios.get('/lan/order_cancel?order_id=' + order_id).then(this.cancelOrderSucc).catch(err => console.log(err))
    },
    cancelOrderSucc (res) {
      if (res.data.code == 2000) {
        this.init()
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
  .size{
    width: 100px;
    height: 100px;
  }
  .hasNo{
    display: flex;
    justify-content: center;
    margin: 50px auto;
  }
  .nothing{
    font-size: 18px!important;
    color: #666!important;
    text-align: center;
  }
  .nav-wrap {}
  .nav{
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 15px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .nav::-webkit-scrollbar {
    display:none
  }
  .nav li{
    box-sizing: border-box;
    padding-right: 35px;
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
    left: 27%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .orderNum{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    background-color: #FCFCFC;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .orderNum p{
    color: #666;
  }
  .orderNum span{
    color: #15B0AE;
  }
  .info{
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
  }
  .info-left{
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .info-right{
    width: 70%;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .title{
    font-weight: 600;
    font-size: 16px;
    color: #666;
  }
  .time{
    color: #999;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .button-group{
    display: flex;
    justify-content: flex-end;
  }
  .button-group button:nth-child(1) {
    border: none;
    width: 70px;
    height: 28px;
    font-size: 13px;
    background-color: #fff;
    color: #666;
    border: 1px solid #BBBBBB;
    box-sizing: border-box;
    border-radius: 14px;
  }
  .button-group button:nth-child(2) {
    border: none;
    width: 70px;
    height: 28px;
    font-size: 13px;
    background-color: #fff;
    color: #15B0AE;
    border: 1px solid #15B0AE;
    box-sizing: border-box;
    border-radius: 14px;
    margin-left: 20px;
  }
</style>
