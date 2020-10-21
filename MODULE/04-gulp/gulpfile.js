// 导入gulp对象
const gulp = require('gulp')
const jshint = require('gulp-jshint')

// 注意: default是gulp中一个默认任务.执行时,只需要执行gulp指令,不需要声明任务名
// gulp.task('default', function() {
//   console.log('defult')
// })

gulp.task('jshint', function() {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
})
