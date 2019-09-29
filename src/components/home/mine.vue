<template>
    <div>
      <div class="main">
        <div class="header">
          <div class="person-info">
            <img src="../../../static/images/index/logo1.png" alt="" class="head-img">
            <p>何大米</p>
            <img src="../../../static/images/index/more.png" alt="" class="more-size" @click="toPersonal">
          </div>
          <!--优惠积分收藏-->
          <div class="sec-info">
            <ul class="sec-info-item" @click="toDiscount">
              <li class="black">2</li>
              <li class="gray">优惠券</li>
            </ul>
            <ul class="sec-info-item" @click="toIntegral">
              <li class="black">2</li>
              <li class="gray">积分</li>
            </ul>
            <ul class="sec-info-item" @click="toCollection">
              <li class="black">2</li>
              <li class="gray">收藏</li>
            </ul>
          </div>
          <!--end-->
        </div>
        <!--我的订单-->
        <div class="myOrder">
          <div class="order-title">
            <p>我的订单</p>
            <span>查看我的订单&nbsp;&nbsp;
              <img src="../../../static/images/index/more.png" alt="" class="more">
            </span>
          </div>
          <!--四个图标-->
          <div class="four-icon">
            <div class="icon-wrap">
              <div class="icon">
                <span class="cir">12</span>
                <img src="../../../static/images/index/noPay.png" alt="">
              </div>
              <p>待付款</p>
            </div>
            <div class="icon-wrap">
              <div class="icon">
                <span class="cir">12</span>
                <img src="../../../static/images/index/noSend.png" alt="">
              </div>
              <p>待发货</p>
            </div>
            <div class="icon-wrap">
              <div class="icon">
                <span class="cir">12</span>
                <img src="../../../static/images/index/noRecive.png" alt="">
              </div>
              <p>待收货</p>
            </div>
            <div class="icon-wrap">
              <div class="icon">
                <span class="cir">12</span>
                <img src="../../../static/images/index/nobb.png" alt="">
              </div>
              <p>待评价</p>
            </div>
          </div>
        </div>
        <!--end-->
        <!--购物车 预约 兑换 拼团-->
        <div class="activity">
          <div class="act-item">
            <div>
              <img src="../../../static/images/index/shopCar.png" alt="">
              <span>购物车</span>
            </div>
            <img src="../../../static/images/index/more.png" alt="" class="more">
          </div>
          <div class="act-item">
            <div>
              <img src="../../../static/images/index/order.png" alt="">
              <span>我的预约</span>
            </div>
            <img src="../../../static/images/index/more.png" alt="" class="more">
          </div>
          <div class="act-item" @click="toExchange">
            <div>
              <img src="../../../static/images/index/dui.png" alt="">
              <span>我的兑换</span>
            </div>
            <img src="../../../static/images/index/more.png" alt="" class="more">
          </div>
          <div class="act-item">
            <div>
              <img src="../../../static/images/index/minePing.png" alt="">
              <span>我的拼团</span>
            </div>
            <img src="../../../static/images/index/more.png" alt="" class="more">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "mine.vue",
  data () {
      return {}
  },
  methods: {
    toPersonal () {
      this.$router.push('/person/personal')
    },
    toDiscount () {
      this.$router.push('/person/discount')
    },
    toIntegral () {
      this.$router.push('/person/integral')
    },
    toCollection () {
      this.$router.push('/person/collection')
    },
    toExchange () {
      this.$router.push('/integral/exchange')
    }
  }
  }
</script>

<style scoped>
  .more {
    width: 7px;
    height: 12px;
  }
  .main{
    min-height: 100vh!important;
    margin-bottom: 100px!important;
    padding: 0;
  }
  .header{
    height: 155px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px;
    /*background-color: pink;*/
    box-shadow: 0px 0px 8px 6px rgba(243,248,255,0.8);
  }
  .person-info{
    display: flex;
    align-items: center;
    position: relative;
  }
  .person-info p {
    margin-left: 15px!important;
    font-size: 16px;
  }
  .head-img {
    width: 40px;
    height: 40px;
  }
  .more-size{
    width: 7px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 15px;
  }
  .sec-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
  .sec-info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
  .black {
    color: #333333;
    padding-bottom: 10px;
  }
  .gray {
    color: #707070;
  }
  .myOrder {
    width: 100%;
    /*height: 146px;*/
    /*background-color: pink;*/
    padding: 0 15px;
    box-sizing: border-box;
  }
  .order-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: SourceHanSansCN-Light;
    box-sizing: border-box;
    padding: 15px 0;
    /*margin: 15px 0;*/
  }
  .order-title p{
    font-size: 16px;
    font-weight: 700;
  }
  .order-title span{
    color: #999999;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .four-icon{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .icon-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
  }
  .icon-wrap p{
    font-size: 14px;
    color: #333;
  }
  .icon {
    position: relative;
    margin-bottom: 10px;
  }
  .cir {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 17px;
    height: 17px;
    text-align: center;
    line-height: 17px;
    border-radius: 50%;
    font-size: 10px;
    border: 1px solid #15B0AE;
    color: #15B0AE;
    background-color: #fff;
    z-index: 999;
  }
  .activity {
    padding-top: 35px;
    box-sizing: border-box;
  }
  .act-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px 30px 15px;
  }
  .act-item span {
    font-size: 14px;
    padding-left: 15px;
    box-sizing: border-box;
  }
</style>
