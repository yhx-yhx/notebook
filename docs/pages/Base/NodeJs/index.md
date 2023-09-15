### node.js 

#### REPL  read-eval-print-Loop

#### Node程序传递参数

- 执行 node程序

  - node index.js

- 传递参数 通过process 来获取

  - node index.js env=development xxx

  - ```javascript
    console.log(process.argv[2])//{env:development}
    
    console.log(process.argv[3]) //xxxx
    
    console.log("weweewew")
    
    console.trace() //打印函数调用栈
    ```

#### Node全局对象

- process / console / 定时器 setTimeout  setInterval setImmediate
- clearInterval clearTimeout clearImmediate 对应的清除事件
- process.nextTick
    - 下个进程执行
- setImmediate
    - 立即执行

#### 特殊的全局对象【模块对象】
 **dirname / filename / require /export** 
> 不可以在repl 中使用

- **__dirname**
  - 当前文件所在目录名称
- **__filename**
  - 当前文件所在目录名称

##### gobal与window的区别
- node 定义变量不会被挂载到 gobal
- window 定义全局变量 会被挂载到window
** process 挂载全局 通过 Object.defineProperty()实现**

### 模块化
> javascript 被称为 披着C语言外衣的 Lisp 人工智能方面
> 模块化规范 esModule AMD CMD
 node 模块化 基于 CMD 也是实现了 esModule
#### CommonJs 
> 在浏览器之外使用的地方 【被称为serverJs】
> 在浏览器中使用 CJS【commonJs】
> Node Browserify webpack 支持 CJS

##### 规范核心变量

- exports【没什么鸟用 为了迎合规范】
  - **exports === module.exports**
  - exports是 module.exports 的引用
- module.exports
  - 当 module.exports 定义为一个新的对象 将会开辟一个新的内存空间 则moudle.exports != exports
  - exports === module.exports
- **require**【*加载过程同步的*】
  - path、 http 的核心模块【？】
  - 以 ‘./’ or '../' or '/'【根目录】 开头
    - 有后缀 直接找对应的文件
    - 无后缀 找文件 X > X.js  > X.json >  X.node 以此查找；
    - 默认找 index.js > index.json >index.node
    - other **报错**
  - 并不是一个核心模块
    - 逐级往上查找 node_modules/xxx/index
  - **多次加载 仅会加载一次【缓存】** 
  - module.loaded 判断是否被加载了 boolean
  - ![循环加载-require](\images\循环加载-require.png)
  - 按分支加载到 最底层 再查找其他分支【图结构】**深度优先**查找， 则是mian>aaa>ccc>ddd>eee>bbb
- CommonJs缺陷
  - 同步加载

##### AMD 【异步模块定义 Async Module define】

- **require.js**

  - ```javascript
    <script src="./lib/require.js" data-main="./index.js"></script>
    //加载完成 require.js 立即加载 index.js
    ```

  - index.js 定义  模块

##### CMD[Common Module define]

> 异步加载模块 【很少用】

- [seajs CMD实现库 gihub地址](https://github.com/seajs/seajs )
- ![image-20230915164903989](.\images\CMD-seajs.png)

##### ES Module

> export import 关键字
>
> **自动采用严格模式**

- ```javascript
  <script type="module" src="./modules/foo.js"></script>
  //modeule
  ```

- ```javascript     
  // 导出
  //default可以 不写名称 导入名称可以是任意值
   export default foo = {
       name: 'foo',
       age:'12'
   }
  //按需导出
  export const name ="foo"
  const name = "foo"
  // {} 不是对象
  export { 
  name as foo
  }
  ```
- ```
  //导入
  import { foo } from "./foo";
  // 别名 
  import { foo as name } from "./foo";
  // * as 
  import  * as foo from "./foo";
  ```

-  export 与 import 结合使用

  - `export {name,xx,xxx} from "pathxxx"  `

  - `先从pathxxx import  {name,xx,xxx} 然后导出 {name,xx,xxx}`
  - 封装统一入口 比如 n多个 api.js 所有都在index.js 中做统一导出

###### import函数

-  