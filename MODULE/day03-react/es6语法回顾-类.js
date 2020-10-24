// 这是es6之前,构造函数的写法:
//#region
// function Person(name, age) {
//   this.name = name //实例属性
//   this.age = age // 实例属性
//   //   this.say = function() {
//   //     //实例的方法
//   //     console.log('你好,我是' + this.name)
//   //   }
// }

// // 注意: 把方法加到实例上,特别的浪费内存.所以应该把方法加到原型上
// // 将方法加到原型上. 实例可以访问原型的方法
// Person.prototype.say = function() {
//   //实例的方法
//   console.log('你好,我是' + this.name)
// }

// 学生的构造函数,里面也应该也name和age.但是不想再把这些代码重新写一次了
// function Student(name, age, score) {
//   Person.call(this, name, age)
//   this.score = score
// }

// Student.prototype = new Person()

// const stu1 = new Student('xxx', 20, 100)
// console.log(stu1)
// stu1.say()

// const p1 = new Person('zs', 18)
// const p2 = new Person('ls', 20)
// console.log(p1)
// p1.say()
// p2.say()

//#endregion

// es6的语法
class Person {
  constructor(name, age) {
    this.name = name // 实例的属性
    this.age = age //实例的属性
  }

  // 添加到了原型上
  say() {
    console.log('你好,我是' + this.name)
  }
}

// const p1 = new Person('zs', 18)
// console.log(p1)
// p1.say()

class Student extends Person {
  constructor(name, age, score) {
    super(name, age, score)
    this.score = score
  }
}

const s1 = new Student('xxxx', 20, 100)
console.log(s1)
s1.say()
