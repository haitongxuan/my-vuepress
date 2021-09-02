<template><h1 id="贝宝支付支持" tabindex="-1"><a class="header-anchor" href="#贝宝支付支持" aria-hidden="true">#</a> 贝宝支付支持</h1>
<p>Vue Storefront 支持 PayPal 付款，并带有<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer">vue-storefront 的<OutboundLink/></a>PayPal Payment 扩展<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>, 由开发<a href="https://www.develodesign.co.uk/" target="_blank" rel="noopener noreferrer">设计 （打开新窗口）<OutboundLink/></a>.</p>
<h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#the-architecture" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>架构</h2>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/paypal.3f255afd.svg" alt="架构图"></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#installation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>安装</h2>
<p>手动（首选）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:develodesign/vsf-payment-paypal.git ./vue-storefront/src/modules/paypal
<span class="token string">"paypal"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">"clientId"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
  <span class="token string">"endpoint"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"complete"</span><span class="token builtin class-name">:</span> <span class="token string">"http://localhost:8080/api/ext/paypal/complete"</span>,
    <span class="token string">"setExpressCheckout"</span><span class="token builtin class-name">:</span> <span class="token string">"http://localhost:8080/api/ext/paypal/setExpressCheckout"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="注册paypal模块" tabindex="-1"><a class="header-anchor" href="#注册paypal模块" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#registration-the-paypal-module" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>注册Paypal模块</h2>
<p>在你的编辑器中打开 <code>./src/modules/index.ts</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Paypal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./paypal'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> registerModules<span class="token operator">:</span> VueStorefrontModule<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  Paypal
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="paypal-付款结帐审查" tabindex="-1"><a class="header-anchor" href="#paypal-付款结帐审查" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#paypal-payment-checkout-review" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Paypal 付款结帐审查</h2>
<p>在您的主题下，<code>components/core/blocks/Checkout/OrderReview.vue</code>将以下导入添加到您的脚本中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PaypalButton <span class="token keyword">from</span> <span class="token string">'@develodesign/vsf-payment-paypal/components/Button'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    PaypalButton
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">payment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>checkout<span class="token punctuation">.</span>paymentDetails
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>并在您的模板之前添加贝宝按钮<code>button-full</code>：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>paypal-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>payment.paymentMethod === <span class="token punctuation">'</span>paypal_express<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button-full</span>
  <span class="token attr-name">v-else</span>
  <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeOrder<span class="token punctuation">"</span></span>
  <span class="token attr-name">data-testid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orderReviewSubmit<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>place-order-btn<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$v.orderReview.$invalid<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  {{ $t('Place the order') }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button-full</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="paypal-支付-api-扩展" tabindex="-1"><a class="header-anchor" href="#paypal-支付-api-扩展" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#paypal-payment-api-extension" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>PayPal 支付 API 扩展</h2>
<p>设置对 api 的依赖： <code>cd ../vue-storefront-api</code> <code>yarn add -W @paypal/checkout-server-sdk</code> <code>yarn add -W paypal-nvp-api</code></p>
<p>将扩展安装到<code>vue-storefront-api</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cp</span> -fr src/modules/paypal/api/paypal <span class="token punctuation">..</span>/vue-storefront-api/src/api/extensions/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>转到 api config <code>./vue-storefront-api/config/local.json</code>并注册 Paypal Api 扩展：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"registeredExtensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    ...
    <span class="token string">"paypal"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>并将<code>paypal</code>设置添加到<code>extensions</code>键：</p>
<p>将以下内容也添加到您的<code>config/local.json</code>需要设置<code>paypal.env</code>为<code>sandbox</code>或<code>live</code>。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"paypal"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"sandbox"</span><span class="token punctuation">,</span>
      <span class="token property">"clientId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"secret"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="magento2-集成" tabindex="-1"><a class="header-anchor" href="#magento2-集成" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#magento2-integration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Magento2 集成</h2>
<p>打开 Paypal Express 并使用内置的 Paypal 模块提供 API 凭据。仅启用快速结账。</p>
<p>目前不支持或测试其他 Paypal 方法。</p>
<h2 id="定制" tabindex="-1"><a class="header-anchor" href="#定制" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/integrations/paypal-payments.html#customization" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>定制</h2>
<p>我们也可以使用<code>paypal.style</code>选项来获得更多可定制的 PayPal 按钮视图。欲了解更多信息<a href="https://developer.paypal.com/demo/checkout/#/pattern/checkout" target="_blank" rel="noopener noreferrer">贝宝 （打开新窗口）<OutboundLink/></a>.</p>
<p>在 Button.vue 中，按钮采用 prop 样式</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span>
  <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"gold"</span><span class="token punctuation">,</span>
  <span class="token property">"shape"</span><span class="token operator">:</span> <span class="token string">"pill"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
