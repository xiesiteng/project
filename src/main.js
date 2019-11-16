// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios/axios'
// import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import vueWechatTitle from 'vue-wechat-title'
import store from "./store"
Vue.use(vueWechatTitle)

Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


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




