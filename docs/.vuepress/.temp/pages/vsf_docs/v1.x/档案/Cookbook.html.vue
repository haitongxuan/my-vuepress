<template><h1 id="食谱" tabindex="-1"><a class="header-anchor" href="#食谱" aria-hidden="true">#</a> 食谱</h1>
<p>提醒</p>
<p>这份文件是<em>存档</em>和<em>不</em>具有这是最新版本的有关<code>1.12</code>在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#install" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>安装</h2>
<p>在本章中，我们将介绍：</p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#install" target="_blank" rel="noopener noreferrer">安装<OutboundLink/></a></li>
</ul>
<h3 id="_0-介绍" tabindex="-1"><a class="header-anchor" href="#_0-介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_0-introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>0. 介绍</h3>
<p>现在你肯定对<strong>Vue Storefront</strong>感兴趣。这就是你在这里的原因。你已经越界了。你做出了选择。你会得到一些回报，这很棒。无论是开发人员、企业家还是营销经理，他们都可能想尝试一些新的东西来获得更好的产品，以期增强他们的客户或客户的体验。你选择了正确的道路。我们将探索让您开始使用<a href="https://github.com/vuestorefront" target="_blank" rel="noopener noreferrer"><strong>Vue Storefront</strong>基础架构所需的任何内容 （打开新窗口）<OutboundLink/></a>.</p>
<h3 id="_1-使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#_1-使用-docker-安装" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 使用 Docker 安装</h3>
<p>Docker 可以说是最受追捧的，自推出以来就在市场上掀起了风暴。虽然它是否是同行中的最佳选择还存在争议，但我从未见过整个开发者社区对一种技术产品如此一致的热情。</p>
<p>那么，为什么会这样呢？在现代计算机工程中，产品非常复杂，有无数相互交织的依赖关系。在需要的每个场合构建这样的依赖关系是一项艰巨的工作，更不用说所有版本变化带来的故障了。这就是 Docker 介入以帮助您实现<strong>基础设施自动化的地方</strong>。这个概念旨在帮助您专注于您的业务逻辑，而不是让您陷入低级修补的麻烦。</p>
<p>幸运的是，我们已经为你经历了这一切，弄脏了我们的手。您只需要运行一组 docker 命令即可让您从头开始运行。事不宜迟，让我们开始吧！</p>
<h4 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_1-preparation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h4>
<ul>
<li>你需要 <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04" target="_blank" rel="noopener noreferrer"><code>docker</code> （打开新窗口）<OutboundLink/></a>和 <a href="https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04" target="_blank" rel="noopener noreferrer"><code>docker-compose</code> （打开新窗口）<OutboundLink/></a>安装。</li>
<li>你需要 <a href="https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04" target="_blank" rel="noopener noreferrer"><code>git</code> （打开新窗口）<OutboundLink/></a>安装。</li>
</ul>
<p>笔记</p>
<p>我们将带您了解<em>Linux</em>上的 docker 。（如果需要，特别是<em>Ubuntu 18.04</em>）</p>
<p>在使用 Docker 之前，它只有一种偏见；<em>在 Linux 上运行它</em>。Docker 是原生 Linux，是使用 Linux 技术创建的；首先是 LXC（linux 容器）。尽管曾多次尝试使其可用于其他平台，就像在 Linux 上一样，而且它确实取得了进展，但是，在 Linux 上使用 Docker 是处理该技术的最可靠方法。</p>
<p>令人难过的是，<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">Chef's Secrets<OutboundLink/></a>中也有使用其他 docker 平台的技巧。</p>
<h4 id="_2-食谱" tabindex="-1"><a class="header-anchor" href="#_2-食谱" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_2-recipe" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h4>
<ol>
<li>首先从backend开始，下载<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer"><strong>Vue Storefront API</strong> （打开新窗口）<OutboundLink/></a>来自 github。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/vuestorefront/vue-storefront-api.git vue-storefront-api
<span class="token builtin class-name">cd</span> vue-storefront-api
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>复制<code>./config/default.json</code>到<code>./config/local.json</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> config/default.json config/local.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后<code>local.json</code>根据您的需要进行编辑。我们将在<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">Chef's secret<OutboundLink/></a>中更详细地研究这一点</p>
<p>提示</p>
<p>如果您对 的值满意，则可以跳过此步骤，<code>default.json</code>因为它遵循<a href="https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order" target="_blank" rel="noopener noreferrer">文件加载顺序 （打开新窗口）<OutboundLink/></a>的<a href="https://github.com/lorenwest/node-config" target="_blank" rel="noopener noreferrer">节点配置（打开新窗口）<OutboundLink/></a></p>
<ol>
<li>运行以下 Docker 命令：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose -f docker-compose.yml -f docker-compose.nodejs.yml up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后结果看起来像这样：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Building app
Step <span class="token number">1</span>/8 <span class="token builtin class-name">:</span> FROM node:10-alpine
 ---<span class="token operator">></span> 9dfa73010b19
Step <span class="token number">2</span>/8 <span class="token builtin class-name">:</span> ENV VS_ENV prod
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> 4d0a83421665
Step <span class="token number">3</span>/8 <span class="token builtin class-name">:</span> WORKDIR /var/www
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> e3871c8db7f3
Step <span class="token number">4</span>/8 <span class="token builtin class-name">:</span> RUN apk <span class="token function">add</span> --no-cache <span class="token function">curl</span> <span class="token function">git</span>
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> 49e996f0f6cb
Step <span class="token number">5</span>/8 <span class="token builtin class-name">:</span> COPY package.json ./
 ---<span class="token operator">></span> 14ed18d76efc
