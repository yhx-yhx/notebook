# typescript

## 全局安装typescript

```
npm i typescript -g

yarn add typescript;
```

## 将ts转换成js

``` 
//建议  方便 便于监听 tsc  ==>typescript complie
tsc xxx.ts -w
// 不建议 不方便
tsc xx.ts
```

##  类型校验

  变量:类型；

## 类型推断

### 变量

```
let num=12;
num='wewe' //报错仅支持 类型为初识定义类型
```

### 数组

```
let array:(string|number)[]=['23',"yhx"]
```

### 对象

```
const obj = { name: 'true', sex: 'nan', state: true }
//限制类型
let hobj: { name: string, age: number, usl?: string } = {name:'yhx',age:23}
//限制类型 ?：表示可选的字段
```

### 组合类型

```
//定义限制 hg为number或string的数组；
let hg: (number | string)[] = ['12', 12]
//定义hb为number或string类型数组
let hb: number | string[]
```

### 配置文件

```
//初始化 tsconfig.json
tsc init

//编译将 ts转换成js
tsc -w
```

### 类型

#### any

```
//任何类型 都ok 相当于用原生的js 定义变量
let anyy:any[]=[];
```

#### any与unknown区别  as类型断言

**as类型断言**

```
let y: string = '1';
//将string转化成 unkown类型 接着转换成 number类型
let n: number = y as unknown as number
```

#### any与unknown的区别

```
//**any**定义类型为 所有类型均可赋值；

//**unknown**不知道是什么类型
let pp: any = '123';
let ps: unknown = "1234444"
//正确
let xml: string = pp  //any
//报错
let xml1:string=ps    //unknown
```

####   类型 void与 never

```
void 函数执行到结束
never  函数执行过程中必须断点？？？
```

#### null与undefined类型

#### type 对函数参数的声明

```
//定制参数规则
type userType = { name: string, sex: string, state?: boolean }
let ww = (user: userType) => {
    console.log(user) //{ name: 'yhx', sex: 'sss' }
}
console.log(ww({ name: 'yhx', sex: 'sss' }));
```

####  元组tuple

```
let tuple: [string | number, number] = ["hhh", 20];
tuple = [1, 2]
// console.log(tuple);
```

#### 枚举

```
//枚举
enum sexType {
    BOY = '男',
    GIRL = "女",
}
let user1 = {
    name: 'ddd',
    sex: 1
}

console.log(sexType.BOY);
```

#### 断言

```
let suu = (...args): (string | number | object) => {
    return args
}
suu as object
console.log(suu(1, 2, 3, 4));

//as const    用的比较多

```

#### 结构as const

 