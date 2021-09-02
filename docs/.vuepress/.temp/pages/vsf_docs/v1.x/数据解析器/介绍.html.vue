<template><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<h2 id="什么是数据解析器" tabindex="-1"><a class="header-anchor" href="#什么是数据解析器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data-resolvers/introduction.html#what-are-the-data-resolvers" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>什么是数据解析器？</h2>
<p>这<code>data resolvers</code>是管理网络/api 调用并将它们与应用程序的其余部分分开的方式。所有可用的<code>data resolvers</code>都可以在<code>core/data-resolver</code>目录中找到。如果要触发网络调用，则应创建一个新的<code>data resolver</code>，并将其导入到需要的地方。</p>
<h2 id="如何创建数据解析器" tabindex="-1"><a class="header-anchor" href="#如何创建数据解析器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data-resolvers/introduction.html#how-to-create-a-data-resolver" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何创建数据解析器</h2>
<p>首先，请在命名空间下为它创建一个类型<code>DataResolver</code>，然后像下面这个例子一样创建一个新的数据解析器：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DataResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types/DataResolver'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TaskQueue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/sync'</span>
<span class="token keyword">import</span> Task <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/sync/types/Task'</span>

<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'Accept'</span><span class="token operator">:</span> <span class="token string">'application/json, text/plain, */*'</span><span class="token punctuation">,</span>
  <span class="token string">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myNewNetworkCall <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>Task<span class="token operator">></span> <span class="token operator">=></span>
  TaskQueue<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token function">processLocalizedURLAddress</span><span class="token punctuation">(</span><span class="token comment">/* some endpoint */</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    payload<span class="token operator">:</span> <span class="token punctuation">{</span>
      method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      mode<span class="token operator">:</span> <span class="token string">'cors'</span><span class="token punctuation">,</span>
      headers<span class="token punctuation">,</span>
      body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> YourService<span class="token operator">:</span> DataResolver<span class="token punctuation">.</span>YourService <span class="token operator">=</span> <span class="token punctuation">{</span>
  myNewNetworkCall<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="可用的数据解析器" tabindex="-1"><a class="header-anchor" href="#可用的数据解析器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data-resolvers/introduction.html#available-data-resolvers" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>可用的数据解析器</h2>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/data-resolvers/category-service.html" target="_blank" rel="noopener noreferrer">类别服务<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/data-resolvers/user-service.html" target="_blank" rel="noopener noreferrer">用户服务<OutboundLink/></a></li>
</ul>
</template>
