import Axios from 'axios'

import axios from 'axios'
// 定义一个发送验证法的方法
export function sendCode(phone) {
  return axios('/login/digits', {
    method: 'POST',
    data: {
      phone
    }
  })
}

// 登录的方法
export function loginPhone(phone, code) {
  return axios('/login/phone', {
    method: 'POST',
    data: {
      phone,
      code
    }
  })
}
