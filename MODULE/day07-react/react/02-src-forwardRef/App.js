import React, { Component } from 'react'
import Test from './Test'
const xxxRef = React.createRef()
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>这是一个h1标签</h1>
        <Test a={xxxRef}></Test>
        <button
          onClick={() => {
            console.log(xxxRef)
          }}
        ></button>
      </div>
    )
  }
}
