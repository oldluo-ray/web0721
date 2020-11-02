import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 复习:
// redux: 是一个状态管理的js库(独立于任何的流行框架和ui库)
// redux三个重要的概念:
// action: 表示需要(就是对象) 一般都是封装一个函数(actionCreator)  要求至少有一个type属性
// reducer:  表示具体执行需要的juese 实际上就是一个纯函数(不能写异步操作)
//    reducer执行的时机:1. 创建store的时候会调用一次,为了初始化数据 2. 调用dispatch的时候会执行
// store:  用来创建store对象

// 想要在react中使用redux: 要使用一个包  react-redux
// import {Provider, connect} from 'react-redux'
// Provider一般在根组件中包裹结构,只需要写一次. 要写store属性,值为stroe对象
// connect 哪个组件需要使用redux数据,就使用connect得到一个容器组件.将redux的数据,从容器组件中传给展示组件
// 容器组件: 在容器组件中写跟redux相关的代码(实际就是写connect)
// 展示组件: 就是写react组件. 通过props属性,获取传递过来的redux的数据和操作redux数据的方法

// connect(state=>({count: state.count }), {actionCreator})(组件组件)
// connect函数第一调用的第一个参数是一个回调函数. 这个回调函数在第一次执行connect函数的时候,会被调用一次.为了将redux的数据传递给显示组件(一开始就要将数据先传递下去). 后面只要redux数据更新了,这个回调函数就会被调用(获取到最新的数据,将最新的数据,再传递给展示组件).

// connect函数第一次调用的第二个参数,简写的时候,可以传入一个对象.对象中传入actionCreator
// connect函数会将这个actionCreator进行封装
// 封装的这个函数和actionCreator的名字是一样的
// function actionCreator(dispatch){
//     // 里面的这个actionCreator才是传过来的那个
//     dispatch(actionCreator())
// }

// 在展示组件中,获取到的那个方法,其实是封装好的那个方法

// redux中默认不支持发送异步请求
// 如果想在redux中发送异步请求要使用一个包 redux-thunk
// 使用: 1. 下包 npm i redux-thunk
//       2. import {applyMiddleware} from 'react'
//          createStore(reducer, applyMiddleware(thunk))
//       3. 在actions里面定义一个异步action
//   function 异步action名字(){
//       return dispatch =>{
//          发送异步请求
//          异步成功之后,调用dispatch传入同步action
//       }
//   }
