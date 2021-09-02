<template><h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1>
<p>提醒</p>
<p>这份文件是<em>存档</em>和<em>不</em>具有这是最新版本的有关<code>1.11</code>在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>介绍</h2>
<p>所有数据处理和远程请求都应该由 Vuex 数据存储管理。核心模块<code>store</code>里面一般都包含文件夹。您可以通过响应事件来修改现有的存储操作。事件在下面的文档中指定，可以在<a href="https://github.com/vuestorefront/vue-storefront/tree/master/core" target="_blank" rel="noopener noreferrer">核心模块中<OutboundLink/></a>找到<a href="https://github.com/vuestorefront/vue-storefront/tree/master/core" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>，<code>EventBus.$emit</code>主要用于 Vuex Actions。</p>
<p>**您应该将所有 REST 调用、Elasticsearch 数据查询放在 Vuex 操作中。**这是我们管理数据的默认设计模式。</p>
<h3 id="vuex-conventions" tabindex="-1"><a class="header-anchor" href="#vuex-conventions" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-conventions" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vuex  conventions</h3>
<p>在开始使用 Vuex 之前，建议先熟悉我们的<a href="https://docs.vuestorefront.io/v1/guide/archives/vuex-conventions.html" target="_blank" rel="noopener noreferrer">vuex 约定<OutboundLink/></a></p>
<h3 id="vuex-modules" tabindex="-1"><a class="header-anchor" href="#vuex-modules" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vuex  modules</h3>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/product-store.html" target="_blank" rel="noopener noreferrer">产品<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/category-store.html" target="_blank" rel="noopener noreferrer">类别<OutboundLink/></a></li>
<li>[大车](https://docs.vuestorefront.io/v1/guide/archives/Cart Store.html)</li>
<li>[查看](https://docs.vuestorefront.io/v1/guide/archives/Checkout Store.html)</li>
<li>[命令](https://docs.vuestorefront.io/v1/guide/archives/Order Store.html)</li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/stock-store.html" target="_blank" rel="noopener noreferrer">库存<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/sync-store.html" target="_blank" rel="noopener noreferrer">同步<OutboundLink/></a></li>
<li>[用户](https://docs.vuestorefront.io/v1/guide/archives/User Store.html)</li>
<li><a href="https://docs.vuestorefront.io/v1/guide/archives/attribute-store.html" target="_blank" rel="noopener noreferrer">属性<OutboundLink/></a></li>
<li>[用户界面商店（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/Working with UI Store (interface state).md)</li>
</ul>
<h3 id="override-existing-core-modules" tabindex="-1"><a class="header-anchor" href="#override-existing-core-modules" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#override-existing-core-modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Override existing core modules</h3>
<p>现有的核心模块可以在主题存储中被覆盖。只需导入任何核心存储模块并使用<code>extendStore()</code>实用程序方法覆盖它们，如下面的<code>src/modules/ui-store/index.ts</code>.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import coreStore from '@vue-storefront/core/store/modules/ui-store'
import { extendStore } from '@vue-storefront/core/lib/themes'

const state = {
  // override state of core ui module...
}

const mutations = {
  // override mutations of core ui module...
}

const actions = {
  // override actions of core ui module...
}

export default extendStore(coreStore, {
  state,
  mutations,
  actions
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>然后将其导入 <code>src/modules/index.ts</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import ui from './ui-store'

export default {
  ui
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#related" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Related</h3>
<p><a href="https://docs.vuestorefront.io/v1/guide/archives/data.html" target="_blank" rel="noopener noreferrer">处理数据<OutboundLink/></a></p>
<h2 id="vuex-conventions-1" tabindex="-1"><a class="header-anchor" href="#vuex-conventions-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-conventions-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vuex conventions</h2>
<h3 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Module</h3>
<p>应该为一组特定的功能创建 Vuex 模块。它还应该对其他模块只有绝对必要的依赖关系。模块的名称应该简短，明确它的目的地，并且用破折号分隔单词。</p>
<p>很好的例子：</p>
<ul>
<li>产品</li>
<li>产品</li>
<li>用户</li>
<li>查看</li>
<li>比较产品</li>
<li>通知</li>
<li>命令</li>
</ul>
<p>不好的例子：</p>
<ul>
<li>下一个模块</li>
<li>比较（因为它没有说明它比较的是什么）</li>
</ul>
<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>State</h3>
<p>状态属性应该简单，并且它们的结构不应该嵌套。它们的名称以下划线表示法书写并指示它们包含的内容。我们应该避免一个对象的多个实例，即使在模块之间也是如此。在绝大多数情况下，它们可以通过其唯一 ID 属性进行引用。例子：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "products_map": {
    "WS08": {
      "sku": "WS08",
      "name": "Minerva LumaTech&amp;trade; V-Tee"
      // other options
    },
    "WS12": {
      "sku": "WS12",
      "name": "Radiant Tee"
      // other options
    },
    "WS08-XS-Black": {
        "sku": "WS08-XS-Black",
        "name": "Minerva LumaTech&amp;trade; V-Tee"
        // other options
    }
    // maaaaaaaany more products
  },
  "current_product_id": "WS08-XS-Black",
  "wishlist": ["MP01-32-Black", "MSH05-32-Black"],
  "cart_items": [
    {
      "sku": "WH09-XS-Green",
      "qty": 3
    },
    {
      "sku": "WH09-S-Red",
      "qty": 1
    }
  ]
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>很好的例子：</p>
<ul>
<li>category_map</li>
<li>current_category_id</li>
<li>命令</li>
<li>product_parent_id</li>
</ul>
<p>不好的例子</p>
<ul>
<li>列表</li>
<li>元素</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>filters: {
  available: {},
  chosen: {}
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Getters</h3>
<p>Vuex 状态，除了突变，应该总是被 getter 访问，包括操作。吸气剂应该：</p>
<ul>
<li>从<code>is</code>返回布尔值时开始，<code>get</code>否则</li>
<li>回答问题 <code>what am I returning?</code></li>
<li>包含模块名称以确保 getter 在整个 Vuex 中是唯一的，但不必以该名称开头。首先，它应该有一个自然的名字，例如我们有 module<code>category</code>和 state <code>availableFilters</code>。所以<code>what am I returning?</code>-&gt;<code>available Filters</code>而这些过滤器是<code>category filters</code>. 它不是布尔值，它是一个数组或映射，所以我们从<code>get</code>-&gt;<code>getAvailableCategoryFilters</code></li>
</ul>
<p>很好的例子：</p>
<ul>
<li>对于状态用户 -&gt; isUserLoggedIn, getUser</li>
<li>对于状态 availableFilters -&gt; getAvailableCategoryFilters</li>
<li>对于状态 currentProductId -&gt; getCurrentProduct（因为它从地图获取产品对象），getCurrentProductId</li>
</ul>
<p>不好的例子：</p>
<ul>
<li>总计</li>
<li>产品</li>
<li>当前的</li>
<li>列表</li>
</ul>
<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Actions</h3>
<p>模块外部的每个状态更改都应作为操作调用。行动旨在：</p>
<ul>
<li>从服务器（或缓存）获取一些东西——在这种情况下，它们必须是异步的（返回承诺）。</li>
<li>改变当前模块的状态。</li>
<li>从同一模块分派动作（以避免重复逻辑）。</li>
<li>从另一个模块调度操作（仅在绝对需要时）。</li>
<li>它们的名称应尽可能独特，并简单地描述将发生的具体操作。**几乎每个动作都应该返回 promise。**我们允许您在新模块中复制现有方法（如 list 或 single ）的约定，以获得一致的 API。</li>
</ul>
<p>很好的例子：</p>
<ul>
<li>fetchProduct - 根据 ID 从服务器或缓存获取产品，将其设置在产品映射中，并通过 getter 返回。</li>
<li>findProducts - 通过特定查询获取产品，将它们设置在产品映射中，并将它们作为数组返回。</li>
<li>setCurrentProduct - 参数可以是 ID，它可以分派 fetchProduct，将其变异为 productsMap，并将其 ID 变异为 currentProductId。此外，如果 productId 为 null，则它会删除 currentProduct。</li>
<li>添加购物车项目</li>
<li>切换微车</li>
</ul>
<p>不好的例子：</p>
<ul>
<li>产品</li>
<li>重启</li>
</ul>
<h3 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#mutations" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Mutations</h3>
<p>最后我们有突变。只有突变可以改变模块的状态。它们应该是同步的（从不返回承诺），不包含任何逻辑（非常快），除了需要保持状态原样（例如，为状态设置默认值）。突变只能由来自同一模块的操作调用。在大多数情况下，它应该只是调用特定突变的单个操作。突变类型：</p>
<ul>
<li>SET_ - 最常见的突变类型。它可以设置一个对象（或整个数组），设置对象的默认值（或者可能是干净的数组），</li>
<li>ADD_ - 它可以添加一个新元素到状态属性，它是一个数组或添加新元素到映射。</li>
<li>REMOVE_ - 与 ADD 相对。它可以通过索引删除地图元素或数组元素（或通过查找对象，不推荐在大数组上使用，因为变异可能很慢）。</li>
</ul>
<p>很好的例子：</p>
<ul>
<li>添加_产品</li>
<li>SET_CURRENT_PRODUCT_ID</li>
<li>ADD_CATEGORY_FILTER</li>
<li>REMOVE_WISHLIST_PRODUCT_ID</li>
</ul>
<p>不好的例子：</p>
<ul>
<li>CATEGORY_UPD_CURRENT_CATEGORY</li>
<li>TAX_UPDATE_RULES</li>
</ul>
<h2 id="产品-vuex-商店" tabindex="-1"><a class="header-anchor" href="#产品-vuex-商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#product-vuex-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>产品 Vuex 商店</h2>
<p>Product Store 旨在处理与产品数据相关的所有操作。它负责加载产品列表或单个产品以及配置可配置产品和管理产品附件。</p>
<p>该模块与 Elasticsearch 紧密配合，并在<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">Product 数据格式上运行<OutboundLink/></a></p>
<h3 id="state-1" tabindex="-1"><a class="header-anchor" href="#state-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>State</h3>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>产品状态通常仅由两种方法填充 -<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">列表 （打开新窗口）<OutboundLink/></a>和<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L428" target="_blank" rel="noopener noreferrer">单身 （打开新窗口）<OutboundLink/></a>- 并通过<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215" target="_blank" rel="noopener noreferrer">重置<OutboundLink/></a>清除为默认值<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<p>产品状态数据：</p>
<ul>
<li><code>breadcrumbs</code>- 这是<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">面包屑组件<OutboundLink/></a>使用的路由列表<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>current</code>- 这是具有选定<code>configurable_children</code>变体的产品对象，因此它是基本产品，其属性被选定<code>configurable_children</code>变体的值覆盖；它在<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203" target="_blank" rel="noopener noreferrer">Product.vue 页面<OutboundLink/></a>上使用<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>. 这是在“加入购物车”后加入购物车的产品</li>
<li><code>current_options</code>- 用于在<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56" target="_blank" rel="noopener noreferrer">Product.vue 页面<OutboundLink/></a>上填充变体选择器的列表<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>. 它包含属性字典以及可能的属性值和标签，并由<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344" target="_blank" rel="noopener noreferrer">setupVariants<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>根据<code>configurable_children</code>财产。</li>
<li><code>current_configuration</code>当前产品配置。选定变体属性的字典；例如，它包含一个选定产品属性的字典：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>请注意，我们使用的是类似 Magento 的 EAV 属性结构，因此这里的值是属性值索引，而不是值本身。请查看<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">数据格式<OutboundLink/></a>以供参考。</p>
<ul>
<li><code>parent</code>- 如果当前产品是 a <code>type_id=&quot;single&quot;</code>，则在此变量<code>configurable</code>中存储父产品。此数据仅<code>Product.vue</code>由<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323" target="_blank" rel="noopener noreferrer">checkConfigurableParent<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>list</code>- 这是由<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">列表<OutboundLink/></a>加载的一系列产品<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>original</code>- 仅用于<code>configurable</code>产品，这是没有选定变体的基础产品。</li>
<li><code>related</code>- 这是相关产品的字典；设置在这家商店外（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/src/themes/default/components/core/blocks/Product/Related.vue" target="_blank" rel="noopener noreferrer">例如这里 （打开新窗口）<OutboundLink/></a>) 通过调用和<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L528" target="_blank" rel="noopener noreferrer">相关操作（打开新窗口）<OutboundLink/></a></li>
</ul>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Events</h3>
<p>以下事件是从<code>product</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('product-after-priceupdate', product)</code>- 来自<a href="https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L33" target="_blank" rel="noopener noreferrer">同步产品价格 （打开新窗口）<OutboundLink/></a>产品价格与 Magento 同步后。</li>
<li><code>EventBus.$emit('product-after-configure', { product: product, configuration: configuration, selectedVariant: selectedVariant })</code>from <code>configureProductAsync</code>（由<code>product/configure</code>之后的动作调用<code>product/single</code>）。此事件在产品页面上提供有关所选产品变体的信息。</li>
<li><code>EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, result: resp })</code>- 此事件通过<code>product/list</code>提供当前过滤器等返回当前产品列表。您可以通过设置<code>meta</code>属性来标记特定的产品列表标识符；这很重要，因为在单个页面上，可以为每个单独的产品块多次执行此事件。</li>
<li><code>EventBus.$emit('product-after-single', { key: key, options: options, product: cachedProduct })</code>- 加载单个产品后（通过<code>product/single</code>操作调用）。</li>
</ul>
<h3 id="actions-1" tabindex="-1"><a class="header-anchor" href="#actions-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Actions</h3>
<p>产品商店提供以下公共操作：</p>
<h4 id="setupbreadcrumbs-context-product" tabindex="-1"><a class="header-anchor" href="#setupbreadcrumbs-context-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupbreadcrumbs-context-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>setupBreadcrumbs (context, { product })</code></h4>
<p>该方法负责<code>state.breadcrumbs</code>在<code>Product.vue</code>页面上使用的设置。它是从 调用的<code>Product.vue:fetchData</code>。所述<code>product</code>参数是一个<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">Elasticsearch产品对象<OutboundLink/></a>。</p>
<h4 id="syncplatformpricesover-context-skus" tabindex="-1"><a class="header-anchor" href="#syncplatformpricesover-context-skus" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#syncplatformpricesover-context-skus" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>syncPlatformPricesOver(context, { skus })</code></h4>
<p>当 config 选项<code>products.alwaysSyncPlatformPricesOver</code>打开时，Vue Storefront 将在每次调度<code>product/single</code>或<code>product/list</code>操作时请求当前产品价格。它由这些操作专门调用，不应手动调用。此方法调用<code>vue-storefront-api</code>代理从 Magento 或任何其他后端 CMS 获取当前价格。</p>
<p><code>skus</code> - 这是一个包含要同步的产品 SKU 的数组。</p>
<h4 id="setupassociated-context-product" tabindex="-1"><a class="header-anchor" href="#setupassociated-context-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupassociated-context-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>setupAssociated (context, { product })</code></h4>
<p>此方法被称为后续调用<code>Product.vue:fetchData</code>或<code>product/list</code>操作。它用于获取子产品<code>grouped</code>或<code>bundle</code>产品类型。</p>
<h4 id="checkconfigurableparent-context-product" tabindex="-1"><a class="header-anchor" href="#checkconfigurableparent-context-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#checkconfigurableparent-context-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>checkConfigurableParent (context, {product})</code></h4>
<p>调用此方法<code>Product.vue:fetchData</code>以检查当前的简单产品是否具有可配置的父级。如果是，则重定向到父产品。这是<a href="https://github.com/vuestorefront/vue-storefront/issues/508" target="_blank" rel="noopener noreferrer">#508<OutboundLink/></a>的修复<a href="https://github.com/vuestorefront/vue-storefront/issues/508" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<h4 id="setupvariants-context-product" tabindex="-1"><a class="header-anchor" href="#setupvariants-context-product" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupvariants-context-product" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>setupVariants (context, { product })</code></h4>
<p>此方法随后被调用<code>Product.vue:fetchData</code>以加载 中定义的所有可配置属性<code>product.configurable_options</code>，然后填充<code>state.current_configuration</code>和<code>state.current_options</code>。此操作的主要用途是在产品页面上准备用户要配置的产品，并正确显示产品配置器 UI。</p>
<h4 id="list-context-query-start-0-size-50-entitytype-product-sort-cachebykey-sku-prefetchgroupproducts-true-updatestate-true-meta" tabindex="-1"><a class="header-anchor" href="#list-context-query-start-0-size-50-entitytype-product-sort-cachebykey-sku-prefetchgroupproducts-true-updatestate-true-meta" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-query-start-0-size-50-entitytype-product-sort-cachebykey-sku-prefetchgroupproducts-true-updatestate-true-meta" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>list (context, { query, start = 0, size = 50, entityType = 'product', sort = '', cacheByKey = 'sku', prefetchGroupProducts = true, updateState = true, meta = {} })</code></h4>
<p>这是加载产品列表的关键方法。它返回包含产品列表对象的 Promise。这种方法应该在您需要获取产品数据的任何地方使用。当<code>config.tax.calculateServerSide=false</code>此方法运行产品税计算器并根据需要与 Magento 同步价格时。</p>
<p><strong>Events</strong>：此方法将产品列表作为<code>EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, meta: meta, result: resp })</code></p>
<p>Important</p>
<p>此方法通过将整个查询结果对象存储到<code>localForage</code>每个产品中并单独缓存每个产品（例如，在产品页面上使用）来同步产品以供离线使用。</p>
<ul>
<li><code>query</code>- 这是<code>bodybuilder</code>Elasticsearch 查询（请检查<code>bodybuilder</code>包或例如<code>Home.vue</code>参考如何使用它）。</li>
<li><code>start</code>, <code>size</code>- 两个参数都用于分页；start 是起始索引；size 是页面大小。</li>
<li><code>entityType</code>- 默认情况下，它当然设置为<code>product</code>并映射到 Elasticsearch 实体类。</li>
<li><code>sort</code>- 用于排序的产品属性。此字段必须在 Elasticsearch 中映射为数字字段，</li>
<li><code>prefetchGroupProducts</code>- 默认情况下，它设置为 true 并导致<code>setupAssociated</code>调度操作以获取所有关联的产品</li>
<li><code>updateState</code>- 如果您将此设置为 false，<code>state.list</code>则不会更新，只会退回产品。</li>
<li><code>meta</code>- 这是一个与<code>product-after-list</code>事件一起返回的可选属性；例如，它可以用于标记任何特定的 ES 调用。</li>
</ul>
<h4 id="single-context-options-setcurrentproduct-true-selectdefaultvariant-true-key-sku" tabindex="-1"><a class="header-anchor" href="#single-context-options-setcurrentproduct-true-selectdefaultvariant-true-key-sku" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#single-context-options-setcurrentproduct-true-selectdefaultvariant-true-key-sku" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>single (context, { options, setCurrentProduct = true, selectDefaultVariant = true, key = 'sku' })</code></h4>
<p>此方法随后调度<code>product/list</code>操作以获取产品并同步税金/价格。当最近通过<code>product/list</code>此方法下载产品时，将从 中返回缓存的版本<code>localForage</code>，但无论如何都要更新缓存。</p>
<h4 id="configure-context-product-null-configuration-selectdefaultvariant-true" tabindex="-1"><a class="header-anchor" href="#configure-context-product-null-configuration-selectdefaultvariant-true" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#configure-context-product-null-configuration-selectdefaultvariant-true" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>configure (context, { product = null, configuration, selectDefaultVariant = true })</code></h4>
<p>此操作用于配置<code>configurable</code>具有指定属性的产品。它获取<code>configuration</code>应具有以下格式的对象：<code>{ attribute_code: attribute_value_id }</code>并找到<code>product.configurable_children</code>符合此配置的项目。然后，它将此特定内容<code>configurable_child</code>与产品本身合并- 例如，将 product.price 设置为可配置的价格、颜色、尺寸等。此方法用于：<code>Product.vue</code>允许用户选择颜色、尺寸等的页面。第二种用法为它<code>Category.vue</code>在用户选择一些过滤器后出现在页面上 - 生成的产品被配置为显示正确的图像（与选定的颜色和尺寸相关）和价格。</p>
<p>如果<code>selectDefaultVariant</code>设置为 true（默认），<code>state.current</code>则将根据配置的产品进行更改。</p>
<h4 id="setcurrent-context-productvariant" tabindex="-1"><a class="header-anchor" href="#setcurrent-context-productvariant" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setcurrent-context-productvariant" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>setCurrent (context, productVariant)</code></h4>
<p>辅助方法只是设置<code>state.current</code>为 productVariant。</p>
<h4 id="setoriginal-context-originalproduct" tabindex="-1"><a class="header-anchor" href="#setoriginal-context-originalproduct" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setoriginal-context-originalproduct" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>setOriginal (context, originalProduct)</code></h4>
<p>辅助方法只是设置<code>state.original</code>为 originalProduct。</p>
<h4 id="related-context-key-related-products-items" tabindex="-1"><a class="header-anchor" href="#related-context-key-related-products-items" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#related-context-key-related-products-items" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>related (context, { key = 'related-products', items })</code></h4>
<p>更改<code>state.related</code>字典以设置要在<code>Product.vue</code>页面上显示的相关产品的特定列表（<code>RelatedProducts</code>组件用于此）。</p>
<h3 id="getters-1" tabindex="-1"><a class="header-anchor" href="#getters-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Getters</h3>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getParentProduct</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>parent<span class="token punctuation">,</span>
  <span class="token function-variable function">getCurrentProduct</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
  <span class="token function-variable function">getCurrentProductConfiguration</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current_configuration<span class="token punctuation">,</span>
  <span class="token function-variable function">getOriginalProduct</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>original<span class="token punctuation">,</span>
  <span class="token function-variable function">getCurrentProductOptions</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current_options<span class="token punctuation">,</span>
  <span class="token function-variable function">breadcrumbs</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>breadcrumbs<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="category-vuex-store" tabindex="-1"><a class="header-anchor" href="#category-vuex-store" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#category-vuex-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Category Vuex Store</h2>
<p>类别存储旨在处理与类别数据相关的所有操作。</p>
<p>该模块与 Elasticsearch 紧密配合，并在<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">Product 数据格式上运行<OutboundLink/></a></p>
<h3 id="state-2" tabindex="-1"><a class="header-anchor" href="#state-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>State</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  current<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  filters<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  breadcrumbs<span class="token operator">:</span> <span class="token punctuation">{</span> routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  current_path<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// list of categories from root to current</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>类别状态通常仅由两种方法填充 -<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L38" target="_blank" rel="noopener noreferrer">列表 （打开新窗口）<OutboundLink/></a>和<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70" target="_blank" rel="noopener noreferrer">单身 （打开新窗口）<OutboundLink/></a>- 并通过<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28" target="_blank" rel="noopener noreferrer">重置<OutboundLink/></a>清除为默认值<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<p>笔记</p>
<p>该操作仅<code>category/single</code>使用<code>localForage</code>缓存——不直接使用Elasticsearch 数据存储。由于此优化，<code>category/list</code>首先通过调度下载类别列表。</p>
<p>类别状态数据：</p>
<ul>
<li><code>breadcrumbs</code>- 这是<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">面包屑组件<OutboundLink/></a>使用的路由列表<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li><code>current</code> - 这是当前类别对象。</li>
<li><code>filters</code>是类别过滤器的当前状态，所选变体属性的字典；例如，它包含选定产品属性的字典：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>请注意，我们使用的是类似 Magento 的 EAV 属性结构，因此这里的值是属性值索引，而不是值本身。请查看<a href="https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html" target="_blank" rel="noopener noreferrer">数据格式<OutboundLink/></a>以供参考</p>
<ul>
<li><code>current_path</code> - 这是类别对象的列表：从当前类别到顶级根，</li>
</ul>
<h3 id="events-1" tabindex="-1"><a class="header-anchor" href="#events-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Events</h3>
<p>以下事件是从<code>category</code>商店发布的：</p>
<ul>
<li><code>EventBus.$emit('category-after-single', { category: mainCategory })</code>- 从<a href="https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70" target="_blank" rel="noopener noreferrer">类别/单 （打开新窗口）<OutboundLink/></a>加载单个类别后。</li>
<li><code>EventBus.$emit('category-after-current', { category: category })</code>- 当前类别更改后 - 这是后续<code>category/single</code>行动号召。</li>
<li><code>EventBus.$emit('category-after-reset', { })</code> - 类别重置后（例如，在从一个类别页面移动到另一个类别的过程中）。</li>
<li><code>EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })</code>- 此事件发出当前类别列表，因为它由 返回<code>category/list</code>。</li>
</ul>
<h3 id="actions-2" tabindex="-1"><a class="header-anchor" href="#actions-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Actions</h3>
<p>购物车商店提供以下公共操作：</p>
<h4 id="list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc" tabindex="-1"><a class="header-anchor" href="#list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>list (context, { parent = null, onlyActive = true, onlyNotEmpty = false, size = 4000, start = 0, sort = 'position:asc' })</code></h4>
<p>这是加载类别列表的关键方法。它返回包含产品列表对象的 Promise。这种方法应该在您需要获取产品数据的任何地方使用。</p>
<h4 id="single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true" tabindex="-1"><a class="header-anchor" href="#single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>single (context, { key, value, setCurrentCategory = true, setCurrentCategoryPath = true })</code></h4>
<p>此方法从<code>localForage</code>.</p>
<p>Important</p>
<p>要使此方法起作用，您应该先调用<code>category/list</code>。这个分类只对localForage有效，不能直接访问Elasticsearch</p>
<p>Important</p>
<p>此方法通过将整个查询结果对象存储到<code>localForage</code>每个类别中并单独缓存每个类别（例如，在产品页面上使用）来同步产品以供离线使用。</p>
<p><strong>Events</strong>：此方法发出类别列表为<code>EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })</code></p>
<ul>
<li><code>parent</code>- <code>category</code>- 仅加载子类别的对象。</li>
<li><code>start</code>, <code>size</code> - 两个参数都用于分页；start 是起始索引；size 是页面大小。</li>
<li><code>onlyActive</code> - (bool) 仅加载 CMS 中标记为活动的类别（例如，在 Magento 中）。</li>
<li><code>sort</code>- 用于排序的类别属性。此字段必须在 Elasticsearch 中映射为数字字段。</li>
<li><code>onlyNotEmpty</code> - (bool) 仅加载包含任何产品的类别。</li>
</ul>
<h3 id="getters-2" tabindex="-1"><a class="header-anchor" href="#getters-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Getters</h3>
<p>所有状态成员只能由 getter 访问。请查看数据格式的状态参考。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">current</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
  <span class="token function-variable function">list</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="stock-vuex-store" tabindex="-1"><a class="header-anchor" href="#stock-vuex-store" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#stock-vuex-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Stock Vuex Store</h2>
