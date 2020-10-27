import React, { Component } from 'react'
import Far from './pages/Far'
import PubSub from 'pubsub-js'

export default class App extends Component {
  state = {
    msg: '默认值'
  }

  componentDidMount() {
    // 一般都是在组件挂载成功之后,订阅
    // 当订阅的话题,发布了之后,回调函数会被触发
    this.token = PubSub.subscribe('xxx', function(msg, data) {
      console.log(msg, data)
    })
  }
  cancleS = () => {
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div>
        app组件 <Far></Far>
        <button onClick={this.cancleS}>app按钮-取消订阅xxx话题</button>
        <button
          onClick={() => {
            PubSub.publish('yyy', '呵呵')
          }}
        >
          app按钮发布信息
        </button>
      </div>
    )
  }
}
