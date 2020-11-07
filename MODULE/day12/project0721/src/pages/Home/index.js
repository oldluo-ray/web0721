import React, { Component } from 'react'

import { Link } from 'react-router-dom'

console.log('home加载了')

export default class Home extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div>
        <h1>home</h1>
        <h2>
          欢迎:
          {this.props.location.state && this.props.location.state.nickName}
        </h2>
        <Link to='/login'>登录</Link>
      </div>
    )
  }
}
