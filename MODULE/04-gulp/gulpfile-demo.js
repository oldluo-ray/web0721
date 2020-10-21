// 导入gulp对象
const gulp = require('gulp')

// 导入fs
const fs = require('fs')
const rs = fs.createReadStream('./src/demo/demo1.js')
const ws = fs.createWriteStream('./src/demo/demo2.js')

// 第一个任务.打印一句话
// 警告:Did you forget to signal async completion?
// 解决:
// 1. 回调函数中接收一个参数,任务执行完毕之后调用即可
// gulp.task('haha', function(done) {
//   console.log('静哥好骚啊~~~')
//   done()
// })
// 2. 将回到函数改为一个异步函数
// gulp.task('haha', async function() {
//   console.log('静哥好骚啊~~~')
// })

// 3. 返回一个流对象即可
gulp.task('haha', function() {
  console.log('静哥好骚啊~~~')
  return rs
})

rs.pipe(ws) //返回的还是流对象
