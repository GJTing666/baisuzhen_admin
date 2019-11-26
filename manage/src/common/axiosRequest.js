// 集中发送axios
// 所有的ajax发送的地方
import {request, get, post} from './axios'

// 登录请求
// params是一个对象，包含data
let loginRequest = (params) => {
  request('login', 'post', params.data).then((res) => {
    params.success(res)
  }).catch((err) => {
    params.error(err)
  })
}

export {
  loginRequest
}
