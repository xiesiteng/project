<template>
    <div>
      <div class="user-header" @click="chooseAddress" v-if="addressList.length !== 0">
        <div class="wrap">
          <img src="../../../static/images/index/coordinates.png" alt="">
          <div class="user-wrap">
            <div class="user">
              <p>收货人: {{recInfo.consignee}}</p>
              <span>{{recInfo.mobile}}</span>
            </div>
            <div>{{recInfo.province}}{{recInfo.city}}{{recInfo.district}}{{recInfo.address}}</div>
          </div>
        </div>
        <img src="../../../static/images/index/more_small.png" alt="">
      </div>
      <!--没有地址信息-->
      <div v-else class="emptyAddress" @click="toAddNewAddress">
        <div class="emp-wrap">
          <img src="../../../static/images/index/coordinates.png" alt="">
          <span>您还未添加收货地址信息</span>
        </div>
        <img src="../../../static/images/index/more_small.png" alt="">
      </div>
      <!--背景条-->
      <div class="bgImg"></div>
      <!--商品-->
      <div class="goods-wrap">
        <div class="goods-left">
          <!--<img src="../../../static/images/index/gznf.png" alt="" class="size">-->
          <img :src="cart_selected.original_img" alt="" class="size">
        </div>
        <div class="goods-right">
          <p>{{cart_selected.goods_name}}</p>
          <span>￥ <em>{{cart_selected.goods_price}}</em></span>
        </div>
      </div>
      <div class="space"></div>
      <!--优惠券-->
      <div class="discount-wrap" @click="chooseDiscount">
        <div class="discount">
          <span>优惠券</span>
          <p class="none" v-show="noDis">
            暂无优惠券
            <img src="../../../static/images/index/more_small.png" alt="" class="arrow">
          </p>
          <p v-show="!noDis && !disFlag" class="none">{{count}} 张优惠券可以使用</p>
          <p v-show="disFlag" class="none">{{dis_money}}元优惠券</p>
        </div>
      </div>
      <!--订单信息-->
      <div class="wrap-content">
        <!--<div class="user-info">
          <p class="title">订单信息</p>
          <div class="order-info">
            <span class="person">订单号码:</span>
            <p>201910060934</p>
          </div>
          <div class="order-info">
            <span class="person">下单时间:</span>
            <p>2019-10-6 09:34</p>
          </div>
          <div class="order-info">
            <span class="person">支付方式:</span>
            <p>微信</p>
          </div>
        </div>-->

        <div class="basic-info">

          <div class="order-info">
            <span class="person">商品金额:</span>
            <p>￥{{cart_selected.goods_price}}</p>
          </div>
          <div class="order-info">
            <span class="person">运费:</span>
            <p>+￥{{total_price.total_postage}}</p>
          </div>
          <div class="order-info">
            <span class="person">优惠券抵扣:</span>
            <p>-￥{{dis_money}}</p>
          </div>
          <div class="order-info">
            <span class="person">实付金额:</span>
            <p style="color: red">￥{{actual_pay}}</p>
          </div>

        </div>
      </div>
      <!--结算-->
      <div class="settlement">
        <div class="total">
          结算总计：<span>￥{{actual_pay}}</span>
        </div>
        <button class="btn">提交订单</button>
      </div>
      <!--优惠券弹出层-->
      <van-popup
        v-model="showDis"
        closeable
        position="bottom"
        :style="{ height: '80%' }"
        @close="closeDis"
      >
        <div class="disc-wrap">
          <div class="discount-item" v-for="(item, index) in disList" :key="index">
            <img src="../../../static/images/index/disc.png" alt="" class="dis-bg">
            <div class="dis-left">
              <span>￥ <b>{{item.money}}</b></span>
              <p>优惠券</p>
            </div>
            <div class="dis-right">
              <p>全场消费满{{item.condition}}可用</p>
              <span>{{this.fmtTime(item.use_end_time, 'Y-M-D')}}前有效</span>
            </div>
            <div class="dis-check">
              <!--<img src="../../../static/images/index/nocheck.png" alt="" v-show="!item.flag" @click="select(index)">
              <img src="../../../static/images/index/check.png" alt="" v-show="item.flag" @click="select(index)">-->
              <van-radio-group v-model="radio">
                <van-radio :name="index" @click="select(index)">

                  <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.checked ? activeIcon : inactiveIcon"
                  >
                </van-radio>
              </van-radio-group>
            </div>
          </div>
        </div>
        <button class="btn-sure" @click="pickItem">确认使用</button>
      </van-popup>

      <!--地址选择弹出层-->
      <van-popup
        v-model="showAdd"
        closeable
        position="bottom"
        :style="{ height: '80%' }"
      >

        <div class="popUp">
          <div class="pop-wrap" v-for="(item, index) in addressList" :key="index" @click="pickAddress(item)">
            <div class="wrap">
              <img src="../../../static/images/index/coordinates.png" alt="">
              <div class="user-wrap">
                <div class="user">
                  <p>收货人: {{item.consignee}}</p>
                  <span>{{item.mobile}}</span>
                </div>
                <div>{{item.province}}{{item.city}}{{item.district}}{{item.address}}</div>
              </div>
            </div>
            <!--<img src="../../../static/images/index/more_small.png" alt="">-->
          </div>
        </div>

      </van-popup>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "submitOrder",
  data () {
    return{
      radio: '1',
      activeIcon: '../../../static/images/index/check.png',
      inactiveIcon: '../../../static/images/index/nocheck.png',
      showDis: false,
      showAdd: false,
      checked: false,
      addressList: [],
      recInfo: {},
      goods_id: '',
      cart_selected: {},
      total_price: {},
      noDis: false,
      count: '',
      disList: [],
      dis_money: '0.00',
      disFlag: false
    }
  },
  computed: {
    actual_pay () {
      // 实付金额
      return this.cart_selected.goods_price - this.dis_money
    }
  },
  mounted () {
    this.goods_id = this.$route.query.goods_id
    this.getAddress()
    this.getDis()
    this.getInfo()
  },
  methods: {
    getDis () {
      axios.get('/lan/coupon_list?type=0').then(this.getDisSucc).catch(err => console.log(err))
    },
    getDisSucc (res) {
      if (res.data.code == 2000) {
        if (res.data.data.result.length == 0) {
          this.noDis = true
          console.log(this.noDis, this.disFlag)
        } else {
          this.count = res.data.data.count
          this.disList = res.data.data.result
          // for(let i=0; i<this.disList.length; i++) {
          //   this.$set(this.disList[i], 'flag', false)
          // }
          // console.log(this.disList)
        }
      } else {
        Toast(res.data.msg)
      }
    },
    getAddress () {
      axios.get('/lan/user_address').then(this.getAddressSucc).catch(err => console.log(err))
    },
    getAddressSucc (res) {
      // console.log(res.data.data)
      this.addressList = res.data.data.result
      this.recInfo = this.addressList[0]
    },
    getInfo () {
      axios.get('/lan/settlement_cart?goods_id=' + this.goods_id).then(this.getInfoSucc).catch(err => console.log(err))
    },
    getInfoSucc (res) {
      // console.log(res.data.data)
      if (res.data.code == 2000) {
        this.cart_selected = res.data.data.cart_selected
        this.total_price = res.data.data.total_price
      } else {
        Toast(res.data.msg)
      }
    },
    chooseDiscount () {
      if (this.noDis) {
        return false
      }
      this.showDis = true
    },
    chooseAddress () {
      this.showAdd = true
    },
    pickItem () {
      this.showDis = false
      this.dis_money = this.disList[this.radio].money
      this.disFlag = true
      // console.log(this.dis_money)
    },
    closeDis () {
      console.log('关闭popup弹出层')
      // this.dis_money = '0.00'
      // this.radio = -1
      // for(let i=0;i<this.disList.length;i++) {
      //   this.disList[i].flag = false
      // }
    },
    pickAddress (item) {
      this.recInfo = item
      // console.log(this.recInfo)
      this.showAdd = false
    },
    select (index) {
      // this.disList[index].flag = !this.disList[index].flag
      // this.dis_money = this.disList[index].money
      this.radio = index
      console.log(this.dis_money)
    },
    toAddNewAddress () {
      this.$router.push({path: '/person/newAddress', query: {fromOrder: true, goods_id: this.goods_id}})
    }


  }
}
</script>

