

/* es6数组结构 */
/*const constant(常量)*/
const names = [12, 123]
const [item1, item2] = names
console.log(item1)
console.log(item2)

/* 转义成 es5*/
// const names = [12, 123]
// const item1 = names[0]
// const item2 = names[1]
// console.log(item1)
// console.log(item2)

// 对象的结构
const obj = {
    name: '2323',
    age: 23
}
//重命名 
const { name: n, age } = obj
// 赋默认值
const { like = 'zhang' } = obj
console.log(like);
console.log(n);

/** 
 * 函数的剩余参数
 * 为了替代 argument 的
 * 剩余参数 必须放在最后一个
 * 当参数唯一时 可以放在前面
 */

const sum = (...numbers) => {
    console.dir(numbers);
    return numbers.reduce((pre, cur) => pre + cur)
}

console.log(sum(1, 2, 3, 4, 5));

const info = {
    name: 'zhang',
    age: 23
}
const obj12 = { ...info, name: "instance" }
console.log(obj12.age);
info.age = 33
console.log(obj12.age);
