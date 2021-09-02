<template><h1 id="ch-2-vsf-上下文中的-elasticsearch" tabindex="-1"><a class="header-anchor" href="#ch-2-vsf-上下文中的-elasticsearch" aria-hidden="true">#</a> Ch 2. VSF 上下文中的 Elasticsearch</h1>
<h1 id="第-2-章-vsf-上下文中的-elasticsearch" tabindex="-1"><a class="header-anchor" href="#第-2-章-vsf-上下文中的-elasticsearch" aria-hidden="true">#</a> 第 2 章 VSF 上下文中的 Elasticsearch</h1>
<p>在本章中，我们将介绍：</p>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_0-introduction" target="_blank" rel="noopener noreferrer">0. 介绍<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-now-es7-is-also-supported-in-vsf" target="_blank" rel="noopener noreferrer">1.现在VSF也支持ES7了<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-extend-elasticsearch-entities-for-vsf" target="_blank" rel="noopener noreferrer">2. 为 VSF 扩展 Elasticsearch 实体<OutboundLink/></a></li>
</ul>
<h2 id="_0-介绍" tabindex="-1"><a class="header-anchor" href="#_0-介绍" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_0-introduction" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>0. 介绍</h2>
<p><em>Elasticsearch</em>是<em>Vue Storefront</em>为其数据存储的选择，这很自然，这背后一定有原因。顾名思义，<em>Elastic</em>意味着可扩展、可扩展、分布式和类型不可知，这在大数据时代非常棒，而<em>搜索</em>意味着索引、过滤、在<em>CRUD</em>中<em>读取</em>，这显示了它的重点。到目前为止一切顺利，那么，Elasticsearch 有什么好大惊小怪的呢？</p>
<p><em>Elasticsearch</em>是一个基于<em>Apache Lucene</em>定义的全文搜索和分析引擎。它采用倒排索引，这意味着<em>文档</em>通过所有出现的唯一<em>术语</em>进行索引，并且利用组装每个字段数据结构的能力可以解释为什么<em>Elasticsearch</em>是超快的。</p>
<p>另一个优点是，值得注意的是，它是天生的分布式。来自单个节点 elasticsearch 和它的多个集群的经验几乎相同，并且这样做是无痛的，因为它开箱即用。几乎有很多观点可以说明为什么<em>Elasticsearch</em>是您选择的数据中心和店面之间的中间站。现在让我们继续讨论它是如何在<em>Vue Storefront 中</em>实现的。</p>
<p><em>Vue Storefront</em>为自己定义了与后端无关的 PWA 电子商务解决方案，其中<em>Vue Storefront</em>是顾名思义的店面，而<em>Elasticsearch</em>用作<em>目录</em>及其兄弟数据（如<em>taxrule</em>、<em>产品</em>等）的数据存储。当店面请求有关产品的信息时，它会获取有关从<em>Elasticsearch</em>查询的<em>术语</em>的<em>文档**索引</em>，而无需将其遍历到源 Web 商店（无论是 Magento），因此它会跳过其数据库后面的商店的所有繁重负载让客户满意的愉快体验。</p>
<p>闲话少说，让我们看看什么是开胃菜😃</p>
<h2 id="_1-现在vsf也支持es7了" tabindex="-1"><a class="header-anchor" href="#_1-现在vsf也支持es7了" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-now-es7-is-also-supported-in-vsf" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1.现在VSF也支持ES7了</h2>
<p><em>Elasticsearch</em>一直在大规模升级，间隔如此之大，在<code>6.7</code>和<code>7.0</code>. 你能感受到社区的热度吗？虽然我们可以享受<em>Elastic Stack</em>的改进和增强，但在平滑升级之前有一个列表需要检查。而且它的工作方式与您需要修复<em>Vue Storefront</em>堆栈以与<em>Elasticsearch 7.x</em>兼容的方式相同。</p>
<p>由于<em>Vue Storefront</em>堆栈主要通过<em>Vue Storefront API</em>与<em>Elasticsearch</em>相关联，因此您应该修复<em>Vue Storefront API 的</em>文件以及来自<em>Vue Storefront</em>的一些调用者。但是，大多数更改都是有意在平台的核心部分进行的，因此您的劳动将被最小化，以实现内心的平静。尽管如此，<em>配置</em>和/或<em>迁移</em>需要在必要时进行修复。这个食谱会一步一步地教你如何做。</p>
<h3 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-preparation" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>您需要<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup" target="_blank" rel="noopener noreferrer">设置<em>Vue Storefront</em>堆栈，<OutboundLink/></a>包括<em>Vue Storefront API</em>。</li>
<li><em>Vue Storefront</em>版本<code>1.11</code>及更高版本支持 ES7 。你应该相应地拥有它。</li>
<li><em>Vue Storefront API</em>版本<code>1.11</code>及更高版本支持 ES7 。你也应该相应地拥有它。</li>
<li>ES7 由<em>mage2vuestorefront</em>和 branch支持<code>feature/es7</code>。你也应该拥有它。</li>
</ul>
<p>笔记</p>
<p>如何下载最新的<code>1.11</code>通过<code>git</code>中解释<a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-upgrade-to-1-11-technically-foolproof-approach" target="_blank" rel="noopener noreferrer"><em>普罗蒂普</em><OutboundLink/></a></p>
<h3 id="_2-食谱" tabindex="-1"><a class="header-anchor" href="#_2-食谱" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-recipe" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 食谱</h3>
<ol>
<li>您应该修复<code>docker-compose.nodejs.yml</code>文件，因为链接的<em>Elasticsearch</em>容器应该更新如下：</li>
</ol>
<p>docker-compose.nodejs.yml改变</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -6,7 +6,7 @@ 服务：</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td>语境： 。</td>
</tr>
<tr>
<td>77</td>
<td>dockerfile: docker/vue-storefront-api/Dockerfile</td>
</tr>
<tr>
<td>88</td>
<td>取决于：</td>
</tr>
<tr>
<td>9</td>
<td>-       -<s>es1</s></td>
</tr>
<tr>
<td>9</td>
<td>+       -es7</td>
</tr>
<tr>
<td>1010</td>
<td>- Redis</td>
</tr>
<tr>
<td>1111</td>
<td>env_file: docker/vue-storefront-api/default.env</td>
</tr>
<tr>
<td>1212</td>
<td>环境：</td>
</tr>
</tbody>
</table>
<ol>
<li><code>docker-compose</code>对于<em>Elasticsearch 7</em>被包含在<code>1.11</code>。让我们从<strong>Vue Storefront API 根路径</strong>运行<em>Elasticsearch 7</em>的 docker 容器，如下所示：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose -f docker-compose.elastic7.yml -f docker-compose.nodejs.yml up
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>提示</p>
<p>您可以在<em>分离</em>模式下使用选项标志运行它，<code>-d</code>如</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose -f docker-compose.elastic7.yml -f docker-compose.nodejs.yml up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>您将看到如下屏幕：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Starting es7 <span class="token punctuation">..</span>. 
Starting vuestorefrontapi_redis_1 <span class="token punctuation">..</span>. 
Starting vuestorefrontapi_redis_1
Starting vuestorefrontapi_redis_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Attaching to es7, vuestorefrontapi_redis_1
es7      <span class="token operator">|</span> OpenJDK <span class="token number">64</span>-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated <span class="token keyword">in</span> version <span class="token number">9.0</span> and will likely be removed <span class="token keyword">in</span> a future release.
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:C <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.554 <span class="token comment"># oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:C <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.554 <span class="token comment"># Redis version=4.0.14, bits=64, commit=00000000, modified=0, pid=1, just started</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:C <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.554 <span class="token comment"># Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.555 * Running <span class="token assign-left variable">mode</span><span class="token operator">=</span>standalone, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">6379</span>.
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.555 <span class="token comment"># WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.555 <span class="token comment"># Server initialized</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.556 <span class="token comment"># WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.556 <span class="token comment"># WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.</span>
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.556 * DB loaded from disk: <span class="token number">0.000</span> seconds
redis_1  <span class="token operator">|</span> <span class="token number">1</span>:M <span class="token number">23</span> Dec <span class="token number">18</span>:00:28.556 * Ready to accept connections
es7      <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">"type"</span><span class="token builtin class-name">:</span> <span class="token string">"server"</span>, <span class="token string">"timestamp"</span><span class="token builtin class-name">:</span> <span class="token string">"2019-12-23T18:00:30,129+0000"</span>, <span class="token string">"level"</span><span class="token builtin class-name">:</span> <span class="token string">"INFO"</span>, <span class="token string">"component"</span><span class="token builtin class-name">:</span> <span class="token string">"o.e.e.NodeEnvironment"</span>, <span class="token string">"cluster.name"</span><span class="token builtin class-name">:</span> <span class="token string">"docker-cluster"</span>, <span class="token string">"node.name"</span><span class="token builtin class-name">:</span> <span class="token string">"be374d24f82e"</span>,  <span class="token string">"message"</span><span class="token builtin class-name">:</span> <span class="token string">"using [1] data paths, mounts [[/ (overlay)]], net usable_space [149.4gb], net total_space [250.9gb], types [overlay]"</span>  <span class="token punctuation">}</span>
es7      <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">"type"</span><span class="token builtin class-name">:</span> <span class="token string">"server"</span>, <span class="token string">"timestamp"</span><span class="token builtin class-name">:</span> <span class="token string">"2019-12-23T18:00:30,133+0000"</span>, <span class="token string">"level"</span><span class="token builtin class-name">:</span> <span class="token string">"INFO"</span>, <span class="token string">"component"</span><span class="token builtin class-name">:</span> <span class="token string">"o.e.e.NodeEnvironment"</span>, <span class="token string">"cluster.name"</span><span class="token builtin class-name">:</span> <span class="token string">"docker-cluster"</span>, <span class="token string">"node.name"</span><span class="token builtin class-name">:</span> <span class="token string">"be374d24f82e"</span>,  <span class="token string">"message"</span><span class="token builtin class-name">:</span> <span class="token string">"heap size [494.9mb], compressed ordinary object pointers [true]"</span>  <span class="token punctuation">}</span>
es7      <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">"type"</span><span class="token builtin class-name">:</span> <span class="token string">"server"</span>, <span class="token string">"timestamp"</span><span class="token builtin class-name">:</span> <span class="token string">"2019-12-23T18:00:30,135+0000"</span>, <span class="token string">"level"</span><span class="token builtin class-name">:</span> <span class="token string">"INFO"</span>, <span class="token string">"component"</span><span class="token builtin class-name">:</span> <span class="token string">"o.e.n.Node"</span>, <span class="token string">"cluster.name"</span><span class="token builtin class-name">:</span> <span class="token string">"docker-cluster"</span>, <span class="token string">"node.name"</span><span class="token builtin class-name">:</span> <span class="token string">"be374d24f82e"</span>,  <span class="token string">"message"</span><span class="token builtin class-name">:</span> <span class="token string">"node name [be374d24f82e], node ID [e8P_hrouSEKIWnylBaelVw], cluster name [docker-cluster]"</span>  <span class="token punctuation">}</span>
<span class="token comment"># abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/NcfdFuMkJ5LWzVbgb7m35coOV" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/NcfdFuMkJ5LWzVbgb7m35coOV" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>您可能会注意到该脚本生成了两个容器，其中一个用于 for<code>redis</code>而另一个用于<code>elasticsearch 7</code>。（<code>kibana</code>容器是可选的<code>1.11</code>）</p>
<ol>
<li><code>localhost:9200</code>从您的浏览器访问然后它应该打印如下：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "name" : "be374d24f82e",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "3Gk6anHkQU--5TmenJkdrw",
  "version" : {
    "number" : "7.3.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "1c1faf1",
    "build_date" : "2019-09-06T14:40:30.409026Z",
    "build_snapshot" : false,
    "lucene_version" : "8.1.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol>
<li>修复<code>local.json</code>到用于更新配置<code>indexTypes</code>和<code>apiVersion</code>下<code>elasticsearch</code>如下：</li>
</ol>
<p>配置/本地.json改变</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,8 +2,6 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td>“主机”：“本地主机”，</td>
</tr>
<tr>
<td>33</td>
<td>“端口”：9200，</td>
</tr>
<tr>
<td>44</td>
<td>&quot;协议&quot;: &quot;http&quot;,</td>
</tr>
<tr>
<td>5</td>
<td>-     “用户”：“弹性”，</td>
</tr>
<tr>
<td>6</td>
<td>-     &quot;密码&quot;: &quot;changeme&quot;,</td>
</tr>
<tr>
<td>75</td>
<td>“min_score”：0.01，</td>
</tr>
<tr>
<td>86</td>
<td>“指数”：[</td>
</tr>
<tr>
<td>97</td>
<td>&quot;vue_storefront_catalog&quot;,</td>
</tr>
<tr>
<td></td>
<td>@@ -13,10 +11,11 @@</td>
</tr>
<tr>
<td>1311</td>
<td>“索引类型”：[</td>
</tr>
<tr>
<td>1412</td>
<td>“产品”，</td>
</tr>
<tr>
<td>1513</td>
<td>“类别”，</td>
</tr>
<tr>
<td>16</td>
<td>——       ”<s>厘米</s>”，</td>
</tr>
<tr>
<td>14</td>
<td>+       &quot;cms_block”，</td>
</tr>
<tr>
<td>15</td>
<td>+       &quot;cms_page&quot;,</td>
</tr>
<tr>
<td>1716</td>
<td>“属性”，</td>
</tr>
<tr>
<td>1817</td>
<td>&quot;税法&quot;,</td>
</tr>
<tr>
<td>1918</td>
<td>“审查”</td>
</tr>
<tr>
<td>2019</td>
<td>],</td>
</tr>
<tr>
<td>21</td>
<td>-     &quot;apiVersion&quot;: &quot;<s>5</s>.<s>6</s>”</td>
</tr>
<tr>
<td>22</td>
<td>-   },</td>
</tr>
<tr>
<td>20</td>
<td>+     &quot;apiVersion&quot;: &quot;7.1”</td>
</tr>
<tr>
<td>21</td>
<td>+   },</td>
</tr>
</tbody>
</table>
<ol>
<li>一旦<em>Elasticsearch 7</em>实例启动并运行，然后运行新脚本，该脚本使用应用的正确数据类型的字段创建索引。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> db7 new
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这是因为您应该新放置<em>Elasticsearch 7 的</em>映射，它只允许每个<em>索引</em>一个<em>文档</em>。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/breaking-changes-7.0.html" target="_blank" rel="noopener noreferrer">更多信息<OutboundLink/></a><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/breaking-changes-7.0.html" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<p>屏幕吐出日志如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> run v1.21.1
$ node scripts/db7.js new
** Hello<span class="token operator">!</span> I am going to create NEW ES index
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Public index <span class="token builtin class-name">alias</span> does not exists aliases_not_found_exception
Done <span class="token keyword">in</span> <span class="token number">2</span>.27s.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/UErONnmqK1m2EFNkWRrG0E6p4" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/UErONnmqK1m2EFNkWRrG0E6p4" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>别担心<code>aliases_not_found_exception</code>。这只是意味着它未能清除孤立的别名，因为首先没有要删除的别名。</p>
<ol>
<li>从终端针对 Elasticsearch API 检查映射是否已成功创建：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -XGET <span class="token string">'http://localhost:9200/_mapping?pretty=true'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>结果应显示为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">"vue_storefront_catalog_cms_block"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"mappings"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
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
  <span class="token punctuation">}</span>,
  <span class="token string">"vue_storefront_catalog_review"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"mappings"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"vue_storefront_catalog_taxrule"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"mappings"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,

