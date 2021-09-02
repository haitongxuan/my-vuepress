<template><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1>
<p>提醒</p>
<p>这份文件是<em>存档</em>和<em>不</em>具有这是最新版本的有关<code>1.11</code>在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>介绍</h2>
<h3 id="vue-storefront-扩展是什么样的" tabindex="-1"><a class="header-anchor" href="#vue-storefront-扩展是什么样的" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#what-do-vue-storefront-extensions-look-like" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront 扩展是什么样的？</h3>
<p>根据您的需求，Vue Storefront 扩展可以有两个部分：</p>
<ul>
<li>**客户端部分，**它只是一个<a href="https://github.com/vuestorefront/vue-storefront/blob/master/docs/guide/modules/introduction.md" target="_blank" rel="noopener noreferrer">Vue Storefront 模块 （打开新窗口）<OutboundLink/></a>. 它涵盖了大多数用例。</li>
<li><strong>服务器端部分</strong>，它是一个<a href="https://github.com/vuestorefront/vue-storefront/blob/master/docs/guide/extensions/extending-api.md" target="_blank" rel="noopener noreferrer">Vue Storefront API 扩展 （打开新窗口）<OutboundLink/></a>如果您想向<code>vue-storefront-api</code>Elasticsearch添加某些端点或与 Elasticsearch 交互，则应使用它。</li>
</ul>
<h3 id="扩展程序所在的位置" tabindex="-1"><a class="header-anchor" href="#扩展程序所在的位置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#where-extensions-are-located" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展程序所在的位置</h3>
<ul>
<li>在客户端，扩展模块应该放在<code>src/modules</code>文件夹中<code>vue-storefront</code>或通过 NPM cli 安装并在<code>src/modules/index.ts</code></li>
<li>在服务器端，扩展应该放在<code>src/api/extensions</code>文件夹中<code>vue-storefront-api</code>并在配置文件中注册</li>
</ul>
<h3 id="编写扩展" tabindex="-1"><a class="header-anchor" href="#编写扩展" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#writing-extensions" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>编写扩展</h3>
<p>如果您将 VS 扩展编写为 NPM 模块，请以<code>vsf-</code>前缀开头包名称，以便它可以与其他 VS 代码一起转换，并将其作为原始 es6/typescript 模块发送。如果不使用前缀，则需要自己处理转译。我们目前正在构建一个扩展样板，以使其更容易开发。</p>
<p>在这里，您可以找到两篇解释如何创建自定义 Vue Storefront 扩展的文章：</p>
<ul>
<li><a href="https://itnext.io/how-to-create-an-instagram-feed-module-for-vue-storefront-eaa03019b288" target="_blank" rel="noopener noreferrer">如何为 Vue Storefront 创建 Instagram Feed 模块 （打开新窗口）<OutboundLink/></a>哈维尔·维拉纽瓦</li>
<li><a href="https://www.develodesign.co.uk/news/development-of-the-paypal-module-for-vue-storefront/#.XCoa2h2Mmmo.twitter" target="_blank" rel="noopener noreferrer">开发 Vue Storefront 支付模块 （打开新窗口）<OutboundLink/></a>作者：Dmitry Schegolikhin，来自 Develo <a href="https://www.develodesign.co.uk/" target="_blank" rel="noopener noreferrer">Design（打开新窗口）<OutboundLink/></a></li>
</ul>
<p><strong>重要</strong>如果您是扩展程序开发人员，请加入<code>#extension-dev</code>我们的 Slack 频道以接收有关重要 API 更新和新功能的信息。</p>
<h3 id="扩展列表" tabindex="-1"><a class="header-anchor" href="#扩展列表" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#extensions-list" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展列表</h3>
<p>您可以在<a href="https://github.com/frqnck/awesome-vue-storefront" target="_blank" rel="noopener noreferrer">Awesome Vue Storefront 中<OutboundLink/></a>找到 VS 扩展的精选列表<a href="https://github.com/frqnck/awesome-vue-storefront" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>列表。</p>
<h2 id="扩展-api" tabindex="-1"><a class="header-anchor" href="#扩展-api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#extending-the-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展 API</h2>
<p>一些扩展需要有额外的 API 方法来直接从 Magento/其他 CMS 或仅从自定义 Elasticsearch 数据集合中获取一些数据。</p>
<p>您可以<a href="https://docs.vuestorefront.io/v1/guide/data/data-migrations.html" target="_blank" rel="noopener noreferrer">使用迁移机制<OutboundLink/></a>添加新的 ES 集合</p>
<p>然后你可以延长 <a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api</code> （打开新窗口）<OutboundLink/></a>添加您的自定义 API 方法。请看：<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/api/extensions/mailchimp-subscribe/index.js" target="_blank" rel="noopener noreferrer">mailchimp-subscribe （打开新窗口）<OutboundLink/></a>以供参考。</p>
<p>要将 API 扩展添加到<code>vue-storefront-api</code>：</p>
<ol>
<li>在<code>src/api/extensions</code>例如“custom_extension”中创建文件夹。</li>
<li>然后添加<code>index.js</code>文件并将API方法代码放入其中。我们正在使用 Express.js。这是扩展代码的样板/示例：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apiStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../lib/util'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> config<span class="token punctuation">,</span> db <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mcApi <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * POST create an user
   */</span>
  mcApi<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/subscribe'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> userData <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userData<span class="token punctuation">.</span>email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">'Invalid e-mail provided!'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">request</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        url<span class="token operator">:</span>
          config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>apiUrl <span class="token operator">+</span>
          <span class="token string">'/lists/'</span> <span class="token operator">+</span>
          <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>listId<span class="token punctuation">)</span> <span class="token operator">+</span>
          <span class="token string">'/members'</span><span class="token punctuation">,</span>
        method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        headers<span class="token operator">:</span> <span class="token punctuation">{</span>
          Authorization<span class="token operator">:</span> <span class="token string">'apikey '</span> <span class="token operator">+</span> config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        json<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        body<span class="token operator">:</span> <span class="token punctuation">{</span> email_address<span class="token operator">:</span> userData<span class="token punctuation">.</span>email<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token string">'subscribed'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> error<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> body<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * DELETE delete an user
   */</span>
  mcApi<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/subscribe'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> userData <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userData<span class="token punctuation">.</span>email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">'Invalid e-mail provided!'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">request</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        url<span class="token operator">:</span>
          config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>apiUrl <span class="token operator">+</span>
          <span class="token string">'/lists/'</span> <span class="token operator">+</span>
          <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>listId<span class="token punctuation">)</span><span class="token punctuation">,</span>
        method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        headers<span class="token operator">:</span> <span class="token punctuation">{</span>
          Authorization<span class="token operator">:</span> <span class="token string">'apikey '</span> <span class="token operator">+</span> config<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span>mailchimp<span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        json<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        body<span class="token operator">:</span> <span class="token punctuation">{</span>
          members<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> email_address<span class="token operator">:</span> userData<span class="token punctuation">.</span>email<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token string">'unsubscribed'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          update_existing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> error<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">apiStatus</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> body<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> mcApi<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><ol>
<li>将扩展添加到<code>config/local.json</code>：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>	<span class="token property">"registeredExtensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"mailchimp-subscribe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>重新启动 <code>vue-storefront-api</code></li>
<li>您的新 API 方法可<code>localhost:8080/api/ext/&lt;extension_name&gt;/&lt;extension_method&gt;</code>用于例如：<code>localhost:8080/api/ext/mailchimp-subscribe/subscribe</code></li>
</ol>
<h2 id="扩展-express-js-服务器端路由" tabindex="-1"><a class="header-anchor" href="#扩展-express-js-服务器端路由" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#extending-express-js-server-side-routes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展 Express.js 服务器端路由</h2>
<p>从 Vue Storefront 1.4.0 开始，您可以在没有 Vue.js SSR 上下文的情况下添加自己的自定义服务器端路由。例如，这些路由可用于生成大型、无缓冲的文件，如 XML 映射、二进制文件等。</p>
<p>您可以通过简单地修改以下内容来添加大量自定义 Express js 中间件和路由<code>src/server/index.js</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// You can extend Vue Storefront server routes by binding to the Express.js (expressApp) in here</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">registerUserServerRoutes</span> <span class="token operator">=</span> <span class="token parameter">expressApp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./example/generator'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>expressApp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>示例路由处理程序如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">expressApp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * This is an example on how You can bind Your own Express.js server routes to SSR server running Vue Storefront.
   * It may be usefull to avoid all the Vue.js processing and context - and useful for example for large XML/binary file generation
   */</span>
  expressApp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/vue-storefront.xml'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'&lt;content>Vue Storefront custom XML generator example&lt;/content>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="express-路由内的数据操作" tabindex="-1"><a class="header-anchor" href="#express-路由内的数据操作" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#data-operations-inside-express-routes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Express 路由内的数据操作</h3>
<p>不幸的是，正如您在上面的 中看到的那样<code>core/scripts/server.js</code>，脚本使用的所有模块（包括动态路由）都不能使用 ES 模块（<code>import ... from ...</code>语句类型）。由于此限制，您当前无法<code>@vue-storefront</code>在自定义 Express.js 路由中使用模块，因为它们未编译为 CommonJS。这很可能会得到修复。要获取数据，您可以执行<code>fetch()</code>对<code>vue-storefront-api</code>端点的请求。您仍然可以使用<code>const config = require('config')</code>来读取端点、URL 等。</p>
<h2 id="使用扩展修改-elasticsearch-结果" tabindex="-1"><a class="header-anchor" href="#使用扩展修改-elasticsearch-结果" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/extensions.html#using-extensions-to-modify-elasticsearch-results" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用扩展修改 Elasticsearch 结果</h2>
<p>Vue Storefront API 有一个内置处理器，用于计算税收并将该数据添加到产品搜索结果中。API 扩展也可以添加自己的处理器来修改 Elasticsearch 结果。</p>
<p>一些可能的用例可能是：</p>
<ul>
<li>用来自 CMS 的数据替换 Magento 产品描述。</li>
<li>清理 Magento“所见即所得”数据。</li>
<li>添加来自第三方系统的产品评级或其他数据。</li>
</ul>
<p>以下是创建自定义结果处理器以使用 Prismic CMS 数据替换产品描述的示例：</p>
<ol>
<li>中创建扩展文件夹<code>src/api/extensions</code>。</li>
<li>扩展文件夹必须包含另一个名为<code>processors</code>.</li>
<li>添加处理器文件，例如<code>src/api/extensions/example-extension/processors/prismic-product.js</code>.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Prismic <span class="token keyword">from</span> <span class="token string">'prismic-javascript'</span>
<span class="token keyword">import</span> PrismicDOM <span class="token keyword">from</span> <span class="token string">'prismic-dom'</span>

<span class="token keyword">class</span> <span class="token class-name">ProductPrismic</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_request <span class="token operator">=</span> request
    <span class="token keyword">this</span><span class="token punctuation">.</span>_config <span class="token operator">=</span> config
  <span class="token punctuation">}</span>

  <span class="token function">process</span> <span class="token punctuation">(</span><span class="token parameter">productList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> skus <span class="token operator">=</span> productList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token parameter">prod</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> prod<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>sku<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Prismic<span class="token punctuation">.</span><span class="token function">getApi</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_config<span class="token punctuation">.</span>extensions<span class="token punctuation">[</span><span class="token string">'example-extension'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>Prismic<span class="token punctuation">.</span>Predicates<span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token string">'my.product.uid'</span><span class="token punctuation">,</span> skus<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> result<span class="token punctuation">.</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> product <span class="token operator">=</span> productList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span> <span class="token parameter">prod</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> prod<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>sku<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> item<span class="token punctuation">.</span>uid
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>product<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            product<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>description <span class="token operator">=</span> PrismicDOM<span class="token punctuation">.</span>RichText<span class="token punctuation">.</span><span class="token function">asHtml</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>description<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> productList
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ProductPrismic
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ol>
<li>添加扩展<code>config/local.json</code>并在扩展设置中声明自定义处理器。它需要在这个结构中：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"registeredExtensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"example-extension"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"example-extension"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"https://my_account.cdn.prismic.io/api/v2"</span><span class="token punctuation">,</span>
      <span class="token property">"resultProcessors"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"product"</span><span class="token operator">:</span> <span class="token string">"prismic-product"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>就是这样。在 Prismic 中，创建具有与每个产品 SKU 匹配的 uid 和描述字段的文档。这些描述随后将出现在 Vue Storefront 产品列表中。每当在 Prismic 中发布文档时，数据都会立即更新。</p>
<p>注意：此示例使用 Prismic 和 PrismicDOM，因此需要将它们添加到 package.json 中的依赖项中</p>
<p>注 2：有关<code>src/platform/magento2/tax.js</code>结果处理器的另一个示例，请参见。</p>
</template>
