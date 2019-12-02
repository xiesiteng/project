import axios from "axios";
import store from "../store";
import router from '../router'

axios.defaults.baseURL= 'http://ymm.molonglan.top'
axios.defaults.headers.post['Content-Type'] = "application/json"
// axios.defaults.withCredentials = true
axios.defaults.headers.common['YMM-TK'] = store.state.token
// Vue.prototype.$axios = axios



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

export default axios;
