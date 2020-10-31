// 将action对象,封装起来
// 需求1: 数字增加1  {type: 'INCREMENT', data: 1}
// 需求2: 数字增加2  {type: 'INCREMENT', data: 2}
// actionCreator

import { INCREMENT, DECREMENT, ASYNCINC } from './constants'
function inc(data) {
  return { type: INCREMENT, data: data }
}

function dec(data) {
  return { type: DECREMENT, data: data }
}

// function asyncInc(data) {
//   return { type: ASYNCINC, data: data }
// }

//定义一个异步action
function asyncInc(data) {
  return dispatch => {
    // 执行异步操作
    setTimeout(() => {
      // 这里表示异步操作成功了
      dispatch(inc(data))
    }, 2000)
  }
}

export { inc, dec, asyncInc }
