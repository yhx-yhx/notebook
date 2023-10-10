/**
 * 继承的实现-对象-函数-原型的关系.js
*/
/**
 * 面向对象的特性
 * 封装 继承 多态
 */

/**
 * js 原型链 
 * 依次往上层查找
 */
let obj = {
    // name: "张三"
}

// obj.prototype = {
//     age: 20
// }

obj.__proto__ = {
    name: "扎实"
}


obj.__proto__.set = 1212

console.log(obj);


function hho() { }
console.log(Object.getOwnPropertyDescriptors(hho.prototype));


/**
 * 继承 
 * 原型继承 
 * 缺点
 * 1.某些属性看不到 原因：peototype 不可枚举的
 * 2.参数传递 存在问题
 * 3.引用之间存在问题
 * 
 */

function Person() {
    this.name = '张三'
}

function Teacher() {
    this.Play = function () {
        console.log(this.name + '教书');
    }
}
Teacher.prototype = new Person()
let t1 = new Teacher(1, 2, 3, 4)
console.log(t1.name);
t1.Play();