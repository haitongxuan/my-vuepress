<template><h1 id="多商店-magento-2-支持" tabindex="-1"><a class="header-anchor" href="#多商店-magento-2-支持" aria-hidden="true">#</a> 多商店 Magento 2 支持</h1>
<p>Vue Storefront 支持 Magento Multistore 安装</p>
<h2 id="vue-storefront-1-中-multistore-的限制" tabindex="-1"><a class="header-anchor" href="#vue-storefront-1-中-multistore-的限制" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#limitations-of-multistore-in-vue-storefront-1" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront 1 中 Multistore 的限制</h2>
<ul>
<li>现在可以实现多域支持，但它需要对核心进行棘手的更改。它将在重构的 Multistore 中可用，该 Multistore 应在 1.13/1.14 中发布</li>
<li>目前不支持不同商店的不同主题。如果你想实现这一点 - 最简单的方法是使用不同的配置运行 2 个实例。如果您只想根据当前商店更改主题的一部分，那么您可以使用下面描述的助手轻松实现。</li>
<li>每个商店不支持多币种</li>
</ul>
<h2 id="多网站索引" tabindex="-1"><a class="header-anchor" href="#多网站索引" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#multiwebsite-indexing" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>多网站索引</h2>
<p>多网站支持从 Elasticsearch 索引开始。基本上，每个商店都有自己的 Elasticsearch 索引，应该使用<a href="https://github.com/vuestorefront/magento2-vsbridge-indexer" target="_blank" rel="noopener noreferrer">Magento2 VSBridge 索引器<OutboundLink/></a>填充<a href="https://github.com/vuestorefront/magento2-vsbridge-indexer" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>工具。</p>
<p>警告</p>
<p>有已弃用的旧节点索引器。你不应该<code>mage2vuestorefront</code>再在生产中使用了！使用它的唯一可接受的原因是从开发实例向本地 Elasticsearch 集群提供数据。</p>
<p>向本地 Elasticsearch 提供数据的最简单脚本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">TIME_TO_EXIT</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_KEY</span><span class="token operator">=</span>byv3730rhoulpopcq64don8ukb8lf2gq
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_SECRET</span><span class="token operator">=</span>u9q4fcobv7vfx9td80oupa6uhexc27rb
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN</span><span class="token operator">=</span>040xx3qy7s0j28o3q0exrfop579cy20m
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN_SECRET</span><span class="token operator">=</span>7qunl3p505rubmr7u1ijt7odyialnih9

<span class="token builtin class-name">echo</span> <span class="token string">'German store - de'</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://demo-magento2.vuestorefront.io/rest/de
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog_de

node --harmony cli.js categories --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js productcategories --partitions<span class="token operator">=</span><span class="token number">1</span>
node --harmony cli.js attributes --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js taxrule --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js products --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true

<span class="token builtin class-name">echo</span> <span class="token string">'Italian store - it'</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://demo-magento2.vuestorefront.io/rest/it
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog_it

node --harmony cli.js categories --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js productcategories --partitions<span class="token operator">=</span><span class="token number">1</span>
node --harmony cli.js attributes --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js taxrule --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js products --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true

<span class="token builtin class-name">echo</span> <span class="token string">'Default store - in our case United States / en'</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://demo-magento2.vuestorefront.io/rest
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog

