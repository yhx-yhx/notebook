import{_ as e,o as n,c as a,X as o}from"./chunks/framework.b5ba70e4.js";const l="/notebook/images/image-20230514135033045.png",s="/notebook/images/image-20230514135829831.png",b=JSON.parse('{"title":"nvm 安装教程","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Config/nvm.md","filePath":"pages/Config/nvm.md","lastUpdated":1690765418000}'),i={name:"pages/Config/nvm.md"},t=o('<h1 id="nvm-安装教程" tabindex="-1">nvm 安装教程 <a class="header-anchor" href="#nvm-安装教程" aria-label="Permalink to &quot;nvm 安装教程&quot;">​</a></h1><blockquote><p>有用的话，记得三连 ，全程没有 废话， 有废话的话 也就是这句了</p></blockquote><h2 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h2><blockquote><p>写在前面</p><p>**即使你安装了node 一样照按不误哦 **</p><p>当然 你可以直接将 node 原始安装直接删除 不是不可以；早晚得删除；不然会报错 error status 1 or 145 乱码；</p></blockquote><ol><li><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">下载nvm</a> <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows/releases</a></li></ol><p><img src="'+l+'" alt="image-20230514135033045"></p><p>解压后点击.exe安装；</p><ol><li>同意相关协议；</li><li>选择安装nvm 路径；</li><li>选择安装 node 路径；</li><li>（如果有node 它会提醒你导入 导入就好了）</li></ol><p>安装完成后</p><p><img src="'+s+`" alt="image-20230514135829831"></p><p>修改 settings.txt 文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将以上代码 添加</p><p><strong>注意可能会有权限 不够的情况</strong></p><ol><li>cmd 使用管理员权限打开</li></ol><p>以下是 nvm 常见命令</p><ul><li>nvm -v 查看当前版本</li><li>nvm --config</li><li>nvm list 查看已安装node版本列表</li><li>nvm install 版本号 下载对应node版本</li><li>nvm use 版本号 切换node版本</li><li>nvm on 开启nvm</li><li>nvm off 关闭nvm</li></ul><h2 id="切换node版本" tabindex="-1">切换node版本 <a class="header-anchor" href="#切换node版本" aria-label="Permalink to &quot;切换node版本&quot;">​</a></h2><ol><li>nvm list 查看 当前环境下的 node版本；</li><li>未安装过的 会显示 没有可见得版本；</li><li>nvm install 12.14.1</li><li>nvm use 12.14.1</li><li>nvm list 查看当前版本的 node版本（or node -v）</li></ol>`,19),r=[t];function p(m,c,d,v,h,u){return n(),a("div",null,r)}const g=e(i,[["render",p]]);export{b as __pageData,g as default};