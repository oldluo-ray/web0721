import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
export default class App extends Component {
  // 一个完整的url地址: 协议://域名:端口号/路径?查询字符串#哈希值
  render() {
    return (
      <Router>
        <div>
          <Link to='/home'>首页</Link>
          <Link to='/detail'>详情</Link>

          <Route path='/home' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
          {/* 只要路径是/. 然后代码执行到了这个重定向组件的时候,那么这个组件,就会自动修改浏览器地址栏的地址 */}
          <Redirect to='/home'></Redirect>
        </div>
      </Router>
    )
  }
}
