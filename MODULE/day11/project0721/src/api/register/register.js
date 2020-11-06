import axios from 'axios'
// 封装验证手机号是否注册过的函数
export function verifyPhone(phone) {
  // 注意: 使用了代理之后,请求路径不要写域名和端口号. 直接写后面的路径就可以
  return axios('/regist/verify_phone', {
    method: 'POST',
    data: {
      phone
    }
  })
}
