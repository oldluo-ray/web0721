// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App></App>, document.getElementById('root'))

// 总结:
// 方式一: npm i create-react-app -g
//         create-react-app 醒目名称

// 方式二: npx create-react-app 项目名称
//   1. 先下载create-react-app 这个脚手架工具
//   2. 使用脚手架工具下载项目(已经配置好的项目)
//   3. 删除create-react-app这个脚手架工具

// 项目结构:
// public文件夹里面必须要有一个index.html
// src文件夹里面必须要有一个index.js(入口文件)
