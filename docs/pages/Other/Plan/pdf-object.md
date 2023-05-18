# 在线预览pdf



## pdfObject

安装pdfobject   

 npm  i  pdfobject

官网【pdfObject】https://pdfobject.com/



#### javascript部分

```javascript
//pdfObject
if (PDFObject.supportsPDFs) {
    PDFObject.embed(src, "#pdf_viewer");
} else {
    location.href = "/canvas";
}
```

#### html部分

```html
<div id="pdf_viewer"></div>
```

css部分`样式 简单样式需求  按需调整`

```css
#pdf_viewer{
    height:70vh;
    width:80vh;
    border:1px soild #ccc;
}
```

