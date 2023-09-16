const EventEmitter = require('events');

// 1.创建一个emitter 发射器
const emitter = new EventEmitter()

// 2.监听某个事件
// addListener 是 on alias简写 
// on alias 
const listener = (arg) => {
    console.log('msg', arg)
}
emitter.on('login', listener)
emitter.on('tap', listener)

// 3.发射login事件
emitter.emit('login', 'hello world')
// 获取注册事件
console.log('获取注册事件', emitter.eventNames()) //获取注册事件 [ 'login', 'tap' ]

// 
console.log('获取事件发生次数', emitter.listenerCount('login')) //获取事件发生次数 1

console.log('获取文件listener', emitter.listeners('login')) //获取文件listener [ [Function: listener] ]