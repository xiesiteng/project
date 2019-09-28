<template>
    <div>
      <!--无商品-->
      <div class="wrap" v-show="false">
        <div class="hasNo">
          <img src="../../../static/images/index/car.png" alt="">
        </div>
        <p class="nothing">这里什么也没有</p>
      </div>
      <!--无商品-->
      <!--有商品-->
      <div v-for="(item, index) in list" :key="index">
        <van-swipe-cell >

          <template slot="default">
            <div class="pro-wrap" v-show="true">
              <div class="pro-left">
                <div class="box" v-show="!item.flag" @click="pick(index)"></div>
                <img src="../../../static/images/index/sel.png" alt="" v-show="item.flag" @click="pick(index)">
              </div>
              <div class="pro-right">
                <img src="../../../static/images/index/gznf.png" alt="" class="size">
                <div class="right-content">
                  <p>光子嫩肤</p>
                  <span>￥{{item.price}}</span>
                  <div class="button-group">
                    <button class="but" @click="reduce(index)">-</button>
                    <span>{{item.num}}</span>
                    <button class="but" @click="add(index)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template slot="right">
            <van-button square type="danger" text="删除" class="del" @click="deleteItem(index)"/>
          </template>
        </van-swipe-cell>
      </div>
      <!--有商品-->
      <!--底部结算-->
      <div class="balance">
        <div class="total">
          <div class="all">
            <div class="box" v-show="!selAll" @click="pickAll"></div>
            <img src="../../../static/images/index/sel.png" alt="" v-show="selAll" @click="pickAll">
            <p>全选</p>
          </div>
          <p>合计：<span>￥1200</span></p>
        </div>
        <button class="toPay">结算</button>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
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
      ]
    }
  },
  watch: {
    list: {
      handler (value) {
        let _this = this
        let count = 0
        for (let i = 0; i < value.length; i++) {
          if (value[i].flag === true) {
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
  },
  methods: {
    pick (index) {
      this.list[index].flag = !this.list[index].flag
    },
    pickAll () {
      // +++
      this.selAll = !this.selAll
      let _this = this
      if (!this.selAll) {
        _this.list.forEach(function (item) {
          item.flag = false
        })
      } else if (this.selAll) {
        _this.list.forEach(function (item) {
          item.flag = true
        })
      }
      },
    add (index) {
      this.list[index].num++
    },
    reduce (index) {
      if (this.list[index].num <= 1) {
        Toast('不能再减少了')
        return false
      }
      this.list[index].num--
    },
    deleteItem (index) {
      console.log(index)
    },
    select () {

    }
  }
}
</script>

<style scoped>
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
  .box{
    width: 18px;
    height: 18px;
    border: 1px solid #eee;
  }
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
