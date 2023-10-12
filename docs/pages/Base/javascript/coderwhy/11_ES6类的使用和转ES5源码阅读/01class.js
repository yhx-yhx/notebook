/**
 * ES6类的使用和转ES5源码阅读.js
 * 11 video 2小时后讲解babel 没看
 */

// 函数编程 我感觉在一定程度上减轻了心智模型

/**
 * class 类 
 */

class Person {
    // 类的构造函数

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    playing() {
        console.log(this.name + 'playing');
    }
}

let p1 = new Person('张三', 18);
console.log(p1);
console.log(p1.__proto__ === Person.prototype);
p1.playing() //会放置原型上面
// console.log(p1.__proto__.playing);