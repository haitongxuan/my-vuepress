<template><h1 id="ch-5-从头开始构建模块" tabindex="-1"><a class="header-anchor" href="#ch-5-从头开始构建模块" aria-hidden="true">#</a> Ch 5. 从头开始构建<em>模块</em></h1>
<p>在本章中，我们将介绍：</p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_0-introduction" target="_blank" rel="noopener noreferrer">0. 介绍<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer">1. 如何引导一个模块<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-best-practices-for-tweaking-a-module" target="_blank" rel="noopener noreferrer">2. 调整模块的最佳实践<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks" target="_blank" rel="noopener noreferrer">3.钩入钩子<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-module-configuration" target="_blank" rel="noopener noreferrer">4. 关于模块配置<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module" target="_blank" rel="noopener noreferrer">5. 打包一个模块<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_6-extend-elasticsearch-request-body-using-storefront-query-builder" target="_blank" rel="noopener noreferrer">6. 使用 storefront-query-builder 扩展 Elasticsearch 请求体<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-working-with-translations-in-module" target="_blank" rel="noopener noreferrer">7. 在模块中处理翻译<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_8-tests-in-module" target="_blank" rel="noopener noreferrer">8. 模块中的测试<OutboundLink/></a></li>
</ul>
<h2 id="_0-介绍" tabindex="-1"><a class="header-anchor" href="#_0-介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_0-introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>0. 介绍</h2>
<p>系统的模块化方法通常被认为是传统工程概念的实现<a href="https://stackoverflow.com/questions/14000762/what-does-low-in-coupling-and-high-in-cohesion-mean" target="_blank" rel="noopener noreferrer"><em>高内聚低耦合</em> （打开新窗口）<OutboundLink/></a>. 我们的意思是，一个人可以在不破坏原始流程的情况下<em><strong>扩展</strong></em>其他人的逻辑。<strong>Vue Storefront</strong>也采用了这个概念来确保 3rd 方开发人员的幸福。本章为您打开了<em>1.11</em>版本中新的<strong>Vue Storefront</strong>模块结构的腹部。</p>
<h2 id="_1-如何引导一个模块" tabindex="-1"><a class="header-anchor" href="#_1-如何引导一个模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 如何引导一个模块</h2>
<p>如果开源作者对他们的后代是认真的，那么必须承认，不可能在野外处理所有用例的所有细节。所以创建者应该暴露核心部件的连接点，以便第三方开发人员可以在需要时将他们的狂野逻辑注入工作机器。现在你瞧，丛林被征服了。</p>
<p>当您出于任何原因想要调整任何开源以使其更加出色时，您首先需要寻找的是代码库中的<em>模块</em>。你可以为同一件事命名<em>API</em>、<em>钩子</em>或<em>观察者</em>，但<em>模块</em>基本上在设计中的一个地方代表了所有这些。</p>
<p>在这个秘籍中，我们将介绍如何以最低限度引导模块，以便将我们的逻辑注入机器。我们将探索两种不同的方法，一种用于手动安装，另一种用于使用<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service" target="_blank" rel="noopener noreferrer"><code>CLI</code><OutboundLink/></a>样板生成模块。<em>泰山人，跟上！</em></p>
<p>提示</p>
<p>如果你想知道<em>Manual</em>方式和<em>CLI</em>方式的详细区别，请看<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module" target="_blank" rel="noopener noreferrer">秘诀5. 打包一个模块<OutboundLink/></a></p>
<h3 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>你需要<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"><strong>Vue店面</strong> （打开新窗口）<OutboundLink/></a>实例<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">与<OutboundLink/></a>您机器上的<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">其他基础设施一起安装，<OutboundLink/></a>以构建新模块并测试其工作。</li>
<li>为了您自己的方便，您需要一个您选择的开发编辑器。</li>
<li>你需要<em>Vue店面</em> <a href="https://www.npmjs.com/package/@vue-storefront/cli" target="_blank" rel="noopener noreferrer"><code>CLI</code> （打开新窗口）<OutboundLink/></a><a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service" target="_blank" rel="noopener noreferrer">安装<OutboundLink/></a>在计算机上的<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-cli-bootstrapping" target="_blank" rel="noopener noreferrer">配方乙<OutboundLink/></a>与安装<code>CLI</code>。</li>
</ul>
<h3 id="_2-1。方法-a-手动引导" tabindex="-1"><a class="header-anchor" href="#_2-1。方法-a-手动引导" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-manual-bootstrapping" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-1。方法 A（手动引导）</h3>
<ol>
<li>在<code>./src/modules/example-module</code>您的<strong>Vue Storefront</strong>根路径下创建一个文件夹。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules
<span class="token function">mkdir</span> example-module <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> example-module
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li><code>index.ts</code>在目录中创建文件</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">touch</span> index.ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>打开该文件并记下模块的最小签名</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> from <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token builtin class-name">export</span> const ExampleModule: StorefrontModule <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app, store, router, moduleConfig, appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们在这里导出<em>ExampleModule</em>实现<em>StorefrontModule</em>接口。</p>
<p>看看里面</p>
<p>从<code>./core/lib/modules.ts</code>，您可以查看<em>StorefrontModule</em>签名如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> interface StorefrontModule <span class="token punctuation">{</span> <span class="token punctuation">(</span>
  app: any, <span class="token comment"># app instance (Vue instance)</span>
  store: Store<span class="token operator">&lt;</span>any<span class="token operator">></span>, <span class="token comment"># Vuex store instance</span>
  router: VueRouter, <span class="token comment"># router instance</span>
  moduleConfig: any, <span class="token comment"># module config during registration</span>
  appConfig: any<span class="token punctuation">)</span>: void <span class="token comment"># VSF config</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>从这个签名来看，你可以从你的模块中访问<code>store</code>, <code>router</code>, <code>config</code>s 。</p>
<ol>
<li>*（可选）*添加注释以了解稍后注册的时间：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> from <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token builtin class-name">export</span> const ExampleModule: StorefrontModule <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app, store, router, moduleConfig, appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console.log<span class="token punctuation">(</span><span class="token string">'Hello World and VSF!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># Any punch line allowed!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li>转到父目录 ( <code>./src/modules</code>) 并按<code>index.ts</code>如下方式打开文件：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">vi</span> index.ts <span class="token comment"># here you can use another editor for sure instead of vi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>您可以在此文件中注册您创建的任何模块。现在在这里为我们刚刚创建的模块插入注册，如下所示：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">/* ... abridged */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> PaymentCashOnDeliveryModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./payment-cash-on-delivery'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InstantCheckoutModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./instant-checkout'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ExampleModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./example-module'</span> <span class="token comment">/* Import Example module we just created */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> registerModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerNewModules</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerModule</span><span class="token punctuation">(</span>UrlModule<span class="token punctuation">)</span>
  <span class="token function">registerModule</span><span class="token punctuation">(</span>CatalogModule<span class="token punctuation">)</span>
  <span class="token function">registerModule</span><span class="token punctuation">(</span>CheckoutModule<span class="token punctuation">)</span> 

<span class="token comment">/* ... abridged ... */</span>

  <span class="token function">registerModule</span><span class="token punctuation">(</span>PaymentCashOnDeliveryModule<span class="token punctuation">)</span> 
  <span class="token function">registerModule</span><span class="token punctuation">(</span>AmpRendererModule<span class="token punctuation">)</span>
  <span class="token function">registerModule</span><span class="token punctuation">(</span>InstantCheckoutModule<span class="token punctuation">)</span> 
  
  <span class="token function">registerModule</span><span class="token punctuation">(</span>ExampleModule<span class="token punctuation">)</span> <span class="token comment">// Register Example module we just created</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>提示</p>
<p>模块可以自然地<em>延迟加载</em>。在<em>迟缓装载</em>初始化期间通常具有诸如性能，低开销的一些优势，并且可以允许在更结构化的方式码分离。一个建议是，如果整个应用程序都需要你的模块，最好留在<code>./src/modules/index.ts</code>上面演示的常规位置。相反，如果您的模块被限制并绑定到某个路由或包，那么将它注册到它们内部并延迟加载包可能更明智。</p>
<p>然而，<em>延迟加载</em>也有一个缺点，即您可能无法访问某些钩子，例如<code>afterAppInit</code>因为它们不是惰性的。（意味着仅在应用程序初始化期间触发）</p>
<ol>
<li>在<strong>Vue Storefront</strong>根路径运行命令以引导<strong>Vue Storefront</strong>应用程序</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或没有 <code>docker</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>应用程序启动并运行后，它会吐出大量日志，指示已完成的工作。睁大你的眼睛，如果幸运的话，你会从超快速滚动中选择类似如下的行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ... abridged </span>

app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>GTM<span class="token punctuation">]</span> Google Tag Manager extensions is not working. Ensure Google Tag Manager container ID is defined <span class="token keyword">in</span> config null
app_1  <span class="token operator">|</span> Hello World and VSF<span class="token operator">!</span> <span class="token comment"># YAY! now we know it's successfully registered</span>
app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>module<span class="token punctuation">]</span> VS Modules registration finished. <span class="token punctuation">{</span> succesfulyRegistered: <span class="token string">'0 / 0'</span>, registrationOrder: <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
app_1  <span class="token operator">|</span> Entity cache is enabled <span class="token keyword">for</span> productList null

<span class="token comment"># abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-2。方案-b-cli-引导" tabindex="-1"><a class="header-anchor" href="#_2-2。方案-b-cli-引导" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-cli-bootstrapping" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-2。方案 B（CLI 引导）</h3>
<ol>
<li>转到您的项目文件夹<em>或</em>任何用于新<code>module</code>开发的prestine 文件夹。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> example-folder
<span class="token builtin class-name">cd</span> example-folder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>运行<code>vsf</code>CLI 命令，如下所示：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vsf init:module example-folder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此处模块初始化所需的命令是<code>vsf init:module</code>，您的新模块名称<code>example-folder</code>在这种情况下。</p>
<p>您将看到以下结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Module vsf-example-folder has been succesfully created<span class="token operator">!</span>
 <span class="token builtin class-name">cd</span> vsf-example-folder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>笔记</p>
<p>您可能已经注意到默认情况下为新创建的模块名称添加<code>vsf</code>前缀*<code>vsf</code><em>。这有助于您的模块在</em>[INSERT UPDATE REQUIRED]*期间自动编译</p>
<ol>
<li>结果表明，将您的目录更改为：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vsf-example-folder
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>列出里面的文件如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> *
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>您将看到以下结构：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>package.json  README.md  tsconfig.json

src:
index.ts  store.ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>恭喜你，你现在可以走了。</p>
<p>可以在方法<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module" target="_blank" rel="noopener noreferrer">5. 打包模块中<OutboundLink/></a>找到更多场景</p>
<h3 id="_3-窥视厨房-内部发生的事情" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<p>我们只用了几个简单的步骤就创建了一个模块并成功注册了它。尽管它实际上什么都不做，但在设计中抓住概念就足够了，并帮助您转变为一个很棒的模块开发人员。</p>
<p>我们<code>module</code>在 的领土上建造了我们的房子<code>./src/modules</code>。我们创建了一个名为<code>index.ts</code>所有模块部件组装和导出的门，尽管为了简洁起见我们跳过了构建模块部件，稍后我们将更详细地了解它。相反，我们创建的<code>index.ts</code>是构建模块并声明它是模块所需的最低限度的骨架。</p>
<p>这里<code>index.ts</code>发现一个模块基本上是一个函数，可以访问 Vue 应用程序实例的某些部分并允许与其交互。此外，由于它<code>helpers</code>并<code>hooks</code>伴随着它，还实现了更好的多功能性。</p>
<p>如果你再深入一点，你就会<code>./core/lib/modules.ts</code>发现模块签名和<code>registerModule</code>功能占据了哪些位置。<code>registerModule</code>是努力<code>src/modules/index.ts</code>注册将个人推入<code>registeredModules</code>. （谨防小的差异在那些名字中<code>registerModule</code>，<code>registeredModules</code>，<code>registerModules</code>等等，如果你把它撇去可能会混淆，但它们是正确的，并与匹配的名称自己的角色为宜）</p>
<p>通过这种方法，我们的模块开发体验非常简单，并且<em>Vue 原生 API</em>友好，因此代码变得更简单、更清晰和可维护。</p>
<p>现在您正式成为<strong>Vue Storefront 模块开发人员</strong>。恭喜！</p>
<h3 id="_4-厨师的秘密-protip" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="秘诀一、实际例子中的延迟加载" tabindex="-1"><a class="header-anchor" href="#秘诀一、实际例子中的延迟加载" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-1-lazy-loading-in-practical-examples" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀一、实际例子中的延迟加载</h4>
<h4 id="秘密-2-如何利用模块来构建扩展或与其集成。" tabindex="-1"><a class="header-anchor" href="#秘密-2-如何利用模块来构建扩展或与其集成。" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-2-how-a-module-can-be-leveraged-to-build-extensions-or-integrations-with" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 2. 如何利用模块来构建扩展或与其集成。</h4>
<h4 id="秘密-3-在模块化的边界上" tabindex="-1"><a class="header-anchor" href="#秘密-3-在模块化的边界上" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-3-on-the-border-of-modularity" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 3. 在模块化的边界上</h4>
<h2 id="_2-调整模块的最佳实践" tabindex="-1"><a class="header-anchor" href="#_2-调整模块的最佳实践" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-best-practices-for-tweaking-a-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 调整模块的最佳实践</h2>
<p>一旦你掌握了为模块构建骨架的窍门，现在是时候真正处理模块了。这里有很多机会可以自由构建由各种可用方法驱动的新模块，主要是在工作、扩展和挂钩到 Vue 的主要部分的意义上。</p>
<p>在这个秘籍中，我们逐步介绍了为<em>产品页面中的 Like 按钮</em>构建一个简单模块的步骤。本秘籍浏览每个主题的简要概念以用于演示目的。构建模块的完整细节在方法<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-building-a-module-from-a-to-z-in-an-iteration" target="_blank" rel="noopener noreferrer">7 中<OutboundLink/></a>继续。<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-building-a-module-from-a-to-z-in-an-iteration" target="_blank" rel="noopener noreferrer">从 A 到 Z 构建模块<OutboundLink/></a></p>
<h3 id="_1-准备-1" tabindex="-1"><a class="header-anchor" href="#_1-准备-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>你需要一个新的模块来玩。如果你完成了方法<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer"><em>1，</em><OutboundLink/></a>你就已经有了一个<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer"><em>。 如何引导一个模块</em><OutboundLink/></a></li>
</ul>
<h3 id="_2-1。方案-a-从模块内部扩展-vuex-存储" tabindex="-1"><a class="header-anchor" href="#_2-1。方案-a-从模块内部扩展-vuex-存储" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-extend-vuex-store-from-inside-a-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-1。方案 A（从模块内部扩展 Vuex 存储）</h3>
<p><em>Vue Storefront</em>利用了<em>Vuex</em>的<code>module</code>特性。您可以从全局范围内封装模块的数据，以便您轻松控制对数据的控制。</p>
<ol>
<li>打开<code>index.ts</code>文件<code>example-module</code>at<code>./src/modules/example-module</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">vi</span> index.ts <span class="token comment"># of course you can open it with other editors!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>为模块准备一个商店，如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> exampleModuleStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span>d<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>namespaced</code>with <code>true</code>value 意味着它<code>store</code>被封装在一个模块中，而不是注册到全局存储。</p>
<p><code>state</code> 包含要跟踪的数据对象。</p>
<ol>
<li>注册此<code>store</code>对应用程序的<code>store</code>使用<code>registerModule</code>：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> exampleModuleStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span>d<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>registerModule</code>方法是一个 Vue 原生 API，用于为每个模块动态注册一个 store。<em>Vue Storefront Module</em>使用此方法进行数据存储，以便从全局范围封装模块数据。<a href="https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<p>考虑<code>store</code>作为一个<em>模型</em>以纯MVC模型。</p>
<ol>
<li>您可以将 Vuex 添加<code>plugins</code>到您的商店。</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> store <span class="token operator">=></span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mutation<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'PRESSED_LIKE'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Customer pressed LIKE button on the product'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> exampleModuleStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span>d<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'examplePlugin'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>plugins</code>当您想将事件<em>插入</em>到<code>mutation</code>of时很方便<code>state</code>。</p>
<p><code>mutation</code>是一个包含<code>type</code>和的对象<code>payload</code>。通过检查<code>mutation</code>类型，您可以监听特定类型的状态变化。<a href="https://vuex.vuejs.org/guide/plugins.html" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<p>您不仅可以聆听，<code>mutations</code>还可以聆听<code>actions</code>以下内容：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">subscribeAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>它还提供了<code>before</code>与<code>after</code>当装饰器<code>plugin</code>应该被解雇的事件。（可用<code>3.1.0</code>）<a href="https://vuex.vuejs.org/api/#subscribeaction" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<h3 id="_2-2。配方-b-使用-覆盖-vuex-存储extendstore" tabindex="-1"><a class="header-anchor" href="#_2-2。配方-b-使用-覆盖-vuex-存储extendstore" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-override-vuex-store-with-extendstore" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-2。配方 B（使用 覆盖 Vuex 存储<code>extendStore</code>）</h3>
<p><em>Vue Storefront 的</em>人提出了<em><strong>帮助</strong></em>模块开发人员轻松扩展已注册的同名模块存储的想法。</p>
<ol>
<li>再次打开<code>index.ts</code>文件<code>example-module</code>在<code>./src/modules/example-module</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">vi</span> index.ts <span class="token comment"># of course you can open it with other editors!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li><code>helpers</code>核心导入如下：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendStore<span class="token punctuation">,</span> isServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/helpers'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> store <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li>添加额外的<code>product</code>商店：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ... abridged</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'examplePlugin'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newProductModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    liked<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol>
<li>运行<code>extendStore</code>辅助方法以覆盖或添加到现有商店<code>product</code>，如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">extendStore</span><span class="token punctuation">(</span><span class="token string">'product'</span><span class="token punctuation">,</span> newProductModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li>为了确认扩展成功，我们将使用<a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en" target="_blank" rel="noopener noreferrer">Chrome vue-devtools 扩展 （打开新窗口）<OutboundLink/></a>这在您开发<em>Vue.js</em>应用程序时真的很方便。</li>
</ol>
<p>打开<em>Chrome DevTools</em>并转到<em>Vue</em>选项卡，然后单击<em>Vuex</em>选项卡或单击<code>ctrl</code>+ <code>2</code>。最后点击<em>Register module:product</em>，会看到如下界面，确认<code>product</code>店铺扩展成功：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/product_like_state.d682e618.png" alt="product_liked_borderline"></p>
<p>提示</p>
<p>您可以使用<em>VUE-devtools</em>用于<em>Firefox的</em>，如果你使用<em>的Firefox</em>。安装<a href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/" target="_blank" rel="noopener noreferrer">Firefox vue-devtools（打开新窗口）<OutboundLink/></a></p>
<h3 id="_2-3。方案-c-扩展路由器实例" tabindex="-1"><a class="header-anchor" href="#_2-3。方案-c-扩展路由器实例" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-3-recipe-c-extend-router-instance" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-3。方案 C（扩展路由器实例）</h3>
<p>您还可以使用 Vue 原生 API 为您的模块动态添加路由。</p>
<ol>
<li>创建一个虚拟 Vue 组件<code>Liked.vue</code>只是为了<code>route</code>在<code>components</code>目录中的<code>./src/modules/example-module</code>目录中进行测试。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">mkdir</span> components <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> components <span class="token operator">&amp;&amp;</span> <span class="token function">vi</span> Liked.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>使用虚拟模板代码填充文件，如下所示：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ greeting }} World and you {{liked}}! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      greeting<span class="token operator">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span>
      liked<span class="token operator">:</span> <span class="token string">'Liked it'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol>
<li>返回父目录，打开<code>index.ts</code>文件并在模块路由器上工作，如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendStore<span class="token punctuation">,</span> isServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/helpers'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Liked <span class="token keyword">from</span> <span class="token string">'./components/Liked.vue'</span><span class="token punctuation">;</span> <span class="token comment">// Import the component</span>

<span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> store <span class="token operator">=></span> <span class="token punctuation">{</span>

<span class="token comment">// abridged ...</span>

  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    liked<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> exampleRoutes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'liked'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/liked'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> Liked<span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'/liked.html'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// compose the router we will use</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">extendStore</span><span class="token punctuation">(</span><span class="token string">'product'</span><span class="token punctuation">,</span> newProductModule<span class="token punctuation">)</span><span class="token punctuation">;</span>

  router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>exampleRoutes<span class="token punctuation">)</span> <span class="token comment">// adding routes here</span>
  router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// navigation guards here</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>要添加的路由必须是<em>数组</em>类型，即使它只有一个元素，<code>exampleRoutes</code>如上所示。每个路由对象有<code>name</code>，<code>path</code>，<code>component</code>和<code>alias</code>财产，这是非常简单的了解它们是什么。</p>
<p><code>addRoutes</code> 是 Vue 原生 API，用于向路由器动态添加路由。</p>
<p><code>beforeEach</code>是 Vue API 提供的导航守卫。<a href="https://router.vuejs.org/guide/advanced/navigation-guards.html" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<ol>
<li>打开浏览器并访问<code>/liked</code>我们刚刚创建的路线，然后您将看到如下屏幕：</li>
</ol>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/route_liked.2e7e0836.png" alt="route_liked_borderline"></p>
<h3 id="_2-4。配方-d-使用钩子" tabindex="-1"><a class="header-anchor" href="#_2-4。配方-d-使用钩子" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-4-recipe-d-use-hooks" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-4。配方 D（使用钩子）</h3>
<p>构建模块最直观的方法之一是使用钩子。开源创建者经常故意在他们认为可扩展的任何地方留下尽可能多的钩子，以便 3rd 方开发人员将逻辑注入程序流。在这里，我们将研究<em>Vue Storefront</em>如何做到这一点。</p>
<ol>
<li>再次打开<code>index.ts</code>文件<code>example-module</code>在<code>./src/modules/example-module</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">vi</span> index.ts <span class="token comment"># of course you can open it with other editors!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>进口<code>coreHooks</code>自<code>core</code>：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> extendStore<span class="token punctuation">,</span> isServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/helpers'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StorefrontModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Liked <span class="token keyword">from</span> <span class="token string">'./components/Liked.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> coreHooks  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/hooks'</span><span class="token punctuation">;</span> <span class="token comment">// Import hooks from core</span>

<span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> store <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol>
<li>调用您要使用的任何钩子，如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ...abridged</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">extendStore</span><span class="token punctuation">(</span><span class="token string">'product'</span><span class="token punctuation">,</span> newProductModule<span class="token punctuation">)</span><span class="token punctuation">;</span>

  router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>exampleRoutes<span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  coreHooks<span class="token punctuation">.</span><span class="token function">afterAppInit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// </span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App has just been initialized'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol>
<li>确认它已连接，在<strong>Vue Storefront</strong>根路径运行命令以引导<strong>Vue Storefront</strong>应用程序</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或没有 <code>docker</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该应用程序再次启动并运行，它将吐出大量日志，指示已完成的工作，包括：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>module<span class="token punctuation">]</span> VS Modules registration finished. <span class="token punctuation">{</span> succesfulyRegistered: <span class="token string">'0 / 0'</span>, registrationOrder: <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
app_1  <span class="token operator">|</span> App has just been initialized <span class="token comment"># Successfully Hooked !</span>
app_1  <span class="token operator">|</span> Result from ES <span class="token keyword">for</span> 3e9eb2ab7b4d96276c016ae9d5aa18116483667603e7e84ad2346627 <span class="token punctuation">(</span>category<span class="token punctuation">)</span>,  <span class="token assign-left variable">ms</span><span class="token operator">=</span><span class="token number">613</span> null
app_1  <span class="token operator">|</span> whole request <span class="token punctuation">[</span>/liked<span class="token punctuation">]</span>: 1323ms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>你可以<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks" target="_blank" rel="noopener noreferrer">更深入地<OutboundLink/></a>阅读</p>
<h3 id="_2-5。方案-e-管理模块级config" tabindex="-1"><a class="header-anchor" href="#_2-5。方案-e-管理模块级config" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-5-recipe-e-manage-module-level-config" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-5。方案 E（管理模块级<code>config</code>）</h3>
<p>有时您可能需要传递值以填充模块配置中的字段。我们为您提供了将<code>config</code>对象传递给<code>registerModule</code>函数的能力，让您可以选择何时注册<code>module</code>.</p>
<p>假设您需要使用集成到店面的 3rd 方服务。大多数情况下，您需要向第 3 方提供封装在请求中的 API 凭据，以便他们知道<em>您是您</em>并处理服务并返回属于您的结果。这个秘籍告诉你如何在模块注册期间使用 3rd 方帐户来做到这一点。</p>
<ol>
<li>再次打开<code>index.ts</code>文件<code>example-module</code>在<code>./src/modules/example-module</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">vi</span> index.ts <span class="token comment"># of course you can open it with other editors!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>准备模块以接受<code>moduleConfig</code>您希望允许覆盖值的动态选项，如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ...abridged</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'example-module'</span><span class="token punctuation">,</span> exampleModuleStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ... abridged ...</span>

  <span class="token comment">// Prepare apiKey for a request to a 3rd party to integrate with it, example as follows : </span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">module</span>Config<span class="token punctuation">.</span>apiKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> apiKey <span class="token operator">=</span> <span class="token keyword">module</span>Config<span class="token punctuation">.</span>apiKey
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// raise an error related to failure for sign-in to 3rd party service due to lack of apiKey</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Continue to send a request to the 3rd party as the context demands </span>
  <span class="token comment">// ... abridged for the sake of brevity ...</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apiKey<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This line helps you confirm apiKey value is overridden as intended</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>这表示<code>moduleConfig</code>对象在注册时<code>apiKey</code>具有为<code>module</code>用户提供选择的选项。</p>
<ol>
<li>转到父目录，打开<code>index.ts</code>它<code>./src/modules/index.ts</code>并修复代码如下：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ... abridged </span>

  <span class="token function">registerModule</span><span class="token punctuation">(</span>AmpRendererModule<span class="token punctuation">)</span>
  <span class="token function">registerModule</span><span class="token punctuation">(</span>InstantCheckoutModule<span class="token punctuation">)</span> 
  
  <span class="token function">registerModule</span><span class="token punctuation">(</span>ExampleModule<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    apiKey<span class="token operator">:</span> <span class="token string">"YOUR_VALUABLE_API_KEY_ON_THE_FLY"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Here you pass config object as you want it</span>
<span class="token punctuation">}</span>

<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol>
<li>为了确认<code>moduleConfig</code>按计划传递的选项，在<strong>Vue Storefront</strong>根路径运行命令以引导<strong>Vue Storefront</strong>应用程序</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或没有 <code>docker</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>应用程序再次启动并运行，现在查找我们注入的部分：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>module<span class="token punctuation">]</span> VS Modules registration finished. <span class="token punctuation">{</span> succesfulyRegistered: <span class="token string">'0 / 0'</span>, registrationOrder: <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
app_1  <span class="token operator">|</span> YOUR_VALUABLE_API_KEY_ON_THE_FLY <span class="token comment"># moduleConfig injected successfully !</span>
app_1  <span class="token operator">|</span> Calling asyncData <span class="token keyword">in</span> Home <span class="token punctuation">(</span>theme<span class="token punctuation">)</span> null
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>你可以<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-configuration" target="_blank" rel="noopener noreferrer">更深入地<OutboundLink/></a>阅读</p>
<h3 id="_2-6。配方-f-访问应用程序级config" tabindex="-1"><a class="header-anchor" href="#_2-6。配方-f-访问应用程序级config" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-6-recipe-f-access-app-level-config" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-6。配方 F（访问应用程序级<code>config</code>）</h3>
<p>当您在<em>Vue Storefront 中</em>构建<em>模块</em>时，您还可以访问应用程序的. 是文件夹的编译版本，通常是. 当您需要访问时，您可以在一个.<code>config``config``./config``local.json``config``module</code></p>
<ol>
<li>再次打开<code>index.ts</code>文件<code>example-module</code>在<code>./src/modules/example-module</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/modules/example-module
<span class="token function">vi</span> index.ts <span class="token comment"># of course you can open it with other editors!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>调用<code>config</code>内部 a的节点，<code>module</code>如下所示：</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ... abridged </span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleModule<span class="token operator">:</span> <span class="token function-variable function">StorefrontModule</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span> store<span class="token punctuation">,</span> router<span class="token punctuation">,</span> <span class="token keyword">module</span>Config<span class="token punctuation">,</span> appConfig<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">.</span>products<span class="token punctuation">.</span>defaultFilters<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  "products": {"defaultFilters": ["color", "size", "price", "erin_recommends"]}</span>

<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol>
<li>如果您引导<em>Vue Storefront</em>应用程序，您可以看到如下日志：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>GTM<span class="token punctuation">]</span> Google Tag Manager extensions is not working. Ensure Google Tag Manager container ID is defined <span class="token keyword">in</span> config null
app_1  <span class="token operator">|</span> <span class="token punctuation">[</span> <span class="token string">'color'</span>, <span class="token string">'size'</span>, <span class="token string">'price'</span>, <span class="token string">'erin_recommends'</span> <span class="token punctuation">]</span> <span class="token comment"># here we go! successfully fetched global app config</span>
app_1  <span class="token operator">|</span> <span class="token punctuation">[</span>module<span class="token punctuation">]</span> VS Modules registration finished. <span class="token punctuation">{</span> succesfulyRegistered: <span class="token string">'0 / 0'</span>, registrationOrder: <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
app_1  <span class="token operator">|</span> This is one way to use moduleConfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-7。方案-g-设置服务器模块" tabindex="-1"><a class="header-anchor" href="#_2-7。方案-g-设置服务器模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-7-recipe-g-setting-up-server-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-7。方案 G（设置服务器模块）</h3>
<p>我们强烈建议在 Vue Storefront 前使用某种 HTTP 服务器作为代理。让它成为<code>nginx</code>（在我们的<a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html" target="_blank" rel="noopener noreferrer">生产设置文档中<OutboundLink/></a>建议）<code>Varnish</code>或什至<code>Apache</code>. 这些 HTTP 服务器中的任何一个都允许您在 Vue Storefront 之前添加一些授权或重定向层。</p>
<p>这是推荐的方式。</p>
<h4 id="_1-高级输出处理" tabindex="-1"><a class="header-anchor" href="#_1-高级输出处理" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-advanced-output-processing" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 高级输出处理</h4>
<p>但是，通过使用<a href="https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#how-it-works" target="_blank" rel="noopener noreferrer">高级输出处理，<OutboundLink/></a>您可以轻松地从您想要的 Vue Storefront 站点生成任何文本数据输出。包括 JSON、XML 等。这是一种生成站点地图和其他基于数据的文档的方法。</p>
<h4 id="_2-express-js中间件" tabindex="-1"><a class="header-anchor" href="#_2-express-js中间件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-express-js-middleware" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2.<code>Express.js</code>中间件</h4>
<p>另一种选择是创建一个<code>Express.js</code>中间件。我们<code>core/scripts/server.ts</code>是一个经典的 Node.js 应用程序，所以它应该很容易。为此，您可能需要创建一个<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/compress/server.ts" target="_blank" rel="noopener noreferrer">服务器模块 （打开新窗口）<OutboundLink/></a>.</p>
<p>服务器模块位于<code>src/modules</code>并始终具有<code>server.ts</code>响应少数服务器入口点之一的入口点：</p>
<ul>
<li><code>afterProcessStarted</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L13" target="_blank" rel="noopener noreferrer">在服务器启动后立即<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L13" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</li>
<li><code>afterApplicationInitialized</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L34" target="_blank" rel="noopener noreferrer">在 Express 应用程序初始化后立即<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L34" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>. 这是绑定新请求处理程序 ( <code>app.get(...)</code>, <code>app.use(...)</code>)的一个很好的切入点。阅读有关<a href="https://expressjs.com/en/guide/routing.html" target="_blank" rel="noopener noreferrer">Express.js 请求处理程序和路由的更多信息 （打开新窗口）<OutboundLink/></a>.</li>
<li><code>beforeOutputRenderedResponse</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L189" target="_blank" rel="noopener noreferrer">在 SSR 渲染完成后<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L189" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>但在将其发送到浏览器之前；它允许您用自己的内容覆盖呈现的 SSR 内容。</li>
<li><code>afterOutputRenderedResponse</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L212" target="_blank" rel="noopener noreferrer">在高级输出处理管道之后<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L212" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>执行。</li>
<li><code>beforeCacheInvalidated</code>, <code>afterCacheInvalidated</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L76" target="_blank" rel="noopener noreferrer">在缓存失效之前和之后<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L76" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>这是一个<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/google-cloud-trace/server.ts" target="_blank" rel="noopener noreferrer">如何绑定<OutboundLink/></a>的<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/google-cloud-trace/server.ts" target="_blank" rel="noopener noreferrer">示例 （打开新窗口）<OutboundLink/></a>服务器进程启动后的跟踪模块：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serverHooks <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/server/hooks'</span>

serverHooks<span class="token punctuation">.</span><span class="token function">afterProcessStarted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> trace <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@google-cloud/trace-agent'</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'trace'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'trace.enabled'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    trace<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'trace.config'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/compress/server.ts" target="_blank" rel="noopener noreferrer">另一个例子 （打开新窗口）<OutboundLink/></a>- 非常常见的情况 - 在 SSR 渲染管道（包括自定义 URL 地址）处理所有用户请求之前，绑定新的 Express 中间件来处理所有用户请求：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serverHooks <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/server/hooks'</span>

<span class="token keyword">const</span> compression <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'compression'</span><span class="token punctuation">)</span>
serverHooks<span class="token punctuation">.</span><span class="token function">afterApplicationInitialized</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> isProd <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isProd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Output Compression is enabled'</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">compression</span><span class="token punctuation">(</span><span class="token punctuation">{</span> enabled<span class="token operator">:</span> isProd <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>如果你想绑定自定义 URL 地址，这个例子可以这样修改：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serverHooks <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/server/hooks'</span>

