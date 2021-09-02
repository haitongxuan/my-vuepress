<template><h1 id="布局和高级输出操作" tabindex="-1"><a class="header-anchor" href="#布局和高级输出操作" aria-hidden="true">#</a> 布局和高级输出操作</h1>
<p>从 1.4.0 版本开始，Vue Storefront 允许您在 SSR 模式下动态切换 HTML 模板和布局。</p>
<p>此功能对于非标准渲染场景非常有用，例如：</p>
<ul>
<li>生成 XML 输出</li>
<li>生成 AMPHTML 页面</li>
<li>生成没有<code>&lt;head&gt;</code>节的小部件</li>
</ul>
<h2 id="这个怎么运作" tabindex="-1"><a class="header-anchor" href="#这个怎么运作" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#how-it-works" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>这个怎么运作</h2>
<p>在 1.4.0 之前，Vue Storefront 通过混合生成输出：</p>
<ul>
<li>以基本 HTML 模板<code>src/index.template.html</code>，</li>
<li>渲染<code>src/themes/default/App.vue</code>根组件，</li>
<li>将 Vue SSR 输出注入模板 + 添加 CSS 样式、脚本引用等。<a href="https://ssr.vuejs.org/guide/build-config.html#client-config" target="_blank" rel="noopener noreferrer">阅读有关 Vue SSR 样式和脚本注入的更多信息（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>这种模式仍然存在并且默认启用。我们所做的更改是，<strong>您现在可以选择您的应用程序以每路由方式路由的 HTML 模板和布局。</strong></p>
<h2 id="变更日志" tabindex="-1"><a class="header-anchor" href="#变更日志" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#changelog" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>变更日志</h2>
<p>我们引入的更改包括：</p>
<ul>
<li>现在可以<code>context.output.template</code>在<code>asyncData</code>方法中设置不同的路线。通过这样做，您可以跳过 using <code>dist/index.html</code>（其中包含典型的 HTML5 元素 - 如<code>&lt;head&gt;</code>）。当我们要生成 AMPHTML 页面（不能包含任何<code>&lt;script&gt;</code>标签）或 XML 文件时，这一点很重要- 您可以随意命名。</li>
<li>可以设置不同的路线，<code>meta.layout</code>并通过这样做来切换以前恒定的<code>App.vue</code>布局文件。</li>
<li>访问服务器<code>context</code>对象<code>asyncData</code>和两个新功能 -<code>output.prepend</code>并且<code>output.append</code>已创建以允许您控制模板的渲染流程。</li>
</ul>
<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#templates" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>模板</h2>
<p>我们添加了两个新的 HTML 模板 + 两个 Vue 布局。</p>
<p>模板：</p>
<ul>
<li><code>index.basic.template.html</code> - 基本元素</li>
<li><code>index.minimal.template.html</code>- 它包含没有任何额外注入的标准 HTML 标记，所以当你渲染一个 Vue 组件时，它的输出将被粘贴进去<code>&lt;body&gt;</code>，仅此而已。可能是<a href="https://www.ampstart.com/" target="_blank" rel="noopener noreferrer">AMPHTML 实现的<OutboundLink/></a>好起点<a href="https://www.ampstart.com/" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>您可以添加更多模板。您只需要在 中设置适当的<code>config.ssr.templates</code>变量<code>config/local.json</code>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"ssr"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"templates"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"dist/index.html"</span><span class="token punctuation">,</span>
        <span class="token property">"minimal"</span><span class="token operator">:</span> <span class="token string">"dist/index.minimal.html"</span><span class="token punctuation">,</span>
        <span class="token property">"basic"</span><span class="token operator">:</span> <span class="token string">"dist/index.basic.html"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"executeMixedinAsyncData"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"initialStateFilter"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"config"</span><span class="token punctuation">,</span> <span class="token string">"__DEMO_MODE__"</span><span class="token punctuation">,</span> <span class="token string">"version"</span><span class="token punctuation">,</span> <span class="token string">"storeView"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"useInitialStateFilter"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>模板路径相对于<code>vue-storefront</code>. 您还可以将模板设置为无 (&quot;&quot;) 以跳过它。此选项对于不需要整个 HTML 布局的 XML / JSON / 小部件呈现很有用。</p>
<h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#examples" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>例子</h2>
<p>您可以在示例中找到一些示例<code>src/extensions/raw-output-example</code>。</p>
<h3 id="生成-xml-输出" tabindex="-1"><a class="header-anchor" href="#生成-xml-输出" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#generating-the-xml-output" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>生成 XML 输出</h3>
<p>示例网址： <code>http://localhost:3000/raw-output-example.xml</code></p>
<p>路由设置切换Vue布局：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/raw-output-example.xml'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> RawOutputExample<span class="token punctuation">,</span> meta<span class="token operator">:</span> <span class="token punctuation">{</span> layout<span class="token operator">:</span> <span class="token string">'empty'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>渲染 XML 的 Vue 组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>raw<span class="token operator">-</span>content<span class="token operator">></span>
    This page is using empty layout <span class="token keyword">set</span> <span class="token keyword">in</span> routes <span class="token operator">+</span> no <span class="token constant">HTML</span> template
  <span class="token operator">&lt;</span><span class="token operator">/</span>raw<span class="token operator">-</span>content<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'RawOutputExample'</span><span class="token punctuation">,</span>
  <span class="token function">asyncData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    contextserver<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'text/xml'</span><span class="token punctuation">)</span>
    context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>template <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string">'exampleData'</span><span class="token operator">:</span> <span class="token string">'Data from base component'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>关键部分是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>contextserver<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'text/xml'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>template <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这两种说法：</p>
