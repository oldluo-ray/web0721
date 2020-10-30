import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>详情页</h2>
        <button
          onClick={() => {
            this.props.history.replace('/home')
          }}
        >
          跳转到home
        </button>
      </div>
    )
  }
}
