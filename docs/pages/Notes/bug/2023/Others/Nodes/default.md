## elementplus plus 上传 upload组件 按钮级别上传显示 进度条



在 Element Plus 的 Upload 组件中，可以使用 `show-file-list` 和 `list-type` 属性来控制按钮级别的上传显示和进度调。

以下是一个示例，展示如何在 Element Plus 的 Upload 组件中实现按钮级别上传显示和进度调：

```
<template>
  <el-upload
    action="/upload"
    :show-file-list="false"
    :list-type="listType"
    @progress="onProgress"
  >
    <el-button slot="trigger" size="small" type="primary">
      {{ buttonText }}
    </el-button>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      listType: 'text',
      buttonText: '点击上传',
    };
  },
  methods: {
    onProgress(event, file, fileList) {
      const percent = event.percent;
      console.log(`文件上传进度: ${percent}%`);
    },
  },
};
</script>
```

在上述代码中，我们将 `show-file-list` 设置为 `false`，以隐藏默认的文件列表。然后，我们将 `list-type` 设置为 `text`，以显示按钮级别的上传显示。最后，我们将 `<el-button>` 插入 `<el-upload>` 并设置其 `slot` 为 `trigger`，这将在上传组件中显示自定义按钮。在 `progress` 事件中，我们添加了一个回调函数来处理上传进度，并记录每个文件的上传进度。

需要注意的是，在 `onProgress()` 函数中，我们使用 `console.log()` 打印上传进度。您也可以在该函数中执行其他操作，以根据需要自定义进度调。

希望这可以帮助您在 Element Plus 的 Upload 组件中实现按钮级别的上传显示和进度调。

## vite 打包清除 所有console.log() 语句

在 Vite 中，可以使用 `terser` 压缩工具和 `@rollup/plugin-replace` 插件来清除 `console.log()` 输出，并将其应用于所有 JavaScript 文件。

以下是一个示例，展示如何在 Vite 中通过配置使用压缩工具来清除 `console.log()` 输出：

```
// vite.config.js

import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
          'console.log(': '/* removed */',
        }),
        terser({
          compress: {
            drop_console: true, // 清除 console.log()
          },
        }),
      ],
    },
  },
});
```

在上述代码中，我们在 `rollupOptions.plugins` 中添加了 `replace` 插件，用于替换所有 JavaScript 文件中的 `console.log()` 调用。具体而言，我们将 `console.log()` 替换为 `/* removed */` 以清除输出。然后，我们又添加了 `terser` 压缩器，其中设置了 `compress.drop_console: true` 来清除所有 `console.log()` 输入。

需要注意的是，清除 `console.log()` 可能会隐藏有用的调试信息，因此请在确定不需要时再将其清除。

希望这可以帮助您在 Vite 中清除 `console.log()` 输出并清空控制台。



## svg 这两个属性的作用 alignment-baseline text-anchor



`alignment-baseline` 和 `text-anchor` 属性是用于对 SVG 中的文本元素进行对齐和定位的属性。

`alignment-baseline` 属性指定文本元素与其所在容器的基准线之间的垂直对齐方式。具体取值包括：

- `baseline`：默认，使得文字的基线与容器的基线对齐。
- `middle`：使得文字的中心点与容器的中心点对齐。
- `central`：使得文字的中心点与容器的中心点对齐（兼容旧版浏览器）等。

`text-anchor` 属性指定了文本元素的水平对齐方式。具体取值包括：

- `start`：默认，使得文字的左侧与容器的左侧对齐。
- `middle`：使得文字的中心点与容器的中心点对齐。
- `end`：使得文字的右侧与容器的右侧对齐。

以下示例展示如何使用这两个属性来居中放置 SVG 中的文本元素：

```
svg<svg width="300" height="200">
  <rect x="50" y="50" width="200" height="100" fill="#eee" stroke="#ddd"/>
  <text x="150" y="100" text-anchor="middle" alignment-baseline="middle">居中对齐</text>
</svg>
```

