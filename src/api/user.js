// 用户相关的请求模块
import request from '@/utils/request'

// export const login = data => {
//   return request({
//     method: 'POST',
//     // url: '/home/data',
//     url: '/home/data',
//     data
//   })
// }
// 发送短信验证码
export const sendSms = mobile => {
  return request({
    method: 'GET',
    // url: '/home/data',
    url: `/mp/v1_0/captchas/${mobile}`
  })
}
//    /mp/v1_0/authorizations
export const login = data => {
  return request({
    method: 'POST',
    // url: '/home/data',
    url: '/mp/v1_0/authorizations',
    data
  })
}
