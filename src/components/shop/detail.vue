<template>
    <div>
      <div>
        <img src="../../../static/images/index/box.png" alt="" class="imgSize">
      </div>
      <!--商品信息-->
      <div class="goods-info">
        <div class="goods-price">
          <p>￥<em>2999.00</em></p>
          <img src="../../../static/images/index/no_colle.png" alt="">
        </div>

        <p class="goods-name">亮片进口白纱礼服</p>

        <div class="goods-basic">
          <span>运费：免运费</span>
          <span>销量：2</span>
          <span>库存：12</span>
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
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>
    </div>
</template>

<script>
export default {
    name: "detail"
}
</script>

<style scoped>
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
