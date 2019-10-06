<template>
    <div>
      <div class="nav-wrap">
        <ul class="nav">
          <li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>
        </ul>
      </div>
      <!--订单信息-->
      <div class="order-info" v-for="(item, index) in 5" :key="index">
        <div class="orderNum">
          <p>订单编号：20190801001</p>
          <span>待付款</span>
        </div>
        <div class="info">
          <div class="info-left">
            <img src="../../../static/images/index/gznf.png" alt="" class="size">
          </div>
          <div class="info-right">
            <p class="title">光子嫩肤</p>
            <p class="time">预约时间：2019-08-01  10:30am</p>
            <div class="button-group">
              <button>取消订单</button>
              <button @click="send">提醒发货</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: "myOrder",
  data () {
    return {
      navList: ['全部', '待付款', '待发货', '待收货', '待评价'],
      active: 0
    }
  },
  methods: {
    choose (val) {
      this.active = val
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
