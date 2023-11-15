const obj = {
    name: "foo",
    age: 18
}

function CreateObject1(o) {
    const newObj = {}
    // 给某一个对象 设置原型
    Object.setPrototypeOf(newObj, o);
    return newObj
}
// 方式2

function CreateObject2(o) {
    function Fn() { }
    Fn.prototype = o
    let newObj = new Fn()
    return newObj
}

// 方式3
/**
 * 创建一个原型为 obj 的对象
 */
let c3 = Object.create(obj)
console.log('c3', c3.__proto__);
let c1 = CreateObject1(obj)
console.log('c1', c1.__proto__);
let c2 = CreateObject1(obj)
console.log('c2', c2.__proto__);