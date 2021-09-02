<template><h1 id="静态页面生成器" tabindex="-1"><a class="header-anchor" href="#静态页面生成器" aria-hidden="true">#</a> 静态页面生成器</h1>
<p>Vue Storefront 从 1.11 版开始支持静态 (HTML) 页面生成渲染模式。通过生成静态页面，您无需运行，<code>core/scripts/server.js</code>并且可以将站点静态部署到任何主机，如 Netlify、Github 页面或 Amazon S3。</p>
<p>重要通知</p>
<p>请注意，<code>vue-storefront-api</code>端点应该仍可用于应用程序，因为客户端渲染仍使用 API 来获取数据。</p>
<p>服务器呈现的页面被存储到磁盘文件到<code>/static</code>文件夹中。</p>
<h2 id="可用命令" tabindex="-1"><a class="header-anchor" href="#可用命令" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/static-generator.html#available-commands" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>可用命令</h2>
<p>要首先生成站点的静态版本，您必须在生产模式下构建应用程序：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后你可以运行静态页面生成器：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn generate all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>执行此命令后，您可以找到所有类别、产品和 CMS 页面 - 还包括<code>index.html</code>在<code>/static</code>文件夹中呈现的主页 ( ) 。</p>
<p>由于 Vue Storefront 和 CORS 模式使用绝对链接，生成的文件**只能从 HTTP 服务器提供服务，**并且该<code>file://</code>协议不允许您浏览站点。</p>
<p>包含一个静态文件托管，您可以通过执行来运行它：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn static-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在您可以打开浏览器并导航到<code>http://localhost:3000</code>仅托管<code>/static</code>文件夹的URL 。</p>
<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/static-generator.html#deployment" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>部署</h2>
<p>您所有的网站和资产都放在<code>/static</code>文件夹下。请将此文件夹部署到您的托管服务提供商（仅限域的根目录！）。</p>
<p>重要通知</p>
<p>静态页面生成器是一项实验性功能，可能仍需要一些调整/改进。请务必谨慎使用。</p>
</template>
