//导入module1
// 由于module1 使用的是分别导出方式,所以导入的时候 要写{}
import { foo, bar } from './module1'
// 导入module2
// 由于module2 使用了统一导出方式, 所以导入时和上面是一样的
import { data, giao, a } from './module2'

// 导入module3
// 由于module3 使用了默认导出,所以导入是下面的形式
import jg from './module3'

foo()
bar()
console.log(data)
giao()
console.log(jg.msg)
console.log(a)
