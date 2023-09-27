### 使用tesseract.js实现读取图片文字的tool
> 在 JavaScript 中提取图片中的文字，特别是中文文字，需要使用 OCR（Optical Character Recognition，光学字符识别）技术。OCR 技术可以将图片中的文字转换为> 可编辑和可搜索的文本。
> 
> 一个常见的 JavaScript 库用于 OCR 是 Tesseract.js。以下是一个使用 Tesseract.js 提取中文文字的基本示例：
> 
> 首先，你需要安装 Tesseract.js。你可以使用 npm（Node Package Manager）来安装：
> 
> npm install tesseract.js

#### 测试版本
 - 版本号 ：4.1.2
 - 中文提取 正确率偏低
 - 与图片的清晰图 对比度正相关


<script setup>
// import {Suspendse} from "vue"
import Tesseract from "./tesseract.vue"
</script>

<Tesseract/>

<br>

:::details 具体实现代码
<<< ./tesseract.vue
:::
