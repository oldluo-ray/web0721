import React, { Component } from 'react'

export default class Counter extends Component {
  handle = () => {
    // react中无法直接修改redux中的数据,需要调用dispatch方法
    // this.props.onincrement()
    this.props.inc(2)
  }

  handleDec = () => {
    // this.props.ondecrement()
    // 这个dec没有异步操作.调用了这个函数,这个函数中,调用了dispatch,所以reducer执行了
    // 相当于: 调用这个函数之后,reducer直接执行了
    this.props.dec(1)
  }

  handleAsync = () => {
    // 这个asyncInc是一个异步anction. 调用这个函数的时候,先执行了异步action中返回的那个函数 , 这个函数执行的时候,去执行了异步请求,异步请求成功,才调用dispatch.调用dispatch.reducer才执行
    this.props.asyncInc(3)
  }
  render() {
    console.log(this.props)
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.handle}>按钮+2</button>
        <button onClick={this.handleDec}>按钮-1</button>
        <button onClick={this.handleAsync}>按钮-异步计数</button>
      </>
    )
  }
}
