## XLSX
> XLSX 用起来似乎并不难
> 样式 这块的问题 很闹心 直接用 xlsx-js-style 样式
> 样式问题直接搞死我 我搞了大半天 

- 怎么实现多级（多表头实现）excel导出？
- 如何mergeCell 合并单元格？
- 

### utils 工具类

- aoa_to_sheet 实现的将二维数组转换成 sheet 会自动处理 string number Date boolean 等类型
- book_append_sheet 向 workbook 中添加 sheet 参数 workbook 必填 sheet （ws） 
:::个人理解相当于 往工作不上面添加sheet 当然可以理解成 数组里面push方法 可以重复使用 这个方法
::: details book_append_sheet 介绍
> 源码
```javascript
/* add a worksheet to the end of a given workbook */
function book_append_sheet(wb/*:Workbook*/, ws/*:Worksheet*/, name/*:?string*/, roll/*:?boolean*/)/*:string*/ {
	var i = 1;
	if(!name) for(; i <= 0xFFFF; ++i, name = undefined) if(wb.SheetNames.indexOf(name = "Sheet" + i) == -1) break;
	if(!name || wb.SheetNames.length >= 0xFFFF) throw new Error("Too many worksheets");
	if(roll && wb.SheetNames.indexOf(name) >= 0) {
		var m = name.match(/(^.*?)(\d+)$/);
		i = m && +m[2] || 0;
		var root = m && m[1] || name;
		for(++i; i <= 0xFFFF; ++i) if(wb.SheetNames.indexOf(name = root + i) == -1) break;
	}
	check_ws_name(name);
	if(wb.SheetNames.indexOf(name) >= 0) throw new Error("Worksheet with name |" + name + "| already exists!");

	wb.SheetNames.push(name);
	wb.Sheets[name] = ws;
	return name;
}
```
函数名为 book_append_sheet，接受四个参数：

wb：表示要添加工作表的工作簿对象。
ws：表示要添加的工作表对象。
name：表示新工作表的名称。如果未提供名称，则会自动生成一个名称。
roll：表示是否需要滚动查找可用的工作表名称。
函数的返回值是新工作表的名称。

函数的执行步骤如下：

初始化变量 i 为 1。
如果未提供工作表名称（name 为 undefined 或 null），则进行循环，直到找到一个未使用的工作表名称。每次循环，将 i 增加 1，并尝试使用 "Sheet" + i 作为工作表名称。如果该名称不在工作簿的 SheetNames 列表中，则将其设置为新的工作表名称，并跳出循环。
如果仍未提供工作表名称，或者工作簿的 SheetNames 列表的长度已经达到了 0xFFFF（表示最多只能有 16384 个工作表），则抛出错误。
如果提供了 roll 参数，并且工作簿中已经存在名为 name 的工作表，则进行滚动查找新的工作表名称。首先，从 name 中提取根名称和数字部分，并使用数字部分递增来生成新的工作表名称。如果在工作簿的 SheetNames 列表中找到了新的可用名称，则将其设置为新的工作表名称，并跳出循环。
调用 check_ws_name 函数来检查新工作表名称的合法性。这个函数的具体实现没有在代码中给出。
如果在工作簿的 SheetNames 列表中已经存在名为 name 的工作表，则抛出错误。
最后，将新的工作表名称添加到工作簿的 SheetNames 列表中，将工作表对象存储到 Sheets 对象中，并返回新的工作表名称。
:::
- book_new 创建一个 workbook 对象
- cell_set_hyperlink 设置单元格超链接
- cell_add_comment 添加单元格注释
- cell_set_internal_link 设置单元格内部链接
- cell_set_number_format 设置单元格数字格式（number|String）
- decode_cell 解码单元格
- decode_col  解码
- decode_range 解码范围
- format_cell 格式化单元格
- json_to_sheet json 转化成 Sheet
- sheet_add_aoa 将sheet 添加到 二维数组
- sheet_add_dom 将sheet 添加到dom
- sheet_add_json 将sheet 添加到json
- sheet_get_cell 获取单元格
- sheet_set_array_formula 设置数组公式并刷新相关单元格
- sheet_to_csv 
::: details sheet_to_csv 将sheet 转化成 csv 格式字符串
> 源码
```javascript
function sheet_to_csv(sheet/*:Worksheet*/, opts/*:?Sheet2CSVOpts*/)/*:string*/ {
	var out/*:Array<string>*/ = [];
	var o = opts == null ? {} : opts;
	if(sheet == null || sheet["!ref"] == null) return "";
	var r = safe_decode_range(sheet["!ref"]);
	var FS = o.FS !== undefined ? o.FS : ",", fs = FS.charCodeAt(0);
	var RS = o.RS !== undefined ? o.RS : "\n", rs = RS.charCodeAt(0);
	var endregex = new RegExp((FS=="|" ? "\\|" : FS)+"+$");
	var row = "", cols/*:Array<string>*/ = [];
	o.dense = Array.isArray(sheet);
	var colinfo/*:Array<ColInfo>*/ = o.skipHidden && sheet["!cols"] || [];
	var rowinfo/*:Array<ColInfo>*/ = o.skipHidden && sheet["!rows"] || [];
	for(var C = r.s.c; C <= r.e.c; ++C) if (!((colinfo[C]||{}).hidden)) cols[C] = encode_col(C);
	var w = 0;
	for(var R = r.s.r; R <= r.e.r; ++R) {
		if ((rowinfo[R]||{}).hidden) continue;
		row = make_csv_row(sheet, r, R, cols, fs, rs, FS, o);
		if(row == null) { continue; }
		if(o.strip) row = row.replace(endregex,"");
		if(row || (o.blankrows !== false)) out.push((w++ ? RS : "") + row);
	}
	delete o.dense;
	return out.join("");
}

```
:::
- sheet_to_formulae 将工作表对象转换为公式列表
- sheet_to_html 将sheet 转换成 html 格式
- sheet_to_json 将sheet 转换成 json 格式
- sheet_to_row_object_array 将sheet 转换成 对象数组
- sheet_to_txt 将sheet 转换成 txt 格式
- split_cell 分割单元格
- table_to_book 转换成 workbook 对象
- table_to_sheet 将table 转换成 sheet 对象

<script setup>

import XlsxDemo from "./xlsx.vue"
</script>

<XlsxDemo />


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

