<template>
  <div>
    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/store.png" alt="">
        <span>门店地址</span>
      </div>
      <div class="info-content">{{store_address}}</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/time.png" alt="">
        <span>预约时间</span>
      </div>
      <div class="info-content">{{month}}-{{day}}&nbsp;{{hour}}:{{minute}}</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/project.png" alt="">
        <span>预约项目</span>
      </div>
      <div class="info-content">{{info.goods_name}}</div>
    </div>

    <div class="disc">
      <div>
        <img src="../../../static/images/index/dis.png" alt="">
        <span>优惠券使用</span>
      </div>
      <p class="use" @click="chooseDiscount">
        <span v-show="!noDis && !disFlag">{{count}}张优惠券可用</span>
        <span v-show="disFlag">￥{{dis_money}}元优惠券</span>
        <span class="none" v-show="noDis">暂无优惠券</span>
        <img src="../../../static/images/index/more_small.png" alt="">
      </p>
    </div>

    <div class="message">
      <img src="../../../static/images/index/message.png" alt="">
      <span>捎句话</span>
    </div>
    <div class="textarea-wrap">
      <textarea name="" id="" cols="30" rows="6" class="mess-content" v-model="txt" placeholder="可填写偏好或要求，不超过200字" maxlength="200"></textarea>
    </div>
    <!--底部按钮-->
    <div class="settlement">
      <div class="total">
        结算: <span>￥{{total}}</span>
      </div>
      <button class="btn" @click="subscribe">立即预约</button>
    </div>

    <!--优惠券弹出层-->
    <van-popup
      v-model="showDis"
      closeable
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div class="disc-wrap">
        <div class="discount-item" v-for="(item, index) in disList" :key="index">
          <div class="dis-left">
            <span>￥ <b>{{item.money}}</b></span>
            <p>优惠券</p>
          </div>
          <div class="dis-right">
            <p>全场消费满{{item.condition}}可用</p>
            <span>{{fmtTime(item.use_end_time, 'Y-M-D')}}前有效</span>
          </div>
          <div class="dis-check">
            <!--<img src="../../../static/images/index/nocheck.png" alt="" v-show="!checked" @click="select">
            <img src="../../../static/images/index/check.png" alt="" v-show="checked" @click="select">-->
            <van-radio-group v-model="radio">
              <van-radio :name="index" @click="select(index)">

                <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.checked ? activeIcon : inactiveIcon"
                >
              </van-radio>
            </van-radio-group>
          </div>
        </div>
      </div>
      <button class="btn-sure" @click="pickItem">确认使用</button>
    </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "detail",
  data () {
    return{
      radio: '1',
      activeIcon: '../../../static/images/index/check.png',
      inactiveIcon: '../../../static/images/index/nocheck.png',
      noDis: false,
      txt: '',
      showDis: false,
      checked: false,
      goods_id: '',
      info: {},
      store_address: '',
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      disList: [],
      count: '',
      dis_money: '',
      dis_id: '',
      disFlag: false
    }
  },
  computed: {
    total () {
      return (this.info.goods_price - this.dis_money)
    }
  },
  mounted () {
    this.year = this.$route.query.year
    this.month = this.$route.query.month
    this.day = this.$route.query.day
    this.hour = this.$route.query.hour
    this.minute = this.$route.query.minute
    // console.log(this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute + ':00')
    // 接收
    this.goods_id = this.$route.query.goods_id
    this.init()
    this.getDis()
  },
  methods: {
    init () {
      axios.get('/lan/settlement_cart?goods_id=' + this.goods_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.info = res.data.data.cart_selected
        this.store_address = res.data.data.extra.store_address
      }
    },
    getDis () {
      axios.get('/lan/coupon_list?type=0').then(this.getDisSucc).catch(err => console.log(err))
    },
    getDisSucc (res) {
      if (res.data.code == 2000) {
        if (res.data.data.result.length == 0) {
          this.noDis = true
        } else {
          this.count = res.data.data.count
          this.disList = res.data.data.result

        }
      }
    },
    chooseDiscount () {
      if (!this.noDis) {
        this.showDis = true
      }
    },
    pickItem () {
      this.showDis = false
      this.dis_money = this.disList[this.radio].money
      this.dis_id = this.disList[this.radio].id
      this.disFlag = true
    },
    select (index) {
      // this.checked = !this.checked
      this.radio = index
    },
    subscribe () {
      let book_time = this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute + ':00'
      axios.get('/lan/order_add_cart?order_prop_type=3' + '&goods_id=' + this.goods_id + '&book_time=' + book_time + '&coupon_id=' + this.dis_id + '&user_note=' + this.txt).then(this.subscribeSucc).catch(err => console.log(err))
    },
    subscribeSucc (res) {
      this.$router.push()
    },
    fmtTime(number,format) {
      number = number * 1000
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
  .info-title{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px 5px 15px;
  }
  .info-title span{
    margin-left: 10px;
    color: #999;
  }
  .info-content{
    box-sizing: border-box;
    padding-left: 41px;
    font-size: 15px;
  }
  .disc{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    color: #999;
    border-bottom: 1px solid #EEEEEE;
  }
  .disc span{
    margin-left: 5px;
  }
  .message{
    box-sizing: border-box;
    padding: 15px;
  }
  .message span{
    margin-left: 5px;
    color: #999;
  }
  .textarea-wrap{
    box-sizing: border-box;
    padding: 0 15px;
  }
  .mess-content{
    resize: none;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.5;
    border-radius: 8px;
    padding: 16px 26px;
    color: #666666;
  }
  .use{
    color: #FF9C99;
  }
  .settlement{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .btn{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #15B0AE;
    color: #fff;
    font-size: 16px;
    border: none;
  }
  .total{
    width: 60%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
  .total span{
    color: #15B0AE;
  }

  .disc-wrap{
    padding: 50px 15px;
    box-sizing: border-box;
  }
  .discount-item{
    width: 100%;
    height: 95px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    background: url("../../../static/images/index/disc.png") no-repeat;
  }
  .dis-left{
    width: 30%;
    height: 100%;
    /*background: url("../../../static/images/index/disc.png") no-repeat;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;

  }
  .dis-left b{
    font-size: 28px;
  }
  .dis-right{
    width: 55%;
    padding: 20px 15px;
    box-sizing: border-box;
    /*border: 1px solid #eee;*/
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  .dis-right p{
    font-size: 16px;
    color: #333;
    font-weight: 600;
    padding-bottom: 25px;
  }
  .dis-right span{
    color: #999;
    font-size: 12px;
  }
  .dis-check{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*.cir{
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 50%;
  }*/
  .btn-sure{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    color: #fff;
    background-color: #15B0AE;
    position: fixed;
    bottom: 0;
  }
  .none{
    color: #999999!important;
  }
</style>
