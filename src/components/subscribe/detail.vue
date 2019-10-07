<template>
  <div>
    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/store.png" alt="">
        <span>门店地址</span>
      </div>
      <div class="info-content">南山区华侨城 创意文化园北园A1栋首层114号</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/time.png" alt="">
        <span>预约时间</span>
      </div>
      <div class="info-content">08-03   后天  10:30</div>
    </div>

    <div class="info-item">
      <div class="info-title">
        <img src="../../../static/images/index/project.png" alt="">
        <span>预约项目</span>
      </div>
      <div class="info-content">深沉清洁</div>
    </div>

    <div class="disc">
      <div>
        <img src="../../../static/images/index/dis.png" alt="">
        <span>优惠券使用</span>
      </div>
      <p class="use" @click="chooseDiscount">
        <span v-show="true">2张优惠券可用</span>
        <span v-show="false">￥20元优惠券</span>
        <span class="none" v-show="false">暂无优惠券</span>
        <img src="../../../static/images/index/more_small.png" alt="">
      </p>
    </div>

    <div class="message">
      <img src="../../../static/images/index/message.png" alt="">
      <span>捎句话</span>
    </div>
    <div class="textarea-wrap">
      <textarea name="" id="" cols="30" rows="6" class="mess-content" v-model="txt" placeholder="可填写偏好或要求，不超过200字" maxlength="200"></textarea>
    </div>
    <!--底部按钮-->
    <div class="settlement">
      <div class="total">
        结算: <span>￥399.9</span>
      </div>
      <button class="btn">立即预约</button>
    </div>

    <!--优惠券弹出层-->
    <van-popup
      v-model="showDis"
      closeable
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div class="disc-wrap">
        <div class="discount-item" v-for="(item, index) in 2" :key="index">
          <div class="dis-left">
            <span>￥ <b>20</b></span>
            <p>优惠券</p>
          </div>
          <div class="dis-right">
            <p>全场消费满100可用</p>
            <span>2019-09-01前有效</span>
          </div>
          <div class="dis-check">
            <img src="../../../static/images/index/nocheck.png" alt="" v-show="!checked" @click="select">
            <img src="../../../static/images/index/check.png" alt="" v-show="checked" @click="select">
          </div>
        </div>
      </div>
      <button class="btn-sure" @click="pickItem">确认使用</button>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "detail",
    data () {
      return{
        txt: '',
        showDis: false,
        checked: false
      }
    },
    methods: {
      chooseDiscount () {
        this.showDis = true
      },
      pickItem () {
        this.showDis = false
      },
      select () {
        this.checked = !this.checked
      }
    }
  }
</script>

<style scoped>
  .info-title{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px 5px 15px;
  }
  .info-title span{
    margin-left: 10px;
    color: #999;
  }
  .info-content{
    box-sizing: border-box;
    padding-left: 41px;
    font-size: 15px;
  }
  .disc{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    color: #999;
    border-bottom: 1px solid #EEEEEE;
  }
  .disc span{
    margin-left: 5px;
  }
  .message{
    box-sizing: border-box;
    padding: 15px;
  }
  .message span{
    margin-left: 5px;
    color: #999;
  }
  .textarea-wrap{
    box-sizing: border-box;
    padding: 0 15px;
  }
  .mess-content{
    resize: none;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.5;
    border-radius: 8px;
    padding: 16px 26px;
    color: #666666;
  }
  .use{
    color: #FF9C99;
  }
  .settlement{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .btn{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #15B0AE;
    color: #fff;
    font-size: 16px;
    border: none;
  }
  .total{
    width: 60%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
  .total span{
    color: #15B0AE;
  }

  .disc-wrap{
    padding: 50px 15px;
    box-sizing: border-box;
  }
  .discount-item{
    width: 100%;
    height: 95px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    background: url("../../../static/images/index/disc.png") no-repeat;
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
  }
  .dis-right p{
    font-size: 16px;
    color: #333;
    font-weight: 600;
    padding-bottom: 25px;
  }
  .dis-right span{
    color: #999;
    font-size: 12px;
  }
  .dis-check{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .none{
    color: #999999!important;
  }
</style>