<span class="token comment"># ... abridged ...</span>

  <span class="token string">"vue_storefront_catalog_category"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"mappings"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
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
        <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><p>你会发现每个索引只有它的一个带有约定的映射<code>${indexName}_${entityType}</code>。</p>
<ol>
<li>下一步是将数据从源 Web 商店抽取到新创建的 ES7 索引。转到<em>mage2vuestorefront</em>目录和修复<code>apiVersion</code>中<code>elasticsearch</code>的节点<code>config.js</code>。</li>
</ol>
<p>源代码/config.js改变</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -61,7 +61,7 @@ module.exports = {</th>
</tr>
</thead>
<tbody>
<tr>
<td>6161</td>
<td>},</td>
</tr>
<tr>
<td>6262</td>
<td></td>
</tr>
<tr>
<td>6363</td>
<td>弹性搜索：{</td>
</tr>
<tr>
<td>64</td>
<td>-     apiVersion: process.env.ELASTICSEARCH_API_VERSION || '<s>5</s>.<s>6</s>'</td>
</tr>
<tr>
<td>64</td>
<td>+     apiVersion: process.env.ELASTICSEARCH_API_VERSION || '7.1'</td>
</tr>
<tr>
<td>6565</td>
<td>},</td>
</tr>
<tr>
<td>6666</td>
<td></td>
</tr>
<tr>
<td>6767</td>
<td>Redis：{</td>
</tr>
</tbody>
</table>
<p>有了这个变化<code>config.js</code>，<code>mage2vuestorefront</code>知道如何处理你的<em>Elasticsearch</em>版本高于<code>6</code>.</p>
<ol>
<li>现在使用 shell 教机器你的配置<code>ENV</code>，如下例：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">TIME_TO_EXIT</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_KEY</span><span class="token operator">=</span>lv1unkldzkcex68l3eojut4j66qqho8w
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_CONSUMER_SECRET</span><span class="token operator">=</span>zhkuqvweo0bsg14noujqje49x3wht0qr
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN</span><span class="token operator">=</span>z6ftgc5005212bc6lnszxa7d7ocl8hgc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_ACCESS_TOKEN_SECRET</span><span class="token operator">=</span>h8tikjq9sz7tqm6hyhdfgs96krb6qzyk

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://local.magento/rest <span class="token comment"># Replace the url with your Magento 2 URL</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INDEX_NAME</span><span class="token operator">=</span>vue_storefront_catalog <span class="token comment"># This will be the base name of the index we use</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在 shell 中键入它们，然后您会<code>ENV</code>记住这些变量，直到会话过期。</p>
<p>提示</p>
<p>如果您不知道如何获取这些凭据，请查看<a href="https://docs.vuestorefront.io/v1/guide/cookbook/data-import.html#_2-2-recipe-b-using-on-premise" target="_blank" rel="noopener noreferrer">数据导入<OutboundLink/></a></p>
<ol>
<li>运行您的工作程序以将其从源网络商店提取到 Elasticsearch ：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js categories --removeNonExistent<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>屏幕将显示如下日志：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2020</span>-01-07T07:21:00.959Z - debug: Elasticsearch module initialized<span class="token operator">!</span>
info: Winston logging library initialized.
<span class="token number">2020</span>-01-07T07:21:00.991Z - info: Connected correctly to server
<span class="token number">2020</span>-01-07T07:21:00.992Z - info: TRANSACTION KEY <span class="token operator">=</span> <span class="token number">1578381660987</span>
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  default-category-2
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/2
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  default-category-2
<span class="token number">2020</span>-01-07T07:21:02.029Z - debug: Storing extended category data to cache under: vue_storefront_catalog_cat_2
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/4
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/5
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/3
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/7
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/8
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/9
debug: Calling API endpoint: GET http://franko.local/rest/V1/categories/6
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  boy/pants/pants-4
<span class="token number">2020</span>-01-07T07:21:03.427Z - info: Subcategory data extended <span class="token keyword">for</span> <span class="token number">2</span>, children object <span class="token number">4</span>
debug: Response received.
Dest. <span class="token function">cat</span> path <span class="token operator">=</span>  girl/pants/pants-9
<span class="token number">2020</span>-01-07T07:21:03.431Z - info: Subcategory data extended <span class="token keyword">for</span> <span class="token number">2</span>, children object <span class="token number">9</span>

<span class="token comment"># abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>📼你也可以在<a href="https://asciinema.org/a/IViPWiFBkiE4of9L3ykncoPmU" target="_blank" rel="noopener noreferrer">bash播放中<OutboundLink/></a>观看<a href="https://asciinema.org/a/IViPWiFBkiE4of9L3ykncoPmU" target="_blank" rel="noopener noreferrer">🎥（打开新窗口）<OutboundLink/></a></p>
<p>使用以下命令确认您在正确的路径上：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -XGET <span class="token string">"http://localhost:9200/vue_storefront_catalog_category/_search?pretty=true"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>响应应如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ... abridged</span>
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span> <span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_category"</span>,
        <span class="token string">"_type"</span> <span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"8"</span>,
        <span class="token string">"_score"</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">"_source"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token number">8</span>,
          <span class="token string">"parent_id"</span> <span class="token builtin class-name">:</span> <span class="token number">6</span>,
          <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"Outer"</span>,
          <span class="token string">"is_active"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">"level"</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">"product_count"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">"children_data"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"children"</span> <span class="token builtin class-name">:</span> <span class="token string">""</span>,
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:05:27"</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:05:27"</span>,
          <span class="token string">"path"</span> <span class="token builtin class-name">:</span> <span class="token string">"1/2/6/8"</span>,
          <span class="token string">"available_sort_by"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"include_in_menu"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"display_mode"</span> <span class="token builtin class-name">:</span> <span class="token string">"PRODUCTS"</span>,
          <span class="token string">"is_anchor"</span> <span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"children_count"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_use_parent_settings"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_apply_to_products"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token string">"outer-8"</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token string">"girl/outer/outer-8"</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token string">"outer-8"</span>,
          <span class="token string">"tsk"</span> <span class="token builtin class-name">:</span> <span class="token number">1578381660987</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span> <span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_category"</span>,
        <span class="token string">"_type"</span> <span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"9"</span>,
        <span class="token string">"_score"</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">"_source"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token number">9</span>,
          <span class="token string">"parent_id"</span> <span class="token builtin class-name">:</span> <span class="token number">6</span>,
          <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"Pants"</span>,
          <span class="token string">"is_active"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">"level"</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">"product_count"</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
          <span class="token string">"children_data"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"children"</span> <span class="token builtin class-name">:</span> <span class="token string">""</span>,
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:05:52"</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:05:52"</span>,
          <span class="token string">"path"</span> <span class="token builtin class-name">:</span> <span class="token string">"1/2/6/9"</span>,
          <span class="token string">"available_sort_by"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"include_in_menu"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"display_mode"</span> <span class="token builtin class-name">:</span> <span class="token string">"PRODUCTS"</span>,
          <span class="token string">"is_anchor"</span> <span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"children_count"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_use_parent_settings"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_apply_to_products"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token string">"pants-9"</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token string">"girl/pants/pants-9"</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token string">"pants-9"</span>,
          <span class="token string">"tsk"</span> <span class="token builtin class-name">:</span> <span class="token number">1578381660987</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span> <span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_category"</span>,
        <span class="token string">"_type"</span> <span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span> <span class="token builtin class-name">:</span> <span class="token string">"7"</span>,
        <span class="token string">"_score"</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">"_source"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span> <span class="token builtin class-name">:</span> <span class="token number">7</span>,
          <span class="token string">"parent_id"</span> <span class="token builtin class-name">:</span> <span class="token number">6</span>,
          <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token string">"Skirt"</span>,
          <span class="token string">"is_active"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"position"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">"level"</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">"product_count"</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">"children_data"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"children"</span> <span class="token builtin class-name">:</span> <span class="token string">""</span>,
          <span class="token string">"created_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:05:13"</span>,
          <span class="token string">"updated_at"</span> <span class="token builtin class-name">:</span> <span class="token string">"2019-12-24 17:26:22"</span>,
          <span class="token string">"path"</span> <span class="token builtin class-name">:</span> <span class="token string">"1/2/6/7"</span>,
          <span class="token string">"available_sort_by"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>,
          <span class="token string">"include_in_menu"</span> <span class="token builtin class-name">:</span> true,
          <span class="token string">"display_mode"</span> <span class="token builtin class-name">:</span> <span class="token string">"PRODUCTS"</span>,
          <span class="token string">"is_anchor"</span> <span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"children_count"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_use_parent_settings"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"custom_apply_to_products"</span> <span class="token builtin class-name">:</span> <span class="token string">"0"</span>,
          <span class="token string">"url_key"</span> <span class="token builtin class-name">:</span> <span class="token string">"skirt-7"</span>,
          <span class="token string">"url_path"</span> <span class="token builtin class-name">:</span> <span class="token string">"girl/skirt/skirt-7"</span>,
          <span class="token string">"slug"</span> <span class="token builtin class-name">:</span> <span class="token string">"skirt-7"</span>,
          <span class="token string">"tsk"</span> <span class="token builtin class-name">:</span> <span class="token number">1578381660987</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><ol>
<li>重复此过程，直到您完成导入之前映射到<em>Elasticsearch 的</em>所有索引的实体，例如<em>产品</em>、<em>属性</em>、<em>税收规则</em>等，如下所示：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node --harmony cli.js productcategories
node --harmony cli.js attributes --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js taxrule --removeNonExistent<span class="token operator">=</span>true
node --harmony cli.js products --removeNonExistent<span class="token operator">=</span>true --partitions<span class="token operator">=</span><span class="token number">1</span>
node --harmony cli.js reviews
node --harmony cli.js blocks
node --harmony cli.js pages
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>笔记</p>
<p>Magento 的<em>评论</em>、<em>块</em>和<em>页面的</em>API 端点不是开箱即用的。您应该自己为它们安装其他模块。<a href="https://github.com/divanteLtd/magento2-review-api" target="_blank" rel="noopener noreferrer">审查 （打开新窗口）<OutboundLink/></a>,<a href="https://github.com/SnowdogApps/magento2-cms-api" target="_blank" rel="noopener noreferrer">厘米（打开新窗口）<OutboundLink/></a></p>
<p>现在您已准备好启动由<em>Elasticsearch 7</em>提供支持的 Vue Storefront 商店。</p>
<ol>
<li>运行以下命令以在<em>Vue Storefront</em>根路径启动您的商店。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你们一切顺利！</p>
<h3 id="_3-窥视厨房-内部发生的事情" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_3-peep-into-the-kitchen-what-happens-internally" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<p><em>Elasticsearch</em>经历了不断的密集更新。大多数情况下，它是具有向后兼容性的渐进式更改，因此即使您将其升级到另一个也不会有太大影响。然而，这一次升级到<code>7.x</code>有一些重大变化，其中一个值得注意的是，<code>_type</code>索引不允许有多个。</p>
<p><em>Elasticsearch 7.x 的</em>修复中断已成功包含在<em>Vue Storefront 1.11</em>升级中。</p>
<p>您需要做的第一件事是使用<code>git</code>. 容器的升级版本在<code>docker-compose</code>文件中进行了描述，因此它包含的内容被很好地封装起来，除非您想调整自定义而不是默认设置，否则您不必担心它在内部是如何工作的。</p>
<p>接下来，您应该根据类型为<em>Elasticsearch</em>索引新创建每个映射。然后使用<em>mage2vuestorefront</em>将您的数据泵入<em>Elasticsearch</em>。</p>
<p>如果到目前为止一切按计划进行那么好，那么您的 7-Elasticsearch 应该作为具有增强索引能力的数据存储的高性能搜索引擎。</p>
<h3 id="_4-厨师的秘密-protip" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_4-chef-s-secret-protip" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="秘诀一、1-11技术上如何升级-万无一失的方法。" tabindex="-1"><a class="header-anchor" href="#秘诀一、1-11技术上如何升级-万无一失的方法。" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-upgrade-to-1-11-technically-foolproof-approach" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘诀一、<code>1.11</code>技术上如何升级？万无一失的方法。</h4>
<p>有 3 个存储库应该升级为<code>1.11</code>.</p>
<p>查看</p>
<p>请确保您的 git 空间是干净的，并且与即将进行的合并没有任何冲突。</p>
<p>首先，转到<em><strong>Vue Storefront API</strong></em>文件夹并键入以下内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
<span class="token function">git</span> merge v1.11.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>笔记</p>
<p>请注意<code>v1.11.0</code>，该<em>标签</em>表示当前版本的最终提交。</p>
<p>接下来，转到<em><strong>Vue Storefront</strong></em>文件夹并键入以下内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
<span class="token function">git</span> merge v1.11.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>最后，转到<em><strong>mage2vuestorefront</strong></em>文件夹并运行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
<span class="token function">git</span> merge origin/feature/es7
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>现在你都准备好了😃</p>
<h2 id="_2-为-vsf-扩展-elasticsearch-实体" tabindex="-1"><a class="header-anchor" href="#_2-为-vsf-扩展-elasticsearch-实体" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-extend-elasticsearch-entities-for-vsf" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 为 VSF 扩展 Elasticsearch 实体</h2>
<p>网上商店通常具有某些类型的模型和场景。（因为商店归根结底是商店！你对商店有什么期望？😉）他们为社区所熟知，大多数电子商务软件已经按照预期将它们实现到他们的框架中，这对你的新业务有好处。这些表示为实体，即<em>Catalog</em>、<em>Products</em>、<em>Attributes</em>、<em>Tax rule</em>等。由于<em>Vue Storefront</em>作为通往这些电子商务后端的华丽门户，它还需要尽可能平滑地反映这些实体。</p>
<p>大部分主要实体已<code>core</code>按预期在 VSF 中实现，但您可能仍需要添加或删除其他实体，因为您希望它完成您的任务。这个食谱会让你知道如何去做。</p>
<h3 id="_1-准备-1" tabindex="-1"><a class="header-anchor" href="#_1-准备-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_1-preparation-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 准备</h3>
<ul>
<li>您需要<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup" target="_blank" rel="noopener noreferrer">设置<em>Vue Storefront</em>堆栈，<OutboundLink/></a>包括<em>Vue Storefront API</em>。</li>
<li>有两种方法来处理<em>搜索适配器</em>的<em>实体类型</em>; 一个是<em>API</em>（方案 A），另一个是<a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><em>GraphQL</em> （打开新窗口）<OutboundLink/></a>（配方B）</li>
<li>您应该在 Magento 2 中使用自定义实体模块来导入自定义实体。<a href="https://github.com/kkdg/Offline_Stores" target="_blank" rel="noopener noreferrer">在此处<OutboundLink/></a>下载示例模块<a href="https://github.com/kkdg/Offline_Stores" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></li>
<li>为了测试，您应该为新实体导入数据。<a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-0-appetizer" target="_blank" rel="noopener noreferrer">2-0。开胃菜会<OutboundLink/></a>指导您如何做。</li>
</ul>
<p>提示</p>
<p>默认的<em>搜索适配器</em>是<em>API</em>。</p>
<p>为了改变哪个<em>Search Adapter</em>应该在work，请看这里<a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-switch-search-adapters" target="_blank" rel="noopener noreferrer">Chef的秘诀1.如何切换search adapters<OutboundLink/></a></p>
<h3 id="_2-0-开胃菜" tabindex="-1"><a class="header-anchor" href="#_2-0-开胃菜" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-0-appetizer" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-0 开胃菜</h3>
<ol>
<li>例如，假设您需要<em>在线商店</em>的<em>离线商店</em>的实体类型。因此，您可以将商店的信息存储在数据存储中，在这种情况下是<em>Elasticsearch，<em>在需要时读取数据，就像您想在结账时显示</em>离线商店一样</em>，如果他们住在附近，客户可以选择。</li>
</ol>
<p>笔记</p>
<p>有两种方法可以将数据导入数据存储。一用<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer"><code>mage2vuestorefront</code> （打开新窗口）<OutboundLink/></a>它运行<em>NodeJS</em>脚本来完成这项工作，而另一个用于使用<a href="https://github.com/vuestorefront/magento2-vsbridge-indexer" target="_blank" rel="noopener noreferrer"><code>magento2-vsbridge-indexer</code> （打开新窗口）<OutboundLink/></a>这是用于该作业的本机 Magento 2 模块。</p>
<p>在这个食谱中，我们选择前者。不过别担心，我们也会在<a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-2-how-to-make-a-custom-import-using-magento2-vsbridge-indexer" target="_blank" rel="noopener noreferrer">厨师的秘密 2 中研究<OutboundLink/></a>后者。</p>
<ol>
<li>转到<em><strong>mage2vuestorefront</strong></em>根文件夹并执行以下操作：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/adapters/magento 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该文件夹是连接器适配器所在的位置。</p>
<ol>
<li>创建以下名为的文件，例如，<code>offline_stores.js</code>如下：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> AbstractMagentoAdapter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./abstract'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CacheKeys <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./cache_keys'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'util'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">OfflineStoresAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMagentoAdapter</span> <span class="token punctuation">{</span>

 <span class="token function">getEntityType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token string">'offline_stores'</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token string">'adapters/magento/OfflineStoresAdapter'</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">getSourceData</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>api<span class="token punctuation">.</span>offlineStores<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**  Regarding Magento 2 api docs and reality we do have an exception here that items aren't listed straight in the response but under "items" key */</span>
 <span class="token function">prepareItems</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>items<span class="token punctuation">)</span>
     <span class="token keyword">return</span> items<span class="token punctuation">;</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">.</span>total_count<span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>total_count <span class="token operator">=</span> items<span class="token punctuation">.</span>total_count<span class="token punctuation">;</span>
   
   <span class="token keyword">if</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span>items<span class="token punctuation">)</span>
     items <span class="token operator">=</span> items<span class="token punctuation">.</span>items<span class="token punctuation">;</span> <span class="token comment">// this is an exceptional behavior for Magento 2 api  for attributes</span>

   <span class="token keyword">return</span> items<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">isFederated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">preProcessItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">done<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>

     <span class="token punctuation">}</span>

     <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * We're transforming the data structure of item to be compliant with Smile.fr Elastic Search Suite
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">item</span>  document to be updated in elastic search
  */</span>
 <span class="token function">normalizeDocumentFormat</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> item<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> OfflineStoresAdapter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>这是适配器的基本框架。我们稍后会看这个。</p>