<p>Stock Store 旨在处理库存数量检查。</p>
<h3 id="events-2" tabindex="-1"><a class="header-anchor" href="#events-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Events</h3>
<p>以下事件是从<code>stock</code>商店发布的：</p>
<ul>
<li><code>stock-after-check</code> - 在从电子商务后端/Magento 收到库存项目后立即发出。</li>
</ul>
<h3 id="actions-3" tabindex="-1"><a class="header-anchor" href="#actions-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Actions</h3>
<p>购物车商店提供以下公共操作：</p>
<h4 id="check-context-product-qty-1" tabindex="-1"><a class="header-anchor" href="#check-context-product-qty-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#check-context-product-qty-1" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>check (context, { product, qty = 1 })</code></h4>
<p>检查是否<code>product</code>可以将给定数量的商品添加到购物车中。</p>
<p>生成的 promise 扩展为以下对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  qty<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  status<span class="token operator">:</span> <span class="token string">'ok'</span><span class="token punctuation">,</span> <span class="token comment">// another option is: 'out_of_stock'</span>
  onlineCheckTaskId<span class="token operator">:</span> <span class="token number">14241</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="attribute-vuex-store" tabindex="-1"><a class="header-anchor" href="#attribute-vuex-store" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#attribute-vuex-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a> Attribute Vuex Store</h2>
