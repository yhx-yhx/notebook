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

// 3.发射login事件
emitter.emit('login', 'hello world')

// 4.取消监听
emitter.off('login', listener)