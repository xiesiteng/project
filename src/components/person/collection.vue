<template>
    <div>
      <div class="coll-wrap" v-show="false">
        <div class="coll-img">
          <img src="../../../static/images/index/nocol.png" alt="">
        </div>
        <p class="hasNo">这里什么也没有</p>
      </div>

      <div class="time_ass">

        <!--拼团start-->
        <div class="ass-item" v-for="(item, index) in 3" :key="index">
          <div class="item-left">
            <img src="../../../static/images/index/gznf.png" alt="" class="item-img">
          </div>
          <div class="item-right">
            <p class="title">光子嫩肤</p>
            <div class="tag-wrap">
              <p>剩余名额29个</p>
            </div>
            <!--价格和拼团按钮-->
            <div class="price-wrap">
              <div class="include">
                <em>￥</em>
                <p class="price">500.9</p>
              </div>
              <img src="../../../static/images/index/coll_shop.png" alt="">
            </div>
          </div>
        </div>
        <!--拼团end-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "collection"
    }
</script>

<style scoped>
  .coll-img{
    display: flex;
    justify-content: center;
    margin-top: 52px;
    margin-bottom: 30px;
  }
  .hasNo{
    color: #666;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }
  .time_ass{
    color: #000
  }

  .ass-item{
    padding: 16px 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
  }
  .item-img{
    width: 100px;
    height: 100px;
  }
  .item-right{
    width: 100%;
    background-color: #fff;
    padding-left: 16px;
    box-sizing: border-box;
  }
  .title{
    padding: 10px 0;
    color: #222;
    font-size: 16px;
    font-weight: 700;
  }
  .tag-wrap{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .tag-wrap p{
    font-size: 13px;
    color: #999;
  }
  /*.tag-wrap span:nth-child(1){*/
  /*  background-color: #FF9C99;*/
  /*  font-size: 10px;*/
  /*  color: #fff;*/
  /*  padding: 2px 15px;*/
  /*  box-sizing: border-box;*/
  /*  border-radius: 5px;*/
  /*  margin-right: 25px;*/
  /*}*/
  /*.tag-wrap span:nth-child(2){*/
  /*  background-color: #8AD7D6;*/
  /*  font-size: 10px;*/
  /*  color: #fff;*/
  /*  padding: 2px 15px;*/
  /*  box-sizing: border-box;*/
  /*  border-radius: 5px;*/
  /*}*/
  .price-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .include{
    display: flex;
  }
  em{
    padding-top: 10px;
    font-style: normal;
  }
  .price{
    font-size: 24px
  }
  .pre-price{
    text-decoration: line-through;
    color: #AAAAAA;
    padding-top: 10px;
    margin-left: -15px;
  }
  .ping{
    border: none;
    width: 64px;
    height: 28px;
    background-color: #15B0AE;
    color: #fff;
    font-size: 12px;
  }
</style>
