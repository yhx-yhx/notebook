/**
 * 09_面向对象的原型链和继承实现.js
*/
/**
 * 存取属性描述符
 * 
 */

// set get 写法很奇怪 
let obj = {
    _address: "address",
    _age: "24",
    get age() {
        return this._age
    },
    set age(val) {
        this._age = val
    }
}
Object.defineProperty(obj, 'address', {
    set: function (val) {
        this._address = val
    },
    get: function () {
        return this._address
    }
})
obj.address = "address2"
console.log(obj.age);

for (const key in obj) {
    console.log(key)
}

/**
 * 定义多个属性描述符
 * 
 */

Object.defineProperties(obj, {
    name: { value: 'nmae' },
    sex: { value: "男" }
}
)

console.log(obj);

/**
 * 获取某个属性描述符
 * 
 */

console.log('获取属性描述符', Object.getOwnPropertyDescriptor(obj, 'address')); //{enumerable: false, configurable: false, get: ƒ, set: ƒ}

/**
 * 获取所有描述符
 */

console.log("获取所有描述符", Object.getOwnPropertyDescriptors(obj));

/**
 *  获取所有属性描述符 key
 */
console.log("获取所有属性描述符", Object.getOwnPropertyNames(obj));

/**
 * 禁止对属性描述符继续添加
 */

console.log("禁止对属性描述符继续添加", Object.preventExtensions(obj));

/**
 * 禁止属性的添加配置修改 删除
 */

Object.seal(obj);

/**
 * 属性不能修改 (writeable:true)
 *  
 */

Object.freeze(obj)

/**
 * 创建多个对象方案 
 * 应该是为了引入class
 * 工厂模式 设计模式
 * 场景 工厂方法 产生一个想要的对象 模式称之为工厂函数
 * 缺点：1. 无法拿到类型
 * 
 */

function createperson(name, sex, age) {
    let p = {}
    p.name = name
    p.age = age
    p.sex = sex
    p.running = function () {
        console.log(this.name + '在跑步')
    }
    p.playing = function () {
        console.log(this.name + '在玩耍');
    }
    return p
}
let p1 = createperson("张三", "男", 23)
p1.running()

/**
 * 构造函数
 * 与普通函数执行区别
 * new 创建一个构造函数
 * 原型上会有 prototype属性
 * 创建 新对象this指向 内存对象
 * 返回 新的对象
 * 
 * 缺点：1.创建函数对象过多 浪费性能 大量创建消耗内存
 * 
 */

function CreateObj(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    // 有非空对象返回时候this不会指向 该对象
}

let n1 = new CreateObj("张三", 23, "男")
console.log(n1);

/**
 * 原型对象
 * 隐式原型 __proto__ 
 * 变量
 * 对象 找不到该属性 会在隐式原型上查找
 * 
 */
console.log(Object.getPrototypeOf(obj));

/**
 * 函数原型 
 * 显示原型 prototype 
 * 标准
 * 通过 function 关键字 new Function 实现 在 prototype 添加构造函数
 */
const funcfoo = function () { }
console.dir(funcfoo);

const f1 = new funcfoo()

console.log('显是原型 隐式原型完全相等', f1.__proto__ === funcfoo.prototype); // 他们指向同一个原型
// 通过
// 箭头函数没有原型链
const funcArrow = () => { }
console.log('箭头函数', funcArrow.prototype);//undefined

/**
 * prototype
 * 获取 属性 
 * 原型简化了公共属性 方法
 */
console.log(Object.getOwnPropertyDescriptors(funcfoo.prototype)); //获取所有属性描述符

Object.defineProperty(funcfoo.prototype, 'constructor', {
    enumerable: true
})


console.log(Object.getOwnPropertyDescriptors(funcfoo.prototype));

/**
 * 构造函数最佳实践
 * 
 */
function Anmail(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
Anmail.prototype.playing = function () {
    console.log(this.name + 'playing~~~~~');
}
const a1 = new Anmail('动物1', 23, '男')
const a2 = new Anmail('动物2', 18, '女')

a1.playing()
a2.playing()


let obj = { name: "张三", age: 23 }
// 默认是 不可枚举的
Object.defineProperty(obj, "adderss", {
    value: "天津六纬路"
})
console.log(obj);