serverHooks<span class="token punctuation">.</span><span class="token function">afterApplicationInitialized</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> isProd <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/custom-url-address'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Custom response'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-窥视厨房-内部发生的事情-1" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<h3 id="_4-厨师的秘密-protip-1" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h2 id="_3-钩入钩子" tabindex="-1"><a class="header-anchor" href="#_3-钩入钩子" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.钩入钩子</h2>
<p>Hooks 是核心开发人员编写的常用开发方法，允许 3rd 方开发人员或模块开发人员在程序的预定义位置注入自己的逻辑。使用这种方法，软件可以灵活设计，从而有助于处理最初设计时未知的问题。</p>
<p>核心开发人员通常会努力优化放置钩子的位置。在<em>Vue Storefront 中</em>，钩子通常属于两组。其中之一是<code>listener</code>; 它允许我们在应用程序生命周期的某个时刻做一些事情。另一个是<code>mutator</code>; 它允许我们在应用程序执行某些操作之前修改内部对象。</p>
<p>在这个秘籍中，我们将研究它们的位置以及如何将其应用于您的<em>模块</em>开发。</p>
<h3 id="_1-准备-2" tabindex="-1"><a class="header-anchor" href="#_1-准备-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>你需要一个新的模块来玩。如果你完成了方法<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer"><em>1，</em><OutboundLink/></a>你就已经有了一个<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module" target="_blank" rel="noopener noreferrer"><em>。 如何引导一个模块</em><OutboundLink/></a></li>
<li>您需要<a href="https://docs.vuestorefront.io/guide/cookbook/multistores" target="_blank" rel="noopener noreferrer">设置multistores<OutboundLink/></a>（我们假设你已经设置另一家店了，其<code>storeCode</code>是<code>de</code>）</li>
</ul>
<p>注意</p>
<p>这个秘籍处理<a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-9-1-10" target="_blank" rel="noopener noreferrer"><em>1.10 的</em><OutboundLink/></a>钩子。如果您使用其他版本的<em>Vue Storefront</em>，请记住它们在细节上可能有所不同。</p>
<h3 id="_2-食谱" tabindex="-1"><a class="header-anchor" href="#_2-食谱" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<p>客观的</p>
<p>我们构建了一个<code>storeviews</code>仅对某些人应用折扣的模块。</p>
<ol>
<li>对模块的要求列表如下：</li>
</ol>
<ul>
<li>需要<em>配置</em>哪些<code>storeviews</code>可能适用于折扣以及它应该是多少。</li>
<li>需要对<code>category</code>,<code>product</code>页中的产品价格应用折扣。</li>
<li>需要应验证折扣的点列表。</li>
</ul>
<ol>
<li>现在从第一项开始，为要使用的模块创建<em>配置</em>。</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  discountStore<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"enableDiscountPerStoreViews"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"storeViewsToApplyTo"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"de"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"globalDiscountInPercentage"</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token property">"allowLocalOverride"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>discountStore
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含我们模块的配置节点。</p>
<ul>
<li><code>enableDiscountPerStoreViews</code> ：该值决定是否启用该模块。</li>
<li><code>storeViewsToApplyTo</code>：这个数组包含<code>storeviews</code>代码。</li>
<li><code>globalDiscountInPercentage</code>：这个值是应该对目标应用多少折扣<code>storeviews</code>。</li>
<li><code>allowLocalOverride</code> ：此值允许动态覆盖折扣。</li>
</ul>
</li>
</ul>
<ol>
<li>创建一个名为<em>hookExample</em>的模块（根据自己的喜好更改）</li>
</ol>
<h3 id="_3-窥视厨房-内部发生的事情-2" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<h3 id="_4-厨师的秘密-protip-2" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="secret-1-钩子列表" tabindex="-1"><a class="header-anchor" href="#secret-1-钩子列表" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-1-the-list-of-hooks" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Secret 1. 钩子列表</h4>
<ol>
<li><code>cart</code></li>
</ol>
<ul>
<li><code>beforeSync</code> ：</li>
<li><code>afterSync</code> ：</li>
<li><code>beforeAddToCart</code> ：</li>
<li><code>afterAddToCart</code> ：</li>
<li><code>beforeRemoveFromCart</code> ：</li>
<li><code>afterRemoveFromCart</code> ：</li>
</ul>
<ol>
<li><code>order</code></li>
</ol>
<ul>
<li><code>beforePlaceOrder</code> ：</li>
<li><code>afterPlaceOrder</code> ：</li>
</ul>
<ol>
<li><code>user</code></li>
</ol>
<ul>
<li><code>afterUserAuthorize</code> ：</li>
<li><code>afterUserUnauthorize</code> ：</li>
</ul>
<ol>
<li><code>app</code> <em>全球层面</em></li>
</ol>
<ul>
<li><code>beforeStoreViewChange</code> ：</li>
<li><code>afterStoreViewChange</code> ：</li>
<li><code>afterAppInit</code> ：</li>
</ul>
<p>注意</p>
<p>该列表当然可能会发生变化，它会随着每个核心模块的增长而增长，以处理所有用例。</p>
<h4 id="秘诀2-核心钩子设计" tabindex="-1"><a class="header-anchor" href="#秘诀2-核心钩子设计" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-2-the-core-hooks-design" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀2.核心钩子设计</h4>
<h4 id="秘诀-3-不用钩子再次重写模块" tabindex="-1"><a class="header-anchor" href="#秘诀-3-不用钩子再次重写模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-3-rewriting-the-module-again-without-the-hooks" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀 3. 不用钩子再次重写模块</h4>
<h2 id="_4-关于模块配置" tabindex="-1"><a class="header-anchor" href="#_4-关于模块配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-module-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 关于模块配置</h2>
<p><em>配置</em>是开发人员设计的选项的基本模板，用户可以根据自己的喜好进行更改。所做和保存的这些更改将根据配置值在其生命周期中改变软件的进程。</p>
<p><em>配置</em>往往有默认值，这需要程序的默认行为，这样用户就不必担心他们对默认行为是否满意。通过使用默认值精心设计的<em>配置</em>，可以实现具有灵活性的最佳用户体验。</p>
<h3 id="_1-准备-3" tabindex="-1"><a class="header-anchor" href="#_1-准备-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<h3 id="_2-食谱-1" tabindex="-1"><a class="header-anchor" href="#_2-食谱-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<h3 id="_3-窥视厨房-内部发生的事情-3" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<h3 id="_4-厨师的秘密-protip-3" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h2 id="_5-打包一个模块" tabindex="-1"><a class="header-anchor" href="#_5-打包一个模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>5. 打包一个模块</h2>
<p><em>手动</em>引导模块是轻而易举的，因为最小签名所需的骨架非常简单明了。<em><code>CLI</code><em>然而，与方法相比，<em>手动</em>方法通常更适合</em>本地</em>开发，换句话说，使用<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-manual-bootstrapping" target="_blank" rel="noopener noreferrer">手动方法<OutboundLink/></a>构建项目特定模块以获得更好的可读性。相比之下，*<code>CLI</code>*method 可以<code>npm</code>通过为您提供样板来帮助您轻松地将模块构建为包。</p>
<h3 id="_1-准备-4" tabindex="-1"><a class="header-anchor" href="#_1-准备-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<h3 id="_2-食谱-2" tabindex="-1"><a class="header-anchor" href="#_2-食谱-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<h3 id="_3-窥视厨房-内部发生的事情-4" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<h3 id="_4-厨师的秘密-protip-4" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h2 id="_6-使用扩展-elasticsearch-请求体-storefront-query-builder" tabindex="-1"><a class="header-anchor" href="#_6-使用扩展-elasticsearch-请求体-storefront-query-builder" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_6-extend-elasticsearch-request-body-using-storefront-query-builder" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>6. 使用扩展 Elasticsearch 请求体 <code>storefront-query-builder</code></h2>
<p>如果您使用的是新 <a href="https://github.com/vuestorefront/storefront-query-builder" target="_blank" rel="noopener noreferrer"><code>storefront-query-builder</code> （打开新窗口）<OutboundLink/></a>和<code>api-search-query</code>搜索适配器（<a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-11-1-12" target="_blank" rel="noopener noreferrer">随 v1.1.12 引入<OutboundLink/></a>）现在可以通过新过滤器扩展它，甚至覆盖现有过滤器，以自定义您的 Elasticsearch 请求体。</p>
<p>因此，通过这种方式，您可以将自定义 Elasticsearch 查询添加到查询链中，并且仍然使用<code>SearchQuery</code>Vue Storefront 中的符号。</p>
<blockquote>
<p>**注意：**这仅适用于<code>storefront-query-builder</code>version<code>1.0.0</code>和<code>vue-storefront</code>version <code>1.12.2</code>。</p>
</blockquote>
<h3 id="用例" tabindex="-1"><a class="header-anchor" href="#用例" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#usecases" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用例</h3>
<p>此功能派上用场的一个用例是，例如，如果您想在源代码中的多个点上添加复杂的查询。使用以下技术，您可以<code>SearchQuery</code>使用该<code>query.applyFilter(...)</code>方法在 VSF 源代码中的一行中添加自定义过滤器，然后将复杂逻辑添加到 API 内的自定义过滤器中。</p>
<h3 id="注册新过滤器" tabindex="-1"><a class="header-anchor" href="#注册新过滤器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#registering-a-new-filter" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>注册新过滤器</h3>
<p>在<code>vue-storefront-api</code>将只尝试加载那些在configs注册过滤器。必须启用包含过滤器的扩展/模块，并且需要在<code>catalogFilter</code>数组内的扩展配置中注册新的过滤器模块类。过滤器文件必须位于<code>filter/catalog/</code>您的模块文件夹内。</p>
<p>例如：如果您使用名为<code>extend-catalog</code>的过滤器调用了一个模块，则过滤器<code>StockFilter</code>的文件路径将是<code>src/api/extensions/extend-catalog/filter/catalog/StockFilter.ts</code>，配置将如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "registeredExtensions": [ "extend-catalog" ],
  "extensions": {
    "extend-catalog": {
      "catalogFilter": [ "StockFilter" ]
    }
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="过滤器模块类属性" tabindex="-1"><a class="header-anchor" href="#过滤器模块类属性" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#filter-module-class-properties" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>过滤器模块类属性</h3>
<p>过滤器可以包含四个不同的属性。接下来是简短的解释，他们在做什么。</p>
<ul>
<li><code>check</code>– 此方法检查执行过滤器必须匹配的条件。执行第一个有效过滤器 - 之后的所有过滤器都将被忽略。</li>
<li><code>priority</code>– 这是将调用过滤器的优先级。排序从低到高。</li>
<li><code>mutator</code> – mutator 方法负责预先处理过滤器值，例如设置默认值或检查和更改类型。</li>
<li><code>filter</code>– 此方法包含我们不想添加的查询逻辑并改变<code>bodybuilder</code>查询链。</li>
</ul>
<h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#example" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>例子</h3>
<p>让我们假设我们想添加一种可能性来添加一组默认的产品属性过滤器，我们可以将其应用于每个过滤器，<code>SearchQuery</code>而无需在源代码中重复我们自己。因此，例如，它应该过滤两个<code>color</code>和一个特定<code>cut</code>的过滤器，以便为我们在 VSF 中的多个位置实现的弹簧色短裤提供过滤器。</p>
<h4 id="vue-storefront存储库中的更改" tabindex="-1"><a class="header-anchor" href="#vue-storefront存储库中的更改" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#changes-in-vue-storefront-repository" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>vue-storefront</code>存储库中的更改</h4>
<p>VSF 代码中的查询看起来像这样（在 VSF 端就是这样）：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SearchQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'storefront-query-builder'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> quickSearchByQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/search'</span>

<span class="token comment">//...</span>

<span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
query<span class="token punctuation">.</span><span class="token function">applyFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">'spring-shorts'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span> scope<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'product/list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> query<span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="vue-storefront-api存储库中的更改" tabindex="-1"><a class="header-anchor" href="#vue-storefront-api存储库中的更改" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#changes-in-vue-storefront-api-repository" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>vue-storefront-api</code>存储库中的更改</h4>
<p>在<code>vue-storefront-api</code>我们将添加真正的过滤器/查询魔法。已经有一个示例模块被调用<code>example-custom-filter</code>，我们将用于我们的过滤器。</p>
<p>当您查看其模块文件夹时<code>src/api/extensions/example-custom-filter/</code>，您会发现一个子文件夹，<code>filter/catalog/</code>其中包含该模块的所有现有自定义过滤器。在这个文件夹中，我们将把现有的复制<code>SampleFilter.ts</code>到另一个名为的文件夹中<code>SpringShorts.ts</code>——这是我们新的自定义过滤器模块类。</p>
<p>这个文件需要在配置 JSON 中注册，让 API 知道我们的扩展中有一个新的自定义过滤器。
因此，您打开您的<code>default.json</code>或特定的配置 JSON 文件并将我们的新文件名添加<code>SpringShorts</code>到配置节点<code>extensions.example-custom-filter.catalogFilter</code>数组。</p>
<p>我们<code>SpringShorts.ts</code>的对象包含<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#filter-module-class-properties" target="_blank" rel="noopener noreferrer">四个属性<OutboundLink/></a>：<code>priority</code>, <code>check</code>, <code>filter</code>, <code>mutator</code>。我们不需要<code>mutator</code>nor <code>priority</code>，所以我们可以删除这些行。<code>check</code>并且<code>filter</code>需要改变以满足我们的需求。所以，这就是我们的过滤器最终的样子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FilterInterface <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'storefront-query-builder'</span>

<span class="token keyword">const</span> filter<span class="token operator">:</span> FilterInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">check</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> attribute <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> attribute <span class="token operator">===</span> <span class="token string">'spring-shorts'</span><span class="token punctuation">,</span>
  <span class="token function">filter</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> operator<span class="token punctuation">,</span> queryChain <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> queryChain
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'terms'</span><span class="token punctuation">,</span> <span class="token string">'pants'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token string">'shorts'</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'terms'</span><span class="token punctuation">,</span> <span class="token string">'cut'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'terms'</span><span class="token punctuation">,</span> <span class="token string">'color'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'terms'</span><span class="token punctuation">,</span> <span class="token string">'gender'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> value <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> filter
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在里面，<code>check</code>我们告诉过滤器只在属性命名为精确时应用<code>spring-shorts</code>。</p>
<p>在内部，<code>filter</code>我们使用<code>bodybuilder</code>库语法通过所需的过滤器扩展 Elasticsearch 查询链。</p>
<p>就是这样，现在我们可以只在 VSF 中的一行中通过复杂的查询进行过滤。</p>
<h2 id="_7-在模块中处理翻译" tabindex="-1"><a class="header-anchor" href="#_7-在模块中处理翻译" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-working-with-translations-in-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>7. 在模块中处理翻译</h2>
<p>翻译在<code>core/i18n/resource/i18n/{your-locale}.csv</code>文件中提供，可以相应地扩展或覆盖<code>src/modules/{my-module}/resource/i18n/{your-locale}.csv</code>，但<code>src/themes/{my-theme}/resource/i18n</code>翻译自<code>src/module/{my-module}/resource/i18n</code>.</p>
<h3 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#example-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>例子</h3>
<p>下面是一个例子<code>en-US.csv</code>的<code>en-US</code>语言环境：</p>
<div class="language-csv ext-csv line-numbers-mode"><pre v-pre class="language-csv"><code><span class="token value">"customMessage"</span><span class="token punctuation">,</span><span class="token value">"Here is the core message that can be overwritten in the module"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当您在<code>en-US.csv</code>文件<code>src/modules/{my-module}/resource/i18n/</code>夹中创建文件并覆盖一些消息时，例如：</p>
<div class="language-csv ext-csv line-numbers-mode"><pre v-pre class="language-csv"><code><span class="token value">"customMessage"</span><span class="token punctuation">,</span><span class="token value">"You can define or override translation messages here."</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>...您可能会期望它<code>$t('customMessage')</code>会返回<code>You can define or override translation messages here.</code>而不是<code>Here is the core message. that can be overwritten in the module</code>.</p>
<h2 id="_8-模块中的测试" tabindex="-1"><a class="header-anchor" href="#_8-模块中的测试" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_8-tests-in-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>8. 模块中的测试</h2>
<p>我们的 jest 配置允许您为您创建的每个模块编写测试。</p>
<p>要创建测试，您必须在<code>src/modules/{my-module}/test/unit/</code>. 该文件必须以<code>.spec.ts</code>或结尾<code>.spec.js</code>。通常，它必须匹配以下模式：<code>src/modules/{my-module}/test/unit/{my-test}.spec.(js|ts)</code>.</p>
</template>
