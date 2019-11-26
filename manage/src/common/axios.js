// 封装axios请求 promise

import axios from 'axios'
import {api} from './api'
import qs from 'qs'

axios.defaults.baseURL = api

// 请求拦截
axios.interceptors.request.use(function(config){
  // 在其他页面需要token的，在localStorage里存在token的，会自动在headers中加上token
  let token = window.localStorage.getItem('token')
  if(token) {
    config.headers['token'] = token
  }
  // console.log(config)
  return config
}, function(error){

})

// 直接post get 请求都能发送的请求
let request = function (url, method='GET', data={}) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      // post 发送参数的方法
      data: qs.stringify(data),
      // get 发送参数的方法
      params: data
    }).then((res) => {
      // 请求成功返回后台的数据
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

// get post 分开

let get = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

let post = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export {
  request,
  get,
  post
}
