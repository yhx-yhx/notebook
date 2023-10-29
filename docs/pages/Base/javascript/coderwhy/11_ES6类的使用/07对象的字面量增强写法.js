

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