<template><h1 id="处理数据" tabindex="-1"><a class="header-anchor" href="#处理数据" aria-hidden="true">#</a> 处理数据</h1>
<p>Vue 店面使用两个主要数据源：</p>
<ol>
<li>使用<a href="https://github.com/localForage/localForage" target="_blank" rel="noopener noreferrer">localForage<OutboundLink/></a>在浏览器中存储 IndexedDb/WebSQL 数据<a href="https://github.com/localForage/localForage" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li>服务器数据源通过<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer">vue-storefront-api （打开新窗口）<OutboundLink/></a>，符合 Elasticsearch（关于产品目录）。</li>
</ol>
<h2 id="本地数据存储" tabindex="-1"><a class="header-anchor" href="#本地数据存储" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#local-data-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>本地数据存储</h2>
<p>您可以通过代码中任何位置的<code>StorageManager</code>( <code>@vue-storefront/core/lib/storage-manager</code>) 对象访问 localForage 存储库，但所有与数据相关的操作<em><strong>都应</strong></em>放在 Vuex 存储中。</p>
<p>可以在<a href="http://localforage.github.io/localForage/" target="_blank" rel="noopener noreferrer">此处<OutboundLink/></a>找到有关 localForage API 的详细信息<a href="http://localforage.github.io/localForage/" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<h2 id="示例-vuex-商店" tabindex="-1"><a class="header-anchor" href="#示例-vuex-商店" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#example-vuex-store" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>示例 Vuex 商店</h2>
<p>这里有一个示例，说明应如何构建<em>Vue Storefront Module 中</em>的<em>Vuex</em>商店。该<em>VSF核心模块</em>本身无非是<a href="https://vuex.vuejs.org/guide/modules.html" target="_blank" rel="noopener noreferrer"><em>Vuex模块</em><OutboundLink/></a><a href="https://vuex.vuejs.org/guide/modules.html" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<p>让我们来看看<code>store</code>的<code>core/modules/checkout</code>模块。<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/modules/checkout/store/checkout/index.ts" target="_blank" rel="noopener noreferrer"><code>index.ts</code> （打开新窗口）<OutboundLink/></a>文件显示如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">'./actions'</span>
<span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">'./getters'</span>
<span class="token keyword">import</span> mutations <span class="token keyword">from</span> <span class="token string">'./mutations'</span>
<span class="token keyword">import</span> RootState <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/types/RootState'</span>
<span class="token keyword">import</span> CheckoutState <span class="token keyword">from</span> <span class="token string">'../../types/CheckoutState'</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">'config'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> checkoutModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>CheckoutState<span class="token punctuation">,</span> RootState<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  state<span class="token operator">:</span> <span class="token punctuation">{</span>
    order<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    paymentMethods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    shippingMethods<span class="token operator">:</span> config<span class="token punctuation">.</span>shipping<span class="token punctuation">.</span>methods<span class="token punctuation">,</span>
    personalDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      emailAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      password<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      createAccount<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shippingDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      country<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      streetAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      apartmentNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      city<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      state<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      region_id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      zipCode<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      phoneNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      shippingMethod<span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    paymentDetails<span class="token operator">:</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      company<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      country<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      streetAddress<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      apartmentNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      city<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      state<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      region_id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      zipCode<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      phoneNumber<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      taxId<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      paymentMethod<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      paymentMethodAdditional<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    isThankYouPage<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    modifiedAt<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  mutations
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p><em>store</em>的实际部分被分成几个文件，如<em>getter</em>、<em>mutations</em>和<em>actions</em>。零件在此处组装并作为<em>模块</em>导出。</p>
<h2 id="数据格式和验证" tabindex="-1"><a class="header-anchor" href="#数据格式和验证" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#data-formats-validation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>数据格式和验证</h2>
<p>vue-storefront 和 vue-storefront-api 的数据格式是相同的 JSON 文件。</p>
<p>约定是模式存储在<code>/core/modules/&lt;module-name&gt;/store/&lt;model-name&gt;.schema.json</code>- 例如<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/modules/order/store/order.schema.json" target="_blank" rel="noopener noreferrer">订单模式 （打开新窗口）<OutboundLink/></a>.</p>
<h3 id="订单" tabindex="-1"><a class="header-anchor" href="#订单" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#orders" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>订单</h3>
<p><code>Orders</code> 存储库存储 Service Worker 使用的所有已传输和将要传输的订单（又名订单队列）。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/orders-localstorage.3c3f6918.png" alt="开发人员工具上显示的订单数据格式"></p>
<p>在这里，您有一个<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/store/modules/order/order.schema.json" target="_blank" rel="noopener noreferrer">订单验证模式 （打开新窗口）<OutboundLink/></a>：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"order_id"</span><span class="token operator">:</span> <span class="token string">"123456789"</span><span class="token punctuation">,</span>
  <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2017-09-28 12:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"2017-09-28 12:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"transmited_at"</span><span class="token operator">:</span> <span class="token string">"2017-09-28 12:00:00"</span><span class="token punctuation">,</span>
  <span class="token property">"transmited"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"products"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"sku"</span><span class="token operator">:</span> <span class="token string">"product_dynamic_1"</span><span class="token punctuation">,</span>
      <span class="token property">"qty"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Product one"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
      <span class="token property">"product_type"</span><span class="token operator">:</span> <span class="token string">"simple"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"sku"</span><span class="token operator">:</span> <span class="token string">"product_dynamic_2"</span><span class="token punctuation">,</span>
      <span class="token property">"qty"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Product two"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
      <span class="token property">"product_type"</span><span class="token operator">:</span> <span class="token string">"simple"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"addressInformation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"shippingAddress"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"MH"</span><span class="token punctuation">,</span>
      <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"country_id"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
      <span class="token property">"street"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Street name line no 1"</span><span class="token punctuation">,</span> <span class="token string">"Street name line no 2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"Company name"</span><span class="token punctuation">,</span>
      <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">"123123123"</span><span class="token punctuation">,</span>
      <span class="token property">"postcode"</span><span class="token operator">:</span> <span class="token string">"00123"</span><span class="token punctuation">,</span>
      <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Cityname"</span><span class="token punctuation">,</span>
      <span class="token property">"firstname"</span><span class="token operator">:</span> <span class="token string">"John "</span><span class="token punctuation">,</span>
      <span class="token property">"lastname"</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@doe.com"</span><span class="token punctuation">,</span>
      <span class="token property">"region_code"</span><span class="token operator">:</span> <span class="token string">"MH"</span><span class="token punctuation">,</span>
      <span class="token property">"sameAsBilling"</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"billingAddress"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"region"</span><span class="token operator">:</span> <span class="token string">"MH"</span><span class="token punctuation">,</span>
      <span class="token property">"region_id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"country_id"</span><span class="token operator">:</span> <span class="token string">"PL"</span><span class="token punctuation">,</span>
      <span class="token property">"street"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Street name line no 1"</span><span class="token punctuation">,</span> <span class="token string">"Street name line no 2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span>
      <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">"1111111"</span><span class="token punctuation">,</span>
      <span class="token property">"postcode"</span><span class="token operator">:</span> <span class="token string">"00123"</span><span class="token punctuation">,</span>
      <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Mumbai"</span><span class="token punctuation">,</span>
      <span class="token property">"firstname"</span><span class="token operator">:</span> <span class="token string">"Sameer"</span><span class="token punctuation">,</span>
      <span class="token property">"lastname"</span><span class="token operator">:</span> <span class="token string">"Sawant"</span><span class="token punctuation">,</span>
      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@doe.com"</span><span class="token punctuation">,</span>
      <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"address_"</span><span class="token punctuation">,</span>
      <span class="token property">"region_code"</span><span class="token operator">:</span> <span class="token string">"MH"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"shipping_method_code"</span><span class="token operator">:</span> <span class="token string">"flatrate"</span><span class="token punctuation">,</span>
    <span class="token property">"shipping_carrier_code"</span><span class="token operator">:</span> <span class="token string">"flatrate"</span><span class="token punctuation">,</span>
    <span class="token property">"payment_method_code"</span><span class="token operator">:</span> <span class="token string">"cashondelivery"</span><span class="token punctuation">,</span>
    <span class="token property">"payment_method_additional"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Payment Method Payload (eg, stripe token)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h3 id="类别" tabindex="-1"><a class="header-anchor" href="#类别" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#categories" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>类别</h3>
