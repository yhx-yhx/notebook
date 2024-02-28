#### DOM
##### 操作节点
```javascript
const hh = document.querySelector('h2')
Object.assign(hh,{
    innerText:'Hello World',
    dataValue:"value"
})
Object.assign(hh.style,{
    color:'red',
    fontSize:'20px'
})

```

##### 获取元素集合
```javascript
documnet.images
document.links
document.forms
document.scripts

document.getElementByTagName('div')[id]
// 节点静态特征
document.querySelectorAll('div')
// 节点动态特征
document.getElemntByTagName('div')

Array.prototype.map.call('scssc',(element)=>element)
```