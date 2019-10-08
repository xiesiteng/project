<template>
    <div class="main">
      <div class="header">
        <div class="header-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="size">
        </div>
        <div class="header-right">
          <p>光子嫩肤</p>
          <span>￥399.9</span>
        </div>
      </div>
      <div class="space"></div>
      <!--倒计时-->
      <div class="count">
        
        <p class="count-title" v-show="true">
          剩余
          <van-count-down
            :time="time"
            @finish="finish"
            class="countDown"/>
          结束
        </p>
        
        <!--拼团失败-->
        <div class="assem" v-show="false">
          <img src="../../../static/images/index/fail.png" alt="">
        </div>

        <!--拼团成功-->
        <div class="assem" v-show="false">
          <img src="../../../static/images/index/xiaolian.png" alt="">
        </div>

        <div class="person">
          <div class="cir">
            <span class="tag">团长</span>
          </div>
          <div class="cir"></div>
          <div class="cir"></div>
        </div>
        <p class="word">仅剩 2 人，快呼唤小伙伴参加吧！</p>
      </div>
      <div class="space"></div>
      <!--团长-->
      <div class="commander">
        <div class="commander-wrap">
          <div class="cir">
            <span class="tag">团长</span>
          </div>
          <p>何大米</p>
        </div>
        <p class="time-info">2019-08-01  10:58:32  开团</p>
      </div>
      <div class="space"></div>
      <!--玩法-->
      <div class="play">
        <div class="play-head">
          <span>拼团玩法</span>
          <div class="guize">
            <span>查看规则</span>
            <img src="../../../static/images/index/more_small.png" alt="">
          </div>
        </div>
        <img src="../../../static/images/index/buzou.png" alt="" class="bzImg">
        <div class="buzou">
          <div class="buzou-item">
            <span>支付</span>
            <span>开团/参团</span>
          </div>
          <div class="buzou-item">
            <span>邀请</span>
            <span>好友参团</span>
          </div>
          <div class="buzou-item">
            <span>达3人，拼团成功</span>
            <span>逾期自动退款</span>
          </div>
        </div>
      </div>
      <!--邀请-->
      <div class="invate">去邀请</div>
      <div class="invate" v-show="false">更多拼团</div>
      <div class="invate" v-show="false">立即预约</div>
    </div>
</template>

<script>
export default {
  name: "onAssemble",
  data () {
    return{
      time: 60 * 60 * 60 * 1000
    }
  },
  methods: {
    finish () {
      console.log(111)
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
  .space{
    width: 100%;
    height: 8px;
    background-color: #f5f5f5;
  }
  .header{
    padding: 20px 15px;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    /*margin-bottom: 8px;*/
  }
  .header-left{
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .header-right{
    width: 70%;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .header-right p{
    font-size: 16px;
    padding-bottom: 18px;
  }
  .header-right span{
    color: #999999;
  }
  .count{
    background-color: #fff;
    /*margin-bottom: 8px;*/
  }
  .count-title{
    box-sizing: border-box;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .countDown{
    color: #CD0000;
    font-size: 24px;
    margin: 0 10px;
  }
  .person{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 28px;
  }
  .cir{
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px dashed #15B0AE;
    border-radius: 50%;
    position: relative;
  }
  .cir:nth-child(2){
    margin: 0 20px;
  }
  .tag{
    position: absolute;
    top: 23px;
    font-size: 10px;
    width: 40px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    background-color: #15B0AE;
    border-radius: 7px;
    color: #fff;
  }
  .word{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .commander{
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*margin-bottom: 8px;*/
  }
  .commander-wrap{
    display: flex;
    align-items: center;
  }
  .commander-wrap p{
    padding-left: 15px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .play{
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 15px;
    margin-bottom: 10px;
  }
  .play-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
  .guize {
    display: flex;
    align-items: center;
    color: #999;
  }
  .guize img{
    margin-left: 5px;
  }
  .buzou{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .buzou-item{
    width: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
  .buzou-item:nth-child(1) {
    margin-left: -30px;
  }
  .buzou-item:nth-child(2) {
    margin-left: 25px;
  }
  .bzImg{
    width: 100%;
  }
  .invate{
    background-color: #15B0AE;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: fixed;
    bottom: 0;
    position: fixed;
    bottom: 0;
  }
  .assem{
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .time-info{
    color: #666;
  }
</style>
