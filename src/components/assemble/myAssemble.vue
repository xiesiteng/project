<template>
    <div class="main">
      <div class="nav-wrap">
        <ul class="nav">
          <!--<li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>-->
          <li :class="[active == 1 ? 'nav-active' : '']" @click="choose(1)">拼团中</li>
          <li :class="[active == 2 ? 'nav-active' : '']" @click="choose(2)">已完成</li>
        </ul>
      </div>
      <!--正在拼团的拼团内容-->
      <div class="order-info" v-for="(item, index) in 3" :key="index" v-show="active == 1">
        <div class="orderNum">
          <p>2019-08-01  10:58:32</p>
          <span>拼团中</span>
        </div>
        <div class="info" @click="toAssem">
          <div class="info-left">
            <img src="../../../static/images/index/gznf.png" alt="" class="size">
          </div>
          <div class="info-right">
            <p class="title">光子嫩肤</p>
            <p class="time">￥399.9</p>
            <div class="button-group">
              <button>去邀请</button>
            </div>
          </div>
        </div>
      </div>
      <!--已完成的拼团-->
      <div class="order-info" v-for="(item, index) in 3" :key="index" v-show="active == 2">
        <div class="orderNum">
          <p>2019-08-01  10:58:32</p>
          <span>拼团成功</span>
        </div>
        <div class="info">
          <div class="info-left">
            <img src="../../../static/images/index/gznf.png" alt="" class="size">
          </div>
          <div class="info-right">
            <p class="title">光子嫩肤</p>
            <p class="time">￥399.9</p>
            <div class="button-group">
              <button>立即预约</button>
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
      active: 1,
      navList: ['拼团中', '已结束']
    }
  },
  methods: {
    choose (val) {
      this.active = val
    },
    toAssem () {
      this.$router.push('/assemble/onAssemble')
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
</style>
