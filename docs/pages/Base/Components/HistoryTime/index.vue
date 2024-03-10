<script setup>
import { ref } from 'vue';
import { ElSteps, ElStep } from 'element-plus'
// const isStepMessage = ref(!1)


</script>
<template>
    <!-- <el-button @click="isStepMessage = !isStepMessage">{{ !isStepMessage ? '展开' : '收起' }}</el-button> -->

    <main style="height: fit-content;margin-top: 20px;">
        <el-steps direction="vertical" :active="14">
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">农业农村环境治理项目</div>
                        <div class="create_time" style="font-size: .8em;">2023-03-2023-07</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询
                            通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能</li>
                        <li>根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据</li>
                        <li>难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高</li>
                        <li>主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；</li>
                    </ul>
                </template>
            </el-step>
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">驾驶舱配置系统</div>
                        <div class="create_time" style="font-size: .8em;">2023-01-2023-05</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>主要依托于 AirCity（DTS） CIM平台，二次开发实现 </li>
                        <li>实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询
                            通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能</li>
                        <li>根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据</li>
                        <li>难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高</li>
                        <li>主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；</li>
                    </ul>
                </template>
            </el-step>
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">海水淡化项目</div>
                        <div class="create_time" style="font-size: .8em;">2022-12-2023-03</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统</li>
                        <li>大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集</li>
                        <li>后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据</li>
                        <li>主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；</li>
                    </ul>
                </template>
            </el-step>
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">燃气考试系统</div>
                        <div class="create_time" style="font-size: .8em;">2022-05-2022-11</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）</li>
                        <li>以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能</li>
                        <li>设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述</li>
                        <li>反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走
                        </li>
                        <li>同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述</li>
                    </ul>
                </template>
            </el-step>
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">智慧电力可视化大屏（数据可视化项目）</div>
                        <div class="create_time" style="font-size: .8em;">2022-05-2022-06</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。</li>
                        <li>页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成；
                        </li>
                        <li>技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。</li>
                    </ul>
                </template>
            </el-step>
            <el-step>
                <template #title>
                    <div style="display: flex;justify-content:space-between;">
                        <div class="title">云问答（基于区块链问答系统）</div>
                        <div class="create_time" style="font-size: .8em;">2021-12-2022-03</div>
                    </div>
                </template>
                <template #description>
                    <ul>
                        <li>以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。</li>
                        <li>整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能；
                        </li>
                        <li>主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；</li>
                    </ul>
                </template>
            </el-step>
            <el-step title="..."></el-step>

        </el-steps>
    </main>
</template>

<style lang="scss" scoped>
// :deep(.el-step__head.is-finish) {
//     color: var(--vp-c-green)
// }</style>