在上述代码中，我们使用 `text` 元素添加了一个居中对齐的文本。我们将 `text-anchor` 属性设置为 `middle`，使得文本水平居中对齐，然后将 `alignment-baseline` 属性设置为 `middle`，从而将自己与矩形元素垂直中心对齐。

希望这可以帮助您理解 `alignment-baseline` 和 `text-anchor` 属性并在 SVG 中正确定位和对齐文本元素。



## 前端渲染gif

在前端中，可以使用 `<canvas>` 元素和一些 JavaScript 库来渲染 GIF 动态图像。以下是一些常用的库：

- `gif.js`：一个纯 JavaScript 实现的 GIF 编码器和解码器。
- `jsgif`：另一个用于在浏览器中解码和展示 GIF 的 JavaScript 库。
- `gifffer`：一种用于在页面上呈现 GIF 的轻量级 JS 库，它使用了 `gif.js` 并将其自动注入到`<img>` 标签中。

以下是 `gif.js` 库的一个基本示例：

```
html<canvas id="my-canvas" width="320" height="240"></canvas>
jsimport GIF from 'gif.js';

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// 创建一个新的 GIF 对象
const gif = new GIF''{
  workers: 2,
  quality: 10,
}''';

// 添加每帧图像到 GIF 对象
gif.addFrame''ctx.getImageData''0, 0, canvas.width, canvas.height)'';

// 完成并生成最终的 GIF 数据
gif.on ''''finished'''', function(blob) {
  const url = URL.createObjectURL''blob'';
  
  // 渲染到页面上
  const img = new Image();
  img.src = url;
  document.body.appendChild''img'';
};

gif.render'''';
```

在这个示例中，先获取到一个新的 `GIF` 对象，并指定相关的配置选项。然后，使用 `addFrame` 方法将帧图像添加到 GIF 对象中。当所有的图像都已经添加完成后，可以调用 `render` 方法生成最终的 GIF 数据，并使用 `URL.createObjectURL` 创建可下载的 URL。

渲染到页面上的话可以在一些 HTML 元素（如 div、img 等）上通过设置 `background-image` 或 `src` 属性来进行预览。

总体来说，需要一些 JavaScript 的图像处理能力以及对 GIF 文件格式的理解，才能在浏览器中渲染 GIF 动态图像。 幸运的是，前端社区中已经有很多优秀的库和工具来简化这个过程。



在前端中，主要有以下几种方式来渲染 GIF 动态图像：

1. 使用 `<img>` 标签

最简单的方式就是使用普通的 `<img>` 标签来展示 GIF 图像。浏览器原生支持 GIF 格式图像，因此只需将 GIF 文件路径设置为 `<img>` 标签的 `src` 属性即可。例如：

```
html<img src="animation.gif" alt="Gif animation">
```

优点：易于实现、易于维护。

缺点：无法通过 JavaScript 直接对动画进行控制，例如无法暂停、开始或修改播放速度。并且在性能较差的设备和网络环境下，可能会发生卡顿情况。

1. 使用网页上的单独图像组成一组动画帧

这种方法是使用多张图片来表示动画序列，每张图片都代表着 GIF 动画序列的一个帧。在 JS 中可以通过定时器或动画库来切换每张图片，从而呈现 GIF 动画效果。例如：

```
html<div id="animation">
  <img src="frame1.png" />
  <img src="frame2.png" />
  <img src="frame3.png" />
  ...
</div>
jsconst animationContainer = document.getElementById('animation');
const frames = animationContainer.children;
let currentFrame = 0;

setInterval(() => {
  // 隐藏当前帧
  frames[currentFrame].style.display = 'none';

  // 显示下一帧
  currentFrame++;
  if (currentFrame >= frames.length) {
    currentFrame = 0;
  }
  frames[currentFrame].style.display = 'block';
}, 50);
```

优点：能够更细微地控制动画效果，例如可以暂停、倒叙和修改播放速度等。

缺点：需要手动为每一帧创建和管理图像，且难以对一个长时间而复杂的GIF 动画进行编辑或修改。

1. 使用专门的 JavaScript 库

