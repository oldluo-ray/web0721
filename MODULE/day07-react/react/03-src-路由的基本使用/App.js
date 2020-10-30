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
          <Route path='/' component={Home}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
          {/* Route组件和地址栏路径进行匹配: 默认使用的匹配规则: 叫做模糊匹配 */}
          {/* 模糊匹配的规则: pathname只要以path开头,就可以. 
            pathname和path想比,pathname至少和path相等.要么就再长一点. 并不是说字符串中包含就可以.应该是一级路径的情况下,完全相同
          */}
          {/* pathname: /home/abc path: / path: /home */}

          
        </div>
      </Router>
    )
  }
}
