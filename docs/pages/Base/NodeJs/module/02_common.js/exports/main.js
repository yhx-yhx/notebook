const baz = require('./baz') //返回 exports 对象
// 拿到的是 baz.js 的 exports对象地址
console.log(baz);//{ sayHello: [Function: sayHello], age: 18, name: 'default' }

// 对象解构
// const {name,sayHello,age} = require('./baz')

// exports 与 module.exports 同时赋值的情况 仅会将 module.exports 内容导出