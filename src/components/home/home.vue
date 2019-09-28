<template>
    <div>
      <router-view class="top"></router-view>
      <tab-bar></tab-bar>
    </div>
</template>

<script>
import tabBar from '../common/tabbar'
export default {
    name: "home.vue",
    data () {
      return {

      }
    },
  components: {
      tabBar
  }
  }
</script>

<style scoped>
  /*把页面内容往上顶，防止被tabbar遮挡*/
  /*.top {*/
  /*  min-height: 100vh;*/
  /*  margin-bottom: 100px;*/
  /*}*/
</style>
