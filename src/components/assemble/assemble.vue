<template>
    <div class="main">
      <div class="assemble-wrap">
        <div :class="['assemble-title', this.active == 1 ? 'assemble-title-active' : '']" @click="choose(1)">
          <p>超值拼团</p>
        </div>
        <div :class="['assemble-title', this.active == 2 ? 'assemble-title-active' : '']" @click="choose(2)">
          <p>限时拼团</p>
        </div>
      </div>
      <!--限时拼团部分-->
      <div class="time_ass">
        <div class="time-title" v-show="active == 2">
          <div>倒计时</div>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="item">{{ timeData.days }}</span>&nbsp;天&nbsp;
              <span class="item">{{ timeData.hours }}</span> :
              <span class="item">{{ timeData.minutes }}</span> :
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <!--拼团start-->
        <div class="ass-item" v-for="(item, index) in list" :key="index">
          <div class="item-left">
            <img :src="item.original_img" alt="" class="item-img">
            <!--<img src="../../../static/images/index/gznf.png" alt="" class="item-img">-->
          </div>
          <div class="item-right">
            <p class="title">{{item.goods_name}}</p>
            <div class="tag-wrap">
              <span>3人团</span>
              <span>需预约</span>
            </div>
            <!--价格和拼团按钮-->
            <div class="price-wrap">
              <div class="include">
                <em>￥</em>
                <p class="price">{{item.group_price}}</p>
              </div>
              <span class="pre-price">￥{{item.shop_price}}</span>
              <button class="ping" @click="toDetail(item.goods_id)">去拼团</button>
            </div>
          </div>
        </div>
        <!--拼团end-->
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "assemble",
  data () {
    return {
      active: 2,
      time: 10 * 60 * 60 * 1000,
      page: 1,
      list: [],
      endTime: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/goods_list?prom_type=' + this.active + '&page=' + this.page + '&cat_id=900').then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.list = res.data.data.list
        // 若endTime返回秒级时间戳则乘1000则得到毫秒级
        this.endTime = this.list[0].group_end_time
        var date1 = new Date()
        // var date2 = new Date(this.endTime)
        var s1 = date1.getTime(),s2 = this.endTime * 1000;
        var total = (s2 - s1);
        this.time = total
      }
    },
    choose (val) {
      this.active = val
      this.init()
    },
    toDetail (goods_id) {
      this.$router.push({path: '/assemble/detail', query: {goods_id: goods_id}})
    },
    fmtTime(number,format) {
      // 毫秒级的时间戳转换
      var date = new Date(number)
      // var date = new Date();
      var Y = date.getFullYear();
      var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      format=format.indexOf('Y')>-1?format.replace('Y',Y):format;
      format=format.indexOf('M')>-1?format.replace('M',M):format;
      format=format.indexOf('D')>-1?format.replace('D',D):format;
      format=format.indexOf('h')>-1?format.replace('h',h):format;
      format=format.indexOf('m')>-1?format.replace('m',m):format;
      format=format.indexOf('s')>-1?format.replace('s',s):format;
      return format;
    }
  }
}
</script>

<style scoped>
  .main{
    background-color: #fff;
    min-height: 100vh;
  }
  .assemble-wrap{
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #F3F3F3;
  }
  .assemble-title{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 48px;
    line-height: 48px;
  }
  .assemble-title-active{
    color: #15B0AE;
    position: relative;
  }
  .assemble-title-active::after{
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 88%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .time_ass{
    color: #000
  }
  .ass-item {
    padding: 16px 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
  }
  .item-img{
    width: 100px;
    height: 100px;
  }
  .item-right{
    width: 100%;
    background-color: #fff;
    padding-left: 16px;
    box-sizing: border-box;
  }
  .title{
    padding: 10px 0;
  }
  .tag-wrap{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .tag-wrap span:nth-child(1){
    background-color: #FF9C99;
    font-size: 10px;
    color: #fff;
    padding: 2px 15px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 25px;
  }
  .tag-wrap span:nth-child(2){
    background-color: #8AD7D6;
    font-size: 10px;
    color: #fff;
    padding: 2px 15px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .price-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .include{
  display: flex;
  }
  em{
  padding-top: 10px;
  font-style: normal;
  }
  .price{
  font-size: 24px;
  }
  .pre-price{
    text-decoration: line-through;
    color: #AAAAAA;
    padding-top: 10px;
    margin-left: -15px;
  }
  .ping{
    border: none;
    width: 64px;
    height: 28px;
    background-color: #15B0AE;
    color: #fff;
    font-size: 12px;
  }
  .time-title{
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    padding: 20px 15px 0 15px;
    box-sizing: border-box;
  }
  .time-title div{
    box-sizing: border-box;
    padding-right: 10px;
  }
  .item {
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    /*margin-right: 5px;*/
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #15B0AE;
    border-radius: 50%;
  }
</style>
