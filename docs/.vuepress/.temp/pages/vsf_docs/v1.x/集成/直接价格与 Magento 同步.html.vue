<template><h1 id="直接价格与-magento-同步" tabindex="-1"><a class="header-anchor" href="#直接价格与-magento-同步" aria-hidden="true">#</a> 直接价格与 Magento 同步</h1>
<p>您可能已经在我们的架构中注意到，我们正在将整个产品目录与我们的 Elasticsearch 数据存储同步。在行业中存在一些边缘情况，这种同步可能导致非无效价格和库存数量问题。</p>
<p>针对这些挑战，我们引入了一种特殊模式，允许 vue-storefront 直接从 CMS（Magento 或其他）下载价格（in）。要启用实时价格同步，请更改以下行<code>config/local.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"products"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"preventConfigurableChildrenDirectAccess"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"alwaysSyncPlatformPricesOver"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"clearPricesBeforePlatformSync"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"waitForPlatformSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/product"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这意味着每次 vue-storefront 从 Elasticsearch 下载产品提要时，它都会调用<code>vue-storefront-api</code>统一代理方法从 Magento 实时获取价格。</p>
<p>要使用此功能，您还应该<code>config/local.json</code>在<code>vue-storefront-api</code>安装中进行修改：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>	<span class="token property">"tax"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"defaultCountry"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
		<span class="token property">"defaultRegion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"calculateServerSide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">"alwaysSyncPlatformPricesOver"</span><span class="token operator">:</span> <span class="token boolean">true</span>
	  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>重要提示</em>：要使用动态的Magento 2种价格同步后，应该恢复使用的数据库<code>yarn restore</code>中的<code>vue-storefront-api</code>或重新运行<code>mage2vuestorefront</code>的产品同步，因为“ID”字段已添加到<code>configurable_children</code>产品和它需要的价格同步。</p>
</template>
