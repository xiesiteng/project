<template>
    <div>
      <div class="suc">
        <img src="../../../static/images/index/succ.png" alt="">
      </div>
      <p class="word">恭喜你，注册成功</p>
      <div class="wrap">
        <button class="btn" @click="toLogin">去登录</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "success",
    data () {
      return {

      }
    },
    methods: {
      toLogin () {
        this.$router.push('/login/login')
      }
    }
  }
</script>

<style scoped>
  .suc{
    display: flex;
    justify-content: center;
    margin: 67px 0 36px 0;
  }
  .word{
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
  .wrap{
    display: flex;
    justify-content: center;
    margin-top: 33px;
  }
  .btn{
    background-color: #15B0AE;
    font-size: 16px;
    color: #fff;
    border: none;
    width: 345px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>
