<template><h1 id="ch-1-数据导入" tabindex="-1"><a class="header-anchor" href="#ch-1-数据导入" aria-hidden="true">#</a> Ch 1. 数据导入</h1>
<p>在本章中，我们将介绍：</p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_0-introduction" target="_blank" rel="noopener noreferrer">0. 介绍<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch" target="_blank" rel="noopener noreferrer">1. Elasticsearch 数据映射迁移<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-data-pump" target="_blank" rel="noopener noreferrer">2. 数据泵<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-native-indexer-in-case-of-magento-2" target="_blank" rel="noopener noreferrer">3. Magento 2 的原生索引器<OutboundLink/></a></li>
</ul>
<h2 id="_0-介绍" tabindex="-1"><a class="header-anchor" href="#_0-介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_0-introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>0. 介绍</h2>
<p>当您决定将您的网络商店迁移到 Vue Storefront 时，您需要做的第一件事就是用数据填充商店 (Elasticsearch)。本章处理与 Vue Storefront 数据迁移相关的所有麻烦。</p>
<h2 id="_1-elasticsearch-数据映射迁移" tabindex="-1"><a class="header-anchor" href="#_1-elasticsearch-数据映射迁移" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. Elasticsearch 数据映射迁移</h2>
<p>Vue Storefront 使用 Elasticsearch 作为主要数据存储。此外，Vue Storefront 使用 Redis 作为缓存层，使用 Kue 进行队列处理。虽然所有这些数据存储基本上都是无模式的，但应该导入一些映射和元数据来设置 Elasticsearch 索引等。</p>
<p>Vue Storefront 使用基于<a href="https://github.com/tj/node-migrate" target="_blank" rel="noopener noreferrer">节点迁移<OutboundLink/></a>的数据迁移机制<a href="https://github.com/tj/node-migrate" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<h3 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>你需要一个<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer">Vue Storefront API （打开新窗口）<OutboundLink/></a><a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">安装<OutboundLink/></a>在您机器上的实例以运行迁移。</li>
<li>您需要<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">运行<OutboundLink/></a>一个 Elasticsearch 实例，数据将迁移到该实例中 。</li>
</ul>
<h3 id="_2-食谱" tabindex="-1"><a class="header-anchor" href="#_2-食谱" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-recipe" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<ol>
<li>从开箱即用配置的<strong>Vue Storefront API 根路径</strong>运行节点脚本。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>它在<code>migrations</code>文件夹中运行迁移。</p>
<ol>
<li>成功结果如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> vue-storefront-api@1.9.0 migrate /home/dex/code/vue/vue-backend
<span class="token operator">></span> node node_modules/migrate/bin/migrate

Elasticsearch INFO: <span class="token number">2019</span>-05-29T09:41:04Z
  Adding connection to http://localhost:9200/

  up <span class="token builtin class-name">:</span> <span class="token number">1513602693128</span>-create_new_index.js
Elasticsearch DEBUG: <span class="token number">2019</span>-05-29T09:41:04Z
  starting request <span class="token punctuation">{</span>
    <span class="token string">"method"</span><span class="token builtin class-name">:</span> <span class="token string">"DELETE"</span>,
    <span class="token string">"path"</span><span class="token builtin class-name">:</span> <span class="token string">"/*/_alias/vue_storefront_catalog"</span>,
    <span class="token string">"query"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  

Elasticsearch DEBUG: <span class="token number">2019</span>-05-29T09:41:04Z
  Request complete

Public index <span class="token builtin class-name">alias</span> does not exists <span class="token punctuation">[</span>aliases_not_found_exception<span class="token punctuation">]</span> aliases <span class="token punctuation">[</span>vue_storefront_catalog<span class="token punctuation">]</span> missing, with <span class="token punctuation">{</span> resource.type<span class="token operator">=</span><span class="token string">"aliases"</span> <span class="token operator">&amp;</span> resource.id<span class="token operator">=</span><span class="token string">"vue_storefront_catalog"</span> <span class="token punctuation">}</span>
Elasticsearch DEBUG: <span class="token number">2019</span>-05-29T09:41:04Z
  starting request <span class="token punctuation">{</span>
    <span class="token string">"method"</span><span class="token builtin class-name">:</span> <span class="token string">"DELETE"</span>,
    <span class="token string">"path"</span><span class="token builtin class-name">:</span> <span class="token string">"/vue_storefront_catalog"</span>,
    <span class="token string">"query"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token punctuation">..</span>. <span class="token comment"># abridged </span>

Elasticsearch DEBUG: <span class="token number">2019</span>-05-29T09:41:08Z
  Request complete

<span class="token punctuation">{</span> acknowledged: <span class="token boolean">true</span> <span class="token punctuation">}</span>
  up <span class="token builtin class-name">:</span> <span class="token number">1530101328854</span>-local_es_config_fix.js
Searching <span class="token keyword">for</span> deprecated parameters <span class="token keyword">in</span> <span class="token function">file</span> <span class="token string">'/home/dex/code/vue/vue-backend/config/custom-environment-variables.json'</span><span class="token punctuation">..</span>.
File <span class="token string">'/home/dex/code/vue/vue-backend/config/custom-environment-variables.json'</span> updated.
Searching <span class="token keyword">for</span> deprecated parameters <span class="token keyword">in</span> <span class="token function">file</span> <span class="token string">'/home/dex/code/vue/vue-backend/config/local.json'</span><span class="token punctuation">..</span>.
File <span class="token string">'/home/dex/code/vue/vue-backend/config/local.json'</span> updated.

  migration <span class="token builtin class-name">:</span> complete
  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/C9z7daIJAog0xPhNlzwoHhBl4" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/C9z7daIJAog0xPhNlzwoHhBl4" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<ol>
<li>为了验证映射是否成功完成，您可以向<code>curl</code>Elasticsearch API发送请求，如下所示：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -XGET <span class="token string">'http://localhost:9200/_mapping?pretty=true'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>笔记</p>
<p><code>http://localhost:9200</code>如果您手动配置，请替换为您的 Elasticsearch 端点。</p>
<ol>
<li>如果成功导入（删节），结果如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">"vue_storefront_catalog"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"mappings"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"category"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"is_active"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"boolean"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"parent_id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"product_count"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"product"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"Color_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"Size_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"category_gear"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"category_ids"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"color"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"color_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"configurable_children"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">"has_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"boolean"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"price"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"float"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"sku"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"special_price"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"float"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"configurable_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">"attribute_id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"default_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"frontend_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"store_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
              <span class="token punctuation">}</span>,
              <span class="token string">"values"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                  <span class="token string">"default_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
                  <span class="token punctuation">}</span>,
                  <span class="token string">"frontend_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
                  <span class="token punctuation">}</span>,
                  <span class="token string">"label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
                  <span class="token punctuation">}</span>,
                  <span class="token string">"store_label"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
                  <span class="token punctuation">}</span>,
                  <span class="token string">"value_index"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"description"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"eco_collection"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"eco_collection_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"erin_recommends"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"gender"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"has_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"material"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"news_from_date"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"news_to_date"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"pattern"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"price"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"float"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"required_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"size"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"size_options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"sku"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"special_from_date"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"special_price"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"float"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"special_to_date"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"status"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"tax_class_id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"visibility"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"weight"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"integer"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"cms_block"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"creation_time"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"identifier"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"update_time"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"attribute"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"attribute_id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"options"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">"value"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"taxrule"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"rates"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">"rate"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"float"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"cms_page"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"properties"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"creation_time"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"long"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"identifier"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>
          <span class="token punctuation">}</span>,
          <span class="token string">"update_time"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"date"</span>,
            <span class="token string">"format"</span> <span class="token builtin class-name">:</span> <span class="token string">"yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br></div></div><h3 id="_3-窥视厨房-内部发生的事情" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/GitHub-Architecture-VS-data-import.649e2383.png" alt="架构数据导入部分"> 我们在架构的红色矩形部分工作，为数据导入做准备。</p>
