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
        <div class="order-info" v-for="(item, index) in list" :key="index">
          <div class="orderNum">
            <p>订单编号：{{item.order_sn}}</p>
            <span>{{item.order_status_name}}</span>
          </div>
          <div class="info" @click="toDetail(item.order_id)">
            <div class="info-left">
              <img :src="item.goods.original_img" alt="" class="size">
            </div>
            <div class="info-right">
              <p class="title">{{item.goods.goods_name}}</p>
              <p class="time">预约时间：{{item.add_time}}</p>
              <div class="button-group">
                <button class="btn1" @click.stop="cancelOrder(item.order_id)" v-show="item.order_status == 0 || item.order_status == 1">取消订单</button>
                <button class="btn1" @click.stop="scanLog(item.order_id)" v-show="item.order_status == 2">查看物流</button>
                <button class="btn2" @click.stop="send" v-show="item.order_status == 1">提醒发货</button>
                <button class="btn2" @click.stop="toPay(item.order_id)" v-show="item.order_status == 0">去付款</button>
                <button class="btn2" @click.stop="recive(item.order_id)" v-show="item.order_status == 2">确认收货</button>
                <button class="btn2" @click.stop="evaluate(item.order_id)" v-show="item.order_status == 3">评价</button>
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
    if (this.$route.query.active == 1) {
      this.active = this.$route.query.active
      this.init()
    }
    if (this.$route.query.active == 2) {
      this.active = this.$route.query.active
      this.init()
    }
    if (this.$route.query.active == 3) {
      this.active = this.$route.query.active
      this.init()
    }
    if (this.$route.query.active == 4) {
      this.active = this.$route.query.active
      this.init()
    }
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
      // this.$router.push({path: '/person/orderDetail'})
      this.$router.push({path: '/person/orderDetail', query: {order_id: order_id}})
    },
    cancelOrder (order_id) {
      axios.get('/lan/order_cancel?order_id=' + order_id).then(this.cancelOrderSucc).catch(err => console.log(err))
    },
    cancelOrderSucc (res) {
      if (res.data.code == 2000) {
        this.init()
      }
    },
    toPay (order_id) {
      axios.get('/lan/quickly_pay?order_id=' + order_id).then(this.paySucc).catch(err => console.log(err))
    },
    paySucc (res) {

    },
    recive (order_id) {
      axios.get('/lan/order_finish?order_id=' + order_id).then(this.reciveSucc).catch(err => console.log(err))
    },
    reciveSucc (res) {
      if (res.data.code == 2000) {
        this.init()
      }
    },
    evaluate (order_id) {
      this.$router.push({path: '/person/evaluate'})
      // this.$router.push({path: '/person/evaluate', query: {order_id: order_id}})
    },
    scanLog (order_id) {
      this.$router.push({path: '/person/logistics'})
      // this.$router.push({path: '/person/logistics', query: {order_id: order_id}})
    },


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
  .btn1 {
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
  .btn2 {
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
