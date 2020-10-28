import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = name => {
    return e => {
      this.setState({
        [name]: e.target.value
      })
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.username}</div>
        <div>{this.state.password}</div>
        <h1>登录</h1>
        <form>
          用户名:
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <br />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }
}
