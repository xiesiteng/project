<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
  #app {
    font-size: 14px;
    background-color: #fff;
    min-height: 100vh;
  }
  #app p {
    margin: 0;
  }
</style>
