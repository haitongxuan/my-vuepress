<template><h1 id="总计和购物车与-magento-同步" tabindex="-1"><a class="header-anchor" href="#总计和购物车与-magento-同步" aria-hidden="true">#</a> 总计和购物车与 Magento 同步</h1>
<p>Vue Storefront 架构的关键原则之一是完全可扩展性。通过不依赖 Magento 2/CMS API 性能，我们取得了非常好的性能结果。通过实施“分而治之”规则，我们使用 Elasticsearch 创建了目录的中间件和外部数据存储。</p>
<p>这是我们的第一个目标，但第二个目标是为业务提供完整的数据安全性和可靠性，这样我们就不会遇到库存和价格不同步或未应用折扣规则等情况。无论性能如何，它都会毁了生意😃</p>
<h2 id="购物车和总计同步" tabindex="-1"><a class="header-anchor" href="#购物车和总计同步" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#cart-and-totals-sync" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>购物车和总计同步</h2>
<p>这就是我们将直接购物车与 Magento 2 同步的原因。每当用户向购物车添加商品时，我们都会检查库存并将本地浏览器内购物车与 CMS 同步。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/Vue-storefront-architecture-proxy-requests.c87b9d51.png" alt="这是动态请求架构"></p>
<p>在向后的方向上，我们总是在应用 Magento 购物车规则和折扣以向用户显示正确数据之后获得当前总数。实现这种同步是为了保持 Vue Storefront 平台无关。该<code>vue-storefront-api</code>层负责将特定于平台的 API 格式转换为 Vue Storefront 通用数据抽象。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/cart-sync.6d48833c.png" alt="这就是购物车同步的工作原理"></p>
<p>如您所见，同步的工作方式类似于对以下内容的网络调用序列<code>vue-storefront-api</code>：</p>
<ol>
<li><code>pull</code>执行该方法以获取当前用户的 Magento 购物车。</li>
<li>在客户端，逻辑检查哪些元素在客户端、服务器端是新的，哪些是删除的。</li>
<li>在我们的例子中，服务器端不存在一个元素，因此我们调用了一种<code>update</code>方法将其添加到服务器购物车中。</li>
<li>然后，我们调用<code>totals</code>以获取购物车的当前行值和一般总计。</li>
</ol>
<h2 id="如何使此功能工作" tabindex="-1"><a class="header-anchor" href="#如何使此功能工作" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#how-to-make-this-feature-work" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何使此功能工作</h2>
<p>默认情况下，购物车和总计同步处于禁用状态。要使其工作，您只需要按照以下步骤操作：</p>
<ol>
<li>生成 Magento 2 API 访问。在我们的第一个教程中，有<a href="https://docs.vuestorefront.io/v1/guide/installation/magento.html" target="_blank" rel="noopener noreferrer">关于如何执行此操作<OutboundLink/></a>的<a href="https://docs.vuestorefront.io/v1/guide/installation/magento.html" target="_blank" rel="noopener noreferrer">说明<OutboundLink/></a>。</li>
<li>使用上一步中的 OAuth 密钥正确配置<code>vue-storefront-api</code>数据层（它应该已本地安装在您的计算机/服务器上）。为此，您需要修改<code>conf/local.json</code>授权数据并将其粘贴到该<code>magento2.api</code>部分：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"magento2"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://magento2.demo-1.xyz.com"</span><span class="token punctuation">,</span>
		<span class="token property">"imgUrl"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/media/catalog/product"</span><span class="token punctuation">,</span>
		<span class="token property">"magentoUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"magentoUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"httpUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"httpUserPassword"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://demo-magento2.vuestorefront.io/rest"</span><span class="token punctuation">,</span>
			<span class="token property">"consumerKey"</span><span class="token operator">:</span> <span class="token string">"byv3730rhoulpopcq64don8ukb8lf2gq"</span><span class="token punctuation">,</span>
			<span class="token property">"consumerSecret"</span><span class="token operator">:</span> <span class="token string">"u9q4fcobv7vfx9td80oupa6uhexc27rb"</span><span class="token punctuation">,</span>
			<span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">"040xx3qy7s0j28o3q0exrfop579cy20m"</span><span class="token punctuation">,</span>
			<span class="token property">"accessTokenSecret"</span><span class="token operator">:</span> <span class="token string">"7qunl3p505rubmr7u1ijt7odyialnih9"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>请检查 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json" target="_blank" rel="noopener noreferrer"><code>conf/default.json</code> （打开新窗口）<OutboundLink/></a>供参考。</p>
