[手摸手，带你用 vue 撸后台 系列一（基础篇）](https://juejin.cn/post/6844903476661583880)

[手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.cn/post/6844903478880370701)

[手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.cn/post/6844903481224986638)

[手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.cn/post/6844903486241374221)

[手摸手，带你用 vue 撸后台 系列五(v4.0 新版本)](https://juejin.cn/post/6844903840626507784)

[手摸手，带你封装一个 vue component](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000009090836)

[手摸手，带你优雅的使用 icon](https://juejin.cn/post/6844903517564436493)

[手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.cn/post/6844903652956569608)

[手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.cn/post/6844903652956585992)

作者：花裤衩
链接：https://juejin.cn/post/6844903481224986638
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 目录结构

- api
- views
- utils
- compontents
- store
- router

## vite 别名

- alias

### Eslint

> [vscode 扩展]https://github.com/varHarrie/varharrie.github.io/issues/10

### 封装 axios

- axios token baseURL: https://api2-xxxx.com 多个源的问题
- 请求头配置
- 错误提示 整体错误提示 建议加入默认显示的回调内容 成功失败 500 404 401 统一处理 && 包括提示信息

### vite 环境

env.dev npm run dev --mode production

### router-view

- 在标签上面加唯一 key 触发 在切换时候 触发渲染

### 登录

- 字段规则校验
- 成功获取 token 存储 token

### 侧边栏高亮问题

- 设置 :default-active="$route.path"

### 页面强制刷新

- 每次出入 query 不一样 就会造成刷新 使用时间戳 //缺点 丑怪

### Table 拖拽排序

### Table 拖拽排序

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/5b0f91103d8e5121f34a.gif~tplv-t2oaga2asx-image.image)

这里主要是基于[Sortable](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FRubaXa%2FSortable)

```reasonml
reasonml复制代码import Sortable from 'sortablejs'
let el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
let sortable = Sortable.create(el)
```

在 table mounted 之后申明`Sortable.create(el)` table 的每行 tr 就可以随意拖拽了，麻烦的目前我们的排序都是基于 dom 的，我们的数据层 list 并没有随之改变。所以我们就要手动的来管理我们的列表。

```haxe
haxe复制代码this.sortable = Sortable.create(el, {
  onEnd: evt => { //监听end事件 手动维护列表
    const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
    this.newList.splice(evt.newIndex, 0, tempIndex);
  }
});
```

这样我们就简单的完成了 table 拖拽排序。这里如果不是基于 dom 的排序推荐使用[Vue.Draggable](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FSortableJS%2FVue.Draggable)。[完整代码](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FPanJiaChen%2Fvue-element-admin%2Fblob%2Fmaster%2Fsrc%2Fviews%2Fexample%2Ftable%2FdragTable.vue)

### Table 内联编辑

table 内联编辑也是一个常见的需求。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/80da236c5cbc3b06e9f5.gif~tplv-t2oaga2asx-image.image)

其实也很简单，当我们拿到 list 数据之后先洗一下数据，每一条数据里面插入一个 edit[ true or false ]判断符，来表示当前行是否处于编辑状态。之后就是通过 v-show 动态切换不同的相应 view 就可以了。[完整代码](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FPanJiaChen%2Fvue-element-admin%2Fblob%2Fmaster%2Fsrc%2Fviews%2Fexample%2Ftable%2FinlineEditTable.vue)

```handlebars
<el-table-column min-width="300px" label="标题">
  <template scope="scope">
    <el-input
      v-show="scope.row.edit"
      size="small"
      v-model="scope.row.title"
    ></el-input>
    <span v-show="!scope.row.edit">{{scope.row.title}}</span>
  </template>
</el-table-column>
<el-table-column align="center" label="编辑" width="120">
  <template scope="scope">
    <el-button
      v-show="!scope.row.edit"
      type="primary"
      @click="scope.row.edit=true"
      size="small"
      icon="edit"
    >编辑</el-button>
    <el-button
      v-show="scope.row.edit"
      type="success"
      @click="scope.row.edit=false"
      size="small"
      icon="check"
    >完成</el-button>
  </template>
</el-table-column>
```

### Tabs

tab 在后台项目中也比较常用的。假设我们有四个 tab 选项，每个 tab 都会向后端请求数据，但我们希望一开始只会请求当前的 tab 数据，而且 tab 来回切换的时候不会重复请求，只会实例化一次。首先我们想到的就是用`v-if` 这样的确能做到一开始不会挂载后面的 tab，但有一个问题，每次点击这个 tab 组件都会重新挂载一次，这是我们不想看到的，这时候我们就可以用到`<keep-alive>`了。

> keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。 它是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

所以我们就可以这样写 tabs 了

```vim
vim复制代码<el-tabs v-model="activeTab">
  <el-tab-pane label="简介及公告" name="announcement">
    <announcement />
  </el-tab-pane>
  <el-tab-pane label="资讯" name="information">
    <keep-alive>
      <information v-if="activeTab=='information'" />
    </keep-alive>
  </el-tab-pane>
  <el-tab-pane label="直播流配置" name="stream">
    <keep-alive>
      <stream v-if="activeTab=='stream'" />
    </keep-alive>
  </el-tab-pane>
</el-tabs>
```

### 富文本

- [tinymce](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftinymce%2Ftinymce)

**[summernote](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fsummernote%2Fsummernote)** 先来说一个我绝对不推荐的富文本。这是一个韩国人开源的富文本(当然不推荐的理由不是因为这个)，它对很多富文本业界公认的默认行为理解是反起到而行的，而且只为用了一个 dialog 的功能，引入了 boostrap，一堆人抗议就是不改。格式化也是差劲。。反正不要用！不要用！不要用！

**[ckeditor](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgaletahub%2Fckeditor)** ckeditor 也是一家老牌做富文本的公司，楼主旧版后台用的就是这个，今年也出了 5.0 版本，ui 也变美观了不少，相当的不错，而且它号称是插件最丰富的富文本了。推荐大家也可以试用一下。

**[quill](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fquilljs%2Fquill)** 也是一个非常火的富文本，长相很不错。基于它写插件也很简单，api 设计也很简单。楼主不选择它的原因是它对图片的各种操作不友善，而且很难改。如果对图片没什么操作的用户，推荐使用。

**[medium-\*editor\*](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fyabwe%2Fmedium-editor)** 大名鼎鼎的 medium 的富文本(非官方出品)，但完成度还是不很不错，拓展性也不错。不过我觉得大部分用户还是会不习惯 medium 这种写作方式的。

**[Squire](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fneilj%2FSquire)** 一个比较轻量的富文本，压缩完才 11.5kb，相对于其它的富文本来说是非常的小了，推荐功能不复杂的建议使用。

**[wangEditor](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwangfupeng1988%2FwangEditor)** 一个国人写的富文本，用过感觉还是不错的。不过毕竟是个人的，不像专门公司做富文本的，配置型和丰富性不足。前端几大禁忌就有富文本 [为什么都说富文本编辑器是天坑?](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F38699645)，不过个人能做成这样子很不容易了。

**[百度 UEditor](https://link.juejin.cn?target=http%3A%2F%2Fueditor.baidu.com%2Fwebsite%2Findex.html)** 没有深入使用过，只在一个 angular1X 的项目简单用过，不过说着的 ui 真的不好看，不符合当今审美了，官方也已经很久没跟新过了。

## 导出 excel

这里先明确一点，如果你的业务需求对导出文件的格式没有什么要求，不建议导出成 xlsx 格式的，直接导出成 csv 的就好了，真的会简单很多。创建一个 a 标签，写上`data:text/csv;charset=utf-8`头，再把数据塞进去，`encodeURI(csvContent)`一下就好了，详情就不展开了，大家可以借鉴这个[stackoverflow 回答](https://link.juejin.cn?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F14964035%2Fhow-to-export-javascript-array-info-to-csv-on-client-side)。 我们重点说一下转 xlsx，我们这里用到了[js-xlsx](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FSheetJS%2Fjs-xlsx)，一个功能很强大 excel 处理库，只是下载各种格式 excel，还支持读取 excel，但上手难度也非常大，相当的复杂，其中涉及不少二进制相关的东西。不过好在官方给了我们一个[demo 例子](https://link.juejin.cn?target=http%3A%2F%2Fsheetjs.com%2Fdemos%2Fwritexlsx.html),我们写不来还抄不来么，于是我们就借鉴官方的例子来改造了一下，具体原理就不详细说了，真的很复杂。。。 重点是我们怎么使用！首先我们封装一个[Export2Excel.js](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FPanJiaChen%2Fvue-element-admin%2Fblob%2Fmaster%2Fsrc%2Fvendor%2FExport2Excel.js)， 它又依赖三个库

```javascript
javascript复制代码require('script-loader!file-saver'); //保存文件用
require('script-loader!vendor/Blob'); //转二进制用
require('script-loader!xlsx/dist/xlsx.core.min'); //xlsx核心

由于这几个文件不支持import引入，所以我们需要`script-loader`来将他们挂载到全局环境下。
```

它暴露了两个接口`export_table_to_excel`和`export_json_to_excel`,我们常用`export_json_to_excel`因为更加的可控一点，我们可以自由的洗数据。

```javascript
javascript复制代码handleDownload() {
  require.ensure([], () => { // 用 webpack Code Splitting xlsl还是很大的
    const { export_json_to_excel } = require('vendor/Export2Excel');
    const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间']; // excel 表格头
    const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
    const list = this.list;
    const data = this.formatJson(filterVal, list); // 自行洗数据 按序排序的一个array数组
    export_json_to_excel(tHeader, data, '列表excel');
  })
}，
formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => v[j]))
}
```

[完整显示线上代码](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FPanJiaChen%2Fvue-element-admin%2Fblob%2Fmaster%2Fsrc%2Fviews%2Fexcel%2Findex.vue)

## eslint

`vue cli` 默认提供了`standard`和`airbnb` 两种 lint 规范，说真的一个 j 检查校验的太松一个又太紧，而且每个团队的 lint 规范又是不同的，所以楼主干脆在项目里把大部分常用的 lint 规范都列举了出来并写上了注释方便大家修改[代码地址](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FPanJiaChen%2Fvue-admin-template%2Fblob%2Fmaster%2F.eslintrc.js)，大家也可以把自己的规范上传到 npm，像 vue 一样 [vue-eslint-config](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Feslint-config-vue)。配置 eslint 对多人协作的项目有很大的好处,同时配置好 lint 在加 ide 的 lint 插件写代码简直要起飞。相关配置可见[第一篇教程](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000009275424%23articleHeader8)。

## postcss

相信大部分 vue 的项目都是基于 [vue-cli](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-cli) 来开发的，不过毕竟每个人需求都是不太一样的，需要自定义一些的东西。就比如拿 postcss 来说 vue-cli 有一个小坑，它默认 autoprefixer 只会对通过 vue-loader 引入的样式有作用，换而言之也就是 .vue 文件里面的 css autoprefixer 才会效果。相关问题[issues/544](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs-templates%2Fwebpack%2Fissues%2F544),[issues/600](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs-templates%2Fwebpack%2Fissues%2F600)。解决方案也很简单粗暴

```xml
xml复制代码//app.vue
<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
</style>
```

你在 .vue 文件中引入你要的样式就可以了，或者你可以改变 vue-cli 的文件在 css-loader 前面在加一个 postcss-loader，在前面的 issue 地址中已经给出了解决方案。 这里再来说一下 postcss 的配置问题，新版的[vue-cli webpack 模板](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs-templates%2Fwebpack) inti 之后跟目录下默认有一个`.postcssrc.js` 。vue-loader 的 postcss 会默认读取这个文件的里的配置项，所以在这里直接改配置文件就可以了。配置和[postcss](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpostcss%2Fpostcss)是一样的。

```awk
awk复制代码//.postcssrc.js
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {}
  }
}
//package.json
"browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
```

如上代码所述，autoprefixe r 回去读取 package.json 下 browserslist 的配置文件

- `> 1%` 兼容全球使用率大于 1%的游览器
- `last 2 versions` 兼容每个游览器的最近两个版本
- `not ie <= 8` 不兼容 ie8 及以下 具体可见 [browserslist](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fai%2Fbrowserslist), postcss 也还有很多很多其它的功能大家可以[自行去把玩](https://link.juejin.cn?target=https%3A%2F%2Fwww.postcss.parts%2F)
