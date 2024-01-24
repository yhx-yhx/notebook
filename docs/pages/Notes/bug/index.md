> 会记录下近期的 bug 一道算法（也不一定是算法哦）（方便查看 采用时间倒序记录）

# 2024-01-23

## 问题 jsencrypt 
### version 3.2.1

###  问题描述 yui出现风险漏洞

- 目前可以通过 `升级版本到 3.3.2`
- [jsencrypt](https://github.com/travist/jsencrypt/issues/277)
> 将内部版本做了提升

# 2023-9-27

## bug vitepress [project build]
### version [1.0.0-alpha.74]

### 问题描述

- 打包时候出现 `vitpress rror: EPERM: operation not permitted` 错误字样

### 解决办法

- 目前可以通过 `管理员权限打包`
- `删除 nodemodules` 再打包
- [vitepress](https://githubfast.com/vuejs/vitepress/issues/1209)

## bug SSG vitepress [window is not defined]

### 问题描述
> 在插件 三方依赖 使用了window对象的情况下会发生该错误
- driver.js 引入时 发生

### 解决方法

- 1 在 mounted 周期 执行插件导入 例如： ` import('driver.js').then(res => {})`
- 2 使用 import.meta.env.SSR 判断是否是服务端渲染


# 2023-4-22

## bug

### elementplus el-carousel  跑马灯 当数据长度为2时 bug

#### 项目场景

    前段时间公司项目 无意间发现的问题；
    当时是使用elementplus 的carousel组件 嵌套 echarts的实现 echarts 轮播的效果；


#### 问题描述

   当时一度怀疑 是不是 css 定位写的有问题,  经过 反复注释 排查 发现 **el-carousel-item**；
    当 v-for 中的数据源 长度为2时会出现问题；

```javascript
<script setup>
const data = ref([{value:1},{value:2}])
</script>
<div class="error">
      <h4 class="title">ERROR</h4>
      <div class="des">长度等于2时 会出现问题（el-carousel-item v-for="item in 2"）</div>
      <div>
        <el-carousel :autoplay="false" indicator-position="none">
          <el-carousel-item v-for="item in data" :key="item.value">
            <D>
              <template #default>我是一个错误示范{{ item.value }}</template>
            </D>
          </el-carousel-item>
        </el-carousel>
      </div>
</div>
```

#### 解决问题
将数据源 长度 扩展为长度 大于2的数据

```javascript
<script setup>
const data = ref([{value:1},{value:2}])
</script>
 <div class="right">
      <!-- 长度大于2时  不会出现问题 -->
      <h4 class="title">RIGHT</h4>
      <div class="des">长度大于2时 不会出现问题</div>
      <div>
        <el-carousel trigger="click" :autoplay="false">
          <el-carousel-item v-for="item in [data[1],...data,data[0]]" :key="item.value">
            <D>
              <template #default>别记错了我是对的哟哟{{ item.value }}</template>
            </D>
          </el-carousel-item>
        </el-carousel>
      </div>
 </div>
```

以上便是 关于该 bug 的全部描述
如果该内容对您有帮助的话，可以点在收藏谢谢！！！！