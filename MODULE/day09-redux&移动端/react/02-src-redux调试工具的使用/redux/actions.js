//导入axios 用来发送异步请求
import axios from 'axios'
import { GET_USERS_SUCCESS } from './constants'
// 定义一个同步action. 用于执行reducer
export function getUsers(data) {
  return { type: GET_USERS_SUCCESS, data }
}

// 定义一个异步action.用来发送异步请求
export function getUsersAsync(searchName) {
  return dispatch => {
    //发送异步请求
    axios
      .get('http://localhost:5000/search/users', {
        // get请求传参,写的是params属性  post请求传参: 写data
        params: {
          searchName
        }
      })
      .then(res => {
        //请求成功之后,执行同步action
        console.log('数据获取成功了', res)
        // res.data.items 才是我们要的数据
        dispatch(getUsers(res.data.items))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
