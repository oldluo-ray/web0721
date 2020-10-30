import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
export default class App extends Component {
  // 一个完整的url地址: 协议://域名:端口号/路径?查询字符串#哈希值
  render() {
    return (
      // Router在一个spa中,只用一次
      // 作用: 1. 监听浏览器地址栏的变化 2. 当浏览器地址栏变化,让Route组件用path属性的值, 和地址栏的路径进行匹配,匹配成功,就渲染对应的页面(组件)
      <Router>
        <div>
          {/* 最终渲染出来一个a标签,可以修改地址栏的地址.但是不会不给服务器发送请求 */}
          <Link to='/home'>首页</Link>
          <Link to='/detail'>详情</Link>

          {/* 使用Route组件,去配置路径和对应页面的一一对应的规则 */}
          {/* 给哪个Route组件加了exact属性,那么这个组件就是精确匹配,没加的还是模糊匹配 
          
          精确匹配的匹配规则:pathname和path一模一样
          
          */}
          <Route path='/' component={Home} exact></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
