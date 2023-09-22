/**
 * window（GobalObject） this的指向
 */
const consoleStyle = "color: #fff; font-style: italic; background-color: blueviolet;padding: 2px;border:2px solid blue;font-size: 20px;"

console.log("%c===================window（GobalObject） this的指向====================", consoleStyle);
console.log("window",this); //window

/**
 * this的 指向调用者
 */
function eating(arg) {
    console.log(arg,this);
}
eating('直接调用') //this指向 window


const info = {
    name:'test',
    eating,
    getSum: function (n1, n2, n3) {
        console.log(n1 + n2 + n3,this);
     }
}

info.eating('info调用') //this指向 info

info.eating.call('info + apply 调用') //this 指向传入参数


/**
 * 绑定规则
 * 没有改变this指向，谁调用指向谁
 */
console.log("%c==============绑定规则没有改变this指向，谁调用指向谁==================", consoleStyle);

/**
 * 改变this 指向 
 * 1.call
 * 2.apply
 * 3.bind
 *  
*/

// call
eating.call('我是call') // this 指向 我是call

// apply

eating.apply('我是 apply') //this 指向我是 apply

eating.bind('我是 bind')() // this 指向我是 bind

/**
 * call 与apply的区别？
 * 参数 传递
 * call 单个参数
 * apply 参数是数组
 */
console.log("%c==============call 与apply的区别？==================",consoleStyle);
info.getSum.apply('我是 apply', [1, 2, 3]) // this 指向 我是 apply

info.getSum.call('call', 1, 2, 3) // this 指向 我是 call


/**
 * new 关键字 的this 指向
 * 原理 是什么？
 * new 绑定指向 创建出来的对象
 */
console.log("%c==============new 关键字 的this 指向==================",consoleStyle);
function newFoo(name,age) { 
    this.name = name;
    this.age = age;
}

const foo = new newFoo('foo','23')
console.log('姓名:',foo.name,'\n年龄:',foo.age);//


/**
 * 优先级问题
 * 隐式绑定 < 实现绑定 < new 
 * new > bind 
 * new 不可以 与 apply call 同时用
 */


/**
 * setTimeout 函数调用
 * 
 */

setTimeout(function () {
    console.log('%c==================setTimeout 函数调用====================', consoleStyle);
    console.log('setTimeout', this); //window
}, 100);

/**
 * forEach map filter 的this 指向
 * 默认 window 
 * 参数一 fn
 * 参数二 this指向 
 */
console.log("%c=============forEach map filter 的this 指向 第二个参数 绑定的this===================",consoleStyle);
[12, 23, 45, 56].forEach(function (item) { 
    console.log(item,this);//window
});

[12, 23, 45, 56].filter(function (item) {
    console.log(item, this);//window
});

[12, 23, 45, 56].map(function (item) {
    console.log(item, this);//window
});

// bind 与 apply call的优先级比较
console.log("%c=============bind 与 apply call的优先级比较===================",consoleStyle);
info.eating.bind('bind').apply('apply') //bind
info.eating.bind('bind').call('call') //bind


/**
 * 特殊情况
 * 
*/
console.log("%c================call apply bind 传入 null undefined 的特殊情况================",consoleStyle);
function bar(arg) {
    console.log(arg+'参数',this);
}

bar.call(null,'call null') //window
bar.apply(null,['apply null']) //window
bar.bind(null,'bind null')() //window

bar.call(undefined, 'call undefined') //window
bar.apply(undefined, ['applay undefined']) //window
bar.bind(undefined, 'bind undefined')() //window


//间接函数绑定

function foo1func() { 
    
    console.log("%c================;(foo11.func = foo1.func)();================", consoleStyle);
    console.log(this);
}
const foo1 = {
    name: 'foo1',
    func:foo1func
}

const foo11 = {
    name: 'foo2'
};
(foo11.func = foo1.func)() //window


    ;[12, 23, 34, 45].forEach((item) => { 
        console.log("%c================ ;[12, 23, 34, 45].forEach================", consoleStyle);
    console.log('[12,23,34,45].forEach',item,this);
    })


/**
 *  箭头函数的this指向
 *  1.箭头函数 没有this（指向外部作用域）没有arguments
 *  2.不可以作为构造函数
 */

let nums = [12, 23, 34, 45]

console.log("%c================ forEach第一个参数传递 fn fn的第三个参数为“原数组”================", consoleStyle);
nums.forEach((idx, item, arr) => { 
   console.log(idx,item,arr);
})

// 简写常见形式
nums.forEach(item => console.log(item))
console.log(nums.map(item => ({ name: 'whs', age: "34" })));

// call
const fooArrow = () => { 
    console.log(this);
}

// 不会报错 也不生效
fooArrow.call('Arrow call') //window
fooArrow.apply('Arrow call') //window
fooArrow.bind('Arrow bind')() //window

const fooArrowInfo = {
    foo:fooArrow
}

fooArrowInfo.foo.call('fooArrowInfo.foo') //window
