<template>
  <div class="main">
    <div class="wrap">
      <div class="logo-wrap">
        <img src="../../../static/images/index/logo1.png" alt="" class="size">
        <p>余缦缦</p>
      </div>
      <!--注册-->
      <button class="rigs" @click="toLogin">登录</button>
      <!--输入框-->
      <div class="form-info">
        <div class="user">
          <img src="../../../static/images/index/user.png" alt="">
          <input type="text" placeholder="设置昵称" class="userInput" v-model="username" @blur="leave">
        </div>

        <div class="password">
          <img src="../../../static/images/index/password.png" alt="">
          <input type="password" placeholder="设置密码" class="userInput" v-model="password" @blur="leave">
        </div>

        <div class="password">
          <img src="../../../static/images/index/phone.png" alt="">
          <input type="tel" placeholder="设置手机号码" maxlength="11"  class="userInput" v-model="phone" @blur="leave">
        </div>
        <!--<button class="forget">忘记密码>></button>-->
      </div>
      <!--箭头-->
      <div class="login" @click="Rigster">
        <img src="../../../static/images/index/arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
  name: "rigster",
  data () {
    return {
      username: '',
      password: '',
      phone: ''
    }
  },
  mounted() {

  },
  methods: {
    Rigster () {
      if (!this.username) {
        Toast('请输入昵称')
        return false
      }
      if (!this.password) {
        Toast('请输入密码')
        return false
      }
      if (!this.phone) {
        Toast('请输入手机号码')
        return false
      }
      if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
        Toast('请输入正确的手机号码')
        return false
      }
      axios.get('/lan/register?admin=' + this.username + '&password=' + this.password + '&mobile=' + this.phone).then(this.rigSucc).catch(err => console.log(err))
      // axios.get('/lan/user_show').then(this.rigSucc).catch()
    },
    rigSucc (res) {
      console.log(res.data)
      if (res.data.code == 2000) {
        this.$router.push('/rigster/success')
      }
      if (res.data.code == 4000) {
        Toast(res.data.data.msg)
      }
    },
    toLogin () {
      this.$router.push('/login/login')
    },
    leave() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style scoped>
  .size{
    width: 44px;
    height: 44px;
  }
  .main{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: url("../../../static/images/index/loginBG.png") no-repeat;
    background-size: 100% 100%;
    /*position: relative;*/
  }
  .wrap{
    position: relative;
  }
  .logo-wrap{
    position: absolute;
    top: 14px;
    left: 53px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rigs{
    border: none;
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
  }
  .form-info{
    position: absolute;
    top: 155px;
    right: 20px;
  }
  .user{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #15B0AE;
    padding-bottom: 15px;
    box-sizing: border-box;
    margin-bottom: 22px;
  }
  .userInput{
    width: 218px;
    border: none;
    padding-left: 10px;
    box-sizing: border-box;
    color: #333;
    font-size: 16px;
  }
  .password{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #15B0AE;
    padding-bottom: 15px;
    box-sizing: border-box;
    margin-bottom: 22px;
  }
  /*.forget{*/
    /*color: #15B0AE;*/
    /*font-size: 13px;*/
    /*border: none;*/
    /*background-color: #fff;*/
  /*}*/
  .login{
    position: absolute;
    top: 360px;
    right: 30px;
    width: 192px;
    height: 192px;
    background: url("../../../static/images/index/loginBox.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
