import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
// 使用vuex
import store from './store'
// 移动端1px边框问题
import './assets/styles/border.css'
import fastClick from 'fastclick'
import router from './router.js'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
