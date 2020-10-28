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
        {/* renderprops技术, 要求在使用Position组件的时候,加一个render属性. render属性的值必须是一个回调函数 */}
        {/* <Position
          render={position => {
            return <Mouse position={position}></Mouse>
          }}
        ></Position> */}

        {/* <Position
          render={position => {
            return <Cat position={position}></Cat>
          }}
        ></Position> */}
        <Position>{position => <Mouse position={position}></Mouse>}</Position>
        <Position>
          {position => {
            return <Cat position={position}></Cat>
          }}
        </Position>
      </div>
    )
  }
}
