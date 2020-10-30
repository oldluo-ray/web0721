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
    console.log(this.props)
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
          {/* 
            小结: 如果需要在js中实现页面路径变化. 需要使用history对象. 
            注意: 只有被Route组件,渲染的组件. 才能通过props.拿到history. 其他的组件无法获取
            history.push('路径') 往历史记录里面添加一条
            history.replace('路径') 在历史记录中,把当前这一条替换掉

            location对象的重要的属性: 
              pathname: 地址栏路径
              search: 地址栏查询字符串
              state: 编程式导航push和replace第二个参数的值


            match对象
              params属性.可以获取到路由参数 


            路由参数是: 直接写在路径后面的参数.格式和路径是一样
            /home/1 

            使用路由参数: 
            1.定义: <Route path="/路径/:参数名/:参数名?"></Route>
              如果参数名后面没有加?,表示这个参数是必填的. 如果加了?.表示可以不写
            2. 传递的方式
              <Link to="/路径/参数"></Link>
          
          */}
          <Route path='/home' component={Home}></Route>
          <Route path='/detail/:id?' component={Detail}></Route>
        </div>
      </Router>
    )
  }
}