node --harmony cli.js categories --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js productcategories --partitions<span class="token operator">=</span><span class="token number">1</span>
node --harmony cli.js attributes --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js taxrule --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
node --harmony cli.js products --partitions<span class="token operator">=</span><span class="token number">1</span> --removeNonExistient<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>如您所见，它只是添加到基本 Magento 2 REST API URL的<strong>IT</strong>或<strong>DE</strong>商店代码，然后将<strong>INDEX_NAME</strong>设置为专用索引名称。</p>
<p>结果，你应该得到：</p>
<ul>
<li><em>vue_storefront_catalog_it</em> - 填充了“it”商店数据</li>
<li><em>vue_storefront_catalog_de</em> - 填充“de”商店数据</li>
<li><em>vue_storefront_catalog</em> - 填充“默认”商店数据</li>
</ul>
<p>然后，要在 Vue Storefront 中使用这些索引，您应该使用<code>vue-storefront-api</code>db 工具为数据库模式建立索引（仅在使用 mage2vuestorefront 时使用！）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> db rebuild -- --indexName<span class="token operator">=</span>vue_storefront_catalog_it
<span class="token function">yarn</span> db rebuild -- --indexName<span class="token operator">=</span>vue_storefront_catalog_de
<span class="token function">yarn</span> db rebuild -- --indexName<span class="token operator">=</span>vue_storefront_catalog
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vue-storefront-和-vue-storefront-api-配置" tabindex="-1"><a class="header-anchor" href="#vue-storefront-和-vue-storefront-api-配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#vue-storefront-and-vue-storefront-api-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront 和 Vue Storefront API 配置</h2>
<p>在这一系列命令之后，您可以将可用的 ES 索引添加到您的<code>vue-storefront-api/config/local.json</code>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"server"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">8080</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"esHost"</span><span class="token operator">:</span> <span class="token string">"localhost:9200"</span><span class="token punctuation">,</span>
	<span class="token property">"esIndexes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">"vue_storefront_catalog"</span><span class="token punctuation">,</span>
		<span class="token string">"vue_storefront_catalog_de"</span><span class="token punctuation">,</span>
		<span class="token string">"vue_storefront_catalog_it"</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"availableStores"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"de"</span><span class="token punctuation">,</span>
      <span class="token string">"it"</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>最后一件事是更改<code>vue-storefront/config/local.json</code>以配置可用的 storeView。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"storeViews"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"multistore"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"mapStoreUrlsFor"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"de"</span><span class="token punctuation">,</span> <span class="token string">"it"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"de"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"de"</span><span class="token punctuation">,</span>
    <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"German Store"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/de"</span><span class="token punctuation">,</span>
    <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost:8080/api/catalog"</span><span class="token punctuation">,</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_de"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"userGroupId"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">"useOnlyDefaultUserGroupId"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"deprecatedPriceFieldsSupport"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"finalPriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"DE"</span><span class="token punctuation">,</span>
      <span class="token property">"availableLocale"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"de-DE"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"de-DE"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"€"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyDecimal"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"currencyGroup"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"fractionDigits"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"priceFormat"</span><span class="token operator">:</span> <span class="token string">"{sign}{amount}"</span><span class="token punctuation">,</span>
      <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D/M/YYYY"</span><span class="token punctuation">,</span>
      <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Deutschland"</span><span class="token punctuation">,</span>
      <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"German"</span><span class="token punctuation">,</span>
      <span class="token property">"bundleAllStoreviewLanguages"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"it"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"storeCode"</span><span class="token operator">:</span> <span class="token string">"it"</span><span class="token punctuation">,</span>
    <span class="token property">"storeId"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Italian Store"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"/it"</span><span class="token punctuation">,</span>
    <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost:8080/api/catalog"</span><span class="token punctuation">,</span>
      <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_it"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"sourcePriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"userGroupId"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">"useOnlyDefaultUserGroupId"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"deprecatedPriceFieldsSupport"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"finalPriceIncludesTax"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"i18n"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLanguage"</span><span class="token operator">:</span> <span class="token string">"IT"</span><span class="token punctuation">,</span>
      <span class="token property">"availableLocale"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"it-IT"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"defaultLocale"</span><span class="token operator">:</span> <span class="token string">"it-IT"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyCode"</span><span class="token operator">:</span> <span class="token string">"EUR"</span><span class="token punctuation">,</span>
      <span class="token property">"currencySign"</span><span class="token operator">:</span> <span class="token string">"€"</span><span class="token punctuation">,</span>
      <span class="token property">"currencyDecimal"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"currencyGroup"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"fractionDigits"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"priceFormat"</span><span class="token operator">:</span> <span class="token string">"{sign}{amount}"</span><span class="token punctuation">,</span>
      <span class="token property">"dateFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm D/M/YYYY"</span><span class="token punctuation">,</span>
      <span class="token property">"fullCountryName"</span><span class="token operator">:</span> <span class="token string">"Italy"</span><span class="token punctuation">,</span>
      <span class="token property">"fullLanguageName"</span><span class="token operator">:</span> <span class="token string">"Italian"</span><span class="token punctuation">,</span>
      <span class="token property">"bundleAllStoreviewLanguages"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><p>提示</p>
