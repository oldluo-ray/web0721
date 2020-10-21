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