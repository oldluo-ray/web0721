// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App></App>, document.getElementById('root'))

// 复习
// 1. react中通过js写html结构 --> jsx
// 2. 浏览器不认识, 通过babel对jsx进行编译. 这样就实现了在js中直接写标签的功能
// 3. 在jsx中使用数据 ==> 要用到一个插值表达式 {}
// 4. 需要注意: 1. 插值表达式中不能写if或者是循环语句
//              2. 可以写任何表达式,但是不要直接渲染对象/函数
// 5. 列表渲染: 一般拿到的数据都是数组. 调用数组的map方法.得到一个新的数组.直接渲染新的数据
// 注意点: 一定要记得在最外层的标签上,加一个key属性,不加代码也可以实现,但是效率就变低了
// 6. 组件: 就是将结构和数据,封装起来,实现复用
//        函数组件
//        类组件   可以定义状态
// 如果要修改状态的值,要使用setState. 既可以修改状态.又可以更新视图

// class Demo extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return <div>{this.state.count}</div>
//   }
// }
