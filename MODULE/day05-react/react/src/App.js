import React, { Component } from 'react'
import Son from './Son'

export default class App extends Component {
  state = {
    count: 0
  }
  handle = () => {
    this.setState({
      count: 1
    })
  }
  render() {
    console.log('app组件更新了')
    return (
      <>
        <div>app组件</div> <h1>呵呵</h1>
        <h2>嘿嘿</h2>
        <Son count={this.state.count}></Son>
        <button onClick={this.handle}>按钮</button>
      </>
    )
  }
}