<ol>
<li>现在，转到<code>magento2-rest-client</code>library ：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> magento2-rest-client/lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>在这里，我们需要<code>offline_stores.js</code>使用以下内容为适配器创建一个库文件：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'util'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">restClient</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

   module<span class="token punctuation">.</span><span class="token function-variable function">list</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">searchCriteria</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">var</span> endpointUrl <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'/offline-stores'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> restClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>endpointUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> module<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>此库文件仅处理<em>GET</em> API 以从 Magento 2 获取离线商店列表。</p>
<p>笔记</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> endpointUrl <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'/offline-stores'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这一行特别重要，因为<code>'/offline-stores'</code>它是确定 API url 端点的地方。它应该匹配 Magento 2 端的 API url 端点。</p>
<ol>
<li>现在我们需要将这个库包含在<code>index.js</code>：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">vi</span> index.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后按如下方式修复它：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... abridged </span>

<span class="token keyword">var</span> blocks <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./lib/blocks'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pages <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./lib/pages'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> offlineStores <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./lib/offline_stores'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">MAGENTO_API_VERSION</span> <span class="token operator">=</span> <span class="token string">'V1'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">Magento2Client</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

   options<span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token constant">MAGENTO_API_VERSION</span><span class="token punctuation">;</span>

   <span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token function">RestClient</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

   instance<span class="token punctuation">.</span>offlineStores <span class="token operator">=</span> <span class="token function">offlineStores</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
   instance<span class="token punctuation">.</span>attributes <span class="token operator">=</span> <span class="token function">attributes</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
   instance<span class="token punctuation">.</span>categories <span class="token operator">=</span> <span class="token function">categories</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol>
