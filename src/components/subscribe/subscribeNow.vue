<template>
    <div>
      <div class="pro-info">
        <div class="info-left">
          <img src="../../../static/images/index/proManage.png" alt="">
          <span>{{info.goods_name}}</span>
        </div>
        <div class="info-right">
          <span>￥{{info.goods_price}}</span>
          <span>60分钟</span>
        </div>
      </div>
      <div class="space"></div>

      <!--时间选择-->
      <div class="timepicker">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          :min-date="minDate"
          :max-date="maxDate"
          title="请选择预约时间"
          cancel-button-text=" "
          confirm-button-text=" "
          @confirm="confirm"
          @change="change"
        />
      </div>

      <!--底部-->
      <div class="bottom-wrap">
        <div class="time">
          预约时间：<span>{{timeContent}}</span>
        </div>
        <button class="btn" @click="buyNow(info.goods_id)">立即预约</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "subscribeNow",
  data () {
    return{
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 11, 31),
      currentDate: new Date(),
      goods_id: '',
      info: {},
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      timeContent: ''
    }
  },
  mounted () {
    this.goods_id = this.$route.query.goods_id
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/settlement_cart?goods_id=' + this.goods_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.info = res.data.data.cart_selected
      }
    },
    confirm (value) {
      console.log(this.fmtTime(value, 'Y-M-D h:m'))
    },
    change (e) {
      // console.log(e.getValues())
      this.year = e.getValues()[0]
      this.month = e.getValues()[1]
      this.day = e.getValues()[2]
      this.hour = e.getValues()[3]
      this.minute = e.getValues()[4]
      console.log(this.year, this.month, this.day, this.hour, this.minute)
      this.timeContent = this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute
    },
    buyNow (goods_id) {
      if (!this.timeContent) {
        Toast('请选择预约时间')
        return false
      }
      this.$router.push({path: '/subscribe/detail', query: {goods_id: goods_id, year: this.year, month: this.month, day: this.day, hour: this.hour, minute: this.minute}})
    },

    // filter(type, options) {
    //   if (type === 'minute') {
    //     return options.filter(option => option % 20 === 0)
    //   }
    //   return options;
    // },
    // formatter(type, value) {
    //   switch (type) {
    //     case 'year':
    //       return `${value}年`
    //       break
    //     case 'month':
    //       return `${value}月`
    //       break
    //     case 'day':
    //       return `${value}日`
    //       break
    //     case 'hour':
    //       return `${value}时`
    //       break
    //     case 'minute':
    //       return `${value}分`
    //       break
    //   }
    //   return value;
    // },
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
  .space{
    background-color: #f5f5f5;
    width: 100%;
    height: 8px;
  }
  .pro-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 24px 15px;
  }
  .info-left{
    display: flex;
    align-items: center;
  }
  .info-left span{
    margin-left: 10px;
    font-size: 16px;
  }
  .info-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666666;
  }
  .bottom-wrap{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
  }
  .time{
    width: 60%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
  }
  .time span{
    color: #15B0AE;
  }
  .btn{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #15B0AE;
    color: #fff;
    border: none;
  }
  .timepicker{
    box-sizing: border-box;
    padding: 30px 15px;
    width: 100%;
    /*border: 1px solid #eee;*/
  }

</style>

<style>
  /*
  style标签中不设置scoped属性就可以重写类名覆盖vant组件的原样式
  */
  .timepicker .van-picker__confirm{
    color: #15B0AE;
  }
  .timepicker .van-datetime-picker{
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    height: 300px;
  }
  .timepicker .van-picker__toolbar{
    background-color: #F5F5F5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #666;
  }
</style>
