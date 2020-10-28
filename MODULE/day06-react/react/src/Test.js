import React, { useState, useEffect } from 'react'

export default function Test() {
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
  }, [])

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
