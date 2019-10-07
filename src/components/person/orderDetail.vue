<template>
    <div>
      <div class="head">
        <p class="tit">待收货</p>
        <p>卖家已发货，请准备收货</p>
      </div>
      <!--商品信息-->
      <div class="pro">
        <!--物流start-->
        <div class="logistics">
          <div>
            <p>物流信息： 顺丰快递  2548974512648</p>
            <span class="time">2019-03-07 11:25:54</span>
          </div>
          <img src="../../../static/images/index/more_small.png" alt="">
        </div>
        <!--物流end-->
        <div class="pro-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="size">
        </div>
        <div class="pro-right">
          <p>光子嫩肤</p>
          <span>¥ <em>399</em></span>
        </div>
      </div>

      <div class="space"></div>

      <div class="wrap">
        <div class="user-info">
          <p class="title">收货地址</p>
          <div class="user-name">
            <span class="person">收件人:</span>
            <p>何大米</p>
          </div>
          <div class="user-name">
            <span class="person">电话号码:</span>
            <p>18283350462</p>
          </div>
          <div class="user-name">
            <span class="person">收货地址:</span>
            <p>四川省成都市武侯区晋阳新居</p>
          </div>
        </div>

        <div class="user-info">
          <p class="title">订单信息</p>
          <div class="order-info">
            <span class="person">订单号码:</span>
            <p>201910060934</p>
          </div>
          <div class="order-info">
            <span class="person">下单时间:</span>
            <p>2019-10-6 09:34</p>
          </div>
          <div class="order-info">
            <span class="person">支付方式:</span>
            <p>微信</p>
          </div>
        </div>

        <div class="basic-info">

            <div class="order-info">
              <span class="person">商品金额:</span>
              <p>￥399</p>
            </div>
            <div class="order-info">
              <span class="person">运费:</span>
              <p>+￥0.00</p>
            </div>
            <div class="order-info">
              <span class="person">优惠券抵扣:</span>
              <p>-￥20.00</p>
            </div>
            <div class="order-info">
              <span class="person">实付金额:</span>
              <p style="color: red">￥379.00</p>
            </div>

        </div>
      </div>
      <!--按钮-->
      <div class="button-group">
        <button>查看物流</button>
        <button>确认收货</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "orderDetail"
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
  }
  .tit{
    padding-bottom: 10px;
    font-size: 24px;
  }
  .pro{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 72px 15px 22px 15px;
    position: relative;
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
    top: -20px;
    left: 5%;
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
  .button-group button:nth-child(1) {
    width: 85px;
    height: 27px;
    background-color: #fff;
    border-radius: 14px;
    color: #545454;
    font-size: 13px;
    border: 1px solid #EEEEEE;
  }
  .button-group button:nth-child(2) {
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
