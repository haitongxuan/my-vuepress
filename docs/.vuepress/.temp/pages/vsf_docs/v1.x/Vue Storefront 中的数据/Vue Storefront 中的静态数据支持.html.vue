<template><h1 id="vue-storefront-中的静态数据支持" tabindex="-1"><a class="header-anchor" href="#vue-storefront-中的静态数据支持" aria-hidden="true">#</a> Vue Storefront 中的静态数据支持</h1>
<p>在 Vue Storefront 中，我们可以使用 Magento 2 中的 CMS 静态块和 CMS 静态页面。</p>
<p>从 1.6 版开始，感谢@yuriboyko，我们有了更好的静态数据解决方案——它被添加到 Elasticsearch 数据库中，并使用 graphQL 查询，显示在店面上。</p>
<h3 id="这个怎么运作" tabindex="-1"><a class="header-anchor" href="#这个怎么运作" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/static-data.html#how-it-works" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>这个怎么运作？</h3>
<p>数据与 Magento 2 在适配器级别上的 ElasticSearch 同步 <code>mage2vuestorefront</code></p>
<p>同步基本 Magento 2 数据后，运行<code>node --harmony cli.js blocks</code>和<code>node --harmony cli.js pages</code>。确保你有<code>SnowdogApps/magento2-cms-api</code>，需要将 Magento 所见即所得数据和变量编译成 HTML 代码。不幸的是，这些小部件并未得到完全支持，因此请尽量避免使用它们。</p>
<p>静态数据使用 entityTypes 泵送到 ElasticSearch 数据库：</p>
<ul>
<li><code>cms_block</code> 对于块</li>
<li><code>cms_page</code> 页面</li>
</ul>
<p>使用新的 CMS 核心模块和两个组件（用于 CMS 块和用于 CMS 页面），我们可以轻松地在店面展示。查看示例 CMS 页面组件。</p>
<p>CMS 页面的路由设置在默认主题中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'cms-page'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/i/:slug'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> CmsPage <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>因此，您<code>about_us</code>可以在以下位置找到带有标识符的 cms 页面（在 Magento 2 管理 URL 密钥中）：<code>&lt;project_base_url&gt;/i/about_us</code></p>
<h2 id="为-vue-storefront-提供您自己的静态数据" tabindex="-1"><a class="header-anchor" href="#为-vue-storefront-提供您自己的静态数据" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/static-data.html#provide-your-own-static-data-for-vue-storefront" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>为 Vue Storefront 提供您自己的静态数据</h2>
<p>您不必使用 Magento 2 来提供静态数据。您可以使用自己的数据抽取 ElasticSearch 数据库。</p>
<ol>
<li>添加具有适当类型的数据：</li>
</ol>
<ul>
<li><code>cms_block</code> 对于块</li>
<li><code>cms_page</code> 页面</li>
</ul>
<ol>
<li>保留数据架构：</li>
</ol>
<ul>
<li>块：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type CmsBlock @doc(description: "CMS block defines all CMS block information") {
    identifier: String @doc(description: "CMS block identifier")
    title: String @doc(description: "CMS block title")
    content: String @doc(description: "CMS block content")
    creation_time: String @doc(description: "Timestamp indicating when the CMS block was created")
    store_id: Int @doc(description: "Store Id of CMS block")
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>页数：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type CmsPages @doc(description: "CMS page defines all CMS page information") {
    page_id: Int @doc(description: "Id of CMS page")
    title: String @doc(description: "CMS page title")
    identifier: String @doc(description: "URL key of CMS page")
    content: String @doc(description: "CMS page content")
    content_heading: String @doc(description: "CMS page content heading")
    meta_description: String @doc(description: "CMS page meta description")
    meta_keywords: String @doc(description: "CMS page meta keywords")
    store_id: Int @doc(description: "Store Id of CMS page")
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
