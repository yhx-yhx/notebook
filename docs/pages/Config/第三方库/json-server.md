## json-server

### 解决了什么问题

- 前后端分离开发，前端需要**模拟**后端的数据**接口**
- 前后端联调，前端需要**模拟**后端的数据**接口**
- 数据接口文档不完善，需要**模拟**后端的数据**接口**


### 怎么用

#### 1. 安装

```
npm install -g json-server
```

#### 2. 配置

> 创建一个db.json文件，配置数据接口

```
{
    "posts": [
        {
            "id": 1,
            "title": "json-server",
            "author": "typicode"
        }
    ],
    "comments": [
        {
            "id": 1,
            "body": "some comment",
            "postId": 1
        }
    ],
    "profile": {
        "name": "typicode"
    }
}
```

#### 3. 启动

> 指定端口启动

```
json-server --watch db.json --port 3000
```
