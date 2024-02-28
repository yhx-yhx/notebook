#### git

##### 安装配置
 [git for  windows  ](https://github.com/git-for-windows/git/releases/tag/v2.37.2.windows.2)
安装后通过以下命令查看是否安装成功：
 ```javascript
 git --version
 ```

##### 简单命令
- pwd ：查看当前目录
- ls ：查看当前目录下的文件
- cd : 切换目录
- ll ：查看当前目录下的文件
- dir ：查看当前目录下的文件
- mkdir ：创建文件夹
- touch ：创建文件
- ls -a :查看隐藏的文件（默认.开头为默认隐藏文件）
- rm -rf :删除文件 [谨慎使用]

##### 创建新仓库 和 维护旧仓库
- 创建新仓库
```javascript
git init
```
- 维护旧仓库
```javascript
git clone xxx
```

##### git 基本流程(简单)

###### 添加
```javascript
git add
```

###### 提交
```javascript
git commit -m "xxx"
```

###### 查看提交状态
```javascript
git status
```

###### 推送
```javascript
git push
```

###### 拉取
```javascript
git pull
```

###### 忽略文件
- mkdir .gitignore
```javascript
!.txt
dist
*.zip
```

#### 修改数据

##### 从版本库中删除资源

- git rm xx.txt 删除本地数据 同时删除仓库
- git rm --cached  xx.txt  不删本地 只删库

##### 版本库更改资源名称
- git mv x.txt newvalue.txt

#### vim
- vim xxx.txt 打开文件
- i 进入编辑模式
- esc 退出编辑模 
- :wq 保存并退出
- :q! 强制退出
- :wq! 保存并强制退出
- cat xxx.txt 查看文件

##### 日志
- git log -p -2
- --online --name-only --nmae-status

##### 修改最新一次提交的
> 描述信息 提交内容
- git commit --amend

##### 清除暂存区某个文件
- git rm --cache xxx.txt


##### 还原文件
- git checkout -- xxx.txt


##### alias别名命名提高效率
- git config --global alias.co checkout
- git config --global alias.br branch
- git config --global alias.ci commit
- git config --global alias.st status

##### branch 分支
- git branch 查看分支
- git branch xxx 创建分支
- git checkout xxx 切换分支
- git merge xxx 合并分支
- git branch -d xxx 删除分支
- git branch -D xxx 强制删除分支


## 安装 git for windows 

选择自己需要的版本；   点击下载，安装比较简单，不再赘述；



## 常用的命令

当前文件夹的目录   ls

切换文件夹   cd

查看所属文件夹  ll

创建文件夹 mdir  xxx

清屏  ctrl +l

显示当前工作目录：pwd

删除当前目录文件： rm -rf *

建立文件 touch

## 配置

### 全局配置

```
git config --global user.name "yhx"
git config --global user.email "2045399856@qq.com"
```

### 初始化仓库

```
git  init  
```

### 全部添加

```
git add .
```

### 提交暂存

```
git commit -m "注释"
```

### 推送到仓库

```
git push
```

### 查看状态

```
git status
```

### 忽略文件配置

.gitgnore 文件

文件夹  /xxx     !xxx.txt  不包含xxx.txt

### 删除远端仓库的 文件  

本地不变动

```
git rm --cached xxx
```

### 重命名

```
git mv 旧的名字  新的名字
```

### log操作日志

```
git log
```

### 管理暂存区文件

```
git rm --cached xxx
```

## 别名 

简化操作命令

## Git分支Branch

### 查看列表

```
git banrch
```

### 创建分支

```
git branch xx
```

### 切换分支

```
git checkout xx
```

### 删除分支

```
git branch -d xxx
```

## 分支合并

```
git merged xxx
```

### 查看已合并分支

```
git branch --merged  
```

### 查看未合并的分支

```
git branch --no--merged
```

### 强制删除未合并的分支

```
git branch -D xx 
```



## 老项目

### 克隆 

```
git clone "xxx.git"
```











## 问题场景

### 在一个分支中有修改，未提交的文件，这时候我们想到另一个分支去处理修改bug？

```
git stash
//接着切换到 另一个分支进行处理问题
//最后切换回来
git stash apply
//这是可以继续使用

```





```

```