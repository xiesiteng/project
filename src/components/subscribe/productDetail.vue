<template>
  <div class="main">
    <div>
      <!--<img src="../../../static/images/index/box.png" alt="" class="imgSize">-->
      <img :src="goods_images" alt="" class="imgSize">
    </div>
    <!--信息-->
    <div class="pro">
      <div class="pro-info">
        <p>￥<em>{{proInfo.shop_price}}</em></p>
        <!--<span class="pre-price">￥599.9</span>-->
        <p class="num">预约数:{{proInfo.store_count}}</p>
      </div>
      <div class="pro-name">
        <p>{{proInfo.goods_name}}</p>
      </div>
    </div>
    <!--公告-->
    <div class="notice">
      <img src="../../../static/images/index/laba.png" alt="" class="noticeImg">
      <p>积分兑换的商品不支持服务退换</p>
    </div>

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
    <!--商品详情-->
    <div class="intro">
      <div class="intro-title">
        <span></span>
        <p>商品详情</p>
      </div>
      <div>
        <img src="../../../static/images/index/detail.png" alt="" class="detailImg">
      </div>
    </div>
    <!--按钮-->
    <div class="btn">立即预约</div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "productDetail",
  data () {
    return {
      goods_id: '',
      goods_images: '',
      proInfo: {},
      store_info: {}
    }
  },
  mounted() {
    this.goods_id = this.$route.query.goods_id
    this.getDetail()
  },
  methods: {
    getDetail () {
      axios.get('/lan/goods_detail?goods_id=' +this.goods_id).then(this.getDetailSucc).catch(err => console.log(err))
    },
    getDetailSucc (res) {
      // console.log(res.data.data)
      if (res.data.code == 2000) {
        this.goods_images = res.data.data.goods_images[0].image_url
        this.proInfo = res.data.data.list
        // this.store_info = res.data.data.store_info
      }
    }
  }
}
</script>

<style scoped>
  .main{
    background-color: #f5f5f5;
    min-height: 100vh;
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
  .detailImg{
    width: 100%;
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
  /*.pre-price{
    color: #bbb;
    text-decoration: line-through;
    position: absolute;
    left: 90px;
  }*/
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
  .intro{
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 15px;
    padding-bottom: 80px;
  }
  .intro-title{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .intro-title span{
    width: 4px;
    height: 20px;
    background-color: #2CC7C5;
    margin-right: 10px;
  }
  .btn{
    width: 100%;
    line-height: 50px;
    height: 50px;
    background-color: #15B0AE;
    color: #fff;
    font-size: 16px;
    text-align: center;
    position: fixed;
    bottom: 0;
  }
</style>
