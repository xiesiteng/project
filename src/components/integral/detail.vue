<template>
  <div class="main">
    <div>
      <van-swipe  indicator-color="white">
        <van-swipe-item v-for="(item, index) in goods_images" :key="index">
          <img :src="item.image_url" alt="" class="imgSize">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--信息-->
    <div class="pro">
      <div class="pro-info">
        <div class="JF">
          <span class="dui">兑</span>
          <p><em>{{info.exchange_integral}}</em>&nbsp;积分</p>
        </div>
        <span class="pre-price">￥599.9</span>
        <p class="num">剩余名额{{info.store_count}}个</p>
      </div>
      <div class="pro-name">
        <p>{{info.goods_name}}</p>
      </div>
    </div>
    <!--公告-->
    <div class="notice">
      <img src="../../../static/images/index/notice.png" alt="" class="noticeImg">
      <p>积分兑换的商品不支持服务退换</p>
    </div>
    <!--促销-->
    <!--<div class="cux">
      <span>促销</span>
      <p>【3人团】拼团结束恢复￥599.9，还剩29个名额</p>
    </div>-->
    <!--位置-->
    <div class="basic">
      <div class="basic-left">
        <img src="../../../static/images/index/logo1.png" alt="" class="logoImg">
      </div>
      <div class="basic-right">
        <h3>余缦缦·华侨城店</h3>
        <p>经营范围：派对、美肤、饰品、鲜花、咖啡</p>
        <p>门店地址：南山区华侨城 创意文化园北园A1栋首层114号</p>
        <p>预约电话：0755-26911393</p>
      </div>
    </div>
    <!--立即兑换-->
    <div class="rightNow" @click="toIntegralPay(info.goods_id)">兑换预约</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "detail",
  data () {
    return{
      goods_id: '',
      goods_images: [],
      info: {}
    }
  },
  mounted() {
    this.goods_id = this.$route.query.goods_id
    this.init()
  },
  methods:{
    toIntegralPay (goods_id) {
      this.$router.push({path: '/integral/integralPay', query: {goods_id: goods_id}})
    },
    init () {
      axios.get('/lan/goods_detail?goods_id=' + this.goods_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.goods_images = res.data.data.goods_images
        this.info = res.data.data.list
      }
    }
  }
}
</script>

<style scoped>
  .imgSize{
    width: 100%;
    height: 375px;
  }
  em{
    padding-top: 10px;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
  }
  h3{
    margin: 0;
    padding-bottom: 15px;
  }
  .imgSize{
    width: 100%;
    height: 375px;
  }
  .logoImg{
    width: 60px;
    height: 60px;
  }
  .pro{
    box-sizing: border-box;
    padding: 15px;
    background-color: #fff;
  }
  .pro-info{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    padding-bottom: 20px;
  }
  .pre-price{
    color: #bbb;
    text-decoration: line-through;
    position: absolute;
    left: 140px;
  }
  .num{
    color: #999;
  }
  .pro-name{
    font-size: 16px;
  }
  .notice{
    height: 40px;
    background-color: #D1F0F0;
    color: #15B0AE;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .noticeImg{
    width: 17px;
    height: 15px;
    margin-right: 15px;
  }
  .cux{
    box-sizing: border-box;
    padding: 15px 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .cux span{
    color: #999;
  }
  .basic{
    box-sizing: border-box;
    padding: 15px 15px;
    background-color: #fff;
    display: flex;
    margin-bottom: 10px;
  }
  .basic-left{
    width: 20%;
    display: flex;
    justify-content: center;
  }
  .basic-right{
    width: 80%;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .basic-right p{
    color: #666;
    padding-bottom: 10px;
  }
  .rightNow {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #15B0AE;
    font-size: 16px;
  }
  .JF{
    display: flex;
    align-items: baseline;
  }
  .dui{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #15B0AE;
    border-radius: 3px;
    margin-right: 5px;
  }
</style>
