# nvm 安装教程 

> 有用的话，记得三连 ，全程没有 废话， 有废话的话 也就是这句了

## 安装步骤

> 写在前面
>
> **即使你安装了node 一样照按不误哦 **
>
> 当然 你可以直接将 node 原始安装直接删除 不是不可以；早晚得删除；不然会报错 error status 1 or 145 乱码；

1. [下载nvm](https://github.com/coreybutler/nvm-windows/releases)    https://github.com/coreybutler/nvm-windows/releases

![image-20230514135033045](/images/image-20230514135033045.png)



解压后点击.exe安装；

1. 同意相关协议；
2. 选择安装nvm 路径；
3. 选择安装 node 路径；
4. （如果有node 它会提醒你导入 导入就好了）

安装完成后 

![image-20230514135829831](/images/image-20230514135829831.png)

修改 settings.txt 文件

```
node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/
```

将以上代码 添加

**注意可能会有权限 不够的情况**

1. cmd 使用管理员权限打开

以下是 nvm 常见命令

- nvm -v 查看当前版本
- nvm --config 
- nvm list 查看已安装node版本列表
- nvm install 版本号 下载对应node版本
- nvm use 版本号 切换node版本
- nvm on 开启nvm
- nvm off 关闭nvm

## 切换node版本

1. nvm list 查看 当前环境下的 node版本；
2. 未安装过的 会显示 没有可见得版本；
3. nvm install 12.14.1
4. nvm use 12.14.1
5. nvm list 查看当前版本的 node版本（or node -v）





