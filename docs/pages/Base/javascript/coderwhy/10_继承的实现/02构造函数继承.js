
/**
 * 2 借用构造函数
 * 来实现原型的继承
 */
function Funs(name, age, sex, likes) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.likes = likes;
}
function Fun(name, age, sex, likes) {
    Funs.call(this, name, age, sex, likes)
    this.play = function () {
        console.log('play' + this.name)
    }
}
let f1 = new Fun('张三', 20, '男', '篮球')
console.log(f1);
f1.play();

// 