<li>创建命令导入数据的时间，转到<code>cli.js</code>所在文件夹：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/<span class="token punctuation">..</span> <span class="token comment"># ./src </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>打开<code>cli.js</code>并添加一个方法和一个命令，如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... abridged </span>

<span class="token keyword">const</span> <span class="token function-variable function">reindexOfflineStores</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">adapterName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> adapter <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getAdapter</span><span class="token punctuation">(</span>adapterName<span class="token punctuation">,</span> <span class="token string">'offline_stores'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   adapter<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token function-variable function">done_callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Task done! Exiting in 30s...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token function">setTimeout</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>exit<span class="token punctuation">,</span> <span class="token constant">TIME_TO_EXIT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// let ES commit all changes made</span>
       <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

program
 <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'offlinestores'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">'--adapter &lt;adapter>'</span><span class="token punctuation">,</span> <span class="token string">'name of the adapter'</span><span class="token punctuation">,</span> <span class="token string">'magento'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">'--removeNonExistent &lt;removeNonExistent>'</span><span class="token punctuation">,</span> <span class="token string">'remove non existent products'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">cmd</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">await</span> <span class="token function">reindexOfflineStores</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>adapter<span class="token punctuation">,</span> cmd<span class="token punctuation">.</span>removeNonExistent<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
 <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'attributes'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">'--adapter &lt;adapter>'</span><span class="token punctuation">,</span> <span class="token string">'name of the adapter'</span><span class="token punctuation">,</span> <span class="token string">'magento'</span><span class="token punctuation">)</span>
