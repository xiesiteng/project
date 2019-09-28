<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        replace
        to="/home/index"
      >
        <span class="font_color">首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon1.active : icon1.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/home/subscribe"
      >
        <span class="font_color">预约</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon2.active : icon2.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/home/shop"
      >
        <span class="font_color">商城</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon3.active : icon3.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/home/mine"
      >
        <span class="font_color">我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon4.active : icon4.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: "tabbar.vue",
    data () {
      return {
        active: 0,
        icon1: {
          normal: '../../static/images/tabbar/index.png',
          active: '../../static/images/tabbar/index_sel.png'
        },
        icon2: {
          normal: '../../static/images/tabbar/subscribe.png',
          active: '../../static/images/tabbar/subscribe_sel.png'
        },
        icon3: {
          normal: '../../static/images/tabbar/shop.png',
          active: '../../static/images/tabbar/shop_sel.png'
        },
        icon4: {
          normal: '../../static/images/tabbar/mine.png',
          active: '../../static/images/tabbar/mine_sel.png'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.font_color
  color #000
</style>
