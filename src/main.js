// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import vueAxios from 'vue-axios'
import axios from 'axios'
import store from './store' // 引入store
import 'babel-polyfill'
import '../static/g_style.css'
// import Swiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
Vue.use(vueAxios, axios)
// Vue.use(Swiper, /* { default global options } */)
Vue.use(iView)
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
//   next()
// })
// 页面跳转显示在顶部
router.afterEach((to, from, next) => {
  if (to.path !== '/service') {
    window.scrollTo(0, 0)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
