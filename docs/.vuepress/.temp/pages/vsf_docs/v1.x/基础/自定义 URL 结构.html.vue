<template><h1 id="自定义-url-结构" tabindex="-1"><a class="header-anchor" href="#自定义-url-结构" aria-hidden="true">#</a> 自定义 URL 结构</h1>
<p>默认情况下，Vue Storefront 使用非常严格的 URL 结构 - 其中每种类型的内容都带有“前缀”，例如：<code>/p/MH08/product-slug</code>或<code>/c/women-20</code>。从 Vue Storefront <strong>1.9</strong>开始，我们添加了<code>url</code>包含完全可定制的 url 调度程序的模块。</p>
<p>当<code>config.seo.useUrlDispatcher</code>设置为 true 时，<code>product.url_path</code>and<code>category.url_path</code>字段用作绝对 URL 地址（不再有<code>/c</code>和<code>/p</code>前缀）。检查最新的 [ <code>mage2vuestorefront</code>] 快照并重新导入您的产品以正确设置<code>url_path</code>字段。</p>
<p>例如，当<code>category.url_path</code>设置为<code>women/frauen-20</code>产品时，将在以下 URL 地址下可用：</p>
<p><code>http://localhost:3000/women/frauen-20</code> <code>http://localhost:3000/de/women/frauen-20</code> ...</p>
<p>**请注意：**本<code>config.products.useShortCatalogUrls</code>应被设置为<code>false</code>才能有<code>urlDispatcher</code>正常工作。它可能会干扰 Url Dispatcher 机制。从 VS 1.10.rc1 开始，该<code>useShortCatalogUrls</code>选项已被删除。</p>
<h2 id="如何自定义映射机制" tabindex="-1"><a class="header-anchor" href="#如何自定义映射机制" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/url.html#how-to-customize-the-mapping-mechanism" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何自定义映射机制</h2>
<p>该<code>url</code>模块包含负责将内容与 URL 正确映射的 Vuex Store 操作。</p>
<p>默认情况下， <a href="https://github.com/pkarw/vue-storefront/blob/9847f0695df0b54774dceb3c381e64770fd5cfda/core/modules/url/store/actions.ts#L65" target="_blank" rel="noopener noreferrer"><code>url/mappingFallback</code> （打开新窗口）<OutboundLink/></a>动作查询首先：<code>product/list</code>然后<code>category/list</code>动作检查所提供的<code>url_path</code>产品是否与任一类别的产品相关。</p>
<p>因为它是 Vuex 操作 - 您可能希望从您的自定义模块覆盖它以自定义映射逻辑（例如：通过使用<a href="https://devdocs.magento.com/guides/v2.3/graphql/reference/url-resolver.html" target="_blank" rel="noopener noreferrer">Magento2 URL 调度机制 （打开新窗口）<OutboundLink/></a>）。</p>
<p>对于所有<code>product/list</code>Vuex 操作调用，都会调用<code>url/registerMapping</code>操作来注册每个特定产品或类别的映射。映射被缓存，<code>localStorage</code>因此它们也可以在离线模式下工作 + 一旦检索到产品/类别列表，就不需要任何额外的网络调用。</p>
<h2 id="cms-页面和其他内容类型的自定义-url" tabindex="-1"><a class="header-anchor" href="#cms-页面和其他内容类型的自定义-url" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/url.html#custom-urls-for-cms-pages-and-other-content-types" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>CMS 页面和其他内容类型的自定义 URL</h2>
<p>您可以对所有内容类型使用 Url Dispatcher 功能。您唯一需要更改的是自定义<code>url/mappingFallback</code>Vuex 操作以正确查询其他内容源。</p>
<h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/url.html#modules" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>模块</h2>
<ul>
<li><a href="https://github.com/kodbruket/vsf-mapping-fallback" target="_blank" rel="noopener noreferrer">vsf-mapping-fallback （打开新窗口）<OutboundLink/></a>简化添加 URL 映射的过程</li>
</ul>
</template>
