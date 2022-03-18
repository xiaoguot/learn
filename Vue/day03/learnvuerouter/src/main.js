import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //路由挂载到这才能生效
  router,
  render: h => h(App)
})
