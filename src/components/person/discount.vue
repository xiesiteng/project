<template>
    <div>
      <div class="main">
        <div class="discount">
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
  }
  .discount{
    width: 100%;
    height: 105px;
    border-radius: 5px;
    display: flex;

  }
  .dis-left{
    width: 30%;
    height: 100%;
    background: url("../../../static/images/index/list_bg.png") no-repeat;
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
    width: 70%;
    padding: 20px 15px;
    box-sizing: border-box;
    border: 1px solid #eee;
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
</style>
