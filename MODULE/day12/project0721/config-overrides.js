const {
  override, // 专门用来覆盖webpack配置项的
  fixBabelImports, // antd使用的一个包, 实现antd按需加载
  addPostcssPlugins, // 将我们的px-> rem的包
  addDecoratorsLegacy
} = require('customize-cra')

module.exports = override(
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  // rem适配. 将px改为rem
  // remUnit: 表示以iphone6手机为例的跟字体
  // 值为 37.5时, 表示使用rem方式二的方式进行适配
  // 值为 100是, 表示使用rem方式一的方式进行适配
  // 注意: 这个插件,仅仅是帮助我们将px改成rem. 设置根字体这个事,还需要程序员自己做
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 100 })]),
  // 使用修饰符语法
  addDecoratorsLegacy()
)

