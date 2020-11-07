import React from 'react'
// 定义一个数组. 数组里面有多个个数据, 对应的就会动态的渲染出来多少个Route组件
//引入组件 Home
// import Home from '../pages/Home'
// import Login from '../pages/Login'
//懒加载
// 传统的import方式,会将代码中写的所有组件,在最开始答应页面的时候,全部加载下来.性能不好
// 懒加载: 就是什么时候用到这个组件了,这个组件才加载
// 但是: 如果使用了懒加载,必须配合suspense这个组件使用
// 为什么? 因为从加载组件到组件加载成功渲染到页面的这段时间.用户看到的是一个空白的屏幕,用户体验不好.最好就是展示一个正在加载的效果. suspense就是帮助我们加载这个效果的
// supense使用
// import {Suspense} from 'react'
// 使用suspense包裹整个应用
// <Suspense fallback={正在加载的结构}>
// ...结构
// </Suspense>
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const RegisterPhone = React.lazy(() =>
  import('../pages/Register/RegisterPhone/RegisterPhone')
)
const RegisterCode = React.lazy(() =>
  import('../pages/Register/RegisterCode/RegisterCode')
)
// 路由表: 根据这个数组,动态的创建Route
const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register/phone',
    component: RegisterPhone
  },
  {
    path: '/register/code',
    component: RegisterCode
  }
]

export { routes }
