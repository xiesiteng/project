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
</style>
