#### Symbol
>ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

##### 基础知识
1. Symbol函数前不能使用new命令，否则会报错。
> 这是因为生成的Symbol是一个原始类型的值，不是对象。
> 也就是说，由于Symbol值不是对象，所以不能添加属性。
> 基本上，它是一种类似于字符串的数据类型。
2. Symbol函数可以接受一个字符串作为参数，
> 表示对Symbol实例的描述，主要是为了在控制台显示，
> 或者转为字符串时，比较容易区分。

##### 描述参数
:::code-group
```javascript[Symbol('des')]
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 // Symbol(foo)
s2 // Symbol(foo)

s1.description // "foo"
console.log(s1 === s2 ) // false
```
```javascript[Symbol.for('des')]
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
s1 === s2 // true
```
:::

##### Symbol.for
> 如果不存在，就会新建一个值。
> 以后再用到这个值的时候，就可以直接引用这个值了。

##### Symbol.keyFor
> 根据Symbol.for 返回的描述找key
> Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
```javascript
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

##### 遍历
> 无法被for/in for/of遍历 

可以使用Object.getOwnPropertySymbols方法，获取指定对象的所有Symbol属性名。
```javascript
let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};
for (let i in obj) {
  console.log(i); // 输出：enum, nonEnum
}
let syms = Object.getOwnPropertySymbols(obj);
syms // [Symbol(my_key)]
```

也可以使用Reflect.ownKeys方法获取所有类型的键名，
包括常规键名和Symbol键名。
```javascript
const obj = Reflect.ownKeys({
    [Symbol('my_key')]: 1,
     enum: 2, 
     nonEnum: 3
});
for (const key of obj) {
  console.log(key); // 输出：enum, nonEnum,Symbol('my_key') 
}
```


##### 作为对象属性
```javascript
let mySymbol = Symbol("my_key");
const obj = {
    [mySymbol]:"Hello World"
}
console.log(obj[mySymbol]); // "Hello World"
```