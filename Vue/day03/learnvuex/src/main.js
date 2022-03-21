import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //挂载到Vue实例当中，这样在其他组件中，就可以通过this.$store方式，获取store对象
  store,
  render: h => h(App)
})
