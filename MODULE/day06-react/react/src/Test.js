import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Test extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  componentDidMount() {
    document.body.appendChild(this.container)
  }

  render() {
    let node = (
      <div>
        <h1>test组件</h1>
      </div>
    )
    return ReactDOM.createPortal(node, this.container)
  }
}
