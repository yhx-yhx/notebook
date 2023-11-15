/**
 * 寄生式继承的实现
 * 通过原型式继承实现
 */

const obj = {
    name: "张安"
}

function CreateObject(obj) {
    function Fn() { }
    Fn.prototype = obj
    const newObj = new Fn()
    return newObj
}

function CreateStudent() {
    // 作为父级
    let cobj = new CreateObject(obj)
    cobj.likes = ['sss']
    return cobj
}
let cc1 = new CreateStudent()
console.log(cc1);