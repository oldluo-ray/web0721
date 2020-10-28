import React, { useState, useEffect } from 'react'
// 小结 useEffect:
// 1. 从react包中导出
// 2. useEffect(()=>{
//     return ()=>{}
// },[])
// 第一个参数: 默认模拟的是组件挂载和组件更新
// 如果第二个参数: 写了一个空的数组. 第一个参数只模拟组件挂载
// 如果中括号中,监听了某些数据.那么第一个参数挂载成功会调用.监听的数据发生变化了,也会调用.但是没有监听的数据,变化了,就不会调用
// 第一个参数,可以返回一个回调函数. 这个回调函数.模拟组件即将卸载

// useEffect的作用: 就是为了开发者可以在函数组件中,使用生命周期钩子函数

// hooks的使用规则:

// 1. 可以在函数组件中使用,也可以在自定义的hooks中使用.不能再普通函数或类组件中使用
// 2. 在函数组件或自定义hooks中用的时候,只能在顶级作用域使用

export default function Test(props) {
  // useState可以在函数组件中使用状态
  // useState(默认值)
  // 返回一个数组. 数组中可以结构一个数据和一个操作数据的方法. 这个是一对,配合使用
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('默认值')

  // 使用生命周期钩子函数
  // 这个回调函数,相当于是类组件中生命周期钩子函数 componentDidMount 和 componetDidUpDate
  // 如果在第二个参数的位置上,传入一个空数组,则这个回调函数,只表示componentDidMount
  useEffect(() => {
    console.log('回调函数执行了~~~')
    // 这里还可以return 一个回调函数.这个回调函数,表示组件卸载的回调函数
    // componentWillUnmount
    return () => {
      console.log('组件卸载了~~~~')
    }
  }, [props.msg, count])

  //   if (true) {
  //     const [a, b] = useState(0)
  //   }
  function handle() {
    setCount(count + 1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
