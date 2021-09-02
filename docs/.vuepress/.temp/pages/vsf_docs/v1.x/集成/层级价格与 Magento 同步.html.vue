<template><h1 id="层级价格与-magento-同步" tabindex="-1"><a class="header-anchor" href="#层级价格与-magento-同步" aria-hidden="true">#</a> 层级价格与 Magento 同步</h1>
<p>此功能允许您向用户显示最终价格，包括 Magento 的层级价格。它支持简单、可下载、可配置的捆绑和组产品。</p>
<p>要启用等级价格，请在</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"usePriceTiers"</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>要使用此功能，您还应该<code>config/local.json</code>在<code>vue-storefront-api</code>安装中进行修改：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"usePriceTiers"</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
