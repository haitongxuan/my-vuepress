<template><h1 id="升级注意事项" tabindex="-1"><a class="header-anchor" href="#升级注意事项" aria-hidden="true">#</a> 升级注意事项</h1>
<p>我们正在努力使升级过程尽可能简单。不幸的是，有时需要手动更改代码。在拉出最新版本之前，请先看看下面的升级说明：</p>
<h2 id="_1-11-1-12" tabindex="-1"><a class="header-anchor" href="#_1-11-1-12" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-11-1-12" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.11 -&gt; 1.12</h2>
<p>添加到 1.12 的大多数更改都是向后兼容的。要启用新功能（主要是优化功能），请按照以下步骤操作。</p>
<p><strong>删除健美和压缩 API 响应</strong></p>
<p><code>api-search-query</code>添加了新的搜索适配器。当您切换到它时，通过设置<code>config.server.api = &quot;api-search-query&quot;</code>正在构建的 ElasticSearch 查询<a href="https://github.com/vuestorefront/vue-storefront-api/pull/390" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api</code> （打开新窗口）<OutboundLink/></a>这节省了大约 400kB 的包大小，因为<code>bodybuilder</code>前端不再需要。</p>
<p>这个新<code>api-search-query</code>适配器支持<code>response_format</code>现在发送到<code>/api/catalog</code>端点的查询参数。目前仅支持一种附加格式：<code>response_format=compact</code>. 使用时，响应格式通过以下方式得到优化： a) 重新映射结果，<code>_source</code>从<code>hits.hits</code>; b) 根据 压缩 JSON 字段名称<code>config.products.fieldsToCompact</code>；c) 从<code>product.configurable_children</code>它们的值 === 父产品值中删除 JSON 字段；整体响应大小减少了 -70% 以上。</p>
<p><strong>重新启用放大器渲染器</strong></p>
<p>该<code>amp-renderer</code>模块已默认禁用以保存捆绑包大小；如果您想启用它从取消注释模块<code>src/modules</code>并取消<code>product-amp</code>和<code>category-amp</code>被添加到链接<code>&lt;head&gt;</code>部分中<code>src/themes/default/Product.vue</code>和<code>src/themes/default/Category.vue</code></p>
<p><strong>检查实体优化设置</strong></p>
<p>如果实体优化被禁用，购物车优化会自动禁用。现在它们可以彼此独立使用。如果您不想使用购物车优化，请确保<code>entities.optimizeShoppingCart</code>明确禁用配置条目。</p>
<p><strong>已弃用的操作和助手</strong></p>
<p>产品模块已经重构，这里是不再使用的操作列表，您可以删除它们以减少捆绑。</p>
<ul>
<li>弃用的操作：
<ul>
<li>产品/重置</li>
<li>产品/设置面包屑</li>
<li>产品/syncPlatformPricesOver</li>
<li>产品/设置相关</li>
<li>产品/负载可配置属性</li>
<li>产品/设置变体</li>
<li>product/filterUnavailableVariants</li>
<li>产品列表</li>
<li>产品/预配置关联</li>
<li>产品/预配置产品</li>
<li>产品/配置LoadedProducts</li>
<li>产品/配置BundleAsync</li>
<li>产品/配置GroupedAsync</li>
<li>产品/配置</li>
<li>产品/设置当前选项</li>
<li>产品/设置当前错误</li>
<li>产品/套原件</li>
<li>产品/加载产品属性</li>
<li>类别/列表（新动作是 category-next/fetchMenuCategories）</li>
</ul>
</li>
<li>弃用的助手：
<ul>
<li>配置产品异步</li>
<li>填充产品配置异步</li>
<li>setConfigurableProductOptionsAsync</li>
</ul>
</li>
</ul>
<p>以下是从 1.12 开始在产品模块中使用的操作列表：</p>
<ul>
<li>产品/doPlatformPricesSync</li>
<li>产品/单个</li>
<li>产品/检查ConfigurableParent</li>
<li>产品/查找产品</li>
<li>产品/查找ConfigurableParent</li>
<li>产品/设置自定义选项</li>
<li>产品/setBundleOptions</li>
<li>产品/集当前</li>
<li>产品/负载产品</li>
<li>产品/添加CustomOptionValidator</li>
<li>产品/套装ProductGallery</li>
<li>product/loadProductBreadcrumbs</li>
<li>产品/获取产品变体</li>
</ul>
<p>所有不推荐使用的操作和助手都可以删除，因此您将拥有更小的包。评论这些行：</p>
<ul>
<li>核心/模块/目录/商店/产品/actions.ts:318</li>
<li>核心/模块/目录/helpers/index.ts:14-18</li>
<li>核心/模块/catalog-next/store/category/actions.ts:265</li>
</ul>
<h2 id="_1-10-1-11" tabindex="-1"><a class="header-anchor" href="#_1-10-1-11" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-10-1-11" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.10 -&gt; 1.11</h2>
<p>这是 Vue Storefront 1.x 在 2.0 之前的最后一个主要版本，因此需要更多的手动更新以尽可能长时间地保持外部包与 1.x 兼容。</p>
<ul>
<li><code>src/modules/index.ts</code>重命名为<code>client.ts</code>，导出的属性重命名为<code>registerClientModules</code></li>
<li>增加了输出压缩模块；它在生产版本中默认启用；要禁用它，请切换<code>src/modules/server.ts</code>配置</li>
<li>这 <a href="https://github.com/vuestorefront/vue-storefront/blob/develop/core/modules/url/helpers/index.ts" target="_blank" rel="noopener noreferrer"><code>formatCategoryLink</code> （打开新窗口）<OutboundLink/></a>现在支持 multistore -<code>storeCode</code>必要时添加；它可能会导致双重存储前缀，例如<code>/de/de</code>- 但可能仅在面包屑中（#3359）</li>
<li>所有模块都重构为新的 API。在 2.0 之前，您仍然可以以以前的格式注册模块</li>
<li><code>DroppointShipping</code>和<code>magento-2-cms</code>模块被删除</li>
<li>示例模块移至 https://github.com/vuestorefront/vsf-samples</li>
<li><code>core/helpers/initCacheStorage.ts</code>合并<code>StorageManager.ts</code>（添加了向后兼容的导入路径别名）</li>
<li>旧的扩展机制（VS 1.4之前）在被弃用近一年后终于被移除（<code>src/extensions</code>移除）</li>
<li>缓存集合被重组。在大多数情况下，本地存储键保持不变，只有集合键是统一的。它们也仅用于核心。发布更改以防有人在其模块中使用这些集合；
<ul>
<li><code>syncTaskCollection</code> 重命名为 <code>syncTasks</code></li>
<li><code>compareCollection</code> 重命名为 <code>compare</code></li>
<li><code>cmsData</code> 重命名为 <code>cms</code></li>
<li><code>cartsCollection</code> 重命名为 <code>carts</code></li>
<li><code>checkoutFieldValues</code>,<code>checkoutFieldsCollection</code>重命名为<code>checkout</code>(<code>checkoutFieldsCollection</code>未使用)</li>
<li><code>ordersCollection</code>并<code>orders</code>更名为刚<code>orders</code>（<code>ordersCollection</code>未使用）</li>
<li><code>elasticCacheCollection</code> 重命名为 <code>elasticCache</code></li>
<li><code>usersCollection</code> <code>usersData</code> 合并并重命名为 <code>user</code></li>
<li><code>attributesCollection</code>,<code>attributes</code>重命名为 just<code>attributes</code></li>
<li><code>ordersHistoryCollection</code>合并到<code>user</code>它所属的缓存</li>
<li><code>categoriesCollection</code> 重命名为类别</li>
<li>主题中的集合<code>claimsCollection</code>（索赔模块）保持不变</li>
</ul>
</li>
<li><code>UserOrder</code>组件已重命名为<code>UserOrderHistory</code>并从<code>src/modules/order-history/components/UserOrders</code>移至<code>@vue-storefront/core/modules/order/components/UserOrdersHistory</code>. 此组件用于<code>MyOrders</code>此处找到的组件：<code>src/themes/default/components/core/blocks/MyAccount/MyOrders.vue</code>。在此文件<code>import</code>中，必须更新路径。</li>
<li><code>claims</code>，<code>promoted-offers</code>，<code>homepage</code>和<code>ui</code>模块已经从移动<code>@vue-storefront/src/modules</code>到<code>src/themes/default/store/</code>和减少到只存储。
删除这些文件夹：
- <code>src/modules/claims</code>
- <code>src/modules/promoted-offers</code>
- <code>src/modules/homepage</code>
-<code>src/modules/ui-store</code>
复制文件夹<code>theme/store/</code>的<code>theme default</code>。
注册在<code>src/themes/default/index.js</code>. 为此，将它们与<code>StorageManager</code>方法一起导入，用于替换<code>claims beforeRegistration hook</code>.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/storage-manager'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token keyword">as</span> claimsStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'theme/store/claims'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token keyword">as</span> homeStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'theme/store/homepage'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token keyword">as</span> uiStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'theme/store/ui'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token keyword">as</span> promotedStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'theme/store/promoted-offers'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>接下来， inside<code>initTheme</code>方法使用<code>store.registerModule</code>方法来注册商店。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>StorageManager<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string">'claims'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'claims'</span><span class="token punctuation">,</span> claimsStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'homepage'</span><span class="token punctuation">,</span> homeStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'ui'</span><span class="token punctuation">,</span> uiStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'promoted'</span><span class="token punctuation">,</span> promotedStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>WebShare</code>从 移动<code>@vue-storefront/core/modules/social-share/components/WebShare.vue</code>到<code>@vue-storefront/src/themes/default/components/theme/WebShare.vue</code>。此组件用于<code>Product</code>此处找到的组件：<code>src/themes/default/pages/Product.vue</code>。在此文件<code>import</code>中，必须更新路径。</li>
<li>我们修复了产品价格的命名策略；以下字段已重命名：<code>special_priceInclTax</code>-&gt; <code>special_price_incl_tax</code>, <code>priceInclTax</code>-&gt; <code>price_incl_tax</code>, <code>priceTax</code>-&gt; <code>price_tax</code>; 名称已保留并标记为@deprecated。<strong>Vue Storefront 2.0rc-1</strong>将<strong>删除</strong>这些字段。</li>
<li>我们<code>localStorage</code>通过引入新的配置变量减少了配额使用和错误处理：</li>
<li><code>config.products.disablePersistentProductsCache</code>不按 SKU 存储产品（默认情况下它是打开的）。无论如何，产品都缓存在 ServiceWorker 缓存中，因此<code>product/list</code>将填充内存缓存 ( <code>cache.setItem(..., memoryOnly = true)</code>)；</li>
<li><code>config.seo.disableUrlRoutesPersistentCache</code>- 不存储 url 映射；无论如何，它们都存储在内存缓存中，因此不会向后端发出额外的请求以进行 url 映射；然而，它可能会导致一些问题的URL在离线模式下（离线模式主屏幕上安装PWA得到了重新加载，在内存中缓存将被清除，所以不会有可能是URL映射路由;然而同样喜欢用<code>product/list</code>的ServiceWorker 缓存无论如何都应该填充 url 映射）；</li>
<li><code>config.syncTasks.disablePersistentTaskQueue</code>不在服务工作者中存储网络请求队列。目前只有库存检查和用户数据更改使用此队列。它引入的唯一缺点可能与离线模式有关，并且这些任务在连接建立后不会重新执行，但只是在离线时页面重新加载的情况下（是的，使用 ServiceWorker 可能会发生这种情况；<code>syncTasks</code>不能重新执行） - 从 SW 填充到缓存中）</li>
<li>我们已将文件从 /store/lib 移至 /lib。基本上要从新目录中使用它，您现在必须从而<code>@vue-storefront/core/lib/store/</code>不是<code>@vue-storefront/core/store/lib/</code>. 这些核心文件已更改：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>core<span class="token operator">/</span>build<span class="token operator">/</span>webpack<span class="token punctuation">.</span>base<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>lib<span class="token operator">/</span>sync<span class="token operator">/</span>task<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>lib<span class="token operator">/</span>storage<span class="token operator">-</span>manager<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>helpers<span class="token operator">/</span>search<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>store<span class="token operator">/</span>attribute<span class="token operator">/</span>mutations<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>store<span class="token operator">/</span>category<span class="token operator">/</span>actions<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>store<span class="token operator">/</span>category<span class="token operator">/</span>mutations<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>store<span class="token operator">/</span>product<span class="token operator">/</span>actions<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>catalog<span class="token operator">/</span>store<span class="token operator">/</span>tax<span class="token operator">/</span>mutations<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>compare<span class="token operator">/</span>store<span class="token operator">/</span>actions<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>order<span class="token operator">/</span>store<span class="token operator">/</span>mutations<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>order<span class="token operator">/</span>index<span class="token punctuation">.</span>ts
core<span class="token operator">/</span>modules<span class="token operator">/</span>wishlist<span class="token operator">/</span>store<span class="token operator">/</span>actions<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>如果由于某些原因您不想<code>localStorage</code>重新启用<code>Products by SKU</code>, <code>Url Routes</code>and <code>SyncTasks</code>- 请<code>false</code>在您的<code>config/local.json</code>.</p>
<ul>
<li>新的页面未找到处理需要更新主题中的 router/index.js。</li>
<li>引入了<code>config.ssr.lazyHydrateFor</code>带<code>category-next.products</code>值的选项，负责补水产品列表并仅在客户端加载它们。这意味着<code>__INITIAL__STATE__</code>. 它默认启用。</li>
<li>模块: <code>Review</code>, <code>Mailer</code>, <code>Order</code>, <code>RecentlyViewed</code>,<code>InstantCheckout</code>不再默认加载到主包中，因为它们在相关页面上按需加载。</li>
<li>身份验证保护从用户模块路由器移动到<code>MyAccount</code>页面混合。</li>
<li>该干将<code>cmsBlocks</code>，<code>cmsBlockIdentifier</code>，<code>cmsBlockId</code>已被弃用。请改用<code>getCmsBlocks</code>, <code>getCmsBlockIdentifier</code>, <code>getCmsBlockId</code>。</li>
<li>“订单编号”、“价格”、“选择尺码”、“您登录的身份”和“商品”的翻译已更改，它们现在包含值的占位符。请参考<a href="https://github.com/vuestorefront/vue-storefront/pull/3550/commits/366d31bf28a1e27a7f14b222369cba8fe0a6d3e0" target="_blank" rel="noopener noreferrer">这个提交 （打开新窗口）<OutboundLink/></a>为了调整他们，否则他们可能会迷路。</li>
<li><code>i18n.currencySignPlacement</code>配置值被替换，<code>i18n.priceFormat</code>所以价格格式变得更加灵活</li>
<li>自定义主题中需要修改主题初始化
<ul>
<li>删除该行<code>RouterManager.addRoutes(routes, router, true)</code>。这现在在 中处理<code>setupMultistoreRoutes</code>，包括默认存储。</li>
<li>可选地给予主题路由优先级，以确保它们在有任何冲突时覆盖模块路由。例如<code>setupMultistoreRoutes(config, router, routes, 10)</code>。</li>
<li>有关<code>/src/themes/default/index.js</code>完整示例，请参阅。</li>
</ul>
</li>
<li>在<code>storeView</code>配置中，没有更多<code>disabled</code>用于特定语言配置的标志。如果<code>storeView</code>存在特定配置，将显示其他语言的链接。</li>
<li>通过<code>entities.category.filterFields</code>在 local.json 中设置，可以全局过滤类别，从不加载，例如<code>&quot;filterFields&quot;: { &quot;is_active&quot;: true }</code>。</li>
<li>通过<code>entities.category.breadcrumbFilterFields</code>在 local.json 中设置，可以在 Breadcrumbs 中过滤类别，例如<code>&quot;breadcrumbFilterFields&quot;: { &quot;include_in_menu&quot;: true }</code>。</li>
</ul>
<h2 id="_1-10-1-10-4" tabindex="-1"><a class="header-anchor" href="#_1-10-1-10-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-10-1-10-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.10 -&gt; 1.10.4</h2>
<p>我们<code>localStorage</code>通过引入新的配置变量减少了配额使用和错误处理：</p>
<ul>
<li><code>config.products.disablePersistentProductsCache</code>不按 SKU 存储产品（默认情况下它是打开的）。无论如何，产品都缓存在 ServiceWorker 缓存中，因此<code>product/list</code>将填充内存缓存 ( <code>cache.setItem(..., memoryOnly = true)</code>)；</li>
<li><code>config.seo.disableUrlRoutesPersistentCache</code>- 不存储 url 映射；无论如何，它们都存储在内存缓存中，因此不会向后端发出额外的请求以进行 url 映射；然而，它可能会导致一些问题的URL在离线模式下（离线模式主屏幕上安装PWA得到了重新加载，在内存中缓存将被清除，所以不会有可能是URL映射路由;然而同样喜欢用<code>product/list</code>的ServiceWorker 缓存无论如何都应该填充 url 映射）；</li>
<li><code>config.syncTasks.disablePersistentTaskQueue</code>不在服务工作者中存储网络请求队列。目前只有库存检查和用户数据更改使用此队列。它引入的唯一缺点可能与离线模式有关，并且在建立连接后不会重新执行这些任务，但只是在离线时页面重新加载的情况下（是的，使用 ServiceWorker 可能会发生这种情况；<code>syncTasks</code>不能重新执行） - 从 SW 填充到缓存中）</li>
</ul>
<p>如果由于某种原因你wan't有<code>localStorage</code>上背部<code>Products by SKU</code>，<code>Url Routes</code>和<code>SyncTasks</code>-请juset设置这些变量回<code>false</code>你<code>config/local.json</code>。</p>
<h2 id="_1-9-1-10" tabindex="-1"><a class="header-anchor" href="#_1-9-1-10" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-9-1-10" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.9 -&gt; 1.10</h2>
<ul>
<li>事件<code>application-after-init</code>现在由事件总线发出，而不是由根 Vue 实例（应用程序）发出，因此您现在需要监听<code>Vue.prototype.$bus</code>( <code>EventBus.$on()</code>)</li>
<li>目前支持的最低节点版本是 8.10.0，</li>
<li>模块 Mailchimp 被删除以支持时事通讯。<code>local.json</code>key 下的配置<code>mailchimp</code>移到 key <code>newsletter</code>。</li>
<li>在多商店模式下，现在可以使用<code>appendStoreCode</code>配置选项跳过将商店代码附加到 url 的可能性。要保持原始行为，应将其设置为 true。- @lukeromanowicz (#3048)。</li>
<li>将<code>cart/addItem</code>不再显示错误信息-请使用<code>diffLog.clientNorifications</code>，而不是更新UI（看看的<code>AddToCart.ts</code>一个参考）</li>
<li>请确保您的<code>AddToCart.vue</code>组件已<code>notifyUser</code>定义用于在添加到购物车时显示错误/成功消息的方法。默认实现是：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">notifyUser</span> <span class="token punctuation">(</span><span class="token parameter">notificationData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'notification/spawnNotification'</span><span class="token punctuation">,</span> notificationData<span class="token punctuation">,</span> <span class="token punctuation">{</span> root<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>getter<code>cart/totals</code>已被替换为<code>cart/getTotals</code>- @pkarw (#2522)</li>
<li>getter<code>cart/coupon</code>已被替换为<code>cart/getCoupon</code>- @pkarw (#2522)</li>
<li>getter<code>cart/totalQuantity</code>已被替换为<code>cart/getItemsTotalQuantity</code>- @pkarw (#2522)</li>
</ul>
<h2 id="_1-8-1-9" tabindex="-1"><a class="header-anchor" href="#_1-8-1-9" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-8-1-9" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.8 -&gt; 1.9</h2>
<ul>
<li>为友好的 URL 添加了 Url Dispatcher 功能。当<code>config.seo.useUrlDispatcher</code>设置为 true 时，<code>product.url_path</code>and<code>category.url_path</code>字段用作绝对 URL 地址（不再有<code>/c</code>和<code>/p</code>前缀）。检查最新<code>mage2vuestorefront</code>快照并<strong>重新导入您的产品</strong>以正确设置<code>url_path</code>字段</li>
<li><code>cart.multisiteCommonCart</code> 配置属性更改为 <code>storeViews.commonCache</code></li>
<li>创建 VS 模块的方式已更改为使用工厂方法而不是显式对象创建。尽管该功能向后兼容，但我们强烈鼓励所有开发人员重构他们的模块以使用新语法。</li>
</ul>
<p>使用工厂方法创建新模块的过程如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/module'</span>

<span class="token keyword">const</span> moduleConfig<span class="token operator">:</span> VueStorefrontModuleConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// VS module config</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token function">createModule</span><span class="token punctuation">(</span>moduleConfig<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li><code>@vue-storefront/store</code>包已折旧。只需将导入更改为<code>@vue-storefront/core/store</code>.</li>
<li><code>breadCrumbRoutes</code> 助手已重构为 <code>formatBreadCrumbRoutes</code></li>
<li>在 API 中验证失败的订单被假定为具有 http 代码 400 而不是 500</li>
<li>关于无效订单地址的通知消息现在使用邮件程序部分中配置的电子邮件而不是硬编码的电子邮件</li>
<li>在大多数结帐字段中添加了对 UTF8 字母和字母数字字符的验证</li>
<li>更新您的 local.json 配置并设置默认<code>api.url</code>路径，如果没有它，您可能会遇到弹性搜索查询的问题。</li>
</ul>
<h3 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#troubleshooting" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>故障排除</h3>
<ul>
<li>如果升级后出现 CORS 问题，请检查配置文件中的 elasticsearch url。可以在<a href="https://github.com/vuestorefront/vue-storefront/commit/77fc9c2765068303879c75ef9ed4a4b98f6763b6" target="_blank" rel="noopener noreferrer">此处<OutboundLink/></a>找到该更改的最佳实践<a href="https://github.com/vuestorefront/vue-storefront/commit/77fc9c2765068303879c75ef9ed4a4b98f6763b6" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li>如果应用程序崩溃，尤其是<code>vue devtools</code>在浏览器中打开时，请尝试设置<code>storeViews.commonCache</code>为<code>false</code>。</li>
</ul>
<h2 id="_1-7-1-8" tabindex="-1"><a class="header-anchor" href="#_1-7-1-8" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-7-1-8" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.7 -&gt; 1.8</h2>
<p>完整的变更日志<a href="https://github.com/vuestorefront/vue-storefront/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">在这里<OutboundLink/></a>可用<a href="https://github.com/vuestorefront/vue-storefront/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<ul>
<li><code>store/types</code>已移至名为<code>core/types</code>.</li>
<li><code>store/lib/search</code>已移至<code>core/lib/search</code>。</li>
<li><code>store/lib/multistore.ts</code> 已[移动]到（https://github.com/patzick/vue-storefront/commit/d42cdc44fc204dd10b173894d52dbeff244913f5#diff-87917f882ffc57fb755b1cc82ffa9e28L11） <code>core/lib/multistore.ts</code></li>
<li>新<a href="https://github.com/patzick/vue-storefront/commit/d42cdc44fc204dd10b173894d52dbeff244913f5#diff-ae72dc903f169eb56d716cd5ac99df35R1" target="_blank" rel="noopener noreferrer">款式 （打开新窗口）<OutboundLink/></a>表单元素文件</li>
<li>删除了未使用的<code>src/themes/default/filters/index.js</code>文件。检查您是否也没有使用它。</li>
<li><code>src/themes/default/resource/head.js</code> 已移至 <code>src/themes/default/head.js</code></li>
<li><code>src/themes/default/index.basic.template.html</code> 已移至 <code>src/themes/default/templates/index.basic.template.html</code></li>
<li><code>src/themes/default/index.minimal.template.html</code> 已移至 <code>src/themes/default/templates/index.minimal.template.html</code></li>
<li><code>src/themes/default/index.template.html</code> 已移至 <code>src/themes/default/templates/index.template.html</code></li>
</ul>
<h2 id="_1-6-1-7" tabindex="-1"><a class="header-anchor" href="#_1-6-1-7" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-6-1-7" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.6 -&gt; 1.7</h2>
<p>从 Vue Storefront 1.7 开始，我们更改了缓存策略和离线就绪功能：</p>
<ul>
<li>默认情况下，Elasticsearch 查询使用<code>GET</code>method执行，因此由 Service Worker 缓存（<code>config.elasticsearch.queryMethod</code>- 将其设置为 POST 以获取先前的行为，如果您使用的是 graphql）。</li>
<li>默认情况下，产品和查询缓存<code>LocalStorage</code>设置为 4MB ( <code>config.server.elasticCacheQuota</code>)的配额。如果设置了存储配额，则使用 LRU 算法每 30 秒执行一次缓存清除。大多数浏览器的本地存储限制为 5MB。</li>
<li>我们添加了<code>config.server. disablePersistentQueriesCache</code>，<code>true</code>默认设置为。当这个选项打开时，我们不会将 Elasticsearch 结果存储在本地缓存中，因为结果默认缓存在 Service Worker 缓存中。</li>
<li><code>module.extend</code>已更改为<code>extendModule</code>. 您可以在 中找到使用示例<code>src/modules/index.ts</code>。</li>
<li><a href="https://github.com/patzick/vue-storefront/commit/a97eb11868de2915e86d57c4279caf944d4de422#diff-a334a7caeb7f61836f8c1178d92de3e0" target="_blank" rel="noopener noreferrer">路线 （打开新窗口）<OutboundLink/></a>,<a href="https://github.com/patzick/vue-storefront/commit/a97eb11868de2915e86d57c4279caf944d4de422#diff-48863b9fe31d7713222ec5709ef5a4fa" target="_blank" rel="noopener noreferrer">布局 （打开新窗口）<OutboundLink/></a>和组件，它们在页面渲染时不可见，现在在需要时加载。</li>
<li>每个 store 操作都应该通过 dispatch action 来完成。<code>category/mergeSearchOptions</code>在操作<code>store.state.category.current_product_query</code>某处时调用 store dispatch on 。</li>
<li><a href="https://github.com/patzick/vue-storefront/commit/a97eb11868de2915e86d57c4279caf944d4de422" target="_blank" rel="noopener noreferrer">这里 （打开新窗口）<OutboundLink/></a>都是默认主题的变化</li>
</ul>
<p>向后兼容性：要反转到 1.0-1.6 行为：</p>
<ul>
<li>设置<code>config.server.disablePersistentQueriesCache</code>= <code>false</code>,</li>
<li>设置<code>config.elasticsearch.queryMethod</code>=<code>POST</code></li>
<li>设置<code>config.localForage.defaultDrivers.elasticCache</code>=<code>INDEXEDDB</code></li>
</ul>
<p>**注意：**由于 Service Workers 和缺乏包预取（包延迟加载），离线模式可能无法在开发模式 (localhost) 中正常工作。</p>
<p>在 1.7 中，加载在产品页面上的属性描述符的数量是有限的，并且会根据产品中使用的字段进行动态调整。此行为不应对您的应用产生任何负面影响；但是，如果您没有<code>attribute/list</code>根据默认加载的所有属性（最高 1.6）显式使用该操作，则可能会导致问题。您可以通过设置<code>config.entities.product.useDynamicAttributeLoader=false</code>. 详情：<a href="https://github.com/vuestorefront/vue-storefront/pull/2137/files" target="_blank" rel="noopener noreferrer">#2137（打开新窗口）<OutboundLink/></a></p>
<p>动态类别预取（#2076）。从 Vue Storefront 1.7 开始，我们添加了一个配置选项<code>config.entities.category.categoriesDynamicPrefetch</code>（默认设置为<code>true</code>）。此选项切换获取类别树的方式。以前，我们正在获取完整的类别树。在某些情况下，它甚至可以生成几 MB 的有效载荷。目前有了这个选项，我们会在用户浏览类别树时按需预取类别。</p>
<p>**注意：**由于我们不再生成<code>category.slug</code>客户端，我们需要有<code>category.url_key</code>唯一的字段。如果您的 Magento2 url_keys 是唯一的，它将无需任何更改即可工作。如果没有 - 请使用<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront （打开新窗口）<OutboundLink/></a>重新导入类别。有一个新的<code>categories</code>导入器选项<code>--generateUniqueUrlKeys</code>，默认设置为 true。</p>
<p>随着 1.6 提供的新模块架构，我们<a href="https://github.com/vuestorefront/vue-storefront/pull/2135" target="_blank" rel="noopener noreferrer">更新了支付模块指南 （打开新窗口）<OutboundLink/></a>. 如果您使用了自定义支付（以及基本上任何其他）扩展，请确保您已经将它们移植到<a href="https://docs.vuestorefront.io/guide/modules/introduction.html" target="_blank" rel="noopener noreferrer">新的模块架构中 （打开新窗口）<OutboundLink/></a>.</p>
<h2 id="_1-5-1-6" tabindex="-1"><a class="header-anchor" href="#_1-5-1-6" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-5-1-6" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.5 -&gt; 1.6</h2>
<p>在 1.6 中，我们引入了新的模块化架构，并将大部分特定于主题的逻辑从核心移到了默认主题。这可能是 VS 历史上最大的更新，也是让未来升级更加无缝的第一步。</p>
<p>由于结构变更，<code>core/components</code>以及<code>core/store/modules</code>文件夹取出并重组为模块（<code>core/modules</code>）。在大多数情况下，组件 API 保持不变（如果不是，我们在<code>core/compatibility/components</code>文件夹中提供了一个 API 桥接器，它允许您在不更改主题的情况下从新功能中受益）。最好在迁移后查找引用已删除文件夹的导入，以确保我们进行了完整更新。</p>
<p>总体而言，默认主题的主题升级需要更改105个文件，但其中85%的更改只是核心组件的新导入路径，这使得此更新耗时但易于遵循且无风险。</p>
<p><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f" target="_blank" rel="noopener noreferrer">这里 （打开新窗口）<OutboundLink/></a>您可以找到有关主题中需要更改哪些内容以支持 VS 1.6 的详细信息（作为带有注释的升级提交）。</p>
<h4 id="全球变化" tabindex="-1"><a class="header-anchor" href="#全球变化" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#global-changes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>全球变化</h4>
<ul>
<li>通知现在基于 Vuex Store 而不是 Event Bus。我们还将硬编码通知从核心拉到主题。</li>
</ul>
<p>更改每个组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'notification'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>到：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'notification/spawnNotification'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>更改每个商店：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'notification'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>到：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rootStore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'notification/spawnNotification'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>并确保您正在导入<code>rootStore</code>.</p>
<ul>
<li>非 SSR 路由的延迟加载现在可用。</li>
</ul>
<p>您现在可以<a href="https://router.vuejs.org/guide/advanced/lazy-loading.html" target="_blank" rel="noopener noreferrer">使用动态导入来延迟加载非 SSR 路由 （打开新窗口）<OutboundLink/></a>. 您可以<a href="https://github.com/vuestorefront/vue-storefront/tree/develop/src/themes/default/router" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>找到默认主题中的示例<a href="https://github.com/vuestorefront/vue-storefront/tree/develop/src/themes/default/router" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<ul>
<li>扩展现在被重写为模块（扩展系统将在 1.7 中折旧）。</li>
</ul>
<p>如果您没有直接修改任何扩展，则无需更改任何内容。如果进行了此类更改，则可能需要将扩展重写为模块。</p>
<ul>
<li>旧的事件总线移动到兼容性文件夹。从现在开始，我们将尝试在没有它的情况下创建新功能，并在可能的情况下慢慢贬值事件总线。它将被一些具有事件自动建议支持的基于模块的增强机制所取代。</li>
</ul>
<p>将所有<code>@vue-storefront/core/plugins/event-bus</code>导入更改为<code>@vue-storefront/core/compatibility/plugins/event-bus</code></p>
<h4 id="移动的组件或更改了-api-并创建了兼容性组件。" tabindex="-1"><a class="header-anchor" href="#移动的组件或更改了-api-并创建了兼容性组件。" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#components-that-were-moved-or-the-api-was-changed-and-the-compatibility-component-was-created" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>移动的组件或更改了 API 并创建了兼容性组件。</h4>
<p>所需操作：更改导入路径。如果有其他更改，请单击组件名称以查看如何更新。</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-16a4dd1cbf1aaf74e001e6541fb27725" target="_blank" rel="noopener noreferrer"><code>AddToCart.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-fa33732560b7c39ea7854f701c4187bf" target="_blank" rel="noopener noreferrer"><code>Breadcrumbs.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-551ae89c6d9e297a662749ee02676d45" target="_blank" rel="noopener noreferrer"><code>ColorSelector.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-cbd08cdda068c587e3146bb3441e2161" target="_blank" rel="noopener noreferrer"><code>GenericSelector.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-7b6cae3e664a647ff7397d6692e61cd6" target="_blank" rel="noopener noreferrer"><code>NewsletterPopup.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-d91127b094ff36e25dd94834c3aded6a" target="_blank" rel="noopener noreferrer"><code>Notification.vue</code> （打开新窗口）<OutboundLink/></a>+<code>exec</code>改为<code>execAction</code>, 添加<code>execAction</code></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-66a3ae90ace32b95ebe4513c496f76ce" target="_blank" rel="noopener noreferrer"><code>Overlay.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-f564bd3cf6c2687c23c442d1363fe97b" target="_blank" rel="noopener noreferrer"><code>PriceSelector.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-b9783243d8666d5b2e46df608e6ace48" target="_blank" rel="noopener noreferrer"><code>ProductAttribute.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-14db476c8821b640e674f1e655340de5" target="_blank" rel="noopener noreferrer"><code>ProductCustomOptions.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-66a4dfcf61217934307df12e9e3f14c6" target="_blank" rel="noopener noreferrer"><code>ProductGallery.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a83c265a63b7b594b5052ec61907cde1" target="_blank" rel="noopener noreferrer"><code>SizeSelector.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-5dab270f8342facd10835e828e5d7509" target="_blank" rel="noopener noreferrer"><code>SortBy.vue</code> （打开新窗口）<OutboundLink/></a>+ 从下拉列表更改为选择</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-e80a538151f16af10b20efa810ae0bc3" target="_blank" rel="noopener noreferrer"><code>ValidationError.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-3ac818c5cd6c41a9c9d7a3acba41cdb5" target="_blank" rel="noopener noreferrer"><code>Login.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-88e78ea0dd0f96c15c4a00d29922e44c" target="_blank" rel="noopener noreferrer"><code>Category/Sidebar.vue</code> （打开新窗口）<OutboundLink/></a>+ 增加了清除所有过滤器的可能性</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-bacd489920bede6d60bc9ce0b165e517" target="_blank" rel="noopener noreferrer"><code>CartSummary.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-958fa5f4d0d271422146a86119bde82d" target="_blank" rel="noopener noreferrer"><code>OrderReview.vue</code> （打开新窗口）<OutboundLink/></a>+ 通知从核心移到主题</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-878b5e4180d8f997d0b57a7dc5d28154" target="_blank" rel="noopener noreferrer"><code>Payment.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-d8651354142bff547c667cdab2e87a9f" target="_blank" rel="noopener noreferrer"><code>PersonalDetails.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a08ecdd137cc1b32d02d458e3ae22079" target="_blank" rel="noopener noreferrer"><code>Checkout/Product.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a83c265a63b7b594b5052ec61907cde1" target="_blank" rel="noopener noreferrer"><code>Shipping.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-b25a4326cbb2102f3293084aefe6d4c8" target="_blank" rel="noopener noreferrer"><code>AccountIcon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-4180179a247fd8ebb816f4d8e94e6c5b" target="_blank" rel="noopener noreferrer"><code>CompareIcon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-39d690ab85a291546f5ebe1606250fb5" target="_blank" rel="noopener noreferrer"><code>HamburgerIcon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-ddcf89d0ca46b06824190f07c87f6031" target="_blank" rel="noopener noreferrer"><code>MicrocartIcon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-68dfc0097a84464e2f8196d0948b4a03" target="_blank" rel="noopener noreferrer"><code>Returnicon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-fabd1714a4872a2bcf26619adbe0709c" target="_blank" rel="noopener noreferrer"><code>WishlistIcon.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-ffba5dcba1456c20f565e314790cd450" target="_blank" rel="noopener noreferrer"><code>Microcart.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-5715f58dacfe621ce8d056e382f1be8b" target="_blank" rel="noopener noreferrer"><code>Microcart/Product.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-48b9d7ff2e2e8e6cf6965fd582e51957" target="_blank" rel="noopener noreferrer"><code>MyNewsletter.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a8dbaeacd2cf4fb6440959d7827372fa" target="_blank" rel="noopener noreferrer"><code>MyOrder.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-4d60c889f1362249fc19756d60f8f9b1" target="_blank" rel="noopener noreferrer"><code>MyOrders.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-677b7e3129afc1c974c3bd08069662c7" target="_blank" rel="noopener noreferrer"><code>MyProfile.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-5ed705e03a497368b98d9ce41ec378de" target="_blank" rel="noopener noreferrer"><code>MyShippingDetails.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-c1703e08c80fcacd8135eeb6d707aa95" target="_blank" rel="noopener noreferrer"><code>Related.vue</code> （打开新窗口）<OutboundLink/></a>+<code>refreshList</code>方法改变</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-2020399a5c1abfc37c176bfcc5912293" target="_blank" rel="noopener noreferrer"><code>SearchPanel.gql.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-e2ff52db282530838ffce57893ed4a77" target="_blank" rel="noopener noreferrer"><code>SearchPanel.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-c341122656ef878fc532a5c34348a1ec" target="_blank" rel="noopener noreferrer"><code>SidebarMenu.vue</code> （打开新窗口）<OutboundLink/></a>+错误修复（隐藏当前活动菜单下方的更长菜单），直接路由器链接而不是事件</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-7c0514d730223832fd2e1fae9d5f2068" target="_blank" rel="noopener noreferrer"><code>Wishlist/Product.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-8dc4f61d36ae2b2ffc2a4c4603e844b8" target="_blank" rel="noopener noreferrer"><code>Wishlist.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-26a650b112a3b01efd1ff3a5c752aba1" target="_blank" rel="noopener noreferrer"><code>Collection.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-91bc0c9fe9fa95dd88900beff8975200" target="_blank" rel="noopener noreferrer"><code>Home.vue</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h4 id="从核心移动到主题的组件" tabindex="-1"><a class="header-anchor" href="#从核心移动到主题的组件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#components-that-were-moved-from-core-to-theme" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>从核心移动到主题的组件</h4>
<p>所需操作：添加移动的内容并删除核心导入。如果有其他更改，请单击组件名称以查看如何更新。</p>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a2791ef5c57fb2459362720b4a624e53" target="_blank" rel="noopener noreferrer"><code>Loader.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-527c2bb9d04213a2aaf1aac75673bc71" target="_blank" rel="noopener noreferrer"><code>Modal.vue</code> （打开新窗口）<OutboundLink/></a>+ 删除了静态内容</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-9ccb222e8d3decebb067729ee935899a" target="_blank" rel="noopener noreferrer"><code>ProductLinks.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-000bc323621dca4883033c0e91f9125a" target="_blank" rel="noopener noreferrer"><code>ProductListing.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-4049e5b38efd1a5d0215fd71e32136a3" target="_blank" rel="noopener noreferrer"><code>ProductTile.vue</code> （打开新窗口）<OutboundLink/></a>+ 核心导入移至模块</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-624e75f15bdb9b2f7d5f417138c9f0ec" target="_blank" rel="noopener noreferrer"><code>ProductSlider.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-e2fbfb707a274bea8b9f7af3e3c57032" target="_blank" rel="noopener noreferrer"><code>ForgotPass.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-f5266afaec9d55f2fc93cf3b874b7288" target="_blank" rel="noopener noreferrer"><code>Register.vue</code> （打开新窗口）<OutboundLink/></a>+ 核心导入移至模块</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-df0c798d67a63c4eef4d3141393db5f9" target="_blank" rel="noopener noreferrer"><code>SignUp.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-23e3b8989b402a011ee4cb3f985fa3ce" target="_blank" rel="noopener noreferrer"><code>BaseCheckbox.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-d209385c453bdf31b89bc51772bd2bda" target="_blank" rel="noopener noreferrer"><code>BaseInput.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-1493dcb05a06ce313807003d1774fa14" target="_blank" rel="noopener noreferrer"><code>BaseRadioButton.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-c4c37e440fd8ec3deeacef085b48ed9f" target="_blank" rel="noopener noreferrer"><code>BaseSelect.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-0ea48ec8c1545db8cbdacfd348f8bf75" target="_blank" rel="noopener noreferrer"><code>BaseTextArea.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-5f4560c69df1a5f6d97f0b064b9b792f" target="_blank" rel="noopener noreferrer"><code>Header.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-19c964e13db826a1358f30839627986b" target="_blank" rel="noopener noreferrer"><code>MainSlider.vue</code>（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-d8861516b2c7dfc547b91e1066ca4755" target="_blank" rel="noopener noreferrer"><code>Reviews.vue</code> （打开新窗口）<OutboundLink/></a>+ 空数组而不是 null，核心导入路径已更改</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-0aa476fa2f0314806d4afd620c80be54" target="_blank" rel="noopener noreferrer"><code>Compare.vue</code>（打开新窗口）<OutboundLink/></a></li>
</ul>
<h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#other" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>其他</h4>
<ul>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-32809917812e7c8c4571be70a693d65b" target="_blank" rel="noopener noreferrer"><code>ProductBundleOption.vue</code> （打开新窗口）<OutboundLink/></a>- 从<code>ProductBundleOptions.vue</code>组件中拆分单个选项。</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-7ccee94c636406b1a82feddea3a7f520" target="_blank" rel="noopener noreferrer"><code>ProductBundleOptions.vue</code> （打开新窗口）<OutboundLink/></a>- 单个选项移至单独的组件<code>ProductBundleOption.vue</code>，移至模块。</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-84c29c5b22568c31b021dc864221563f" target="_blank" rel="noopener noreferrer"><code>ThankYouPage.vue</code> （打开新窗口）<OutboundLink/></a>添加了订单 ID 显示、订单确认、从核心提取通知并添加了邮件确认</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-c65e47159738f3552a22f16ec5c5974f" target="_blank" rel="noopener noreferrer"><code>main.scss</code> （打开新窗口）<OutboundLink/></a>删除重复的 flexbox 网格</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-bf0804a2329350f8e9d9071e40cf1429" target="_blank" rel="noopener noreferrer"><code>index.template.html</code> （打开新窗口）<OutboundLink/></a>（+ 您可能拥有的所有其他模板，例如最小、基本等），已添加 <code>output.appendHead(), renderStyles()</code></li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-eb709969add1ca4a266ac072cddde954" target="_blank" rel="noopener noreferrer"><code>Category.vue</code> （打开新窗口）<OutboundLink/></a>通知移至主题</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-1c6544c28d075f275812201fa42755de" target="_blank" rel="noopener noreferrer"><code>Checkout.vue</code> （打开新窗口）<OutboundLink/></a>通知移至主题</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-bb873f532ed9a2efbb157af79a70e0f7" target="_blank" rel="noopener noreferrer"><code>MyAccount.vue</code> （打开新窗口）<OutboundLink/></a>通知移至主题</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-174db65df8e0c43df20b73b5bf16881b" target="_blank" rel="noopener noreferrer"><code>Product.vue</code> （打开新窗口）<OutboundLink/></a>可能影响标记的属性变量名称的细微变化，通知移至主题</li>
<li><a href="https://github.com/vuestorefront/vue-storefront/commit/cc17b5bfa43a9510815aea14dce8bafac382bc7f#diff-a3a9b6eeeba4c915c1ea1aae1c489ecc" target="_blank" rel="noopener noreferrer"><code>Static.vue</code> （打开新窗口）<OutboundLink/></a>静态页面不再使用降价文件。</li>
</ul>
<h2 id="_1-4-1-5" tabindex="-1"><a class="header-anchor" href="#_1-4-1-5" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-4-1-5" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.4 -&gt; 1.5</h2>
<h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#modifications" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>修改</h3>
<h4 id="新模块-api" tabindex="-1"><a class="header-anchor" href="#新模块-api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#new-modules-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>新模块 API</h4>
<p>在 1.5.0 中，我们引入了一个新的、经过大量重构的模块 API。我们试图保持旧的主题组件向后兼容，因此现在您可以在<code>/core/components</code>引用<code>/modules/&lt;module&gt;/components</code>原始主题时查看一些“模拟”组件。请阅读<a href="https://docs.vuestorefront.io/v1/guide/modules/introduction.html" target="_blank" rel="noopener noreferrer">模块的工作原理和结构，<OutboundLink/></a>以检查它是否暗示您的主题有任何更改。尽管看起来有很多更改（添加/删除/重命名了许多文件），但它不应该影响您的自定义代码。</p>
<h4 id="新的通讯模块" tabindex="-1"><a class="header-anchor" href="#新的通讯模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#new-newsletter-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>新的通讯模块</h4>
<p>现有的时事通讯集成模块非常混乱和凌乱。@filrak 从头开始重写它。如果您依赖现有的时事通讯模块逻辑/事件/等，它可能会影响您的代码（低概率）。</p>
<h4 id="内存泄漏已修复" tabindex="-1"><a class="header-anchor" href="#内存泄漏已修复" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#memory-leaks-fixed" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>内存泄漏已修复</h4>
<p>我们使用 #1882 修复了 SSR 内存泄漏。它不应影响您的自定义代码，但如果您修改了任何 SSR 功能，请确保一切仍然正常。</p>
<h2 id="_1-3-1-4" tabindex="-1"><a class="header-anchor" href="#_1-3-1-4" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-3-1-4" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.3 -&gt; 1.4</h2>
<h3 id="修改-1" tabindex="-1"><a class="header-anchor" href="#修改-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#modifications-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>修改</h3>
<h4 id="图形语言" tabindex="-1"><a class="header-anchor" href="#图形语言" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#graphql" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>图形语言</h4>
<p>我们添加了 GraphQL 支持。请阅读有关<a href="https://docs.vuestorefront.io/v1/guide/basics/graphql.html" target="_blank" rel="noopener noreferrer">GraphQL 行动计划的更多信息<OutboundLink/></a>。从此版本开始，<strong>不推荐使用****bodybuilder</strong>包。您应该使用可用于 API 和 GraphQL 端点的<strong>SearchQuery</strong>内部类。阅读有关<a href="https://docs.vuestorefront.io/v1/guide/data/elastic-queries.html" target="_blank" rel="noopener noreferrer">如何查询数据的<OutboundLink/></a>更多<a href="https://docs.vuestorefront.io/v1/guide/data/elastic-queries.html" target="_blank" rel="noopener noreferrer">信息<OutboundLink/></a>。</p>
<h4 id="ssr-高级输出和缓存" tabindex="-1"><a class="header-anchor" href="#ssr-高级输出和缓存" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#ssr-advanced-output-and-cache" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>SSR：高级输出和缓存</h4>
<p>此更改不涉及移植代码所需的任何操作，但请注意我们支持[SSR 缓存 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/develop/doc/SSR Cache.md)+[动态布局变化 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/develop/doc/Layouts and advanced output operations.md)等。如果您使用的是主题的修改版本，则在不更新<code>themes/YourTheme/App.vue</code>到新格式的情况下几乎无法使用这些（查看默认主题以获取详细信息）。</p>
<h4 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#reviews" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>评论</h4>
<p>我们添加了评论支持，但是，Magento 2 在 REST API 中仍然缺乏评论支持。要启动并运行评论，请将 https://github.com/divanteLtd/magento2-review-api 添加到您的 Magento 2 实例。</p>
<h4 id="微型车" tabindex="-1"><a class="header-anchor" href="#微型车" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#microcart" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>微型车</h4>
<ol>
<li>我们将优惠券代码的核心功能移至 API 模块：
<ul>
<li><strong>优惠券</strong>现在计算值是<strong>appliedCoupon</strong>（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
<li><strong>removeCoupon</strong> (<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
<li><strong>申请优惠券</strong>（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
<li><strong>总计</strong>-&gt;<strong>购物车****总计</strong>（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
<li><strong>运输</strong>-&gt;<strong>购物车****运输</strong>（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
<li><strong>付款</strong>-&gt;<strong>购物车****付款</strong>（<a href="https://github.com/vuestorefront/vue-storefront/blob/master/doc/api-modules/cart.md" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>)</li>
</ul>
</li>
<li>我们将负责 UI 的方法移动/重命名为默认主题：
<ul>
<li><strong>addDiscountCoupon</strong> - 切换优惠券表格</li>
<li><strong>removeCoupon</strong> -&gt; <strong>clearCoupon</strong> - 通过调度 removeCoupon API 方法和切换优惠券表单删除优惠券</li>
<li><strong>applyCoupon</strong> -&gt; <strong>setCoupon</strong> - 通过 dispatch applyCoupon API 方法提交优惠券表格</li>
<li><strong>enterCoupon</strong> - 被移除了，因为@keyup=&quot;enterCoupon&quot; 我们改为@keyup.enter=&quot;setCoupon&quot;</li>
</ul>
</li>
<li>我们将 $emit 与有关应用的Coupon 和removedCoupon 的通知从Vuex 商店移动到默认主题。现在applyCoupon 和removeCoupon 返回promise，你可以自己处理。</li>
<li>我们将 VueOfflineMixin 和 onEscapePress 混入移动到主题组件。核心组件现在从 UI 内容中清除了。</li>
<li>我们已经取代一个方法<code>Microcart</code>- <code>cartTotals</code>- &gt;<code>totals</code></li>
</ol>
<h4 id="资产" tabindex="-1"><a class="header-anchor" href="#资产" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#assets" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>资产</h4>
<ol>
<li>我们从<code>core/assets</code>. 从现在开始，我们只使用<code>your-theme/assets</code>.</li>
</ol>
<h4 id="店铺" tabindex="-1"><a class="header-anchor" href="#店铺" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>店铺</h4>
<ol>
<li>我们将 socialTiles Vuex 商店从核心移到主题，因为它特定于主题。</li>
</ol>
<h4 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#i18n" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>国际化</h4>
<ol>
<li>我们删除了核心的所有特定于主题的翻译。</li>
</ol>
<h2 id="_1-2-1-3" tabindex="-1"><a class="header-anchor" href="#_1-2-1-3" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-2-1-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.2 -&gt; 1.3</h2>
<h3 id="变化" tabindex="-1"><a class="header-anchor" href="#变化" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#changes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>变化</h3>
<ol>
<li>我们从带有在线状态信息的 client-entry.js 中删除了事件发出。相反，我们现在使用<a href="https://github.com/filrak/vue-offline" target="_blank" rel="noopener noreferrer">vue-offline （打开新窗口）<OutboundLink/></a>混合。<a href="https://github.com/vuestorefront/vue-storefront/issues/1494" target="_blank" rel="noopener noreferrer">第1494章（打开新窗口）<OutboundLink/></a></li>
<li>我们从 Microcart.js 中删除了 isOnline 变量。相反，我们现在使用<a href="https://github.com/filrak/vue-offline" target="_blank" rel="noopener noreferrer">vue-offline 中的<OutboundLink/></a>变量<a href="https://github.com/filrak/vue-offline" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>混合。<a href="https://github.com/vuestorefront/vue-storefront/issues/1494" target="_blank" rel="noopener noreferrer">第1494章（打开新窗口）<OutboundLink/></a></li>
</ol>
<h3 id="逐步升级" tabindex="-1"><a class="header-anchor" href="#逐步升级" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#upgrade-step-by-step" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>逐步升级</h3>
<h4 id="global-vs替换为rootstore并config移至config" tabindex="-1"><a class="header-anchor" href="#global-vs替换为rootstore并config移至config" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#global-vs-replaced-with-rootstore-and-config-was-moved-to-config" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>global.$VS</code>替换为<code>rootStore</code>并<code>config</code>移至<code>config</code></h4>
<p>要访问 rootStore，请通过以下方式导入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import config from 'config'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="cms-扩展重命名为-extension-magento2-cms" tabindex="-1"><a class="header-anchor" href="#cms-扩展重命名为-extension-magento2-cms" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#cms-extenstion-was-renamed-to-extension-magento2-cms" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>cms 扩展重命名为 extension-magento2-cms</h4>
<p>必须在<code>CustomCmsPage.vue</code>组件中将 CmsData 的导入更改为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import CmsData from '@vue-storefront/extension-magento2-cms/components/CmsData'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_1-1-1-2-发行说明-打开新窗口" tabindex="-1"><a class="header-anchor" href="#_1-1-1-2-发行说明-打开新窗口" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-1-1-2-release-notes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.1 -&gt; 1.2（<a href="https://github.com/vuestorefront/vue-storefront/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">发行说明 （打开新窗口）<OutboundLink/></a>)</h2>
<p>没有引入重大更改。不需要特殊处理😃</p>
<h2 id="_1-0-1-1-发行说明-打开新窗口" tabindex="-1"><a class="header-anchor" href="#_1-0-1-1-发行说明-打开新窗口" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-0-1-1-release-notes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.0 -&gt; 1.1（<a href="https://github.com/vuestorefront/vue-storefront/releases/tag/v1.1.0" target="_blank" rel="noopener noreferrer">发行说明 （打开新窗口）<OutboundLink/></a>)</h2>
<h3 id="修改-2" tabindex="-1"><a class="header-anchor" href="#修改-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#modifications-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>修改</h3>
<h4 id="插件注册简化" tabindex="-1"><a class="header-anchor" href="#插件注册简化" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#plugins-registration-simplified" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>插件注册简化</h4>
<p>而不是直接在此文件中<code>{theme}/plugins/index.js</code>使用导出对象<code>Vue.use(pugin)</code>（[docs （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/Working with plugins.md))</p>
<h4 id="microcart-逻辑移至-api-模块-部分" tabindex="-1"><a class="header-anchor" href="#microcart-逻辑移至-api-模块-部分" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#microcart-logic-moved-to-api-module-partially" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Microcart 逻辑移至 API 模块（部分）</h4>
<p>从 Microcart 开始，我们将大部分逻辑移至核心模块并对其进行单元测试。<a href="https://github.com/vuestorefront/vue-storefront/issues/1213" target="_blank" rel="noopener noreferrer">阅读更多 （打开新窗口）<OutboundLink/></a>.</p>
<p><code>Microcart.js</code>核心组件和<code>Microcart.vue</code>默认主题组件中发生的更改：</p>
<ul>
<li><code>closeMicrocart</code> 重命名为 <code>closeMicrocartExtend</code></li>
<li><code>items</code> 重命名为 <code>productsInCart</code></li>
<li><code>removeFromCart</code>添加到核心 Microcart 的方法</li>
</ul>
<h4 id="theme-app-extend-js-移除" tabindex="-1"><a class="header-anchor" href="#theme-app-extend-js-移除" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#theme-app-extend-js-removed" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>theme/app-extend.js</code> 移除</h4>
<p>这是多余的。</p>
<h4 id="theme-service-worker-ext-js-搬去-theme-service-worker-index-js" tabindex="-1"><a class="header-anchor" href="#theme-service-worker-ext-js-搬去-theme-service-worker-index-js" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#theme-service-worker-ext-js-moved-to-theme-service-worker-index-js" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a><code>{theme}/service-worker-ext.js</code> 搬去 <code>{theme}/service-worker/index.js</code></h4>
<p>现在它反映了<code>core/</code>文件夹结构，这是所需的行为。</p>
<h3 id="vue-storefront-api-docker-支持已扩展" tabindex="-1"><a class="header-anchor" href="#vue-storefront-api-docker-支持已扩展" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#vue-storefront-api-docker-support-has-been-extended" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>vue-storefront-api docker 支持已扩展</h3>
<p>我们添加的可能性在运行<code>vue-storefront-api</code>中多克尔（以前，就是弹性和Redis的图像是存在于完全<code>docker-compose.yml</code>，请阅读<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer">README.md （打开新窗口）<OutboundLink/></a>更多细节。</p>
<p>**请注意：**我们更改了<code>elasticsearch</code>配置文件部分的结构，移动<code>esIndexes</code>到<code>elasticsearch.indices</code>等。有一个自动迁移将通过运行自动更新您的配置文件：<code>yarn migrate</code>在<code>vue-storefront-api</code>文件夹中。</p>
<h3 id="购物车和用户数据的默认存储移动到-localstorage" tabindex="-1"><a class="header-anchor" href="#购物车和用户数据的默认存储移动到-localstorage" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#default-storage-of-the-shopping-carts-and-user-data-moved-to-localstorage" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>购物车和用户数据的默认存储移动到 localStorage</h3>
<p>目前，有一个配置选项来设置默认的本地存储配置：https://github.com/vuestorefront/vue-storefront/blob/271a33fc6e712b978e10b91447b05529b6d04801/config/default.json#L148。如果您喜欢之前在 indexedDb 中存储购物车的行为，请将配置后端更改为<code>INDEXEDDB</code>.</p>
<h3 id="mage2vuestorefront-改进" tabindex="-1"><a class="header-anchor" href="#mage2vuestorefront-改进" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#mage2vuestorefront-improvements" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>mage2vuestorefront 改进</h3>
<p>在<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront 中<OutboundLink/></a>添加了许多改进<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>进口商。进口商。例如，固定 special_price 同步。对于此类更改，请更新<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront （打开新窗口）<OutboundLink/></a>并重新导入您的产品。我们还添加了动态按需索引。</p>
<h3 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#new-features" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>新功能</h3>
<p>我们添加了 <a href="https://github.com/hilongjw/vue-progressbar" target="_blank" rel="noopener noreferrer"><code>vue-progressbar</code> （打开新窗口）<OutboundLink/></a>默认主题，可以在<code>App.vue</code>文件中找到。</p>
<h2 id="_1-0rc-3-1-0-发行说明-打开新窗口" tabindex="-1"><a class="header-anchor" href="#_1-0rc-3-1-0-发行说明-打开新窗口" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-0rc-3-1-0-release-notes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.0RC-3 -&gt; 1.0（<a href="https://github.com/vuestorefront/vue-storefront/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">发行说明 （打开新窗口）<OutboundLink/></a>)</h2>
<p>这是 Vue Storefront 的官方稳定版本。</p>
<ol>
<li>我们重命名<code>the core/components/*.vue</code>-&gt;<code>the core/components/*.js</code></li>
<li>我们重命名<code>the core/pages/*.vue</code>-&gt;<code>the core/pages/*.js</code></li>
<li>我们删除<code>corePage</code>和<code>coreComponent</code>佣工和创建ES-皮棉规则迁移的<code>import</code>报表自动（带<code>--fix</code>参数）</li>
</ol>
<p>您应该替换之前版本中的 mixin 声明：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> coreComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/themes'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">coreComponent</span><span class="token punctuation">(</span><span class="token string">'blocks/MyAccount/MyOrders'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>到</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyOrders <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/components/blocks/MyAccount/MyOrders'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span>MyOrders<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol>
<li>我们添加了 Multistore 支持。它不应该暗示对现有主题/扩展的任何重大更改（默认情况下它只是被禁用）。</li>
</ol>
<h2 id="_1-0rc-2-1-0rc-3-发行说明-打开新窗口" tabindex="-1"><a class="header-anchor" href="#_1-0rc-2-1-0rc-3-发行说明-打开新窗口" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-0rc-2-1-0rc-3-release-notes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.0RC-2 -&gt; 1.0RC-3（<a href="https://github.com/vuestorefront/vue-storefront/releases/tag/v1.0.0-rc.3" target="_blank" rel="noopener noreferrer">发行说明 （打开新窗口）<OutboundLink/></a>)</h2>
<p>此版本包含三个重要的重构工作：</p>
<ol>
<li>我们更改了用户帐户端点并添加了令牌更新机制，该机制由 <code>config.users.autoRefreshTokens</code>. 如果设置为 true 并且用户令牌将过期，VS 将尝试刷新它。</li>
<li>我们分离了用户帐户端点，因此请将以下默认值复制<code>default.json</code>到您的<code>local.json</code>并设置正确的 API 端点：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"users"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"autoRefreshTokens"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user"</span><span class="token punctuation">,</span>
      <span class="token property">"history_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/order-history?token={{token}}"</span><span class="token punctuation">,</span>
      <span class="token property">"resetPassword_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/reset-password"</span><span class="token punctuation">,</span>
      <span class="token property">"changePassword_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/change-password?token={{token}}"</span><span class="token punctuation">,</span>
      <span class="token property">"login_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/login"</span><span class="token punctuation">,</span>
      <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/create"</span><span class="token punctuation">,</span>
      <span class="token property">"me_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/me?token={{token}}"</span><span class="token punctuation">,</span>
      <span class="token property">"refresh_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/user/refresh"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>端点也由 设置，<code>yarn installer</code>因此您可以尝试使用此命令重新安装 VS。</p>
<ol>
<li>我们通过限制每次从后端加载到 JSON 对象中的字段来优化性能。请查看<code>config/default.json</code>如果您的应用程序需要/使用的某些字段丢失，请将以下片段复制到<code>config/local.json</code>并添加必填字段：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"entities"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"optimize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"twoStageCaching"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"children_data"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"children_count"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"is_active"</span><span class="token punctuation">,</span> <span class="token string">"parent_id"</span><span class="token punctuation">,</span> <span class="token string">"level"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"attribute"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"attribute_code"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"entity_type_id"</span><span class="token punctuation">,</span> <span class="token string">"options"</span><span class="token punctuation">,</span> <span class="token string">"default_value"</span><span class="token punctuation">,</span> <span class="token string">"is_user_defined"</span><span class="token punctuation">,</span> <span class="token string">"frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"attribute_id"</span><span class="token punctuation">,</span> <span class="token string">"default_frontend_label"</span><span class="token punctuation">,</span> <span class="token string">"is_visible_on_front"</span><span class="token punctuation">,</span> <span class="token string">"is_visible"</span><span class="token punctuation">,</span> <span class="token string">"is_comparable"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"productList"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"original_price_incl_tax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"configurable_children"</span><span class="token punctuation">,</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"configurable_options"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"productListWithChildren"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"type_id"</span><span class="token punctuation">,</span> <span class="token string">"sku"</span><span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"price"</span><span class="token punctuation">,</span> <span class="token string">"priceInclTax"</span><span class="token punctuation">,</span> <span class="token string">"original_price_incl_tax"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"image"</span><span class="token punctuation">,</span> <span class="token string">"sale"</span><span class="token punctuation">,</span> <span class="token string">"new"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.image"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.sku"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.special_price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.price_incl_tax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.special_price_incl_tax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.original_price"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.original_price_incl_tax"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.color"</span><span class="token punctuation">,</span> <span class="token string">"configurable_children.size"</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"description"</span><span class="token punctuation">,</span> <span class="token string">"sgn"</span><span class="token punctuation">,</span> <span class="token string">"tax_class_id"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"product"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"excludeFields"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"updated_at"</span><span class="token punctuation">,</span> <span class="token string">"created_at"</span><span class="token punctuation">,</span> <span class="token string">"attribute_set_id"</span><span class="token punctuation">,</span> <span class="token string">"status"</span><span class="token punctuation">,</span> <span class="token string">"visibility"</span><span class="token punctuation">,</span> <span class="token string">"tier_prices"</span><span class="token punctuation">,</span> <span class="token string">"options_container"</span><span class="token punctuation">,</span> <span class="token string">"url_key"</span><span class="token punctuation">,</span> <span class="token string">"msrp_display_actual_price_type"</span><span class="token punctuation">,</span> <span class="token string">"has_options"</span><span class="token punctuation">,</span> <span class="token string">"stock.manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.stock_id"</span><span class="token punctuation">,</span>  <span class="token string">"stock.use_config_backorders"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_enable_qty_inc"</span><span class="token punctuation">,</span> <span class="token string">"stock.enable_qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_manage_stock"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_min_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.notify_stock_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.use_config_max_sale_qty"</span><span class="token punctuation">,</span> <span class="token string">"stock.qty_increments"</span><span class="token punctuation">,</span> <span class="token string">"small_image"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"includeFields"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>如果<code>optimize</code>设置为 false，则返回到之前的行为（获取所有字段）。</p>
<ol>
<li>另一个很酷的功能是<code>twoStageCaching</code>默认启用的。这意味着对于 Category 页面，VS 仅获取显示 ProductTiles 所需的最少 JSON 字段数。不久之后，它通过第二个请求下载完整的对象，将它们存储在本地缓存中。</li>
<li>我们调整了 Service Worker 以更好地缓存应用程序；如果您的主页现在缓存在软件中（以前不是），它有时会令人沮丧。随意<code>Clear Storage</code>在你的开发者工具中使用 😃</li>
<li>该<code>mage2vuestorefront</code>工具得到了更新，现在它正在为<code>media_gallery</code>每个产品加载额外的媒体。我们还在产品页面上放置了一些 MediaGallery 组件。</li>
</ol>
<p>7.产品和类别页面被重构。将所有逻辑移至 Vuex 存储是一项大规模重构，因此如果您使用核心<code>fetchData</code>/<code>loadData</code>功能，您的代码可能会受到此更改的影响。</p>
<h2 id="_1-0rc-1-0rc-2-发行说明-打开新窗口" tabindex="-1"><a class="header-anchor" href="#_1-0rc-1-0rc-2-发行说明-打开新窗口" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-0rc-1-0rc-2-release-notes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.0RC -&gt; 1.0RC-2（<a href="https://github.com/vuestorefront/vue-storefront/releases/tag/v1.0.0-rc.2" target="_blank" rel="noopener noreferrer">发行说明 （打开新窗口）<OutboundLink/></a>)</h2>
<p>此版本带来了一些很酷的新功能（Magento 1.x 支持、Magento 2 外部结账、我的订单、折扣代码）以及一些小的重构。</p>
<p>不幸的是，重构带来了两个手动更改，需要在更新后应用于您的自定义主题。</p>
<p>在这里您可以查看**<a href="https://github.com/vuestorefront/vue-storefront/commit/111519c04acec272657e7eefec7ea8405da95f13" target="_blank" rel="noopener noreferrer">我们如何将自己的 default_m1 主题迁移到 RC-2<OutboundLink/></a><strong>的</strong><a href="https://github.com/vuestorefront/vue-storefront/commit/111519c04acec272657e7eefec7ea8405da95f13" target="_blank" rel="noopener noreferrer">示例 （打开新窗口）<OutboundLink/></a>**.</p>
<ol>
<li>我们改变了<code>ColorButton</code>，<code>SizeButton</code>，<code>PriceButton</code>在<code>core</code>到<code>ColorSelector</code>，<code>SizeSelector</code>，<code>PriceSelector</code>并增加了<code>GenericSelector</code>对所有其他属性类型。由于此更改，<code>coreComponent('ColorButton')</code>必须将其更改为<code>coreComponent('ColorSelector')</code>等。</li>
<li>我们为主题添加了 Vuex Stores 可扩展性。如果您收到以下构建错误：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ERROR in ./core/store/index.js
Module not found: Error: Can't resolve 'theme/store' in '***/vue-storefront/core/store'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这意味着，您需要将模板存储复制到：<code>&lt;Your custom theme folder&gt;/store</code>。</p>
</template>
