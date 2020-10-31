import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 复习:
// 为什么要学习前端路由: 因为要写单页面应用
// 在react写前端使用的包: react-router-dom
// 三个核心组件:
// BrowserRouter as Router   监听浏览器地址栏的变化, 让Route和地址栏路径进行匹配
// Route   Route用自己的path属性和pathname(地址栏路径)进行匹配, 如果匹配成功,就渲染   component对应的组件
// Link 改变浏览器地址栏的路径,但是不发送请求

// 匹配模式: 模糊匹配和精确匹配
// 模糊匹配(默认情况) pathname以path开头
// 精确匹配(给Route添加了exact属性) pathname和path一致

// 前端路由执行的过程: 如果浏览器地址栏的路径,发生变化,Router组件会监听到.让页面中所有的Route组件用自己的path和pathname去进行对比. 如果匹配成功,就渲染组件. 上面的匹配成功了,后面的还会继续匹配

// Switch   上面的匹配成功,后面的就不匹配了  用来包裹Route组件
// Redirect  重定向
// NavLink  自动加类名,实现高亮. activeClassName 可以自定义类名

// 编程式导航:
// history  push/replace('路径', state) 都用来跳转页面
// location location.state 用来获取编程式导航传过来的数据
// match  params 用来获取路由参数

// 什么是路由参数: 跟路径格式相同,写在路径后面的  /路径/路径/路由参数
// 怎么去定义: <Route path="/路径/:路由参数?" component={组件}></Route>
// 怎么传递路由参数: <Link to="/路径/参数"></Link>

// 嵌套路由: 想要二级路由展示,一级路由必须要能够展示.所以二级路由的路径,应该是一级路由的路径拼接上二级路由的路径

// withRouter 作用: 默认普通的组件,无法通过this.props获取history,location, match. 但是如果想使用,可以使用withRouter来封装一个高阶组件.
// const WithXXX = withRouter(组件)

// var a = 1
// console.log(a)
