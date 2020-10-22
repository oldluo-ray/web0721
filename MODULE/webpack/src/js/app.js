import { foo, bar } from './module1'
import { add, mul } from './module2'
import msg from './module3'

//导入json
// 1. json中不需要导出
// 2. 导入的时候,按照默认导出的方式导入
import data from '../json/data.json'

foo()
bar()
console.log(add(1, 2))
console.log(mul(1, 2))
console.log(msg.getMsg())
msg.setMsg('hehe')
console.log(msg.getMsg())

console.log(data)
