import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    const { username, password, repassword, handleChange } = this.props
    return (
      <div>
        <div>{username}</div>
        <div>{password}</div>
        <div>{repassword}</div>
        <h1>注册</h1>
        <form>
          用户名:
          <input
            type='text'
            value={username}
            onChange={handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={password}
            onChange={handleChange('password')}
          />
          <br />
          确认密码:
          <input
            type='password'
            value={repassword}
            onChange={handleChange('repassword')}
          />
          <br />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }
}
