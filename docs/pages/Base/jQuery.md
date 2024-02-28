#### jQuery
##### 基本语法
###### 简要语法
```javascript
$(selector).action()
```
###### doument ready
```javascript
$(document).ready(function(){
    //do something
})
// or
$(function(){
    //do something
})
```
###### event
```javascript
// event 事件名称
$(selector).event(function(){
    //do something
})
```

##### 效果
###### 显示隐藏
```javascript
$(selector).show()
$(selector).hide()
$(selector).toggle()
```
###### 淡入淡出 [.fade*()]
```javascript
$(selector).fadeIn(speed,callback)
$(selector).fadeOut(speed,callback)
$(selector).fadeToggle(speed,callback)
$(selector).fadeTo(speed,opacity,callback) //渐变到具体的opacity
```
###### 滑动 [.slide*()]
```javascript
$(selector).slideDown(speed,callback)
$(selector).slideUp(speed,callback)
$(selector).slideToggle(speed,callback)
```

###### 动画
```javascript
css 动画够用了 这玩意积累的很
```

###### 链调用
```javascript
// 核心 内部实现 返回值都是选择器的包装对象
$(selector).action1().action2().action3()
```

##### HTML
###### 获取内容 [.html() .text() .val()]
:::code-group
```javascript [.html()]
// 返回或设置HTML内容
$(selector).html()
$(selector).html(content)
```
```javascript [.text()]
// 返回或设置文本内容
$(selector).text()
$(selector).text(content)
```
```javascript [.val()]

// 设置表单/或返回 表单的值
$(selector).val()
$(selector).val(content)
```
:::

###### 获取属性 [.attr()]
```javascript
// 获取属性
$(selector).attr(attribute)
// 设置属性
$(selector).attr(attribute,value)
// 设置多个值时
$(selector).attr({attribute1:value1,attribute2:value2,...})
```
##### # 添加元素 [.append() .prepend() .after() .before()]
:::code-group
```javascript [.append()]
// 选中元素的内部追加 相当给字符串 追加几字符串
$(selector).append(content)
```
```javascript [.prepend()]
// 选中元素的内部前置 相当给字符串 前面赛了几字符串
$(selector).prepend(content)
```
```javascript [.after()]
// 跨越标签的前后
$(selector).after(content)
```
```javascript [.before()]
$(selector).before(content)
```
:::

##### 删除元素 [.remove() .empty()]
:::code-group
```javascript [.remove()]
// 删除选中元素（及其子元素）
$(selector).remove()
```
```javascript [.empty()]
// 只删除子元素
$(selector).empty()
```
:::

##### css类
:::code-group
```javascript [.addClass()]
$(selector).addClass(classname)
```
```javascript [.removeClass()]
$(selector).removeClass(classname)
```
```javascript [.toggleClass()]
$(selector).toggleClass(classname)
```
```javascript [.css()]
// 获取
$(selector).css(propertyname)
// 设置
$(selector).css(propertyname,value)
// 设置多个值
$(selector).css({propertyname:value,...})
```
:::

##### 获取尺寸 [.width() .height() .innerWidth() .innerHeight() .outerWidth() .outerHeight()]
:::code-group
```javascript [.width()]
// 只获取内容宽度
$(selector).width()
```
```javascript [.height()]
// 只获取内容高度
$(selector).height()
```
```javascript [.innerWidth()]
// 包含内边距
$(selector).innerWidth()
```
```javascript [.innerHeight()]
// 包含内边距
$(selector).innerHeight()
```
```javascript [.outerWidth()]
// 包含内边距和边框
$(selector).outerWidth()
```
```javascript [.outerHeight()]
// 包含内边距和边框
$(selector).outerHeight()
// 包含内边距、边框和外边距
$(selector).outerHeight(true)
```
:::


#### 遍历

##### 祖先元素
```javascript
// 获取所有的祖先元素
$(selector).parents()
// 获取最近的祖先元素
$(selector).parent()
// 获取介于两者之间的祖先元素
$(selector).parentsUntil(selector)
```

##### 兄弟元素
:::code-group
```javascript [.siblings()]
// 被选元素的所有同胞元素。
$(selector).siblings()
```
```javascript [.next()]
// 紧接的同胞元素。
$(selector).next()
```
```javascript [.nextAll]
// 返回所有紧接着的同胞元素。
$(selector).nextAll()
```
```javascript [.nextUntil()]
// 返回指定元素直到结束元素之间的所有同胞元素。
$(selector).nextUntil(selector)
```

```javascript [.prev*（）]
// 与上面的方法类似，只是方向相反
```
:::

##### 后代元素
:::code-group
```javascript [.children()]
$(selector).children()
```
```javascript [.find()]
$(selector).find(selector)
```
:::

##### 过滤 [first() last() eq() filter() not()]
:::code-group
```javascript [.first()]
// 获取第一个元素
$(selector).first()
```
```javascript [.last()]
// 获取最后一个元素
$(selector).last()
```
```javascript [.eq()]
// 获取指定索引的元素
$(selector).eq(index)
```
```javascript [.filter()]
$(selector).filter(selector)
```
```javascript [.not()]
$(selector).not(selector)
```
:::

##### ajax


##### 复制元素 [.clone()]
```javascript
$(selector).clone()
```

##### 替换元素 [.replaceWith()]
```javascript
$(selector).replaceWith(content)
``

