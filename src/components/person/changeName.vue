<template>
    <div>
      <div class="main">
        <div class="item">
          <input type="text" v-model="newName" class="inputClass" @input="judge">
          <img src="../../../static/images/index/cancel.png" alt="" @click="clear">
        </div>
        <!--按钮-->
        <button class="changePre" v-show="!enter">确认</button>
        <button class="changeSure" v-show="enter" @click="change">确认</button>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios'
export default {
  name: "changeName",
  data () {
    return{
      newName: '',
      enter: false,
      preName: ''
    }
  },
  watch: {
    newName: function () {
      if (this.newName !== this.preName) {
        this.enter = true
      }
    }
  },
  mounted() {
    this.preName = this.$route.query.nickname
    // this.getName()
    this.newName = this.preName
  },
  methods: {

    clear () {
      this.newName = ''
    },
    judge () {
      if (this.newName == this.preName) {
        this.enter = false
      }
    },
    change () {
      if (!this.newName) {
        Toast('请输入昵称')
        return false
      }
      axios.get('/lan/user_edit?nickname=' + this.newName).then(this.changeSucc).catch(err => console.log(err))
    },
    changeSucc (res) {
      if (res.data.code == 2000) {
        this.$router.push('/person/personal')
      } else {
        Toast(res.data.msg)
      }
    }
  }
}
</script>

<style scoped>
  .main{
    padding: 0 15px;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fff;
  }
  .item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
  }
  .inputClass{
    padding: 20px 0;
    width: 100%;
    border: none;
    font-size: 16px;
    color: #333;
  }
  .changeSure{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #15B0AE;
    border: none;
    border-radius: 5px;
  }
  .changePre {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #8BD8D7;
    border: none;
    border-radius: 5px;
  }
</style>
