<template>
    <div class="main">
      <div class="exc-content" v-for="(item, index) in info.order_goods" :key="index">
        <div class="content-left">
          <img :src="item.original_img" alt="" class="size">
        </div>
        <div class="content-right">
          <p>{{item.goods_name}}</p>
          <div class="include">
            <span class="dui">兑</span>
            <p class="price">{{info.integral}}</p>
            <em>&nbsp;积分</em>
          </div>
        </div>
      </div>
      <!--间距-->
      <div class="space"></div>
      <!--间距end-->
      <div class="cell">
        <p>积分使用</p>
        <div>
          <span>{{info.integral}}</span>
          <img src="../../../static/images/index/integral.png" alt="">
        </div>
      </div>
      <div class="cell">
        <p>剩余积分</p>
        <div>
          <span>{{info.last_pay_points}}</span>
          <img src="../../../static/images/index/integral.png" alt="">
        </div>
      </div>
      <!--编号和时间-->
      <div class="bottom-info">
        <p>兑换编号：{{info.order_sn}}</p>
        <p>兑换时间：{{info.add_time}}</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "exchangeDetail",
  data () {
    return {
      order_id: '',
      info: {}
    }
  },
  mounted() {
    this.order_id = this.$route.query.order_id
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/order_details?order_id=' + this.order_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.info = res.data.data
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
  .size{
    width: 100px;
    height: 100px;
  }
  .exc-content{
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
  }
  .content-left{
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-right{
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 15px;
    box-sizing: border-box;
    height: 100px;
    justify-content: space-between;
  }
  .content-right p{
    font-size: 16px;
  }
  .include{
    display: flex;
    align-items: baseline;
  }
  .price{
    font-size: 24px!important;
  }
  em{
    font-style: normal;
  }
  .dui{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #15B0AE;
    border-radius: 3px;
    margin-right: 12px;
  }
  .space{
    width: 100%;
    height: 5px;
    background-color: #f5f5f5;
  }
  .cell{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  .bottom-info{
    padding: 15px 0 0 15px;
    box-sizing: border-box;
    line-height: 1.5;
  }
  .bottom-info p{
    color: #666;
  }
</style>
