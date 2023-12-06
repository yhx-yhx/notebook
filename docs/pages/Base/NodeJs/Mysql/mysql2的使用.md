<!-- 17/1.41前未看 -->
## mysql2的使用
<br>
> :fire: https://github1s.com/sidorares/node-mysql2 官方文档

### 在ndoe中使用mysql 借助于库
- ruby编写的驱动器（链接器）
- 最早的mysql node 最早的链接数据的驱动
- mysql2 是在 mysql 的基础上做了改进
- mysql2优势
    - 基于c扩展的数据库驱动器 性能兼容性 会更好
    - 支持更多的数据库功能 包括`预处理语句`、`存储过程`等高级的特性；
<br>
### mysql2 的使用

- 安装 mysql2
    - `npm install mysql2`
- 使用
    - 创建连接
        - `const conn = mysql.createConnection({host,port,datbase,user,password})`
    - 执行sql
        - `cosnt sql = 'SELECT * from 表名'`
        - `conn.query(sql,[values],callback)`
    - 关闭连接
        - `conn.end()` 可以通过 error 监听
        - or `conn.destroy()` 强制关闭

#### 预编译语句
- 提高性能
- 防止SQL注入

<br>

> mybatis ORM
`https://sequelize.org/docs`