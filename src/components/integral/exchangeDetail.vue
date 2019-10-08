<template>
    <div class="main">
      <div class="exc-content">
        <div class="content-left">
          <img src="../../../static/images/index/gznf.png" alt="" class="size">
        </div>
        <div class="content-right">
          <p>光子嫩肤</p>
          <div class="include">
            <span class="dui">兑</span>
            <p class="price">500.9</p>
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
          <span>500</span>
          <img src="../../../static/images/index/integral.png" alt="">
        </div>
      </div>
      <div class="cell">
        <p>剩余积分</p>
        <div>
          <span>10</span>
          <img src="../../../static/images/index/integral.png" alt="">
        </div>
      </div>
      <!--编号和时间-->
      <div class="bottom-info">
        <p>兑换编号：20190801002</p>
        <p>兑换时间：2019-08-01  10:22:36</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "exchangeDetail",
  data () {
    return {}
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
