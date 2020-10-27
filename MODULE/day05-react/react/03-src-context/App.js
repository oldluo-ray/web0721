import React, { Component } from 'react'
import Far from './pages/Far'
// const context = React.createContext()
// const { Provider, Consumer } = React.createContext()
// 注意: 不管导入多少次. context.js里面的代码只执行一次.这样就可以断定其他文件中导入context对象和这个context是同一个
import context from './context'
export default class App extends Component {
  state = {
    msg: '默认值'
  }
  render() {
    return (
      <context.Provider value={this.state.msg}>
        <div>
          app组件 <Far></Far>
        </div>
      </context.Provider>
    )
  }
}
