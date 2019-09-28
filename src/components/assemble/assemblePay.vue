<template>
    <div class="main">
      <div class="pro-info">
        <div class="info-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="infoImg">
        </div>
        <div class="info-right">
          <p>光子嫩肤</p>
          <div class="price">￥ <span>399.9</span></div>
        </div>
      </div>
      <div class="space"></div>
      <div class="phoneCell">
        <span>手机号</span>
        <p>18283350462</p>
      </div>
      <!--底部结算-->
      <div class="pay-info">
        <div class="pay-money">
          结算总计：<span>￥399.9</span>
        </div>
        <button class="topay" @click="pay">立即支付</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "assemblePay",
  data () {
    return{

    }
  },
  mounted() {
  },
  methods:{
    pay () {
      this.$router.push('/assemble/paySuccess')
    }
  }
}
</script>

<style scoped>
  .infoImg{
    width: 100px;
    height: 100px;
  }
  .pro-info{
    padding: 20px 15px;
    box-sizing: border-box;
    display: flex;
  }
  .info-left{
    width: 30%;
  }
  .info-right{
    width: 70%;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .info-right p{
    font-size: 16px;
  }
  .price{
    padding-top: 50px;
  }
  .price span{
    font-size: 24px;
  }
  .space{
    width: 100%;
    height: 5px;
    background-color: #f5f5f5;
  }
  .phoneCell{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  .phoneCell p{
    color: #666;
  }
  .pay-info{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .pay-money{
    width: 60%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 14px;
  }
  .pay-money span{
    color: #15B0AE;
  }
  .topay{
    width: 40%;
    height: 100%;
    line-height: 50px;
    color: #fff;
    border: none;
    background-color: #15B0AE;
  }
</style>