<p>你可以找到适用于更多的选择<em>了MultiStore</em>在<a href="https://docs.vuestorefront.io/v1/guide/basics/configuration.html#store-views" target="_blank" rel="noopener noreferrer">商店视图<OutboundLink/></a>的部分<em>解释配置文件</em>。</p>
<p>进行这些更改后，您将<code>LanguageSwitcher</code>在底部看到一个组件。</p>
<p>默认情况下，语言/商店由 URL 前缀切换：</p>
<ul>
<li><code>http://localhost:3000</code> 用于默认商店</li>
<li><code>http://localhost:3000/it</code> 将商店切换到意大利商店</li>
<li><code>http://localhost:3000/de</code> 将商店切换到德国商店</li>
</ul>
<p>通用网址格式为： <code>http://localhost:3000/{storeCode}</code></p>
<p>storeCode 可以通过在运行<code>yarn dev</code>/之前设置的 ENV 变量来切换<code>yarn start</code>：</p>
<ul>
<li><code>export STORE_CODE=de &amp;&amp; yarn dev</code>将在<code>de</code>商店加载的情况下运行商店</li>
</ul>
<p>在 NGINX/varnish 模式下使用多存储模式时，另一个有用的选项是通过<code>x-vs-store-code</code>HTTP 标头设置存储代码。</p>
<h2 id="更改特定商店视图的-ui" tabindex="-1"><a class="header-anchor" href="#更改特定商店视图的-ui" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#changing-the-ui-for-specific-store-views" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>更改特定商店视图的 UI</h2>
<p>如果您想修改路线或更改有关当前区域设置的某些特定组件（例如，德国商店中的不同结帐），请查看<code>src/themes/default/index.js</code>：：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if youre' runing multistore setup this is copying the routed above adding the 'storeCode' prefix to the URLs and the names of the routes</span>
  <span class="token comment">// You can do it on your own and then be able to customize the components used for example for German storeView checkout</span>
  <span class="token comment">// To do so please execlude the desired storeView from the config.storeViews.mapStoreUrlsFor and map the URLs by Your own like:</span>
  <span class="token comment">// { name: 'de-checkout', path: '/checkout', component: CheckoutCustomized },</span>
  router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setupMultistoreRoutes</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> router<span class="token punctuation">,</span> routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">'ui'</span><span class="token punctuation">,</span> UIStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>另一种选择是为特定的商店视图创建一个单独的主题。运行时主题更改是不可能的，因为主题是在页面构建过程中由 webpack 编译到 JS 包中的。在这种情况下，您应该运行<code>vue-storefront</code>在<code>config/local.json</code>文件中设置正确主题的单独实例。</p>