Step <span class="token number">6</span>/8 <span class="token builtin class-name">:</span> RUN apk <span class="token function">add</span> --no-cache --virtual .build-deps ca-certificates <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span>     <span class="token function">yarn</span> <span class="token function">install</span> --no-cache <span class="token operator">&amp;&amp;</span>     apk del .build-deps
 ---<span class="token operator">></span> Running <span class="token keyword">in</span> 3d6f91acc2fe
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
<span class="token punctuation">(</span><span class="token number">1</span>/2<span class="token punctuation">)</span> Installing <span class="token function">wget</span> <span class="token punctuation">(</span><span class="token number">1.20</span>.3-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span> Installing .build-deps <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
Executing busybox-1.29.3-r10.trigger
OK: <span class="token number">22</span> MiB <span class="token keyword">in</span> <span class="token number">26</span> packages
<span class="token function">yarn</span> <span class="token function">install</span> v1.16.0
info No lockfile found.
<span class="token punctuation">[</span><span class="token number">1</span>/4<span class="token punctuation">]</span> Resolving packages<span class="token punctuation">..</span>.
warning @babel/node <span class="token operator">></span> @babel/polyfill@7.4.4: 🚨 As of Babel <span class="token number">7.4</span>.0, this
package has been deprecated <span class="token keyword">in</span> favor of directly
including core-js/stable <span class="token punctuation">(</span>to polyfill ECMAScript
features<span class="token punctuation">)</span> and regenerator-runtime/runtime
<span class="token punctuation">(</span>needed to use transpiled generator functions<span class="token punctuation">)</span>:

  <span class="token operator">></span> <span class="token function">import</span> <span class="token string">"core-js/stable"</span><span class="token punctuation">;</span>
  <span class="token operator">></span> <span class="token function">import</span> <span class="token string">"regenerator-runtime/runtime"</span><span class="token punctuation">;</span>
warning eslint <span class="token operator">></span> file-entry-cache <span class="token operator">></span> flat-cache <span class="token operator">></span> circular-json@0.3.3: CircularJSON is <span class="token keyword">in</span> maintenance only, flatted is its successor.
<span class="token punctuation">[</span><span class="token number">2</span>/4<span class="token punctuation">]</span> Fetching packages<span class="token punctuation">..</span>.

<span class="token comment"># ... abridged</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/7XT5CWP4ynrPItattiP3on6wS" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/7XT5CWP4ynrPItattiP3on6wS" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>提示</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-f`标志允许您使用以下 docker-compose 文件。如果没有这个标志，它将使用默认文件`docker-compose.yml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>-d</code>标志允许您运行命令，<code>detach mode</code>这意味着<em>运行后台</em>。</p>
<ol>
<li>为了验证，运行<code>docker ps</code>以显示哪些容器已启动</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker <span class="token function">ps</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后，</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                                            NAMES
53a47d5a6440        vuestorefrontapi_kibana   <span class="token string">"/bin/bash /usr/loca…"</span>   <span class="token number">31</span> seconds ago      Up <span class="token number">29</span> seconds       <span class="token number">0.0</span>.0.0:5601-<span class="token operator">></span><span class="token number">5601</span>/tcp                           vuestorefrontapi_kibana_1
7d8f6328601b        vuestorefrontapi_app      <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">31</span> seconds ago      Up <span class="token number">27</span> seconds       <span class="token number">0.0</span>.0.0:8080-<span class="token operator">></span><span class="token number">8080</span>/tcp                           vuestorefrontapi_app_1
165ae945dbe5        vuestorefrontapi_es1      <span class="token string">"/bin/bash bin/es-do…"</span>   <span class="token number">8</span> days ago          Up <span class="token number">30</span> seconds       <span class="token number">0.0</span>.0.0:9200-<span class="token operator">></span><span class="token number">9200</span>/tcp, <span class="token number">0.0</span>.0.0:9300-<span class="token operator">></span><span class="token number">9300</span>/tcp   elasticsearch
8dd144746cef        redis:4-alpine            <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">11</span> days ago         Up <span class="token number">31</span> seconds       <span class="token number">0.0</span>.0.0:6379-<span class="token operator">></span><span class="token number">6379</span>/tcp                           vuestorefrontapi_redis_1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>端口号稍后将在前端配置中使用。事实上，它们已经被设置为默认值。</p>
<p>您将看到 4 个容器正在运行，即：</p>
<table>
<thead>
<tr>
<th>容器</th>
<th>港口</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vue 店面 API 应用</td>
<td>:8080</td>
</tr>
<tr>
<td>弹性搜索</td>
<td>:9200</td>
</tr>
<tr>
<td>基巴纳</td>
<td>:5601</td>
</tr>
<tr>
<td>Redis</td>
<td>:6379</td>
</tr>
</tbody>
</table>
<ol>
<li>现在后端部分已完成，让我们处理前端部分，即下载<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"><strong>Vue Storefront</strong>（打开新窗口）<OutboundLink/></a></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone --single-branch --branch master https://github.com/vuestorefront/vue-storefront.git vue-storefront
<span class="token builtin class-name">cd</span> vue-storefront
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>准备配置文件在<code>./config/local.json</code>. 有<code>default.json</code>中作为默认设置配置的同一文件夹中的文件。复制如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> config/default.json config/local.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后根据需要在<code>local.json</code>文件中修复该值。在 中<code>local.json</code>，您可以更改后端族信息的值。但是，如果您逐字遵循此配方，则不必这样做，因为它已经具有默认值了。如果你研究内容，请看<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-1-study-in-local-json" target="_blank" rel="noopener noreferrer">厨师的秘密<OutboundLink/></a></p>
<ol>
<li>最后运行以下 Docker 命令：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>结果应该是这样的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Building app
Step <span class="token number">1</span>/8 <span class="token builtin class-name">:</span> FROM node:10-alpine
 ---<span class="token operator">></span> 9dfa73010b19
Step <span class="token number">2</span>/8 <span class="token builtin class-name">:</span> ENV VS_ENV prod
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> 4d0a83421665
Step <span class="token number">3</span>/8 <span class="token builtin class-name">:</span> WORKDIR /var/www
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> e3871c8db7f3
Step <span class="token number">4</span>/8 <span class="token builtin class-name">:</span> COPY package.json ./
 ---<span class="token operator">></span> 0eab68a8f13a
Step <span class="token number">5</span>/8 <span class="token builtin class-name">:</span> COPY yarn.lock ./
 ---<span class="token operator">></span> ac1f5e4a1831
Step <span class="token number">6</span>/8 <span class="token builtin class-name">:</span> RUN apk <span class="token function">add</span> --no-cache --virtual .build-deps ca-certificates <span class="token function">wget</span> <span class="token function">git</span>   <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">install</span> --no-cache   <span class="token operator">&amp;&amp;</span> apk del .build-deps
 ---<span class="token operator">></span> Running <span class="token keyword">in</span> 1ca7bc7782e3
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.9/community/x86_64/APKINDEX.tar.gz
<span class="token punctuation">(</span><span class="token number">1</span>/9<span class="token punctuation">)</span> Installing ca-certificates <span class="token punctuation">(</span><span class="token number">20190108</span>-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">2</span>/9<span class="token punctuation">)</span> Installing <span class="token function">wget</span> <span class="token punctuation">(</span><span class="token number">1.20</span>.3-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">3</span>/9<span class="token punctuation">)</span> Installing nghttp2-libs <span class="token punctuation">(</span><span class="token number">1.35</span>.1-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">4</span>/9<span class="token punctuation">)</span> Installing libssh2 <span class="token punctuation">(</span><span class="token number">1.8</span>.2-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">5</span>/9<span class="token punctuation">)</span> Installing libcurl <span class="token punctuation">(</span><span class="token number">7.64</span>.0-r2<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">6</span>/9<span class="token punctuation">)</span> Installing expat <span class="token punctuation">(</span><span class="token number">2.2</span>.6-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">7</span>/9<span class="token punctuation">)</span> Installing pcre2 <span class="token punctuation">(</span><span class="token number">10.32</span>-r1<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">8</span>/9<span class="token punctuation">)</span> Installing <span class="token function">git</span> <span class="token punctuation">(</span><span class="token number">2.20</span>.1-r0<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">9</span>/9<span class="token punctuation">)</span> Installing .build-deps <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
Executing busybox-1.29.3-r10.trigger
Executing ca-certificates-20190108-r0.trigger
OK: <span class="token number">22</span> MiB <span class="token keyword">in</span> <span class="token number">25</span> packages
<span class="token function">yarn</span> <span class="token function">install</span> v1.16.0
<span class="token punctuation">[</span><span class="token number">1</span>/5<span class="token punctuation">]</span> Validating package.json<span class="token punctuation">..</span>.
<span class="token punctuation">[</span><span class="token number">2</span>/5<span class="token punctuation">]</span> Resolving packages<span class="token punctuation">..</span>.
<span class="token punctuation">[</span><span class="token number">3</span>/5<span class="token punctuation">]</span> Fetching packages<span class="token punctuation">..</span>.
info fsevents@1.2.4: The platform <span class="token string">"linux"</span> is incompatible with this module.

<span class="token comment"># ... abridged</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/JZYI9ZE6DHeC7N2keBNoFUWjQ" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/JZYI9ZE6DHeC7N2keBNoFUWjQ" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<ol>
<li>为了验证运行<code>docker ps</code>，应该有另一个容器添加到列表中。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                                            NAMES
88d758bc24d0        vuestorefront_app         <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">2</span> minutes ago       Up <span class="token number">2</span> minutes        <span class="token number">0.0</span>.0.0:3000-<span class="token operator">></span><span class="token number">3000</span>/tcp                           vuestorefront_app_1
de560221fdaf        vuestorefrontapi_kibana   <span class="token string">"/bin/bash /usr/loca…"</span>   <span class="token number">8</span> hours ago         Up <span class="token number">23</span> minutes       <span class="token number">0.0</span>.0.0:5601-<span class="token operator">></span><span class="token number">5601</span>/tcp                           vuestorefrontapi_kibana_1
5576cd9963a1        vuestorefrontapi_app      <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">8</span> hours ago         Up <span class="token number">23</span> minutes       <span class="token number">0.0</span>.0.0:8080-<span class="token operator">></span><span class="token number">8080</span>/tcp                           vuestorefrontapi_app_1
88f5db9486da        vuestorefrontapi_es1      <span class="token string">"/bin/bash bin/es-do…"</span>   <span class="token number">8</span> hours ago         Up <span class="token number">24</span> minutes       <span class="token number">0.0</span>.0.0:9200-<span class="token operator">></span><span class="token number">9200</span>/tcp, <span class="token number">0.0</span>.0.0:9300-<span class="token operator">></span><span class="token number">9300</span>/tcp   elasticsearch
d46c1e0a22af        redis:4-alpine            <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">8</span> hours ago         Up <span class="token number">24</span> minutes       <span class="token number">0.0</span>.0.0:6379-<span class="token operator">></span><span class="token number">6379</span>/tcp                           vuestorefrontapi_redis_1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol>
<li>打开浏览器并访问<a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/（打开新窗口）<OutboundLink/></a></li>
</ol>
<p>编译后，<em>瞧！</em></p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/home-vuestorefront.c88538b7.png" alt="vs_home_intro_borderline"></p>
<h4 id="_3-窥视厨房-内部发生的事情" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_3-peep-into-the-kitchen-what-happens-internally" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h4>
<p>我们用于<code>docker-compose</code>搭建 Vue Storefront 的整个环境。启动后面的机器来运行商店就足够了。</p>
<p>这是可能的，因为<code>docker</code>将整个基础设施封装成所需状态的线性声明性定义集。</p>
<p>我们有两个步骤，<code>docker-compose</code>其中一个用于后端<strong>Vue Storefront API</strong>，另一个用于前端<strong>Vue Storefront</strong>。</p>
<p>第一个<code>docker-compose</code>有两个<code>yml</code>文件用于输入。第一个输入文件<code>docker-compose.yml</code>描述了它的基本需求，除了<strong>Vue Storefront API</strong>本身；也就是说，<strong>Elasticsearch</strong>作为数据存储，<strong>Redis</strong>用于缓存，<strong>Kibana</strong>用于帮助您直观地获取数据（一对 Elasticsearch）。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.0'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">es1</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elasticsearch
    <span class="token key atrule">build</span><span class="token punctuation">:</span> docker/elasticsearch/
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./docker/elasticsearch/config/elasticsearch.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./docker/elasticsearch/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'9200:9200'</span>
      <span class="token punctuation">-</span> <span class="token string">'9300:9300'</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">"-Xmx512m -Xms512m"</span>

  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> docker/kibana/
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./docker/kibana/config/<span class="token punctuation">:</span>/usr/share/kibana/config<span class="token punctuation">:</span>ro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'5601:5601'</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> es1

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">'redis:4-alpine'</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'6379:6379'</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">esdat1</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>笔记</p>
<p>一旦解释了一个术语，它会在以后连续出现时被忽略。</p>
<p><code>version</code>表示<code>docker-compose</code>此文件使用的版本。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>services`描述容器。它规定了它们应该如何运行。换句话说，它编码了与`docker run ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>es1</code>包含数据存储<em>Elasticsearch</em>容器的信息。</p>
<ul>
<li><code>build</code> 表示容器的构建路径。</li>
<li><code>volumes</code>包含在主机和容器之间共享的卷的安装路径作为<em>主机：容器</em></li>
<li><code>ports</code>连接主机和容器之间的端口，如<em>host:container</em></li>
<li><code>environment</code>允许您添加环境变量。<code>Xmx512m</code>意味着 JVM 将最多占用 512MB 内存。<code>Xms512m</code>意味着最小内存。将它们结合起来，不会有内存大小调整，它在整个生命周期中从头到尾都会坚持 512MB。</li>
</ul>
<p><code>kibana</code>包含<em>Kibana</em>应用程序容器的信息。</p>
<ul>
<li><code>depends_on</code>为其他容器的容器创建依赖项。所以，这个容器依赖于<code>es1</code>上面刚刚描述的。</li>
<li><code>volumes</code>平均卷共享，<code>:ro</code>在<code>read-only</code>模式下为容器创建卷。</li>
</ul>
<p><code>redis</code>包含<em>Redis</em>缓存应用容器的信息。</p>
<ul>
<li><code>image</code> node 包含此容器所基于的图像的名称。</li>
</ul>
<p><code>volumes</code> 在顶级可以用作跨多个服务（容器）使用的参考。</p>
<p>第二个输入文件<code>docker-compose.nodejs.yml</code>处理<strong>Vue Storefront API</strong>节点应用程序。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.0'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token comment"># image: divante/vue-storefront-api:latest</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> docker/vue<span class="token punctuation">-</span>storefront<span class="token punctuation">-</span>api/Dockerfile
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> es1
      <span class="token punctuation">-</span> redis
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span> docker/vue<span class="token punctuation">-</span>storefront<span class="token punctuation">-</span>api/default.env
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">VS_ENV</span><span class="token punctuation">:</span> dev
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'./config:/var/www/config'</span>
      <span class="token punctuation">-</span> <span class="token string">'./ecosystem.json:/var/www/ecosystem.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./migrations:/var/www/migrations'</span>
      <span class="token punctuation">-</span> <span class="token string">'./package.json:/var/www/package.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./babel.config.js:/var/www/babel.config.js'</span>
      <span class="token punctuation">-</span> <span class="token string">'./scripts:/var/www/scripts'</span>
      <span class="token punctuation">-</span> <span class="token string">'./src:/var/www/src'</span>
      <span class="token punctuation">-</span> <span class="token string">'./var:/var/www/var'</span>
    <span class="token key atrule">tmpfs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/www/dist
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'8080:8080'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>app</code>包含<em>Vue Storefront API</em>应用程序的信息。</p>
<ul>
<li><code>build</code>是构建信息的路径。如果值为字符串，则为普通路径。当它是对象时，您可能有几个选项要添加。<code>context</code>是相对路径或 git repo url 所在<code>Dockerfile</code>的位置。<code>dockerfile</code>节点可能会更改<code>Dockerfile</code>. <a href="https://docs.docker.com/compose/compose-file/#build" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></li>
<li><code>depends_on</code>告诉我们是基于这个容器<code>es1</code>和<code>redis</code>容器，我们上面创建。</li>
<li><code>env_file</code>帮助您从文件中添加环境值。它<code>docker-compose</code>是进程中文件的相对路径，在这种情况下，它是<code>docker-compose.nodejs.yml</code></li>
<li><code>environment</code>是这样设置的<code>VS_ENV</code>，<code>dev</code>以便为开发人员模式设置环境。</li>
<li><code>tmpfs</code>表示仅可用于主机内存的临时卷。与 不同<code>volumes</code>，<code>tmpfs</code>一旦容器停止，这将消失。此选项仅适用于<em>Linux</em>。</li>
</ul>
<p>第二<code>docker-compose</code>步骤处理<strong>的Vue店面</strong>前端。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'2.0'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token comment"># image: divante/vue-storefront:latest</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> docker/vue<span class="token punctuation">-</span>storefront/Dockerfile
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span> docker/vue<span class="token punctuation">-</span>storefront/default.env
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">VS_ENV</span><span class="token punctuation">:</span> dev
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'./babel.config.js:/var/www/babel.config.js'</span>
      <span class="token punctuation">-</span> <span class="token string">'./config:/var/www/config'</span>
      <span class="token punctuation">-</span> <span class="token string">'./core:/var/www/core'</span>
      <span class="token punctuation">-</span> <span class="token string">'./ecosystem.json:/var/www/ecosystem.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./.eslintignore:/var/www/.eslintignore'</span>
      <span class="token punctuation">-</span> <span class="token string">'./.eslintrc.js:/var/www/.eslintrc.js'</span>
      <span class="token punctuation">-</span> <span class="token string">'./lerna.json:/var/www/lerna.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./tsconfig.json:/var/www/tsconfig.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./tsconfig-build.json:/var/www/tsconfig-build.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./shims.d.ts:/var/www/shims.d.ts'</span>
      <span class="token punctuation">-</span> <span class="token string">'./package.json:/var/www/package.json'</span>
      <span class="token punctuation">-</span> <span class="token string">'./src:/var/www/src'</span>
      <span class="token punctuation">-</span> <span class="token string">'./var:/var/www/var'</span>
    <span class="token key atrule">tmpfs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/www/dist
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'3000:3000'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>这看起来与<em>Vue Storefront API</em>大致相同，但有一些变化。</p>
<p><code>app</code>服务描述了<em>Vue Storefront</em>前端应用程序的选项。</p>
<ul>
<li><code>network_mode</code>允许您修改<code>--network</code>docker 客户端选项的值。<code>host</code>选项允许您指定的容器打开主机网络。例如，如果您将容器绑定到主机的<code>80</code>端口，则可以在主机的<code>&lt;IP address&gt;:80</code>Internet 上访问该容器。换句话说，容器不是孤立的。<a href="https://docs.docker.com/network/host/" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>如果您仔细查看<code>Dockerfile</code>s内部，您会注意到它们安装了项目的所有依赖项<code>package.json</code>，更不用说所需的操作系统功能，包括<code>git</code>,<code>wget</code>和证书。您不必担心要做什么，因为我们为您做到了。</p>
<p>接下来，您可能想要导入您的货物数据。如果您不想停止，请跳到<a href="https://docs.vuestorefront.io/v1/guide/archives/data-import.html" target="_blank" rel="noopener noreferrer">数据导入<OutboundLink/></a>。</p>
<h4 id="_4-厨师的秘密-protip" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h4>
<h5 id="揭秘1-研究local-json了vue的店面api" tabindex="-1"><a class="header-anchor" href="#揭秘1-研究local-json了vue的店面api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-1-study-in-local-json-for-vue-storefront-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>揭秘1.研究<code>local.json</code>了<em>Vue的店面API</em></h5>
<p>定制的起点是平台寻求配置值的地方<code>default.json</code>或其副本<code>local.json</code>。</p>
<p>笔记</p>
<p>如果要修改<code>default.json</code>，请不要直接编辑它，而是将整个文件复制到该文件中<code>local.json</code>并开始对其进行编辑。为什么应该这样做，稍后在<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-3-why-use-node-config" target="_blank" rel="noopener noreferrer">Secret 3 中<OutboundLink/></a>解释<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-3-why-use-node-config" target="_blank" rel="noopener noreferrer">。为什么要使用 node-config？<OutboundLink/></a></p>
<p>我们有 2 个<code>local.json</code>文件，其中一个用于后端，我们将查看<a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-2-study-in-local-json-for-vue-storefront" target="_blank" rel="noopener noreferrer">Secret 2<OutboundLink/></a>，另一个用于前端。</p>
<p>在 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api/config/default.json</code> （打开新窗口）<OutboundLink/></a>对于<strong>后端</strong>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"server"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token property">"searchEngine"</span><span class="token operator">:</span> <span class="token string">"elasticsearch"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>这是定义您的 API 后端的地方。服务器将侦听<code>server.host</code>：<code>server.port</code>除非在环境变量中另有定义。</li>
<li><code>server.searchEngine</code>用于集成，<code>graphql</code>所以请不要更改它。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/resolvers.js#L6" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"orders"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"useServerQueue"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"catalog"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"excludeDisabledProducts"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>orders.useServerQueue</code>允许您在使用<code>order</code>API 创建订单时使用队列流程。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L65" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
<li><code>catalog.excludeDisabledProducts</code>允许您在使用<code>mage2vs</code>. <a href="https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/magento/product.js#L166" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9200</span><span class="token punctuation">,</span>
    <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"http"</span><span class="token punctuation">,</span>
    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"elastic"</span><span class="token punctuation">,</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"changeme"</span><span class="token punctuation">,</span>
    <span class="token property">"min_score"</span><span class="token operator">:</span> <span class="token number">0.01</span><span class="token punctuation">,</span>
    <span class="token property">"indices"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"vue_storefront_catalog"</span><span class="token punctuation">,</span>
      <span class="token string">"vue_storefront_catalog_de"</span><span class="token punctuation">,</span>
      <span class="token string">"vue_storefront_catalog_it"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"indexTypes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"product"</span><span class="token punctuation">,</span>
      <span class="token string">"category"</span><span class="token punctuation">,</span>
      <span class="token string">"cms"</span><span class="token punctuation">,</span>
      <span class="token string">"attribute"</span><span class="token punctuation">,</span>
      <span class="token string">"taxrule"</span><span class="token punctuation">,</span>
      <span class="token string">"review"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"apiVersion"</span><span class="token operator">:</span> <span class="token string">"5.6"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul>
<li>
<p><code>elasticsearch</code>元素在整个平台上被广泛使用。考虑<code>elasticsearch</code>作为数据存储（数据库）工作，这是很自然的。</p>
<ul>
<li><code>host</code>, <code>port</code>,<code>protocol</code>定义<code>elasticsearch</code>连接信息。</li>
</ul>
</li>
<li>
<p><code>user</code>,<code>password</code>是 的默认凭据<code>elasticsearch</code>。如果您更改了 的凭据<code>elasticsearch</code>，请相应地进行更改。<a href="https://www.elastic.co/guide/en/x-pack/current/security-getting-started.html" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>min_score
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>为</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>min_score
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>构建查询时设置 a</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>。</p>
<p>跳转到代码（打开新窗口）</p>
<p>提示</p>
<p><code>min_score</code>帮助您排除<code>_score</code>小于<code>min_score</code>值的文档。</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>indices
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可能包含一个或多个索引。每个索引都充当店面的数据存储。您可以使用任意名称向数组添加条目或从中删除条目。</p>
<p>注意！</p>
<p>但是，索引名称应与您将用于<a href="https://docs.vuestorefront.io/v1/guide/archives/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">数据泵的<OutboundLink/></a>名称相匹配。</p>
</li>
</ul>
<p>为默认值<code>indices</code>假设你有2个额外的专卖店（<code>de</code>，<code>it</code>）加上默认存储。</p>
<ul>
<li><code>indexTypes</code>包含映射值。你可以考虑<code>table</code>，如果你把<code>indices</code>数据库。</li>
<li><code>apiVersion</code>定义<code>elasticsearch</code>它使用的版本。</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"redis"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">6379</span><span class="token punctuation">,</span>
    <span class="token property">"db"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"kue"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>redis</code>包含<code>redis</code>服务器连接信息。</li>
<li><code>kue</code>包含<code>kue</code>应用程序选项。<a href="https://github.com/Automattic/kue/blob/master/lib/kue.js#L88" target="_blank" rel="noopener noreferrer">跳转到选项代码（打开新窗口）<OutboundLink/></a></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"availableStores"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"de"</span><span class="token punctuation">,</span>
    <span class="token string">"it"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><code>availableStores</code>包含附加商店代码名称。如果该值是一个空数组，则意味着您只有一个默认存储。</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"storeViews"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"multistore"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"mapStoreUrlsFor"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"de"</span><span class="token punctuation">,</span>
      <span class="token string">"it"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"de"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"de"</span><span class="token punctuation">,</span>
      <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"German Store"</span><span class="token punctuation">,</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/de"</span><span class="token punctuation">,</span>
      <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost:8080/api/catalog"</span><span class="token punctuation">,</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_de"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Germany"</span><span class="token punctuation">,</span>
        <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"German"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"de-DE"</span><span class="token punctuation">,</span>
        <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D-M-YYYY"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"it"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"it"</span><span class="token punctuation">,</span>
      <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Italian Store"</span><span class="token punctuation">,</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/it"</span><span class="token punctuation">,</span>
      <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost:8080/api/catalog"</span><span class="token punctuation">,</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_it"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Italy"</span><span class="token punctuation">,</span>
        <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"Italian"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
        <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"it-IT"</span><span class="token punctuation">,</span>
        <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
        <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D-M-YYYY"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><ul>
<li>
<p><code>storeViews</code>元素包含<em><strong>附加</strong></em>商店的全部信息。此处不存在默认商店信息，它存在于顶层。</p>
</li>
<li>
<p><code>multistore</code>应该告诉平台是否有多个商店要考虑。例如，用于配置<code>tax</code>附加商店的值。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L14" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>mapStoreUrlsFor</code>用于在前端构建 url 路由。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/multistore.ts#L85" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>de
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>元素包含</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>de
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>商店的详细信息。您需要将这种元素用于添加到的所有附加商店，并将</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>availableStores
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>storeCode
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>作为键。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>de
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>并</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>it
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>default.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>展品的例子，你可以复制和粘贴需要添加其他商店。</p>
<ul>
<li>
<p><code>storeCode</code> 表示商店的商店代码。</p>
</li>
<li>
<p><code>storeId</code> 表示商店的商店ID。</p>
</li>
<li>
<p><code>name</code> 表示商店名称。</p>
</li>
<li>
<p><code>url</code> 表示商店的 URL。</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含商店的信息。此信息可能会覆盖上面定义的默认信息。</p>
<ul>
<li><code>host</code>是您的<em>Elasticsearch</em>监听的地方。</li>
<li><code>index</code> 是商店的索引名称。</li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tax
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含商店的税务信息。</p>
<ul>
<li><code>defaultCountry</code> 是为商店计算税费的国家/地区的代码名称。</li>
<li><code>defaultRegion</code> 是默认区域。</li>
<li><code>calculateServerSide</code>确定是否使用（<code>true</code>）/不使用（<code>false</code>）税计算获取价格。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/product.js#L48" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
<li><code>sourcePriceIncludesTax</code>确定价格是在应用税款 ( <code>true</code>) 还是在运行时计算税款 ( ) 时存储<code>false</code>。 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L12" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>i18n
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>意味着</p>
<p>国际化</p>
<p>。</p>
<p>更多信息（打开新窗口）</p>
<ul>
<li><code>fullCountryName</code>是所<code>i18n</code>应用的国家/地区的全名。</li>
<li><code>fullLanguageName</code>是所<code>i18n</code>应用的语言的全名。</li>
<li><code>defaultCountry</code>是<code>i18n</code>默认情况下应用的国家/地区的缩写名称。</li>
<li><code>defaultLanguage</code>是<code>i18n</code>默认情况下应用的语言的缩写名称。</li>
<li><code>defaultLocale</code>是它<code>i18n</code>使用的默认语言环境。</li>
<li><code>currencyCode</code> 是这家商店使用的货币代码。</li>
<li><code>currencySign</code> 是这家商店使用的货币符号。</li>
<li><code>dateFormat</code> 是该商店使用的日期格式。</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code> <span class="token property">"authHashSecret"</span><span class="token operator">:</span> <span class="token string">"__SECRET_CHANGE_ME__"</span><span class="token punctuation">,</span>
 <span class="token property">"objHashSecret"</span><span class="token operator">:</span> <span class="token string">"__SECRET_CHANGE_ME__"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><code>authHashSecret</code> 用于编码和解码 JWT 以供 API 使用。</li>
<li><code>objHashSecret</code>是 1) 的回退秘密哈希<code>authHashSecret</code>，2) 用于税收计算中的哈希。</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"cart"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"setConfigurableProductOptions"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
    <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"alwaysSyncPlatformPricesOver"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"usePlatformTotals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"setConfigurableProductOptions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>setConfigurableProductOptions</code>标志决定在购物车上下文中显示父项或子项（又名选定的选项项）。<code>true</code>显示父项而不是所选的选项项。 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/o2m.js#L94" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tax
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>alwaysSyncPlatformPricesOver</code> <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L49" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
<li><code>usePlatformTotals</code> 这两个选项用于确定是否从数据源动态获取价格。如果您设置为<code>alwaysSyncPlatformPricesOver</code>true，则它会根据价格跳过检查购物车项目的校验和。</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"bodyLimit"</span><span class="token operator">:</span> <span class="token string">"100kb"</span><span class="token punctuation">,</span>
  <span class="token property">"corsHeaders"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"Link"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><code>bodyLimit</code> 限制您的应用程序的请求有多大。</li>
