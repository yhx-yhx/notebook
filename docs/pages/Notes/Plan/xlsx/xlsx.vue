<script setup>
import { ref } from 'vue';
import * as XLSXS from "xlsx-js-style"
// json to sheet
const json2excel = (data, merges, filename, sheetName) => {
    let wb = XLSXS.utils.book_new() //创建一个wb工作薄
    let ws = XLSXS.utils.json_to_sheet(data)
    XLSXS.utils.book_append_sheet(wb, ws, sheetName)
    XLSXS.writeFile(wb, filename + '.xlsx')
}
// json2excel([{ name: 'sdsd', age: '23' }],'','test','sheet1')

// aoa to sheet  
const aoa2excel = (data, merges, filename, sheetName) => {
    let wb = XLSXS.utils.book_new() //创建一个wb工作薄
    let ws = XLSXS.utils.aoa_to_sheet(data)
    ws['!merges'] = merges //合并单元格
    ws['!rows'] = [{ hpx: 100 }, { hpx: 100 }, { hpx: 100 }] //定义行高
    ws['!cols'] = [{ hpx: 100 }, { hpx: 100 }] //定义列宽
    // https://gitbrent.github.io/xlsx-js-style/ 样式
    ws['A1'].s = { //自定义样式
          font: {
            name: '宋体',
            sz: 16,
            bold: true,
            color: {
                rgb: '00000000',
            },
            italic: true,//斜体
            strike: true,//删除线
            underline: true,//字体下划线
            shadow:true
        },
        alignment: {
            horizontal: "center",
            vertical: "center",
            wrapText: true , //开启自动换行
            textRotation: 45//文字偏移
            
        },
        border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        },
        // fill: { //填充颜色
        //     fgColor:"#cccc"
        // }
    }
    XLSXS.utils.book_append_sheet(wb, ws, sheetName)
    console.log(ws);
    // console.dir(XLSXS.utils.sheet_to_html(ws));
    // console.log(XLSXS.utils.sheet_to_row_object_array(ws));
    // console.log(XLSXS.utils.sheet_to_txt(ws)); //中文会有乱码
    
    // XLSXS.writeFile(wb, filename + '.xlsx')
}
let merges = [{ s: { r: 0, c: 0 }, e: {r:0,c:3} }]//从0行0列 开始 合并到 0行是列
// aoa2excel([['我是测试的标题',undefined,undefined],[12,23,34],[34,'sds','erer']], merges, 'test', 'sheet1')

</script>
<template>
    <main>导出 xlsx 服务端 会有问题
    </main>
</template>

<style lang="scss" scoped></style>
