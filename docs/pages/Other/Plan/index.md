## 图片预览 readAsDataURL实现
<br>

```html
<input type="file" onchange="changPicture(this)" accept="image/*"/>
<img src="" alt="预览文件" />
```
<br>

```javascript
let changPicture = (dom) => {
    if(dom.files.length ===0) return 
    if (dom.files[0]) {
        const reader = new FileReader()
        reader.readAsDataURL(dom.files[0])
        const preview = document.querySelector('img')
        reader.addEventListener('load', () => {
            preview.src = reader.result
        })
    }
}
```

## 图片预览  createObjectURL实现
<br/>

```html
<input type="file" onchange="changPicture(this)" accept="image/*"/>
<img src="" alt="预览文件" />
```
<br>

```javascript
let changPicture = (dom) => {
    if(dom.files.length ===0) return 
    if (dom.files[0]) {
        //创建唯一的 url
        const objUrl = URL.createObjectURL(dom.files[0])
        //可通过revokeObjectURL 主动释放
        //URL.revokeObjectURL(objUrl)
        const preview = document.querySelector('img')
        preview.src = objUrl
        preview.addEventListener('load',()=>{
            URL.revokeObjectURL(objUrl)
        })
    }
}
```

## 预览 createObjectURL+iframe 实现
<br/>

> 图片，txt，pdf，excel（下载文件？？？），

```html
<input type="file" onchange="changPdf(this)" />
<!-- 需注入样式 -->
<iframe id="viewer" src="" frameborder="0"></iframe>  
```
<br>

```javascript
const viewer = document.getElementById('viewer')
function changPdf(dom) {
    if (dom.files.length === 0) return
    const url = URL.createObjectURL(dom.files[0])
    viewer.src = url
    viewer.addEventListener('load', function () {
        URL.revokeObjectURL(url)
    })
}
```

## 预览视频 createObjectURL+video
<br>

> **思路与上面相同**





## json 导出Excel
<br>

```html
<button onclick="toExcel()">导出</button>
```

<br>

```javascript
            const demoJson = [
                {
                    "ROWNO": 1.0,
                    "operation": "运维管理子系统-运维中心",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 13:12:18",
                    "dept": ""
                },
                {
                    "ROWNO": 2.0,
                    "operation": "运维管理子系统-日志管理",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 13:12:17",
                    "dept": ""
                },
                {
                    "ROWNO": 3.0,
                    "operation": "访问运维管理子系统",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 13:12:06",
                    "dept": ""
                },
                {
                    "ROWNO": 4.0,
                    "operation": "运维管理子系统-安全中心",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 11:03:53",
                    "dept": ""
                },
                {
                    "ROWNO": 5.0,
                    "operation": "运维管理子系统-运维中心",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 11:03:52",
                    "dept": ""
                },
                {
                    "ROWNO": 6.0,
                    "operation": "访问运维管理子系统",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 10:49:42",
                    "dept": ""
                },
                {
                    "ROWNO": 7.0,
                    "operation": "运维管理子系统-安全中心",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 10:47:19",
                    "dept": ""
                },
                {
                    "ROWNO": 8.0,
                    "operation": "访问运维管理子系统",
                    "name": "系统管理员",
                    "ip": "0.0.0.0",
                    "time": "2023-01-05 10:46:53",
                    "dept": ""
                }
            ]
            function toExcel(fileName = URL.createObjectURL(new Blob(demoJson)).slice(-36), sheetName = null) {
                const excel = XLSX.utils.book_new();
                const data = XLSX.utils.json_to_sheet(demoJson);
                if (!sheetName) {
                    sheetName = 'sheet1'
                    XLSX.utils.book_append_sheet(excel, data, sheetName);
                } else if (sheetName instanceof Array) {
                    if (sheetName.length > 0) {
                        sheetName.forEach(el => {
                            XLSX.utils.book_append_sheet(excel, data, el);
                        })
                    } else {
                        alert('sheetName must be a string or an array')
                        return
                    }
                } else if (sheetName instanceof String) {
                    XLSX.utils.book_append_sheet(excel, data, sheetName);
                } else {
                    alert('sheetName must be a string or an array')
                    return
                }
                XLSX.writeFile(excel, fileName);
            }
```

## excel 转 json 导入

```html
    <input id="inputName" onchange="changeFile(this)" type="file" />
```

<br/>

```javascript
let json = null
function changeFile(dom) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' })
        json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    }
    reader.readAsArrayBuffer(dom.files[0])
}
```

## tree 转成 array 