<ul>
<li>设置 HTTP 标头（通过访问 ExpressJS 响应对象 — <code>contextserver.response</code>。还有<code>contextserver.request</code>和<code>context.app</code>— ExpressJS 应用程序）— 设置<code>output.template</code>为 none，这将完全跳过 HTML 模板渲染。</li>
</ul>
<h3 id="关闭布局并注入动态内容" tabindex="-1"><a class="header-anchor" href="#关闭布局并注入动态内容" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#switching-off-layout-and-injecting-dynamic-content" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>关闭布局并注入动态内容</h3>
<p>示例网址： <code>http://localhost:3000/append-prepend.html</code></p>
<p>路由设置切换Vue布局：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/append-prepend.html'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> NoLayoutAppendPrependExample<span class="token punctuation">,</span> meta<span class="token operator">:</span> <span class="token punctuation">{</span> layout<span class="token operator">:</span> <span class="token string">'empty'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>渲染 XML 的 Vue 组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>This page is rendered <span class="token keyword">with</span> no JavaScripts attached <span class="token operator">-</span> no layout at all<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'NoJSExample'</span><span class="token punctuation">,</span>
  <span class="token function">asyncData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>template <span class="token operator">=</span> <span class="token string">''</span>
    context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function-variable function">append</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'&lt;div>This content has been dynamically appended&lt;/div>'</span>
    <span class="token punctuation">}</span>
    context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function-variable function">prepend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'&lt;div>this content has been dynamically prepended&lt;/div>'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string">'exampleData'</span><span class="token operator">:</span> <span class="token string">'Data from base component'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>关键部分是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>template <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function-variable function">append</span> <span class="token operator">=</span> <span class="token parameter">context</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'&lt;div>This content has been dynamically appended&lt;/div>'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function-variable function">prepend</span> <span class="token operator">=</span> <span class="token parameter">context</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'&lt;div>this content has been dynamically prepended&lt;/div>'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这两种说法：</p>
<ul>
<li>设置<code>output.template</code>为 none，这将导致完全跳过 HTML 模板渲染。</li>
<li>将<code>output.append</code>和<code>output.prepend</code>方法添加到服务器上下文。</li>
</ul>
<p>将使用以下逻辑生成输出：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> contentPrepend <span class="token operator">=</span>
  <span class="token keyword">typeof</span> context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>prepend <span class="token operator">===</span> <span class="token string">'function'</span>
    <span class="token operator">?</span> context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contentAppend <span class="token operator">=</span>
  <span class="token keyword">typeof</span> context<span class="token punctuation">.</span>output<span class="token punctuation">.</span>append <span class="token operator">===</span> <span class="token string">'function'</span>
    <span class="token operator">?</span> context<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
output <span class="token operator">=</span> contentPrepend <span class="token operator">+</span> output <span class="token operator">+</span> contentAppend<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>请注意，它<code>context</code>包含许多有趣的功能，可用于控制 CSS、SCRIPT 和 META 注入。<a href="https://ssr.vuejs.org/guide/build-config.html#client-config" target="_blank" rel="noopener noreferrer">阅读有关 Vue SSR 样式和脚本注入的更多信息（打开新窗口）<OutboundLink/></a></p>
<p><strong>注意：<a href="https://ssr.vuejs.org/guide/head.html" target="_blank" rel="noopener noreferrer">上下文对象 = Vue.prototype.$ssrContext（打开新窗口）<OutboundLink/></a></strong></p>
<h2 id="输出压缩" tabindex="-1"><a class="header-anchor" href="#输出压缩" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#output-compression" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>输出压缩</h2>
<p>HTML Minifier 已添加到 Vue Storefront 1.11。要启用此功能，请切换<code>config.server.useHtmlMinifier</code>. 您可以<code>htmlMinifier</code>使用<code>config.server.htmlMinifierOptions</code>. 阅读有关<a href="https://www.npmjs.com/package/html-minifier" target="_blank" rel="noopener noreferrer">可用配置<OutboundLink/></a>的<a href="https://www.npmjs.com/package/html-minifier" target="_blank" rel="noopener noreferrer">更多信息 （打开新窗口）<OutboundLink/></a>. 然后通过<code>SSR Output cache</code>机制缓存缩小的输出。</p>
<p>还启用了输出压缩（如果<code>src/modules/server.ts</code>包含<code>compression</code>列表中的模块）。默认情况下，它仅适用于生产版本。它<code>gzip</code>默认使用压缩。<a href="https://www.npmjs.com/package/compression" target="_blank" rel="noopener noreferrer">阅读有关该<code>compression</code>模块的更多信息 （打开新窗口）<OutboundLink/></a>我们正在用于此实现。</p>
</template>
