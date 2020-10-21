(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 导入module2
// 由于module2 使用了统一导出方式, 所以导入时和上面是一样的
(0, _module.foo)();

// 导入module3
// 由于module3 使用了默认导出,所以导入是下面的形式
//导入module1
// 由于module1 使用的是分别导出方式,所以导入的时候 要写{}

(0, _module.bar)();
console.log(_module2.data);
(0, _module2.giao)();
console.log(_module4.default.msg);
console.log(_module2.a);
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
function foo() {
  console.log('foo----');
}

function bar() {
  console.log('bar----');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = '哈哈哈';

function giao() {
  console.log('giaogiaogiao~~~~');
}
var a = 1;
exports.data = data;
exports.giao = giao;
exports.a = a;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 注意: export default 一个js文件(模块)只能写一次
exports.default = {
  msg: '静哥叫爸爸'
};
},{}]},{},[1]);
