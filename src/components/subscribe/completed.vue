<template>
    <div class="main">
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
        <p>未使用</p>
      </div>

      <div class="message">
        <img src="../../../static/images/index/message.png" alt="">
        <span>捎句话</span>
      </div>
      <div class="textarea-wrap">
        <textarea name="" id="" cols="30" rows="6" readonly class="mess-content" v-model="txt"></textarea>
      </div>
      <!--底部按钮-->
      <button class="btn">已完成</button>
    </div>
</template>

<script>
export default {
  name: "completed",
  data () {
    return{
      txt: '我需要Tony老师给我做'
    }
  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
  }
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
  .btn{
    width: 100%;
    height: 50px;
    background-color: #AAAAAA;
    color: #fff;
    border: none;
    position: fixed;
    bottom: 0;
    font-size: 16px;
  }
</style>
