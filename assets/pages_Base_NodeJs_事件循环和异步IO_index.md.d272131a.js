import{_ as s,o as n,c as a,X as l}from"./chunks/framework.57530656.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/NodeJs/事件循环和异步IO/index.md","filePath":"pages/Base/NodeJs/事件循环和异步IO/index.md","lastUpdated":1695802926000}'),e={name:"pages/Base/NodeJs/事件循环和异步IO/index.md"},p=l(`<h2 id="_01-事件循环和异步io" tabindex="-1">01 事件循环和异步IO <a class="header-anchor" href="#_01-事件循环和异步io" aria-label="Permalink to &quot;01 事件循环和异步IO&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 什么是事件循环</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 编写的JavaScript 浏览器或者Node 之间的桥梁 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 什么是进程（process）？ 什么是线程（thread）？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 进程：启动一个应用程序 就会启动一个或多个线程</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 线程 每一个线程，启动 一个代码 开启一个线程 这个线程为主线程</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Node的架构分析</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 循环（EventLoop）是由libuv（c语言）实现</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 阻塞IO非阻塞IO</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 非阻塞IO的问题？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 读取数据 尚未完成 可能已经返回结果了，通过轮训 来实现文件读取直到读完。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * libv 提供了一个线程池</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 获取到结果后 放到事件循环（队列里）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 事件循环 调用 执行程序对应的回调函数；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 阻塞与非阻塞 和 同异步的区别？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 阻塞非阻塞 是针对调用者来说的；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 同步异步 是针对调用者说的；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Node 事件循环的阶段</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 定时器阶段</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 待定回调</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * idle  （仅供系统内部使用）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 轮询</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 检测 setImmediate 回调函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 关闭的回调函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Node 的宏任务和微任务</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 宏任务 ：setTimeout setInteral IO事件 setImmedite close 事件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 微任务 Promise 的回调 process.nextTick queueMicrotask</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,2),t=[p];function i(c,o,r,b,y,m){return n(),a("div",null,t)}const E=s(e,[["render",i]]);export{f as __pageData,E as default};