前端常见的一些 JavaScript 动画库，如 jQuery, Tween.js, GSAP 等都可以负责加载并渲染 GIF 图像。这些库通常具有更强大的功能，并提供一系列 API 来直接控制动画的行为，例如播放、暂停、跳转和控制播放速度等。例如使用 gif.js 库:

```
html<div>
  <button id="generate">Generate GIF</button>
  <canvas id="preview" width="300" height="225"></canvas>
</div>
jsimport GIF from ''gif.js'';

const canvas = document.getElementById('preview');
const context = canvas.getContext('2d');

const gifGenerator = new GIF({
  workers: 2,
  quality: 10,
});
// 循环生成每一帧
for (let i = 0; i <= 10; i++) {
  context.fillStyle = `rgb(${i * 25}, ${i * 10}, ${i * 8})`;
  context.fillRect(0, 0, canvas.width, canvas.height);
  gifGenerator.addFrame(context, { delay: 100 });
}

// 当帧添加完成后生成GIF
gifGenerator.on('finished', function(blob) {
  const image = new Image();
  image.src = URL.createObjectURL(blob);
  document.body.appendChild(image);
});

// 点击按钮来生成 GIF
document.getElementById('generate').addEventListener('click', function(e) {
  e.preventDefault();
  gifGenerator.render();
});
```

优点：图像质量和播放性能通常较好，且具有更强大的控制动画的 API 和操作选项。

缺点：需要首先引入外部库并熟悉其相关功能，学习曲线相比前两种方法略高。在对于像素密集型的动画（如动态背景等）可能存在性能问题。

总体来说，选择合适的方法取决于要呈现的 GIF 类型、应用场景以及个人偏好。针对不同的情况，开发者可以采用多种方式进行 GIF 动画展示和操作。



## Fuse.js

`Fuse.js` 是一种 JavaScript 模糊搜索库，能够在给定集合中快速搜索模式（搜索词）。它支持各种模糊搜索、排序和过滤选项，并提供了各种可定制的操作选项。

以下是一个基本的 `Fuse.js` 示例：

```
jsimport Fuse from 'fuse.js';

const data = [
  { name: 'John Doe', age: 25, city: 'New York' },
  { name: 'Jane Doe', age: 35, city: 'Chicago' },
  { name: 'Joe Smith', age: 42, city: 'San Francisco' },
  { name: 'Sarah Johnson', age: 29, city: 'Seattle' },
  { name: 'Adam Lee', age: 39, city: 'Los Angeles' },
];

// 配置 Fuse 对象
const options = {
  keys: ['name', 'city'], // 搜索字段
  threshold: 0.4, // 匹配阈值。0 表示完全匹配，1 表示没有匹配。
};

// 创建 Fuse 对象并进行搜索
const fuse = new Fuse(data, options);
const result = fuse.search('john');

console.log(result); // [{ name: 'John Doe', age: 25, city: 'New York' }]
```

在这个示例中，使用 `Fuse()` 构造函数创建了一个 `Fuse` 对象，并指定要搜索的数据及其配置选项。然后，`search()` 方法被调用来执行具体的搜索操作，并将搜索结果存储在一个数组中返回。

需要注意的是，`Fuse.js` 还支持诸如模糊搜索、加权搜索等更高级的搜索，我们只是展示了基本的示例以方便理解。完整的 API 文档可以在 `Fuse.js` 的官方网站上找到。

