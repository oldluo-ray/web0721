const { render } = require("@testing-library/react")

1. 组件的生命周期: 
   注意:  只有类组件有生命周期钩子函数, 函数组件没有声明周期钩子函数

   三个阶段: 
     创建阶段
        constructor 定义数据,绑定this
        render      返回结构
        componentDidMount 发送请求,订阅,dom操作
     更新阶段
        render     不要调用setState
        componentDidUpdate  如果一定要使用setState,给个出口(if)
     卸载阶段   
        componentWillUnMount  清除操作(清除定时器,取消订阅,取消dom注册的事件)

2. 组件通讯(组件之间互相传递数据)
    props 
        父->子 props 
        子->父 父组件定义函数,通过props,传递给子组件,然后子组件调用

    context 自上而下,跨级传递 
        React.createContext()
    
    pubsubjs 是一个js库 设计模式中的: 发布订阅模式

        传递数据时,不要求组件之间有嵌套关系

        npm i pubsub-js 
        import PubSub from 'pubsub-js'
import { PureComponent } from 'react'
        只要当前组件要使用订阅或发布,就必须导入 
        订阅: PubSub.subscribe('话题', (msg, data)=>{})
        发布: PubSub.publish('话题', 数据)


    3. 性能优化
    
        减轻state 跟渲染无关的数据,不要写在state里面

        shouldComponentUpdate(nextProps, nextState)
        如果返回true,当前组件会更新, 如果返回false, 当前组件不更新 
        获取旧的props和state: this.state, this.props

        问题: 如果state和props的数据很多.我们写的时候,也会写很多,太麻烦了.所以使用纯组件

        纯组件: PureComponent 
        问题: 底层在对比数据的时候,使用的是浅层对比

        我们在写代码需要注意: 不要直接修改原来的数据,根据原来的数据得到一份新的数据,然后修改新的数据