<p>属性存储旨在处理与属性管理相关的所有操作。</p>
<h3 id="state-3" tabindex="-1"><a class="header-anchor" href="#state-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>State</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    list_by_code<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    list_by_id<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    labels<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>因为我们以与 Magento 非常相似的方式使用属性字典进行产品管理（<a href="http://www.xpertdeveloper.com/2010/10/what-is-eav-model-in-magento/" target="_blank" rel="noopener noreferrer">EAV 模型 （打开新窗口）<OutboundLink/></a>)，我们正在对属性、属性类型和字典进行操作。</p>
<p>属性由用户通过调用方法<strong>显式</strong>加载<code>attribute/list</code>。例如，当您要使用产品的可自定义属性或变体时，您需要预取属性元数据：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'attribute/list'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  filterValues<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  filterField<span class="token operator">:</span> <span class="token string">'is_user_defined'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这是<a href="https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue" target="_blank" rel="noopener noreferrer">产品比较功能<OutboundLink/></a>的示例<a href="https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<p>属性状态数据：</p>
<ul>
<li><code>list_by_code</code>- 这是一个字典，您可以通过访问<code>list_by_code['color']</code>等来获取特定属性。</li>
<li><code>list_by_id</code>- 这是一个字典，您可以通过访问<code>list_by_id[123]</code>等来获取特定属性。</li>
<li><code>labels</code> - 属性值的预加载标签（EAV 中的 V）。</li>
</ul>
<h3 id="actions-4" tabindex="-1"><a class="header-anchor" href="#actions-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Actions</h3>
<p>属性存储提供以下公共操作：</p>
<h4 id="列表-上下文-filtervalues-null-filterfield-attribute-code-size-150-start-0" tabindex="-1"><a class="header-anchor" href="#列表-上下文-filtervalues-null-filterfield-attribute-code-size-150-start-0" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-filtervalues-null-filterfield-attribute-code-size-150-start-0" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>`列表（上下文，{filterValues = null，filterField = 'attribute_code'，size = 150，start = 0 }）``</h4>
<p>此方法用于加载属性元数据。<code>filterValues</code>就像多个值的阵列：<code>['color', 'size']</code>和<code>filterField</code>是属性字段来比较<code>filterValues</code>针对。通常，它是<code>attribute_code</code>或<code>attribute_id</code>。该<code>size</code>和<code>start</code>只是用来限制列表。</p>
<h3 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#helpers" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a> Helpers</h3>
<p>属性模块导出一种非常流行的辅助方法：</p>
<h4 id="export-function-optionlabel-state-attributekey-searchby-code-optionid" tabindex="-1"><a class="header-anchor" href="#export-function-optionlabel-state-attributekey-searchby-code-optionid" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#export-function-optionlabel-state-attributekey-searchby-code-optionid" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>export function optionLabel (state, { attributeKey, searchBy = 'code', optionId })</code></h4>
<p>这用于获取特定<code>optionId</code>. 例如，当用户过滤产品并使用 165 个 attribute_value 时，我们可以调用<code>optionLabel( { attributeKey: 'color', optionId: 165 })</code>以取回 'Red' 标签。</p>
<h3 id="getters-3" tabindex="-1"><a class="header-anchor" href="#getters-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Getters</h3>
<p>所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">attributeListByCode</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list_by_code<span class="token punctuation">,</span>
  <span class="token function-variable function">attributeListById</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>list_by_id<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
