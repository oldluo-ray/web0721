import React from 'react'
export default class Position extends React.Component {
  // 公用的状态
  state = {
    x: 0,
    y: 0
  }

  handleMove = e => {
    // 获取到鼠标的坐标,然后赋值给state
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    // 组件挂载成功,注册事件,监听鼠标移动
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    // 组件卸载的时候,要移除事件
    window.removeEventListener('mousemove', this.handleMove)
  }

  render() {
    // this.props.render拿到的就是一个回调函数
    // 将鼠标的坐标,当做实参,传入到render函数的位置上
    // this.props.render函数调用完毕之后,可以获取到对应想要渲染的组件
    // return this.props.render(this.state)
    return this.props.children(this.state)
  }
}
