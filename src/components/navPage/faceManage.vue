<template>
    <div>
      <div class="main">
        <!--tag标签-->
        <div class="subnav-wrap">
          <van-tag round v-for="(item, index) in subnavList" :key="index" :class="['subnav' ,subActive == index ? 'subnav-active' : '']" @click="subChoose(index)">{{item}}</van-tag>
        </div>
        <!--tag标签-->
        <!--产品列表start-->
        <div class="box-wrap">
          <div class="box" v-for="(item, index) in 5" :key="index">
            <!--多套一层div给border-->
            <div class="box-border">
              <div>
                <img src="../../../static/images/index/gznf.png" alt="" class="box-img">
              </div>
              <p class="name">美白再生因子深沉抗皱</p>
              <div class="order" @click="toSubscribe">预约</div>
            </div>
          </div>
        </div>
        <!--产品列表end-->
      </div>
    </div>
</template>

<script>
export default {
    name: "faceManage",
  data () {
    return {
      subActive: 0,
      subnavList: ['全部项目', '保湿', '美白', '抗敏管理', '控油祛痘', '老化管理']
    }
  },
  methods: {
    subChoose (val) {
      this.subActive = val
    },
    toSubscribe () {
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    margin-bottom: 100px;
  }
  .nav-wrap {}
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px 15px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .nav-active {
    color: #15B0AE;
    position: relative;
  }
  .nav-active::after {
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 175%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }

  .subnav-wrap {
    padding: 20px 15px 0 15px;
    box-sizing: border-box;
  }
  .subnav {
    /*padding: 3px 5px;*/
    padding: 0;
    background-color: #F1F1F1;
    color: #999999;
    width: 75px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0 10px 10px 0;
  }
  .subnav-active {
    color: #fff;
    background-color: #15B0AE;
  }
  .box-wrap {
    box-sizing: border-box;
    padding: 0 15px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .box {
    width: 50%;
    margin-bottom: 20px;
  }
  .box:nth-child(2n+1) {
    box-sizing: border-box;
    padding-right: 5px;
  }
  .box:nth-child(2n) {
    box-sizing: border-box;
    padding-left: 5px;
  }
  .box-border {
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box-img {
    width: 100%;
    height: 150px;
  }
  .name {
    font-size: 16px;
    padding: 18px 5px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .order {
    color: #15B0AE;
    font-size: 16px;
    width: 120px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #15B0AE;
    border-radius: 15px;
    margin-bottom: 20px;
  }
</style>