[文档](https://fusejs.io)

## 全屏

import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen();

`@vueuse/core` 库中的 `useFullscreen` 用于控制元素进入或退出全屏模式。以下是介绍其基本使用方法的示例：

```
<template>
  <div ref="fullscreenEl">
    <button @click="toggleFullscreen">Toggle Fullscreen</button>
    <p>Press the Esc key to exit full screen mode.</p>
  </div>
</template>

<script>
import { useFullscreen } from '@vueuse/core';

export default {
  setup() {
    const { toggle, isFullscreen, element } = useFullscreen();

    function toggleFullscreen() {
      toggle();
    }

    return {
      toggleFullscreen,
      isFullscreen,
      fullscreenElement: element,
    };
  },
};
</script>
```

在这个示例中，通过 `ref` 获取到需要开启全屏的元素，然后调用 `useFullscreen` 方法来获取相关控制函数和状态。然后将 `toggleFullscreen` 函数绑定到按钮的点击事件，当用户点击按钮时该函数将调用 `toggle` 函数切换进入或退出全屏模式。最后，将 `isFullscreen` 和 `element` 属性作为组件的返回值暴露出来，以便在 Vue 模板中使用。

提示：如果您需要对特定元素进行全屏操作，需要将 `ref` 中存储的实际 DOM 元素传递给 `useFullscreen` 函数。如果未指定任何元素，则默认将文档设为全屏模式。

```
<template>
  <div>
    <video ref="videoRef" controls width="300">
      <source src="./video.mp4" type="video/mp4">
    </video>
    <button @click="toggleFullscreen">Toggle Fullscreen Video</button>
  </div>
</template>

<script>
import { useFullscreen } from '@vueuse/core';

export default {
  setup() {
    const videoRef = ref(null);
    const { toggle, isFullscreen, element } = useFullscreen(videoRef);

    function toggleFullscreen() {
      toggle();
    }

    return {
      toggleFullscreen,
      isFullscreen,
      fullscreenElement: element,
    };
  },
};
</script>
```

在这个示例中，`useFullscreen` 将 `videoRef` 参数传递给工具方法。这使得当用户点击切换全屏按钮时，只有视频元素会进入全屏模式。

## useWindowSize

`useWindowSize()` 是 Vue.js 中 @vueuse/core 库提供的一个内置函数，用于在 Vue 组件中获取当前浏览器窗口的大小。

该函数返回一个包含浏览器窗口宽度和高度的响应式对象。在页面加载时，可以通过该函数获取初始窗口大小，并在窗口大小变化事件中自动更新组件的状态。

下面是一个示例，展示了如何使用 `useWindowSize()` 函数来订阅窗口大小变化并改变组件的样式：

```
<template>
  <div :style="containerStyle">
    <h1>Hello World!</h1>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';

export default {
  setup() {
    const { width, height } = useWindowSize();

    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: `${height}px`,
    };

    return {
      containerStyle,
    };
  },
};
</script>
```

在上面的示例中，我们定义了一个 Vue 组件，其中使用 `useWindowSize()` 函数来获取浏览器窗口的大小。通过获取到的窗口大小值，我们可以创建一个响应式对象 `containerStyle`，用于设置父容器的样式。在窗口大小变化时，`useWindowSize()` 会自动更新 `width` 和 `height` 值，从而实现 UI 的响应式布局。

总之，使用 `useWindowSize()` 函数可以帮助 Vue 开发者更方便地订阅窗口大小变化事件，并实现响应式样式的布局，从而提高页面的用户体验。



## 离开页面保存

在使用 Vue.js 开发时，实现离开页面时询问用户是否保存的功能，可以使用以下两种常见的实现方案：

1. 利用 `window.onbeforeunload` 事件

像传统 Web 应用一样，可以监听 `window.onbeforeunload` 事件，并在事件回调函数中弹出确认对话框提示用户是否保存。在应用中使用 Vue Router 时，通常在应用初始化时增加一个路由守卫来监听该事件。

```
router.beforeEach(function(to, from, next) {
  window.addEventListener('beforeunload', function(e) {
    const unsavedData = checkIfUnsavedDataExist();
    if (unsavedData !== null && unsavedData !== undefined) {
      // prompt 方法会在浏览器中弹出确认对话框。
      e.returnValue = '';
      return unsavedData;
    }
  });
  next();
});
```

在上述代码中，`checkIfUnsavedDataExist()` 方法用于判断当前页面中是否存在未保存的数据，默认返回值为 `null` 或者 `undefined`，如果有未保存的数据，就通过 `prompt` 弹出确认对话框提示用户是否离开页面或者保存数据。

1. 利用 Vue Router 导航守卫

Vue Router 提供了一组导航钩子函数，可以在路由跳转前后执行相应的函数以完成进一步操作。其中 `beforeRouteLeave` 钩子函数可以用于在离开当前路由之前做一些操作，如询问用户是否需要保存修改。

```
export default {
  beforeRouteLeave(to, from, next) {
    const unsavedData = checkIfUnsavedDataExist();
    if (unsavedData !== null && unsavedData !== undefined) {
      const confirmed = window.confirm('是否保存离开前的修改？');
      if (confirmed) {
        saveChanges(unsavedData);
      }
    }
    next();
  },
};
```

在上述代码中，`beforeRouteLeave` 钩子函数返回用户收到一个确认对话框，询问用户是否需要保存数据修改。如果用户点击“确定”，则会调用 `saveChanges()` 方法来保存数据，否则不做任何操作直接关闭页面。

需要注意的是，这种方法只能在使用 Vue Router 进行路由管理时使用，相较于第一种方法稍微方便些，但功能也受到路由约束，适合于中小型单页应用的场景。



## CSS3 实现瀑布流布局

CSS3 还提供了一种布局技术叫做多列布局，可以轻松实现基本的瀑布流效果。在该方法中，您只需要通过 CSS 样式指定一个多列布局，然后使用 `column-count`、`column-gap` 和 `column-width` 属性来控制列数、行间距和列宽等参数。例如：

```
html
<div id="masonry">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
  <!-- 其他 HTML 元素 -->
</div>

#masonry {
  column-count: 3; /* 列数 */
  column-gap: 5px; /* 行间距 */
}

.item {
  display: inline-block;
  width: 100%;
  margin-bottom: 5px; /* 瓷砖之间的间距 */
}
```

在上述示例中，整个容器被分成三列，并且每个项目都是调整过大小的格子，可以放置在任意一列中。设置每个元素的宽度为100%保证其能够填充整个列，同时也要为元素设置一些外边距（如上例中的 `margin-bottom`），以控制元素之间的空间距离。

需要注意的是，这种方法对于元素数量不同或源瀑布流布局高度不一致的情况可能会出现问题，但对于固定大小和数量的元素，它是一个非常简单、快速而且响应式的瀑布流实现方案。



# geoservice  各种查询规则



以下是GeoServices中常见的查询规则及其英文参数：

- 等于 (equals): `where=field_name=value`
- 小于等于 (less than or equal to): `where=field_name<=value`
- 大于等于 (greater than or equal to): `where=field_name>=value`
- 小于 (less than): `where=field_name<value`
- 大于 (greater than): `where=field_name>value`
- 不等于 (not equal to): `where=field_name<>value`
- 包含 (contains): `where=field_name LIKE '%value%'`
- 左匹配 (starts with): `where=field_name LIKE 'value%'`
- 右匹配 (ends with): `where=field_name LIKE '%value'`

其中，`where`参数用于指定查询条件。例如：

- 查询名称为"北京市"的行政区划：`where=NAME='北京市'`
- 查询人口数大于100万的城市：`where=POPULATION>1000000`

除此之外，还有一些其他的查询参数和操作符：

- `order by`: 根据指定字段排序，可以指定升序或降序 (`ASC`或`DESC`)。例如：`orderByFields=FIELD_NAME ASC`
- `return geometry`: 是否返回要素的空间信息 (`true`或`false`)。
- `out fields`: 指定返回的字段。例如：`outFields=FIELD1,FIELD2`
- `geometry type`: 指定返回的几何类型 (`esriGeometryPoint`, `esriGeometryPolyline`, `esriGeometryPolygon`等)。
- `spatial relation`: 指定空间查询的操作符，如`esriSpatialRelContains`,`esriSpatialRelIntersects`等。

了解这些查询规则能够帮助你更加灵活地使用GeoServices进行GIS数据的查询和分析





[
 {
  "statisticType": "<count | sum | min | max | avg | stddev | var>",
  "onStatisticField": "Field1", 
  "outStatisticFieldName": "Out_Field_Name1"
 },
 {
  "statisticType": "<count | sum | min | max | avg | stddev | var>",
  "onStatisticField": "Field2",
  "outStatisticFieldName": "Out_Field_Name2"
 } 
]





# iframe



## 属性

**allowfullscreen** 

设置 为 true ，通过 调用 iframe 的 requesFullscreen（） 激活全屏模式

### API

**contentWindow**  获取 iframe 的window 对象

**contentDocment**  获取 iframe 的 dom 对象 

**window.frames['name']** 通过iframe 标签 name 属性 来获取 iframe window 对象

*注*： 以下的window 是指的 iframe 的window

**window.parent**  获取上一级的 window对象 如果上级依旧是 iframe 即获取的是 iframe的window

window .top 获取 最顶层的 window 对象



## window.postMessage And message

`window.postMessage()`是一种跨域窗口消息传递机制。它通过在不同的HTML文档（包括打开了不同域名或端口的窗口）之间提供了一种安全机制，以便在这些窗口之间相互通信。调用 `window.postMessage()` 函数时，将会发送一个消息到指定的窗口，另外的窗口可以通过捕获该窗口的 "message" 事件来获取发送方的消息。

通过一个具体示例来解释如何使用 `window.postMessage()`：

假设有两个页面，其中一个是父级页面，一个是子级页面，两者有不同的域名。如果希望从子页面向父页面发送消息，可以在子页面中使用以下代码：

```javascript
window.parent.postMessage('Hello from iframe!', 'http://parent-page.com');
```

这会将一条消息发送到父级页面，父级页面必须已经实现了接收来自子页面的跨域消息。然后，在父级页面的JavaScript文件中，可以添加一个事件监听器来接收消息：

```javascript
window.addEventListener('message', function(event) {
  if (event.origin !== 'http://child-page.com') {
    return;
  }
  console.log(event.data);
});
```

使用 `event.origin` 属性可以确保在处理来自子页面的消息时不会遭受跨站点脚本攻击。

`iframe` 是HTML中的元素标签之一，可让您在页面中嵌入另一个页面。它有一些有用的属性，包括：

- `src`：指定要嵌入的页面的URL。
- `width` 和 `height`：设置iframe元素的宽度和高度。
- `allowfullscreen`：允许用户使用全屏模式查看iframe内的内容。
- `sandbox`：可以通过指定特定的标志来限制与 iframe 内容的交互。

在前面的示例中，将消息发送到父级窗口的代码来自于子级页面的 JavaScript 文件，其中 iframe 用作子级页面的容器。

总之，`window.postMessage()` 是安全传递跨域消息的方式之一。而 `iframe` 则可以在同一页面中承载其他页面或在不同的域名下进行跨域通信。







## ruoyi   

不李姐

http://doc.ruoyi.vip/ruoyi-vue/document/qdsc.html#%E8%AF%B7%E6%B1%82%E7%A4%BA%E4%BE%8B

## ![image-20230508133253015](/images/image-20230508133253015.png)







## document.activeElement

`document.activeElement` 是一个只读属性，它返回当前被激活的DOM元素，也就是具有焦点并且正在与之交互的元素。

在网页中，当用户与页面上的表单元素或可编辑文本区域等交互时，通常会将焦点设置在这些元素中的一个。使用 `document.activeElement` 可以轻松确定哪个元素当前处于焦点状态。

下面是一个实际的例子来演示如何使用 `document.activeElement`：

```html
<input type="text" id="input1">
<input type="text" id="input2">

<script>
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');

  // 当 input1 获得焦点时，记录 active element
  input1.addEventListener('focus', () => {
    console.log(`Active Element: ${document.activeElement.id}`);
  });

  // 当 input2 获得焦点时，记录 active element
  input2.addEventListener('focus', () => {
    console.log(`Active Element: ${document.activeElement.id}`);
  });
</script>
```

在上面的示例中，我们创建了两个输入框，并为每个输入框添加了一个焦点事件监听器。当登录到其中一个输入框时，我们使用 `document.activeElement` 记录当前的焦点元素，并在控制台打印其ID。

此外，您还可以通过检查 `document.hasFocus()` 的返回值来确定文档是否具有活动焦点。如果返回 `true`，则表示文档当前是活动的。

```javascript
console.log(`Document has focus: ${document.hasFocus()}`);
```

如果您希望跟踪焦点元素并执行其他任务，请使用事件监听器，例如 `focusin` 或 `focusout`。这些事件在文档中的任何元素进入或退出焦点时被触发。

总之，`document.activeElement` 是检索当前处于焦点状态的DOM元素的简单方法。您可以通过处理焦点事件和其他相关事件来跟踪，并对其进行操作。



## document.hasFocus()  状态

在 `document.hasFocus()` 返回 `false`的情况下，可以将其作为文档当前未处于焦点状态的信号。以下是常见情况：

- 当前文档不在浏览器窗口或选项卡中打开。
- 文档所在的窗口或选项卡失去了焦点，并且另一个应用程序或浏览器选项卡现在正受到用户的注意，因此文档丧失了活动焦点。

例如，如果用户使用操作系统自带的 Alt+Tab ([Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec)/[macOS](https://support.apple.com/en-us/HT204216)) 切换到其他正在运行的应用程序，则文档会失去活动焦点并导致 `document.hasFocus()` 返回 `false`。

在移动设备上，在用户对设备进行调整、交互或后台活动之时，文档可能会失去活动焦点，因此 `document.hasFocus()` 可能返回 `false`。

总之，在这些情况下，`document.hasFocus()` 将返回 `false` 以指示文档当前不处于活动状态。



## document.getSelection() 

`document.getSelection()`方法返回用户在当前文档中选择的文本。

**语法：**

```
const selectionObject = window.getSelection();
```

其中，`selectionObject`是一个 `Selection` 对象，它包含所选文本及其相关属性和方法。

**常见用法：**

1. 获取所选文本：

```
const selectionText = window.getSelection().toString();
```

1. 设置所选文本样式：

```
const selectionObject = window.getSelection();
if (selectionObject.rangeCount) {
  const selectedRange = selectionObject.getRangeAt(0);
  const newNode = document.createElement('span');
  newNode.setAttribute('style', 'background-color: yellow;');
  selectedRange.surroundContents(newNode);
}
```

1. 清除所选文本样式：

```
const selectionObject = window.getSelection();
if (selectionObject.rangeCount) {
  const selectedRange = selectionObject.getRangeAt(0);
  const parentNode = selectedRange.commonAncestorContainer;
  const newNode = document.createElement('span');
  newNode.innerHTML = selectedRange.toString();
  parentNode.insertBefore(newNode, selectedRange.startContainer);
  selectedRange.deleteContents();
}
```

1. 监听文本选择变化事件：

```
document.addEventListener('selectionchange', () => {
  console.log(window.getSelection().toString());
});
```

详细的 `Selection` 对象属性和方法可以参考 [MDN Web 文档](https://developer.mozilla.org/en-US/docs/Web/API/Selection)。





## keep-alive

在 Vue 中，`<keep-alive>` 是一个抽象组件，它可以在组件切换时将不活动的组件缓存起来，以提高应用程序的性能。当激活该组件时，如果存在缓存，则直接从缓存中渲染，而不会重新创建组件实例。

下面是如何使用 `<keep-alive>` 组件：

1. 将要缓存的组件包装在 `<keep-alive>`标记内

```
html<template>
  <div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <button @click="toggleComponent">Toggle Component</button>
  </div>
</template>
```

在上述示例中，我们将需要进行缓存的组件包装在 `<keep-alive>` 标记内，并将其 `is` 名称动态地绑定到 `currentComponent` 变量。

1. 设置 include 和 exclude 属性进行组件缓存

您可以通过 `include` 和 `exclude` prop 定义将哪些组件缓存或不缓存。其中，`include` 和 `exclude` 分别是字符串或正则表达式数组，可以匹配要包含或排除的组件名称。

```
html<template>
  <div>
    <keep-alive :include="cachedViews">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cachedViews: ["Home", "About"],
    };
  },
};
</script>
```

在上述示例中，我们设置了 `include` 属性，并将缓存的组件名称存储在 `cachedViews` 数组中。

1. 使用 activated 和 deactivated 钩子函数

您可以使用 `activated` 和 `deactivated` 生命周期钩子函数，在组件激活和失去焦点时执行特定逻辑。例如，您可以在 `activated` 生命周期钩子函数中加载数据或执行其他相关操作，从而提高组件渲染的速度。

```
html<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  activated() {
    // Component is activated
    console.log('Component is activated');
  },
  deactivated() {
    // Component is deactivated
    console.log('Component is deactivated');
  },
};
</script>
```



## 你不知道的复制粘贴

前端实现复制功能的方法有以下几种：

1. 使用 Clipboard API

Clipboard API 是一个浏览器原生提供的 API，可以实现将文本或文件粘贴到剪切板中。我们可以使用 `navigator.clipboard` 对象来调用相关方法。

```
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
```

但需要注意的是，该 API 并不支持所有的浏览器，部分浏览器上并没有实现该 API，所以要做好兼容性处理。

1. 借助 textarea 元素实现

在页面中创建一个隐藏的 textarea 元素，设置其 value 属性为要复制的内容，然后手动选取该元素中的内容，并调用 `document.execCommand('copy')` 复制到剪切板中。最后再移除该元素。

```
function copyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.bottom = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  console.log('Text copied to clipboard');
}
```

这种方法和 Clipboard API 一样需要注意兼容性问题。

1. 使用 Flash 插件实现

Flash 插件在早期被广泛应用于网站中复制文本到剪贴板的功能，由于 Flash 插件的普及率非常高，这种方法是跨浏览器实现复制功能的较为稳定的一种方案。

在页面中嵌入一个 Flash 文件，然后使用 ActionScript 内置的 API 实现文本复制操作。

不过随着 Flash 的逐步退出历史舞台，这种方法的应用也越来越少了。

综上所述，目前较为推荐的方案是使用 Clipboard API，并在其不支持的情况下切换到使用 textarea 方案。



## 拷贝

在 JavaScript 中，拷贝一个对象通常有两种方式：浅拷贝和深拷贝。

- 浅拷贝：只拷贝了原对象的引用，新对象和原对象共享同一块内存空间，这意味着当新对象被修改时，原对象也会跟着改变。
- 深拷贝：创建一个新对象，然后递归地将原对象的每个属性都复制到新对象中，这样就能保证新对象和原对象互不影响。

以下是深浅拷贝的实现方式：

### 浅拷贝

常见的浅拷贝方法有：

#### 1. Object.assign()

使用 `Object.assign()` 将源对象的属性浅拷贝到目标对象中。

```javascript
const obj = { a: 1, b: { c: 2 } };
const newObj = Object.assign({}, obj);
newObj.a = 3;
console.log(obj.a); // 1
```

需要注意的是，如果源对象的属性值为对象或函数等引用类型，则只是将其引用浅拷贝到目标对象中。

```
const obj = { a: 1, b: { c: 2 } };
const newObj = Object.assign({}, obj);
newObj.b.c = 3;
console.log(obj.b.c); // 3
```

#### 2. 扩展运算符

使用扩展运算符（`...`）也可以进行浅拷贝。

```
const obj = { a: 1, b: { c: 2 } };
const newObj = { ...obj };
newObj.a = 3;
console.log(obj.a); // 1
```

同样地，需要注意如果源对象的属性值是对象或函数等引用类型，则只是将其引用浅拷贝到目标对象中。

### 深拷贝

以下是几种常见的深拷贝方式：

#### 1. JSON.parse() + JSON.stringify()

将对象先转成字符串再转回来，实现深拷贝：

```
const obj = { a: 1, b: { c: 2 } };
const newObj = JSON.parse(JSON.stringify(obj));
newObj.b.c = 3;
console.log(obj.b.c); // 2
```

但需要注意的是，该方法是有局限性的。会忽略对象中的 undefined 和 function 类型的属性，而且如果对象中存在循环引用的情况，则无法正常进行深拷贝。

#### 2. 递归复制

递归复制是实现深拷贝的另一种方式，逐层遍历对象并复制每个非引用类型的值。

```
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
```

需要注意的是，如果对象中存在循环引用的情况





https://www.bilibili.com/read/cv21989263

