import React, { Component } from 'react'

export default class Counter extends Component {
  handle = () => {
    // react中无法直接修改redux中的数据,需要调用dispatch方法
    // this.props.onincrement()
    this.props.inc(2)
  }

  handleDec = () => {
    // this.props.ondecrement()
    this.props.dec(1)
  }
  render() {
    console.log(this.props)
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.handle}>按钮+2</button>
        <button onClick={this.handleDec}>按钮-1</button>
      </>
    )
  }
}
