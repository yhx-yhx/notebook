# Vue3Preview 组件
<br/>

<script setup>
import {ref} from "vue"
import Vue3Preview from "../../pages/Components/Vue3Preview.vue"
const src = ref()
const mime = ref()

const fileChange = (e) => {
    let file = e.target.files[0]
    mime.value = file.type
    let type = file.type.split('/')[1]
   var reader = new FileReader()
            reader.onload = () => {
                src.value = reader.result
            }
            if (file) {
                reader.readAsDataURL(file)
            }    

}

</script>

<div class="file">
<input class="file-input" type="file" @change="fileChange" />
</div>

<br/>
<Vue3Preview :src="src" :mime="mime" />

<br/>

<style lang="scss">
    .file {
 display: flex;
 align-items: center;
 justify-content: center;
 /* gap: 10px; */
 font-family: inherit;
 font-weight: 500;
 text-transform: uppercase;
 letter-spacing: 0.4px;
 color: #7e97b8;
 background-color: #e0e8ef;
 border-style: solid;
 border-width: 2px 2px 2px 2px;
 border-color: rgba(255, 255, 255, 0.333);
 border-radius: 40px 40px 40px 40px;
 /* padding: 16px 24px 16px 28px; */
 transform: translate(0px, 0px) rotate(0deg);
 transition: 0.2s;
 box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
 height:50px;
 &::before{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    content:'请选择文件';
    color: #7e97b8;
 }
 .file-input{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    width:100%;
    height:50px;
    cursor: pointer;
    opacity: 0;
 }
}

.file:hover {
 color: #516d91;
 background-color: #E5EDF5;
 box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
}

.file:active {
 box-shadow: none;
}
</style>

<!-- <Vue3Preview src="https://img0.baidu.com/it/u=530426417,2082848644&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500.jpg" height="77vh" /> -->


::: warning 支持的预览预览格式
- 近乎所有的 图片格式 
- txt
- json
:::


