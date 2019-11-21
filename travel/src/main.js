import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
// 移动端1px边框问题
import './assets/styles/border.css'
import fastClick from 'fastclick'
import router from './router.js'


Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
