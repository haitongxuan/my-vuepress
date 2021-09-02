<template><h1 id="安装主题" tabindex="-1"><a class="header-anchor" href="#安装主题" aria-hidden="true">#</a> 安装主题</h1>
<p>创建自己的主题的最简单方法是从我们的官方主题之一创建副本。首先你需要安装官方主题。</p>
<h2 id="安装官方主题" tabindex="-1"><a class="header-anchor" href="#安装官方主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#install-official-theme" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>安装官方主题</h2>
<h3 id="使用-vsf-cli" tabindex="-1"><a class="header-anchor" href="#使用-vsf-cli" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#use-vsf-cli" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用 vsf-cli</h3>
<p>如果你已经安装了 VSF 并且只想安装主题，那么你可以使用<a href="https://www.npmjs.com/package/%40vue-storefront/cli" target="_blank" rel="noopener noreferrer">vsf-cli （打开新窗口）<OutboundLink/></a>. 首先安装 vsf-cli：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// You have to us <span class="token number">0.2</span>.1 version of VSF CLI <span class="token keyword">for</span> VSF1
$ <span class="token function">npm</span> i -g @vue-storefront/cli@0.2.1
// or via <span class="token function">yarn</span>
$ <span class="token function">yarn</span> global <span class="token function">add</span> @vue-storefront/cli@0.2.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后在您的项目目录中运行命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ vsf init:theme
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>选择主题：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ? Select theme <span class="token keyword">for</span> Vue Storefront <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
$ ❯ Capybara - based on Storefront UI 
    Default 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>选择主题版本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ? Select theme version <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
$ ❯ Stable version <span class="token punctuation">(</span>recommended <span class="token keyword">for</span> production<span class="token punctuation">)</span> 
    In development branch <span class="token punctuation">(</span>could be unstable<span class="token operator">!</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>之后，您应该在<code>src/themes/{themeName}</code>. 现在您需要做的是<a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#create-your-theme" target="_blank" rel="noopener noreferrer">创建您的主题<OutboundLink/></a>。</p>
<h3 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#manual-installation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>手动安装</h3>
<p>每个主题在 github 存储库上都有自己的自述文件。您需要做的是遵循自述文件中描述的安装步骤，然后转到<a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#create-your-theme" target="_blank" rel="noopener noreferrer">创建您的主题<OutboundLink/></a>。</p>
<h2 id="创建您的主题" tabindex="-1"><a class="header-anchor" href="#创建您的主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#create-your-theme" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>创建您的主题</h2>
<p>官方主题安装完成后，需要将其复制并放置在<code>src/themes/{themeName}</code>. 然后您需要在其<code>package.json</code>文件中更改其名称，更改活动主题<code>config/local.json</code>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"theme"</span><span class="token operator">:</span> <span class="token string">"@vue-storefront/theme-myThemeName"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后跑去<code>yarn</code>让<a href="https://github.com/lerna/lerna" target="_blank" rel="noopener noreferrer">Lerna （打开新窗口）<OutboundLink/></a>链接（我们用于 monorepos）。</p>
<h2 id="我们的官方主题" tabindex="-1"><a class="header-anchor" href="#我们的官方主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html#our-official-themes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>我们的官方主题：</h2>
<ul>
<li><a href="https://github.com/vuestorefront/vsf-capybara" target="_blank" rel="noopener noreferrer">水豚<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vsf-default" target="_blank" rel="noopener noreferrer">默认<OutboundLink/></a></li>
</ul>
</template>
