import React from 'react'
export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  // 这个函数就是按钮的点击事件处理函数
  // 这个方法,加到了原型上
  handleCount() {
    // console.log('111')
    // 这个函数是加到原型上, 触发点击事件的时候,react底层.最终在原型上找到了这个函数,然后普通调用了这个函数. 函数普通调用this应该执行window. 但是我们的代码,被babel编译过.变成了严格模式,所以this就指向了undefined
    // console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>

        {/* <button onClick={this.handleCount}>按钮</button> */}
        {/* 此时,handleCount就不是事件处理函数了.箭头函数才是事件处理函数 */}
        <button
          onClick={() => {
            // this肯定指向当前组件实例
            // 此时this.handleCount就是对象方法调用模式. 这个模式,对象是谁,函数里面的this就是谁
            this.handleCount()
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
