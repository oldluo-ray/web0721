(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = _interopRequireDefault(require("./module3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _module.foo)();
(0, _module.bar)();
console.log(_module2.msg);
(0, _module2.jg)();
console.log(_module3["default"]);
console.log('后加的js代码');
console.log('------------------------------');
console.log(111);
console.log(222);
console.log(3333);
console.log(444);
console.log(555);
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;

function foo() {
  console.log('foo-------');
}

function bar() {
  console.log('bar-------');
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jg = jg;
exports.msg = void 0;
var msg = 'giaogiaogiao~~~';
exports.msg = msg;

function jg() {
  console.log('明骚');
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['抽烟', '喝酒', '富婆'];
exports["default"] = _default;
},{}]},{},[1])