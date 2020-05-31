'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = { // 要设置的全局访问的state对象
  // screenWidth: document.documentElement.offsetWidth, // 窗口宽度
  screenval: document.documentElement.clientWidth,
  developdata: ''
}
const mutations = {
  developdatafuc (state, data) {
    console.log('AA', data)
    state.developdata = data
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store
