import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink,
  withRouter
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

import './app.css'
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavLink to='/home' activeClassName='selected'>
          首页
        </NavLink>
        <NavLink to='/detail' activeClassName='selected'>
          详情
        </NavLink>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
      </div>
    )
  }
}

const WithApp = withRouter(App)
export default WithApp
