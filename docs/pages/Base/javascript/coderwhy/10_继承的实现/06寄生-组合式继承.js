function Person(name, age, heigth) {
    this.name = name;
    this.age = age;
    this.heigth = heigth;
}

function Student(name, age, heigth) {
    Person.call(this, name, age, heigth);
}
// 这里似乎没什么用呢？
Student.prototype = Object.create(Person.prototype);
Student.prototype.playing = function () {
    console.log(this.name + 'playing');
}
let c1 = new Student('张三', 23, 1.70)
c1.playing()
console.log(c1.name);
console.log('c1 instanceof Person', c1 instanceof Person);
console.log('c1 instanceof Student', c1 instanceof Student);

// 补充
let obj = { name: 's' }

let oob = Object.create(obj)

// oob:obj => Object

console.log('hasOwnProperty', oob.hasOwnProperty('name'));

//  in 操作符 存在即为true 不区分是否在原型上
console.log('in操作符 不区分属性是否在原型上', "name" in oob);

// 是否存在 原型链上 是否有 某一对象
console.log("instanceof", oob instanceof Object);

// 监测是否在原型链上 前者是否位于后者的原型链上面
console.log('isPrototypeOf', Object.prototype.isPrototypeOf(oob));//true 
console.log('isPrototypeOf', Object.prototype.isPrototypeOf(obj));//true 
console.log('isPrototypeOf', obj.isPrototypeOf(oob)); //true
console.log(oob);

// 函数的 __proto__ 和 prototype 
function Fn() {

}
console.log(Fn.prototype.constructor.name);// 通过 作为函数显式 原型
console.log(Fn.__proto__.constructor.name); //通过 对象 隐式原型 new Function() 构造函数
console.dir(Fn.__proto__);

console.log(Function.__proto__ === Function.prototype); //特殊