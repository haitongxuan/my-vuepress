<template><h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1>
<p>提醒</p>
<p>这份文件是<em>存档</em>和<em>不</em>具有这是最新版本的有关<code>1.11</code>在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>介绍</h2>
<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#table-of-contents" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>目录</h3>
<p><strong>介绍和动机</strong></p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#what-are-vs-modules" target="_blank" rel="noopener noreferrer">什么是 VS 模块<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#motivation" target="_blank" rel="noopener noreferrer">动机<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#what-is-the-purpose-of-vs-modules" target="_blank" rel="noopener noreferrer">VS 模块的目的是什么？<OutboundLink/></a></li>
</ul>
<p><strong>技术部分</strong></p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-config-and-capabilities" target="_blank" rel="noopener noreferrer">模块配置及其功能<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-file-structure" target="_blank" rel="noopener noreferrer">模块文件结构<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-registration" target="_blank" rel="noopener noreferrer">模块注册<OutboundLink/></a></li>
</ul>
<p><strong>常见用例的模式和良好实践</strong></p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#general-rules-and-good-practices" target="_blank" rel="noopener noreferrer">一般规则和良好做法<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#adding-new-features-as-vs-modules" target="_blank" rel="noopener noreferrer">添加新功能作为 VS 模块<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#extending-and-overriding-vue-storefront-modules" target="_blank" rel="noopener noreferrer">扩展和覆盖 Vue Storefront 模块<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#Creating-3rd-party-modules" target="_blank" rel="noopener noreferrer">创建第三方模块<OutboundLink/></a></li>
</ul>
<h3 id="什么是-vs-模块" tabindex="-1"><a class="header-anchor" href="#什么是-vs-模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#what-are-vs-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>什么是 VS 模块？</h3>
<p>您可以将每个模块视为 Vue Storefront 中可用的一个独立功能，其中包含其所有逻辑和依赖项。然而，这一<em>特征</em>是一个共同点，它将内部的所有特征联系起来。例如，将产品添加到购物车、接收购物车中的商品列表或应用购物车优惠券的公分母显然是 a<code>cart</code>并且<code>cart</code>不是任何大于其自身的特征（其公分母是商店）所以它应该是一个模块。Wishlist、Reviews 或 Newsletter 也是该模块的好例子，因为我们直观地将它们视为独立的功能。</p>
<h4 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#motivation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>动机</h4>
<p>我相信一个明显的比喻可以清楚地描述问题，同时，解决方案。</p>
<p>为了更好地说明整个概念，我将尝试用乐高积木来解释它。</p>
<p>假设我们有一个装有 90 块乐高积木的盒子，我们可以用它来建造一些奇特的东西，例如塔、城堡或直升机。不幸的是，由于一些愚蠢的欧盟规定，我们的盒子里只能有 3 种不同颜色的积木。众所周知，对于可以建造的每个结构，并非每种颜色都是准确的，因此我们需要不时地在商店中将一种颜色与另一种颜色交换，以便获得最适合我们下一个乐高项目的颜色的积木.</p>
<p>很酷，但有一个问题——因为我们把所有的积木都放在一个盒子里，它们看起来或多或少如下：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/pile_of_legos.8c6300ed.png" alt="乐高"></p>
<p>当我们想用黑色的砖块替换绿砖时，我们需要在所有其他砖块中分别寻找每块绿砖，这会花费很多时间......而且我们仍然有可能会错过一些其中！更不用说找到我们正在建造的棕榈树所需的特定绿色砖块 ( <img src="data:image/jpeg;base64,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" alt="这个！">) 将需要在所有其他砖块中寻找它，这会使这项任务变得极其困难和耗时。</p>
<p>这显然不是我们希望以我们的小乐高帝国结束的情况。我们也不希望它与 Vue Storefront 一起使用，因为它意味着易于扩展，因此您可以将绿色砖块（或当前用户购物车功能/cms 提供商/cms 内容提供商）替换为黑色砖块（具有多个购物车的不同购物车功能，WordPress 代替） Prismic 的内容等），而无需在所有积木中寻找每一个积木，也不必担心您会错过其中的一些，否则欧盟将没收您拥有的所有积木！我们还希望更容易找到我们现在想要完成这棵该死的棕榈树的正确砖块！</p>
<p>那么我们如何让这种可怕的情况变得更好呢？</p>
<p>介绍......（鼓声在背景中堆积）*<strong>按颜色分组的砖块*</strong>！（在后台哇）</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/organized_lego_bricks.3b6473e7.jpeg" alt="乐高2"></p>
<p>当我们将积木按颜色分组（并在单独的框 - 模块中）时，更容易找到棕榈树所需的绿色积木，因为我们只需要搜索所有积木的一小部分。此外，当我们想用黑色砖块替换绿色砖块时，不是一一寻找所有绿色代表，而是将它们的盒子替换为装有黑色砖块的盒子。我们也不必担心是否有遗漏，因为我们知道所有的绿砖都在盒子里。</p>
<p>这就是我们在 Vue Storefront 中寻找的模块化和可扩展性以及我们目前正在将其重写的架构。</p>
<h3 id="vs-模块的目的是什么" tabindex="-1"><a class="header-anchor" href="#vs-模块的目的是什么" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#what-is-the-purpose-of-vs-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>VS 模块的目的是什么？</h3>
<p>在<a href="https://github.com/vuestorefront/vue-storefront/issues/1213" target="_blank" rel="noopener noreferrer">这个讨论中<OutboundLink/></a>很好地描述了目的<a href="https://github.com/vuestorefront/vue-storefront/issues/1213" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>. 可以概括为：</p>
<ul>
<li><strong>更好的可扩展性</strong>：我们可以扩展每个模块或用新的模块完全替换它。例如，我们可能希望将 Cart 模块替换为允许拥有多个购物车的模块。使用模块方法，我们可以分离当前的 Cart 模块并将其替换为新的模块。另一个例子可以是为不同的内容 CMSes 集成等使用不同的模块。</li>
<li><strong>更好的开发人员体验</strong>：除了模块，我们还引入了许多功能，专注于为开发人员提供更好、更轻松的体验，让他们以更可预测的方式继续前进。我们改变了您使用功能、添加单元测试、TypeScript 接口等组合组件的方式。</li>
<li><strong>更好的可升级性</strong>：每个模块都是一个单独的 NPM 包，因此可以独立升级，并且由于它封装了所有逻辑，因此在分离、修改或替换时不应该破坏应用程序的任何其他部分。</li>
</ul>
<h3 id="模块配置和功能" tabindex="-1"><a class="header-anchor" href="#模块配置和功能" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-config-and-capabilities" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>模块配置和功能</h3>
<p>Module config 是实例化 VS 模块所需的对象。您提供的配置对象稍后用于扩展和挂钩到应用程序的不同部分（例如路由器、Vuex 等）。请将此对象用作负责扩展 Vue Storefront 的唯一部分。否则它可能会在一些破坏性的核心更新后停止工作。</p>
<p>应将具有提供的配置的 Vue Storefront 模块对象导出到<code>index.ts</code>入口点。理想情况下，它应该是一个与模块键名称相同的<em>导出</em>。</p>
<p>Vue Storefront Module 的签名如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">VueStorefrontModuleConfig</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> string<span class="token punctuation">;</span>
  store<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    modules<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> string<span class="token punctuation">,</span> module<span class="token operator">:</span> Module<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">></span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    plugin<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  router<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    routes<span class="token operator">?</span><span class="token operator">:</span> RouteConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    beforeEach<span class="token operator">?</span><span class="token operator">:</span> NavigationGuard<span class="token punctuation">,</span>
    afterEach<span class="token operator">?</span><span class="token operator">:</span> NavigationGuard<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  beforeRegistration<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">VSF</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  afterRegistration<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">VSF</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/index.ts" target="_blank" rel="noopener noreferrer">在这里<OutboundLink/></a>查看代码<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/index.ts" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<h4 id="key-必需的" tabindex="-1"><a class="header-anchor" href="#key-必需的" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#key-required" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>key</code> （必需的）</h4>
