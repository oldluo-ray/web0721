import React from 'react'
export default class Header extends React.Component {
  // constructor(props) {
  //   super(props)
  //   console.log(this.props)
  // }
  // es7草案中,提案,如果要给当前类实例添加属性,就不需要写constructor了.应该使用下面的语法
  state = {
    count: 1
  }
  // 这样定义函数.这个函数,直接添加到了当前组件的实例身上
  // 注意:虽然是es7草案的语法.但是因为脚手架中使用了babel.所以可以放心使用
  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // 使用props属性,来接收组件外部传进来的数据
    // console.log(this.props)
    // const Test = this.props.component
    // // this.props.msg = '123'
    // this.props.xxx.name = 'ls'
    return (
      <div>
        <h3>{this.state.count}</h3>
        <div>{this.props.msg}</div>
        {/* <Test></Test> */}
        {/* 底层是对象方法调用,所以这个函数里的this,一定指向当前组件实例 */}
        <button onClick={this.handleCount}>按钮</button>
      </div>
    )
  }
}
