<template>
    <div>
      <div>
        <!--<img src="../../../static/images/index/box.png" alt="" class="imgSize">-->
        <van-swipe  indicator-color="white">
          <van-swipe-item v-for="(item, index) in goods_images" :key="index">
            <img :src="item.image_url" alt="" class="imgSize">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--商品信息-->
      <div class="goods-info">
        <div class="goods-price">
          <p>￥<em>{{info.shop_price}}</em></p>
          <img src="../../../static/images/index/no_colle.png" alt="" v-show="is_collect == 0" @click="collect(info.goods_id)">
          <img src="../../../static/images/index/colle.png" alt="" v-show="is_collect == 1" @click="collect(info.goods_id)">
        </div>

        <p class="goods-name">{{info.goods_name}}</p>

        <div class="goods-basic">
          <span>运费：{{info.postage}}</span>
          <span>销量：{{info.sales_sum}}</span>
          <span>库存：{{info.store_count}}</span>
        </div>
      </div>
      <!--公告-->
      <div class="notice">
        <img src="../../../static/images/index/laba.png" alt="" class="noticeImg">
        <p>购买即可得购物积分</p>
      </div>
      <!--位置-->
      <div class="basic">
        <div class="basic-left">
          <img src="../../../static/images/index/logo1.png" alt="" class="logoImg">
        </div>
        <div class="basic-right">
          <h3>余缦缦·华侨城店</h3>
          <p>经营范围：派对、美肤、饰品、鲜花、咖啡</p>
          <p>门店地址：南山区华侨城 创意文化园北园A1栋首层114号</p>
          <p>预约电话：0755-26911393</p>
        </div>
      </div>
      <!--按钮-->
      <div class="button-group">
        <button @click="addtoCar">加入购物车</button>
        <button @click="buyNow(info.goods_id)">立即购买</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "detail",
  data () {
    return{
      goods_images: [],
      info: {},
      is_collect: '',
      goods_id: ''
    }
  },
  mounted () {
    this.goods_id = this.$route.query.goods_id
    this.getDetail()
  },
  methods:{
    getDetail () {
      axios.get('/lan/goods_detail?goods_id=' + this.goods_id).then(this.getDetailSucc).catch(err => console.log(err))
    },
    getDetailSucc (res) {
      // console.log(res.data.data)
      if (res.data.code == 2000) {
        this.info = res.data.data.list
        this.is_collect = res.data.data.is_collect
        this.goods_images = res.data.data.goods_images
      } else {
        Toast(res.data.msg)
      }
    },
    buyNow (goods_id) {
      this.$router.push({path: '/shop/submitOrder', query: {goods_id: goods_id}})
    },
    collect (goods_id) {
      axios.get('/lan/collect_goods?goods_id=' + goods_id).then(this.collectSucc).catch(err => console.log(err))
    },
    collectSucc (res) {
      if (res.data.code == 2000) {
        this.getDetail()
      } else {
        Toast(res.data.msg)
      }
    },
    addtoCar () {
      axios.get('/lan/add_cart?goods_id=' + this.goods_id).then(this.addtoCarSucc).catch(err => console.log(err))
    },
    addtoCarSucc (res) {
      if (res.data.code == 2000) {
        Toast(res.data.data.msg)
      } else {
        Toast(res.data.data.msg)
      }
    }
  }
}
</script>

<style scoped>
  .goods-price img{
    width: 16px;
    height: 16px;
  }
  h3{
    margin: 0;
    padding-bottom: 15px;
  }
  .imgSize{
    width: 100%;
    height: 375px;
  }
  .goods-info{
    box-sizing: border-box;
    padding: 0 15px 20px 15px;
  }
  .goods-price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px 0;
  }
  em{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
  .goods-name{
    font-size: 16px;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .goods-basic{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
  .notice{
    height: 40px;
    background-color: #D1F0F0;
    color: #15B0AE;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .noticeImg{
    width: 17px;
    height: 15px;
    margin-right: 15px;
  }
  .basic{
    box-sizing: border-box;
    padding: 15px 15px;
    background-color: #fff;
    display: flex;
    padding-bottom: 50px;
  }
  .basic-left{
    width: 20%;
    display: flex;
    justify-content: center;
  }
  .basic-right{
    width: 80%;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .basic-right p{
    color: #666;
    padding-bottom: 10px;
  }
  .logoImg{
    width: 60px;
    height: 60px;
  }
  .button-group{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .button-group button{
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #15B0AE;
    border: none;
    box-sizing: border-box;
  }
  .button-group button:nth-child(1) {
    border-right: 1px solid #fff;
  }
</style>
