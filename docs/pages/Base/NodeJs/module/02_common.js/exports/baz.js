const name = "default"

const age = 18

function sayHello(name) { 
    console.log(name)
}
// 导出变量与方法
exports.sayHello = sayHello

module.exports = {}

exports.age = age
exports.name = name
// 地址指向是不一样了 
console.log("是否是同一个变量", exports === module.exports);
console.log(exports);
