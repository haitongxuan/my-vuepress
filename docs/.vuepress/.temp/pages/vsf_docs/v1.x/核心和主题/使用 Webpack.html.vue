<template><h1 id="使用-webpack" tabindex="-1"><a class="header-anchor" href="#使用-webpack" aria-hidden="true">#</a> 使用 Webpack</h1>
<p>为了使 Vue Storefront 快速且对开发人员友好，我们在后台使用 webpack。我们需要它来转换资产、处理<code>.vue</code>文件、处理所有样式，并使用 eslint 提供的 linting 使我们的代码更易于维护。有了它，您无需担心手动配置它即可开始在 Vue Storefront 上工作或为其构建自己的主题。然而，当你想根据你的特殊需求调整它时，也可以通过每个主题的可扩展 webpack 配置来实现。</p>
<h2 id="核心-webpack-构建" tabindex="-1"><a class="header-anchor" href="#核心-webpack-构建" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#core-webpack-build" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>核心 webpack 构建</h2>
<p>Vue Storefront 核心使用的所有构建脚本都可以在<code>core/build</code>目录中找到。如果您想改进我们的构建或添加对新案例的支持，您可能只需要更改那里的文件，有时更新<code>package.json</code>.</p>
<p>客户端和服务器的基本配置在<code>webpack.base.config.js</code>. 这种配置然后用特定的客户端和服务器合并CONFIGS<code>webpack.client.config.js</code>和<code>webpack.server.config.js</code>。</p>
<p>对于开发模式 ( <code>yarn dev</code>)<code>dev-server.js</code>文件用于使用主题提供的自定义配置运行前面提到的配置文件 ( <code>webpack.client.config.js</code>, <code>webpack.server.config.js</code>)。我们使用<code>webpack-dev-middleware</code>和<code>webpack-hot-middleware</code>使网站开发尽可能快速和简单。</p>
<p>在<code>vue-loader.config.js</code>整个配置<code>vue-loader</code>中存储。如果需要更改单文件组件的样式处理，可以在这个文件中进行设置（如果要扩展Vue Storefront核心）。</p>
<p>构建 Vue Storefront 的生产版本<code>webpack.prod.client.config.js</code>并<code>webpack.prod.server.config.js</code>与<code>build</code>脚本一起使用。在这些文件中，我们的基本配置与主题特定的扩展配置合并。</p>
<h2 id="扩展主题中的核心构建" tabindex="-1"><a class="header-anchor" href="#扩展主题中的核心构建" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#extending-core-build-in-themes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展主题中的核心构建</h2>
<p>Vue Storefront 遵循<a href="https://github.com/zeit/next.js/" target="_blank" rel="noopener noreferrer">next.js<OutboundLink/></a>推广的<a href="https://github.com/zeit/next.js/" target="_blank" rel="noopener noreferrer">技术 （打开新窗口）<OutboundLink/></a>和<a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt （打开新窗口）<OutboundLink/></a>用于扩展 webpack 配置。对于每个主题，您都可以配置<code>webpack.config.js</code>文件，以便您可以访问基本配置并根据需要对其进行自定义，而无需更改核心构建文件。</p>
<h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#example" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>例子</h3>
<p>下面是一个简单的例子，<code>webpack-bundle-analyzer</code>用于检查生成的 webpack 包。除了analyzer，<code>json5-loader</code>用于处理<code>json5-loader</code>项目中的JSON5文件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> isClient<span class="token punctuation">,</span> isDev <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> configLoaders<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configLoaders <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        openAnalyzer<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        statsFilename<span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
        generateStatsFile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        analyzerMode<span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    configLoaders <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  configLoaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.json5$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    loader<span class="token operator">:</span> <span class="token string">'json5-loader'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>此文件应导出返回完整配置的函数。此函数使用两个参数执行。首先是完整的核心 Vue Storefront webpack 配置。第二个是具有属性的对象：<code>isClient</code>和<code>isDev</code>。</p>
<p>选项<code>isClient</code>表示配置用于客户端包。</p>
<p>选项<code>isDev</code>设置为<code>true</code>如果 Vue Storefront 在开发模式下运行。</p>
<p>在客户端构建 ( <code>isClient == true</code>)的情况下， config 参数是一个包含两个元素的数组。第一个数组元素是客户端配置，第二个元素用于生成 Service Worker 文件。</p>
<p>对于服务器构建 ( <code>isClient == false</code>)， config 参数是标准的 webpack 配置对象。</p>
<p>扩展配置中使用的所有加载器和插件都将从主题<code>node_modules</code>目录中获取，因此请确保将其保存在主题<code>package.json</code>文件中。</p>
</template>