<h2 id="多源库存-msi-支持" tabindex="-1"><a class="header-anchor" href="#多源库存-msi-支持" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#multi-source-inventory-msi-support" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>多源库存 (MSI) 支持</h2>
<p>要支持此自定义功能，您应该注意两件事。首先请安装<a href="https://github.com/divanteLtd/magento2-vsbridge-indexer-msi" target="_blank" rel="noopener noreferrer">Magento2 VSBridge Indexer MSI Extension （打开新窗口）<OutboundLink/></a>. 然后在<code>config/local.json</code>您的 VSF-API 添加部分，如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"msi"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">"defaultStockId"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>defaultStockId</code>您的默认股票 ID在哪里。在每个使用不同股票 ID 的 storeCode 中，您应该添加如下部分：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"msi"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string">"stockId"</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="有用的帮手" tabindex="-1"><a class="header-anchor" href="#有用的帮手" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#useful-helpers" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>有用的<em>帮手</em></h2>
<h3 id="如何获取当前商店视图" tabindex="-1"><a class="header-anchor" href="#如何获取当前商店视图" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-get-current-store-view" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何获取当前商店视图？</h3>
<p>这是获取当前商店视图值的辅助方法。</p>
<p>您只需<code>currentStoreView</code>要从<code>core/lib/multistore</code>如下示例中导入函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> currentStoreView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/multistore'</span>
<span class="token comment">// ... abridged </span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    currency<span class="token operator">:</span> <span class="token function">currentStoreView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>i18n<span class="token punctuation">.</span>currencyCode<span class="token punctuation">,</span>
    value<span class="token operator">:</span> method<span class="token punctuation">.</span>price_incl_tax
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>currentStoreView()</code>返回您在<code>local.json</code>其中设置的对象值- 它是 StoreView 或扩展 StoreView 的类型。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StoreView</span> <span class="token punctuation">{</span>
  storeCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  extend<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  storeId<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  appendStoreCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  elasticsearch<span class="token operator">:</span> <span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tax<span class="token operator">:</span> <span class="token punctuation">{</span>
    sourcePriceIncludesTax<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    finalPriceIncludesTax<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    deprecatedPriceFieldsSupport<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    defaultCountry<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    defaultRegion<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    calculateServerSide<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    userGroupId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    useOnlyDefaultUserGroupId<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  i18n<span class="token operator">:</span> <span class="token punctuation">{</span>
    fullCountryName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    fullLanguageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    defaultLanguage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    defaultCountry<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    defaultLocale<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    currencyCode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    currencySign<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    currencyDecimal<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    currencyGroup<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    fractionDigits<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    priceFormat<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    dateFormat<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  seo<span class="token operator">:</span> <span class="token punctuation">{</span>
    defaultTitle<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="如何从路线中删除商店代码" tabindex="-1"><a class="header-anchor" href="#如何从路线中删除商店代码" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-remove-store-code-from-route" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何从路线中删除商店代码</h3>
<p>当您需要<code>storeCode</code>从路由中删除时，请使用<code>removeStoreCodeFromRoute</code>以下示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> removeStoreCodeFromRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/multistore'</span>
<span class="token comment">// ... abridged </span>
    <span class="token keyword">const</span> urlWithoutStorecode1 <span class="token operator">=</span> <span class="token function">removeStoreCodeFromRoute</span><span class="token punctuation">(</span><span class="token string">'/gb/home'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// should return '/home`</span>
    <span class="token keyword">const</span> urlWithoutStorecode2 <span class="token operator">=</span> <span class="token function">removeStoreCodeFromRoute</span><span class="token punctuation">(</span><span class="token string">'gb/home'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// should return 'home`</span>
    <span class="token keyword">const</span> urlWithoutStorecode3 <span class="token operator">=</span> <span class="token function">removeStoreCodeFromRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'/gb/home'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// should return '/home`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="将-storecode-更新-附加到您的-url" tabindex="-1"><a class="header-anchor" href="#将-storecode-更新-附加到您的-url" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#update-append-a-storecode-to-your-url" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>将 storeCode 更新/附加到您的 URL</h3>
<p>如果您需要<code>storeCode</code>在提供的 URL 中附加或更新查询参数，您可以通过调用<code>adjustMultistoreApiUrl</code>函数来完成，如下例所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> adjustMultistoreApiUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/multistore'</span>

<span class="token comment">// ... abridged </span>
<span class="token comment">// Let's say current storeCode is `de`</span>
<span class="token keyword">const</span> myUrl1 <span class="token operator">=</span> <span class="token function">adjustMultistoreApiUrl</span><span class="token punctuation">(</span><span class="token string">'https://example.com?a=b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 'https://example.com?a=b&amp;storeCode=de'</span>
<span class="token keyword">const</span> myUrl2 <span class="token operator">=</span> <span class="token function">adjustMultistoreApiUrl</span><span class="token punctuation">(</span><span class="token string">'https://example.com?a=b&amp;storeCode=it'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 'https://example.com?a=b&amp;storeCode=de'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当您向 VSF-API 发送请求并且希望 VSF-API 使用某些 storeCode 的端点时，此功能特别有用。</p>
<h3 id="在-vue-storefront-api-中使用某些-storecode-的端点" tabindex="-1"><a class="header-anchor" href="#在-vue-storefront-api-中使用某些-storecode-的端点" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#using-endpoint-of-certain-storecode-in-vue-storefront-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>在 Vue Storefront API 中使用某些 storeCode 的端点</h3>
<p>在<code>src/api/extensions/example-magento-api/index.js</code>我们创建 Magento 2 客户端的代码行中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">Magento2Client</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>magento2<span class="token punctuation">.</span>api<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果你想为某个端点支持多存储，你应该这样做：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">Magento2Client</span><span class="token punctuation">(</span><span class="token function">multiStoreConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>magento2<span class="token punctuation">.</span>api<span class="token punctuation">,</span> req<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>它使用<code>storeCode</code>来自 的查询参数<code>req</code>来确定要使用的商店。为了使其正常工作，您还应该在 VSF-API 的配置中配置不同的存储。检查此示例配置<code>de</code>并<code>it</code>存储代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"magento2"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"imgUrl"</span><span class="token operator">:</span> <span class="token string">"http://demo-magento2.vuestorefront.io/media/catalog/product"</span><span class="token punctuation">,</span>
    <span class="token string">"assetPath"</span><span class="token operator">:</span> <span class="token string">"/../var/magento2-sample-data/pub/media"</span><span class="token punctuation">,</span>
    <span class="token string">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"https://my-magento.com/rest"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerKey"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessToken"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"api_de"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"https://my-magento.com/de/rest"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerKey"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessToken"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"api_it"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">"url"</span><span class="token operator">:</span> <span class="token string">"https://my-magento.com/it/rest"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerKey"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessToken"</span><span class="token operator">:</span> <span class="token string">"******"</span><span class="token punctuation">,</span>
      <span class="token string">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">"******"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="使用正确的商店代码本地化-url" tabindex="-1"><a class="header-anchor" href="#使用正确的商店代码本地化-url" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#localize-url-with-correct-store-code" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用正确的商店代码本地化 URL</h3>
<p>提示</p>
<p>本地化路由是指按照惯例在 URL 中表示存储代码，不带参数。</p>
<p>例如它<code>de</code>在<code>https://example.com/de?a=b</code></p>
<p>允许使用的方法是<code>localizedRoute</code>. <code>de</code>作为当前 storeCode 的示例转换：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">localizedRoute</span><span class="token punctuation">(</span><span class="token string">'http://example.com/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns http://example.com/de</span>
<span class="token function">localizedRoute</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns /de</span>
<span class="token function">localizedRoute</span><span class="token punctuation">(</span><span class="token string">'/?a=b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns /de?a=b</span>
<span class="token function">localizedRoute</span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns /de/about</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>警告</p>
<p><code>appendStoreCode</code>商店视图配置的选项应设置为<code>true</code>将商店代码显示为上面的提示</p>
<p>警告</p>
<p><code>localizedRoute</code>被注入到每个 Vue 的实例中，因此您可以通过<code>this.localizedRoute</code>. 您也可以在模板中使用它而无需额外导入。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>localizedRoute(page.link)<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cl-accent relative<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{
  page.title
}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或者</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span>
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
    localizedRoute({
      name: product.type_id + <span class="token punctuation">'</span>-product<span class="token punctuation">'</span>,
      params: {
        parentSku: product.parentSku ? product.parentSku : product.sku,
        slug: product.slug,
        childSku: product.sku,
      },
    })
  <span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="如何从路由中提取商店代码" tabindex="-1"><a class="header-anchor" href="#如何从路由中提取商店代码" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-extract-store-code-from-route" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何从路由中提取商店代码</h3>
<p>您可以从路由中提取商店代码，如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> storeCodeFromRoute <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/storeCodeFromRoute'</span>
<span class="token comment">// abridged</span>
<span class="token keyword">const</span> storeCode <span class="token operator">=</span> <span class="token function">storeCodeFromRoute</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果 storeCode 是，您应该<code>gb</code>从路由获取商店代码<code>https://example.com/gb/foo``gb</code></p>
</template>
