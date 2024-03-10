# 在线预览pdf



## 方案一： pdfObject

- 安装pdfobject    [pdfobjrct—DOC](https://pdfobject.com/)

  - npm  i  pdfobject

- 具体实现：

```javascript
//pdfObject
if (PDFObject.supportsPDFs) {
    PDFObject.embed(src, "#pdf_viewer");
} else {
    location.href = "/canvas";
}
```

```html
<div id="pdf_viewer"></div>
```

