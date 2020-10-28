import React, { Component } from 'react'
import Login from './pages/Login'
import Regiser from './pages/Register'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <Login></Login>
        <Regiser></Regiser>
      </div>
    )
  }
}
