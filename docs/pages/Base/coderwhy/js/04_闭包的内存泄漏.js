function createArray() { 
    var array = new Array(1024 * 1024).fill(1);
    return function () { 
        console.log(array.length); 
    } 
}
let fn = createArray()
fn()
// createArray = null
// fn = null

let array = []
for (let i = 0; i < 100; i++) {
    array.push(createArray())
}
console.log(array.length);
/**
 * 使用浏览器 performance 测试内存释放情况 
 */ 
setTimeout(() => { 
    array = null
    console.log('被销毁了');
},2000)