const express = require('express')

const app = express()

// 启动服务器 node index.js

// 解决跨域
app.use((req, res, next) => {
  // 允许跨域的地址
  res.set('Access-Control-Allow-Origin', '*')
  // 允许跨域的请求方式
  res.set('Access-Control-Allow-Mehtods', 'GET,POST,PUT,DELETE')
  // 允许跨域的请求头
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  // 预检请求的缓存时间
  res.set('Access-Control-Max-Age', 36400)
  // 是否进行预检请求
  res.set('Access-Control-Allow-Credentials', true)

  if (req.method === 'options') {
    // 预检请求 直接返回响应
    res.end()
    return
  }

  next()
})

/*
  后台路由
    key： /search/users
    value： function () {}
*/
app.get('/search/users', function(req, res) {
  res.json({
    items: [
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604288631395&di=70f3e37dda5399f32552e7fcfefee4e7&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180919%2F22%2F1537366097-VpICTQrwUK.jpg',
        id: 1
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045602305,2423295982&fm=26&gp=0.jpg',
        id: 2
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 3
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045602305,2423295982&fm=26&gp=0.jpg',
        id: 4
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2045602305,2423295982&fm=26&gp=0.jpg',
        id: 5
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 6
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604139739956&di=685e8021d6f88d6fb0d72d6a1a47a445&imgtype=0&src=http%3A%2F%2Fimg.gove.cn%2Ff%2F2017%2F05%2F20%2F73da70d07a490932_640o.jpg',
        id: 7
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604139739956&di=685e8021d6f88d6fb0d72d6a1a47a445&imgtype=0&src=http%3A%2F%2Fimg.gove.cn%2Ff%2F2017%2F05%2F20%2F73da70d07a490932_640o.jpg',
        id: 8
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604139739956&di=685e8021d6f88d6fb0d72d6a1a47a445&imgtype=0&src=http%3A%2F%2Fimg.gove.cn%2Ff%2F2017%2F05%2F20%2F73da70d07a490932_640o.jpg',
        id: 9
      }
    ]
  })
})

app.listen(5000, 'localhost', err => {
  if (!err) console.log('服务器启动成功了，请访问 http://localhost:5000')
  else console.log(err)
})
