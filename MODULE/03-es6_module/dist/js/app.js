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