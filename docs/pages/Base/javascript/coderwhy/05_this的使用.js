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

console.log("%c================ 测试题目一 ================", consoleStyle);
let name = 'fooArrow'

let person = {
    name: "Person",
    sayHello: function () { 
        console.log(this);
    }
}

function sayHello() { 
    let er = person.sayHello
    er();//window
    person.sayHello();//person
    (person.sayHello)();//person
    (p = person.sayHello)()//window
}

sayHello()


console.log("%c================ 测试题目二 ================", consoleStyle);

let person2 = {
    name: "person2",
    foo1: function () { 
        console.log(this);
    },
    foo2: () => { 
        console.log(this);
    },
    foo3: function () { 
        return function () { 
            console.log(this);
        }
    },
    foo4: function () { 
        return () => { 
            console.log(this);
        }
    }
}

person2.foo1();//person2
person2.foo1.call('person1')//person1

person2.foo2()//window
person2.foo2.call('2323') //window

person2.foo3()()//window
person2.foo3.call('person')()//window(独立函数调用)
person2.foo3().call('person')//person

person2.foo4()() //person2
person2.foo4.call('12')() //12
person2.foo4().call('12') //person2


console.log("%c================ 测试题目三 ================", consoleStyle);

function Person3(name) { 
    this.name = name
    this.foo1 = function () { 
        console.log(this);
    }
    this.foo2 = () => { 
        console.log(this);
    }
    this.foo3 = function () { 
        return function () { 
            console.log(this);
        }
    }
    this.foo4 = function () { 
        return () => { 
            console.log(this);
        }
    }
}

let p13 = new Person3('p13')
let p23 = new Person3('p23') 

p13.foo1()//p13
p13.foo1.call(p23) //p23

p13.foo2() //p13
p13.foo2.call(p23) //p13


p13.foo3()() //window
p13.foo3.call('p23')() //window
p13.foo3().call('p23') //p23

p13.foo4()() //p13
p13.foo4.call('p23')() //p23
p13.foo4().call('p23') //p13

console.log("%c================ 测试题目四 ================", consoleStyle);


function Person4(name) {
    this.name = name
    this.obj =  {
        foo1: function () {
            console.log(this);
        },
        foo2: () => {
            console.log(this);
        },
            foo3: function () {
                return function () {
                    console.log(this);
                }
            },
        foo4: function () {
            return () => {
                console.log(this);
            }
        }
    }
}

let p14 = new Person4('p14')
let p24 = new Person4('p24')

p14.obj.foo1()//obj
p14.obj.foo1.call("p24") //p24

p14.obj.foo2()//p14
p14.obj.foo2.call("p24") //p14

p14.obj.foo3()() //window
p14.obj.foo3.call('p24')() //window
p14.obj.foo3().call('p24') //p24


p14.obj.foo4()() //obj
p14.obj.foo4.call('p24')() //p24
p14.obj.foo4().call('p24') //obj
