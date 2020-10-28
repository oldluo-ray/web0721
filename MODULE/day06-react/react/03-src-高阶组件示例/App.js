import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

/**
 *
 *
 * 高阶组件的基本逻辑:
 *
 * 开发者要去定义个函数: 函数名一般以with开头
 * const 新的组件 = withForm(需要公共状态和逻辑的组件)
 * const WithLogin = withForm(Login) 这个新的组件中有公共的状态和逻辑
 * 后期直接使用新的组件
 */

// 导入定义的withForm函数
import withForm from './withFom'

// 调用withForm得到一个增强后的新的组件
const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
        {/* <Login></Login> */}
        {/* <Register></Register> */}
      </div>
    )
  }
}