<p>我们用一个简单的术语做了什么，我们教了 Elasticsearch 类型和数据类型（映射，也称为模式），我们稍后将用于 Vue Storefront API。</p>
<p>运行时<code>yarn migrate</code>，它会运行预先配置的<a href="https://github.com/vuestorefront/vue-storefront-api/tree/master/migrations" target="_blank" rel="noopener noreferrer">迁移脚本 （打开新窗口）<OutboundLink/></a>使用<a href="https://github.com/tj/node-migrate" target="_blank" rel="noopener noreferrer">节点迁移 （打开新窗口）<OutboundLink/></a>. 如果您仔细查看迁移脚本，您会注意到最终的 js 文件位于<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/src/lib/elastic.js" target="_blank" rel="noopener noreferrer"><code>./src/lib/elastic.js</code> （打开新窗口）<OutboundLink/></a>这为移民提供了实际的劳动力。如果您再仔细查看该<code>elastic.js</code>文件，您还会发现所有架构文件都位于<a href="https://github.com/vuestorefront/vue-storefront-api/tree/master/config" target="_blank" rel="noopener noreferrer"><code>./config</code> （打开新窗口）<OutboundLink/></a>文件夹。这些脚本的作用可以根据文件名分为几个步骤。它首先从索引模式创建索引，然后从<code>elastic.schema.[types].json</code>文件导入模式。然后它将重新索引它们，并删除临时索引。最后，它将使用一些变通方法来处理已弃用的流程。</p>
<p>现在，您已准备好继续将您的数据输入到商店中。</p>
<h3 id="_4-厨师的秘密-protip" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="秘密-1-处理-index-not-found-exception" tabindex="-1"><a class="header-anchor" href="#秘密-1-处理-index-not-found-exception" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-1-deal-with-index-not-found-exception" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 1. 处理 <code>index not found exception</code></h4>
<p>如果您在迁移脚本过程中遇到如下异常：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/sss.758b7c03.png" alt="index_not_found_exception"></p>
<p>这意味着您没有<code>vue_storefront_catalog_temp</code>所需的临时索引。解决方案是：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> restore
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这将创造必要的临时索引，则所需临时索引将提到的步骤被删除<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally" target="_blank" rel="noopener noreferrer">上述<OutboundLink/></a>当迁移完成</p>
<h4 id="秘诀2-添加新的迁移脚本" tabindex="-1"><a class="header-anchor" href="#秘诀2-添加新的迁移脚本" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-2-add-a-new-migration-script" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀2.添加新的迁移脚本</h4>
<p>您可能需要编写自己的迁移脚本。在这种情况下，您可以通过在<code>./migrations</code>目录下添加文件来实现，尽管这不是推荐的方法。<code>node-migrate</code>为您提供 cli 命令，目的如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> migrate create name-of-migration
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这将在<code>./migration</code>具有标准命名约定的文件夹下创建迁移脚本模板。 <a href="https://github.com/tj/node-migrate#creating-migrations" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<p>例子</p>
<p>示例迁移显示了如何操作产品映射如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Migration scripts use: https://github.com/tj/node-migrate</span>
<span class="token string">'use strict'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./.common'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">up</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// example of adding a field to the schema</span>
  <span class="token comment">// other examples: https://stackoverflow.com/questions/22325708/elasticsearch-create-index-with-mappings-using-javascript,</span>
  common<span class="token punctuation">.</span>db<span class="token punctuation">.</span>indices
    <span class="token punctuation">.</span><span class="token function">putMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      index<span class="token operator">:</span> config<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>indices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'product'</span><span class="token punctuation">,</span>
      body<span class="token operator">:</span> <span class="token punctuation">{</span>
        properties<span class="token operator">:</span> <span class="token punctuation">{</span>
          slug<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'string'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// add slug field</span>
          suggest<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'completion'</span><span class="token punctuation">,</span>
            analyzer<span class="token operator">:</span> <span class="token string">'simple'</span><span class="token punctuation">,</span>
            search_analyzer<span class="token operator">:</span> <span class="token string">'simple'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">{</span> depth<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> colors<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">down</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="秘诀3-多次执行迁移" tabindex="-1"><a class="header-anchor" href="#秘诀3-多次执行迁移" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-3-execute-migration-multiple-times" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀3.多次执行迁移</h4>
<p>如果使用多次运行迁移<code>yarn migrate</code>，它只会运行一次迁移，后续执行将被忽略，只会重复结果如下：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/npm-run-migrate-result.4fd1f51f.png" alt="迁移完成"></p>
<p>发生这种情况是因为<code>node-migrate</code>通过检查<code>./migrate</code>文件知道它之前已经执行过，因此您不需要重复它。但是，如果您需要多次运行它，您可以通过删除<code>./migrate</code>文件来实现。</p>
<h2 id="_2-数据泵" tabindex="-1"><a class="header-anchor" href="#_2-数据泵" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-data-pump" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 数据泵</h2>
<p>零售业务首先必须在商店中存放产品才能开始。同样，开展在线商店业务也需要在线（数据存储）库存产品。</p>
<p>启动 Vue Storefront 也不例外。我们需要将您的数据（产品、类别、税收规则等）抽取到 Vue Storefront 的主要数据存储区，即 Elasticsearch。我们还在两者之间使用 Redis 缓存来提高性能。</p>
<p>通过在架构中使用 Elasticsearch 作为数据存储，我们可以使平台后端不可知以及许多其他优势，例如性能和可扩展性。</p>
<p>在这个秘籍中，我们将带您了解<strong>Magento 2</strong>示例。</p>
<h3 id="_1-准备-1" tabindex="-1"><a class="header-anchor" href="#_1-准备-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>你需要一个<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer">Vue Storefront API （打开新窗口）<OutboundLink/></a>为后端<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">安装<OutboundLink/></a>的实例。</li>
<li>您需要一个<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker" target="_blank" rel="noopener noreferrer">运行<OutboundLink/></a>映射的 Elasticsearch 实例，如<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-data-mapping-migration-for-elasticsearch" target="_blank" rel="noopener noreferrer"><em>Recipe 1 Data Mapping Migration for Elasticsearch 中所述</em><OutboundLink/></a></li>
<li>你需要<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront （打开新窗口）<OutboundLink/></a>下载数据桥。此实例依赖于后端（在本例中为 Magento 2），您可以将其替换为其他数据桥，例如<a href="https://github.com/divanteLtd/coreshop-vsbridge" target="_blank" rel="noopener noreferrer">coreshop-vsbridge （打开新窗口）<OutboundLink/></a>, <a href="https://github.com/divanteLtd/shopware2vuestorefront" target="_blank" rel="noopener noreferrer">shopware2vuestorefront （打开新窗口）<OutboundLink/></a>对你有利。</li>
<li>最后，您需要一个 Magento 2 实例作为数据源来从中抽取数据。（仅适用于<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">配方 B<OutboundLink/></a>）</li>
</ul>
<p>我们将按如下方式导入实体：</p>
<ul>
<li>产品</li>
<li>类别</li>
<li>税则</li>
<li>属性</li>
<li>产品到类别</li>
<li>评论（需要自定义模块<a href="https://github.com/divanteLtd/magento2-review-api" target="_blank" rel="noopener noreferrer">Divante/ReviewApi （打开新窗口）<OutboundLink/></a>)</li>
<li>Cms 块和页面（需要自定义模块<a href="https://github.com/SnowdogApps/magento2-cms-api" target="_blank" rel="noopener noreferrer">SnowdogApps/magento2-cms-api （打开新窗口）<OutboundLink/></a>)</li>
</ul>
<h3 id="_2-1。配方-a-使用演示" tabindex="-1"><a class="header-anchor" href="#_2-1。配方-a-使用演示" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-1-recipe-a-using-demo" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-1。配方 A（使用演示）</h3>
<p>使用演示数据，您可以快速体验整个行程。如果您想立即处理原始数据，请查看方法<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">B<OutboundLink/></a></p>
<ol>
<li>从<strong>mage2vuestorefront 根路径的</strong>npm install 开始，它为项目安装依赖项。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>通过设置配置值或 ENV 变量来设置所需的选项。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">TIME_TO_EXIT</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_KEY</span><span class="token operator">=</span>byv3730rhoulpopcq64don8ukb8lf2gq
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_SECRET</span><span class="token operator">=</span>u9q4fcobv7vfx9td80oupa6uhexc27rb
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN</span><span class="token operator">=</span>040xx3qy7s0j28o3q0exrfop579cy20m
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN_SECRET</span><span class="token operator">=</span>7qunl3p505rubmr7u1ijt7odyialnih9

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://demo-magento2.vuestorefront.io/rest
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">配方 B<OutboundLink/></a>的同一步骤中更详细地解释了这意味着什么。</p>
<ol>
<li>运行以下命令从演示商店导入类别<code>mage2vuestorefront/src</code>：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js categories --removeNonExistent<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>📼 您可以在<a href="https://asciinema.org/a/75MTwaet3IO3vOCdDyCVOAgqL" target="_blank" rel="noopener noreferrer">bash 播放中<OutboundLink/></a>观看结果<a href="https://asciinema.org/a/75MTwaet3IO3vOCdDyCVOAgqL" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>运行以下命令以完成泵送：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js taxrule --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js products --removeNonExistent<span class="token operator">=</span>true --partitions<span class="token operator">=</span><span class="token number">1</span>
node --harmony cli.js reviews
node --harmony cli.js blocks
node --harmony cli.js pages
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-2。方案-b-使用内部部署" tabindex="-1"><a class="header-anchor" href="#_2-2。方案-b-使用内部部署" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-2。方案 B（使用内部部署）</h3>
<ol>
<li>从<strong>mage2vuestorefront 根路径的</strong>npm install 开始，它为项目安装依赖项。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>按照以下步骤获取 Magento 集成凭据：</li>
</ol>
<ul>
<li>登录到您的数据泵源<strong>管理员</strong>并转到<strong>扩展</strong>&gt;<strong>集成</strong>，如下所示：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_1.58cc766a.png" alt="数据泵_1"></p>
<ul>
<li>单击“**添加新集成”**按钮，如下所示：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_2.afeddbcd.png" alt="数据泵_2"></p>
<ul>
<li>根据需要填充以下字段：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_3.ddcf41b8.png" alt="数据泵_3"></p>
<ul>
<li>单击左侧边栏中的<strong>API</strong>选项卡。此屏幕可让您选择允许进行此集成的 API 端点：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_6.22e0fd44.png" alt="数据泵_6"></p>
<ul>
<li>如果您不确定，请在<strong>资源访问中</strong>选择<em>全部</em>，如下所示：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_7.12ba6ad3.png" alt="数据泵_7"></p>
<ul>
<li>单击上一个屏幕中的<strong>保存</strong>将获得以下屏幕：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_5.b33f4253.png" alt="数据泵_5"></p>
<ul>
<li>在上一个屏幕中，我们成功创建了一个集成凭据，但还需要在其中完成另一个步骤，即单击“**激活”**按钮，它将带您进入以下屏幕：</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_8.9c5dacb1.png" alt="数据泵_8"></p>
<ul>
<li>此屏幕要求您确认要为集成授予的端点。如果您同意，您可以单击<strong>Allow</strong>。</li>
</ul>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/data_pump_9.d4f2b47c.png" alt="数据泵_9"></p>
<ul>
<li>然后应用程序将提示您提供新创建的用于集成的令牌。复制它们，我们将在下一步使用它们。</li>
</ul>
<ol>
<li>通过使用在上一步中获取的凭据设置配置值或 ENV 变量来设置所需的选项。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">TIME_TO_EXIT</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_KEY</span><span class="token operator">=</span>lv1unkldzkcex68l3eojut4j66qqho8w
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_SECRET</span><span class="token operator">=</span>zhkuqvweo0bsg14noujqje49x3wht0qr
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN</span><span class="token operator">=</span>z6ftgc5005212bc6lnszxa7d7ocl8hgc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN_SECRET</span><span class="token operator">=</span>h8tikjq9sz7tqm6hyhdfgs96krb6qzyk

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://local.magento/rest <span class="token comment"># Replace the url with your Magento 2 URL</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog <span class="token comment"># This will be the name of the index we use</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>笔记</p>
<ul>
<li><strong>Access Token</strong>和<strong>Access Token Secret</strong>可能会随着时间而改变，因为它们是由使用<strong>Consumer Key</strong>和<strong>Consumer Secret</strong>发出的请求创建的。</li>
<li>将*http://local.magento/*替换 为运行 Magento 2 的 URL。</li>
</ul>
<ol>
<li>现在是导入数据的时候了。在 处运行以下命令**<code>mage2vuestorefront/src</code>**：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js categories --removeNonExistent<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>成功结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2019</span>-06-09T05:43:23.330Z - debug: Elasticsearch module initialized<span class="token operator">!</span>
info: Winston logging library initialized.
<span class="token number">2019</span>-06-09T05:43:23.402Z - info: Connected correctly to server
<span class="token number">2019</span>-06-09T05:43:23.402Z - info: TRANSACTION KEY <span class="token operator">=</span> <span class="token number">1560059003367</span>
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  default-category-2
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/2
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  default-category-2
<span class="token number">2019</span>-06-09T05:43:24.042Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_2
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/44
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/29
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/30
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/31
debug: Calling API endpoint: GET http://local.magento/rest/V1/categories/32