<li><code>corsHeaders</code> 允许您添加条目 <code>Access-Control-Expose-Headers</code></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"platform"</span><span class="token operator">:</span> <span class="token string">"magento2"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>platform</code>定义使用哪个电子商务平台作为来源。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/order.js#L13" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"registeredExtensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"mailchimp-subscribe"</span><span class="token punctuation">,</span>
    <span class="token string">"example-magento-api"</span><span class="token punctuation">,</span>
    <span class="token string">"cms-data"</span><span class="token punctuation">,</span>
    <span class="token string">"mail-service"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"mailchimp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"listId"</span><span class="token operator">:</span> <span class="token string">"e06875a7e1"</span><span class="token punctuation">,</span>
      <span class="token property">"apiKey"</span><span class="token operator">:</span> <span class="token string">"a9a3318ea7d30f5c5596bd4a78ae0985-us3"</span><span class="token punctuation">,</span>
      <span class="token property">"apiUrl"</span><span class="token operator">:</span> <span class="token string">"https://us3.api.mailchimp.com/3.0"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"mailService"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"transport"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"smtp.gmail.com"</span><span class="token punctuation">,</span>
        <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">465</span><span class="token punctuation">,</span>
        <span class="token property">"secure"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"vuestorefront"</span><span class="token punctuation">,</span>
        <span class="token property">"pass"</span><span class="token operator">:</span> <span class="token string">"vuestorefront.io"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"targetAddressWhitelist"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"contributors@vuestorefront.io"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"secretString"</span><span class="token operator">:</span> <span class="token string">"__THIS_IS_SO_SECRET__"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul>
