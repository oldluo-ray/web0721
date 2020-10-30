import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 复习.

// 1.高阶组件
    //  作用: 将过个组件中共用的逻辑和状态抽取封装出来,实现复用
    //  使用: 
    //   1.1 定义
    function withXXX(WrappedComponent){
        return class extends Component{
            ....状态和逻辑 


            render(){
                return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
            }
        }
    }

    // 1.2 使用: 
        const WithXXX = withXXX(组件)
        <WithXXX></WithXXX>

// 2.renderProps
        // 作用: 
        // 定义: 
        // 1.1 定义一个组件
        class Position extends Component {
            ...状态和逻辑
            render(){
                return this.props.render(this.state)
                return this.props.children(this.state)
            }
        }

        // 1.2 使用 
        <Position render={data=><Cat data={data}></Cat>}></Position>
        <Position >{data=><Cat data={data}></Cat>}</Position>

// 3.hooks
        // hooks的作用: 在函数组件中可以使用类组件中的很多功能 (状态和生命周期钩子函数)
        // hooks是什么: 就是react包获取第三方包提供的一些函数,同时我们也可以自定义hooks
        // 常用的hooks: 在函数组件中使用状态, 在函数组件中使用生命周期钩子函数
        // useState, useEffect  

        // useState使用: 
        //     import {useState} from 'react'
        //     const [属性名, 操作属性的方法] = useState(初始值)

        // useEffect: 
            // 可以模拟哪些生命周期钩子函数
            // componentDidMount, componentDidUpdate, componentWillUnmount
            // 如果第二个参数不写,第一个回调函数,默认模拟创建和更新
            // 如果第二个参数是空数组,第二个回调函数,只模拟创建
            // 如果第二个参数中,监听了数据, 只有数据发生变化的时候,才会模拟更新
            // 第一个回到函数中的返回值,应该也是一个回调函数.这个回调函数,模拟卸载
            // useEffect(() => {
            //     effect
            //     return () => {
            //         cleanup
            //     }
            // }, [input])
        // 自定义hooks : 
            //  就是开发者自己定义了一个函数. 这个函数的名族是useXXX


        // hooks的使用规则: 
        // 1. 只能在函数组件和自定义hooks中使用
        // 2. hoos应该处于顶级作用域.不应该写在if/循环