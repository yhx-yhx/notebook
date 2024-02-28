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
  ```javascript
    function sum(a:number,b:number){
        return a + b;
    }
    sum(1,2)
    sum('1',2) //报错 Argument of type 'string' is not assignable to parameter of type 'number'.
  ```

## 类型推断

### 字符串

```ts
let str: string='123';
str=123 //报错
```

### 变量

```ts
let num=12;
num='wewe' //报错仅支持 类型为初识定义类型
```

### 数组

```ts 
let arr1 :number[]=[1,2,3] //数字类型
let arr2 :string[]=['1','2','3'] //字符串型
let arr3 :(number|string)[]=[1,'1'] //混合类型

arr3.push('22') // [1,'1','22']
arr3.push(true) //报错 Argument of type 'true' is not assignable to parameter of type 'number | string'.
```

### 对象
> 对象的类型 推导
```ts
const obj = { name: 'true', sex: 'nan', state: true }
//限制类型
let hobj: { name: string, age: number, usl?: string } = {name:'yhx',age:23}
//限制类型 ?：表示可选的字段
```

> 嵌套对象(更为复杂)的类型推导
```ts
const obj:{name:boolean,sex:string,classes:{title:string}[]} = { name: true, sex: 'nan', classes:[{title:'sd'}] }
```
### 组合类型

```ts
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

### 基本类型

#### 字符串
```ts
let str: string='123';
```

#### 布尔
```ts
let bool: boolean=true;
```

#### 数字
```ts
let num: number=123;
```

#### 数组
```ts
let arr: number[]=[1,2,3]; //数字类型
let arr2: string[]=['1','2','3'] //字符串型
let arr3 = new Array<string>(3) //使用泛型来声明
let arr4:Array<number>(3) = [0,1,2] //使用泛型来声明
```

#### 元组
```ts
let tuple:[string,number] = ['1',1] //明确每个成员值类型的数组
```

#### 对象
```ts
let obj:object = {name:'123',age:12} //限制类型为对象

let obj2:{name:string,age:number} = {name:'123',age:12} //限制类型为对象

let obj3:{name:string,age:number,happy?:string} = {name:'sss',age:23} // 属性值后面加? 表示可选属性
```

#### 索引签名
```ts
// 如果有明确的索引名称
type HH = {name:string,age:number}
let obj:HH = {name:'123',age:12}

// 如果没有明确的索引名称
type HH = {[key:string]:string|number}
let obj:HH = {name:'123'}

//  带有后缀的索引
type HH = {[key:`${string}HX`]:string|number}
let obj:HH = {nameHX:'123'}

// 使用Record工具类型来定义
type HH = Record<string,number>

// 使用Record 声明联合类型
type HH = Record<'name'|'age',string|number>

let hd :HH = {name:'name',age:12}
```


#### any
>  any 指包含所有值的顶部类型 所以 any 不进行类型校验
- 其他类型是any 类型的子集
- any 类型的变量可以赋值给其他类；
- 使用 any类型失去了类型检查的作；
- 只有在不知道类型的时候才使用any；
- any 太宽泛，不建议使用；
- any 不进行ts类型检测；

```ts
let anyy:any[]=[];
```

#### unknown
> unknown 类型是所有类型的子类型，所以 unknown 类型的变量可以赋值给其他类；
- 任何类型都可以赋值给 unknown 类型；
- unknown 类型的变量不能赋值给其他类；
- 使用 unknown 类型可以进行类型检查；
- 使用 unknown 类型可以进行类型断言；


##### any与unknown区别  as类型断言

``` ts
let y: string = '1';
let c:number = y as number; // 报错

// 可以使用 unknow  作为中间状态
//将string转化成 unkown类型 接着转换成 number类型
let n: number = y as unknown as number
```
<br/>

``` ts
// **any**定义类型为 所有类型均可赋值；

