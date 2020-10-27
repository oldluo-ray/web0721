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

  // 点击复选框的事件处理函数
  handleChange = e => {
    const checked = e.target.checked
    //将状态里面的数据的isDone改为checked的值
    // 需要将要修改的数据的id和最终要修改的值都传递给app组件
    this.props.updateTodo(checked, this.props.todo.id)
  }

  // 删除按钮的点击事件
  handleDel = () => {
    this.props.delTodo(this.props.todo.id)
  }
  render() {
    // console.log(this.props.todo)

    const { todo } = this.props

    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <label>
          <input
            type='checkbox'
            checked={todo.isDone}
            onChange={this.handleChange}
          />
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>
        </label>
        <button
          className='btn btn-danger'
          style={{ display: this.state.isShow ? 'block' : 'none' }}
          onClick={this.handleDel}
        >
          删除
        </button>
      </li>
    )
  }
}
