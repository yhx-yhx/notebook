// 默认导出
// export default foo = {
//     name: 'foo',
//     age:'12'
// }

// export const name ="foo"
const name = "foo"
function sayHello(name) { 
    console.log(name);
}
// {不是对象}
export { 
    name as foo,
    sayHello
}