<template>
    <div>
      <div class="main">
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
    name: "skinManage",
  data () {
    return {}
  },
  methods: {
    toSubscribe () {
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
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
