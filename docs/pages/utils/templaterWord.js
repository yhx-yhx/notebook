/**
 * 导出word文档（带图片）
 * 
 */
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import * as ImageModule from 'docxtemplater-image-module-free'
import expressionParser from 'docxtemplater/expressions.js'

/**
 * 将base64格式的数据转为ArrayBuffer
 * @param {Object} dataURL base64格式的数据
 */
function base64Parser(dataURL) {
    const base64Regex = /^data:image\/(png|jpg|jpeg|svg|svg\+xml);base64,/;
    if (!base64Regex.test(dataURL)) {
        return false;
    }
    const stringBase64 = dataURL.replace(base64Regex, "");
    let binaryString;
    if (typeof window !== "undefined") {
        binaryString = window.atob(stringBase64);
    } else {
        binaryString = Buffer.from(stringBase64, "base64").toString("binary");
    }
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes.buffer;
}
export const ExportBriefDataDocx = (tempDocxPath, data, fileName, imgSize = {}) => {
    expressionParser.filters.size = function (input, width, height) {
        return {
            data: input,
            size: [width, height],
        };
    };
    function angularParser(tag) {
        tag = tag
            .replace(/^\.$/, 'this')
            .replace(/('|‘)/g, "'")
            .replace(/(“|”)/g, '"')
        const expr = expressions.compile(tag)
        return {
            get: function (scope, context) {
                let obj = {}
                const index = last(context.scopePathItem)
                const scopeList = context.scopeList
                const num = context.num
                for (let i = 0, len = num + 1; i < len; i++) {
                    obj = assign(obj, scopeList[i])
                }
                //word模板中使用 $index+1 创建递增序号
                obj = assign(obj, { $index: index })
                return expr(scope, obj)
            }
        }
    }
    JSZipUtils.getBinaryContent(tempDocxPath, (error, content) => {
        console.log('content', content)
        if (error) {
            console.log(error)
        }
        // expressions.filters.size = function (input, width, height) {
        //     return {
        //         data: input,
        //         size: [width, height],
        //     };
        // };
        let imageOptions = {
            //图像是否居中
            centered: true,
            getImage(chartId) {
                //将base64的数据转为ArrayBuffer
                return base64Parser(chartId);
            },
            getSize(img, base64, tagName) {
                // 获取默认图片尺寸
                if (imgSize.hasOwnProperty(tagName)) {
                    return imgSize[tagName];
                } else {
                    return [200, 200];
                }
            }
        }
        // 创建一个JSZip实例，内容为模板的内容        
        const zip = new PizZip(content)
        // 创建并加载 Docxtemplater 实例对象
        let doc = new Docxtemplater();
        doc.attachModule(new ImageModule(imageOptions));
        doc.loadZip(zip);
        doc.setOptions({ parser: expressionParser });
        doc.setData(data)
        try {
            doc.render()
        } catch (error) {
            const e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties
            }
            console.log('err', { error: e })
            throw error
        }
        // 生成一个代表Docxtemplater对象的zip文件
        const out = doc.getZip().generate({
            type: 'blob',
            mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })
        saveAs(out, fileName)
    })
}
/**
 * 将图片的url路径转为base64路径
 * 可以用await等待Promise的异步返回
 * @param {Object} imgUrl 图片路径
 */
export function getBase64Sync(imgUrl) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = imgUrl;
        image.setAttribute("crossOrigin", '*');
        image.onload = function () {
            let canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            let ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
            let quality = 0.8;
            let dataurl = canvas.toDataURL("image/" + ext, quality);
            resolve(dataurl);
        };
    })
}
/**
 * @description
 * @export
 * @param {imgUrl|base64} base64
 * @return {[width, height]} 
 */
// const A4DimensionalStandards = { width: 842, height: 1156, aspectRatio: 842 / 1156} // A4 纸张尺寸 px
const A4DimensionalStandards = { width: 421, height: 528, aspectRatio: 421 / 528 }
export function getImageSize(base64) {
    // 
    return new Promise((resolve, reject) => {
        let img = new Image();
        try {
            img.src = base64
            img.onload = function () {
                let width
                let height
                // 设置A4标准 按比例缩放尺寸
                let aspectRatio = this.width / this.height;
                if (this.width > A4DimensionalStandards.width) {
                    if (this.height < A4DimensionalStandards.height) { //超宽不超高
                        // console.log('超宽不超高');
                        width = A4DimensionalStandards.width
                        height = A4DimensionalStandards.width / aspectRatio
                        resolve([width, height])
                    } else {//超宽超高
                        // 计算谁超的比例多
                        if (width / A4DimensionalStandards.width > height / A4DimensionalStandards.height) {//按宽处理
                            // console.log('按宽处理');
                            width = A4DimensionalStandards.width
                            height = A4DimensionalStandards.width / aspectRatio
                            resolve([width, height])
                        } else { //按高处理
                            // console.log('按高处理');
                            height = A4DimensionalStandards.height
                            width = A4DimensionalStandards.height * aspectRatio
                            resolve([width, height])
                        }

                    }
                } else {
                    if (this.height < A4DimensionalStandards.height) { //不超宽不超高
                        // console.log('不超宽不超高');
                        width = this.width
                        height = this.height
                        resolve([width, height])
                    } else {//不超宽超高  按高处理
                        // console.log('不超宽超高  按高处理');
                        height = A4DimensionalStandards.height
                        width = A4DimensionalStandards.height * aspectRatio
                        resolve([width, height])
                    }

                }
                // console.log([width, height]);
                // resolve([this.width, this.height])
            }
            img.onerror = function (error) {
                reject(error)
            }

        } catch (error) {
            reject(error)
        }
    })
}