<p><code>Categories</code> 是按类别 'slug' 组织的哈希（例如，对于 name = 'Example category' 的类别，slug 是 'example-category'）。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/categories-localstorage.17f5e34c.png" alt="在开发者工具上看到的类别数据格式"></p>
<p>如果类别有任何子类别，您可以通过<code>children_data</code>属性访问它们。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token property">"parent_id"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Bottoms"</span><span class="token punctuation">,</span>
  <span class="token property">"is_active"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"position"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">"product_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"children_data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token property">"parent_id"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Pants"</span><span class="token punctuation">,</span>
      <span class="token property">"is_active"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"position"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">"product_count"</span><span class="token operator">:</span> <span class="token number">156</span><span class="token punctuation">,</span>
      <span class="token property">"children_data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
      <span class="token property">"parent_id"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Shorts"</span><span class="token punctuation">,</span>
      <span class="token property">"is_active"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"position"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"level"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">"product_count"</span><span class="token operator">:</span> <span class="token number">148</span><span class="token punctuation">,</span>
      <span class="token property">"children_data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tsk"</span><span class="token operator">:</span> <span class="token number">1505573191094</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="推车" tabindex="-1"><a class="header-anchor" href="#推车" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/data/data.html#carts" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>推车</h3>
<p><code>Carts</code>是一个购物车商店，带有一个<code>current-cart</code>代表当前购物车的默认键。购物车对象是一个数组，由带有附加字段的产品组成，<code>qty</code>以防订购两个或多个项目。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/cart-localstorage.e99f8d75.png" alt="在开发者工具上看到的购物车数据格式"></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
    <span class="token property">"qty"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">"sku"</span><span class="token operator">:</span> <span class="token string">"24-WG081-blue"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Sprite Stasis Ball 55 cm"</span><span class="token punctuation">,</span>
    <span class="token property">"attribute_set_id"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"visibility"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"type_id"</span><span class="token operator">:</span> <span class="token string">"simple"</span><span class="token punctuation">,</span>
    <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2017-09-16 13:46:48"</span><span class="token punctuation">,</span>
    <span class="token property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"2017-09-16 13:46:48"</span><span class="token punctuation">,</span>
    <span class="token property">"extension_attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"product_links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"tier_prices"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"custom_attributes"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"tsk"</span><span class="token operator">:</span> <span class="token number">1505573582376</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"&lt;p>The Sprite Stasis Ball gives you the toned abs, sides, and back you want by amping up your core workout. With bright colors and a burst-resistant design, it's a must-have for every hard-core exercise addict. Use for abdominal conditioning, balance training, yoga, or even physical therapy.&lt;/p> &lt;ul> &lt;li>Durable, burst-resistant design.&lt;/li> &lt;li>Hand pump included.&lt;/li> &lt;/ul>"</span><span class="token punctuation">,</span>
    <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"/l/u/luma-stability-ball.jpg"</span><span class="token punctuation">,</span>
    <span class="token property">"small_image"</span><span class="token operator">:</span> <span class="token string">"/l/u/luma-stability-ball.jpg"</span><span class="token punctuation">,</span>
    <span class="token property">"thumbnail"</span><span class="token operator">:</span> <span class="token string">"/l/u/luma-stability-ball.jpg"</span><span class="token punctuation">,</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"50"</span><span class="token punctuation">,</span>
    <span class="token property">"options_container"</span><span class="token operator">:</span> <span class="token string">"container2"</span><span class="token punctuation">,</span>
    <span class="token property">"required_options"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"has_options"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
    <span class="token property">"url_key"</span><span class="token operator">:</span> <span class="token string">"sprite-stasis-ball-55-cm-blue"</span><span class="token punctuation">,</span>
    <span class="token property">"tax_class_id"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>
    <span class="token property">"activity"</span><span class="token operator">:</span> <span class="token string">"8,11"</span><span class="token punctuation">,</span>
    <span class="token property">"material"</span><span class="token operator">:</span> <span class="token string">"44"</span><span class="token punctuation">,</span>
    <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">"80,81,82,83,84"</span><span class="token punctuation">,</span>
    <span class="token property">"category_gear"</span><span class="token operator">:</span> <span class="token string">"87"</span><span class="token punctuation">,</span>
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"91"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></template>
