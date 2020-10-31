// 将action对象,封装起来
// 需求1: 数字增加1  {type: 'INCREMENT', data: 1}
// 需求2: 数字增加2  {type: 'INCREMENT', data: 2}
// actionCreator

import { INCREMENT } from './constants'
function inc(data) {
  return { type: INCREMENT, data: data }
}

export { inc }