<style scoped>
  .size{
    width: 100px;
    height: 100px;
  }
  .space{
    width: 100%;
    height: 4px;
    background-color: #f5f5f5;
  }
  .user-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
  }
  .popUp{
    padding: 50px 0px;
    box-sizing: border-box;
  }
  .pop-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  .wrap{
    display: flex;
    align-items: center;
  }
  .user-wrap{
    box-sizing: border-box;
    padding-left: 15px;
    width: 300px;
  }
  .user{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .bgImg{
    width: 100%;
    height: 3px;
    background: url("../../../static/images/index/bg-item.png");
  }
  .goods-wrap{
    box-sizing: border-box;
    padding: 20px 15px;
    display: flex;
  }
  .goods-left{
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .goods-right{
    width: 70%;
    height: 100px;
    box-sizing: border-box;
    padding: 8px 0 8px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  em{
    font-size: 24px;
    font-style: normal;
  }
  .discount-wrap{
    box-sizing: border-box;
    padding: 0 15px;
  }
  .discount{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  .discount span{
    font-size: 16px;
  }
  .none{
    color: #999999;
    display: flex;
    align-items: center;
  }
  .arrow{
    margin-left: 5px;
  }
  .user-info{
    border-bottom: 1px solid #F5F5F5;
    box-sizing: border-box;
  }
  /*.user-name{*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  box-sizing: border-box;*/
  /*  padding-bottom: 8px;*/
  /*}*/
  .order-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .person{
    color: #868686;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .title{
    font-size: 16px;
    padding: 16px 0;
    box-sizing: border-box;
  }
  .basic-info{
    padding-top: 16px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  .wrap-content{
    box-sizing: border-box;
    padding: 0 15px;
    /*padding-bottom: 30px;*/
  }
  .settlement{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
  .btn{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border: none;
    background-color: #15B0AE;
  }
  .total{
    width: 60%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
  }
  .total span{
    color: #15B0AE;
  }
  .disc-wrap{
    padding: 50px 15px;
    box-sizing: border-box;
  }
  .dis-bg{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .discount-item{
    width: 100%;
    height: 85px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    /*background: url("../../../static/images/index/disc.png") no-repeat 100% 100%;*/
    /*background-position: 0 center;*/
    /*border: 1px solid #eee;*/
    box-sizing: border-box;
    position: relative;
  }
  .dis-left{
    width: 35%;
    height: 100%;
    /*background: url("../../../static/images/index/disc.png") no-repeat 0 100%;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    position: absolute;
  }
  .dis-left b{
    font-size: 28px;
  }
  .dis-right{
    width: 55%;
    padding: 20px 15px;
    box-sizing: border-box;
    /*border: 1px solid #eee;*/
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    left: 30%;
  }
  .dis-right p{
    font-size: 16px;
    color: #333;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .dis-right span{
    color: #999;
    font-size: 12px;
  }
  .dis-check{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 88%;
    top: 50%;
    transform: translateY(-50%);
  }
  /*.cir{
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 50%;
  }*/
  .btn-sure{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    color: #fff;
    background-color: #15B0AE;
    position: fixed;
    bottom: 0;
  }
  .emptyAddress{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 15px;
  }
  .emp-wrap{
    display: flex;
    align-items: center;
  }
  .emptyAddress span{
    margin-left: 10px;
    color: #999;
  }
</style>
