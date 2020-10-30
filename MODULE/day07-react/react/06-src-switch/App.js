import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Route,
  Switch
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
          {/* 注意: 默认只要浏览器地址栏路径发生变化.所有Route都会和pathbname进行匹配.如果前面的匹配成功,后面还会继续进行匹配  */}
          {/* 但是如果Route被Switch包裹,前面的匹配成功了,后面就不匹配了 */}
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
