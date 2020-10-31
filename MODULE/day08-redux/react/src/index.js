import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 写redux代码. 写在这是为了执行方便. 此时redux代码跟react一点都关系都没有
let initState = {
  count: 0,
  msg: 'hehe'
}
// 使用redux:
// 1. 创建store对象 import {createStore} from 'redux'
const store = createStore(counter)
// 2. 创建reducer函数
// state表示最新的数据, 注意: 一般在定义reducer的时候,state都要先给一个初始值
// action表示需求

function counter(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        // count: 0,
        // msg: 'hehe'
        count: state.count + action.number
      }
    default:
      return state
  }
}

console.log(store.getState()) // 获取到redux中state里面存储的所有的数据

// 来需求了:
//需求1: 让count属性的值加1
const countAction = { type: 'INCREMENT', number: 1 }
store.dispatch(countAction) //调用这个方法,reducer函数才会执行
console.log(store.getState())
