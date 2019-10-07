<template>
  <div class="main">
    <div>
      <img src="../../../static/images/index/box.png" alt="" class="imgSize">
    </div>
    <!--信息-->
    <div class="pro">
      <div class="pro-info">
        <p>￥<em>399.9</em></p>
        <!--<span class="pre-price">￥599.9</span>-->
        <p class="num">预约数:598</p>
      </div>
      <div class="pro-name">
        <p>【光子嫩肤】全面解决皮肤暗沉/毛孔粗大/粗糙/祛斑/小细纹  重回少女肌】</p>
      </div>
    </div>
    <!--公告-->
    <div class="notice">
      <img src="../../../static/images/index/laba.png" alt="" class="noticeImg">
      <p>积分兑换的商品不支持服务退换</p>
    </div>
    <!--促销-->
    <!--<div class="cux">
      <span>促销</span>
      <p>【3人团】拼团结束恢复￥599.9，还剩29个名额</p>
    </div>-->
    <!--玩法-->
    <!--<div class="play">
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
    <!--<div class="button-group">
      <div class="tuan" style="border-right: 1px solid #fff" @click="toPay">
        <span>￥399.9</span>
        <p>开团(3人团)</p>
      </div>
      <div class="tuan">
        <span>￥599.9</span>
        <p>单独预约</p>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: "productDetail",
    data () {
      return {

      }
    },
    mounted() {
    },
    methods: {
      /*toPay () {
        this.$router.push('/assemble/assemblePay')
      }*/
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
    padding-bottom: 30px;
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
  }
</style>
