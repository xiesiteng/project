<template>
    <div>
      <!--没有优惠券-->
      <div class="thereNo" v-if="disList.length == 0">这里什么也没有~</div>
      <!--没有优惠券end-->
      <div class="main">
        <div class="discount" v-for="(item, index) in disList" :key="index">
          <img src="../../../static/images/index/disc.png" alt="" class="bg">
          <div class="dis-left">
            <span>￥ <b>{{item.money}}</b></span>
            <p>优惠券</p>
          </div>
          <div class="dis-right">
            <p>全场消费满{{item.condition}}可用</p>
            <span>{{item.use_end_time}}前有效</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "discount",
  data () {
    return{
      disList: []
    }
  },
  mounted () {
    this.getDis()
  },
  methods: {
    getDis () {
      axios.get('/lan/coupon_list?type=0').then(this.getDisSucc).catch(err => console.log(err))
    },
    getDisSucc (res) {
      this.disList = res.data.data.result
    }
  }
}
</script>

<style scoped>
  .main{
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100vh;
  }
  .bg{
    position: absolute;
    width: 100%;
  }
  .discount{
    width: 100%;
    height: 105px;
    border-radius: 5px;
    display: flex;
    position: relative;
    /*background: url("../../../static/images/index/disc.png") no-repeat;*/
  }
  .dis-left{
    width: 30%;
    height: 100%;
    /*background: url("../../../static/images/index/disc.png") no-repeat;*/
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
    width: 70%;
    padding: 20px 15px;
    box-sizing: border-box;
    position: absolute;
    left: 30%;
    /*border: 1px solid #eee;*/
    /*border-bottom-right-radius: 5px;*/
    /*border-top-right-radius: 5px;*/
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
  .thereNo{
    font-size: 18px;
    color: #999;
    display: flex;
    justify-content: center;
    margin-top: 90px;
  }
</style>
