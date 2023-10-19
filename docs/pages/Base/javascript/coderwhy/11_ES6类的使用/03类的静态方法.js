class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = "天津市河东区"
    }
    // 通过类名直接访问（类方法）
    static getAddress() {
        console.log('static getAddress');
    }
}

let p1 = new Person('张三', 18);
Person.getAddress()