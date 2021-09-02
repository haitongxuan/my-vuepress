<template><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1>
<p>提醒</p>
<p>这份文件是<em>存档</em>和<em>不</em>具有这是最新版本的有关<code>1.11</code>在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。</p>
<h2 id="core-home-page" tabindex="-1"><a class="header-anchor" href="#core-home-page" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#core-home-page" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a> Core Home Page</h2>
<p>笔记</p>
<p>核心页面几乎为零功能，一切都在主题组件中，肯定需要替换到核心。</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#props" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Props</h3>
<p>No props</p>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#data" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Data</h3>
<p><code>rootCategories</code> 用于您自己的自定义主页的类别列表</p>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#methods" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a> Methods</h3>
<p>No methods</p>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#events" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Events</h3>
<p><code>home-after-load</code>事件可用于使用<code>store</code>SSR 所需的附加数据填充 vuex 。</p>
<h4 id="beforemount" tabindex="-1"><a class="header-anchor" href="#beforemount" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#beforemount" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>beforeMount</h4>
<p>通过调度<code>category/reset</code>操作清除定义当前类别的 Vuex 存储条目。</p>
<h2 id="core-category-page" tabindex="-1"><a class="header-anchor" href="#core-category-page" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#core-category-page" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Core Category Page</h2>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#props-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Props</h3>
<p>No props</p>
<h3 id="data-1" tabindex="-1"><a class="header-anchor" href="#data-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#data-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Data</h3>
<ul>
<li>
<p><code>pagination</code>- 定义两个设置的对象：</p>
<ul>
<li><code>perPage</code>每页要加载的产品项数，目前设置为 50。</li>
<li><code>offset</code> 这可能定义了上次加载哪个页面，当前设置为 0 并且没有在任何地方更改。</li>
</ul>
</li>
<li>
<p><code>enabled</code>- 启用/禁用分页。当它被禁用时，它会在滚动上延迟加载其他产品。</p>
</li>
<li>
<p><code>filters.available</code>, <code>filters.chosen</code>- 用户在“类别”页面上定义的一组过滤器。在那里，我们有可用的过滤器和选择的过滤器值。</p>
</li>
<li>
<p><code>products</code> - 从 Vuex 商店返回当前类别的产品项目列表的计算属性。</p>
</li>
<li>
<p><code>isCategoryEmpty</code> - 如果当前类别的产品列表为空，则返回 true 的计算属性。</p>
</li>
<li>
<p><code>category</code> - 从 Vuex 商店返回当前类别的计算属性。</p>
</li>
<li>
<p><code>categoryName</code> - 分类名称。</p>
</li>
<li>
<p><code>categoryId</code> - 类别 ID。</p>
</li>
<li>
<p><code>breadcrumbs</code> - Vuex 商店中当前类别的面包屑。</p>
</li>
<li>
<p><code>productsTotal</code> - 该类别中有多少产品。</p>
</li>
<li>
<p><code>lazyLoadProductsOnscroll</code> - 允许在滚动上延迟加载更多产品，默认情况下为 true。</p>
</li>
</ul>
<h3 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#methods-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Methods</h3>
<ul>
<li><code>fetchData ({ store, route })</code>- 准备查询以获取当前类别的产品列表，并调度<code>product/list</code>提取该列表的操作。
<ul>
<li><code>{ store, route }</code> - 由 Vuex 存储和全局路由器引用组成的对象。</li>
</ul>
</li>
<li><code>validateRoute ({ store, route })</code>- 每当全局<code>$route</code>对象更改其值时都会调用此方法。它调度<code>'category/single'</code>动作以加载当前类别对象，然后调用<code>fetchData</code>方法加载与此类别相关的产品列表。
<ul>
<li><code>{ store, route }</code> - 由 Vuex 存储和全局路由器引用组成的对象。</li>
</ul>
</li>
</ul>
<h3 id="events-1" tabindex="-1"><a class="header-anchor" href="#events-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#events-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Events</h3>
<h4 id="asyncdata" tabindex="-1"><a class="header-anchor" href="#asyncdata" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#asyncdata" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>asyncData</h4>
<p>由于应用程序使用 SSR，此方法在渲染发生之前预取并解析异步数据并将其保存到 Vuex 存储。类别页面的异步数据是所有类别的列表、类别属性以及每个类别的产品列表。</p>
<h4 id="beforemount-1" tabindex="-1"><a class="header-anchor" href="#beforemount-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#beforemount-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>beforeMount</h4>
<p><code>filter-changed-category</code>事件监听器被初始化。当用户选择自定义过滤器值时会触发该事件。</p>
<h4 id="beforedestroy" tabindex="-1"><a class="header-anchor" href="#beforedestroy" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#beforedestroy" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>beforeDestroy</h4>
<p><code>filter-changed-category</code>事件侦听器被删除。</p>
<h2 id="core-product-page" tabindex="-1"><a class="header-anchor" href="#core-product-page" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#core-product-page" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Core Product Page</h2>
<h3 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#props-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Props</h3>
<p>No props</p>
<h3 id="data-2" tabindex="-1"><a class="header-anchor" href="#data-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#data-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Data</h3>
<ul>
<li><code>loading</code>- 如果<code>true</code>这表明当前正在从后端加载产品。</li>
<li><code>favorite</code> - 一个对象，用于定义 1) 当前产品是否在最喜欢的产品列表中，以及 2) 将显示的图标的名称，以指示其在最喜欢的产品列表中的状态。</li>
<li><code>compare</code> - 定义当前产品是否在比较列表中。</li>
<li><code>product</code>- 表示页面上显示的当前产品的计算属性。最初从<code>product/productCurrent</code>Vuex store getter获取它的值。包括用户在页面上设置的所有选项，如大小和颜色。</li>
<li><code>originalProduct</code>- 表示处于初始状态的当前产品的计算属性。从<code>product/productOriginal</code>Vuex store getter获取它的值。</li>
<li><code>parentProduct</code>- 表示当前产品父产品的计算属性（如果有）。从<code>product/productParent</code>Vuex store getter获取它的值。</li>
<li><code>attributesByCode</code>- 根据代码返回所有产品属性列表的计算属性。从<code>attribute/attributeListByCode</code>Vuex store getter获取它的值。</li>
<li><code>attributesById</code>- 根据 ID 返回所有产品属性列表的计算属性。从<code>attribute/attributeListById</code>Vuex store getter获取它的值。<strong>这个道具不在任何地方使用</strong>。</li>
<li><code>breadcrumbs</code>- 表示当前产品的面包屑的计算属性。从<code>product/breadcrumbs</code>Vuex store getter获取它的值。</li>
<li><code>configuration</code>- 表示对象的计算属性，该对象显示在产品上选择了哪些属性（如尺寸和颜色）。从<code>product/currentConfiguration</code>Vuex store getter获取它的值。</li>
<li><code>options</code>- 表示一个对象的计算属性，该对象显示产品上可用的属性（如大小和颜色）和值。从<code>product/currentOptions</code>Vuex store getter获取它的值。</li>
<li><code>category</code>- 表示当前产品的类别对象的计算属性。从<code>category/getCurrentCategory</code>Vuex store getter获取它的值。</li>
<li><code>productName</code>- 表示产品名称的计算属性。从<code>category/getCurrentCategory</code>Vuex store getter获取它的值。</li>
<li><code>productId</code>- 表示产品 ID 的计算属性。从<code>category/getCurrentCategory</code>Vuex store getter获取它的值 。</li>
<li><code>isOnCompare</code> - 检查给定产品是否在比较列表中的计算属性。</li>
<li><code>image</code> - 一个计算属性，用于定义将在页面上显示的图像（缩略图）及其大小。</li>
<li><code>customAttributes</code>- 这是<code>attributesByCode</code>当前产品具有的属性列表的子集。</li>
</ul>
<h3 id="methods-2" tabindex="-1"><a class="header-anchor" href="#methods-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#methods-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Methods</h3>
<h4 id="unbound-methods" tabindex="-1"><a class="header-anchor" href="#unbound-methods" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#unbound-methods" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Unbound methods</h4>
<h5 id="filterchanged-filteroption" tabindex="-1"><a class="header-anchor" href="#filterchanged-filteroption" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#filterchanged-filteroption" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>filterChanged (filterOption)</h5>
<p>根据用户在页面上选择的内容设置产品的属性。派遣<code>product/configure</code>行动。</p>
<p>Note</p>
<p>当触发 'filter-changed-product' 事件时调用此方法，但不会在代码中的任何位置触发。</p>
<p><em>Parameters</em></p>
<ul>
<li><code>filterOption</code> - 表示产品上已更改的属性的对象。</li>
</ul>
<h5 id="fetchdata-store-route" tabindex="-1"><a class="header-anchor" href="#fetchdata-store-route" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#fetchdata-store-route" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>fetchData (store, route)</h5>
<p>通过分派产品/单个操作从后端获取当前产品数据。还调度其他几个操作来获取可配置产品的面包屑、产品属性、变体，并在产品分组时设置子产品。</p>
<p><em>参数</em></p>
<ul>
<li><code>store</code> - Vuex Store</li>
<li><code>route</code> - 全局路由器对象</li>
</ul>
<h5 id="loaddata-store-route" tabindex="-1"><a class="header-anchor" href="#loaddata-store-route" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#loaddata-store-route" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>loadData ({ store, route })</h5>
<p>调度<code>product/reset</code>将当前产品设置为原始产品的操作，取消所有配置和选项，然后调用<code>fetchData</code>方法加载当前产品数据。</p>
<p><em>Parameters</em></p>
<ul>
<li><code>{store, route}</code> - 包含对 Vuex 存储和全局路由器对象的引用的对象。</li>
</ul>
<h5 id="statecheck" tabindex="-1"><a class="header-anchor" href="#statecheck" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#statecheck" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>stateCheck</h5>
<p>如果当前产品有父产品，则重定向到父产品页面，然后检查当前产品是否在心愿单或比较列表中，并相应地设置<code>favorite</code>和<code>compare</code>道具。</p>
<p><em>参数</em> 无参数</p>
<h4 id="bound-methods" tabindex="-1"><a class="header-anchor" href="#bound-methods" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#bound-methods" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Bound methods</h4>
<h5 id="validateroute" tabindex="-1"><a class="header-anchor" href="#validateroute" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#validateroute" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>validateRoute</h5>
<p>每当全局<code>$route</code>对象更改其值时都会调用此方法。调用<code>loadData</code>和<code>stateCheck</code>方法。</p>
<p><em>参数</em> 无参数</p>
<h5 id="addtolist" tabindex="-1"><a class="header-anchor" href="#addtolist" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#addtolist" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>addToList</h5>
<p>通过相应地分派<code>compare/addItem</code>操作将当前产品添加到比较中。</p>
<p><em>Parameters</em></p>
<ul>
<li><code>list</code> - 相比</li>
</ul>
<h5 id="removefromlist" tabindex="-1"><a class="header-anchor" href="#removefromlist" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#removefromlist" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>removeFromList</h5>
<p>通过相应地分派<code>compare/removeItem</code>操作从比较中删除当前产品。</p>
<p><em>Parameters</em></p>
<ul>
<li><code>list</code> - 相比</li>
</ul>
<h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#hooks" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Hooks</h3>
<h4 id="asyncdata-1" tabindex="-1"><a class="header-anchor" href="#asyncdata-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#asyncdata-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>asyncData</h4>
<p>由于应用程序使用 SSR，此方法在渲染发生之前预取并解析异步数据并将其保存到 Vuex 存储。在产品页面上，这是通过调用<code>loadData</code>方法来完成的。</p>
<p>的<code>asyncData</code>触发的<code>product-after-load</code>，其可以被用来填充Vuex SSR商店关于产品的附加数据的事件。</p>
<h4 id="beforemount-2" tabindex="-1"><a class="header-anchor" href="#beforemount-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#beforemount-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>beforeMount</h4>
<p>调用<code>stateCheck</code>方法。定义<code>product-after-priceupdate</code>事件侦听器，如果触发，则分派<code>product/setCurrent</code>在 Vuex 商店中设置当前产品对象的操作。还定义了<code>filter-changed-product</code>事件侦听器，如果触发，则调用<code>filterChanged</code>方法。<strong>目前“filter-changed-product”事件不会在任何地方触发。</strong></p>
<h4 id="beforedestroy-1" tabindex="-1"><a class="header-anchor" href="#beforedestroy-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#beforedestroy-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>beforeDestroy</h4>
<p>删除<code>beforeMount</code>钩子中定义的事件侦听器。</p>
<h2 id="modal-component" tabindex="-1"><a class="header-anchor" href="#modal-component" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#modal-component" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a> Modal component</h2>
<p>简单的模态组件。模态容器的可见性基于内部状态<code>isVisible</code>。我们可以使用<code>$emit</code>全局<code>$bus</code>事件上的事件设置此状态。</p>
<h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#basic-usage" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Basic usage</h3>
<h4 id="组件标记" tabindex="-1"><a class="header-anchor" href="#组件标记" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#component-markup" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>组件标记</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modal</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="可用事件" tabindex="-1"><a class="header-anchor" href="#可用事件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#available-events" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>可用事件：</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$bus.$emit(<span class="token punctuation">'</span>modal-toggle<span class="token punctuation">'</span>, <span class="token punctuation">'</span>modal-example<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$bus.$emit(<span class="token punctuation">'</span>modal-show<span class="token punctuation">'</span>, <span class="token punctuation">'</span>modal-example<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$bus.$emit(<span class="token punctuation">'</span>modal-hide<span class="token punctuation">'</span>, <span class="token punctuation">'</span>modal-example<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="可用属性" tabindex="-1"><a class="header-anchor" href="#可用属性" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#available-props" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>可用属性</h4>
<table>
<thead>
<tr>
<th>支柱</th>
<th>类型</th>
<th>必需的</th>
<th>默认</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>姓名</td>
<td>细绳</td>
<td>真的</td>
<td></td>
<td>模态的唯一名称</td>
</tr>
<tr>
<td>延迟</td>
<td>数字</td>
<td>错误的</td>
<td>300</td>
<td>显示模态超时</td>
</tr>
</tbody>
</table>
<h4 id="可用方法" tabindex="-1"><a class="header-anchor" href="#可用方法" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#available-methods" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>可用方法</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>争论</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>切换</td>
<td>状态：布尔值</td>
<td>手动切换模态</td>
</tr>
<tr>
<td>关闭</td>
<td></td>
<td>手动隐藏模态的别名。对关闭按钮很有帮助</td>
</tr>
</tbody>
</table>
<h4 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#styles" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>样式</h4>
<p>核心组件没有 CSS 样式。如果您想查看我们的实现示例，请看<a href="https://github.com/vuestorefront/vue-storefront/blob/master/src/themes/default/components/core/Modal.vue" target="_blank" rel="noopener noreferrer">这里（打开新窗口）<OutboundLink/></a></p>
<h2 id="事件列表" tabindex="-1"><a class="header-anchor" href="#事件列表" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#events-list" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>事件列表</h2>
<p>为了<code>$bus.$emit</code>更轻松地跟踪和调试跨组件的事件，这里列出了由默认主题的组件触发的此类事件。</p>
<h3 id="forgotpass" tabindex="-1"><a class="header-anchor" href="#forgotpass" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#forgotpass" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>ForgotPass</h3>
<p>在组件关闭时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Auth/ForgotPass.vue#L80" target="_blank" rel="noopener noreferrer"><code>modal-hide</code>, <code>modal-signup</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>在发送电子邮件操作：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Auth/ForgotPass.vue#L95" target="_blank" rel="noopener noreferrer"><code>notification-progress-start</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Auth/ForgotPass.vue#L97" target="_blank" rel="noopener noreferrer"><code>notification-progress-stop</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>关于电子邮件发送操作的错误处理程序：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Auth/ForgotPass.vue#L109" target="_blank" rel="noopener noreferrer"><code>notification-progress-stop</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="orderconfirmation" tabindex="-1"><a class="header-anchor" href="#orderconfirmation" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#orderconfirmation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>OrderConfirmation</h3>
<p>在安装的生命周期钩子上：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Checkout/OrderConfirmation.vue#L65" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-order-confirmation</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>关于订单确认：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Checkout/OrderConfirmation.vue#L71" target="_blank" rel="noopener noreferrer"><code>modal-hide</code>, <code>modal-order-confirmation</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>关于取消订单：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Checkout/OrderConfirmation.vue#L75" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-order-confirmation</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="orderreview" tabindex="-1"><a class="header-anchor" href="#orderreview" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#orderreview" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>OrderReview</h3>
<p>在“条款和条件”链接上单击：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Checkout/OrderReview.vue#L51" target="_blank" rel="noopener noreferrer"><code>modal-toggle</code>, <code>modal-terms</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="personaldetails" tabindex="-1"><a class="header-anchor" href="#personaldetails" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#personaldetails" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>PersonalDetails</h3>
<p>在“条款和条件”链接上单击：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Checkout/PersonalDetails.vue#L151" target="_blank" rel="noopener noreferrer"><code>modal-toggle</code>, <code>modal-terms</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="newsletter" tabindex="-1"><a class="header-anchor" href="#newsletter" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#newsletter" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Newsletter</h3>
<p>在时事通讯弹出显示中：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Footer/Newsletter.vue#L49" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-newsletter</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#header" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Header</h3>
<p>在“登录您的帐户”链接上单击：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Header/Header.vue#L122" target="_blank" rel="noopener noreferrer"><code>modal-toggle</code>, <code>modal-signup</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="reviews" tabindex="-1"><a class="header-anchor" href="#reviews" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#reviews" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Reviews</h3>
<p>在“登录您的帐户”链接上单击：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Reviews/Reviews.vue#L155" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-signup</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="sidebarmenu" tabindex="-1"><a class="header-anchor" href="#sidebarmenu" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#sidebarmenu" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>SidebarMenu</h3>
<p>在“登录您的帐户”链接上单击：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/SidebarMenu/SidebarMenu.vue#L201" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-signup</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="subcategory" tabindex="-1"><a class="header-anchor" href="#subcategory" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#subcategory" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>SubCategory</h3>
<p>在用户注销时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/SidebarMenu/SubCategory.vue#L131" target="_blank" rel="noopener noreferrer"><code>user-before-logout</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="language" tabindex="-1"><a class="header-anchor" href="#language" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#language" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Language</h3>
<p>在安装的生命周期钩子上：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Switcher/Language.vue#L55" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-switcher</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>在组件关闭时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/blocks/Switcher/Language.vue#L60" target="_blank" rel="noopener noreferrer"><code>modal-hide</code>, <code>modal-switcher</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="languageswitcher" tabindex="-1"><a class="header-anchor" href="#languageswitcher" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#languageswitcher" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>LanguageSwitcher</h3>
<p>在显示语言弹出窗口时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/LanguageSwitcher.vue#L30" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-switcher</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="newsletterpopup" tabindex="-1"><a class="header-anchor" href="#newsletterpopup" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#newsletterpopup" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>NewsletterPopup</h3>
<p>在显示时事通讯弹出窗口时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/NewsletterPopup.vue#L54" target="_blank" rel="noopener noreferrer"><code>modal-show</code>, <code>modal-newsletter</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<p>在隐藏通讯弹出窗口时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/core/NewsletterPopup.vue#L67" target="_blank" rel="noopener noreferrer"><code>modal-hide</code>, <code>modal-newsletter</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="onboard" tabindex="-1"><a class="header-anchor" href="#onboard" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#onboard" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Onboard</h3>
<p>在组件关闭时：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/components/theme/blocks/Home/Onboard.vue#L45" target="_blank" rel="noopener noreferrer"><code>modal-hide</code>, <code>modal-onboard</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/components.html#home" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Home</h3>
<p>在 beforeMount 生命周期钩子上：</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/blob/6c100f978aa79975e4db22be3cefa7f8d38b4c97/src/themes/default/pages/Home.vue#L74" target="_blank" rel="noopener noreferrer"><code>modal-toggle</code>, <code>modal-onboard</code><OutboundLink/></a></li>
</ul>
</template>
