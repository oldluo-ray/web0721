import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg: 'a'
  }
  //#region
  // handle = () => {
  //   // 注意的第一个问题: setState多次连续调用.合并问题
  //   this.setState({
  //     count: this.state.count + 1,
  //     msg: 'b'
  //   })
  //   this.setState({
  //     count: this.state.count + 2
  //   })
  //   this.setState({
  //     count: this.state.count + 3
  //   })
  //   // 合并完之后
  //   // this.setState({
  //   //   count: this.state.count + 3,
  //   //   msg: 'b'
  //   // })
  //   console.log(this.state.count)
  // }
  //#endregion

  //#region
  // handle = () => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1
  //     },

  //     // 第二个参数: 是数据修改完毕,并且视图更新完毕,才会调用
  //     () => {
  //       console.log(this.state.count)
  //     }
  //   )
  // }
  //#endregion

  handle = () => {
    this.setState(
      // 这里接收到的state和props是最新的的state和props
      (state, props) => {
        return {
          count: state.count + 1
        }
      },
      // 第二个参数: 是数据修改完毕,并且视图更新完毕,才会调用
      () => {
        // console.log(this.state.count)
      }
    )
    this.setState(
      // 这里接收到的state和props是最新的的state和props
      (state, props) => {
        return {
          count: state.count + 2
        }
      },
      // 第二个参数: 是数据修改完毕,并且视图更新完毕,才会调用
      () => {
        // console.log(this.state.count)
      }
    )
    this.setState(
      // 这里接收到的state和props是最新的的state和props
      (state, props) => {
        return {
          count: state.count + 3
        }
      },
      // 第二个参数: 是数据修改完毕,并且视图更新完毕,才会调用
      () => {
        // console.log(this.state.count)
      }
    )
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
