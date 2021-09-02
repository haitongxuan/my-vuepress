<template><h1 id="产品评论" tabindex="-1"><a class="header-anchor" href="#产品评论" aria-hidden="true">#</a> 产品评论</h1>
<p>从 1.4.0 版本开始，Vue Storefront 支持 Magento 2 产品评论。不幸的是，Magento 2 REST API 不包含任何与评论相关的端点，因此要使其工作，您需要安装一个<a href="https://github.com/divanteLtd/magento2-review-api" target="_blank" rel="noopener noreferrer">额外的 Magento 2 模块 （打开新窗口）<OutboundLink/></a>.</p>
<p>安装步骤（在你的 Magento 2 目录中）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">composer</span> config repositories.divante vcs https://github.com/divanteLtd/magento2-review-api.git
<span class="token function">composer</span> require divante/magento2-review-api:dev-master
php bin/magento setup:upgrade
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>您应该知道评论存储在 Elasticsearch 中。要正确显示评论，您需要更新您的<a href="https://github.com/vuestorefront/mage2vuestorefront/" target="_blank" rel="noopener noreferrer">mage2vuestorefront （打开新窗口）<OutboundLink/></a>并运行评论同步：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js reviews
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
