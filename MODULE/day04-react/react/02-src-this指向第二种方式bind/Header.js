import React from 'react'
export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    this.handleCount = this.handleCount.bind(this)
  }

  handleCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log(this)
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleCount}>按钮</button>
      </div>
    )
  }
}