<ol>
<li>移至您的<code>vue-storefront</code>安装目录并修改<code>config/local.json</code>. 您需要更改<code>cart</code>部分以将<code>synchronize</code>和<code>synchronize_totals</code>标志切换为 true：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>   <span class="token property">"cart"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"synchronize"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"synchronize_totals"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/create?token={{token}}"</span><span class="token punctuation">,</span>
      <span class="token property">"updateitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/update?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"deleteitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/delete?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"pull_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/pull?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"totals_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/totals?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"paymentmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/payment-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"shippingmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/shipping-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"shippinginfo_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/shipping-information?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"collecttotals_endpoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:8080/api/cart/collect-totals?token={{token}}&amp;cartId={{cartId}}"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>请检查 <a href="https://github.com/vuestorefront/vue-storefront/blob/1302ed84561a514beb8c35e45ae1d0aa4dc9f74a/config/default.json#L8" target="_blank" rel="noopener noreferrer"><code>conf/default.json</code> （打开新窗口）<OutboundLink/></a>供参考。</p>
<h2 id="价格同步" tabindex="-1"><a class="header-anchor" href="#价格同步" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#prices-sync" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>价格同步</h2>
<p>最后一个缺失的块是目录价格同步。使用称为动态价格的功能可以非常轻松地启用此功能。请查看<a href="https://docs.vuestorefront.io/v1/guide/integrations/direct-prices-sync.html" target="_blank" rel="noopener noreferrer">动态价格如何<OutboundLink/></a>打开此功能。</p>
<h2 id="订单同步" tabindex="-1"><a class="header-anchor" href="#订单同步" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#order-sync" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>订单同步</h2>
<p>Vue Storefront 的一项很酷的功能是排队订单同步。这意味着每当用户在应用程序中下订单时，我们都会将订单存储在本地浏览器缓存（indexedDb 实例）中，并在 Internet 连接可用时立即将其发送到服务器。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/orders-collection.4c3351a2.png" alt="订单在发送到服务器之前存储在本地"></p>
<p>在服务器端，这<code>vue-storefront-api</code>是订单在返回 Magento 2 的途中经过的第一行。无论购物车是否同步（如上所述），订单都将转换为 Magento 2 对象。</p>
<p>服务器 API 将订单存储在由 <a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/worker/order_to_magento2.js" target="_blank" rel="noopener noreferrer"><code>order_2_magento</code> （打开新窗口）<OutboundLink/></a>工人进程。我们确实支持多种类型的订单：对于访客用户和已登录的订单，是否已同步购物车等。</p>
<p>这个过程不需要太多额外的配置：</p>
<ol>
<li>您必须在以下<code>config/local.json</code>文件中配置 Magento2 API 访问权限<code>vue-storefront-api</code></li>
<li>您必须在 Magento 集成的“权限”部分中将“订单”部分标记为“开”（<a href="https://docs.vuestorefront.io/v1/guide/installation/magento.html" target="_blank" rel="noopener noreferrer">有关如何设置的参考，请参阅上一教程<OutboundLink/></a>）。</li>
<li>在配置步骤之后您只需<code>yarn o2m</code>在您的<code>vue-storefront-api</code>目录中运行。</li>
</ol>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/o2m-output.790de781.png" alt="这是设置成功后o2m的输出"></p>
</template>
