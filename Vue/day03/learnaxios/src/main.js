import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//返回一个Promise
//1. axios的基本使用
/* axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
}); */

/* axios({
  // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接  params会加到url后面
  params: {
    type: 'sell',
    page: 1
  },
  method: 'get'
}).then(res => {
  console.log(res);
}); */

//2. axios发送并发请求
/* axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata',
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 1
  },
})]).then(results => {
  console.log(results);
}); */

//3. 使用后全局的axios和对应的配置在进行网络请求
/* axios.defaults.baseURL = 'http://123.207.32.32:8000';
axios.defaults.timeout = 5000;

axios
  .all([
    axios({
      url: '/home/multidata'
    }),
    axios({
      url: '/home/data',
      params: {
        type: 'sell',
        page: 3
      }
    })
  ])
  .then(
    //使用axios.spread将我们的数组展开
    axios.spread((res1,res2) => {
      console.log(res1);
      console.log(res2);
    })
  ); */

//4.创建对应的axios实例
/* const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
});

instance1({
  url: "/home/data",
  params: {
    type: "sell",
    page: 3
  }
}).then(res => {
  console.log(res);
}); */

/* const instance2 = axios.get({
  baseURL: "http://152.136.185.210:8000/api/z8",
  timeout: 8000
  // headers: {}
}); */

//5,封装request模块
import { request } from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
