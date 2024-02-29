import{_ as l,c as i,o as e,a5 as o}from"./chunks/framework.Mt7VO4PB.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Base/javascript/红宝书/25客户端存储.md","filePath":"pages/Base/javascript/红宝书/25客户端存储.md","lastUpdated":1709195911000}'),a={name:"pages/Base/javascript/红宝书/25客户端存储.md"},s=o(`<h3 id="_25-客户端存储" tabindex="-1">25 客户端存储 <a class="header-anchor" href="#_25-客户端存储" aria-label="Permalink to &quot;25 客户端存储&quot;">​</a></h3><blockquote><p>写在前面 ：IndexedD 索引暂时没有学习整理</p></blockquote><h4 id="cookies" tabindex="-1">cookies <a class="header-anchor" href="#cookies" aria-label="Permalink to &quot;cookies&quot;">​</a></h4><h5 id="限制" tabindex="-1">限制 <a class="header-anchor" href="#限制" aria-label="Permalink to &quot;限制&quot;">​</a></h5><ul><li>cookies 与特定的域绑定 这个限制保证了 只能被认可的接受者接受 <strong>不可以被其他域访问</strong></li><li>不要超过300个cookie</li><li>每个域的cookie总数不超过20个</li><li>每个cookie不能超过4096字节</li><li>每个域不能超过81920字节 🚶 不同浏览器存在差异 例如:</li><li>最新的IE 与 Edge 限制每个域不超过 50个cookie</li><li>最新的fireFox 限制每个域不超过 150个cookie</li><li>最新的Opera 限制每个域不超过 180个cookie</li><li>Safari 和 Chrome 对每个域的cookie数没有限制 🖕 如果cookie 总数超过单个域 上限 浏览器会删除之前设置的cookie。浏览器之间会存在差异，避免不确定性，<strong>不要超出限制。</strong></li></ul><h5 id="cookies的构成" tabindex="-1">cookies的构成 <a class="header-anchor" href="#cookies的构成" aria-label="Permalink to &quot;cookies的构成&quot;">​</a></h5><ul><li><strong>名称：</strong> 唯一标识cookie 的名称，不区分大小写；</li><li><strong>值：</strong> 存储 字符串值，值必须经过URL 编码。</li><li><strong>过期时间：</strong> 何时删除cookie值 ；时间到了立即删除 未设置时间 <strong>会话结束删除 cookie</strong></li><li><strong>安全标志：</strong> 设置之后 只使用SSL安全连接的情况下 才会把cookie 发送到服务器。例如请求 https:// xxx 会携带 cookie http:xx则不会携带</li><li>cookie 设置了secure 只能在SSL连接上发送</li></ul><h5 id="javascript中的-cookie" tabindex="-1">JavaScript中的 cookie <a class="header-anchor" href="#javascript中的-cookie" aria-label="Permalink to &quot;JavaScript中的 cookie&quot;">​</a></h5><ul><li>通过 <strong>document.cookie</strong> 设置； 例如：document.cookie =&quot;name=value&quot;</li><li>所有的<strong>值与名必须是URI编码</strong>； 必须使用decodeURIComponent() 解码;</li><li>简化繁杂操作 可以使用<strong>cookie.js</strong></li></ul><h5 id="子cookie" tabindex="-1">子cookie <a class="header-anchor" href="#子cookie" aria-label="Permalink to &quot;子cookie&quot;">​</a></h5><ul><li><p>一个键的值 对应多组键值关系的结构；例如：<strong>name=name1=value1&amp;name2=value2&amp;name3=value3;</strong></p></li><li><p>实际开发中注意<strong>不要超出单个cookie大小</strong></p></li></ul><h5 id="使用cookie-的注意事项" tabindex="-1">使用cookie 的注意事项 <a class="header-anchor" href="#使用cookie-的注意事项" aria-label="Permalink to &quot;使用cookie 的注意事项&quot;">​</a></h5><ul><li><p>HTTP-only 的cookie ；可以在<strong>服务器或浏览器</strong>进行设置；<strong>只能在服务器读取</strong></p></li><li><p>cookie <strong>存储大量的信息 可能会影响 浏览器的性能</strong>；保存cookie越大 请求耗费时间越长；</p></li><li><p>cookie<strong>不要存放敏感数据</strong> 不安全 任何人都可以获取</p></li></ul><h4 id="web-storage" tabindex="-1">web Storage <a class="header-anchor" href="#web-storage" aria-label="Permalink to &quot;web Storage&quot;">​</a></h4><blockquote><p>规范中的两个目标</p><ul><li>提供在cookie 之外的存储会话数据途径</li><li>提供跨会话持久化存储大量数据机制</li><li>定义了两个对象：localStorage 和 sessionStorage</li><li>localStorage 是永久的存储机制；sessionStorage 是跨会话的存储机制</li></ul></blockquote><h6 id="storage类型" tabindex="-1">storage类型 <a class="header-anchor" href="#storage类型" aria-label="Permalink to &quot;storage类型&quot;">​</a></h6><p>增加了如下方法</p><ul><li><strong>clear</strong>():删除所有值；</li><li><strong>getItem</strong>(name):获取name的值；</li><li><strong>key</strong>(index):取得给定位置的名称；</li><li><strong>removeItem</strong>(name):删除给定name的名值对；</li><li><strong>setItem</strong>(name,value);设置给定name的value</li></ul><h5 id="sessionstorage-对象" tabindex="-1">sessionStorage 对象 <a class="header-anchor" href="#sessionstorage-对象" aria-label="Permalink to &quot;sessionStorage 对象&quot;">​</a></h5><ul><li><p>只存储会话数据，<strong>只能保存数据到浏览器（当前页面）关闭</strong>；</p></li><li><p>存储的sessionStorage <strong>不受页面刷新</strong>的影响；</p></li><li><p>sessionStorage 对象 与服务器会话紧密相关 <strong>运行本地文件不能使用</strong>；</p></li><li><p>存储在sessionStorage对象的数据 <strong>只能在最初的页面使用</strong> 再多页面程序用处有限；</p></li><li><p>添加数据 两种方式：</p><ul><li>sessionStorage.setItem(&quot;name&quot;,&quot;value&quot;) //使用setItem实现</li><li>sessionStorage.name = value // 使用属性存储数据</li></ul></li><li><p>所有现代浏览器实现存储写入 都是使用<strong>同步阻塞</strong>方式，因此数据会立即提交到存储；</p></li><li><p>获取属性 两种方式：</p><ul><li>sessionStorage.getItem(&#39;name&#39;)//通过 getItem实现</li><li>sessionStorage.name //使用对象属性方式 获取</li></ul></li><li><p>遍历所有值可以通过 for循环与 key()方法实现</p></li><li><p>删除属性</p><ul><li>sessionStorage.removeItem(name) 实现</li><li>delete sessionStorage.name //对象方法实现</li></ul></li></ul><h5 id="localstorage-对象" tabindex="-1">localStorage 对象 <a class="header-anchor" href="#localstorage-对象" aria-label="Permalink to &quot;localStorage 对象&quot;">​</a></h5><blockquote><p>H5规范里localStorage对象取代了 globalStorage 作为浏览器持久化的存储数据的机制</p><p>想要访问同一个localStorage 对象 页面<strong>必须是同一个域（子域不可以）</strong></p><ul><li>localStorage 也是 storage 的实例 所以同样可以使用 Storage 上的方法</li></ul></blockquote><p><strong>localStorage 与 sessionStorage 区别</strong></p><ul><li>localStorage 会保留数据 失效方式：只能用户<strong>主动清除缓存</strong>或通过<strong>JavaScript删除</strong></li><li>localStorage 数据 不受 <strong>重启浏览器 关闭标签</strong>的的影响</li></ul><h5 id="存储事件" tabindex="-1">存储事件 <a class="header-anchor" href="#存储事件" aria-label="Permalink to &quot;存储事件&quot;">​</a></h5><ul><li><p>每当 storage对象发生变化时就会触发 ‘storage’事件</p></li><li><p>触发方式</p><ul><li>设置属性</li><li>删除属性</li><li>清除所有 数据clear()</li></ul></li><li><p>事件对象 有如下四个属性：</p><ul><li>domain：存储变化对应的域</li><li>key：被设置或者删除的键</li><li>newVal：键被设置的的新值，若删除则为null</li><li>oldValue：键变化之前的值</li></ul></li><li><p>具体<strong>监听storage事件</strong>如下</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;storage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.domain)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>storage 事件 不会对 s<strong>essionStorage 与 localStorage 对象作区分</strong> 任何一个改变都会触发</p></li></ul><h5 id="限制-1" tabindex="-1">限制 <a class="header-anchor" href="#限制-1" aria-label="Permalink to &quot;限制&quot;">​</a></h5><ul><li>不同浏览器 给localStorage 和sessionStorage 设置了不同的空间限制</li><li>大多数会限制每个源<strong>5MB</strong></li></ul><h4 id="indexeddb【目前我并没有在实际应用中用到过该技术】" tabindex="-1">IndexedDB【目前我并没有在实际应用中用到过该技术】 <a class="header-anchor" href="#indexeddb【目前我并没有在实际应用中用到过该技术】" aria-label="Permalink to &quot;IndexedDB【目前我并没有在实际应用中用到过该技术】&quot;">​</a></h4><ul><li><p>IndexedDB 是现代浏览器中存储数据化结构的方案</p></li><li><p>创建一套API 方便对象的<strong>存储与获取</strong></p></li><li><p>IndexedDB 几乎是完全异步的</p></li><li><p>绝大多数的IndexedDB 操作要求添加 <strong>onerror 和 onsuccess</strong> 事件处理程序 来确定输出</p></li><li><p>数据库</p><ul><li>使用IndexedDB <ul><li>调用 indexedDB.open()方法 ，并传入名称，名称存在则打开；不存在则创建并打开；并返回一个IDBRequest实例</li><li>实例上添加onsuccess 监听成功的回调函数</li><li>实例上添加onerror 监听失败的回调</li><li>可以通过event.target.result 得到当前的db对象</li><li>event.target.errrorCode 来存储出现问题的状态码</li></ul></li></ul></li><li><p>对象存储</p><ul><li>数据库不存在 open会创建一个数据库 然后触发 upgradeneeded事件</li><li>如果数据库存在 升级了版本号 也会触发upgradeneeded事件</li><li>可以在事件处理程序中更新数据库模式</li></ul></li><li><p>事务</p><ul><li>事务是通过带哦用数据库的transaction方法创建。例如：let transaction=db.transaction()</li><li>transaction 不指定参数 数据库所有对象仅有只读权限</li><li>bd.transaction(&#39;xx&#39;) 参数可以是一个<strong>字符串</strong> 或者字符串型<strong>数组</strong>，实现访问一个或多个对象存储</li><li>当 传入第二个参数 可以是**‘readonly’<strong>，</strong>‘readwrite’<strong>，</strong>‘versionchange’**；可读 、可写</li><li>有了事务引用 可以使用 objectStore()方法，传入对象存储名称来实现访问特定存储对象</li><li>可以使用 add put 添加或修改对象 ，get获取对象，delete删除，clear清除所有对象</li><li>事务的事件处理 <strong>onerror</strong> 和 <strong>oncompute</strong></li><li>不可以在 oncompute中访问 get（）请求返回的任何数据 仍需通过onsuccess 获取数据</li></ul></li><li><p>插入对象</p><ul><li>add</li><li>事件变化都会触发 onsuccess onerror 其中一个事件</li></ul></li><li><p>通过游标查询</p><ul><li>可以实现获取多条数据</li><li>游标是 指向结果集的指针 ，与传统数据库查询方式不同 游标指向第一个结果后 并在接受指令前 不会主动查找下一条数据</li><li>需要在对象上 调用 openCursor（）方法创建游标，同样创建完成会返回一个request 可以监听其onsuccess 和onerror 事件</li><li>此时request 保存的是*IDBCursor** 的实例，包含几个属性 <ul><li>direction：字符串常量，表示游标的前进方向以及是否应该遍历所有重复的值。可能包括 next,nextunique,prev,prevunique;</li><li>key:对象的键</li><li>value：对象的值</li><li>primaryKey:游标使用的键，可能是对象键或引用键</li></ul></li><li>更新记录 <strong>update方法使用指定的</strong>游标对象更新当前指向的对象的值，同时会返回一个request对象 可以通过 onerror 和onsuccess 监听 结果</li><li>删除记录 delete方法来实现删除游标位置的记录，与update 类似</li><li>值得注意的是 当事务没有 删除与修改的权限时 会抛出错误</li><li>前面提到 默认情况下 游标只会创建一个请求 要创建下一次请求 必须调用以下方法 <ul><li>continue(key):移动结果集的下一条记录 参数key可选的 无走向下一条，有则游标指向指定的键；</li><li>advance(count):游标详情移动指定的count条记录</li></ul></li></ul></li><li><p>键范围</p><ul><li>键范围 对应IDBkeyRange 的实例。</li><li>有四种方式指定键范围 <ul><li>only（key） ；类似与直接访问对象存储并调用get(key);</li><li>定义<strong>结果集下限</strong> ，下限表示游标开始的位置 <ul><li><strong>IDBRange.lowerBound</strong>(key,bool) //参数一key，参数二：true表示从key之后开始，false or <strong>不传表示从key到结束</strong></li></ul></li><li>定义结果集上限 上限表示从头开始到key结束 第二个参数传递true不包含 key <ul><li>IDBRange.uppperBound(key,bool)</li></ul></li><li>同时设定上下限 通过bound 来实现 <ul><li>参数1上限 ，参数2下限参，数3是否包含上限内容，参数4是否包含下限</li><li>例如 IDBRange.bound(&#39;007&#39;,&#39;ace&#39;,fasle,true) // [&#39;007&#39;,&#39;ace&#39;)</li></ul></li></ul></li><li>定义完键范围 传给openCursor（）方法就可以得到该范围的游标</li></ul></li><li><p>设置游标方向</p><ul><li>openCursor 方法 实际上接受两个参数 ，参数1：IDBRange的实例，参数2 表示方向的字符串 默认方向是’next‘</li><li>nextunique 游标跳过重复项</li><li>参数1 为null时，表示默认的额所有值</li></ul></li><li><p>索引</p><ul><li>🗡️ <em>暂时省略</em></li></ul></li><li><p>并发问题</p><ul><li>产生场景 不同浏览器标签打开同一个网页 可能一个尝试升级 另一个尚未就绪</li><li>解决办法 <ul><li>在第一次打开数据库时添加 <strong>onversionchange</strong> 事</li><li>同源标签将数据库打开时 将会执行回调 <strong>执行立即关闭数据库 以便完成数据库版本的升级</strong></li><li>监听 同步处理</li></ul></li></ul></li><li><p>限制</p><ul><li>IndexedDB 数据库 是与页面源（协议、域名和端口）绑定的，信息不可以跨域</li><li>存储扣减每个源 都有自己独立的存储空间 <strong>firefox 限制 每个源50MB 移动端5MB chrome 时5MB</strong>，<strong>超出配额则请求用户许</strong>可；</li><li>firefox 还有个限制 <strong>本地文件不能访问IndexedDB 数据库</strong>？？。Chrome 没有限制</li></ul></li><li><p>小结</p><ul><li>数据没有加密，<strong>不适合存储安全数据</strong></li></ul></li></ul>`,30),t=[s];function r(n,g,u,p,c,d){return e(),i("div",null,t)}const m=l(a,[["render",r]]);export{k as __pageData,m as default};
