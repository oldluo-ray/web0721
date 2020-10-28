/**
 *  利用render props 技术定义的一个组件
 *
 *  render props 技术需要开发者定义一个组件,使用这个组件
 *
 *
 */

import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 在组件挂载的时候,监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    return this.props.render(this.state)
  }
}
