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

class Student extends Person {

    constructor(name, age, number, school, gradel) {
        // 子类（派生类）必须这么搞
        super(name, age);
        this.number = number;
        this.school = school;
        this.gradel = gradel;
    }
    // 重写
    playing() {
        // super 更像是指针 指向的父类的原型
        super.playing();
        console.log('我是重写的方法');
    }
    static staticMethod() {
        super.staticMethod()
        console.log('rewriter' + 'staticMethod');
    }
}

let p1 = new Person('张三', 18);
console.log(p1);

let s1 = new Student('学生1', 16, '1211', '二中', '三年八班')
console.log(s1);
s1.playing()
console.log('=====================');
Student.staticMethod()