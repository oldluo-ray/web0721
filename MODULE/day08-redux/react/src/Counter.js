import React, { Component } from 'react'
//在Counter组件中,想使用redux中的数据
//1. 导入connect函数
import { connect } from 'react-redux'
//2.调用connect得到一个高阶组件,这个高阶组件会将数据,传给我们定义的react组件

class Counter extends Component {
  handle = () => {
    // react中无法直接修改redux中的数据,需要调用dispatch方法
    this.props.dispatch({ type: 'INCREMENT', data: 1 })
  }
  render() {
    console.log(this.props)
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.handle}>按钮+1</button>
      </>
    )
  }
}

// 注意: 如果connect函数第一次调用,不传任何参数.我们react的组件,只能通过props拿到一个dispatch方法,但是拿不到数据.

// 如果要想获取redux中的数据,需要定义一个函数,传入到connect第一次调用中
// 这个mapStateToProps函数,要传入到connect函数第一次调用中. connect函数底层执行的时候,就会调用这个mapStateToProps函数,调用的时候,会将redux中最新的state,传入到这个函数的形参上

// 这个state就是redux中最新的state
// 这个mapStateToProps这个函数,第一次执行connect的时候,调用,将redux中的数据,传给react组件
// 后面当redux的数据发生变化了,connect底层还会再次调用这个函数,将最新的数据传给react组件
const mapStateToProps = state => {
  // return 的这个对象怎么写的.react组件的props里面就是有什么数据
  return {
    // state里面有三条数据count,msg, arr
    // 但是counter组件,只要count属性的值,所以写的时候,就把count的值传过去就可以了
    count: state.count
  }
}
const WithCounter = connect(mapStateToProps)(Counter)
export default WithCounter

/**
 *
 *  function connect(){
 *       return function(){
 *              return class extens Component{
 *             }
 *        }
 */
