<template><h1 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h1>
<p>如果你想在 Vue Storefront 中注册一个 Vue 插件，那么正确的地方是你的主题条目<code>{theme}/index.js</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// {theme}/index.js</span>
<span class="token keyword">import</span> SomePlugin <span class="token keyword">from</span> <span class="token string">'some-plugin'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SomePlugin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="处理服务器端代码" tabindex="-1"><a class="header-anchor" href="#处理服务器端代码" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/plugins.html#dealing-with-server-side-code" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>处理服务器端代码</h2>
<p>Vue Storefront 代码实际上执行了两次：一次在服务器端生成 SSR 页面，然后在客户端执行一次。大多数 Vue 插件都是特定于 ui 的，并且依赖于<code>window</code>服务器端不存在的对象。</p>
<p>为了确保您的插件仅在客户端注册，您可以使用<code>isServer</code>helper。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/helpers'</span>
<span class="token keyword">import</span> SomePlugin <span class="token keyword">from</span> <span class="token string">'some-plugin'</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isServer <span class="token punctuation">)</span> Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SomePlugin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
