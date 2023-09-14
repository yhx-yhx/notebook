<script setup>
import { ExportBriefDataDocx, getBase64Sync,getImageSize } from '../../pages/utils/templaterWord.js'
import {ElButton,ElLink} from "element-plus"
import Vue3Echarts from "../../pages/Components/Vue3Echarts.vue"
import {ref,onMounted} from "vue"
import * as echarts from "echarts"
const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      animation: false
    }
  ]
}

const listname = '导出的模板'
const imglist = [
    {
        imgUrl: "/images/logo.jpg"
    }, {
        imgUrl: "/images/test.jpg"
    }
]
const imgurl1 = './images/logo.png'
const imgurl2 = './images/logo.png'

 let data = {
        county: '西青区',
        township: "杨柳青镇",
        year: '2023',
        month: '10',
        d2: '目录2',
        d2stpg: "水体名称",
        d2village: "村庄名称",
        d2area: "水域面积29",
        d2question: `我的世界 变得奇妙更难以言喻,还以为 是从天而降的梦境,直到确定 手的温度来自你心里,这一刻 我终于勇敢说爱你,一开始 我只顾着看你,装做不经意 心却飘过去
,还窃喜 你 没 发现我 躲在角落,忙着快乐 忙着感动,从彼此陌生到熟 会是我们从没想过,真爱 到现在 不敢期待,要证明自己 曾被你想起 Really？我胡思乱想 就从今天起 I wish
,像一个陷阱 却从未犹豫 相信,你真的愿意 就请给我惊喜,关于爱情 过去没有异想的结局,那天起 却颠覆了自己逻辑,我的怀疑 所有答案因你而明白,转啊转 就真的遇见 Mr.right,一开始 我只顾着看你,装做不经意 心却飘过去,还窃喜 你 没 发现我 躲在角落,忙着快乐 忙着感动,从彼此陌生到熟 会是我们从没想过,真爱 到现在 不敢期待,要证明自己 曾被你想起 Really？,            我胡思乱想 就从今天起 I wish,像一个陷阱 却从未犹豫 相信,你真的愿意 就请给我惊喜,关于爱情 过去没有异想的结局,那天起 却颠覆了自己逻辑,我的怀疑 所有答案因你而明白,转啊转 就真的遇见 Mr.right,我的世界 变得奇妙更难以言喻,还以为 是从天而降的梦境,直到确定 手的温度来自你心里,这一刻 也终于勇敢说爱你`,
        wrwt: '污染问题',
        d3: "目录3",
        jcYear: '2023',
        jcMonth: "2",
        jcDotNum: "23",
        isJcDotTmd: "达标",
        isJcDotRjy: '达标',
        isJcDotAd: "达标",
        d3Stss: "1000",
        pageTotal: "调查问卷中共1000份",
        effectivePage: "有效699份",
        SatisfactionPercentage: "90.90%",
        isTmdJc: "达标",
        isRjyJc: "达标",
        isAdJc: "达标",
        isZtJc: "达标",
        stmc: "水体名称",
        isWc: "完成",
        d2tableData: [{ county: "区1", township: "街镇1", village: "村1", stmc: "水体1", stlx: "水体类型1", symj: "水体面积1", lat: "经度1", lon: "纬度1" }, { county: "区2", township: "街镇2", village: "村2", stmc: "水体2", stlx: "水体类型2", symj: "水体面积2", lat: "经度2", lon: "纬度2" }],
        d2tableData2: [{ stmc: "水体名称1", wrwt: "污染问题1", zlcs: "工程治理措施1" }, { stmc: "水体名称2", wrwt: "污染问题2", zlcs: "工程治理措施2" }],
        d3tableData: [
            {
                id: "1",
                dw: "点位1",
                tmd: "透明度1",
                rjy: "溶解氧1",
                ad: "氨氮1",
            },
            {
                id: "2",
                dw: "点位2",
                tmd: "透明度2",
                rjy: "溶解氧2",
                ad: "氨氮2",
            },
            {
                id: "3",
                dw: "点位3",
                tmd: "透明度3",
                rjy: "溶解氧3",
                ad: "氨氮3",
            },
        ]
    }
const exportWordFile = async () => {
    data.image1 = await getBase64Sync(imgurl1)
     let imgSize = {
        //控制导出的word图片大小
        image1:await getImageSize(data.image1),
        image2:await getImageSize(data.image2)
    };
    
    ExportBriefDataDocx("/notebook/static/testTemplater.docx", data, `${listname}.docx`,imgSize);
}

onMounted(async ()=>{
    setTimeout(()=>{
        let el = document.querySelector('#echart_1020 canvas');
       el && (data.image2 = el.toDataURL())
    },500)
})
</script>

<div>
    <el-link href="https://docxtemplater.com/docs/tag-types/" target="blank">DOCXtemplater doc</el-link>
        <ul>
            <li>word模板中模板字符串 中间不要携带空格 无法正常编译过</li>
            <li> Note that it is however not possible to use no delimiters at all, docxtemplater forces you to have some
                delimiters.
                请注意，但是根本不可能使用任何分隔符，docxtemplater 强制您使用一些分隔符。</li>
        </ul>
        <el-button @click="exportWordFile">exportWordFile</el-button>
        <Vue3Echarts id="echart_1020" :options="options" />
    </div>
