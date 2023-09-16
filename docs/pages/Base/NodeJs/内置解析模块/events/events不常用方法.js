const EventEmitter = require('events');

// 1.创建一个emitter 发射器
const emitter = new EventEmitter()

// 2.监听某个事件
// addListener 是 on alias简写 
// on alias 
const listener = (arg) => {
    console.log('msg', arg)
}
emitter.once('login', listener) //仅仅监听一次
emitter.prependListener('click', listener) //添加一个监听放在最前面
emitter.prependOnceListener('click', listener) //添加一个监听放在最前面 并且只监听一次


emitter.removeAllListeners() //移出所有监听器