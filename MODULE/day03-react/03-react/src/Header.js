import React from 'react'
export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      msg: '我是一个字符串'
    }
  }
  render() {
    console.log(this)
    return (
      <div>
        <h3>{this.state.count}</h3> <p>{this.state.msg}</p>
        <button
          onClick={() => {
            // 如果直接修改数据,数据可以被修改,但是不能让视图更新
            // this.state.count++
            // setState的作用:1. 修改state的数据, 2. 更新视图
            this.setState({
              count: this.state.count + 1
            })
            console.log(this.state.count)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