<span class="token punctuation">..</span>. <span class="token comment"># abridged</span>

debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  women/bottoms-women/shorts-women/shorts-34
<span class="token number">2019</span>-06-09T05:44:32.360Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_34
<span class="token number">2019</span>-06-09T05:44:32.360Z - info: Importing <span class="token number">1</span> of <span class="token number">2</span> - <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span> Shorts<span class="token punctuation">]</span> with tsk <span class="token operator">=</span> <span class="token number">1560059042304</span>
<span class="token number">2019</span>-06-09T05:44:32.360Z - info: Tasks count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">2019</span>-06-09T05:44:32.361Z - info: No tasks to process. All records processed<span class="token operator">!</span>
<span class="token number">2019</span>-06-09T05:44:32.361Z - info: Cleaning up with tsk <span class="token operator">=</span> <span class="token number">1560059042304</span>
<span class="token number">2019</span>-06-09T05:44:32.363Z - info: Task done<span class="token operator">!</span> Exiting <span class="token keyword">in</span> 30s<span class="token punctuation">..</span>.
<span class="token number">2019</span>-06-09T05:44:32.380Z - info:  
<span class="token punctuation">{</span> took: <span class="token number">10</span>,
  timed_out: false,
  total: <span class="token number">13</span>,
  deleted: <span class="token number">0</span>,
  batches: <span class="token number">1</span>,
  version_conflicts: <span class="token number">13</span>,
  noops: <span class="token number">0</span>,
  retries: <span class="token punctuation">{</span> bulk: <span class="token number">0</span>, search: <span class="token number">0</span> <span class="token punctuation">}</span>,
  throttled_millis: <span class="token number">0</span>,
  requests_per_second: -1,
  throttled_until_millis: <span class="token number">0</span>,
  failures: <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/BnDQONQSs3WSVvh0SUjHRJeNo" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/BnDQONQSs3WSVvh0SUjHRJeNo" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>笔记</p>
<ul>
<li><code>--removeNonExistent</code>选项意味着在索引中找到但当前不存在于 API 提要中的所有记录都将被删除。请<strong>仅</strong>将此选项用于完整的重新索引！</li>
<li><code>--harmony</code>标志意味着我们正在启用尖端的 ECMAScript 6 阶段性功能，因为我们需要它。<a href="https://nodejs.org/en/docs/es6/" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></li>
</ul>
<ol>
<li>为了验证它是否按计划导入，请按如下方式运行命令：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -XGET <span class="token string">"http://localhost:9200/vue_storefront_catalog/_search?pretty=true"</span> -H <span class="token string">'Content-Type: application/json'</span> -d<span class="token string">'
{
  "query": {
    "terms": {
      "_type": [ "category" ] 
    }
  }
}'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>笔记</p>
<p>我们在上面步骤 3 中在 ENV 变量中设置的索引名称在命令中使用为：<code>http://localhost:9200/</code><strong>vue_storefront_catalog</strong><code>/_search?pretty=true</code></p>
<p>一个成功的结果将是这样的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">"took"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">"timed_out"</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">"_shards"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"total"</span> <span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">"successful"</span> <span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">"skipped"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"failed"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"hits"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"total"</span> <span class="token builtin class-name">:</span> <span class="token number">39</span>,
    <span class="token string">"max_score"</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
    <span class="token string">"hits"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span> <span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_1559623128"</span>,
        <span class="token string">"_type"</span> <span class="token builtin class-name">:</span> <span class="token string">"category"</span>,
        <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"44"</span>,
        <span class="token string">"_score"</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">"_source"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token number">44</span>,
          <span class="token string">"parent_id"</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"What's New"</span>,
          <span class="token string">"is_active"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">"level"</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">"product_count"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
          <span class="token string">"children_data"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"children"</span> <span class="token builtin class-name">:</span> <span class="token string">""</span>,
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-05-21 09:04:41"</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-05-21 09:04:41"</span>,
          <span class="token string">"path"</span> <span class="token builtin class-name">:</span> <span class="token string">"1/2/44"</span>,
          <span class="token string">"available_sort_by"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"include_in_menu"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"display_mode"</span> <span class="token builtin class-name">:</span> <span class="token string">"PAGE"</span>,
          <span class="token string">"is_anchor"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"children_count"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token string">"whats-new-44"</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token string">"what-is-new/whats-new-44"</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token string">"whats-new-44"</span>,
          <span class="token string">"tsk"</span> <span class="token builtin class-name">:</span> <span class="token number">1560059042304</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,

    <span class="token punctuation">..</span>. <span class="token comment"># abridged</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>现在以相同的方式导入其他剩余的实体：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js taxrule --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js products --removeNonExistent<span class="token operator">=</span>true --partitions<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>笔记</p>
<p><code>--partitions=1</code>标志表示并行模式。此处设置的值将成为进程计数。因此，<em>1</em>表示单进程模式。</p>
<ol>
<li>为了导入<code>reviews</code>和<code>cms</code>，我们需要安装额外的 Magento 2 模块，以便我们可以公开所需的 API。</li>
</ol>
<p>下载并安装<a href="https://github.com/divanteLtd/magento2-review-api" target="_blank" rel="noopener noreferrer">Review API 模块 （打开新窗口）<OutboundLink/></a>并运行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js reviews
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>下载并安装<a href="https://github.com/SnowdogApps/magento2-cms-api" target="_blank" rel="noopener noreferrer">CMS API 模块 （打开新窗口）<OutboundLink/></a>并运行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js blocks
node --harmony cli.js pages
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>最后，重新索引 Elasticsearch，确保<strong>Vue Storefront API</strong>根路径中的数据源是最新的。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> db rebuild
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_3-窥视厨房-内部发生的事情-1" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/datum_pump_design.04efbdad.png" alt="数据泵设计"> 我们在架构的红色矩形部分工作，作为泵送数据。</p>
<p>在配方中，我们将源数据从 Magento 2 导入 Elasticsearch 作为数据存储，这可以使平台后端不可知以及许多其他优势，例如性能、可扩展性，以及最重要的 PWA。</p>
<p>我们从演示数据泵开始。<a href="https://vuestorefront.io/" target="_blank" rel="noopener noreferrer">迪万特有限公司 （打开新窗口）<OutboundLink/></a>准备demo store用于演示目的，以便我们快速了解数据泵的过程。</p>
<p>方案 B 开始在 Magento 2 Admin 中创建一个集成条目，以授予数据泵的权限。Magento 2 会询问您有关集成的基本信息，包括处理每个端点的权限的 ACL（访问控制列表）。完成后，Magento 2 将为您提供凭据和令牌。</p>
<p>在配置文件中提供这些凭据，或者在这种情况下我们设置 ENV 变量，允许 <a href="https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/cli.js" target="_blank" rel="noopener noreferrer"><code>src/cli.js</code> （打开新窗口）<OutboundLink/></a>脚本文件来运行抽水。在更深入的研究中<a href="https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/cli.js" target="_blank" rel="noopener noreferrer"><code>src/cli.js</code> （打开新窗口）<OutboundLink/></a>，您会注意到处理每个实体的函数。在函数内部，有一个<a href="https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/factory.js" target="_blank" rel="noopener noreferrer"><code>factory</code> （打开新窗口）<OutboundLink/></a>将<code>adapter</code>注入作为参数的方法 - 在本节中，它是<code>magento</code>- 表示数据源的后端类型，另一个参数<code>driver</code>表示您正在导入的实体类型，例如，<code>products</code>。还有另一个<code>adapter</code>名字<code>nosql</code>是 Elasticsearch。终极泵逻辑定位<a href="https://github.com/vuestorefront/mage2vuestorefront/blob/master/src/adapters/abstract.js" target="_blank" rel="noopener noreferrer"><code>abstract</code> （打开新窗口）<OutboundLink/></a>该负载<code>nosql</code>如<code>db</code>在<code>constructor</code>和执行<code>run</code>方法与内继承个别逻辑。您可能会发现个体<code>drivers</code>对于<code>magento adapter</code>在<a href="https://github.com/vuestorefront/mage2vuestorefront/tree/master/src/adapters/magento" target="_blank" rel="noopener noreferrer"><code>magento</code> （打开新窗口）<OutboundLink/></a>文件夹。</p>
<p>现在，您已准备好使用您的原始产品为您的<strong>Vue Storefront</strong>实例提供服务！</p>
<h3 id="_4-厨师的秘密-protip-1" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="秘密-1-产品图片未同步" tabindex="-1"><a class="header-anchor" href="#秘密-1-产品图片未同步" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-1-product-image-is-not-synced" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 1. 产品图片未同步</h4>
<p>当您的产品成功导入后，还有一件重要的事情需要考虑，那就是产品图片。但是，您应该将源域列入白名单，以便异步获取图像。否则，你会看到这样一个悲伤的画面：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/img_catalog_prod_fail.cb86b3c5.png" alt="图像失败。 数据泵"></p>
<p>转到<strong>Vue Storefront API</strong>根目录并<code>local.json</code>在<code>config</code>文件夹下找到。</p>
<p>信息</p>
<p><code>local.json</code>是安装过程中创建的文件。它包含 Vue Storefront API 实例的所有配置。如果你没有它，你应该从<a href="https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json" target="_blank" rel="noopener noreferrer"><code>default.json</code> （打开新窗口）<OutboundLink/></a>从同一目录并根据需要填充字段。</p>
<p>查找<code>imageable</code>节点并在<code>whitelist/allowedHosts</code>下面添加您的源域，如下所示：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"imageable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"namespace"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"maxListeners"</span><span class="token operator">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
    <span class="token property">"imageSizeLimit"</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token property">"whitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"allowedHosts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">".*divante.pl"</span><span class="token punctuation">,</span>
        <span class="token string">".*vuestorefront.io"</span><span class="token punctuation">,</span>
        <span class="token string">"localhost"</span><span class="token punctuation">,</span>
        <span class="token comment">// add a source domain here </span>
        <span class="token string">"degi.magento"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>现在，重启<strong>Vue Storefront API</strong>实例，重新加载页面和<em>Presto！</em></p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/img_catalog_prod.c2e6cd3e.png" alt="图像失败。 数据泵"></p>
<h4 id="秘密-2-利用-delta-indexer" tabindex="-1"><a class="header-anchor" href="#秘密-2-利用-delta-indexer" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-2-taking-advantage-of-delta-indexer" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 2. 利用 Delta Indexer</h4>
<p>引用</p>
<p><em>计算机科学中只有两件难事：<strong>缓存失效</strong>和<strong>命名。</strong></em></p>
<p><em>——菲尔·卡尔顿</em></p>
<p>在计算机科学的每个角落，工程师都应该关注资源经济学。同样，<strong>Vue Storefront 也</strong>设计了一种处理优化的方法。话虽如此，每次将产品添加到数据源（例如 Magento 2）时运行完全重新索引将是多余且低效的。我们有这个问题的解决方案：<em>Delta Indexer</em></p>
<p>希腊字母<em>Delta</em>通常*<code>quantity changed</code>*在简单的数学中表示，这对于它所做的工作来说听起来似乎是合理的。</p>
<p>现在，在<strong>mage2vuestorefront/src</strong>运行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js productsdelta
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>成功的结果将是这样的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ... abridged</span>

<span class="token number">2019</span>-06-16T10:55:34.354Z - info: Product sub-stage <span class="token number">6</span>: Getting product categories <span class="token keyword">for</span> dress_girl
<span class="token number">2019</span>-06-16T10:55:34.354Z - info: Using category_ids binding <span class="token keyword">for</span> dress_girl: <span class="token number">2,6</span>,7
Dest. product path <span class="token operator">=</span>  default-category-2/dress-girl-1.html
<span class="token number">2019</span>-06-16T10:55:34.355Z - info: Product sub-stages <span class="token keyword">done</span> <span class="token keyword">for</span> dress_girl
<span class="token number">2019</span>-06-16T10:55:34.356Z - info: Importing <span class="token number">0</span> of <span class="token number">3</span> - <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span> - dress_girl<span class="token punctuation">)</span> Dress Girl <span class="token punctuation">]</span> with tsk <span class="token operator">=</span> <span class="token number">1560682531040</span>
<span class="token number">2019</span>-06-16T10:55:34.356Z - info: Tasks count <span class="token operator">=</span> <span class="token number">2</span>
debug: Response received.
<span class="token number">2019</span>-06-16T10:55:34.404Z - info: Product sub-stage <span class="token number">6</span>: Getting product categories <span class="token keyword">for</span> trans_bng
<span class="token number">2019</span>-06-16T10:55:34.404Z - info: Using category_ids binding <span class="token keyword">for</span> trans_bng: <span class="token number">2,3</span>,6,4,7
Dest. product path <span class="token operator">=</span>  default-category-2/trans-boys-and-girls-2.html
<span class="token number">2019</span>-06-16T10:55:34.405Z - info: Product sub-stages <span class="token keyword">done</span> <span class="token keyword">for</span> trans_bng
<span class="token number">2019</span>-06-16T10:55:34.405Z - info: Importing <span class="token number">1</span> of <span class="token number">3</span> - <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">2</span> - trans_bng<span class="token punctuation">)</span> Trans Boys and Girls<span class="token punctuation">]</span> with tsk <span class="token operator">=</span> <span class="token number">1560682531040</span>
<span class="token number">2019</span>-06-16T10:55:34.405Z - info: Tasks count <span class="token operator">=</span> <span class="token number">1</span>
debug: Response received.
<span class="token number">2019</span>-06-16T10:55:34.480Z - info: Product sub-stage <span class="token number">6</span>: Getting product categories <span class="token keyword">for</span> romantic_t
<span class="token number">2019</span>-06-16T10:55:34.480Z - info: Using category_ids binding <span class="token keyword">for</span> romantic_t: <span class="token number">6,7</span>,8
Dest. product path <span class="token operator">=</span>  girls/girls-6/romantic-t-3.html
<span class="token number">2019</span>-06-16T10:55:34.481Z - info: Product sub-stages <span class="token keyword">done</span> <span class="token keyword">for</span> romantic_t
<span class="token number">2019</span>-06-16T10:55:34.481Z - info: Importing <span class="token number">2</span> of <span class="token number">3</span> - <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">3</span> - romantic_t<span class="token punctuation">)</span> Romantic T<span class="token punctuation">]</span> with tsk <span class="token operator">=</span> <span class="token number">1560682531040</span>
<span class="token number">2019</span>-06-16T10:55:34.481Z - info: Tasks count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">2019</span>-06-16T10:55:34.482Z - debug: --L:0 Level done<span class="token operator">!</span> Current page: <span class="token number">1</span> of <span class="token number">1</span>
<span class="token number">2019</span>-06-16T10:55:34.482Z - info: All pages processed<span class="token operator">!</span>
<span class="token number">2019</span>-06-16T10:55:34.482Z - info: Task done<span class="token operator">!</span> Exiting <span class="token keyword">in</span> 30s<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/DWaasVJ5RXhSn7Aoc7PqDLG3F" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/DWaasVJ5RXhSn7Aoc7PqDLG3F" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>现在，新添加的产品也出现在 Elasticsearch 中，因此与 Vue Storefront 同步。</p>
<p>小心！</p>
<p>您需要具有类别的缓存条目，否则它将按如下方式中止：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/delta_error.5f341603.png" alt="delta_error"></p>
<p><strong>解决方案</strong>是：先运行分类导入，然后进行增量导入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js categories
node --harmony cli.js productsdelta
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="秘诀3-当你导入了多个数据源时" tabindex="-1"><a class="header-anchor" href="#秘诀3-当你导入了多个数据源时" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-3-when-you-have-imported-multiple-data-source" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀3.当你导入了多个数据源时</h4>
<p>由于 Magento 以拥有强大的多商店功能而闻名，<strong>Vue Storefront</strong>也准备好顺利采用该功能。使用<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront<OutboundLink/></a>导入数据时，可以通过指定索引名称来拥有多个索引<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<p><code>INDEX_NAME</code>为每个商店设置不同的 ENV 变量将在 Elasticsearch 中创建相应的索引。您可能还需要根据商店名称提供不同的 API 基本端点。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ... abridged</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN_SECRET</span><span class="token operator">=</span>7qunl3p505rubmr7u1ijt7odyialnih9

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://demo-magento2.vuestorefront.io/rest
<span class="token comment"># Change REST API base endpoint </span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog 
<span class="token comment"># Change INDEX_NAME variable to be distinguishable from each store</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>您还需要将多商店信息通知<strong>Vue Storefront</strong>和<strong>Vue Storefront API</strong>。 <a href="https://docs.vuestorefront.io/v1/guide/cookbook/guide/integrations/multistore.html#vue-storefront-and-vue-storefront-api-configuration" target="_blank" rel="noopener noreferrer">进一步说明<OutboundLink/></a></p>
<h4 id="秘密-4-处理-version-conflict-engine-exception" tabindex="-1"><a class="header-anchor" href="#秘密-4-处理-version-conflict-engine-exception" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-4-dealing-with-version-conflict-engine-exception" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 4. 处理 <code>version_conflict_engine_exception</code></h4>
<p><code>version_conflict_engine_exception</code>基本上意味着在执行您的 Elasticsearch 命令时存在竞争条件。Elasticsearch 是并行和异步的，因此旧版本可能会意外覆盖新版本。</p>
<p>因此，它具有保护较新版本文档的方法，以确保其不受较旧版本的影响，并且<code>version_conflict_engine_exception</code>是其中之一。</p>
<p>重复相同的请求只会解决冲突。但是，如果没有，发送标志<code>conflicts=proceed</code>应该忽略冲突，但是，您应该对这些强制更新的后果负责。<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/optimistic-concurrency-control.html" target="_blank" rel="noopener noreferrer">更多信息（打开新窗口）<OutboundLink/></a></p>
<h4 id="秘密-5-可供选择的选项-cli-js" tabindex="-1"><a class="header-anchor" href="#秘密-5-可供选择的选项-cli-js" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#secret-5-options-available-for-cli-js" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 5. 可供选择的选项 <code>cli.js</code></h4>
<p><code>cli.js</code>处理所有导入命令；这是<strong>mage2vuestorefront</strong>的入口。它不仅接受所有命令，而且还接受选项。虽然大多数命令接受类似的选项，但少数选项仅适用于某些命令。</p>
<p>笔记</p>
<p>示例中的值显示以下默认值</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js attributes <span class="token punctuation">\</span> 
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
adapter<span class="token variable"><span class="token variable">`</span>option 表示您将用于数据源的适配器。基本上你不需要更改默认值<span class="token variable">`</span></span>magento
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>removeNonExistent</code> 选项删除存在于索引中但不存在于数据源中的条目。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js categories <span class="token punctuation">\</span> 
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false <span class="token punctuation">\</span>
  --extendedCategories<span class="token operator">=</span>true <span class="token punctuation">\</span>
  --generateUniqueUrlKeys<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>extendedCategories</code>选项允许导入有关类别的扩展信息；例如<code>created_at</code>, <code>path</code>,<code>included_in_menu</code>等等。</p>
