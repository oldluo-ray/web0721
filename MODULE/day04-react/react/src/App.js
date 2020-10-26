import React, { Component } from 'react'
import Header from './Header'
export default class App extends Component {
  state = {
    msg: 'app里面的数据'
  }
  render() {
    return (
      <div>
        {/* 组件经常使用组件外部的数据,如何将外部数据传递给组件呢? 使用标签属性的方式传递 */}
        <Header msg={this.state.msg} yyy={'坚持一下,还有几分中下课'}></Header>
      </div>
    )
  }
}
