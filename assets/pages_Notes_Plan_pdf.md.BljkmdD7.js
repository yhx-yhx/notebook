import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.Svq8VKyI.js";const b=JSON.parse('{"title":"在线预览pdf","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Notes/Plan/pdf.md","filePath":"pages/Notes/Plan/pdf.md","lastUpdated":1710085005000}'),n={name:"pages/Notes/Plan/pdf.md"},t=e(`<h1 id="在线预览pdf" tabindex="-1">在线预览pdf <a class="header-anchor" href="#在线预览pdf" aria-label="Permalink to &quot;在线预览pdf&quot;">​</a></h1><h2 id="方案一-pdfobject" tabindex="-1">方案一： pdfObject <a class="header-anchor" href="#方案一-pdfobject" aria-label="Permalink to &quot;方案一： pdfObject&quot;">​</a></h2><ul><li><p>安装pdfobject <a href="https://pdfobject.com/" target="_blank" rel="noreferrer">pdfobjrct—DOC</a></p><ul><li>npm i pdfobject</li></ul></li><li><p>具体实现：</p></li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//pdfObject</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (PDFObject.supportsPDFs) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PDFObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">embed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(src, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#pdf_viewer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/canvas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pdf_viewer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),p=[t];function l(h,r,d,k,c,o){return i(),a("div",null,p)}const g=s(n,[["render",l]]);export{b as __pageData,g as default};