<li>
<p><code>registeredExtensions</code>元素包含支持的扩展列表，它引导这些扩展的入口点<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/index.js#L45" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>extensions</code>包含扩展的额外配置。<a href="https://github.com/vuestorefront/vue-storefront-api/tree/master/src/api/extensions" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mailchimp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>提供</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>DELETE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于API的</p>
<p>Mailchimp</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>subscribe
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>方法。</p>
<ul>
<li><code>listId</code> 是您要发布的列表的 ID。</li>
<li><code>apiKey</code> 是分配给您的 API 密钥。</li>
<li><code>apiUrl</code>是<em>Mailchimp</em>服务的API 基本 URL 。</li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mailService
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于通过</p>
<p>Gmail</p>
<p>从 Vue Storefront 发送电子邮件。</p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>transport
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含</p>
<p>Gmail</p>
<p>服务的基本信息。</p>
<ul>
<li><code>host</code> 是您的邮件在途中发送的地方。</li>
<li><code>port</code> 是用于服务的端口号。</li>
<li><code>secure</code> 决定使用 SSL 连接。</li>
<li><code>user</code>是<code>username</code>为了服务。</li>
<li><code>pass</code>是<code>password</code>为了服务。</li>
</ul>
</li>
<li>
<p><code>targetAddressWhitelist</code>检查用户是否确认他/她的电子邮件地址<em>和</em>源电子邮件是否被列入白名单。</p>
</li>
<li>
<p><code>secretString</code> 用于散列。</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"magento2"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://demo-magento2.vuestorefront.io/"</span><span class="token punctuation">,</span>
    <span class="token property">"imgUrl"</span><span class="token operator">:</span> <span class="token string">"http://demo-magento2.vuestorefront.io/media/catalog/product"</span><span class="token punctuation">,</span>
    <span class="token property">"assetPath"</span><span class="token operator">:</span> <span class="token string">"/../var/magento2-sample-data/pub/media"</span><span class="token punctuation">,</span>
    <span class="token property">"magentoUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"magentoUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"httpUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"httpUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://demo-magento2.vuestorefront.io/rest"</span><span class="token punctuation">,</span>
      <span class="token property">"consumerKey"</span><span class="token operator">:</span> <span class="token string">"byv3730rhoulpopcq64don8ukb8lf2gq"</span><span class="token punctuation">,</span>
      <span class="token property">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">"u9q4fcobv7vfx9td80oupa6uhexc27rb"</span><span class="token punctuation">,</span>
      <span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">"040xx3qy7s0j28o3q0exrfop579cy20m"</span><span class="token punctuation">,</span>
      <span class="token property">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">"7qunl3p505rubmr7u1ijt7odyialnih9"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"magento1"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://magento-demo.local"</span><span class="token punctuation">,</span>
    <span class="token property">"imgUrl"</span><span class="token operator">:</span> <span class="token string">"http://magento-demo.local/media/catalog/product"</span><span class="token punctuation">,</span>
    <span class="token property">"magentoUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"magentoUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"httpUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"httpUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://magento-demo.local/vsbridge"</span><span class="token punctuation">,</span>
      <span class="token property">"consumerKey"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul>
