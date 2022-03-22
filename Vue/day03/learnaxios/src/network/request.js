import axios from "axios";

export function request(config) {
  //1,创建axios的实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2,axios的拦截器
  //2.1 请求拦截的作用
  instance1.interceptors.request.use(config => {
    //console.log(config);
    //1,比如config中的一些信息不符合服务器的要求

    //2,比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    //3,某些网络请求（比如登录（token）），必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err);
  })

  //2.2响应拦截
  instance1.interceptors.response.use(res => {
    //console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  //发送真正的网络请求
  return instance1(config)
}

/* export function request(config) {
  return new Promise((reslove, reject) => {
        //1,创建axios的实例
    const instance1 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    instance1(config)
      .then(res => {
        reslove(res)
      })
      .catch(err => {
        reject(err)
      })
  })
} */

/* export function request(config, success, failure) {
  //1,创建axios的实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //发送真正的网络请求’
  instance1(config)
    .then(res => {
      //console.log(res);
      success(res)
    })
    .catch(err => {
      //console.log(err);
      failure(err)
    })
} */