<p>键是模块的 ID。它用于标识您的模块并在该模块关联的所有基于密钥的扩展中设置密钥（例如，创建命名空间存储）。这个键应该是唯一的。</p>
<h4 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>store</code></h4>
<p>Vuex 的入口点。</p>
<ul>
<li><code>modules</code> - 在给定键下注册的 Vuex 模块数组</li>
<li><code>plugin</code> - 你可以在这里提供你自己的 Vuex 插件</li>
</ul>
<h4 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#router" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>router</code></h4>
<p>vue-router 的入口点。您可以提供额外的路线和<a href="https://router.vuejs.org/guide/advanced/navigation-guards.html" target="_blank" rel="noopener noreferrer">导航守卫 （打开新窗口）<OutboundLink/></a>这里。</p>
<h4 id="beforeregistration" tabindex="-1"><a class="header-anchor" href="#beforeregistration" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#beforeregistration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>beforeRegistration</code></h4>
<p>在服务器端和客户端注册模块之前将调用的函数。您可以在此处访问 VSF 对象。</p>
<p>该<code>VSF</code>对象是您的 Vue Storefront 商店的一个实例。它包含以下属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    Vue<span class="token operator">?</span><span class="token operator">:</span> VueConstructor<span class="token punctuation">,</span>
    config<span class="token operator">?</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    store<span class="token operator">?</span><span class="token operator">:</span> Store<span class="token operator">&lt;</span>RootState<span class="token operator">></span><span class="token punctuation">,</span>
    isServer<span class="token operator">?</span><span class="token operator">:</span> boolean
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="afterregistration" tabindex="-1"><a class="header-anchor" href="#afterregistration" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#afterregistration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>afterRegistration</code></h4>
<p>在服务器端和客户端注册模块后将调用的函数。您可以在此处访问 VSF 对象。</p>
<p>该<code>VSF</code>对象是您的 Vue Storefront 商店的一个实例。它包含以下属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    Vue<span class="token operator">?</span><span class="token operator">:</span> VueConstructor<span class="token punctuation">,</span>
    config<span class="token operator">?</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    store<span class="token operator">?</span><span class="token operator">:</span> Store<span class="token operator">&lt;</span>RootState<span class="token operator">></span><span class="token punctuation">,</span>
    isServer<span class="token operator">?</span><span class="token operator">:</span> boolean
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="模块文件结构" tabindex="-1"><a class="header-anchor" href="#模块文件结构" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-file-structure" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>模块文件结构</h3>
<p>您可以在下面看到 VS 模块的推荐文件结构。所有的核心都是以这种方式组织的。尝试在您创建的文件中使用类似的文件结构。如果所有模块都使用类似的架构来实现，那么维护和理解它们会容易得多。请避免对设计进行不必要的更改，除非另有要求。</p>
<p>并非所有这些文件夹和文件都应该存在于每个模块中。唯一的强制性文件是<code>index.ts</code>哪个是入口点。其余的取决于您的需求和模块功能。</p>
<p>你可以看看<a href="https://github.com/vuestorefront/vue-storefront/tree/master/core/modules/module-template" target="_blank" rel="noopener noreferrer">模块模板 （打开新窗口）<OutboundLink/></a>带有配置中列出的所有功能的示例实现。</p>
<ul>
<li>
<p><code>components</code>- 与此模块相关的组件逻辑（例如 Cart 模块的 Microcart）。通常它包含<code>.ts</code>文件，但<code>.vue</code>如果组件需要开箱即用，您也可以创建文件并提供一些基线标记。</p>
</li>
<li>
<p><code>pages</code>- 如果您想提供模块的完整页面，请将它们放在这里。为这些页面扩展路由器配置也是一个好习惯</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>store
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>- 与此模块关联的 Vuex 模块。你也可以在这里放置 Vuex 模块扩展</p>
<ul>
<li><code>index.ts</code>- Vuex 模块的入口点和主要出口。如果逻辑太复杂而无法将其保存在一个文件中，则可以将操作/getter/mutations 拆分为不同的文件。应该在<code>store</code>配置属性中使用。</li>
<li><code>mutation-types.ts</code> - 由变量表示的变异字符串代替普通字符串使用</li>
<li><code>plugins.ts</code>- 放置 vuex 插件的好地方。应该在<code>store.plugins</code>配置对象中使用</li>
</ul>
</li>
<li>
<p><code>types</code> - 与模块关联的 TypeScript 类型</p>
</li>
<li>
<p><code>test</code>- 包含每个新模块或重写模块<em>所需的</em>单元测试的文件夹。</p>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hooks
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>- 在模块注册之前和之后调用的之前/之后的钩子。</p>
<ul>
<li><code>beforeRegistration.ts</code>- 应该在<code>beforeRegistration</code>配置属性中使用。</li>
<li><code>afterRegistration.ts</code>- 应该在<code>afterRegistration</code>配置属性中使用。</li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>router
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>- 与此模块相关的路线和导航守卫</p>
<ul>
<li><code>routes.ts</code>- 将添加到当前路由器配置的路由对象数组。应该在<code>router.routes</code>配置属性中使用。</li>
<li><code>beforeEach.ts</code>- beforeEach 导航守卫。应该在<code>router.beforeEach</code>配置属性中使用。</li>
<li><code>afterEach.ts</code>- afterEach 导航守卫。应该在<code>router.afterEach</code>配置属性中使用。</li>
</ul>
</li>
<li>
<p><code>queries</code> - GraphQL 查询</p>
</li>
<li>
<p><code>helpers</code> - 旨在支持模块行为的所有其他内容</p>
</li>
<li>
<p><code>index.js</code>- 模块的入口点。应该导出 VueStorefrontModule。它也是实例化缓存存储的好地方。</p>
</li>
</ul>
<h3 id="模块注册" tabindex="-1"><a class="header-anchor" href="#模块注册" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#module-registration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>模块注册</h3>
<p>包括核心模块在内的所有模块都在<code>src/modules/index.ts</code>文件中注册。由于这种方法，您可以在注册之前轻松修改任何核心模块对象（<a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#extending-and-overriding-vue-storefront-modules" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>阅读更多内容）。</p>
<p>所有 VS 模块<code>registerModules</code>都将在商店初始化期间注册。</p>
<hr>
<h3 id="一般规则和良好做法" tabindex="-1"><a class="header-anchor" href="#一般规则和良好做法" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#general-rules-and-good-practices" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>一般规则和良好做法</h3>
<p>首先，看看模块模板。它包含很好的例子、良好的实践和对可以放在模块中的所有内容的解释。</p>
<ol>
<li><strong>最重要的规则</strong>尝试隔离模块正常工作所需的所有逻辑，并将它们放入模块中。您可以从应用程序的其他部分导入它，但逻辑本身应该存在于模块中</li>
<li><strong>尽量不要依赖任何其他模块。将所有内容封装起来，只依赖核心助手和库</strong>。仅当这是实现功能和<code>rootStore</code>为此目的导入的唯一方法时才使用其他商店。模块应该独立工作并且只依赖于它们自己。尝试将每个模块视为独立的 npm 包。</li>
<li>将所有可重用功能作为 Vuex 操作（例如<code>addToCart(product)</code>，<code>subscribeNewsletter()</code>等）放置，而不是将它们放置在组件中。尝试使用 getter 来修改或过滤状态中的值。我们正在尝试将大部分逻辑放在 Vuex 商店中，以便更轻松地进行核心更新。这是这种外化的一个很好的例子。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Microcart <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Microcart'</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">productsInCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>cartItems<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">appliedCoupon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> AppliedCoupon <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">'cart/coupon'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">totals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CartTotalSegments <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">'cart/totals'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">isMicrocartOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>microcart<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">applyCoupon</span><span class="token punctuation">(</span>code<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>boolean<span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'cart/applyCoupon'</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">removeCoupon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>boolean<span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'cart/removeCoupon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">toggleMicrocart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'ui/toggleMicrocart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol>
<li>如果您想通知核心组件方法的成功/失败，您可以使用回调或作用域事件。如果您认为可以从模板调用该函数并且您需要解析的值，请省略 Promises。这是您可以在 on<code>template</code>或<code>script</code>section 中调用的方法的一个很好的示例：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">addToCart</span><span class="token punctuation">(</span><span class="token parameter">product<span class="token punctuation">,</span> success<span class="token punctuation">,</span> failure</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'cart/addToCart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span>
    <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span>
    <span class="token function">failure</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>尝试根据用例选择一种方法。<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/mailchimp/components/Subscribe.ts#L28" target="_blank" rel="noopener noreferrer">这个 （打开新窗口）<OutboundLink/></a>是使用回调的一个很好的例子。</p>
<ol>
<li>创建可以使用不同参数轻松调用的纯函数。<code>data</code>仅在需要时才依赖属性而不是参数（例如，它们在<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/mailchimp/components/Subscribe.ts#L28" target="_blank" rel="noopener noreferrer">此处<OutboundLink/></a>验证<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/mailchimp/components/Subscribe.ts#L28" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>)</li>
<li>建立文件像如下出口组件：<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/mailchimp/components/Subscribe.ts" target="_blank" rel="noopener noreferrer">文件（打开新窗口）<OutboundLink/></a></li>
<li>如果您的模块核心功能是与外部服务的集成，最好将其命名为与此服务相同的名称（例如<code>mailchimp</code>）</li>
<li>使用命名导出和类型检查。</li>
</ol>
<h3 id="添加新功能作为-vs-模块" tabindex="-1"><a class="header-anchor" href="#添加新功能作为-vs-模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#adding-new-features-as-vs-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>添加新功能作为 VS 模块</h3>
<ul>
<li>如果您想创建一个新模块，请复制内容<code>src/module-template</code>并使用您需要的部分。</li>
<li>如果您正在创建一项新功能，请注意它不仅仅是扩展现有功能。如果您确定要提供的功能是全新的，则应将其作为新的 VS 模块引入。</li>
<li>提供应代表功能或第 3 方系统名称的唯一键（如果模块是集成）</li>
<li>如果您的模块未声称直接扩展它，请尽量不要依赖来自其他模块的数据和逻辑。这样做，即使在大量 VS 核心更新之后，它也可以保证继续工作并且更容易重用。</li>
</ul>
<h3 id="扩展和覆盖-vue-storefront-模块" tabindex="-1"><a class="header-anchor" href="#扩展和覆盖-vue-storefront-模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#extending-and-overriding-vue-storefront-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展和覆盖 Vue Storefront 模块</h3>
<p>可以扩展，并且通过提供一个修改的任何登记前的Vue店面模块的所有部分<code>VueStorefrontModuleConfig</code>的对象<strong>使用相同的密钥</strong>对<code>extendModule()</code>的功能。这个配置会和同一个key的模块深度合并，也就是说：</p>
<ul>
<li>所有具有相同键的 Vuex 存储将被合并（冲突的动作/突变将被覆盖，其他的将被添加）</li>
<li>如果提供前/后钩子，存储插件或路由器对象属性等叶子将被新的覆盖。</li>
</ul>
<p>让我们看一个例子，假设我们想<code>cart</code>通过覆盖它的<code>beforeRegistration</code>钩子和<code>load</code>Vuex 动作来扩展模块。</p>
<ol>
<li>首先，我们需要准备一个<code>VueStorefrontModuleConfig</code>我们将用来扩展<code>cart</code>模块的。它必须与<code>key</code>我们要扩展的模块具有相同的值。</li>
<li>接下来我们需要将此对象传递给<code>extendModule</code>函数</li>
<li>就这样！现在，当您注册<code>cart</code>模块时，它将使用提供的配置进行扩展。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Cart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/modules/cart'</span>

