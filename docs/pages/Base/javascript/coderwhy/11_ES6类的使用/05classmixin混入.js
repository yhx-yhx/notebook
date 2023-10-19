class Person {
    // 类的构造函数

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    playing() {
        console.log(this.name + 'playing');
    }
    static staticMethod() {
        console.log('person staticMethod');
    }
}
/**
 * 混入等同于继承
 */ 