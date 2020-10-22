const { resolve } = require('path')
module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/app.js',
    path: resolve(__dirname, 'dist')
  }
}