<li>
<p><code>magento2</code> 用于与 Magento 2 作为数据源集成。</p>
<ul>
<li>
<p><code>imgUrl</code>是基本图片网址。<a href="https://github.com/kkdg/vue-storefront-api/blob/master/src/api/img.js#L38" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>assetPath</code>用于<code>media</code>路径。<a href="https://github.com/kkdg/vue-storefront-api/blob/master/src/index.js#L22" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>api</code> 包含用于集成的 API 凭据。</p>
<ul>
<li><code>url</code> 是 Magento 2 实例的基本 URL。</li>
<li><code>consumerKey</code>见<strong>提示</strong></li>
<li><code>consumerSecret</code></li>
<li><code>accessToken</code></li>
<li><code>accessTokenSecret</code></li>
</ul>
<p>提示</p>
<p>上面这 4 个节点是与 Magento 2 集成所需的凭据。<a href="https://docs.vuestorefront.io/v1/guide/archives/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">如何获取它们<OutboundLink/></a></p>
</li>
</ul>
</li>
</ul>
<p><code>magento1</code>与 具有相同的结构<code>magento2</code>。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"imageable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"namespace"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"maxListeners"</span><span class="token operator">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
    <span class="token property">"imageSizeLimit"</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token property">"whitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"allowedHosts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">".*divante.pl"</span><span class="token punctuation">,</span>
        <span class="token string">".*vuestorefront.io"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"cache"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"memory"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token property">"files"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token property">"items"</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"concurrency"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"counters"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"queue"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"process"</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"simd"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"keepDownloads"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul>
