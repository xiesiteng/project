<template>
    <div>
      <div class="main">
        <div class="person-wrap">
          <div class="person-item">
            <span>头像</span>
            <div class="right-center">
              <!--<img src="../../../static/images/index/logo1.png" alt="" class="headImg">-->
              <img :src="headimgurl" alt="" class="headImg">
              <img src="../../../static/images/index/more_small.png" alt="">
            </div>
          </div>
          <!--昵称-->
          <div class="person-item" @click="tochangeName">
            <span>昵称</span>
            <div class="right-center">
              <span>{{info.nickname}}</span>
              <img src="../../../static/images/index/more_small.png" alt="">
            </div>
          </div>
          <!--手机号-->
          <div class="person-item">
            <span>手机号</span>
            <div class="right-center">
              <p>{{info.mobile}}</p>
            </div>
          </div>
          <!--地址-->
          <div class="person-item" @click="toAddress">
            <span>我的地址</span>
            <div class="right-center">
              <img src="../../../static/images/index/more_small.png" alt="">
            </div>
          </div>
        </div>
        <!--退出账号-->
        <div class="out">退出账号</div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "personal",
   data () {
      return {
        info: {}
      }
   },
   mounted () {
    this.getInfo ()
   },
   methods: {
     toAddress () {
       this.$router.push('/person/mineAddress')
     },
     tochangeName () {
       this.$router.push('/person/changeName')
     },
     getInfo () {
       axios.get('/lan/user_show').then(this.getInfoSucc).catch(err => console.log(err))
     },
     getInfoSucc (res) {
       this.info = res.data.data
     }
   }
  }
</script>

<style scoped>
  .headImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 23px;
  }
.person-wrap {
  box-sizing: border-box;
  padding: 0 15px;
}
  .person-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  .right-center {
    display: flex;
    align-items: center;
  }
  .right-center span {
    margin-right: 13px;
  }
  .out {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #15B0AE;
    position: fixed;
    bottom: 0;
  }
</style>