<span class="token comment">// abridged...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ol>
<li>一切都很好，现在运行命令导入离线商店信息！</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node cli.js offlinestores
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>您将看到如下所示的屏幕：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2020</span>-03-10T09:22:30.359Z - debug: Elasticsearch module initialized<span class="token operator">!</span>
info: Winston logging library initialized.
<span class="token number">2020</span>-03-10T09:22:30.796Z - info: Connected correctly to server
<span class="token number">2020</span>-03-10T09:22:30.796Z - info: TRANSACTION KEY <span class="token operator">=</span> <span class="token number">1583832150786</span>
debug: Calling API endpoint: GET http://localhost/rest//V1/offline-stores
debug: Response received.
<span class="token number">2020</span>-03-10T09:22:32.130Z - info: Importing <span class="token number">0</span> of <span class="token number">3</span> - <span class="token number">1</span> with tsk <span class="token operator">=</span> <span class="token number">1583832150786</span>
<span class="token number">2020</span>-03-10T09:22:32.131Z - info: Tasks count <span class="token operator">=</span> <span class="token number">2</span>
<span class="token number">2020</span>-03-10T09:22:32.139Z - info: Importing <span class="token number">1</span> of <span class="token number">3</span> - <span class="token number">2</span> with tsk <span class="token operator">=</span> <span class="token number">1583832150786</span>
<span class="token number">2020</span>-03-10T09:22:32.139Z - info: Tasks count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token number">2020</span>-03-10T09:22:32.139Z - info: Importing <span class="token number">2</span> of <span class="token number">3</span> - <span class="token number">3</span> with tsk <span class="token operator">=</span> <span class="token number">1583832150786</span>
<span class="token number">2020</span>-03-10T09:22:32.140Z - info: Tasks count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token number">2020</span>-03-10T09:22:32.140Z - info: No tasks to process. All records processed<span class="token operator">!</span>
<span class="token number">2020</span>-03-10T09:22:32.140Z - info: Task done<span class="token operator">!</span> Exiting <span class="token keyword">in</span> 30s<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>笔记</p>
<p>在运行命令之前，您应该像这样告诉机器环境变量：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MAGENTO_URL</span><span class="token operator">=</span>http://localhost/rest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果您为 Magento 2 实例使用不同的网址，请更换网址。</p>
<ol>
<li>让我们确认结果并结束它！</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> localhost:8080/api/catalog/vue_storefront_catalog/offline_stores/_search
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>除非有问题，否则响应应如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">"took"</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
  <span class="token string">"timed_out"</span><span class="token builtin class-name">:</span> false,
  <span class="token string">"_shards"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"total"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">"successful"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">"skipped"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"failed"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"hits"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"total"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"value"</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
      <span class="token string">"relation"</span><span class="token builtin class-name">:</span> <span class="token string">"eq"</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"max_score"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">"hits"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span><span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_offline_stores"</span>,
        <span class="token string">"_type"</span><span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span><span class="token builtin class-name">:</span> <span class="token string">"2"</span>,
        <span class="token string">"_score"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">"_source"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token string">"2"</span>,
          <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Wrocaw"</span>,
          <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token string">"Ulica Romana Dmowskiego 17, 50-203 Wrocaw, Poland"</span>,
          <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"+48 577 032 500"</span>,
          <span class="token string">"is_active"</span><span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"tsk"</span><span class="token builtin class-name">:</span> <span class="token number">1583832150786</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span><span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_offline_stores"</span>,
        <span class="token string">"_type"</span><span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span><span class="token builtin class-name">:</span> <span class="token string">"3"</span>,
        <span class="token string">"_score"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">"_source"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token string">"3"</span>,
          <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Seoul"</span>,
          <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token string">"Seoul GangNam Street 1st 12"</span>,
          <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"+82 10 2364 3330"</span>,
          <span class="token string">"is_active"</span><span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"tsk"</span><span class="token builtin class-name">:</span> <span class="token number">1583832150786</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">"_index"</span><span class="token builtin class-name">:</span> <span class="token string">"vue_storefront_catalog_offline_stores"</span>,
        <span class="token string">"_type"</span><span class="token builtin class-name">:</span> <span class="token string">"_doc"</span>,
        <span class="token string">"_id"</span><span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
        <span class="token string">"_score"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">"_source"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Warszawa"</span>,
          <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token string">"Koci pw. w. Michaa Archanioa"</span>,
          <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"+48 22 845 46 04"</span>,
          <span class="token string">"is_active"</span><span class="token builtin class-name">:</span> <span class="token string">"1"</span>,
          <span class="token string">"tsk"</span><span class="token builtin class-name">:</span> <span class="token number">1583832150786</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>您已成功导入自定义实体！</p>
