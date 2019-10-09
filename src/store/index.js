import Vue from "vue"

import Vuex from "vuex"

Vue.use(Vuex)

// 提供仓库

const store = new Vuex.Store({

  state: {
    url: 'http://ymm.molonglan.top',
    // 储存token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },

  mutations: {
    setToken (state,token) {
      state.token = token;
      localStorage.setItem("token",token);
    },
    delToken (state) {
      state.token = '';
      localStorage.removeItem("token");
      console.log(111)
    }
  },

  getters:{}

})

export default store;
