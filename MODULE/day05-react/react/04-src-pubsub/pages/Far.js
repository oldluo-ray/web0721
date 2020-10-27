import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'

export default class Far extends Component {
  componentDidMount() {
    // 一般都是在组件挂载成功之后,订阅
    // 当订阅的话题,发布了之后,回调函数会被触发
    PubSub.subscribe('xxx', function(msg, data) {
      console.log('far组件接收到的: ' + msg, data)
    })
  }
  render() {
    return (
      <div>
        Far组件
        <Son></Son>
        <button
          onClick={() => {
            PubSub.unsubscribe('xxx')
          }}
        >
          取消话题
        </button>
        <button
          onClick={() => {
            PubSub.clearAllSubscriptions()
          }}
        >
          取消所有订阅
        </button>
      </div>
    )
  }
}
