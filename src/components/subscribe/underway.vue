<template>
  <div class="main">
    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/store.png" alt="">
        <span>门店地址</span>
      </div>
      <div class="info-content">{{info.store_address}}</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/time.png" alt="">
        <span>预约时间</span>
      </div>
      <div class="info-content">{{info.book_time}}</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/project.png" alt="">
        <span>预约项目</span>
      </div>
      <div class="info-content" v-for="(item, index) in info.order_goods" :key="index">{{item.goods_name}}</div>
    </div>

    <div class="disc">
      <div>
        <img src="../../../static/images/index/dis.png" alt="">
        <span>优惠券使用</span>
      </div>
      <p class="use" v-show="info.coupon_price !== 0">￥{{info.coupon_price}}元优惠券</p>
      <p class="noUse" v-show="info.coupon_price == 0">未使用优惠券</p>
    </div>

    <div class="message">
      <img src="../../../static/images/index/message.png" alt="">
      <span>捎句话</span>
    </div>
    <div class="textarea-wrap">
      <textarea name="" id="" cols="30" rows="6" class="mess-content" disabled v-model="txt"></textarea>
    </div>
    <!--底部按钮-->
    <button class="btn" @click="sureArrive">确认到店</button>
  </div>
</template>

<script>
import {Toast} from 'vant'
import axios from 'axios'
export default {
  name: "underway",
  data () {
    return{
      txt: '',
      order_id: '',
      info: {}
    }
  },
  mounted() {
    this.order_id = this.$route.query.order_id
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/order_details?order_id=' + this.order_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.info = res.data.data
        this.txt = res.data.data.user_note
        if (this.txt == '') {
          this.txt = '暂无信息哦'
        }
      }
    },
    sureArrive () {
      axios.get('/lan/order_finish?order_id=' + this.order_id).then(this.sureArriveSucc).catch(err => console.log(err))
    },
    sureArriveSucc (res) {
      if (res.data.code == 2000) {
        Toast('操作成功')
        setTimeout(
          () =>this.$router.push('/subscribe/subscribe'), 2000)
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
    background-color: #fff;
  }
  .btn{
    width: 100%;
    height: 50px;
    background-color: #15B0AE;
    color: #fff;
    border: none;
    position: fixed;
    bottom: 0;
    font-size: 16px;
  }
  .use{
    color: #FF9C99;
  }
  .noUse {
    color: #999;
  }
</style>
