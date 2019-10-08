<template>
    <div>
      <div class="main">
        <div class="discount" v-for="(item, index) in 3" :key="index">
          <img src="../../../static/images/index/disc.png" alt="" class="bg">
          <div class="dis-left">
            <span>￥ <b>20</b></span>
            <p>优惠券</p>
          </div>
          <div class="dis-right">
            <p>全场消费满100可用</p>
            <span>2019-09-01前有效</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "discount"
}
</script>

<style scoped>
  .main{
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100vh;
  }
  .bg{
    position: absolute;
    width: 100%;
  }
  .discount{
    width: 100%;
    height: 105px;
    border-radius: 5px;
    display: flex;
    position: relative;
    /*background: url("../../../static/images/index/disc.png") no-repeat;*/
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
    position: absolute;
  }
  .dis-left b{
    font-size: 28px;
  }
  .dis-right{
    width: 70%;
    padding: 20px 15px;
    box-sizing: border-box;
    position: absolute;
    left: 30%;
    /*border: 1px solid #eee;*/
    /*border-bottom-right-radius: 5px;*/
    /*border-top-right-radius: 5px;*/
  }
  .dis-right p{
    font-size: 16px;
    color: #333;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .dis-right span{
    color: #999;
    font-size: 12px;
  }
</style>
