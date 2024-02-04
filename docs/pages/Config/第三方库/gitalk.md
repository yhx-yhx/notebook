## gitalk 

> 解决什么问题？
> 为页面提供评论功能 基于github issue 实现

### 简述 

1. 基于github issue的评论插件
2. 支持markdown语法
3. 支持标签
4. 支持代码高亮
5. 支持多语言
6. 支持表情符号
7. 支持调整大小
8. 支持移动端
9. 支持Markdown

### 安装与使用

1. 创建github issue
2. 安装gitalk
```
npm install --save gitalk
```
3. 引入gitalk 样式
```
import 'gitalk/dist/gitalk.css'
```
4. 引入gitalk
```
import gitalk from 'gitalk'
```
5. 初始化gitalk
```
const gitalk = new Gitalk({
    clientID: 'Github Application Client ID',
    clientSecret: 'Github Application Client Secret',
    repo: 'Github repo',
    owner: 'Github repo owner',
    admin: ['Github repo owner and collaborators, only these guys can initialize github issues'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container') //gitalk-container 容器id
```