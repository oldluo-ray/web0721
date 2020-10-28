import React, { Component } from 'react'
import Login from './pages/Login'
import Regiser from './pages/Register'

import withForm from './withForm'

const WithLogin = withForm(Login)
const WithRegister = withForm(Regiser)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* <Login></Login>
        <Regiser></Regiser> */}
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
