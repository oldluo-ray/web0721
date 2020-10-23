const { resolve } = require('path')
//导入打包html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//将css单独抽取出来的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩css的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  // entry: ['./src/js/app.js', './src/index.html'],
  // entry: './src/js/app.js',
  entry: {
    haha: './src/js/app.js'
  },
  output: {
    filename: './js/app.js',
    path: resolve(__dirname, '../dist')
  },
  mode: 'production',
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/, //找到项目中引入的所有的css文件
        use: ['style-loader', 'css-loader'] //使用loader去处理css文件,从右往左一次执行.
      },
      //处理less
      {
        test: /\.less$/, //找到项目中引入的所有的css文件
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009' // display:flex之前个时期写的是display:flexbox. 这种写法现在不用了.所以要写no-2009
                  },
                  stage: 3 // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                }),
                require('postcss-normalize')()
              ],
              sourceMap: true //也要生成一个map文件
            }
          },
          'less-loader'
        ]
        // 先将less转成css. css-loader将css转成commonjs的形式.然后使用style-loader将样式添加到页面上
        // MiniCssExtractPlugin.loader 将css以外链的形式添加到页面上
      },
      // eslint检查
      {
        test: /\.js$/, //只检测js文件
        exclude: /node_modules/, //排除node_modules文件夹
        enforce: 'pre', //提前加载使用 1. pre 优先处理 2. normal 正常处理（默认)3. inline 其次处理 4. post 最后处理
        use: {
          //使用eslint-loader解析
          loader: 'eslint-loader'
        }
      },
      // 做兼容性处理 es6->es5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 注意: presets是一个数组,里面又套了一个数组
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
                  corejs: { version: 3 }, // 解决warning警告
                  targets: {
                    // 指定兼容性处理哪些浏览器
                    chrome: '58',
                    ie: '9'
                  }
                }
              ]
            ],
            cacheDirectory: true // 开启babel缓存
          }
        }
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 是否转为base64的界定值
              outputPath: './imgs', // 决定了打包后的文件放在那里
              publicPath: '../imgs', // 声明打包之后的文件,访问这个文件的时候的路径
              name: '[hash:5].[ext]' // 将打包后的图片,重命名
            }
          }
        ]
      },

      // 处理html中的img标签
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      // 处理其他类型的文件(字体图标)
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      cssProcessorOptions: {
        // 解决没有source map问题
        map: {
          inline: false,
          annotation: true
        }
      }
    })
  ],
  devtool: 'cheap-module-source-map'
}
