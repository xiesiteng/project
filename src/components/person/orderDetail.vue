<template>
    <div>
      <div class="head">
        <p class="tit">{{info.order_status_name}}</p>
        <!--<p>卖家已发货，请准备收货</p>-->
        <!--物流start-->
        <div class="logistics">
          <div>
            <p>物流信息： {{info.shipping_name}}  {{info.shipping_code}}</p>
            <span class="time">{{info.add_time}}</span>
          </div>
          <img src="../../../static/images/index/more_small.png" alt="">
        </div>
        <!--物流end-->
      </div>
      <!--商品信息-->
      <div class="pro-wrap">
        <div class="pro" v-for="(item, index) in order_goods" :key="index">
          <div class="pro-left">
            <img :src="item.original_img" alt="" class="size">
            <!--<img src="../../../static/images/index/gznf.png" alt="" class="size">-->
          </div>
          <div class="pro-right">
            <p>{{item.goods_name}}</p>
            <span>¥ <em>{{item.goods_price}}</em></span>
          </div>
        </div>
      </div>

      <div class="space"></div>

      <div class="wrap">
        <div class="user-info">
          <p class="title">收货地址</p>
          <div class="user-name">
            <span class="person">收件人:</span>
            <p>{{info.consignee}}</p>
          </div>
          <div class="user-name">
            <span class="person">电话号码:</span>
            <p>{{info.mobile}}</p>
          </div>
          <div class="user-name">
            <span class="person">收货地址:</span>
            <p>{{info.province}}{{info.city}}{{info.district}}{{info.address}}</p>
          </div>
        </div>

        <div class="user-info">
          <p class="title">订单信息</p>
          <div class="order-info">
            <span class="person">订单号码:</span>
            <p>{{info.order_sn}}</p>
          </div>
          <div class="order-info">
            <span class="person">下单时间:</span>
            <p>{{info.add_time}}</p>
          </div>
          <div class="order-info">
            <span class="person">支付方式:</span>
            <p>{{info.pay_name}}</p>
          </div>
        </div>

        <div class="basic-info">

            <div class="order-info">
              <span class="person">商品金额:</span>
              <p>￥{{info.total_amount}}</p>
            </div>
            <div class="order-info">
              <span class="person">运费:</span>
              <p>+￥{{info.total_postage}}</p>
            </div>
            <div class="order-info">
              <span class="person">优惠券抵扣:</span>
              <p>-￥{{info.coupon_price}}</p>
            </div>
            <div class="order-info">
              <span class="person">实付金额:</span>
              <p style="color: red">￥{{info.order_amount}}</p>
            </div>

        </div>
      </div>
      <!--按钮-->
      <div class="button-group">
        <button class="btn1" @click.stop="cancelOrder(info.order_id)" v-show="info.order_status == 0 || info.order_status == 1">取消订单</button>
        <button class="btn1" @click.stop="scanLog(info.order_id)" v-show="info.order_status == 2">查看物流</button>
        <button class="btn2" @click.stop="send" v-show="info.order_status == 1">提醒发货</button>
        <button class="btn2" @click.stop="toPay(info.order_id)" v-show="info.order_status == 0">去付款</button>
        <button class="btn2" @click.stop="recive(info.order_id)" v-show="info.order_status == 2">确认收货</button>
        <button class="btn2" @click.stop="evaluate(info.order_id)" v-show="info.order_status == 3">评价</button>
      </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
import axios from 'axios'
export default {
  name: "orderDetail",
  data () {
    return{
      order_id: '',
      info: {},
      order_goods: []
    }
  },
  mounted() {
    this.order_id = this.$route.query.order_id
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/order_details?order_id=' + this.order_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.info = res.data.data
        this.order_goods = res.data.data.order_goods
      } else {
        Toast(res.data.msg)
      }
    },
    cancelOrder (order_id) {
      axios.get('/lan/order_cancel?order_id=' + order_id).then(this.cancelOrderSucc).catch(err => console.log(err))
    },
    cancelOrderSucc (res) {
      if (res.data.code == 2000) {
        this.init()
      } else {
        Toast(res.data.msg)
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
      } else {
        Toast(res.data.msg)
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
    send () {
      Toast('提醒卖家发货发送消息成功')
    }

  }
}
</script>

<style scoped>
  .size{
    width: 100px;
    height: 100px;
  }
  em{
    font-style: normal;
    font-size: 24px;
  }
  .head{
    width: 100%;
    height: 115px;
    background-color: #15B0AE;
    color: #fff;
    box-sizing: border-box;
    padding: 23px 15px;
    position: relative;
  }
  .tit{
    padding-bottom: 10px;
    font-size: 24px;
  }
  .pro-wrap{
    box-sizing: border-box;
    padding-top: 70px;
  }
  .pro{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 15px;
    /*position: relative;*/
  }
  .pro-left{
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .pro-right{
    width: 70%;
    height: 100px;
    box-sizing: border-box;
    padding: 5px 0 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .pro-right p{
    font-size: 16px;
  }
  .logistics{
    /*width: 340px;*/
    width: 90%;
    height: 70px;
    border-radius: 8px;
    position: absolute;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 4px 4px 8px #bbb;
    box-sizing: border-box;
    padding: 0 15px;
    top: 90px;
    left: 5%;
  }
  .logistics p{
    color: #333;
    padding-bottom: 5px;
  }
  .time{
    color: #848484;
  }
  .space{
    background-color: #F5F5F5;
    height: 5px;
  }
  .wrap{
    box-sizing: border-box;
    padding: 0 15px;
  }
  .user-info{
    border-bottom: 1px solid #F5F5F5;
    box-sizing: border-box;
  }
  .user-name{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .order-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .person{
    color: #868686;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .title{
    font-size: 16px;
    padding: 16px 0;
    box-sizing: border-box;
  }
  .basic-info{
    padding-top: 16px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  .button-group{
    display: flex;
    justify-content: flex-end;
    padding: 15px 15px 35px 15px;
    box-sizing: border-box;
  }
  .btn1 {
    width: 85px;
    height: 27px;
    background-color: #fff;
    border-radius: 14px;
    color: #545454;
    font-size: 13px;
    border: 1px solid #EEEEEE;
  }
  .btn2 {
    width: 85px;
    height: 27px;
    background-color: #15B0AE;
    border-radius: 14px;
    color: #fff;
    font-size: 13px;
    border: 1px solid #15B0AE;
    margin-left: 10px;
  }

</style>
