import '@babel/polyfill'

import { foo, bar } from './module1'
import { add, mul } from './module2'
import msg from './module3'

//导入json
// 1. json中不需要导出
// 2. 导入的时候,按照默认导出的方式导入
import data from '../json/data.json'

//引入css
// 注意引入css.import 后面直接写路径即可. 后缀名不可以忽略
import '../css/index.css'
import '../less/app.less'
//引入字体样式文件
import '../less/iconfont.less'

foo()
bar()
console.log(add(1, 2))
console.log(mul(1, 2))
console.log(msg.getMsg())
msg.setMsg('hehe')
console.log(msg.getMsg())

console.log(data)

// const fn = () => {
//   console.log(123)
// }

// const p = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('promise执行成功了')
//   }, 1000)
// })

// p.then(res => {
//   console.log(res)
// })
