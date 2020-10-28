import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Mouse></Mouse>
        <Cat></Cat> */}
        {/* <Position
          render={state => {
            return <Mouse></Mouse>
          }}
        ></Position> */}
        {/* 这里使用的是position组件,但是回调函数返回mouse组件,实际上,回调函数返回谁,这个位置最终渲染谁的结构 */}
        <Position render={state => <Mouse state={state}></Mouse>}></Position>

        <Position render={state => <Cat state={state}></Cat>}></Position>
      </div>
    )
  }
}