<span class="token comment">// 1. Preparation of new VSMConfig</span>
<span class="token keyword">const</span> extendCartVuex <span class="token operator">=</span> <span class="token punctuation">{</span>
 actions<span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token function">load</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'hey'</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">extendCartAfterRegistration</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">VSF</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Hello, im extended now!'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token keyword">const</span> cartExtend <span class="token operator">=</span> <span class="token punctuation">{</span>
 key<span class="token operator">:</span> <span class="token string">'cart'</span><span class="token punctuation">,</span>
 afterRegistration<span class="token operator">:</span> extendCartAfterRegistration<span class="token punctuation">,</span>
 store<span class="token operator">:</span> <span class="token punctuation">{</span> modules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">'cart'</span><span class="token punctuation">,</span> module<span class="token operator">:</span> extendCartVuex <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. After passing the object to extendModule function it will be merged with Cart module during registration</span>
<span class="token function">extendModule</span><span class="token punctuation">(</span>cartExtend<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> registerModules<span class="token operator">:</span> VueStorefrontModule<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Cart<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>如果您想对自己的特定于应用程序的 VS 模块（不是 npm 包）进行复杂的更改，最好将此模块保留在<code>src/modules/{module-name}</code>. 要使用另一个模块扩展模块，只需将其配置传递给<code>extendModule</code>函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Cart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/modules/cart'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ExtendCartModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'extend-cart'</span><span class="token punctuation">;</span>


<span class="token function">extendModule</span><span class="token punctuation">(</span>ExtendCartModule<span class="token punctuation">.</span>config<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> registerModules<span class="token operator">:</span> VueStorefrontModule<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Cart<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="创建第三方模块" tabindex="-1"><a class="header-anchor" href="#创建第三方模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#creating-third-party-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>创建第三方模块</h3>
<p>如果您想创建第三方模块，只需将<code>src/modules/module-template</code>原始代码复制到您的仓库即可。不要使用任何转译和构建工具，因为它会阻止适当的树抖动和优化。构建过程由 Vue Storefront 构建工具处理。包名称需要以<code>vsf-</code>前缀开头才能包含在 Vue Storefront 构建过程中。</p>
<h3 id="贡献" tabindex="-1"><a class="header-anchor" href="#贡献" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#contributions" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>贡献</h3>
<p>请将每个新功能作为独立的封装模块介绍。我们还需要您的帮助，将 Vue Storefront 重写为模块化方法 -<a href="https://github.com/vuestorefront/vue-storefront/issues?q=is%3Aissue+is%3Aopen+label%3A%22API+Module%22" target="_blank" rel="noopener noreferrer">在这里 （打开新窗口）<OutboundLink/></a>您可以<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/refactoring-to-modules.md" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>找到与此架构更改相关的任务<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/refactoring-to-modules.md" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>是关于如何应用这些更改的教程。</p>
<h2 id="购物车模块" tabindex="-1"><a class="header-anchor" href="#购物车模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#cart-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>购物车模块</h2>
<p>该模块包含与购物车操作相关的所有逻辑、组件和商店。</p>
<h3 id="成分" tabindex="-1"><a class="header-anchor" href="#成分" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#components" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>成分</h3>
<h4 id="添加到购物车" tabindex="-1"><a class="header-anchor" href="#添加到购物车" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#addtocart" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>添加到购物车</h4>
<p>此组件代表一个按钮，按下该按钮可将产品添加到购物车。</p>
<p><strong>道具</strong></p>
<ul>
<li><code>product</code> - 将添加到购物车的产品</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>addToCart(product)</code>- 将传递的产品添加到购物车。默认情况下与<code>product</code>prop相关</li>
</ul>
<h4 id="微型车" tabindex="-1"><a class="header-anchor" href="#微型车" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#microcart" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>微型车</h4>
<p>带有产品列表和价格摘要的用户购物车。</p>
<p><strong>计算</strong></p>
<ul>
<li><code>productsInCart</code> - 当前在购物车中的一系列产品</li>
<li><code>appliedCoupon</code>- 返回已应用的购物车优惠券或<code>false</code>如果未应用优惠券</li>
<li><code>totals</code> - 购物车总数</li>
<li><code>isMicrocartOpen</code>-<code>true</code>如果微型车打开，则返回</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>applyCoupon(code)</code> - 应用购物车优惠券</li>
<li><code>removeCoupon</code> - 删除当前应用的购物车优惠券</li>
<li><code>toggleMicrocart</code> - 打开/关闭微型车</li>
</ul>
<h4 id="小车按钮" tabindex="-1"><a class="header-anchor" href="#小车按钮" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#microcartbutton" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>小车按钮</h4>
<p>负责打开/关闭 Microcart 的组件</p>
<p><strong>计算</strong></p>
<ul>
<li><code>quantity</code> - 购物车中的产品数量</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>toggleMicrocart</code> - 打开/关闭微型车</li>
</ul>
<h4 id="产品" tabindex="-1"><a class="header-anchor" href="#产品" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>产品</h4>
<p>代表微型购物车中的产品的组件。允许修改它的数量或从购物车中删除。</p>
<p><strong>计算</strong></p>
<ul>
<li><code>thumbnail</code> - 返回产品缩略图的 src</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>removeFromCart</code>-<code>product</code>从购物车中删除当前产品（数据属性）</li>
<li><code>updateQuantity</code>- 更新当前产品的购物车数量（数据属性<code>product</code>）</li>
</ul>
<h3 id="店铺" tabindex="-1"><a class="header-anchor" href="#店铺" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h3>
<p>Cart Store 旨在处理与购物车相关的所有操作。</p>
<h4 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    itemsAfterPlatformTotals<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    platformTotals<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    platformTotalSegments<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    cartIsLoaded<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    cartServerToken<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// server side ID to synchronize with Backend (for example Magento)</span>
    shipping<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    payment<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    cartItemsHash<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    bypassCount<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    cartItems<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// TODO: check if it's properly namespaced</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>购物车状态<code>localForage</code>在页面加载后自动从集合中加载，只要<code>core/components/blocks/Microcart.vue</code>包含。购物车状态通过调度<code>cart/load</code>操作加载，并<a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/index.js#L118" target="_blank" rel="noopener noreferrer">通过购物车状态的任何更改自动存储 （打开新窗口）<OutboundLink/></a>.</p>
<p>购物车状态数据：</p>
<ul>
<li><code>itemsAfterPlatformTotals</code>- 助手集合，字典，其中键是 Magento 购物车项目<code>item_id</code>，存储每个项目的总计信息 - 从 Magento 接收；<code>config.cart.synchronize_totals</code>启用时会自动填充；</li>
<li><code>platformTotals</code>- 与上述项目类似，这里我们有来自 Magento 的当前购物车的全部总数。这些集合由<a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/actions.js#L49" target="_blank" rel="noopener noreferrer"><code>cart/syncTotals</code> （打开新窗口）<OutboundLink/></a>和事件处理程序 <a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L30" target="_blank" rel="noopener noreferrer"><code>servercart-after-totals</code>（打开新窗口）<OutboundLink/></a></li>
<li><code>cartIsLoaded</code> (bool) - 调度后为真 <code>cart/load</code></li>
<li><code>shipping</code>- （对象）当前选择的送货方式 - 仅在不使用时<code>cart.synchronize_totals</code>（如果是这样，送货和付款数据来自 Magento2），</li>
<li><code>payment</code>- （对象）当前选择的送货方式 - 仅在不使用时<code>cart.synchronize_totals</code>（如果是这样，送货和付款数据来自 Magento2），</li>
<li><code>cartItems</code>- 收集购物车物品；项目格式与[ElasticSearch 数据格式中](https://github.com/vuestorefront/vue-storefront/blob/master/doc/ElasticSearch data formats.md)描述的相同[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/ElasticSearch data formats.md)-<code>product</code>班级；唯一的区别<code>qty</code>是添加了 (int)字段</li>
</ul>
<h4 id="活动" tabindex="-1"><a class="header-anchor" href="#活动" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#events" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>活动</h4>
<p>以下事件是从<code>cart</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('cart-after-itemchanged', { item: cartItem })</code> - 之后执行 <a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108" target="_blank" rel="noopener noreferrer"><code>servercart-after-itemupdated</code> （打开新窗口）<OutboundLink/></a>- 服务器购物车同步后，表示特定购物车项目已更改；<code>Microcart/Product.vue</code>组件订阅此事件以刷新购物车 UI</li>
<li><code>EventBus.$emit('cart-before-add', { product: item })</code> - 在产品添加到购物车后触发，</li>
<li><code>EventBus.$emit('cart-before-save', { items: state.cartItems })</code> - 在保存产品购物车后触发，</li>
<li><code>EventBus.$emit('cart-before-delete', { items: state.cartItems })</code> - 在使用当前购物车状态删除购物车项目之前触发的事件（删除项目之前）</li>
<li><code>EventBus.$emit('cart-after-delete', { items: state.cartItems })</code> - 在使用当前购物车状态删除购物车项目之前触发的事件（删除项目之后）</li>
<li><code>EventBus.$emit('cart-before-itemchanged', { item: record })</code>- 在要更改特定项目属性之前调用的项目；例如调用时<a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108" target="_blank" rel="noopener noreferrer"><code>servercart-after-itemupdated</code> （打开新窗口）<OutboundLink/></a>将要更改<code>server_item_id</code>属性</li>
<li><code>EventBus.$emit('cart-after-itemchanged', { item: record })</code>- 在更改特定项目属性后调用的项目；例如调用时<a href="https://github.com/vuestorefront/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108" target="_blank" rel="noopener noreferrer"><code>servercart-after-itemupdated</code> （打开新窗口）<OutboundLink/></a>将要更改<code>server_item_id</code>属性</li>
<li><code>EventBus.$emit('application-after-loaded')</code>-<code>cart/load</code>在分派动作后调用的事件，以通知购物车可用，</li>
<li><code>EventBus.$emit('cart-after-updatetotals', { platformTotals: totals, platformTotalSegments: platformTotalSegments })</code>- 在 Magento 的总数与当前状态同步后调用的事件；只有在<code>cart.synchronize_totals</code>启用选项时才会发出它。</li>
</ul>
<h4 id="行动" tabindex="-1"><a class="header-anchor" href="#行动" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h4>
<p>购物车商店提供以下公共操作：</p>
<h5 id="disconnect-context" tabindex="-1"><a class="header-anchor" href="#disconnect-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#disconnect-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>disconnect (context)</code></h5>
<p>用于清除当前服务器购物车id的Helper方法（用于购物车同步）</p>
<h5 id="clear-context" tabindex="-1"><a class="header-anchor" href="#clear-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#clear-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>clear (context)</code></h5>
<p>在下订单后调用此方法以清空<code>cartItems</code>集合并在<code>cart.synchronize_totals</code>设置为 true时创建新的服务器购物车</p>
<h5 id="save-context" tabindex="-1"><a class="header-anchor" href="#save-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#save-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>save (context)</code></h5>
<p>用于将购物车保存到<code>localForage</code>浏览器集合的方法</p>
<h5 id="sync-context-forceclientstate-false" tabindex="-1"><a class="header-anchor" href="#sync-context-forceclientstate-false" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#sync-context-forceclientstate-false" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>sync (context, { forceClientState = false })</code></h5>
<p>此方法用于在服务器和当前客户端状态之间来回同步购物车项目的当前状态。当<code>forceClientState</code>设置为 false 时，通信是单向的（客户端 -&gt; 服务器）。当<code>cart.synchronize</code>设置为 true时，会在任何购物车更改时自动调用此操作。</p>
<h5 id="synctotals-context-forceclientstate-false" tabindex="-1"><a class="header-anchor" href="#synctotals-context-forceclientstate-false" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#synctotals-context-forceclientstate-false" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>syncTotals (context, { forceClientState = false })</code></h5>
<p>每当购物车总数应该与服务器同步时（在 之后<code>serverPull</code>），就会调用方法。此方法覆盖本地购物车总计和特定项目值（例如折扣后的价格）。</p>
<h5 id="connect-context-guestcart-false" tabindex="-1"><a class="header-anchor" href="#connect-context-guestcart-false" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#connect-context-guestcart-false" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>connect (context, { guestCart = false })</code></h5>
<p>分派操作以创建服务器购物车并存储购物车 ID（用于进一步同步）</p>
<h5 id="load-context" tabindex="-1"><a class="header-anchor" href="#load-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#load-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>load (context)</code></h5>
<p>此方法从<code>localForage</code>浏览器状态管理加载购物车项目。</p>
<h5 id="getitem-commit-dispatch-state-sku" tabindex="-1"><a class="header-anchor" href="#getitem-commit-dispatch-state-sku" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getitem-commit-dispatch-state-sku" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>getItem ({ commit, dispatch, state }, sku)</code></h5>
<p>此操作用于搜索购物车中的特定商品（按 SKU）</p>
<h5 id="additem-commit-dispatch-state-producttoadd-forceserversilence-false" tabindex="-1"><a class="header-anchor" href="#additem-commit-dispatch-state-producttoadd-forceserversilence-false" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#additem-commit-dispatch-state-producttoadd-forceserversilence-false" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>addItem ({ commit, dispatch, state }, { productToAdd, forceServerSilence = false })</code></h5>
<p>此操作用于添加<code>productToAdd</code>到购物车，如果<code>config.cart.synchronize</code>设置为 true ，则随后调用的下一个操作将<code>serverPull</code>同步购物车。<code>cart-before-add</code>每当新产品进入购物车时都会调用该事件。该选项<code>forceServerSilence</code>用于绕过服务器同步，例如，在...同步过程中添加项目以避免循环同步周期。</p>
<h5 id="removeitem-commit-dispatch-product" tabindex="-1"><a class="header-anchor" href="#removeitem-commit-dispatch-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#removeitem-commit-dispatch-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>removeItem ({ commit, dispatch }, product)</code></h5>
<p>正如您想象的那样 😃 此操作只是将产品从购物车中移除，并在设置时同步服务器购物车。您必须至少指定<code>product.sku</code>.</p>
<h5 id="updatequantity-commit-dispatch-product-qty-forceserversilence-false" tabindex="-1"><a class="header-anchor" href="#updatequantity-commit-dispatch-product-qty-forceserversilence-false" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#updatequantity-commit-dispatch-product-qty-forceserversilence-false" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>updateQuantity ({ commit, dispatch }, { product, qty, forceServerSilence = false })</code></h5>
<p>每当用户更改购物车中的产品数量（从 调用）时，都会调用此方法<code>Microcart.vue</code>。该参数<code>qty</code>是产品的新数量，通过使用<code>forceServerSilence</code>您可以控制是否正在执行服务器购物车同步。</p>
<h5 id="updateitem-commit-product" tabindex="-1"><a class="header-anchor" href="#updateitem-commit-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#updateitem-commit-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>updateItem ({ commit }, { product })</code></h5>
<p>更新项目属性。</p>
<h5 id="syncpaymentmethods-context" tabindex="-1"><a class="header-anchor" href="#syncpaymentmethods-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#syncpaymentmethods-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>syncPaymentMethods (context)</code></h5>
<p>从后端获取付款方式列表并将它们保存到<code>cart.payment</code>存储状态。</p>
<h5 id="syncshippingmethods-context-address" tabindex="-1"><a class="header-anchor" href="#syncshippingmethods-context-address" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#syncshippingmethods-context-address" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>syncShippingMethods (context, address)</code></h5>
<p>从后端获取运输方式列表并将它们保存到<code>cart.shipping</code>存储状态。国家 ID 在强制<code>address</code>参数中传递给此方法。</p>
<h5 id="synctotals-context-methodsdata" tabindex="-1"><a class="header-anchor" href="#synctotals-context-methodsdata" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#synctotals-context-methodsdata" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>syncTotals (context, methodsData)</code></h5>
<p>此方法向后端发送请求以收集购物车总数。它根据付款和运输方式信息是否可用来调用不同的后端端点。</p>
<h4 id="吸气剂" tabindex="-1"><a class="header-anchor" href="#吸气剂" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getters" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>吸气剂</h4>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<ul>
<li><code>getCartToken</code>- 获取当前的购物车令牌，如果为空，则意味着我们需要<code>cart/connect</code>在与服务器同步之前调用一个操作，</li>
<li><code>getLastSyncDate</code> - 这是一个整数，最后一次购物车与服务器同步的时间戳</li>
<li><code>getLastTotalsSyncDate</code> - 整数，与服务器同步的最后总数的时间戳，</li>
<li><code>getShippingMethod</code> - 对象，在结帐中获取当前选择的运输方式，</li>
<li><code>getPaymentMethod</code> - 对象，获取在结帐中选择的当前付款方式，</li>
<li><code>getLastCartHash</code>- 获取最后保存的购物车项目的哈希/HMAC + 服务器令牌，让您可以跟踪运输车的变化。服务器同步正在保存哈希，</li>
<li><code>getCurrentCartHash</code>- 获取购物车项目的当前哈希/HMAC + 服务器令牌。将它与<code>getLastCartHash</code>值进行比较，让您知道我们是否需要服务器同步，</li>
<li><code>isCartHashChanged</code>-比较<code>getLastCartHash</code>与<code>getCurrentCartHash</code>以验证是否需要一台服务器同步与否，</li>
<li><code>isSyncRequired</code>- 检查是否<code>isCartHashChanged</code>为真或这是第一次同步尝试（在 SSR 之后），</li>
<li><code>isTotalsSyncRequired</code>- 与<code>isSyncRequired</code>但总计（不是购物车项目）相同，</li>
<li><code>isCartHashEmtpyOrChanged</code>- 检查是否为<code>isCartHashChanged</code>空，</li>
<li><code>getCartItems</code> - 购物车中的一系列产品，</li>
<li><code>isTotalsSyncEnabled</code>- 检查是否<code>config.cart.synchronize</code>为真 + 如果我们在线 + 如果这是 CSR 请求，</li>
<li><code>isCartConnected</code>- 检查是否<code>getCartToken</code>不为空 - 这意味着该<code>cart/connect</code>操作已被调用，我们可以与服务器同步，</li>
<li><code>isCartSyncEnabled</code>- 与<code>isTotalsSyncEnabled</code>总计（<code>config.cart.synchronize_totals</code>标志）相同，</li>
<li><code>getTotals</code> - 包含总段的数组，</li>
<li><code>getItemsTotalQuantity</code> - 获取购物车中所有商品的总和，</li>
<li><code>getCoupon</code> - 获取当前应用的折扣代码，</li>
</ul>
<h2 id="用户模块" tabindex="-1"><a class="header-anchor" href="#用户模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#user-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用户模块</h2>
<p>该模块包含与用户帐户相关的所有逻辑、组件和存储</p>
<h3 id="成分-1" tabindex="-1"><a class="header-anchor" href="#成分-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#components-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>成分</h3>
<h4 id="帐户按钮" tabindex="-1"><a class="header-anchor" href="#帐户按钮" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#accountbutton" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>帐户按钮</h4>
<p>处理重定向到用户帐户页面和用户注销的组件。通常用于标题。</p>
<p><strong>计算</strong></p>
<ul>
<li><code>isLoggedIn</code> - 表示用户是否已登录；</li>
<li><code>user</code> - 当前用户。</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>goToAccount</code>- 用户是否已登录，将用户重定向到帐户页面。否则显示注册模式</li>
<li><code>logout</code>- 发出<code>user-before-logout</code>事件并将用户重定向到主页</li>
</ul>
<h4 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#login" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>登录</h4>
<p><strong>方法</strong></p>
<ul>
<li><code>close</code> - 关闭注册模式</li>
<li><code>callLogin</code>- 启动身份验证过程，使用用户的电子邮件和密码发出<code>notification-progress-start</code>，调用<code>user/login</code>操作。</li>
<li><code>switchElem</code>-<code>setAuthElem</code>使用<code>register</code>参数触发突变</li>
<li><code>callForgotPassword</code>-<code>setAuthElem</code>使用<code>forgot-pass</code>参数触发突变</li>
</ul>
<h4 id="登记" tabindex="-1"><a class="header-anchor" href="#登记" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#register" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>登记</h4>
<p><strong>方法</strong></p>
<ul>
<li><code>switchElem</code>-<code>setAuthElem</code>使用<code>register</code>参数触发突变</li>
<li><code>close</code> - 关闭注册模式</li>
<li><code>callRegister</code>-使用用户的电子邮件、密码、名字和姓氏开始注册过程，发出<code>notification-progress-start</code>、调用<code>user/register</code>操作。</li>
</ul>
<h4 id="用户帐号" tabindex="-1"><a class="header-anchor" href="#用户帐号" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#useraccount" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用户帐号</h4>
<p><strong>方法</strong></p>
<ul>
<li><code>onLoggedIn</code>- 设置<code>currentUser</code>和<code>userCompany</code>。此方法在<code>user-after-loggedin</code>总线事件上调用</li>
<li><code>edit</code>- 将<code>isEdited</code>标志设置为<code>true</code></li>
<li><code>objectsEqual (a, b, excludedFields = [])</code> - 检查两个传递的对象是否彼此相等</li>
<li><code>updateProfile</code>- 使用新数据更新用户配置文件。调用方法<code>exitSection(null, updatedProfile)</code></li>
<li><code>exitSection</code>-<code>myAccount-before-updateUser</code>使用更新的用户配置文件发出总线事件。将组件用户数据重置为默认值。</li>
<li><code>getUserCompany</code> - 找到用户公司</li>
<li><code>getCountryName</code> - 查找用户国家名称</li>
</ul>
<h4 id="用户发货详情" tabindex="-1"><a class="header-anchor" href="#用户发货详情" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#usershippingdetails" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用户发货详情</h4>
<p><strong>方法</strong></p>
<ul>
<li><code>onLoggedIn</code>- 设置<code>currentUser</code>和<code>shippingDetails</code>。此方法在<code>user-after-loggedin</code>总线事件上调用</li>
<li><code>edit</code>- 将<code>isEdited</code>标志设置为<code>true</code></li>
<li><code>updateDetails</code>- 使用新数据更新运输详细信息。调用方法<code>updatedShippingDetails</code></li>
<li><code>exitSection</code>- 发出<code>myAccount-before-updateUser</code>带有更新运输详细信息的总线事件。将组件用户数据重置为默认值</li>
<li><code>fillCompanyAddress</code> - 查找运输详细信息</li>
<li><code>getCountryName</code> - 查找国家名称</li>
<li><code>hasBillingAddres</code>-<code>true</code>如果用户有账单地址则返回</li>
</ul>
<h3 id="店铺-1" tabindex="-1"><a class="header-anchor" href="#店铺-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h3>
<p>用户存储旨在处理与用户帐户相关的所有操作。所有与用户相关的数据都存储在原始电子商务 CMS/Magento 中，修改操作直接针对平台 API 执行。</p>
<h4 id="状态-1" tabindex="-1"><a class="header-anchor" href="#状态-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    token<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>用户状态数据：</p>
<ul>
<li><code>token</code> - 这是从当前用户获得的令牌 <a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L64" target="_blank" rel="noopener noreferrer"><code>user/login</code> （打开新窗口）<OutboundLink/></a>. 它用于使用当前用户身份授权所有后续调用。如果此令牌不为空，则表示用户已获得授权。</li>
<li><code>current</code> - 这是从接收到的当前用户对象 <a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L105" target="_blank" rel="noopener noreferrer"><code>user/me</code> （打开新窗口）<OutboundLink/></a>- 在登录操作后立即调用。</li>
</ul>
<p>用户数据格式：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span>
    <span class="token property">"group_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"default_billing"</span><span class="token operator">:</span> <span class="token string">"62"</span><span class="token punctuation">,</span>
    <span class="token property">"default_shipping"</span><span class="token operator">:</span> <span class="token string">"48"</span><span class="token punctuation">,</span>
    <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2018-01-23 15:30:00"</span><span class="token punctuation">,</span>
    <span class="token property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"2018-03-04 06:39:28"</span><span class="token punctuation">,</span>
    <span class="token property">"created_in"</span><span class="token operator">:</span> <span class="token string">"Default Store View"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"pkarwatka28@example.pl"</span><span class="token punctuation">,</span>
    <span class="token property">"firstname"</span><span class="token operator">:</span> <span class="token string">"Piotr"</span><span class="token punctuation">,</span>
    <span class="token property">"lastname"</span><span class="token operator">:</span> <span class="token string">"Karwatka"</span><span class="token punctuation">,</span>
    <span class="token property">"store_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"website_id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
        <span class="token property">"customer_id"</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span>
        <span class="token property">"region"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"region_code"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"region"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"country_id"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Street"</span><span class="token punctuation">,</span> <span class="token string">"12"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"postcode"</span><span class="token operator">:</span> <span class="token string">"51-169"</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"City"</span><span class="token punctuation">,</span>
        <span class="token property">"firstname"</span><span class="token operator">:</span> <span class="token string">"Piotr"</span><span class="token punctuation">,</span>
        <span class="token property">"lastname"</span><span class="token operator">:</span> <span class="token string">"Karwatka"</span><span class="token punctuation">,</span>
        <span class="token property">"default_shipping"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">62</span><span class="token punctuation">,</span>
        <span class="token property">"customer_id"</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span>
        <span class="token property">"region"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"region_code"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"region"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"country_id"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
        <span class="token property">"street"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Street"</span><span class="token punctuation">,</span> <span class="token string">"12"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"example"</span><span class="token punctuation">,</span>
        <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"postcode"</span><span class="token operator">:</span> <span class="token string">"51-169"</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"City"</span><span class="token punctuation">,</span>
        <span class="token property">"firstname"</span><span class="token operator">:</span> <span class="token string">"Piotr"</span><span class="token punctuation">,</span>
        <span class="token property">"lastname"</span><span class="token operator">:</span> <span class="token string">"Karwatka"</span><span class="token punctuation">,</span>
        <span class="token property">"vat_id"</span><span class="token operator">:</span> <span class="token string">"PL8951930748"</span><span class="token punctuation">,</span>
        <span class="token property">"default_billing"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"disable_auto_group_change"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h4 id="活动-1" tabindex="-1"><a class="header-anchor" href="#活动-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#events-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>活动</h4>
<p>以下事件是从<code>user</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('session-after-started')</code>-<a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L22" target="_blank" rel="noopener noreferrer">在应用程序加载后立即<OutboundLink/></a>执行<a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L22" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>并且用户界面会话已经开始</li>
<li><code>EventBus.$emit('user-after-loggedin', res)</code>- 在成功的<a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L123" target="_blank" rel="noopener noreferrer">动作调用<OutboundLink/></a>后执行<a href="https://github.com/vuestorefront/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L123" target="_blank" rel="noopener noreferrer"><code>user/me</code> （打开新窗口）<OutboundLink/></a>- 这样的用户已被授权和配置文件加载</li>
</ul>
<h4 id="行动-1" tabindex="-1"><a class="header-anchor" href="#行动-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h4>
<p>用户商店提供了以下的公共行为：</p>
<h5 id="startsession-context" tabindex="-1"><a class="header-anchor" href="#startsession-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#startsession-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>startSession (context)</code></h5>
<p>只是为了标记会话启动和加载从令牌当前用户<code>localForage</code>-为进一步使用。</p>
<h5 id="resetpassword-context-email" tabindex="-1"><a class="header-anchor" href="#resetpassword-context-email" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#resetpassword-context-email" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>resetPassword (context, { email })</code></h5>
<p>调用<code>vue-storefront-api</code>端点发送密码重置链接到指定<code>email</code>地址</p>
<h5 id="login-context-username-password" tabindex="-1"><a class="header-anchor" href="#login-context-username-password" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#login-context-username-password" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>login (context, { username, password })</code></h5>
<p>称为登录用户和接收可以用于授权后续API调用的当前令牌。用户成功授权后，<code>user/me</code>将调度操作以加载用户配置文件数据。</p>
<h5 id="register-context-email-firstname-lastname-password" tabindex="-1"><a class="header-anchor" href="#register-context-email-firstname-lastname-password" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#register-context-email-firstname-lastname-password" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>register (context, { email, firstname, lastname, password })</code></h5>
<p>在注册的电子商务平台/ Magento的用户帐户。</p>
<h5 id="me-context-refresh-true-usecache-true" tabindex="-1"><a class="header-anchor" href="#me-context-refresh-true-usecache-true" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#me-context-refresh-true-usecache-true" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>me (context, { refresh = true, useCache = true })</code></h5>
<p>加载从电子商务CMS用户配置文件; 当<code>userCache</code>设置为true结果将被存储在<code>localForage</code>，如果它之前存储-使用从缓存返回<code>fastest</code>策略（网络VS高速缓存）。如果<code>refresh</code>设置为true -用户数据将会从服务器上拉，尽管缓存副本是可用的。</p>
<h5 id="update-context-userdata" tabindex="-1"><a class="header-anchor" href="#update-context-userdata" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#update-context-userdata" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>update (context, userData)</code></h5>
<p>这个动作是用来更新各种用户配置文件数据。请检查<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/store/modules/user/userProfile.schema.json" target="_blank" rel="noopener noreferrer">用户架构 （打开新窗口）<OutboundLink/></a>有关数据格式的详细信息。</p>
<h5 id="changepassword-context-passworddata" tabindex="-1"><a class="header-anchor" href="#changepassword-context-passworddata" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#changepassword-context-passworddata" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>changePassword (context, passwordData)</code></h5>
<p>试图更改用户密码<code>passwordData.newPassword</code>。</p>
<h5 id="logout-context" tabindex="-1"><a class="header-anchor" href="#logout-context" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#logout-context" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>logout (context)</code></h5>
<p>这是用来注销用户关闭会话并清除用户令牌。请注意 - 当前的购物车是此调用后关闭。</p>
<h4 id="吸气剂-1" tabindex="-1"><a class="header-anchor" href="#吸气剂-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getters-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>吸气剂</h4>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">isLoggedIn</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="结账模块" tabindex="-1"><a class="header-anchor" href="#结账模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#checkout-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>结账模块</h2>
<p>结帐模块旨在处理与结帐操作和 UI 相关的所有逻辑。</p>
<h3 id="成分-2" tabindex="-1"><a class="header-anchor" href="#成分-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#components-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>成分</h3>
<h4 id="cartsummary" tabindex="-1"><a class="header-anchor" href="#cartsummary" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#cartsummary" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>CartSummary</h4>
<p>此组件显示购物车汇总信息</p>
<p><strong>计算</strong></p>
<ul>
<li><code>totals</code> - 映射吸气来显示车汇总</li>
</ul>
<h4 id="订单审核" tabindex="-1"><a class="header-anchor" href="#订单审核" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#orderreview" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>订单审核</h4>
<p>当前的订单摘要</p>
<p><strong>道具</strong></p>
<ul>
<li><code>isActive</code> - 布尔值，需要的道具</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>placeOrder</code>-如果当前用户具有帐户检查。如果不是，将触发一个<code>register</code>方法，否则会发出<code>checkout-before-placeOrder</code>总线事件</li>
<li><code>register</code>- 调度一个<code>user/register</code>动作来注册一个新用户</li>
</ul>
<h4 id="支付" tabindex="-1"><a class="header-anchor" href="#支付" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#payment" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>支付</h4>
<p>一个组件来处理支付业务</p>
<p><strong>道具</strong></p>
<ul>
<li><code>isActive</code> - 布尔值，需要的道具</li>
</ul>
<p><strong>计算</strong></p>
<ul>
<li><code>currentUser</code> - 当前用户从应用状态映射</li>
<li><code>paymentMethods</code>-可用的付款方式从映射<code>payment/paymentMethods</code>的getter</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>sendDataToCheckout</code>-发出<code>checkout-after-paymentDetails</code>总线事件，并设置<code>isFilled</code>到<code>true</code></li>
<li><code>edit</code>- 检查<code>isFilled</code>，如果是<code>true</code>，则发出<code>checkout-before-edit</code>总线事件</li>
<li><code>hasBillingData</code> - 检查当前用户是否存在，如果它有`default_billing_财产</li>
<li><code>initializeBillingAddress</code>-检查是否当前用户存在，并且如果它具有<code>default_billing</code>属性; 如果是这样，填充<code>payment</code>用当前用户的地址数据的数据属性</li>
<li><code>useShippingAddress</code>-填充<code>payment</code>数据属性<code>$store.state.checkout.shippingDetails</code></li>
<li><code>useBillingAddress</code>-填充<code>payment</code>数据属性<code>currentUser.addressess</code></li>
<li><code>useGenerateInvoice</code>-否定的<code>generateInvoice</code>价值，如果它变成<code>false</code>，将复位<code>this.payment.company</code>和<code>this.payment.taxId</code></li>
<li><code>getCountryName</code> - 通过国家/地区代码获取当前付款的国家/地区名称</li>
<li><code>getPaymentMethod</code> - 由支付方法的代码获取当前支付的付款方式标题</li>
<li><code>notInMethods</code> - 检查传递的方法是否存在于 <code>paymentMethods</code></li>
<li><code>changePaymentMethod</code>-如果存在，并复位额外支付方法组分容器发出<code>checkout-payment-method-changed</code>总线事件</li>
</ul>
<h4 id="个人资料" tabindex="-1"><a class="header-anchor" href="#个人资料" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#personal-details" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>个人资料</h4>
<p>用户的个人信息组件</p>
<p><strong>道具</strong></p>
<ul>
<li><code>isActive</code> - 布尔值，需要的道具</li>
<li><code>focusedField</code> - 一个字符串显示哪些字段被聚焦</li>
</ul>
<p><strong>计算</strong></p>
<ul>
<li><code>currentUser</code> - 当前用户从应用状态映射</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>onLoggedIn</code>-填充<code>personalDetails</code>数据作为参数传递</li>
<li><code>sendDataToCheckout</code>-执行检查是否已经创建了账户并发出<code>checkout-after-personalDetails</code>总线事件</li>
<li><code>edit</code>-发出<code>checkout-before-edit</code>总线事件</li>
<li><code>gotoAccount</code> - 显示了注册模式</li>
</ul>
<h4 id="产品-1" tabindex="-1"><a class="header-anchor" href="#产品-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#product-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>产品</h4>
<p>表示产品组件</p>
<p><strong>道具</strong></p>
<ul>
<li><code>product</code> - 当前产品</li>
</ul>
<p><strong>计算</strong></p>
<ul>
<li><code>thumbnail</code> - 返回产品图像的缩略图</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>onProductChanged</code>-检查<code>event.item.sku</code>，如果它等于<code>product.sku</code>，力更新将被触发</li>
</ul>
<h4 id="船运" tabindex="-1"><a class="header-anchor" href="#船运" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#shipping" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>船运</h4>
<p>组件处理所有的航运逻辑</p>
<p><strong>道具</strong></p>
<ul>
<li><code>isActive</code> - 布尔值，需要的道具</li>
</ul>
<p><strong>计算</strong></p>
<ul>
<li><code>currentUser</code> - 当前用户从应用状态映射</li>
<li><code>shippingMethods</code>-可用的付款方式从映射<code>payment/paymentMethods</code>的getter</li>
<li><code>checkoutShippingDetails</code> - 映射自 <code>state.checkout.shippingDetails</code></li>
<li><code>paymentMethod</code> - 映射自 <code>state.payment.methods</code></li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>onAfterShippingSet</code>-填充<code>shipping</code>与传递的参数数据属性</li>
<li><code>onAfterPersonalDetail</code>-检查<code>isFilled</code>数据属性，如果它的虚假，调度<code>checkout/updatePropValue</code>与用户的名字和姓氏</li>
<li><code>sendDataToCheckout</code>-发射<code>checkout-after-shippingDetails</code>总线事件; 套<code>isFilled</code>到<code>true</code></li>
<li><code>edit</code>-是<code>isFilled</code>是真实的，发出<code>checkout-before-edit</code>总线事件，并设置<code>isFilled</code>到<code>false</code></li>
<li><code>hasShippingDetails</code>-检查，如果<code>currentUser</code>存在，并且有一个属性<code>default_shipping</code>; 如果是这样，填充<code>myAddressDetails</code>数据属性<code>currentUser.addresses</code></li>
<li><code>useMyAddress</code>-检查<code>shipToMyAddress</code>; 如果<code>true</code>，填充<code>shipping</code>数据属性<code>myAddressDetails</code></li>
<li><code>getShippingMethod</code>-获取从运输方式<code>shippingMethods</code>的数据属性</li>
<li><code>getCountryName</code> - 使用国家代码获取国家名称</li>
<li><code>changeCountry</code>-发出<code>checkout-before-shippingMethods</code>总线事件</li>
<li><code>getCurrentShippingMethod</code> - 计算电流的送货方式与航运法码</li>
<li><code>changeShippingMethod</code>-如果<code>getCurrentShippingMethod</code>存在，发出<code>checkout-after-shippingMethodChanged</code>总线事件</li>
<li><code>notInMethods</code> - 检查传递的方法是否存在于 <code>shippingMethods</code></li>
</ul>
<h3 id="如何添加自定义结帐步骤" tabindex="-1"><a class="header-anchor" href="#如何添加自定义结帐步骤" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#how-to-add-a-custom-checkout-step" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何添加自定义结帐步骤</h3>
<p>我们现在说明如何添加一个新的台阶，以Vue公司店面的结账页面的例子。</p>
<p>步骤命名<code>NewStep</code>，只是在后放置<code>PersonalDetails</code>的步骤; 改变步的名称和位置需要稍微修改程序。</p>
<h4 id="首先-创建newstep组件" tabindex="-1"><a class="header-anchor" href="#首先-创建newstep组件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#first-create-the-newstep-component" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>首先，创建NewStep组件</h4>
<ol>
<li><strong>创建NewStep组件</strong>根据您的需要。要迅速行动，使副本<code>PersonalDetails</code>组成，命名<code>NewStep</code>并进行自定义。</li>
<li><strong>定制sendDataToCheckout方法</strong>的的<code>NewStep</code>组分，使得其发射的情况下<code>checkout-after-newStep</code>; 例如：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">sendDataToCheckout</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'checkout-after-newStep'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newStep<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol>
<li><strong>调用sendDataToCheckout方法</strong>是单击该按钮下一节时。这可能在这样的模板来实现：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-full</span>
      <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendDataToCheckout<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="然后-修改结帐部件" tabindex="-1"><a class="header-anchor" href="#然后-修改结帐部件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#then-modify-the-checkout-component" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>然后，修改结帐部件</h4>
<ol>
<li><strong>在结账模板</strong>中的所需位置<strong>插入 NewStep 组件</strong>。例如，你可以把它放在个人资料和运输步骤之间：</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>personal-details</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line relative<span class="token punctuation">"</span></span> <span class="token attr-name">:is-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeSection.personalDetails<span class="token punctuation">"</span></span> <span class="token attr-name">:focused-field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>focusedField<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>new-step</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line relative<span class="token punctuation">"</span></span> <span class="token attr-name">:is-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeSection.newStep<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shipping</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line relative<span class="token punctuation">"</span></span> <span class="token attr-name">:is-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeSection.shipping<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isVirtualCart<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>payment</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line relative<span class="token punctuation">"</span></span> <span class="token attr-name">:is-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeSection.payment<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>order-review</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line relative<span class="token punctuation">"</span></span> <span class="token attr-name">:is-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeSection.orderReview<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li><strong>监听结帐后newStep事件</strong>中加入以下监听器的<code>beforeMount()</code>功能：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'checkout-after-newStep'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onAfterNewStep<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li><strong>指定如何从以前的步骤NewStep跳</strong>。修改<code>onAfterPersonalDetails()</code>方法以激活<code>newStep</code>部分，而不是<code>shipping</code>步骤：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">onAfterPersonalDetails</span> <span class="token punctuation">(</span><span class="token parameter">receivedData<span class="token punctuation">,</span> validationResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>personalDetails <span class="token operator">=</span> receivedData
      <span class="token keyword">this</span><span class="token punctuation">.</span>validationResults<span class="token punctuation">.</span>personalDetails <span class="token operator">=</span> validationResult
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">activateSection</span><span class="token punctuation">(</span><span class="token string">'newStep'</span><span class="token punctuation">)</span> <span class="token comment">// show the new step</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">savePersonalDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>focusedField <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这是假设新的结帐步骤如下个人信息的步骤; 如果不是这样的话，你将需要修改<code>onAfter</code>任何步骤先的梅托德<code>NewStep</code>。</p>
<ol>
<li><strong>指定如何从NewStep跳到下一步</strong>创建的方法<code>onAfterNewStep</code>; 在这个例子中，下一个步骤是航运形式：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">onAfterNewStep</span> <span class="token punctuation">(</span><span class="token parameter">receivedData<span class="token punctuation">,</span> validationResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newStep <span class="token operator">=</span> receivedData
      <span class="token keyword">this</span><span class="token punctuation">.</span>validationResults<span class="token punctuation">.</span>newStep <span class="token operator">=</span> validationResult
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">activateSection</span><span class="token punctuation">(</span><span class="token string">'shipping'</span><span class="token punctuation">)</span> <span class="token comment">// change 'shipping' to whatever you want the next step to be</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveNewStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// include this line only if newStep has state</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>请注意，调用<code>activateSection('shipping')</code>是最终显示的下一个结帐步骤给用户。</p>
<ol>
<li><strong>如果需要，节省NewStep状态</strong>通过定义一个非空方法<code>saveNewStep()</code>; 例如：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">saveNewStep</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'checkout/saveNewStep'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newStep<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这是只需要你的新步骤都有状态，在这种情况下，你还需要定义<code>checkout/saveNewStep</code>在Vuex行动。</p>
<h3 id="店铺-2" tabindex="-1"><a class="header-anchor" href="#店铺-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h3>
<p>Checkout商店是专门用来处理来自用户的购物车，以实际订单的通道; 它定义如保存在结帐时由用户提供的信息，并把该命令的动作。</p>
<h4 id="状态-2" tabindex="-1"><a class="header-anchor" href="#状态-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    order<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    personalDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      emailAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      password<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      createAccount<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shippingDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      country<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      streetAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      apartmentNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      city<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      state<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      region_id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      zipCode<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      phoneNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      shippingMethod<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    paymentDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      company<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      country<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      streetAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      apartmentNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      city<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      state<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      region_id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      zipCode<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      phoneNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      taxId<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      paymentMethod<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      paymentMethodAdditional<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    isThankYouPage<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    modifiedAt<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>Checkout 模块的状态包含<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/models/order.schema.json" target="_blank" rel="noopener noreferrer">Order 对象 （打开新窗口）<OutboundLink/></a>并且在结帐过程由用户给定的，该信息被存储在进一步使用<code>localForage</code>。</p>
<p>状态由改性 <a href="https://github.com/vuestorefront/vue-storefront/blob/1793aaa7afc89b3f08e443f40dd5c6131dd477ba/core/store/modules/checkout/actions.js#L11" target="_blank" rel="noopener noreferrer"><code>placeOrder</code> （打开新窗口）<OutboundLink/></a>行动和 <a href="https://github.com/vuestorefront/vue-storefront/blob/1793aaa7afc89b3f08e443f40dd5c6131dd477ba/core/store/modules/checkout/actions.js#L41" target="_blank" rel="noopener noreferrer"><code>load</code> （打开新窗口）<OutboundLink/></a>其负载从浏览器的数据库的状态。</p>
<p>类别状态数据：</p>
<ul>
<li><code>order</code>- 这是要放置的最后一个订单，<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/models/order.schema.json" target="_blank" rel="noopener noreferrer">架构已定义 （打开新窗口）<OutboundLink/></a>符合 Ajv 格式</li>
<li><code>shippingDetails</code>, <code>paymentDetails</code>- 用户在<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/pages/Checkout.vue" target="_blank" rel="noopener noreferrer">结账时<OutboundLink/></a>提供的地址信息<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/pages/Checkout.vue" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</li>
</ul>
<h4 id="行动-2" tabindex="-1"><a class="header-anchor" href="#行动-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h4>
<p>购物车商店提供以下公共操作：</p>
<h5 id="placeorder-context-order" tabindex="-1"><a class="header-anchor" href="#placeorder-context-order" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#placeorder-context-order" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>placeOrder (context, { order })</code></h5>
<p><code>Checkout.vue</code>为完成订单而调用的操作。根据<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/models/order.schema.json" target="_blank" rel="noopener noreferrer">订单模式<OutboundLink/></a>验证数据对象<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/models/order.schema.json" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>，<code>localForage</code>通过后续调用存储在集合中<a href="https://github.com/vuestorefront/vue-storefront/blob/1793aaa7afc89b3f08e443f40dd5c6131dd477ba/core/store/modules/order/actions.js#L12" target="_blank" rel="noopener noreferrer"><code>order/placeOrder</code>（打开新窗口）<OutboundLink/></a></p>
<h5 id="savepersonaldetails-commit-personaldetails" tabindex="-1"><a class="header-anchor" href="#savepersonaldetails-commit-personaldetails" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#savepersonaldetails-commit-personaldetails" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>savePersonalDetails ({ commit }, personalDetails)</code></h5>
<p>存储个人详细信息（格式与此存储完全相同<code>state.personalDetails</code>）以供以后在浏览器的存储中使用</p>
<h5 id="saveshippingdetails-commit-shippingdetails" tabindex="-1"><a class="header-anchor" href="#saveshippingdetails-commit-shippingdetails" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#saveshippingdetails-commit-shippingdetails" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>saveShippingDetails ({ commit }, shippingDetails)</code></h5>
<p>存储运输详细信息（格式与此存储完全相同<code>state.shippingDetails</code>）以供以后在浏览器的存储中使用</p>
<h5 id="savepaymentdetails-commit-paymentdetails" tabindex="-1"><a class="header-anchor" href="#savepaymentdetails-commit-paymentdetails" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#savepaymentdetails-commit-paymentdetails" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>savePaymentDetails ({ commit }, paymentDetails)</code></h5>
<p>存储支付明细（格式与本店完全一致<code>state.paymentDetails</code>），供以后浏览器存储使用</p>
<h5 id="load-commit" tabindex="-1"><a class="header-anchor" href="#load-commit" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#load-commit" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>load ({ commit })</code></h5>
<p>从加载当前状态 <code>localForage</code></p>
<h2 id="订单模块" tabindex="-1"><a class="header-anchor" href="#订单模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#order-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>订单模块</h2>
<p>该模块包含与订单操作相关的所有逻辑、组件和存储。</p>
<h3 id="成分-3" tabindex="-1"><a class="header-anchor" href="#成分-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#components-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>成分</h3>
<h4 id="用户订单" tabindex="-1"><a class="header-anchor" href="#用户订单" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#userorder" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用户订单</h4>
<p><strong>计算</strong></p>
<ul>
<li><code>ordersHistory</code> - 映射值来自 <code>state.user.orders_history.items</code></li>
<li><code>isHistoryEmpty</code>- 检查<code>state.user.orders_history.items</code>数组是否为空</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>reorder (products)</code> - 遍历传递的“产品”数组，将每个项目添加到购物车</li>
<li><code>skipGrouped (items)</code> - 过滤器通过“items”数组，只返回不带的项目 <code>parent_id</code></li>
</ul>
<h4 id="用户单一订单" tabindex="-1"><a class="header-anchor" href="#用户单一订单" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#usersingleorder" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>用户单一订单</h4>
<p><strong>计算</strong></p>
<ul>
<li><code>ordersHistory</code> - 映射值来自 <code>state.user.orders_history.items</code></li>
<li><code>order</code>- 在<code>orderHistory</code>计算属性中找到与路由<code>orderId</code>参数匹配的 id的顺序</li>
<li><code>paymentMethod</code>-<code>payment.additional_information[0]</code>从<code>order</code>计算属性返回</li>
<li><code>billingAddress</code>-<code>billing_address</code>从<code>order</code>计算属性返回</li>
<li><code>shippingAddress</code>-<code>extension_attributes.shipping_assignments[0].shipping.address</code>从<code>order</code>计算属性返回</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li><code>remakeOrder (items)</code> - 遍历传递的“items”数组，将每个项目作为单个产品添加到购物车</li>
<li><code>skipGrouped (items)</code> - 过滤器通过“items”数组，只返回不带的项目 <code>parent_id</code></li>
</ul>
<h3 id="店铺-3" tabindex="-1"><a class="header-anchor" href="#店铺-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h3>
<p>订单存储非常简单，用于将当前订单传递给后端服务。</p>
<h3 id="行动-3" tabindex="-1"><a class="header-anchor" href="#行动-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h3>
<p>订单商店提供以下公共操作：</p>
<h4 id="placeorder-commit-order" tabindex="-1"><a class="header-anchor" href="#placeorder-commit-order" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#placeorder-commit-order" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>placeOrder ({ commit }, order)</code></h4>
<p>订单对象在本地 indexedDb 中排队等待<code>ordersCollection</code>发送到服务器。请查看<a href="https://docs.vuestorefront.io/v1/guide/data/data.html" target="_blank" rel="noopener noreferrer">处理数据<OutboundLink/></a>以了解有关数据格式的详细信息以及<code>localForage</code>该项目中如何使用。</p>
<h2 id="目录模块" tabindex="-1"><a class="header-anchor" href="#目录模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#catalog-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>目录模块</h2>
<p>Catalog 模块是一个很大的模块，它结合了属性、类别、产品、库存和税务操作的所有逻辑、组件和存储</p>
<h3 id="成分-4" tabindex="-1"><a class="header-anchor" href="#成分-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#components-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>成分</h3>
<h3 id="店铺-4" tabindex="-1"><a class="header-anchor" href="#店铺-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#store-6" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h3>
<h4 id="属性存储" tabindex="-1"><a class="header-anchor" href="#属性存储" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#attribute-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>属性存储</h4>
<p>属性存储旨在处理与属性管理相关的所有操作</p>
<h5 id="状态-3" tabindex="-1"><a class="header-anchor" href="#状态-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    list_by_code<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    list_by_id<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    labels<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>因为我们以与 Magento 非常相似的方式使用属性字典进行产品管理（<a href="http://www.xpertdeveloper.com/2010/10/what-is-eav-model-in-magento/" target="_blank" rel="noopener noreferrer">EAV 模型 （打开新窗口）<OutboundLink/></a>) 我们正在对属性、属性类型和字典进行操作。</p>
<p>属性由用户通过调用方法<strong>显式</strong>加载<code>attribute/list</code>。例如，当您要处理产品的可自定义属性或处理变体时，您需要预取属性元数据：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'attribute/list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  filterValues<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  filterField<span class="token operator">:</span> <span class="token string">'is_user_defined'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这是<a href="https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue" target="_blank" rel="noopener noreferrer">产品比较功能的<OutboundLink/></a>示例<a href="https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<p>属性状态数据：</p>
<ul>
<li><code>list_by_code</code>- 这是一个字典，您可以通过访问<code>list_by_code['color']</code>等来获取特定属性。</li>
<li><code>list_by_id</code>- 这是一个字典，您可以通过访问<code>list_by_id[123]</code>等来获取特定属性。</li>
<li><code>labels</code> - 预加载的属性值标签（EAV 中的 V）</li>
</ul>
<h5 id="行动-4" tabindex="-1"><a class="header-anchor" href="#行动-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h5>
<p>属性存储提供以下公共操作：</p>
<p><strong><code>list (context, { filterValues = null, filterField = 'attribute_code', size = 150, start = 0 })</code></strong></p>
<p>此方法用于加载属性元数据。<code>filterValues</code>就像多个值的阵列：<code>['color', 'size']</code>和<code>filterField</code>是属性字段来比较<code>filterValues</code>针对。通常是<code>attribute_code</code>或<code>attribute_id</code>。该<code>size</code>和<code>start</code>只是用来限制列表。</p>
<h5 id="吸气剂-2" tabindex="-1"><a class="header-anchor" href="#吸气剂-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getters-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>吸气剂</h5>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">attributeListByCode</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list_by_code<span class="token punctuation">,</span>
  <span class="token function-variable function">attributeListById</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list_by_id<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="品类商店" tabindex="-1"><a class="header-anchor" href="#品类商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#category-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>品类商店</h4>
<p>类别存储旨在处理与类别数据相关的所有操作。</p>
<p>该模块与 Elastic Search 紧密配合，并在<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">Product 数据格式上运行<OutboundLink/></a></p>
<h5 id="状态-4" tabindex="-1"><a class="header-anchor" href="#状态-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  current<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  filters<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  breadcrumbs<span class="token operator">:</span> <span class="token punctuation">{</span> routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  current_path<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// list of categories from root to current</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>类别状态通常仅由两个方法<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L38" target="_blank" rel="noopener noreferrer">列表<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L38" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>和<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70" target="_blank" rel="noopener noreferrer">单身 （打开新窗口）<OutboundLink/></a>并通过<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28" target="_blank" rel="noopener noreferrer">重置<OutboundLink/></a>清除为默认值<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<p>笔记</p>
<p>该操作仅<code>category/single</code>使用<code>localForage</code>缓存 - 不直接存储 ElasticSearch 数据；由于此优化，请<code>category/list</code>首先通过调度下载类别列表。</p>
<p>类别状态数据：</p>
<ul>
<li><code>breadcrumbs</code>- 这是<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">面包屑组件<OutboundLink/></a>使用的路由列表<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>current</code> - 这是当前的类别对象，</li>
<li><code>filters</code>是类别过滤器的当前状态 - 所选变体属性的字典；例如，它包含选定产品属性的字典：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>请注意，我们使用的是 Magento 之类的 EAV 属性结构 - 所以这里的值是属性值索引而不是值本身。请查看<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">数据格式<OutboundLink/></a>以供参考</p>
<ul>
<li><code>current_path</code> - 这是类别对象的列表：从当前类别到顶级根，</li>
</ul>
<h5 id="活动-2" tabindex="-1"><a class="header-anchor" href="#活动-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#events-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>活动</h5>
<p>以下事件是从<code>category</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('category-after-single', { category: mainCategory })</code>- 从<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70" target="_blank" rel="noopener noreferrer">类别/单 （打开新窗口）<OutboundLink/></a>加载单个类别后，</li>
<li><code>EventBus.$emit('category-after-current', { category: category })</code>- 当前类别更改后 - 这是后续<code>category/single</code>行动呼吁，</li>
<li><code>EventBus.$emit('category-after-reset', { })</code> - 类别重置后（例如在从一个类别页面移动到另一个类别的过程中）</li>
<li><code>EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })</code>- 此事件发出当前类别列表，因为它由<code>category/list</code>.</li>
</ul>
<h5 id="行动-5" tabindex="-1"><a class="header-anchor" href="#行动-5" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-6" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h5>
<p>购物车商店提供以下公共操作：</p>
<p><strong><code>list (context, { parent = null, onlyActive = true, onlyNotEmpty = false, size = 4000, start = 0, sort = 'position:asc' })</code></strong></p>
<p>这是加载类别列表的关键方法。它返回<code>Promise</code>包含产品列表对象的 。这种方法应该在您需要获取产品数据的任何地方使用。</p>
<p><strong><code>single (context, { key, value, setCurrentCategory = true, setCurrentCategoryPath = true })</code></strong></p>
<p>此方法从<code>localForage</code>.</p>
<p>重要的</p>
<p>要使此方法起作用，您应该先调用<code>category/list</code>。该分类只对localFotage有效，不能直接访问ElasticSearch</p>
<p>重要的</p>
<p>此方法通过以下方式同步产品以供离线使用：将整个查询结果对象存储到<code>localForage</code>并单独缓存每个类别（例如在产品页面上使用）</p>
<p>此方法发出类别列表为 <code>EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })</code></p>
<ul>
<li><code>parent</code>-<code>category</code>仅加载子类别的对象</li>
<li><code>start</code>, <code>size</code>- 两个参数都用于分页；start 是起始索引；size 是页面大小</li>
<li><code>onlyActive</code> - (bool) 仅加载 CMS 中标记为活动的类别（例如在 Magento 中）</li>
<li><code>sort</code> - 用于排序的类别属性，此字段必须在 ElasticSearch 中映射为数字字段</li>
<li><code>onlyNotEmpty</code> - (bool) 仅加载包含任何产品的类别</li>
</ul>
<h5 id="吸气剂-3" tabindex="-1"><a class="header-anchor" href="#吸气剂-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getters-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>吸气剂</h5>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">current</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
  <span class="token function-variable function">list</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="产品商店" tabindex="-1"><a class="header-anchor" href="#产品商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#product-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>产品商店</h4>
<p>Product Store 旨在处理与产品数据相关的所有操作。它负责加载产品列表或单个产品以及配置可配置产品和管理产品附件。</p>
<p>该模块与 Elastic Search 紧密配合，并在<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">Product 数据格式上运行<OutboundLink/></a></p>
<h5 id="状态-5" tabindex="-1"><a class="header-anchor" href="#状态-5" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#state-6" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  breadcrumbs<span class="token operator">:</span> <span class="token punctuation">{</span> routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  current<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// shown product</span>
  current_options<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  current_configuration<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  parent<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  original<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default, not configured product</span>
  related<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>产品状态通常仅由两种方法<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">列表<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>和<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L428" target="_blank" rel="noopener noreferrer">单身 （打开新窗口）<OutboundLink/></a>并通过<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215" target="_blank" rel="noopener noreferrer">重置<OutboundLink/></a>清除为默认值<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<p>产品状态数据：</p>
<ul>
<li><code>breadcrumbs</code>- 这是<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">面包屑组件<OutboundLink/></a>使用的路由列表<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>current</code>- 这是具有选定<code>configurable_children</code>变体的产品对象- 因此它是基本产品，其属性被选定<code>configurable_children</code>变体的值覆盖；它在<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203" target="_blank" rel="noopener noreferrer">Product.vue 页面<OutboundLink/></a>上使用<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>这是在“加入购物车”后加入购物车的产品</li>
<li><code>current_options</code>- 它是一个列表，用于填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56" target="_blank" rel="noopener noreferrer">Product.vue 页面<OutboundLink/></a>上的变体选择器<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>它包含属性 x 可能的属性值和标签的字典，并由<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344" target="_blank" rel="noopener noreferrer">setupVariants<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>根据<code>configurable_children</code>财产</li>
<li><code>current_configuration</code>是当前产品配置 - 所选变体属性的字典；例如，它包含选定产品属性的字典：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>请注意，我们使用的是 Magento 之类的 EAV 属性结构 - 所以这里的值是属性值索引而不是值本身。请查看<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">数据格式<OutboundLink/></a>以供参考</p>
<ul>
<li><code>parent</code>- 如果当前产品是一个，<code>type_id=&quot;single&quot;</code>则在这个变量<code>configurable</code>中存储父产品。此数据仅<code>Product.vue</code>由<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323" target="_blank" rel="noopener noreferrer">checkConfigurableParent<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>list</code>- 这是一个<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">列表<OutboundLink/></a>加载的产品数组<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>original</code>- 仅用于<code>configurable</code>产品；这是未选择变体的基础产品</li>
<li><code>related</code>- 这是相关产品的字典；设置在这家商店外（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/src/themes/default/components/core/blocks/Product/Related.vue" target="_blank" rel="noopener noreferrer">例如这里 （打开新窗口）<OutboundLink/></a>) 通过调用和<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L528" target="_blank" rel="noopener noreferrer">相关操作（打开新窗口）<OutboundLink/></a></li>
</ul>
<h5 id="活动-3" tabindex="-1"><a class="header-anchor" href="#活动-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#events-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>活动</h5>
<p>以下事件是从<code>product</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('product-after-priceupdate', product)</code>- 来自<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L33" target="_blank" rel="noopener noreferrer">同步产品价格 （打开新窗口）<OutboundLink/></a>产品价格与Magento同步后；</li>
<li><code>EventBus.$emit('product-after-configure', { product: product, configuration: configuration, selectedVariant: selectedVariant })</code>from <code>configureProductAsync</code>（由<code>product/configure</code>之后的动作调用<code>product/single</code>）。此事件在产品页面上提供有关所选产品变体的信息</li>
<li><code>EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, result: resp })</code>- 此事件通过<code>product/list</code>提供当前过滤器等返回当前产品列表。您可以通过设置<code>meta</code>属性来标记特定的产品列表标识符；这很重要，因为在单个页面上，此事件可以针对每个单独的产品块执行多次</li>
<li><code>EventBus.$emit('product-after-single', { key: key, options: options, product: cachedProduct })</code>- 加载单个产品后（由<code>product/single</code>操作调用）</li>
<li><code>EventBus.$emit('product-after-related', { key: key, items: items })</code>- 每当为当前产品设置相关产品块时调用；key 是相关块的名称，items 是相关产品</li>
<li><code>EventBus.$emit('product-after-original', { original: product })</code>-<code>product/single</code>每当产品加载时调用</li>
<li><code>EventBus.$emit('product-after-parent', { parent: product })</code>- 通过<code>product/checkConfigurableParent</code>提供当前的单个产品可配置父级从外部调用</li>
<li><code>EventBus.$emit('product-after-reset', { })</code> - 产品重置后（例如在从一个产品页面移动到另一个页面的过程中）</li>
</ul>
<h5 id="行动-6" tabindex="-1"><a class="header-anchor" href="#行动-6" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-7" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h5>
<p>产品商店提供以下公共操作：</p>
<p><strong><code>setupBreadcrumbs (context, { product })</code></strong></p>
<p>该方法负责页面<code>state.breadcrumbs</code>上要使用的设置<code>Product.vue</code>。它是从 调用的<code>Product.vue:fetchData</code>。所述<code>product</code>参数是一个<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">ElasticSearch产品对象<OutboundLink/></a></p>
<p><strong><code>syncPlatformPricesOver(context, { skus })</code></strong></p>
<p>当 config 选项<code>products.alwaysSyncPlatformPricesOver</code>打开时，Vue Storefront 将在每次调度<code>product/single</code>或<code>product/list</code>操作时请求当前产品价格。它由这些操作专门调用，不应手动调用。此方法调用<code>vue-storefront-api</code>代理从 Magento 或任何其他后端 CMS 获取当前价格。</p>
<p><code>skus</code> - 这是一个包含要同步的产品 SKU 的数组</p>
<p><strong><code>setupAssociated (context, { product })</code></strong></p>
<p>此方法被称为后续调用<code>Product.vue:fetchData</code>或<code>product/list</code>操作。它用于获取子产品<code>grouped</code>或<code>bundle</code>产品类型。</p>
<p><strong><code>checkConfigurableParent (context, {product})</code></strong></p>
<p>调用此方法<code>Product.vue:fetchData</code>以检查当前的简单产品是否具有可配置的父级。如果是这样，则重定向到父产品。这是<a href="https://github.com/vuestorefront/vue-storefront/issues/508" target="_blank" rel="noopener noreferrer">#508<OutboundLink/></a>的修复<a href="https://github.com/vuestorefront/vue-storefront/issues/508" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<p><strong><code>setupVariants (context, { product })</code></strong></p>
<p>此方法随后被调用<code>Product.vue:fetchData</code>以加载 中定义的所有可配置属性<code>product.configurable_options</code>，然后填充<code>state.current_configuration</code>和<code>state.current_options</code>。此动作的主要用途是在产品页面上准备由用户配置的产品，并正确显示产品配置器 UI</p>
<p><strong><code>list (context, { query, start = 0, size = 50, entityType = 'product', sort = '', cacheByKey = 'sku', prefetchGroupProducts = true, updateState = true, meta = {} })</code></strong></p>
<p>这是加载产品列表的关键方法。它返回<code>Promise</code>包含产品列表对象的 。这种方法应该在您需要获取产品数据的任何地方使用。当<code>config.tax.calculateServerSide=false</code>此方法运行产品税计算器并根据需要与 Magento 同步价格时。</p>
<p>此方法将产品列表作为 <code>EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, meta: meta, result: resp })</code></p>
<p>重要的</p>
<p>此方法通过以下方式同步产品以供离线使用：将整个查询结果对象存储到<code>localForage</code>并单独缓存每个产品（例如在产品页面上使用）</p>
<ul>
<li><code>query</code>- 这是<code>bodybuilder</code>ElasticSearch 查询（请检查<code>bodybuilder</code>包或例如<code>Home.vue</code>参考如何使用它）</li>
<li><code>start</code>, <code>size</code>- 两个参数都用于分页；start 是起始索引；size 是页面大小</li>
<li><code>entityType</code>- 默认情况下，它当然设置为<code>product</code>并映射到 ElasticSearch 实体类</li>
<li><code>sort</code> - 用于排序的产品属性，此字段必须在 ElasticSearch 中映射为数字字段</li>
<li><code>prefetchGroupProducts</code>- 默认情况下它设置为 true 并导致<code>setupAssociated</code>分派操作以获取所有相关产品</li>
<li><code>updateState</code>- 如果您将此设置为 false，<code>state.list</code>则不会更新 - 只会退回产品</li>
<li><code>meta</code>- 这是一个与<code>product-after-list</code>事件一起返回的可选属性；例如，它可以用于标记任何特定的 ES 调用。</li>
</ul>
<p><strong><code>single (context, { options, setCurrentProduct = true, selectDefaultVariant = true, key = 'sku' })</code></strong></p>
<p>此方法随后调度<code>product/list</code>操作以获取产品并同步税金/价格。当最近通过<code>product/list</code>此方法下载产品时，将从中返回缓存版本<code>localForage</code>- 但无论如何都要更新缓存。</p>
<p><strong><code>configure (context, { product = null, configuration, selectDefaultVariant = true })</code></strong></p>
<p>此操作用于配置<code>configurable</code>具有指定属性的产品。它获取<code>configuration</code>应具有以下格式的对象：<code>{ attribute_code: attribute_value_id }</code>并找到<code>product.configurable_children</code>符合此配置的项目。然后它将这个特定的<code>configurable_child</code>与产品本身合并- 例如将 product.price 设置为可配置的价格、颜色、尺寸等。该方法用于：<code>Product.vue</code>允许用户选择颜色、尺寸等的页面。它的第二个用法是<code>Category.vue</code>页面 - 在用户选择一些过滤器后，生成的产品被配置为显示正确的图像（与所选颜色和尺寸相关）和价格。</p>
<p>如果<code>selectDefaultVariant</code>设置为 true（默认），<code>state.current</code>则将根据配置的产品进行更改。</p>
<p><strong><code>setCurrent (context, productVariant)</code></strong></p>
<p>辅助方法只是设置<code>state.current</code>为 productVariant</p>
<p><strong><code>setOriginal (context, originalProduct)</code></strong></p>
<p>辅助方法只是设置<code>state.original</code>为 originalProduct</p>
<p><strong><code>related (context, { key = 'related-products', items })</code></strong></p>
<p>更改<code>state.related</code>字典以设置要在<code>Product.vue</code>页面上显示的相关产品的特定列表（<code>RelatedProducts</code>组件用于此）</p>
<h5 id="吸气剂-4" tabindex="-1"><a class="header-anchor" href="#吸气剂-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#getters-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>吸气剂</h5>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">productParent</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>parent<span class="token punctuation">,</span>
  <span class="token function-variable function">productCurrent</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
  <span class="token function-variable function">currentConfiguration</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current_configuration<span class="token punctuation">,</span>
  <span class="token function-variable function">productOriginal</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>original<span class="token punctuation">,</span>
  <span class="token function-variable function">currentOptions</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current_options<span class="token punctuation">,</span>
  <span class="token function-variable function">breadcrumbs</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>breadcrumbs<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="库存商店" tabindex="-1"><a class="header-anchor" href="#库存商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#stock-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>库存商店</h4>
<p>Stock Store 旨在处理库存数量检查。</p>
<h5 id="活动-4" tabindex="-1"><a class="header-anchor" href="#活动-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#events-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>活动</h5>
<p>以下事件是从<code>stock</code>商店发布的：</p>
<ul>
<li><code>stock-after-check</code> - 在从电子商务后端/ Magento 收到库存商品后立即发出</li>
</ul>
<h5 id="行动-7" tabindex="-1"><a class="header-anchor" href="#行动-7" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#actions-8" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>行动</h5>
<p>购物车商店提供以下公共操作：</p>
<p><strong><code>check (context, { product, qty = 1 })</code></strong></p>
<p>检查是否<code>product</code>可以将给定数量的商品添加到购物车中。</p>
<p>生成的 promise 扩展为以下对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  qty<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  status<span class="token operator">:</span> <span class="token string">'ok'</span><span class="token punctuation">,</span> <span class="token comment">// another option is: 'out_of_stock'</span>
  onlineCheckTaskId<span class="token operator">:</span> <span class="token number">14241</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="税务商店" tabindex="-1"><a class="header-anchor" href="#税务商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#tax-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>税务商店</h4>
<h3 id="帮手" tabindex="-1"><a class="header-anchor" href="#帮手" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#helpers" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>帮手</h3>
<h4 id="选项标签" tabindex="-1"><a class="header-anchor" href="#选项标签" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/modules.html#optionlabel" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>选项标签</h4>
<p>用于获取特定 的标签<code>optionId</code>。例如，当用户过滤产品并使用 165 个 attribute_value 时，我们可以调用<code>optionLabel( { attributeKey: 'color', optionId: 165 })</code>以取回 'Red' 标签。</p>
</template>
