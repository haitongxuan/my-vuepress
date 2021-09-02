<template><h1 id="vue-storefront-中的主题" tabindex="-1"><a class="header-anchor" href="#vue-storefront-中的主题" aria-hidden="true">#</a> Vue Storefront 中的主题</h1>
<p>提醒</p>
<p>本指南基于版本发布<code>default</code>前的主题<code>1.12</code>。这里提到的一般思想和结构是基于前<code>1.12</code> <code>default</code>主题创建的。</p>
<p>Vue Storefront 允许您快速开发自己的主题并使用我们的核心业务逻辑。所有电子商务功能都在核心中实现，因此您只需编写 HTML 和 CSS 并从核心继承业务逻辑，即可轻松开发完全可用的在线商店。当然，您可以轻松修改和扩展主题中的核心逻辑。</p>
<p>您可以<a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>阅读有关 Vue Storefront 核心组件以及如何使用它们的更多<a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html" target="_blank" rel="noopener noreferrer">信息<OutboundLink/></a></p>
<p>所有主题都位于<code>src/themes</code>文件夹中，您可以将它们视为单独的 Vue.js 应用程序，这些应用程序使用 Vue Storefront 核心提供开箱即用的功能。</p>
<h2 id="切换主题" tabindex="-1"><a class="header-anchor" href="#切换主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#switching-themes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>切换主题</h2>
<p>要使用位于 中的任何主题<code>src/themes</code>，只需<code>theme</code>将配置文件中的<code>name</code>属性更改为位于主题根目录中的 package.json 文件中的属性。配置文件位于<code>config</code>文件夹中。你不应该在<code>config/default.json</code>. 而只是将<code>default.json</code>文件复制到同一文件夹，命名<code>local.json</code>并在那里进行更改。</p>
<h2 id="创建自己的主题" tabindex="-1"><a class="header-anchor" href="#创建自己的主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#creating-your-own-themes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>创建自己的主题</h2>
<p>要创建您自己的 Vue Storefront 主题，您可以复制和修改默认主题，该主题是完全样式的并且可以立即使用（这是您可以在我们的演示中找到的主题）。</p>
<p>这样做：</p>
<ol>
<li>复制<code>default</code>位于中的文件夹<code>src/themes</code>并将其名称更改为新主题的名称。</li>
<li>更改<code>name</code>主题<code>package.json</code>文件中的属性。</li>
<li>将此名称插入<code>theme</code>.config 文件的属性中<code>config/local.json</code>。</li>
<li>运行<code>yarn install</code>以便<em>lerna</em>可以检测到新主题。</li>
<li>开始为 Vue Storefront 开发您自己的主题！</li>
</ol>
<p>只有经过社区测试和接受的官方主题才能在<code>master</code>分支中。请在不同的分支上开发您自己的主题并保持更新<code>master</code>以确保它与最新的核心一起使用。</p>
<h2 id="重要的主题文件" tabindex="-1"><a class="header-anchor" href="#重要的主题文件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#important-theme-files" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>重要的主题文件</h2>
<p>每个主题都是一个单独的 Vue.js 应用程序，具有自己的依赖项，可以使用核心甚至对其进行修改。您可以在下面找到对您的主题工作至关重要的文件列表：</p>
<ul>
<li>
<p><code>assets</code> - 特定主题的资产</p>
</li>
<li>
<p><code>components</code> - 特定主题的组件</p>
</li>
<li>
<p><code>css</code> - 特定主题的 css 文件</p>
</li>
<li>
<p><code>helpers</code> - 辅助方法</p>
</li>
<li>
<p><code>layouts</code> - 布局文件</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mixins
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>- 特定主题的混入（扩展</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>core/mixins
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>）</p>
<ul>
<li><code>index.js</code> - 在这里你可以注册你的主题特定的mixin</li>
</ul>
</li>
<li>
<p><code>pages</code> - 您的商店页面</p>
</li>
<li>
<p><code>resource</code>- 特定主题的资源（扩展<code>core/resource</code>）</p>
</li>
<li>
<p><code>router</code> - 主题路由器</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>store
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>- 特定主题的商店（扩展</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>core/store
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>）</p>
<ul>
<li><code>ui-store.js</code> - 在这里你可以扩展核心 <code>ui-store</code></li>
<li><code>index.js</code> - 在这里您可以注册特定主题的商店</li>
</ul>
</li>
<li>
<p><code>App.vue</code> - 主题入口组件</p>
</li>
<li>
<p><code>index.js</code> - 主题初始化</p>
</li>
<li>
<p><code>package.json</code> - 特定于主题的依赖项</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service-worker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><code>index.js</code>您可以在此处扩展核心服务工作者（请参阅<a href="https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html" target="_blank" rel="noopener noreferrer">使用服务工作者<OutboundLink/></a></li>
</ul>
</li>
<li>
<p><code>webpack.config.js</code>- 您可以在此文件中扩展核心 webpack 构建（扩展<code>core/build/</code>，请参阅<a href="https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html" target="_blank" rel="noopener noreferrer">使用 webpack<OutboundLink/></a>）</p>
</li>
</ul>
<h2 id="官方-vue-店面主题" tabindex="-1"><a class="header-anchor" href="#官方-vue-店面主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#official-vue-storefront-themes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>官方 Vue 店面主题：</h2>
<ul>
<li><a href="https://github.com/vuestorefront/vsf-capybara" target="_blank" rel="noopener noreferrer">水豚 （打开新窗口）<OutboundLink/></a>- Capybara 是 Vue Storefront 的基于 Storefront UI 的主题。</li>
<li><a href="https://github.com/vuestorefront/vsf-default" target="_blank" rel="noopener noreferrer">默认 （打开新窗口）<OutboundLink/></a>- 默认 VS 主题始终具有最新功能。在您的商店中采用 VS 的最简单方法是采用此方法并根据您的需要对其进行修改（查看<a href="https://www.gogetgold.com/" target="_blank" rel="noopener noreferrer">gogetgold.com （打开新窗口）<OutboundLink/></a>举个例子）</li>
</ul>
<h2 id="有关的" tabindex="-1"><a class="header-anchor" href="#有关的" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#related" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>有关的</h2>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html" target="_blank" rel="noopener noreferrer">使用组件<OutboundLink/></a></li>
<li><a href="https://medium.com/@frakowski/developing-themes-in-vue-storefront-backend-agnostic-ecommerce-pwa-frontend-part-1-72ea3c939593" target="_blank" rel="noopener noreferrer">在 Vue Storefront 中创建主题——与后端无关的电子商务 PWA 前端（第 1 部分——了解 Vue Storefront 核心）<OutboundLink/></a></li>
</ul>
</template>
