<template>
    <div class="main">
      <div class="succ-wrap">
        <img src="../../../static/images/index/subSucc.png" alt="" class="succ">
      </div>
      <!--文字-->
      <p class="subTips">预约成功</p>
      <!--按钮-->
      <div class="scanMySub" @click="toMySub">查看我的预约</div>
    </div>
</template>

<script>
export default {
  name: "success",
  data () {
    return{}
  },
  methods: {
    toMySub () {
      this.$router.push('/subscribe/subscribe')
    }
  }
}
</script>

<style scoped>
  .succ-wrap{
    display: flex;
    justify-content: center;
  }
  .succ{
    width: 138px;
    height: 100px;
    margin: 52px auto 32px;
  }
  .subTips{
    font-size: 18px;
    color: #666;
    text-align: center;
  }
  .scanMySub{
    width: 300px;
    height: 45px;
    color: #fff;
    background-color: #15B0AE;
    font-size: 16px;
    line-height: 45px;
    text-align: center;
    border-radius: 20px;
    margin: 40px auto 0;
  }
</style>
