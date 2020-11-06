import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// 引入rem适配的代码
// fixed.js这个文件,并没有导入任何内容,只是需要执行一下,所以import后面直接写路径即可
import './utils/fixed'

ReactDOM.render(<App />, document.getElementById('root'))