<li>
<p><code>imageable</code> 处理涉及店面图像（尤其是产品图像）时需要配置的所有内容。</p>
<ul>
<li>
<p><code>maxListeners</code>将最大侦听器限制为请求的套接字。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/img.js#L21" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>imageSizeLimit</code> 限制最大图像大小。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/img.js#L56" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>whitelist</code> 包含图像源域的白名单</p>
<ul>
<li><code>allowedHosts</code> 包含白名单数组</li>
</ul>
<p>不要忘记</p>
<p>您应该在其中包含您的源域，<code>allowedHosts</code>否则您对产品图片的请求将失败。<a href="https://docs.vuestorefront.io/v1/guide/archives/data-import.html#secret-1-product-image-is-not-synced" target="_blank" rel="noopener noreferrer">更多信息<OutboundLink/></a></p>
<p>笔记</p>
<p>从<code>cache</code>到<code>simd</code>它们用于配置<a href="https://github.com/lovell/sharp" target="_blank" rel="noopener noreferrer">夏普 （打开新窗口）<OutboundLink/></a>图书馆。<em>Sharp</em>是一个流行的<em>Node.js</em>图像处理库。<a href="https://sharp.dimens.io/en/stable/api-utility/#cache" target="_blank" rel="noopener noreferrer">跳转到选项文档（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>cache</code>限制<em>Sharp 的</em><code>libvips</code>操作缓存。下文中的值为默认值。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/image.js#L5" target="_blank" rel="noopener noreferrer">跳转到代码<OutboundLink/></a><a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/image.js#L5" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<ul>
<li><code>memory</code> 是用于缓存的最大内存（以 MB 为单位）。</li>
<li><code>files</code> 是要保持打开的最大文件数。</li>
<li><code>items</code> 是要缓存的最大操作数。</li>
</ul>
</li>
<li>
<p><code>concurrency</code> 是处理每个图像的线程数。</p>
</li>
<li>
<p><code>counters</code> 提供对内部任务计数器的访问。</p>
<ul>
<li><code>queue</code>是队列中供<em>libuv</em>提供工作线程的任务数。</li>
<li><code>process</code> 限制同时处理的调整大小任务的数量。</li>
</ul>
</li>
<li>
<p><code>simd</code> 使用 CPU 的 SIMD 矢量单元以提高性能。</p>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code> <span class="token property">"entities"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"children_data"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"children_count"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"is_active"</span><span class="token punctuation">,</span> <span class="token string">"parent_id"</span><span class="token punctuation">,</span> <span class="token string">"level"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"attribute"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"attribute_code"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"entity_type_id"</span><span class="token punctuation">,</span> <span class="token string">"options"</span><span class="token punctuation">,</span> <span class="token string">"default_value"</span><span class="token punctuation">,</span> <span class="token string">"is_user_defined"</span><span class="token punctuation">,</span> <span class="token string">"frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"attribute_id"</span><span class="token punctuation">,</span> <span class="token string">"default_frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"is_visible_on_front"</span><span class="token punctuation">,</span> <span class="token string">"is_visible"</span><span class="token punctuation">,</span> <span class="token string">"is_comparable"</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"productList"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"product_links"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span><span class="token punctuation">,</span> <span class="token string">"special_price"</span><span class="token punctuation">,</span> <span class="token string">"special_to_date"</span><span class="token punctuation">,</span> <span class="token string">"special_from_date"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"configurable_children"</span><span class="token punctuation">,</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"configurable_options"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"productListWithChildren"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span><span class="token punctuation">,</span> <span class="token string">"special_price"</span><span class="token punctuation">,</span> <span class="token string">"special_to_date"</span><span class="token punctuation">,</span> <span class="token string">"special_from_date"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.image"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.sku"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.special_price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.color"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.size"</span><span class="token punctuation">,</span> <span class="token string">"product_links"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"product"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"updated_at"</span><span class="token punctuation">,</span> <span class="token string">"created_at"</span><span class="token punctuation">,</span> <span class="token string">"attribute_set_id"</span><span class="token punctuation">,</span> <span class="token string">"status"</span><span class="token punctuation">,</span> <span class="token string">"visibility"</span><span class="token punctuation">,</span> <span class="token string">"tier_prices"</span><span class="token punctuation">,</span> <span class="token string">"options_container"</span><span class="token punctuation">,</span> <span class="token string">"msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"has_options"</span><span class="token punctuation">,</span> <span class="token string">"stock.manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.stock_id"</span><span class="token punctuation">,</span>  <span class="token string">"stock.use_config_backorders"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_enable_qty_inc"</span><span class="token punctuation">,</span> <span class="token string">"stock.enable_qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"small_image"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">"filterFieldMapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"category.name"</span><span class="token operator">:</span> <span class="token string">"category.name.keyword"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>entities
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用具有集成</p>
<p>GraphQL</p>
<p>在</p>
<p>Vue公司店面API</p>
<p>。</p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>category
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>includeFields</code>包含要添加为<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/category/resolver.js#L10" target="_blank" rel="noopener noreferrer">跳转到代码<OutboundLink/></a>的字段数组<code>sourceInclude</code> <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/category/resolver.js#L10" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>product
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>filterFieldMapping
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>添加字段映射以在查询<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/graphql/elasticsearch/mapping.js#L19" target="_blank" rel="noopener noreferrer">跳转到代码中<OutboundLink/></a>应用过滤器</p>
<p>（打开新窗口）</p>
<ul>
<li><code>category.name</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"usePriceTiers"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"category.name"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"short_description"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"sku"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"configurable_children.sku"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>
<p><code>usePriceTiers</code> 确定是否对组中的客户使用价格等级</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>boost
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用于为</p>
<p>Elasticsearch</p>
<p>查询的字段提供加权值，越大越重。</p>
<ul>
<li><code>name</code>字段的值为*3，*以便与 匹配的查询具有<code>name</code>最高优先级。</li>
<li><code>category.name</code>, <code>short_description</code>, <code>description</code>, <code>sku</code>,<code>configurable_children.sku</code>其余字段为默认值；1.</li>
</ul>
</li>
</ul>
<h4 id="秘密2-研究local-json了vue的店面" tabindex="-1"><a class="header-anchor" href="#秘密2-研究local-json了vue的店面" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/cookbook.html#secret-2-study-in-local-json-for-vue-storefront" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密2.研究<code>local.json</code>了<em>Vue的店面</em></h4>
<p>在 <a href="https://github.com/vuestorefront/vue-storefront/blob/master/config/default.json" target="_blank" rel="noopener noreferrer"><code>vue-storefront/config/default.json</code> （打开新窗口）<OutboundLink/></a>对于<strong>前端</strong>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"server"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"http"</span><span class="token punctuation">,</span>
  <span class="token property">"api"</span><span class="token operator">:</span> <span class="token string">"api"</span><span class="token punctuation">,</span>
  <span class="token property">"devServiceWorker"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"useOutputCacheTagging"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"useOutputCache"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"outputCacheDefaultTtl"</span><span class="token operator">:</span> <span class="token number">86400</span><span class="token punctuation">,</span>
  <span class="token property">"availableCacheTags"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"product"</span><span class="token punctuation">,</span> <span class="token string">"category"</span><span class="token punctuation">,</span> <span class="token string">"home"</span><span class="token punctuation">,</span> <span class="token string">"checkout"</span><span class="token punctuation">,</span> <span class="token string">"page-not-found"</span><span class="token punctuation">,</span> <span class="token string">"compare"</span><span class="token punctuation">,</span> <span class="token string">"my-account"</span><span class="token punctuation">,</span> <span class="token string">"P"</span><span class="token punctuation">,</span> <span class="token string">"C"</span><span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"invalidateCacheKey"</span><span class="token operator">:</span> <span class="token string">"aeSu7aip"</span><span class="token punctuation">,</span>
  <span class="token property">"dynamicConfigReload"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"dynamicConfigContinueOnError"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"dynamicConfigExclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ssr"</span><span class="token punctuation">,</span> <span class="token string">"storeViews"</span><span class="token punctuation">,</span> <span class="token string">"entities"</span><span class="token punctuation">,</span> <span class="token string">"localForage"</span><span class="token punctuation">,</span> <span class="token string">"shipping"</span><span class="token punctuation">,</span> <span class="token string">"boost"</span><span class="token punctuation">,</span> <span class="token string">"query"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"dynamicConfigInclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"elasticCacheQuota"</span><span class="token operator">:</span> <span class="token number">4096</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul>
<li>
<p><code>server</code>包含与<em>前端</em>服务器相关的各种功能的信息。</p>
<ul>
<li>
<p><code>host</code>是您的<em>Vue Storefront</em>实例开始所在的主机地址。</p>
</li>
<li>
<p><code>port</code> 是您的<em>Vue Storefront</em>实例侦听的端口号。</p>
</li>
<li>
<p><code>protocol</code> 用于<em>GraphQL</em>集成。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/search/adapter/graphql/searchAdapter.ts#L48" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>api</code> 确定<code>api</code> 和之间的 API 模式 <code>graphql</code>。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/resolvers/resolveGraphQL.js#L7" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
<p>提示</p>
<p>您可以查看<a href="https://docs.vuestorefront.io/v1/guide/basics/graphql.html" target="_blank" rel="noopener noreferrer"><em>GraphQL 行动计划</em><OutboundLink/></a>指南来帮助自己决定应该采用哪种模式。</p>
</li>
<li>
<p><code>devServiceWorker</code>在模式下启用<em>服务工作者</em><code>develop</code>。该<em>服务人员</em>通常缺省启用了<code>production</code>模式，而不是<code>develop</code>模式。将此标志设置为<em>true</em>也会强制在模式下使用<em>服务工作者</em><code>develop</code>。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/service-worker/registration.js#L5" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
<p>提示</p>
<p>您可以查看<a href="https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html" target="_blank" rel="noopener noreferrer">与 Service Workers 合作<OutboundLink/></a>以获得更好的理解。</p>
</li>
<li>
<p><code>useOutputCacheTagging</code>决定允许<em>输出缓存标签</em>。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L168" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>useOutputCache</code>决定允许<em>输出缓存</em>。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L64" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>outputCacheDefaultTtl</code> 定义<em>Redis 标签缓存</em>的默认超时时间。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/utils/cache-instance.js#L16" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>availableCacheTags</code> 包含可用缓存标签的列表。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/cache.js#L7" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>invalidateCacheKey</code> 是用于检查无效有效性的密钥。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L66" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
<p>提示</p>
<p>你可以看看<a href="https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html" target="_blank" rel="noopener noreferrer">SSR缓存<OutboundLink/></a>为了抢的念头<em>输出缓存</em>在<em>Vue公司店面</em></p>
</li>
<li>
<p><code>dynamicConfigReload</code>可以根据<code>config.json</code>每个服务器请求即时重新加载。 <a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L232" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>dynamicConfigReloadWithEachRequest</code>可以根据<code>config.json</code>每个服务器请求即时重新加载。 <a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L313" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>dynamicConfigContinueOnError</code>允许在动态合并配置期间跳过错误。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/scripts/server.js#L240" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></p>
</li>
<li>
<p><code>dynamicConfigExclude</code></p>
</li>
<li>
<p><code>dynamicConfigInclude</code></p>
</li>
<li>
<p><code>elasticCacheQuota</code></p>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"seo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"useUrlDispatcher"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"console"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"showErrorOnProduction"</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"verbosityLevel"</span><span class="token operator">:</span> <span class="token string">"display-everything"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"redis"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">6379</span><span class="token punctuation">,</span>
  <span class="token property">"db"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"graphql"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
  <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">8080</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li><code>seo</code></li>
<li><code>console</code></li>
<li><code>redis</code></li>
<li><code>graphql</code></li>
<li><code>api</code></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"httpAuth"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"/api/catalog"</span><span class="token punctuation">,</span>
  <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog"</span><span class="token punctuation">,</span>
  <span class="token property">"min_score"</span><span class="token operator">:</span> <span class="token number">0.02</span><span class="token punctuation">,</span>
  <span class="token property">"csrTimeout"</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token property">"ssrTimeout"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token property">"queryMethod"</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
  <span class="token property">"disableLocalStorageQueriesCache"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"searchScoring"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"attribute_code"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"scoreValues"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"attribute_value"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"fuzziness"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"cutoff_frequency"</span><span class="token operator">:</span>  <span class="token number">0.01</span><span class="token punctuation">,</span>
    <span class="token property">"max_expansions"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"minimum_should_match"</span><span class="token operator">:</span> <span class="token string">"75%"</span><span class="token punctuation">,</span>
    <span class="token property">"prefix_length"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"boost_mode"</span><span class="token operator">:</span> <span class="token string">"multiply"</span><span class="token punctuation">,</span>
    <span class="token property">"score_mode"</span><span class="token operator">:</span> <span class="token string">"multiply"</span><span class="token punctuation">,</span>
    <span class="token property">"max_boost"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token property">"function_min_score"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"searchableAttributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sku"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"category.name"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"boost"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><code>elasticsearch</code> ...</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"ssr"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"templates"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"dist/index.html"</span><span class="token punctuation">,</span>
    <span class="token property">"minimal"</span><span class="token operator">:</span> <span class="token string">"dist/index.minimal.html"</span><span class="token punctuation">,</span>
    <span class="token property">"basic"</span><span class="token operator">:</span> <span class="token string">"dist/index.basic.html"</span><span class="token punctuation">,</span>
    <span class="token property">"amp"</span><span class="token operator">:</span> <span class="token string">"dist/index.amp.html"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"executeMixedinAsyncData"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"initialStateFilter"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"__DEMO_MODE__"</span><span class="token punctuation">,</span> <span class="token string">"version"</span><span class="token punctuation">,</span> <span class="token string">"storeView"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"useInitialStateFilter"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>templates
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>default</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"defaultStoreCode"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token property">"storeViews"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"multistore"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"commonCache"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"mapStoreUrlsFor"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"de"</span><span class="token punctuation">,</span> <span class="token string">"it"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"de"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"de"</span><span class="token punctuation">,</span>
    <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"German Store"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/de"</span><span class="token punctuation">,</span>
    <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"/api/catalog"</span><span class="token punctuation">,</span>
      <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_de"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Germany"</span><span class="token punctuation">,</span>
      <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"German"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"de-DE"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D-M-YYYY"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"it"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"it"</span><span class="token punctuation">,</span>
    <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Italian Store"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/it"</span><span class="token punctuation">,</span>
    <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"/api/catalog"</span><span class="token punctuation">,</span>
      <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_it"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Italy"</span><span class="token punctuation">,</span>
      <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"Italian"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"it-IT"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D-M-YYYY"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><ul>
