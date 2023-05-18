# git

## 安装 git for windows 

选择自己需要的版本；   点击下载，安装比较简单，不再赘述；

 [git for  windows  ](https://github.com/git-for-windows/git/releases/tag/v2.37.2.windows.2)

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