import React, { Component } from 'react'

import './index.css'
export default class Header extends Component {
  state = {
    todoName: ''
  }

  // 受控组件的change事件
  handle = e => {
    const value = e.target.value
    this.setState({
      // trim写到这里,就无法输入空格了
      todoName: value.trim()
    })
  }

  // 监听用户键盘事件
  handleConfirm = e => {
    // 如何获取用户按了哪个键
    const keyCode = e.keyCode
    // 判断是否是回车
    if (keyCode === 13) {
      // 判断用户输入是否为空,如果为空,后面的代码不需要执行
      if (!this.state.todoName) return

      // 将用户输入,封装成一个任务对象,然后添加到todos里面
      // 必须在app组件中,调用setState.才能正确的修改todos
      //真正要做的事情是: 将todoName传递给app组件
      this.props.addTodo(this.state.todoName)
      // 清空文本框的值
      this.setState({
        todoName: ''
      })
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          value={this.state.todoName}
          onChange={this.handle}
          onKeyUp={this.handleConfirm}
        />
      </div>
    )
  }
}
