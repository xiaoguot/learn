// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = Vue.component('cpn', {
  template: '<div>我是cpn组件</div>',
  data() {
    return {

    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
/*   components: { App },
  template: '<App/>' */
  render: function(createElement) {
    //1,普通用法
    //return createElement('h2', {class:'box'}, ['Hello world!!!'])

    //2,传入组件对象:
    return  createElement(App)
  }
})
