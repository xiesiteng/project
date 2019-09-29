<template>
    <div>
      <div class="exchange" v-for="(item, index) in 3" :key="index">
        <div class="exc-title">
          <p>预约编号：20190801001</p>
          <img src="../../../static/images/index/delete.png" alt="">
        </div>
        <!--内容-->
        <div class="exc-content">
          <div class="content-left">
            <img src="../../../static/images/index/gznf.png" alt="" class="size">
          </div>
          <div class="content-right">
            <p>光子嫩肤</p>
            <span>500积分</span>
            <button @click="toDetail">查看详情</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "exchange",
  data () {
    return {}
  },
  mounted() {
  },
  methods:{
    toDetail () {
      this.$router.push('/integral/exchangeDetail')
    }
  }
}
</script>

<style scoped>
  .size{
    width: 100px;
    height: 100px;
  }
  .exc-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    background-color: #FDFDFD;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    color: #666666;
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
    padding-left: 15px;
    box-sizing: border-box;
  }
  .content-right p{
    font-size: 16px;
  }
  .content-right span{
    color: #15B0AE;
    padding: 15px 0;
  }
  .content-right button{
    border: none;
    width: 70px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    color: #424242;
  }
</style>
