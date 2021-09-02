<template><h1 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h1>
<h2 id="使用-git-进行自定义开发" tabindex="-1"><a class="header-anchor" href="#使用-git-进行自定义开发" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/project-structure.html#using-git-for-custom-development" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用 git 进行自定义开发</h2>
<p>一种选择是进行某种分叉，或者只是将整个 repo 发送到您的 git 服务。然后，如果您想进行一些 VS 更新，您可能需要从我们的源中提取更改。一旦我们设法将核心分离为 npm 模块，另一个选项将可用。</p>
<h2 id="结构细节" tabindex="-1"><a class="header-anchor" href="#结构细节" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/project-structure.html#structure-details" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>结构细节</h2>
<p>下面，您可以找到 Vue Storefront 项目结构及其说明和相应的文档。这是开始项目的好地方。</p>
<ul>
<li>
<p><code>config</code>- Vue Storefront 的配置文件。它们用于定义后端地址、当前主题等。</p>
<ul>
<li><code>default.json</code>- 永远不应更改的默认配置模板。如果要对配置进行一些更改，请<code>local.json</code>在同一文件夹中创建一个文件，复制内容并在那里进行更改。默认值<code>config.json</code>将被<code>local.json</code>您的设置覆盖。</li>
<li><code>local.json</code>（可选） - 我们自定义的 Vue Storefront 配置。您可以在<a href="https://docs.vuestorefront.io/v1/guide/basics/configuration.html" target="_blank" rel="noopener noreferrer">Vue Storefront 配置章节中<OutboundLink/></a>找到所有配置文件属性的详细说明。</li>
</ul>
</li>
<li>
<p><code>core</code> - Vue 店面核心</p>
<p>小心！</p>
<p><code>core</code>如果您想接收核心更新，请不要修改项目上的目录。</p>
<ul>
<li><code>build</code>- 它包含<code>config.json</code>从文件<code>/config</code>夹和 webpack 构建中的文件生成。它由 vue-cli webpack 模板制成。您可以扩展核心 webpack 构建<code>{themeroot}/webpack.config.js</code>（相关：<a href="https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html" target="_blank" rel="noopener noreferrer">使用 Webpack<OutboundLink/></a>）。</li>
<li><code>compatibility</code>- 1.6 版本后旧组件的 API 端口。不要在新项目中使用它。</li>
<li><code>filters</code> - 核心 Vue 过滤器</li>
<li><code>helpers</code> - 全球帮手</li>
<li><code>lib</code> - 允许主题支持、模块等功能的核心库。</li>
<li><code>mixins</code> - 核心 Vue 混合</li>
<li><code>i18n</code> - 国际化插件</li>
<li><code>modules</code>- 核心 VSModules。<a href="https://divanteltd.github.io/vue-storefront/guide/modules/introduction.html" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>阅读有关模块的更多信息<a href="https://divanteltd.github.io/vue-storefront/guide/modules/introduction.html" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>pages</code> - Vue Storefront 核心页面</li>
<li><code>scripts</code> - 安装程序等脚本</li>
<li><code>service-worker</code>- 核心服务工作者。它与<code>sw-precache</code>来自<code>build</code>和的数据合并<code>{theme}/service-worker-ext.js</code></li>
<li><code>store</code>- 核心 Vuex 存储（相关：<a href="https://docs.vuestorefront.io/v1/guide/vuex/introduction.html" target="_blank" rel="noopener noreferrer">使用 Vuex<OutboundLink/></a>，<a href="https://docs.vuestorefront.io/v1/guide/data/data.html" target="_blank" rel="noopener noreferrer">使用数据<OutboundLink/></a>）。<strong>这部分已弃用，会慢慢迁移到modules和lib文件夹</strong></li>
<li><code>types</code> - 核心 TypeScript 类型</li>
</ul>
</li>
<li>
<p><code>src</code>- 包含 Vue Storefront 核心和主题的主项目文件夹。这是您的应用程序游乐场，因此您可以修改此文件夹。</p>
<ul>
<li><code>modules</code> - 特定于项目的 VSModules 和扩展</li>
<li><code>themes</code>- Vue Storefront 核心主题以及 amp-theme。您可以更改<code>config/</code>文件夹中的活动主题。</li>
<li><code>server</code> - 额外的快速路线</li>
</ul>
</li>
</ul>
</template>
