import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  state = {
    msg: '默认值'
  }
  render() {
    return (
      <div>
        {this.state.msg && <Test msg={this.state.msg}></Test>}
        <button
          onClick={() => {
            this.setState({
              msg: ''
            })
          }}
        >
          app组件的按钮
        </button>
      </div>
    )
  }
}
