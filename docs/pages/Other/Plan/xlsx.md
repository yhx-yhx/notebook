### 封装 json2excel

<br/>

```javascript
function json2Excel(fileName = "json2Excel file", sheetName) {
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

<br/>

### excel转json

<br/>

```javascript
let json = null
function changeFile(e) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' })
        json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    }
    reader.readAsArrayBuffer(e.target.files[0])
}
```

