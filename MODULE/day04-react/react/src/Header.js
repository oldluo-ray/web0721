import React, { Component } from 'react'

// 受控组件: 组件中有表单项,表单项的值被组件的状态所控制
export default class Header extends Component {
  state = {
    text: '文本框默认值'
  }

  // change事件的事件处理函数
  // 每一用户输入的时候,都会触发
  handleChange = e => {
    // console.log(111)
    // console.log(e.target.value)
    // 1. 获取用户输入
    const value = e.target.value
    // 2. 修改状态的值
    this.setState({
      text: value
    })
  }
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
