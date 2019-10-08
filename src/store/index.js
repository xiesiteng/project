import Vue from "vue"

import Vuex from "vuex"

Vue.use(Vuex)

// 提供仓库

const store = new Vuex.Store({

  state: {
    url: 'http://ymm.molonglan.top'
  },

  mutations: {},

  getters:{}

})

export default store;
