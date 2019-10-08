<template>
    <div>
      <div class="main">
        <div class="new-wrap">
          <div class="new-item">
            <span>收货人</span>
            <input type="text" v-model="name" placeholder="请输入收货人姓名" >
          </div>
          <div class="new-item">
            <span>手机号</span>
            <input type="text" v-model="phone" placeholder="请输入手机号码" maxlength="11" @blur="judgePhone">
          </div>
          <!--地区选择start-->
          <div class="new-item" v-show="!showpick" @click="showAddressChuang">

              <span>省、市、区</span>
              <img src="../../../static/images/index/more_small.png" alt="">

          </div>
          <!--三级联动选择后显示-->
          <div class="new-item" v-show="showpick" @click="showAddressChuang">
            <span>省、市、区</span>
            {{userAddress}}
          </div>
          <!--三级联动选择后显示-->
          <!--地区选择end-->
          <div class="new-item">
            <span>详细地址</span>
            <input type="text" v-model="detailAddress" placeholder="请输入详细地址">
          </div>
        </div>
        <!--确认-->
        <div class="sure" @click="sureAdd">确认</div>
      </div>
      <!--三级联动-->
      <van-popup v-model="showAddress" position="bottom" :style="{ height: '50%' }">
        <van-area
          :area-list="areaList"
          :value="areaNum"
          @confirm="sure"
          @cancel="exit"
        />
      </van-popup>
    </div>
</template>

<script>
import { Toast } from 'vant';
import addressList from "../../../area";
export default {
  name: "newAddress",
  data () {
    return {
      name: '',
      phone: '',
      detailAddress: '',
      areaNum: "",
      areaList: addressList,
      userAddress: '',
      showAddress: false,
      showpick: false
      }
  },
  mounted () {},
  methods: {
    judgePhone () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phone)) {
        Toast('请输入正确的手机号码')
      }
      // if (this.phone == '') {
      //   Toast('请输入手机号码')
      // }
    },
    // 三级联动点击确定按钮事件
    sure(val) {
      console.log(val);
      this.userAddress = val[0].name + " "+val[1].name+" "+val[2].name
      console.log(this.userAddress)
      this.showAddress = false
      this.showpick = true
    },
    // 三级联动点击取消按钮事件
    exit() {
      this.showAddress = false
    },
    showAddressChuang () {
      this.showAddress = true
    },
    sureAdd () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!this.name) {
        Toast('请输入收货人姓名')
        return false
      }
      if (!this.phone) {
        Toast('请输入手机号码')
        return false
      }
      if (!myreg.test(this.phone)) {
        Toast('请输入正确的手机号码')
        return false
      }
      if (!this.detailAddress) {
        Toast('请输入详细地址')
        return false
      }
    }
  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
  }
  .new-wrap{
    padding: 0 15px;
    box-sizing: border-box;
  }
.new-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 24px 0;
}
  .new-item span {
    font-size: 16px;
  }
  .new-item input{
    font-size: 14px;
    text-align: right;
    border: none;
    width: 200px;
  }
  .sure {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background-color: #15B0AE;
  }
</style>
