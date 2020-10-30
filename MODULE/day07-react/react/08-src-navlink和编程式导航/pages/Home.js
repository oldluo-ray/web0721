import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>首页</h1>
        <button
          onClick={() => {
            // this.props.history.push('/detail', {
            //   from: '/home',
            //   number: 1,
            //   msg: '测试',
            //   arr: [1, 2, 3]
            // })
            this.props.history.replace('/detail', {
              from: '/home',
              number: 1,
              msg: '测试',
              arr: [1, 2, 3]
            })
          }}
        >
          跳转到detail
        </button>
      </div>
    )
  }
}
