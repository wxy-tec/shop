import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import goodsList from "../../static/goodsList.json"
export default new Vuex.Store({
  state: {
    goodsList,
    // 购物车，建立一个数组，专门存放购物车中的商品数据
    cart: []
  },
  mutations: {

  },
  actions: {},
  getters: {

  },
  modules: {}
})
