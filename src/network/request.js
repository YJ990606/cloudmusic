import axios from "axios";

export function request(config) {
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })
  //2.axios拦截器
  instance.interceptors.request.use(config =>{
    console.log(config)
    return config
  }, error => {
    console.log(error)
  });

  instance.interceptors.response.use(result => {
    console.log(result)
    return result.data
  },error => {
    console.log(error)
  })
  //3.发送真正的网络请求
  return instance(config)
}
