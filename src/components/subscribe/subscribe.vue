<template>
  <div class="main">
    <div class="nav-wrap">
      <ul class="nav">
        <li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>
      </ul>
    </div>
    <!--未进行-->
    <div class="order-info" v-for="(item, index) in 3" :key="index" v-show="active == 0">
      <div class="orderNum">
        <p>预约编号：20190801001</p>
        <!--<span>拼团中</span>-->
        <img src="../../../static/images/index/delete.png" alt="">
      </div>
      <div class="info" @click="toUnderway">
        <div class="info-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="size">
        </div>
        <div class="info-right">
          <p class="title">光子嫩肤</p>
          <p class="time">预约时间：2019-08-01  10:30am</p>
          <div class="button-group">
            <button>确认到店</button>
          </div>
        </div>
      </div>
    </div>
    <!--已完成-->
    <div class="order-info" v-for="(item, index) in 3" :key="index" v-show="active == 1">
      <div class="orderNum">
        <p>预约编号：20190801001</p>
        <!--<span>拼团成功</span>-->
        <img src="../../../static/images/index/delete.png" alt="">
      </div>
      <div class="info" @click="toCompleted">
        <div class="info-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="size">
        </div>
        <div class="info-right">
          <p class="title">光子嫩肤</p>
          <p class="time">预约时间：2019-08-01  10:30am</p>
          <div class="button-group">
            <button class="finish">已完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myAssemble",
    data () {
      return{
        active: 0,
        navList: ['未进行', '已完成']
      }
    },
    methods: {
      choose (val) {
        this.active = val
      },
      toUnderway () {
        this.$router.push('/subscribe/underway')
      },
      toCompleted () {
        this.$router.push('/subscribe/completed')
      }
    }
  }
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
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
