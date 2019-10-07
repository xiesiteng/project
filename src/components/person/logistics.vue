<template>
    <div class="main">
      <van-steps direction="vertical" :active="0" active-color="#15B0AE">

        <van-step v-for="(item, index) in 4" :key="index">
          <h3 class="log-status">已签收</h3>
          <p class="log-info">快递已签收 签收人：林</p>
          <p class="log-time">2019-03-09 16:13:38</p>
        </van-step>

      </van-steps>
    </div>
</template>

<script>
export default {
  name: "logistics"
}
</script>

<style scoped>
  h3{
    margin: 0;
  }
  .main{
    padding: 23px 0;
    box-sizing: border-box;
  }
  .log-info{
    color: #666666;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .log-time{
    color: #999999;
    font-size: 12px;
  }
  .log-status{
    color: #181818;
    font-size: 18px;
    font-weight: 400;
  }
</style>
