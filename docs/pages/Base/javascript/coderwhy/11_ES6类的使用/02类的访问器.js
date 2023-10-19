class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = "天津市河东区"
    }
    // 访问器
    get address() {
        return this._address
    }
    set address(address) {
        this._address = address
    }
}

let p1 = new Person('张三', 18);

console.log(p1.address);
p1.address = '天津市西青区'
console.log(p1.address);