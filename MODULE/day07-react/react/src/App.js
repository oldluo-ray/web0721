import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

import './app.css'
export default class App extends Component {
  // 一个完整的url地址: 协议://域名:端口号/路径?查询字符串#哈希值
  render() {
    return (
      <Router>
        <div>
          {/* NavLink的功能和用法是Link是一样的. 但是比Link更强大. 会自动帮我们开发者添加类名,从而实现高亮显示
          
            默认加的是active类名.
            也可以自定义类名: 使用activeClassName这个属性.这个属性的值,就是自定义的类名
          
          */}
          <NavLink to='/home' activeClassName='selected'>
            首页
          </NavLink>
          <NavLink to='/detail' activeClassName='selected'>
            详情
          </NavLink>

          <Route path='/home' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