<h3 id="_2-1。配方-a-带-api" tabindex="-1"><a class="header-anchor" href="#_2-1。配方-a-带-api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_2-1-recipe-a-with-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2-1。配方 A（带 API）</h3>
<ol>
<li>首先，我们需要在下面创建一个<code>api</code>文件夹<code>src/search/adapter/</code>：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/search/adapter
<span class="token function">mkdir</span> api 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li><code>searchAdapter</code>从<code>core</code>文件夹复制文件：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/<span class="token punctuation">..</span>/core/lib/search/adapter/api/searchAdapter.ts api/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>笔记</p>
<p>您应该复制整个<code>searchAdapter.ts</code>文件的原因是，这样做时您的适配器还将默认实体包含<code>core</code>到自定义文件中，因为您的自定义实体无法增量添加到默认值中。这就是<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/lib/search/adapter/searchAdapterFactory.js#L12-L20" target="_blank" rel="noopener noreferrer">为什么（打开新窗口）<OutboundLink/></a></p>
<ol>
<li>编写一个函数来处理<code>searchAdapter.ts</code>刚刚复制的自定义实体类型的添加，并在同一个类的<em>构造</em>函数中对其进行初始化，如下所示：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... abridged</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SearchAdapter</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> entities<span class="token operator">:</span> any

 <span class="token keyword">public</span> <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>entities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initBaseTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initCustomTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">//... abridged ...</span>

 <span class="token keyword">public</span> <span class="token function">initCustomTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEntityType</span><span class="token punctuation">(</span><span class="token string">'offline_stores'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
     <span class="token function-variable function">queryProcessor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token comment">// function that can modify the query each time before it's being executed</span>
       <span class="token keyword">return</span> query
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function-variable function">resultProcessor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">resp<span class="token punctuation">,</span> start<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleResult</span><span class="token punctuation">(</span>resp<span class="token punctuation">,</span> <span class="token string">'offline_stores'</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>在这里你可以看到以<code>registerEntityType</code>方法添加<code>offline_stores</code>实体类型为例。</p>
<p>如果您想添加更多实体，您可以根据需要多次克隆该示例并根据需要更改实体名称。</p>
<p>提示</p>
<p><code>initCustomTypes</code>上面的方法是随意命名的，因此您实际上可以为该方法使用任何其他名称。</p>
<p>现在您已准备好使用您刚刚创建的自定义实体。下一步让您对如何确认有一个简单的想法。（可选的）</p>
<ol>
<li>前往<code>src/modules/instant-checkout/components</code>并打开<code>InstantCheckout.vue</code>。修复如下：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... abridged </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> currentStoreView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/multistore'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/modules'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrderModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/modules/order'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> quickSearchByQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/lib/search'</span><span class="token punctuation">;</span> <span class="token comment">// Import the method to fetch data from ES</span>

<span class="token keyword">const</span> storeView <span class="token operator">=</span> <span class="token function">currentStoreView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// ... abridged</span>

 methods<span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token keyword">async</span> <span class="token function">showPayment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// the method should be done with async/await</span>
     <span class="token keyword">let</span> offlineStores <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">quickSearchByQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> entityType<span class="token operator">:</span> <span class="token string">'offline_stores'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Your item will be sent from the shop at "</span> <span class="token operator">+</span> offlineStores<span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token keyword">const</span> payment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaymentRequest</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>paymentMethods<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paymentDetails <span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paymentOptions<span class="token punctuation">)</span>

     <span class="token comment">// abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>现在去您的网上商店，将商品放入购物车并打开它，单击“**即时结账”**按钮，然后您将看到如下屏幕：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/stores.79c55657.png" alt="Instant_checkout_store_borderline"></p>
<h3 id="_3-窥视厨房-内部发生的事情-1" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_3-peep-into-the-kitchen-what-happens-internally-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3.窥视厨房（内部发生的事情）</h3>
<p>在这个秘籍中，我们迭代了在您的在线商店（这次是 Magento 2）上构建自定义实体的整个过程，无论出于何种原因处理各种信息以增强您的客户体验。</p>
<p>首先，我们为<em>离线商店</em>实体下载了一个 Magento 2 模块。它包含每个线下商店的基本信息。</p>
<p>其次，作为开胃菜，我们必须使用<em>mage2vuestorefront</em>从商店导入数据。我们跟随核心团队如何使用其兄弟开源来做到这一点。</p>
<p>第三，主菜，我们在<code>src</code>文件夹中扩展了核心适配器，以便我们可以安全地进行未来更新😃。其实很简单！您只需要<code>registerEntityType</code>为您的自定义实体！我们还研究了如何在实际示例中实现它，尽管它是简化版本，您最好遵循<code>vuex</code>最佳实践。</p>
<p>我们还有各种主菜，为您提供使用<em>GraphQL</em>的选项。这种方法需要我们进行更多的调整，但相信我，<em>GraphQL</em>有<a href="https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/" target="_blank" rel="noopener noreferrer">很好的优势 （打开新窗口）<OutboundLink/></a>超过其竞争对手。</p>
<p>现在，我们可以尽可能地扩展我们的商店，以处理更多关于您商店的信息。恭喜！</p>
<h3 id="_4-厨师的秘密-protip-1" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#_4-chef-s-secret-protip-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>4. 厨师的秘密 (protip)</h3>
<h4 id="秘密-1-如何切换搜索适配器" tabindex="-1"><a class="header-anchor" href="#秘密-1-如何切换搜索适配器" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/cookbook/elastic.html#secret-1-how-to-switch-search-adapters" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>秘密 1. 如何切换<em>搜索适配器</em></h4>
<p>如果要使用<em>GraphQL</em>适配器进行搜索，则需要将<em>Vue Storefront 中</em><code>server.api</code>node的值更改为<code>graphql</code>in <code>./config/local.json</code>，如下所示：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"server"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"http"</span><span class="token punctuation">,</span>
    <span class="token property">"api"</span><span class="token operator">:</span> <span class="token string">"graphql"</span><span class="token punctuation">,</span>
    <span class="token property">"devServiceWorker"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"useHtmlMinifier"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"htmlMinifierOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
