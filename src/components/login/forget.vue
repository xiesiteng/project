<template>
  <div class="main">
    <div class="wrap">
      <div class="logo-wrap">
        <img src="../../../static/images/index/logo1.png" alt="" class="size">
        <p>余缦缦</p>
      </div>

      <!--输入框-->
      <div class="form-info">
        <div class="user">
          <img src="../../../static/images/index/phone.png" alt="">
          <input type="tel" placeholder="输入手机号" maxlength="11" class="userInput" v-model="phone" @blur="leave">
        </div>

        <div class="password">
          <img src="../../../static/images/index/safe.png" alt="">
          <input type="text" placeholder="输入验证码" class="safeInput" v-model="code" @blur="leave">
          <button class="safe">发送验证码</button>
        </div>

        <div class="password">
          <img src="../../../static/images/index/password.png" alt="">
          <input type="password" placeholder="设置新密码" class="userInput" v-model="password" @blur="leave">
        </div>
      </div>
      <!--箭头-->
      <div class="login" @click="verfity">
        <img src="../../../static/images/index/arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "rigster",
  data () {
    return {
      code: '',
      phone: '',
      password: ''
    }
  },
  mounted() {

  },
  methods: {
    leave() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    verfity () {
      if (!this.phone) {
        Toast('手机号不能为空')
        return false
      }
      if (!this.code) {
        Toast('验证码不能为空')
        return false
      }
      if (!this.password) {
        Toast('密码不能为空')
        return false
      }
      if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
        Toast('请输入正确的手机号码')
        return false
      }
      axios.get('/lan/forget_password?mobile=' + this.phone + '&code=' + this.code + '&password=' + this.password).then(this.verfitySucc).catch(err => console.log(err))
    },
    verfitySucc (res) {
      if (res.data.code == 2000) {
        this.$router.push('/login/success')
      } else {
        Toast(res.data.msg)
      }
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
  .safeInput{
    width: 123px;
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
  .safe{
    border: none;
    background-color: #000000;
    color: #fff;
    font-size: 13px;
    padding: 8px 15px;
    box-sizing: border-box;
    border-radius: 5px;
  }
</style>
