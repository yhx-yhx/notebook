/**
 * with
*/
var sex = '男'
const obj = {
    name: "zhangsan",
    age:32
}
with (obj) { 
    // 局部作用域没有会在全局中查找
    console.log(name);
    console.log(sex);
}
/**
 * eval
 * 会产生 块级作用域
 */ 

let stringEval = 'console.log("hello world eval")'
eval(stringEval)

/**
 * 【开启严格模式】 "use strict"
 * 局部开启严格模式 [2]
 * 全局this 指向 undefined
 */

// [2]
function enableStrictMode() { 
    "use strict"
}
console.log(0o123); //八进制