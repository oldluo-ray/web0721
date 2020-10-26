import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    // 跟视图渲染有关的数据,都应该定义在状态里面
    isShow: false
  }

  // 鼠标移入到item的事件处理函数
  handleEnter = () => {
    this.setState({
      isShow: true
    })
  }

  // 鼠标移入到item的事件处理函数
  handleLeave = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    // console.log(this.props.todo)
    const { todo } = this.props
    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <label>
          <input type='checkbox' checked={todo.isDone} />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button
          className='btn btn-danger'
          style={{ display: this.state.isShow ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
