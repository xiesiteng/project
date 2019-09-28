<template>
    <div>
      <div class="success">
        <img src="../../../static/images/index/success.png" alt="">
      </div>
      <p class="succ-tips">支付成功</p>
      <div class="invite">邀请好友拼团</div>
    </div>
</template>

<script>
export default {
  name: "paySuccess"
}
</script>

<style scoped>
  .success{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 52px auto;
  }
  .succ-tips{
    font-size: 18px;
    color: #666;
    display: flex;
    justify-content: center;
    margin-bottom: 40px!important;
  }
  .invite{
    width: 300px;
    margin: 0 auto;
    height: 50px;
    background-color: #15B0AE;
    border-radius: 22px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }
</style>
