// 小agiao

// function foo() {
//   console.log('fOo----')
// }

// 优化1:
// let module = {
//   msg: '一giao,窝里giaogiao',
//   foo() {
//     console.log('fOo----')
//   },
//   getMsg() {
//     console.log(this.msg)
//   }
// }

// 优化2: IIFE
;(function(w, $) {
  let msg = '呵呵呵'

  function foo() {
    console.log('foo-----')
  }

  function getMsg() {
    console.log(msg)
  }

  w.module = {
    foo,
    getMsg
  }
})(window, jquery)

// 总结:
// 在没有出现模块化之前,我们写的代码存在全局污染的问题,数据不安全的问题.
// 为了解决问题:会使用自调用函数.将数据包裹起来,暴露接口.也解决了全局污染的问题
// 一般会将window对象和第三方包,传入到自调用函数中,一方面为了压缩时,文件更小.另一方面,出于后期代码维护的角度,让代码的可读性更高
