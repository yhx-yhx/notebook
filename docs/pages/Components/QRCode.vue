<script setup >
import { ElButton, ElSelect, ElOption, ElForm, ElFormItem, ElInput, ElRow, ElTooltip, ElCard } from 'element-plus'
import { onMounted, reactive, ref, watch } from 'vue';
import QRCode from 'qrcode';
import logo from '/images/logo.png';
const qrUrl = 'https://yhx-yhx.github.io/notebook/';
const opts = {
  errorCorrectionLevel: 'H', // 容错级别
  type: 'image/png', // 生成的二维码类型
  quality: 0.89, // 二维码质量
  margin: 2, // 二维码留白边距
  width: 280, // 宽
  height: 280, // 高
  text: qrUrl, // 二维码内容
  color: {
    dark: '#999900', // 前景色
    light: '#fff', // 背景色
  },
};
onMounted(() => {
  const msg = document.getElementById('QRCode_header');
  const ctn = msg.getContext('2d');
  const img = new Image();
  img.src = logo;
  const canvasWidth = parseInt(msg.style.width);
  const canvasHeight = parseInt(msg.style.height);
  const imgWidth = 50;
  const imgHeight = 50;
  img.onload = () => {
    ctn.drawImage(img, (canvasWidth - imgWidth) / 2, (canvasHeight - imgHeight) / 2, imgWidth, imgHeight);
  };

  // 将获取到的数据(val)画到msg(canvas)上
  QRCode.toCanvas(msg, qrUrl, opts, function (error) {
    if (error) {
      console.log('二维码加载失败', error);
      this.$message.error('二维码加载失败');
    }
  });
});

const download = () => {
  const a = document.createElement('a');
  const canvas = document.getElementById('QRCode_header');
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = '二维码';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  });
};

</script>

<template>
    <el-card type="card" header="二维码">
        <el-tooltip
            class="box-item"
            effect="dark"
            content="点击二维码区域可下载二维码"
            placement="top"
          >
        <div class="card_contnet" @click="download ">
            <canvas id="QRCode_header" style="width: 280px; height: 280px"></canvas>
            <p class="msg_info">注：点击二维码区域可下载二维码</p>
        </div>
        </el-tooltip>
    </el-card>
</template>

<style scoped lang="scss">
.el-card {
    margin: 10px;
}
:deep(.el-card__body){
    display: flex;
}
.card_contnet{
    margin: auto;
    position: relative;
}
#QRCode_header{
    border: 1px solid #000000a6;
    border-radius: .8em;
}
.QRcode_logo{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 30%;
    height: 30%;
    // background-color: red;
    background: url(/images/logo.svg) no-repeat;
    background-size: 100% 100%;
}

</style>
