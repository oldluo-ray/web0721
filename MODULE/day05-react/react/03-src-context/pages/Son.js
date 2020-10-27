import React, { Component } from 'react'
// const context = React.createContext()
import context from '../context'

export default class Son extends Component {
  // 这是给当前组件,添加静态属性的一种简写形式
  static contextType = context
  render() {
    console.log(this)
    return <div>Son组件, {this.context}</div>
    // return (
    //   <context.Consumer>{data => <div>Son组件, {data}</div>}</context.Consumer>
    // )
  }
}

// Son.contextType = context