<p><code>generateUniqueUrlKeys</code>选项允许使用在导入过程中生成的url键<code>slugfied name</code>+ <code>-</code>+ <code>id</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js cleanup <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --cleanupType<span class="token operator">=</span>product <span class="token punctuation">\</span>
  --transactionKey<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>cleanup</code>命令用于删除在当前插入之前插入的条目。此命令将删除时间戳早于当前导入的任何条目。这就是<code>--removeNonExistent</code>option时执行的内容<code>true</code>。</p>
<p>小心！</p>
<p><code>cleanup</code>command 不打算从命令行使用。这是<strong>仅供内部使用</strong>。如果在命令行中单独使用它，它将清除指定索引类型的索引，其事务键与当前事务键不同，这意味着到目前为止存储的类型的所有条目都将消失。请小心使用。</p>
<p><code>cleanupType</code> option 表示要清除的索引类型。</p>
<p><code>transactionKey</code> 选项表示执行的时间戳，它将您的交易与其他交易区分开来。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js fullreindex <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --partitions<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
  --partitionSize<span class="token operator">=</span><span class="token number">50</span> <span class="token punctuation">\</span>
  --initQueue<span class="token operator">=</span>true <span class="token punctuation">\</span>
  --skus<span class="token operator">=</span> <span class="token punctuation">\</span>
  --extendedCategories<span class="token operator">=</span>true <span class="token punctuation">\</span>
  --generateUniqueUrlKeys<span class="token operator">=</span>true 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>fullreindex</code> 是一个将按顺序运行所有其他导入命令的命令。</p>
