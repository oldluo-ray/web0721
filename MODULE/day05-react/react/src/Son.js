import React, { Component, PureComponent } from 'react'

// 纯组件的功能和component的功能几乎是一样,但是,纯组件将shouldComponentUpdate增强了,自动判断当前的props和state的值是否发生了变化
// 注意: 纯组件,在底层对比state和props的时候,使用的是浅层对比
// 如果比较基本数据类型,比较的是值
// 如果比较复杂数据类型,比较的是地址值
export default class Son extends PureComponent {
  state = {
    msg: 'xxx',
    obj: {
      name: 'zs'
    }
  }
  // 这个函数是传入的新的props以及state更新的时候会被触发
  // 这个函数要求返回一个boolean值,返回true,就执行render. 返回false就不执行render
  // shouldComponentUpdate 只有在更新阶段才会被调用
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('son组件的shouldComponetUpdate执行了')
  //     // console.log(nextProps) //获取到最新的props的值
  //     // console.log(this.props) //获取到旧的props的值
  //     // console.log(nextState) //获取到最新的state的值
  //     // console.log(this.state) //获取到旧的state的值
  //     if (
  //       nextProps.count !== this.props.count ||
  //       nextState.msg !== this.state.msg
  //     ) {
  //       return true
  //     }
  //     return false
  //   }

  handle = () => {
    let obj = { ...this.state.obj }
    obj.name = 'ls'
    this.setState({
      //   msg: 'xxx'
      obj
    })
  }
  render() {
    console.log('son组件更新了')
    return (
      <>
        <h1>{this.state.obj.name}</h1>
        <div>Son组件,{this.props.count}</div>
        <div>{this.state.msg}</div>
        <button onClick={this.handle}>son的按钮</button>
      </>
    )
  }
}