//**unknown**不知道是什么类型
let pp: any = '123';
let ps: unknown = "1234444"
//正确
let xml: string = pp  //any
//报错
let xml1:string=ps    //unknown
```

#### null & undefined
> null & undefined 也属于变量类型

#### viod 
> 非严格模式下，void 类型的变量可以赋值 null | undefined；
> 严格模式下，viod e 类型的变量只能赋值  undefined；

#### never
>never 是任何类型的子类型 可赋值给任意类型 ，没有 类型是never 的子类型
**never特点**
- never 没有任何子类型 所以never 类型的变量不能赋值给其他类型变量
- 函数抛出异常 或 无限循环 返回never
- never 类型没有任何的值
- never 类型是所有类型的子类 
```ts
type HH = never extends string  ? string : boolean;//string
type HH = string extends never  ? string : boolean;//boolean
```

#### union 联合类型

```ts
let hh:(string|number) = 12
let arr:Array<string|number> = [12,'123']
```

### 交叉类型
> 交叉类型 要保证类型的一致性 string number 类型返回的 never
> 类似与 类型合并 （按照对应规则合并同类型）
```ts
type HH = {age:number} 
type HB ={name:string,age:string}
let jj:HH&HB = {age:'123',name:'123'} // 报错 不能将类型string分配给 never

```
> 上面的问题可以通过 pick类型工具除掉 name 的索引

```ts
type HH = {age:number} 
type HB ={name:string,age:string}
type HHB = HH & Pick<HB,age>
```

### 函数
> 注意 Function 首字母大写
- 函数 参数限定类型
```ts
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2, 3));
```

- 函数参数可选值
```ts
function sum(a: number, b: number，c?:number) {
    return a + b;
}
console.log(sum(2));
```

- 函数默认值
```ts
function sum(a: number, b: number, c: number = 10) {
    return a + b + c;
}
```

#### 返回值类型
```ts
function sum(a: number, b: number): number {
    return a + b;
}
```
- 当函数没有返回值时，建议使用void 。TS会自动推断
```ts
function sum(a: number, b: number): void {
    console.log(a + b);
}
```
#### 函数定义
- 无返回值
```ts
let sum:(a: number, b: number) => void
```
- 有返回值
```ts
let sum:(a: number, b: number) => number
let sm:(a: number, b: number) => number = (x:number,y:number):number => x+y
```
#### 剩余参数
```ts
function sum(...args: number[]) {
    return args.reduce((pre, cur) => pre + cur, 0);
}
```
#### 函数重载
> 签名可以有多个 实现对应的只有一个
```ts
function sum(a: number, b: number): number;
function sum(a: string, b: string):string；

```

### 枚举

> 枚举值 只能是字符串或者数字
- 默认序数从0开始
```ts

enum sexType {
    BOY = '男',
    GIRL = "女",
}
let user1 = {
    name: 'ddd',
    sex: sexType.BOY
}

console.log(sexType.BOY);//0
```

- 系数累加
```ts
enum sexType {
    BOY = 2,
    GIRL 
}
console.log(sexType.GIRL);//3
```

- 可以将值设置为其它值
```ts
enum sexType {
    BOY="男",
    GIRL="女"
}
console.log(sexType.BOY);//男
```

#### as 断言
> 用户制定什么类型就是什么类型
```ts
let num:number = 1;
let num2:number = num as unkown as number;
// 其他写法
let num3:number = <number>num;
```

#### cosnt 断言
##### let & const
- const 表示常量 保证该常量字面量类型
- let 通常类型 如字符串类型

```ts 
const hh = 'hh' //const hh: 'hh' = 'hh'
let hh = 'hh' //let hh:string = 'hh'
```
##### cosnt 
> 推断出最窄或者特定的类型
- 字符串、布尔类型换为 具体值时
- 对象转换为只读类型
- 数组转换成只读元组

1.最窄的类型限定 举例
```ts
let user = 'hhh' as const;
user = 'xxxx' 
```
2.对象只读类型
```ts
let user = {
    name:'hh'
} as const;
user.name = 'xxx'; // 报错 只读类型不允许设置
```
3.当为变量时转换为变量类型，具体值是转为值类型???
```ts
let a = 'houdunren.com'
let b = 2030

let f = [a, b, 'houdurnen.com', true, 100] as const //readonly [string, number, "sina.com", true, 100]
let hd = f[0]
hd = '向军'
```


- 手动赋值
```ts
```

### 断言

```
let suu = (...args): (string | number | object) => {
    return args
}
suu as object
console.log(suu(1, 2, 3, 4));

//as const    用的比较多

```

#### 结构as const

 