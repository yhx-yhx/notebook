### 简述 GUI 工具

- navicat 收费 破解工具；
- SQLYog 免费开源工具 比较老 有点丑；
- TabelePlus 常用功能可用 也是付费的 会有限制（比如多开标签 两个标签）；

### SQL规范

- 通常关键字大写；
- 语句结束分号结束；
- 关键字作为表名或者字段名时，使用``包裹；

### SQL 语句分类

- 数据定义语言（DDL）
    - 数据库或表 创建 删除 修改等操作；
- 数据操作语言（DML）
    - 对表 添加删除修改 等操作
- 数据查询语言（DQL）
    - 查询操作（*）


### 数据定义语言 （DDL）

- 创建数据库 
    - create database if no extist  数据库名;
- 删除数据库
    - drop database if exist 数据库名;
- 修改数据库
    - alert database 数据库名 character set utf8 collate utf8_general_ci;

### 数据操作语言 （DML）

- 查看数据表结构
    - desc 表名;
