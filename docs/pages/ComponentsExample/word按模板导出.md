<script setup>
import { ExportBriefDataDocx, getBase64Sync } from '../../../pages/utils/templateWord.js'
const listname = '导出的模板'
const imglist = [
    {
        imgUrl: "/test.jpg"
    }, {
        imgUrl: "/test.jpg"
    }
]
const imgurl1 = 'https://img0.baidu.com/it/u=1064360734,3641226727&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667'
const imgurl2 = 'https://img.soogif.com/xfc6Cmri3q0B8B6THVyh3sdcBXLjKWal.jpg'
const exportWordFile = async () => {
    // 多个图片遍历转base64
    // for (let i in imglist) {
    //     imglist[i].imgUrl = await getBase64Sync(imglist[i].imgUrl)
    // }
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
    let imgSize = {
        //控制导出的word图片大小
        image1: [596, 300],
        image2: [435, 193]
    };
    data.image1 = await getBase64Sync(imgurl1)
    data.image2 = await getBase64Sync(imgurl2)

    ExportBriefDataDocx("/test.docx", data, `${listname}.docx`, imgSize);
}
</script>

    <div>
        <!-- <el-link href="https://docxtemplater.com/docs/tag-types/" target="blank">整不明白就看看我 求求了</el-link> -->
        <ul>
            <li>word模板中模板字符串 中间不要携带空格 无法正常编译过</li>
            <li> Note that it is however not possible to use no delimiters at all, docxtemplater forces you to have some
                delimiters.
                请注意，但是根本不可能使用任何分隔符，docxtemplater 强制您使用一些分隔符。</li>
            <li>普通标签以字母字符开头，其他类型的标签以特殊前缀开头，例如：

                {#loop} and {/loop} to start and close a tag for the data part "loop"
                {#loop} 并 {/loop} 启动和关闭数据部分“循环”的标记
                {@input} to insert raw XML data
                {@input} 插入原始 XML 数据
                when using the image-module {%src_url} will add an image for the "src_url" data part.
                使用图像模块 {%src_url} 时，将为“src_url”数据部分添加图像。</li>
            <li>Conditions 条件
                条件以#开始，以斜线结束。那就是 {#hasKitty} 开始一个条件并 {/hasKitty} 结束它。 只有 hasKitty 数据部分存在时，才会显示此内容。
            </li>
            <li>loops {#products}
                {name}, {price} € {名称}， {价格} €
                {/products}
                <pre>{
    "products": [
        { name: "Windows", price: 100 },
        { name: "Mac OSX", price: 200 },
        { name: "Ubuntu", price: 0 }
    ]}</pre>
            </li>
            <li>{
                "products": [
                "Windows",
                "Mac OSX",
                "Ubuntu"
                ]
                }
                <pre>{#products} {.} {/products} 遍历数据 ==> Windows Mac OSX Ubuntu</pre>
            </li>
        </ul>
        <el-button @click="exportWordFile">exportWordFile</el-button>
    </div>
