// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import vueWechatTitle from 'vue-wechat-title'
import store from "./store"
Vue.use(vueWechatTitle)

Vue.use(Vant)

Vue.config.productionTip = false

axios.defaults.baseURL= 'http://ymm.molonglan.top'
axios.defaults.headers.post['Content-Type'] = "application/json"
// axios.defaults.withCredentials = true
axios.defaults.headers.common['YMM-TK'] = store.state.token
// Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
//判断是否存在token，如果存在将每个页面header都添加token
  if(store.state.token){
    config.headers.common['YMM-TK'] = store.state.token
  }
  return config;
}, error => {
// 对请求错误做些什么
  return Promise.reject(error);
});




// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response.data.code)
    if (response.data.code == 4001) {
      // this.$store.commit('delToken');
      localStorage.removeItem("token")
      router.replace({
        path: '/login/login',
        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
      })
    }
    return response;
  },
  error => {
    console.log(error.data)
    if (error.response) {
      switch (error.response.status) {
        case 4001:
          this.$store.commit('delToken');
          router.replace({
            path: '/login/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });


Vue.prototype.fmtTime = function (number, format) {
  // 毫秒级的时间戳转换
  number = number * 1000
  var date = new Date(number)
  // var date = new Date();
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  format=format.indexOf('Y')>-1?format.replace('Y',Y):format;
  format=format.indexOf('M')>-1?format.replace('M',M):format;
  format=format.indexOf('D')>-1?format.replace('D',D):format;
  format=format.indexOf('h')>-1?format.replace('h',h):format;
  format=format.indexOf('m')>-1?format.replace('m',m):format;
  format=format.indexOf('s')>-1?format.replace('s',s):format;
  return format;
}

