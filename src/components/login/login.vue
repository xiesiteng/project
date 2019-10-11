<template>
    <div class="main">
        <div class="wrap">
          <div class="logo-wrap">
            <img src="../../../static/images/index/logo1.png" alt="" class="size">
            <p>余缦缦</p>
          </div>
          <!--注册-->
          <button class="rigs" @click="toRigster">注册</button>
          <!--输入框-->
          <div class="form-info">
            <div class="user">
              <img src="../../../static/images/index/user.png" alt="">
              <input type="text" placeholder="请输入昵称或手机号" class="userInput" v-model="username" @blur="leave">
            </div>

            <div class="password">
              <img src="../../../static/images/index/password.png" alt="">
              <input type="password" placeholder="请输入密码" class="userInput" v-model="password" @blur="leave">
            </div>

            <button class="forget" @click="toForget">忘记密码>></button>
          </div>
          <!--箭头-->
          <div class="login" @click="Login">
            <img src="../../../static/images/index/arrow.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
    name: "login.vue",
  data () {
      return {
        username: '',
        password: ''
      }
  },
  mounted() {

  },
  methods: {
    leave() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    toRigster () {
      this.$router.push('/rigster/rigster')
    },
    toForget () {
      this.$router.push('/login/forget')
    },
    Login () {

      axios.get('/lan/login?admin=' + this.username + '&password=' + this.password).then(this.loginSucc).catch(err => console.log(err))
    },
    loginSucc (res) {
      // console.log(res.data.data.tk)
      let token = res.data.data.tk
      if (res.data.code == 2000) {
        this.$store.commit('setToken', token)
        this.$router.push('/home/index')
        // console.log(localStorage.getItem('token'))
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
    margin-bottom: 50px;
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
  .forget{
    color: #15B0AE;
    font-size: 13px;
    border: none;
    background-color: #fff;
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
</style>