<p><code>partitions</code>选项标志表示并行模式。此处设置的值将成为进程计数。因此，1 表示单进程模式。</p>
<p><code>partitionSize</code>选项表示<code>pageSize</code>通过每个请求配置返回的集合大小。</p>
<p><code>initQueue</code> 选项启用队列模式，以便进程并行运行。</p>
<p><code>skus</code> 选项仅通过一组 skus 获取查询结果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js productcategories <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>productcategories</code>是获取<code>magento</code>'s<code>catalog_category_product</code>表数据的命令。该表存储了关于哪个类别包含哪些产品以及该类别中的产品位置的索引信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js products <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --partitions<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
  --partitionSize<span class="token operator">=</span><span class="token number">50</span> <span class="token punctuation">\</span>
  --initQueue<span class="token operator">=</span>true <span class="token punctuation">\</span>
  --skus<span class="token operator">=</span> <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false <span class="token punctuation">\</span>
  --updatedAfter<span class="token operator">=</span> <span class="token punctuation">\</span>
  --page<span class="token operator">=</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>updatedAfter</code> 选项仅通过在此值之后更新的产品查询来限制产品查询。</p>
<p><code>page</code>option<code>setCurPage</code>在 Magento 中的意思是所谓的。它可以帮助您从某个页面获取数据，其页面大小由<code>partitionsSize</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js productsdelta <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --partitions<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
  --partitionSize<span class="token operator">=</span><span class="token number">50</span> <span class="token punctuation">\</span>
  --initQueue<span class="token operator">=</span>true <span class="token punctuation">\</span> 
  --skus<span class="token operator">=</span> <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
cli.js productsworker <span class="token punctuation">\</span> 
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --partitions<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>productsworker</code> 是一个命令来运行一个进程，该进程堆叠在计划导入产品的队列中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cli.js reviews <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
cli.js taxrule <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
cli.js blocks <span class="token punctuation">\</span> 
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
cli.js pages <span class="token punctuation">\</span>
  --adapter<span class="token operator">=</span>magento <span class="token punctuation">\</span>
  --removeNonExistent<span class="token operator">=</span>false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_3-magento-2-的原生索引器" tabindex="-1"><a class="header-anchor" href="#_3-magento-2-的原生索引器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-native-indexer-in-case-of-magento-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3. Magento 2 的原生索引器</h2>
<h3 id="_1-准备-2" tabindex="-1"><a class="header-anchor" href="#_1-准备-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_1-preparation-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<h3 id="_2-食谱-1" tabindex="-1"><a class="header-anchor" href="#_2-食谱-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-recipe-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<h3 id="_3-窥视厨房-内部发生的事情-2" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_3-peep-into-the-kitchen-what-happens-internally-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<h3 id="_4-厨师的秘密-protip-2" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-2" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_4-chef-s-secret-protip-3" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
</template>
