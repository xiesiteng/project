<template>
    <div class="main">
      <!--无商品-->
      <div class="wrap" v-show="noProduct">
        <div class="hasNo">
          <img src="../../../static/images/index/car.png" alt="">
        </div>
        <p class="nothing">这里什么也没有</p>
      </div>
      <!--无商品-->
      <!--有商品-->
      <div v-for="(item, index) in cartList" :key="index" v-show="!noProduct">
        <van-swipe-cell >

          <template slot="default">
            <div class="pro-wrap" v-show="true">
              <div class="pro-left">
                <!--<div class="box" v-show="!item.flag" @click="pick(index)"></div>-->
                <img src="../../../static/images/index/no_sel.png" alt="" v-show="item.selected == 0" @click="pick(index, item.id, item.selected)">
                <img src="../../../static/images/index/sel.png" alt="" v-show="item.selected == 1" @click="pick(index, item.id, item.selected)">
              </div>
              <div class="pro-right">
                <img src="../../../static/images/index/gznf.png" alt="" class="size">
                <div class="right-content">
                  <p>{{item.goods_name}}</p>
                  <span>￥{{item.goods_price}}</span>
                  <div class="button-group">
                    <button class="but" @click="reduce(item.id, item.goods_num)">-</button>
                    <span>{{item.goods_num}}</span>
                    <button class="but" @click="add(item.id, item.goods_num)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template slot="right">
            <van-button square type="danger" text="删除" class="del" @click="deleteItem(item.id)"/>
          </template>
        </van-swipe-cell>
      </div>
      <!--有商品-->
      <!--底部结算-->
      <div class="balance" v-show="!noProduct">
        <div class="total">
          <div class="all">
            <!--<div class="box" v-show="!selAll" @click="pickAll"></div>-->
            <img src="../../../static/images/index/no_sel.png" alt="" v-show="!selAll" @click="pickAll">
            <img src="../../../static/images/index/sel.png" alt="" v-show="selAll" @click="pickAll">
            <p>全选</p>
          </div>
          <p>合计：<span>￥{{total_price.total_fee}}</span></p>
        </div>
        <button class="toPay">结算</button>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios'
export default {
    name: "shopCar",
  data () {
    return {
      num: 1,
      selAll: false,
      list: [
        {flag: false, num: 1, price: 400},
        {flag: false, num: 1, price: 500},
        {flag: false, num: 1, price: 600}
      ],
      noProduct: false,
      cartList: [],
      total_price: {}
    }
  },
  watch: {
    cartList: {
      handler (value) {
        let _this = this
        let count = 0
        for (let i = 0; i < value.length; i++) {
          if (value[i].selected == 1) {
            count++
          }
        }
        if (count === value.length) {
          _this.selAll = true
        } else {
          _this.selAll = false
        }
      },
      deep: true
    }
  },
  mounted() {
      this.init()
  },
  methods: {
    init () {
      axios.get('/lan/cart_lists').then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      // console.log(res.data.data)
      if (res.data.code == 2000) {
        if (res.data.data.cartList.length == 0) {
          this.noProduct = true
        } else {
          this.cartList = res.data.data.cartList
          this.total_price = res.data.data.total_price
        }
      }
    },
    pick (index, id, selected) {
      if (selected == 0) {
        selected = 1
      } else {
        selected = 0
      }
      axios.get('/lan/edit_cart?id=' + id + '&cart_select=' + selected).then(this.pickSucc).catch(err => console.log(err))
      // this.cartList[index].selected = !this.cartList[index].selected
      // if (this.cartList[index].selected == 0) {
      //   this.cartList[index].selected = 1
      // } else {
      //   this.cartList[index].selected = 0
      // }
    },
    pickSucc (res) {
      this.cartList = res.data.data.cartList
      this.total_price = res.data.data.total_price
    },
    pickAll () {
      // +++
      this.selAll = !this.selAll
      let _this = this
      if (!this.selAll) {
        _this.cartList.forEach(function (item) {
          item.selected = false
        })
      } else if (this.selAll) {
        _this.cartList.forEach(function (item) {
          item.selected = true
        })
      }
      if (this.selAll) {
        axios.get('/lan/edit_cart?cart_select=all').then(this.pickAllSucc).catch(err => console.log(err))
      } else {
        axios.get('/lan/edit_cart?cart_select=cancel').then(this.pickAllSucc).catch(err => console.log(err))
      }

      },
    pickAllSucc (res) {
      this.cartList = res.data.data.cartList
      this.total_price = res.data.data.total_price
    },
    add (id, goods_num) {
      goods_num++
      // console.log(goods_num)
      axios.get('/lan/edit_cart?id=' + id + '&goods_num=' + goods_num).then(this.addSucc).catch(err => console.log(err))
    },
    addSucc (res) {
      this.cartList = res.data.data.cartList
      this.total_price = res.data.data.total_price
    },
    reduce (id, goods_num) {
      if (goods_num <= 1) {
        Toast('不能再减少了')
        return false
      }
      goods_num--
      axios.get('/lan/edit_cart?id=' + id + '&goods_num=' + goods_num).then(this.reduceSucc).catch(err => console.log(err))
    },
    reduceSucc (res) {
      this.cartList = res.data.data.cartList
      this.total_price = res.data.data.total_price
    },
    deleteItem (id) {
      console.log(id)
      axios.get('/lan/del_cart?id=' + id).then(this.deleteSucc).catch(err => console.log(err))
    },
    deleteSucc (res) {
      if (res.data.code == 2000) {
        this.init()
      }
    },
    select () {

    }
  }
}
</script>

<style scoped>
  .main{
    background-color: #fff;
    min-height: 100vh;
  }
  .size{
    width: 100px;
    height: 100px;
  }
  .hasNo{
    display: flex;
    justify-content: center;
    margin: 50px auto;
  }
  .nothing{
    font-size: 18px!important;
    color: #666!important;
    text-align: center;
  }
  .balance{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toPay{
    width: 30%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #15B0AE;
    border: none;
    font-size: 15px;
  }
  .total{
    width: 70%;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 15px;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }
  .all{
    display: flex;
    align-items: center;
  }
  .all p{
    padding-left: 10px;
    box-sizing: border-box;
  }
  .all img{
    border: 1px solid #fff;
  }
  /*.box{
    width: 18px;
    height: 18px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }*/
  .pro-wrap{
    display: flex;
    align-items: center;
  }
  .pro-left{
    width: 20%;
    box-sizing: border-box;
    height: 140px;
    /*background-color: pink;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pro-right{
    width: 80%;
    height: 140px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    display: flex;
  }
  .but{
    padding: 0;
    border: none;
    background-color: #15B0AE;
    border-radius: 50%;
    font-size: 20px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 20px;
    color: #fff;
  }
  .del{
    height: 140px;
    background-color: #15B0AE;
    border: 1px solid #15B0AE;
  }
  .right-content{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .right-content p{
    font-size: 16px;
  }
  .right-content span{
    font-size: 14px;
    color: #666;
  }
  .button-group span{
    padding: 0 10px;
  }
</style>
