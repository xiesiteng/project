<template>
  <div class="main">
    <div class="nav-wrap">
      <ul class="nav">
        <!--<li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>-->
        <li :class="[active == 2 ? 'nav-active' : '']" @click="choose(2)">未进行</li>
        <li :class="[active == 3 ? 'nav-active' : '']" @click="choose(3)">已完成</li>
      </ul>
    </div>
    <!--未进行-->
    <div class="order-info" v-for="(item, index) in list" :key="index" v-show="active == 2">
      <div class="orderNum">
        <p>预约编号：{{item.order_sn}}</p>
        <!--<span>拼团中</span>-->
        <img src="../../../static/images/index/delete.png" alt="" class="del_size" @click="delOrder(item.order_id)">
      </div>
      <div class="info" @click="toUnderway(item.order_id)">
        <div class="info-left">
          <img :src="item.goods.original_img" alt="" class="size">
        </div>
        <div class="info-right">
          <p class="title">{{item.goods.goods_name}}</p>
          <p class="time">预约时间：{{item.book_time}}</p>
          <div class="button-group">
            <button>确认到店</button>
          </div>
        </div>
      </div>
    </div>
    <!--已完成-->
    <div class="order-info" v-for="(item, index) in list" :key="index" v-show="active == 3">
      <div class="orderNum">
        <p>预约编号：{{item.order_sn}}</p>
        <!--<span>拼团成功</span>-->
        <img src="../../../static/images/index/delete.png" alt="" class="del_size">
      </div>
      <div class="info" @click="toCompleted(item.order_id)">
        <div class="info-left">
          <img :src="item.goods.original_img" alt="" class="size">
        </div>
        <div class="info-right">
          <p class="title">{{item.goods.goods_name}}</p>
          <p class="time">预约时间：{{item.book_time}}</p>
          <div class="button-group">
            <button class="finish">已完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
import axios from 'axios'
export default {
  name: "myAssemble",
  data () {
    return{
      active: 2,
      // navList: ['未进行', '已完成']
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/order_lists?order_prom_type=3' + '&order_status=' + this.active).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.list = res.data.data.list
      }
    },
    choose (val) {
      this.active = val
      this.init()
    },
    toUnderway (order_id) {
      this.$router.push({path: '/subscribe/underway', query: {order_id: order_id}})
    },
    toCompleted (order_id) {
      this.$router.push({path: '/subscribe/completed', query: {order_id: order_id}})
    },
    // 删除订单
    delOrder (order_id) {
      axios.get('/lan/order_delete?order_id=' + order_id).then(this.delOrderSucc).catch(err => console.log(err))
    },
    delOrderSucc (res) {
      if (res.data.code == 2000) {
        this.init()
      } else {
        Toast(res.data.msg)
      }
    }

  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
  }
  .del_size{
    width: 18px;
    height: 18px;
  }
  .size{
    width: 100px;
    height: 100px;
  }
  .nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .nav-active {
    color: #15B0AE;
    position: relative;
  }
  .nav-active::after {
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    background-size: 100% 100%;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 150%;
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
  .button-group button{
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #15B0AE;
    color: #fff;
    font-size: 13px;
    border: none;
    border-radius: 2px;
  }
  .finish{
    background-color: #AAAAAA!important;
  }
</style>
