/**
 * 函数式编程
 * 编程范式
 */

/**
 * 【副作用（side effect）】
 *  (‘拿来主义’ 来源于医学)
 */

/**
 * 【纯函数】
 * 确定的输入 确定输出
 * 不可以产生副作用 
 * 【优势】 纯函数 编写 降低心智模型 当然复杂逻辑 不现实
 */

var names = [12, 23, 34, 4556, 45]

console.log('slice 纯函数',names.slice(0, 2)) 

console.log('splice 非纯函数', names.splice(0, 3)) //splice 具有副作用


/**
 * 柯里化【卡瑞化、加里化】
 * 接受多个参数函数 变成一个单一参数的函数 
 * 函数拆分 多个函数调用 
 * 套用函数 返回处理剩余参数
 * 
 * 效率高？ 感觉似乎 脱裤子放屁啊 代码 更冗余啊？
 * 
 */


/**
 * 这是个很生硬的例子
 */

//普通函数
function add(a, b, c) {
    return a+b+c
}
console.log(add(1, 2, 3));

// 科里化函数
function sum(a) {
    return function (b) { 
        return function (c) { 
            return a+b+c
        }
    }
}
console.log(sum(1)(2)(3))

// 简化科里化函数
const sumArrow = a => b => c => a + b + c

console.log(sumArrow(1)(2)(3));

/**
 * 为什么使用科里化？
 * 1.让函数 职责单一
 * 2.逻辑复用
 * 
 */

// 科里化 例子1

function adder(num) { 
    return function (count) { 
        return num + count
    }
}

let rrr = adder(5)
console.log(rrr(5));


// 科里化 例子2
// 这种场景感觉很多的 

const log = date => type => message => (console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`))

const debugLog = log(new Date())('DEBUG')
const featureLog = log(new Date())('FEATURE')

debugLog('找不到该页面bug')
debugLog('404bug')

featureLog('添加了注册功能feature')


/** 
 * 科里化函数的实现函数
 *  传入 函数
 *  返回 新的(匿名)函数
 *  感觉复杂逻辑 这函数根本处理不了
 */
function carraying(fn) {
    console.log('传入函数参数长度', fn.length);
    function curried(...args) {
        // 传递参数大于等于 普通函数参数个数
        if (args.length >= fn.length) {
            return fn.call(this, ...args)
        // 传递参数小于则处理 回调
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }
    return curried
}

let klhAdd = carraying(add)
console.log(klhAdd(7)(6)(5));


/**
 * 应用场景
 * vue3 源码
 * 
 */ 