<li><code>defaultStoreCode</code></li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"entities"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"optimize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"twoStageCaching"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"optimizeShoppingCart"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"*.children_data.id"</span><span class="token punctuation">,</span> <span class="token string">"*.id"</span><span class="token punctuation">,</span> <span class="token string">"children_count"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"is_active"</span><span class="token punctuation">,</span> <span class="token string">"parent_id"</span><span class="token punctuation">,</span> <span class="token string">"level"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span><span class="token punctuation">,</span> <span class="token string">"url_path"</span><span class="token punctuation">,</span> <span class="token string">"product_count"</span><span class="token punctuation">,</span> <span class="token string">"path"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"sgn"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"categoriesRootCategorylId"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"categoriesDynamicPrefetchLevel"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"categoriesDynamicPrefetch"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"attribute"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"attribute_code"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"entity_type_id"</span><span class="token punctuation">,</span> <span class="token string">"options"</span><span class="token punctuation">,</span> <span class="token string">"default_value"</span><span class="token punctuation">,</span> <span class="token string">"is_user_defined"</span><span class="token punctuation">,</span> <span class="token string">"frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"attribute_id"</span><span class="token punctuation">,</span> <span class="token string">"default_frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"is_visible_on_front"</span><span class="token punctuation">,</span> <span class="token string">"is_visible"</span><span class="token punctuation">,</span> <span class="token string">"is_comparable"</span><span class="token punctuation">,</span> <span class="token string">"tier_prices"</span><span class="token punctuation">,</span> <span class="token string">"frontend_input"</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"productList"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"product_links"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span><span class="token punctuation">,</span> <span class="token string">"special_price"</span><span class="token punctuation">,</span> <span class="token string">"special_to_date"</span><span class="token punctuation">,</span> <span class="token string">"special_from_date"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span><span class="token punctuation">,</span> <span class="token string">"url_path"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span><span class="token punctuation">,</span> <span class="token string">"status"</span><span class="token punctuation">,</span> <span class="token string">"tier_prices"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.sku"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.special_price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPriceInclTax"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"configurable_options"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">,</span> <span class="token string">"*.sgn"</span><span class="token punctuation">,</span> <span class="token string">"msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"*.msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"required_options"</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"productListWithChildren"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span><span class="token punctuation">,</span> <span class="token string">"special_price"</span><span class="token punctuation">,</span> <span class="token string">"special_to_date"</span><span class="token punctuation">,</span> <span class="token string">"special_from_date"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.image"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.sku"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.special_price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.specialPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPrice"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.originalPriceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.color"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.size"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.id"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.tier_prices"</span><span class="token punctuation">,</span> <span class="token string">"product_links"</span><span class="token punctuation">,</span> <span class="token string">"url_path"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span><span class="token punctuation">,</span> <span class="token string">"status"</span><span class="token punctuation">,</span> <span class="token string">"tier_prices"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">,</span> <span class="token string">"*.sgn"</span><span class="token punctuation">,</span> <span class="token string">"msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"*.msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"required_options"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"review"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"review_entity"</span><span class="token punctuation">,</span> <span class="token string">"review_status"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"product"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"*.msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"required_options"</span><span class="token punctuation">,</span> <span class="token string">"updated_at"</span><span class="token punctuation">,</span> <span class="token string">"created_at"</span><span class="token punctuation">,</span> <span class="token string">"attribute_set_id"</span><span class="token punctuation">,</span> <span class="token string">"options_container"</span><span class="token punctuation">,</span> <span class="token string">"msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"has_options"</span><span class="token punctuation">,</span> <span class="token string">"stock.manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.stock_id"</span><span class="token punctuation">,</span>  <span class="token string">"stock.use_config_backorders"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_enable_qty_inc"</span><span class="token punctuation">,</span> <span class="token string">"stock.enable_qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"small_image"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">,</span> <span class="token string">"*.sgn"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"useDynamicAttributeLoader"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"standardSystemFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"description"</span><span class="token punctuation">,</span>
      <span class="token string">"configurable_options"</span><span class="token punctuation">,</span>
      <span class="token string">"tsk"</span><span class="token punctuation">,</span>
      <span class="token string">"custom_attributes"</span><span class="token punctuation">,</span>
      <span class="token string">"size_options"</span><span class="token punctuation">,</span>
      <span class="token string">"regular_price"</span><span class="token punctuation">,</span>
      <span class="token string">"final_price"</span><span class="token punctuation">,</span>
      <span class="token string">"price"</span><span class="token punctuation">,</span>
      <span class="token string">"color_options"</span><span class="token punctuation">,</span>
      <span class="token string">"id"</span><span class="token punctuation">,</span>
      <span class="token string">"links"</span><span class="token punctuation">,</span>
      <span class="token string">"gift_message_available"</span><span class="token punctuation">,</span>
      <span class="token string">"category_ids"</span><span class="token punctuation">,</span>
      <span class="token string">"sku"</span><span class="token punctuation">,</span>
      <span class="token string">"stock"</span><span class="token punctuation">,</span>
      <span class="token string">"image"</span><span class="token punctuation">,</span>
      <span class="token string">"thumbnail"</span><span class="token punctuation">,</span>
      <span class="token string">"visibility"</span><span class="token punctuation">,</span>
      <span class="token string">"type_id"</span><span class="token punctuation">,</span>
      <span class="token string">"tax_class_id"</span><span class="token punctuation">,</span>
      <span class="token string">"media_gallery"</span><span class="token punctuation">,</span>
      <span class="token string">"url_key"</span><span class="token punctuation">,</span>
      <span class="token string">"url_path"</span><span class="token punctuation">,</span>
      <span class="token string">"max_price"</span><span class="token punctuation">,</span>
      <span class="token string">"minimal_regular_price"</span><span class="token punctuation">,</span>
      <span class="token string">"special_price"</span><span class="token punctuation">,</span>
      <span class="token string">"minimal_price"</span><span class="token punctuation">,</span>
      <span class="token string">"name"</span><span class="token punctuation">,</span>
      <span class="token string">"configurable_children"</span><span class="token punctuation">,</span>
      <span class="token string">"max_regular_price"</span><span class="token punctuation">,</span>
      <span class="token string">"category"</span><span class="token punctuation">,</span>
      <span class="token string">"status"</span><span class="token punctuation">,</span>
      <span class="token string">"priceTax"</span><span class="token punctuation">,</span>
      <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span>
      <span class="token string">"specialPriceTax"</span><span class="token punctuation">,</span>
      <span class="token string">"specialPriceInclTax"</span><span class="token punctuation">,</span>
      <span class="token string">"_score"</span><span class="token punctuation">,</span>
      <span class="token string">"slug"</span><span class="token punctuation">,</span>
      <span class="token string">"errors"</span><span class="token punctuation">,</span>
      <span class="token string">"info"</span><span class="token punctuation">,</span>
      <span class="token string">"erin_recommends"</span><span class="token punctuation">,</span>
      <span class="token string">"special_from_date"</span><span class="token punctuation">,</span>
      <span class="token string">"news_from_date"</span><span class="token punctuation">,</span>
      <span class="token string">"custom_design_from"</span><span class="token punctuation">,</span>
      <span class="token string">"originalPrice"</span><span class="token punctuation">,</span>
      <span class="token string">"originalPriceInclTax"</span><span class="token punctuation">,</span>
      <span class="token string">"parentSku"</span><span class="token punctuation">,</span>
      <span class="token string">"options"</span><span class="token punctuation">,</span>
      <span class="token string">"product_option"</span><span class="token punctuation">,</span>
      <span class="token string">"qty"</span><span class="token punctuation">,</span>
      <span class="token string">"is_configured"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"cart"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"serverMergeByDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"serverSyncCanRemoveLocalItems"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"serverSyncCanModifyLocalItems"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"synchronize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"synchronize_totals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"setCustomProductOptions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"setConfigurableProductOptions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"askBeforeRemoveProduct"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"displayItemDiscounts"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"minicartCountType"</span><span class="token operator">:</span> <span class="token string">"quantities"</span><span class="token punctuation">,</span>
  <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/create?token={{token}}"</span><span class="token punctuation">,</span>
  <span class="token property">"updateitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/update?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"deleteitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/delete?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"pull_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/pull?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"totals_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/totals?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"paymentmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/payment-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"shippingmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/shipping-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"shippinginfo_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/shipping-information?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"collecttotals_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/collect-totals?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"deletecoupon_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/delete-coupon?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"applycoupon_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/apply-coupon?token={{token}}&amp;cartId={{cartId}}&amp;coupon={{coupon}}"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"products"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"useShortCatalogUrls"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"useMagentoUrlKeys"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"setFirstVarianAsDefaultInURL"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"configurableChildrenStockPrefetchStatic"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"configurableChildrenStockPrefetchDynamic"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"configurableChildrenStockPrefetchStaticPrefetchCount"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token property">"filterUnavailableVariants"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"listOutOfStockProducts"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"preventConfigurableChildrenDirectAccess"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"alwaysSyncPlatformPricesOver"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"clearPricesBeforePlatformSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"waitForPlatformSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"setupVariantByAttributeCode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/product"</span><span class="token punctuation">,</span>
  <span class="token property">"defaultFilters"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"size"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"erin_recommends"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"systemFilterNames"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"sort"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"filterFieldMapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"category.name"</span><span class="token operator">:</span> <span class="token string">"category.name.keyword"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"colorMappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"Melange graphite"</span><span class="token operator">:</span> <span class="token string">"#eeeeee"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"sortByAttributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"Latest"</span><span class="token operator">:</span> <span class="token string">"updated_at"</span><span class="token punctuation">,</span>
    <span class="token property">"Price: Low to high"</span><span class="token operator">:</span><span class="token string">"final_price"</span><span class="token punctuation">,</span>
    <span class="token property">"Price: High to low"</span><span class="token operator">:</span><span class="token string">"final_price:desc"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"gallery"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"variantsGroupAttribute"</span><span class="token operator">:</span> <span class="token string">"color"</span><span class="token punctuation">,</span>
    <span class="token property">"mergeConfigurableChildren"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"imageAttributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"image"</span><span class="token punctuation">,</span><span class="token string">"thumbnail"</span><span class="token punctuation">,</span><span class="token string">"small_image"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">744</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"filterAggregationSize"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"orders"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"directBackendSync"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/order"</span><span class="token punctuation">,</span>
  <span class="token property">"payment_methods_mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"offline_orders"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"automatic_transmission_enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"notification"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"title"</span> <span class="token operator">:</span> <span class="token string">"Order waiting!"</span><span class="token punctuation">,</span>
      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Click here to confirm the order that you made offline."</span><span class="token punctuation">,</span>
      <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"/assets/logo.png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"localForage"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"defaultDrivers"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"cmspage"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"cmsblock"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"carts"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"orders"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"wishlist"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"categories"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"products"</span><span class="token operator">:</span> <span class="token string">"INDEXEDDB"</span><span class="token punctuation">,</span>
    <span class="token property">"elasticCache"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"claims"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"syncTasks"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"ordersHistory"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span><span class="token punctuation">,</span>
    <span class="token property">"checkoutFieldValues"</span><span class="token operator">:</span> <span class="token string">"LOCALSTORAGE"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"reviews"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/review/create"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"users"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"autoRefreshTokens"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user"</span><span class="token punctuation">,</span>
  <span class="token property">"history_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/order-history?token={{token}}"</span><span class="token punctuation">,</span>
  <span class="token property">"resetPassword_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/reset-password"</span><span class="token punctuation">,</span>
  <span class="token property">"changePassword_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/change-password?token={{token}}"</span><span class="token punctuation">,</span>
  <span class="token property">"login_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/login"</span><span class="token punctuation">,</span>
  <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/create"</span><span class="token punctuation">,</span>
  <span class="token property">"me_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/me?token={{token}}"</span><span class="token punctuation">,</span>
  <span class="token property">"refresh_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/refresh"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"stock"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"synchronize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"allowOutOfStockInCart"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/stock"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"images"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"useExactUrlsNoProxy"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"https://demo.vuestorefront.io/img/"</span><span class="token punctuation">,</span>
  <span class="token property">"productPlaceholder"</span><span class="token operator">:</span> <span class="token string">"/assets/placeholder.jpg"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"install"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"is_local_backend"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"backend_dir"</span><span class="token operator">:</span> <span class="token string">"../vue-storefront-api"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"demomode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
  <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"userGroupId"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"useOnlyDefaultUserGroupId"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"deprecatedPriceFieldsSupport"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"finalPriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tax
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>: ...</p>
<ul>
<li><code>defaultCountry</code> 是为商店计算税费的国家/地区的代码名称。</li>
<li><code>defaultRegion</code> 是默认区域。</li>
<li><code>sourcePriceIncludesTax</code>确定价格是在应用税款 ( <code>true</code>) 还是在运行时计算税款 ( ) 时存储<code>false</code>。 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/platform/magento2/tax.js#L12" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
<li><code>calculateServerSide</code>确定是否使用（<code>true</code>）/不使用（<code>false</code>）税计算获取价格。<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/product.js#L48" target="_blank" rel="noopener noreferrer">跳转到代码（打开新窗口）<OutboundLink/></a></li>
<li><code>userGroupId</code>： 空值，</li>
<li><code>useOnlyDefaultUserGroupId</code>： 错误的，</li>
<li><code>deprecatedPriceFieldsSupport</code>： 真的，</li>
<li><code>finalPriceIncludesTax</code>： 错误的</li>
</ul>
</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"shipping"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"methods"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"method_title"</span><span class="token operator">:</span> <span class="token string">"DPD Courier"</span><span class="token punctuation">,</span>
      <span class="token property">"method_code"</span><span class="token operator">:</span> <span class="token string">"flatrate"</span><span class="token punctuation">,</span>
      <span class="token property">"carrier_code"</span><span class="token operator">:</span> <span class="token string">"flatrate"</span><span class="token punctuation">,</span>
      <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">"price_incl_tax"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">"default"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"offline"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"US"</span><span class="token punctuation">,</span>
  <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"EN"</span><span class="token punctuation">,</span>
  <span class="token property">"availableLocale"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"en-US"</span><span class="token punctuation">,</span><span class="token string">"de-DE"</span><span class="token punctuation">,</span><span class="token string">"fr-FR"</span><span class="token punctuation">,</span><span class="token string">"es-ES"</span><span class="token punctuation">,</span><span class="token string">"nl-NL"</span><span class="token punctuation">,</span> <span class="token string">"ja-JP"</span><span class="token punctuation">,</span> <span class="token string">"ru-RU"</span><span class="token punctuation">,</span> <span class="token string">"it-IT"</span><span class="token punctuation">,</span> <span class="token string">"pt-BR"</span><span class="token punctuation">,</span> <span class="token string">"pl-PL"</span><span class="token punctuation">,</span> <span class="token string">"cs-CZ"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"en-US"</span><span class="token punctuation">,</span>
  <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span>
  <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"$"</span><span class="token punctuation">,</span>
  <span class="token property">"currencyDecimal"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"currencyGroup"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"fractionDigits"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"priceFormat"</span><span class="token operator">:</span> <span class="token string">"{sign}{amount}"</span><span class="token punctuation">,</span>
  <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D/M/YYYY"</span><span class="token punctuation">,</span>
  <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"United States"</span><span class="token punctuation">,</span>
  <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"English"</span><span class="token punctuation">,</span>
  <span class="token property">"bundleAllStoreviewLanguages"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"mailchimp"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/ext/mailchimp-subscribe/subscribe"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"mailer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"send"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/ext/mail-service/send-email"</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/ext/mail-service/get-token"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"contactAddress"</span><span class="token operator">:</span> <span class="token string">"contributors@vuestorefront.io"</span><span class="token punctuation">,</span>
  <span class="token property">"sendConfirmation"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"theme"</span><span class="token operator">:</span> <span class="token string">"@vue-storefront/theme-default"</span><span class="token punctuation">,</span>
<span class="token property">"analytics"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"hotjar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"cms"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/ext/cms-data/cms{{type}}/{{cmsId}}"</span><span class="token punctuation">,</span>
  <span class="token property">"endpointIdentifier"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/ext/cms-data/cms{{type}}Identifier/{{cmsIdentifier}}/storeId/{{storeId}}"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"cms_block"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"max_count"</span><span class="token operator">:</span> <span class="token number">500</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"cms_page"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"max_count"</span><span class="token operator">:</span> <span class="token number">500</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"usePriceTiers"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token property">"useZeroPriceProduct"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"inspirations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"category.name"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"eq"</span><span class="token operator">:</span> <span class="token string">"Performance Fabrics"</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"newProducts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"category.name"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"eq"</span><span class="token operator">:</span> <span class="token string">"Tees"</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"bestSellers"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"category.name"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"eq"</span><span class="token operator">:</span> <span class="token string">"Tees"</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div></template>
