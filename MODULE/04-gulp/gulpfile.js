// 导入gulp对象
const gulp = require('gulp')
// 导入jshint插件
const jshint = require('gulp-jshint')
//导入babel插件
const babel = require('gulp-babel')
// browserify
const browserify = require('gulp-browserify')
// rename重命名插件
const rename = require('gulp-rename')
// 压缩js
const uglify = require('gulp-uglify')
// 将less编译成css
const less = require('gulp-less')
// 解决css兼容性问题
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼
// 合并css
const concat = require('gulp-concat')
// 压缩css
const cssmin = require('gulp-cssmin')
// 压缩html
const htmlmin = require('gulp-htmlmin')
//自动化
const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')
// 注意: default是gulp中一个默认任务.执行时,只需要执行gulp指令,不需要声明任务名
// gulp.task('default', function() {
//   console.log('defult')
// })

// 开启代码规范检查任务
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
    .pipe(jshint.reporter('default'))
    .pipe(livereload())
})

// 开启将es6转为es5的任务
gulp.task('babel', function() {
  return gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env']
      })
    )
    .pipe(gulp.dest('./build/js'))
    .pipe(livereload())
})

// 将commonjs转为浏览器认识的代码
gulp.task('browserify', function() {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

// 压缩js
gulp.task('uglify', function() {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

// 编译less, 以及处理css的兼容性
gulp.task('less', function() {
  return gulp
    .src('./src/css/*.less')
    .pipe(
      less({
        plugins: [autoprefix] //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 合并css
gulp.task('concat', function() {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 配置任务项
gulp.task('cssmin', function() {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

// 压缩html
gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

// 自动化
//自动执行任务，编译代码
gulp.task('watch', function() {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/css/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})
// 配置默认任务.让上面的任务依次执行
// 注意: 这个默认任务,必须在最下面
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
