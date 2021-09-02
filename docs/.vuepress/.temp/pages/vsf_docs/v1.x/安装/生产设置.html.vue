<template><h1 id="生产设置" tabindex="-1"><a class="header-anchor" href="#生产设置" aria-hidden="true">#</a> 生产设置</h1>
<p>如果您想开始使用 Vue Storefront 开发站点，您应该从<a href="https://docs.vuestorefront.io/v1/guide/installation/linux-mac.html" target="_blank" rel="noopener noreferrer">安装指南<OutboundLink/></a>开始。出于开发目的，您可能会使用该<code>yarn install</code>序列，它将使用自动安装程序在本地设置 Vue Storefront，并准备好 Docker 映像以获得 Elasticsearch 和 Redis 支持。</p>
<p>开发模式意味着您使用基于 node.js 的服务器作为 HTTP 服务并在<code>3000</code>TCP 端口上运行应用程序。由于它非常适合本地测试，因此不建议在生产配置中使用安装程序和直接用户访问 node.js。</p>
<h2 id="生产设置-裸-vps" tabindex="-1"><a class="header-anchor" href="#生产设置-裸-vps" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#production-setup-bare-vps" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>生产设置：裸 VPS</h2>
<p>要在没有 Docker/Kubernetes 的生产模式下运行 Vue Storefront，您需要具有<code>root</code>访问权限的虚拟专用服务器（用于设置目的）。我们假设您<code>Debian GNU Linux</code>在以下步骤中使用。</p>
<p>本教程其余部分的假设：</p>
<ul>
<li>您拥有 Debian Linux 机器的 root 访问权限。</li>
<li>我们将使用默认的本地端口<code>3000</code>为<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"><code>vue-storefront</code> （打开新窗口）<OutboundLink/></a>并<code>8080</code>为<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api</code> （打开新窗口）<OutboundLink/></a>; 端口<strong>不应暴露</strong>，因为它们将隐藏在<strong>NGINX 代理之后</strong>。</li>
<li>我们使用<strong>prod.vuestorefront.io</strong>作为域名。请将其替换为您的主机 URL 地址。</li>
<li>我们假设您拥有<strong>prod.vuestorefront.io</strong>（当然也可以是您的域）的 SSL 证书。PWA 和 Service Workers 需要 SSL 加密。</li>
</ul>
<p>通用方案架构： <em>USER -&gt; NGINX 代理 -&gt; vue-storefront / vue-storefront-api</em></p>
<p>我们将隐藏NGINX 代理背后的<code>vue-storefront</code>和<code>vue-storefront-api</code>服务。您可以使用 NGINX 来缓存代理，但在我们的例子中，它只会转发没有缓存的请求（因为 VS 非常快并且不需要缓存）。我们使用的主要功能是：SSL 加密、gzip 编码和 URL 路由（在一个域下合并<code>vue-storefront</code>和<code>vue-storefront-api</code>服务）。</p>
<h3 id="先决条件" tabindex="-1"><a class="header-anchor" href="#先决条件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#prerequisites" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>先决条件</h3>
<p>笔记</p>
<p>本指南在<em>Ubuntu 18.04</em>和其他主要发行版上进行了测试。该列表将不断更新。</p>
<p>Vue Storefront 需要安装<strong>Elasticsearch</strong>和<strong>Redis 服务器</strong>。默认情况下，在开发模式下，这两个依赖项都随<code>docker-compose.yml</code>Docker 镜像一起提供。但是，出于生产目的，我们建议本地安装服务器。</p>
<p>出于本教程的目的，我们将使用与 Debian 操作系统一起分发的默认包，没有任何安全加固、配置加固操作。</p>
<p><strong>请确保</strong>您的安全/开发运营团队已查看您正在使用的配置，并在公开发布您的应用程序之前强化服务器配置！</p>
<p>首先，让我们创建用户（作为 root 用户）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /home/www
<span class="token function">useradd</span> -m -d /home/www/vuestorefront vuestorefront
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后安装 Elasticsearch 和 Redis（以 root 用户身份）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>

<span class="token function">curl</span> -sL https://deb.nodesource.com/setup_10.x <span class="token operator">|</span> <span class="token function">bash</span> -
<span class="token function">apt-get</span> <span class="token function">install</span> -y nodejs
<span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>

<span class="token function">apt-get</span> <span class="token function">install</span> redis-server

<span class="token function">apt-get</span> <span class="token function">install</span> openjdk-8-jre
<span class="token function">curl</span> -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.16.deb
dpkg -i elasticsearch-5.6.16.deb
/etc/init.d/elasticsearch start

<span class="token function">apt-get</span> <span class="token function">install</span> imagemagick
<span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#nginx" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>nginx</h3>
<p>我们决定使用<strong>NGINX</strong>作为 HTTP 代理，暴露在用户面前，处理网络流量，并作为后端处理应用程序<code>vue-storefront</code>和<code>vue-storefront-api</code>应用程序。</p>
<p>这是设置生产 node.js 应用程序的一般规则，它在 SSL、gzip 压缩、URL 路由和其他配置技术方面为您提供了很大的灵活性，而无需额外麻烦。为此，您可以使用任何其他代理服务器，例如 Varnish 或 Apache2 + mod_proxy。</p>
<p>一些额外的材料：</p>
<ul>
<li><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04" target="_blank" rel="noopener noreferrer">如何在 Digital Ocean 环境 (Ubuntu 16) 中设置生产 Node.js 应用程序（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" target="_blank" rel="noopener noreferrer">如何设置 NGINX 反向代理（打开新窗口）<OutboundLink/></a></li>
</ul>
<h4 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#nginx-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>NGINX 配置</h4>
<p>可选的</p>
<p>如果您已经在自己的域上设置了 SSL，请跳到<a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#now-you-can-run-the-nginx-with-ssl-applied" target="_blank" rel="noopener noreferrer">下一步<OutboundLink/></a>。</p>
<p>从模板创建 NGINX 配置文件（请以 root 用户身份运行）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://raw.githubusercontent.com/DivanteLtd/vue-storefront/develop/docs/guide/installation/prod.vuestorefront.io <span class="token operator">></span> /etc/nginx/sites-available/prod.vuestorefront.io
<span class="token function">ln</span> -s /etc/nginx/sites-available/prod.vuestorefront.io /etc/nginx/sites-enabled/prod.vuestorefront.io
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>您需要将刚刚下载的两行配置替换为证书文件的实际路径及其密钥。</p>
<p><strong>安装 SSL 证书</strong></p>
<p>根据其规范，SSL 安全连接是PWA 和服务工作者的<em><strong>必备条件</strong></em>。</p>
<p>在本指南中，为了简单起见，我们将使用免费的<em><strong>Let's Enrypt</strong></em>服务来获取 SSL 证书。为了使用<em><strong>Let's Encrypt</strong></em>，您需要安装<code>certbot</code>，指南在<a href="https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx" target="_blank" rel="noopener noreferrer">这里 （打开新窗口）<OutboundLink/></a>.</p>
<p>笔记</p>
<p>可以肯定的是，您可以使用最适合您需要的任何其他 SSL 服务提供商。不过大部分时间都不是免费的。</p>
<p>一旦<code>certbot</code>安装完成后，运行以下命令来获取证书信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>certbot certificates
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Found the following certs:
  Certificate Name: prod.vuestorefront.io
    Domains: prod.vuestorefront.io
    Expiry Date: <span class="token number">2020</span>-04-19 <span class="token number">22</span>:47:19+00:00 <span class="token punctuation">(</span>VALID: <span class="token number">89</span> days<span class="token punctuation">)</span>
    Certificate Path: /etc/letsencrypt/live/prod.vuestorefront.io/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/prod.vuestorefront.io/privkey.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>用<code>/etc/nginx/sites-available/prod.vuestorefront.io</code>上面的信息替换证书及其密钥的路径，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ... abridged</span>

  ssl on<span class="token punctuation">;</span>

  ssl_certificate /etc/letsencrypt/live/prod.vuestorefront.io/fullchain.pem<span class="token punctuation">;</span>
  ssl_certificate_key /etc/letsencrypt/live/prod.vuestorefront.io/privkey.pem<span class="token punctuation">;</span>

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>

<span class="token comment"># abridged ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>笔记</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name prod.vuestorefront.io<span class="token punctuation">;</span> 
  <span class="token builtin class-name">return</span> <span class="token number">301</span> https://prod.vuestorefront.io<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>本节运行标准<code>http://prod.vuestorefront.io</code>并从<code>http://prod.vuestorefront.io/*</code>-&gt;创建通配符重定向<code>https://prod.vuestorefront.io/*</code>。</p>
<h4 id="现在你可以在应用了-ssl-的情况下运行-nginx" tabindex="-1"><a class="header-anchor" href="#现在你可以在应用了-ssl-的情况下运行-nginx" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#now-you-can-run-the-nginx-with-ssl-applied" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>现在你可以在应用了 SSL 的情况下运行 NGINX：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/etc/init.d/nginx restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>提示</p>
<p>之后你安装，再次开做<code>/etc/nginx/sites-available/prod.vuestorefront.io</code>，并添加<code>http2</code>后的<code>listen 443 ssl</code>（但之前分号！）。它应该是这样的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    listen 443 ssl http2;
    server_name prod.vuestorefront.io;

	ssl on;
	(...the rest of the config...)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>http2</code>不是必需的，但可以优化支持它的浏览器的体验。可以在<a href="https://developers.google.com/web/fundamentals/performance/http2/" target="_blank" rel="noopener noreferrer">此处<OutboundLink/></a>找到有关 http/2 的更多详细信息<a href="https://developers.google.com/web/fundamentals/performance/http2/" target="_blank" rel="noopener noreferrer">（打开新窗口）<OutboundLink/></a></p>
<h4 id="关于提供的-nginx-配置的一些说明" tabindex="-1"><a class="header-anchor" href="#关于提供的-nginx-配置的一些说明" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#some-notes-on-the-provided-nginx-config" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>关于提供的 nginx 配置的一些说明</h4>
<p>在这里，我们根据过去的最佳经验使用 SSL 设置。请阅读<a href="http://nginx.org/en/docs/http/configuring_https_servers.html" target="_blank" rel="noopener noreferrer">NGINX 文档中的<OutboundLink/></a>详细信息 <a href="http://nginx.org/en/docs/http/configuring_https_servers.html" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>如果你喜欢😉</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  gzip on;
  gzip_proxied any;
  gzip_types
  text/css
  text/javascript
  text/xml
  application/javascript
  application/json
  text/json;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Vue Storefront SSR 响应包含完整的标记和 JSON 对象，用于加快第一个页面的浏览速度。不幸的是，由于 JS 包的大小很大，它会产生大量的网络负载。我们正在通过使用 gzip 压缩服务器端对其进行优化。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location / {
  proxy_pass http://localhost:3000/;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们正在使用 <a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass" target="_blank" rel="noopener noreferrer"><code>proxy_pass</code> （打开新窗口）<OutboundLink/></a>从<code>ngx_http_proxy_module</code>传递来自 Vue Storefront node.js 服务器的内容。根据配置，内容应该在***https://prod.vuestorefront.io/***下可用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /assets/ {
  proxy_pass http://localhost:3000/assets/;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它也与子目录的工作方式相同。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /api/ {
  proxy_pass http://localhost:8080/api/;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>下一个代理部分用于提供 API。这是一个代理<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api</code> （打开新窗口）<OutboundLink/></a>在<code>8080</code>端口上运行的应用程序（默认配置）。API 将在<em><strong>https://prod.vuestorefront.io/api</strong></em>下可用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /img/ {
  proxy_pass http://localhost:8080/img/;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最后一个代理用于提供产品图像。这是一个代理<a href="https://github.com/vuestorefront/vue-storefront-api" target="_blank" rel="noopener noreferrer"><code>vue-storefront-api</code> （打开新窗口）<OutboundLink/></a>在<code>8080</code>端口上运行的应用程序（默认配置）。图片将在<em><strong>https://prod.vuestorefront.io/img</strong></em>下提供</p>
<h4 id="apache2-配置" tabindex="-1"><a class="header-anchor" href="#apache2-配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#apache2-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Apache2 配置</h4>
<p>如果您已经在您的环境中使用 apache2 Web 服务器并且不能（或不想）使用 NGINX，您还可以将 apache2 设置为反向代理而不是 NGINX。这是通过将此块添加到您的 apache2 虚拟主机来完成的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ProxyRequests off

ProxyPass /api/ http://localhost:8080/api/
ProxyPassReverse /api http://localhost:8080/api/

ProxyPass /img/ http://localhost:8080/img/
ProxyPassReverse /img http://localhost:8080/img/

ProxyPass /assets/ http://localhost:3000/assets/
ProxyPassReverse /assets http://localhost:3000/assets/

ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>您还需要启用<a href="https://httpd.apache.org/docs/current/mod/mod_proxy.html" target="_blank" rel="noopener noreferrer">mod_proxy （打开新窗口）<OutboundLink/></a>为了这。</p>
<h3 id="vue-店面和-vue-店面-api" tabindex="-1"><a class="header-anchor" href="#vue-店面和-vue-店面-api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#vue-storefront-and-vue-storefront-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue 店面和 Vue 店面 API</h3>
<p>设置好 NGINX 后，您应该<code>502 error</code>在访问 https://prod.vuestorefront.io 时得到一个。这完全没问题！我们刚刚错过了最重要的一步，即运行后端服务，为我们的安装提供动力。现在 NGINX 正在尝试连接<code>localhost:3000</code>for<code>vue-storefront</code>和<code>localhost:8080</code>for ，<code>vue-storefront-api</code>但没有任何成功。</p>
<p>我们创建了一个名为<code>vuestorefront</code>并转到<code>/home/www/vuestorefront</code>我们的主目录的 Linux 用户。</p>
<p>您需要使用以下命令相应地克隆<code>vue-storefront</code>和存储<code>vue-storefront-api</code>库：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> vuestorefront
<span class="token builtin class-name">cd</span> /home/www/vuestorefront
<span class="token function">git</span> clone --single-branch --branch master https://github.com/vuestorefront/vue-storefront.git
<span class="token function">git</span> clone https://github.com/vuestorefront/vue-storefront-api.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后，您需要安装所需的节点包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/www/vuestorefront/vue-storefront-api
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>... 和 ...</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/www/vuestorefront/vue-storefront
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可能需要几分钟时间。phantomjs 依赖需要安装 bzip2。安装模块后，我们可以为这两个服务设置配置文件。</p>
<h4 id="vue店面配置" tabindex="-1"><a class="header-anchor" href="#vue店面配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#vue-storefront-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue店面配置</h4>
<p>完整的配置文件可以在这里下载：<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/docs/guide/installation/vue-storefront/config" target="_blank" rel="noopener noreferrer">vue-storefront （打开新窗口）<OutboundLink/></a>和<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/docs/guide/installation/vue-storefront-api/config" target="_blank" rel="noopener noreferrer">vue-storefront-api （打开新窗口）<OutboundLink/></a>.</p>
<p>请使用以下命令通过将 default.json 复制到 local.json 来相应地创建<code>vue-storefront-api/config/local.json</code>和<code>vue-storefront/config/local.json</code>文件<code>cp</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /home/www/vuestorefront/vue-storefront-api/config/default.json /home/www/vuestorefront/vue-storefront-api/config/local.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>...和 ...</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /home/www/vuestorefront/vue-storefront/config/default.json /home/www/vuestorefront/vue-storefront/config/local.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>请找到<code>vue-storefront/config/local.json</code>下面描述的文件的关键部分：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"httpAuth"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/catalog"</span><span class="token punctuation">,</span>
    <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"storeViews"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"mapStoreUrlsFor"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"de"</span><span class="token punctuation">,</span>
        <span class="token string">"it"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"multistore"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"de"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"httpAuth"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/catalog"</span><span class="token punctuation">,</span>
            <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_de"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"it"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"httpAuth"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/catalog"</span><span class="token punctuation">,</span>
            <span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"vue_storefront_catalog_it"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>我们正在将产品的端点设置为 https://prod.vuestorefront.io/api/catalog（当然请相应地使用您的域）。您可能会注意到，该<code>/api</code>url 由 NGINX 代理到<code>localhost:8080</code>- 我们的<code>vue-storefront-api</code>实例。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"cart"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"synchronize"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"synchronize_totals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"create_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/create?token={{token}}"</span><span class="token punctuation">,</span>
      <span class="token property">"updateitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/update?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"deleteitem_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/delete?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"pull_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/pull?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"totals_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/totals?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"paymentmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/payment-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"shippingmethods_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/shipping-methods?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"shippinginfo_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/shipping-information?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"collecttotals_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/collect-totals?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"deletecoupon_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/delete-coupon?token={{token}}&amp;cartId={{cartId}}"</span><span class="token punctuation">,</span>
      <span class="token property">"applycoupon_endpoint"</span><span class="token operator">:</span> <span class="token string">"https://prod.vuestorefront.io/api/cart/apply-coupon?token={{token}}&amp;cartId={{cartId}}&amp;coupon={{coupon}}"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>prod.vuestorefront.io</code>在此文件中，还有 27 个要替换为您的生产 URL 地址的实例。请就这样吧😃</p>
<p>如果您想查看修改后的 local.json 应该是什么样子，我们准备的配置<code>prod.vuestorefront.io</code>可以在以下位置找到：</p>
<p><a href="https://raw.githubusercontent.com/DivanteLtd/vue-storefront/develop/docs/guide/installation/vue-storefront-api/config/local.json" target="_blank" rel="noopener noreferrer">Vue店面local.json（打开新窗口）<OutboundLink/></a></p>
<p><a href="https://raw.githubusercontent.com/DivanteLtd/vue-storefront/develop/docs/guide/installation/vue-storefront/config/local.json" target="_blank" rel="noopener noreferrer">vue-storefront-api local.json（打开新窗口）<OutboundLink/></a></p>
<h4 id="vue-storefront-api-配置" tabindex="-1"><a class="header-anchor" href="#vue-storefront-api-配置" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#vue-storefront-api-configuration" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront API 配置</h4>
<p>在<a href="https://github.com/vuestorefront/vue-storefront/blob/develop/docs/guide/installation/vue-storefront-api/config" target="_blank" rel="noopener noreferrer">提供VUE的店面-API配置 （打开新窗口）<OutboundLink/></a>几乎不需要改变。</p>
<p>您需要更改的唯一行是：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"imageable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"namespace"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"maxListeners"</span><span class="token operator">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
    <span class="token property">"imageSizeLimit"</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token property">"timeouts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"convert"</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
        <span class="token property">"identify"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">"download"</span><span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"whitelist"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"allowedHosts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">".*divante.pl"</span><span class="token punctuation">,</span>
            <span class="token string">".*vuestorefront.io"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"keepDownloads"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"maxDownloadCacheSize"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">"tmpPathRoot"</span><span class="token operator">:</span> <span class="token string">"/tmp"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"elasticsearch"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token string">"9200"</span><span class="token punctuation">,</span>
    <span class="token property">"indices"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"vue_storefront_catalog"</span><span class="token punctuation">,</span>
        <span class="token string">"vue_storefront_catalog_it"</span><span class="token punctuation">,</span>
        <span class="token string">"vue_storefront_catalog_de"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>您应该在此处<code>allowedHosts</code>放置<em>可成像</em>节点以下载产品图像。域名指向图像来源的 Magento 2 实例。在这个例子中，Magento 2 在<strong>http://demo-magento2.vuestorefront.io</strong>下运行。</p>
<h4 id="使用您自己的-magento-2-实例" tabindex="-1"><a class="header-anchor" href="#使用您自己的-magento-2-实例" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#using-your-own-magento-2-instance" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用您自己的 Magento 2 实例</h4>
<p>在这种情况下，您必须<code>magento2</code>在 vue-storefront-api 配置文件中使用正确的主机名更新配置节点。要获取<code>api</code>节点的所有必要 Magento 2 API 数据，请导航到 Magento 2 管理中的系统 -&gt; 扩展 -&gt; 集成。节点，导航到 Magento 2 管理中的系统 -&gt; 扩展 -&gt; 集成。</p>
<ul>
<li>单击添加新集成</li>
<li>检查必要的权限（检查 API 权限选项卡上的目录、销售、我的帐户和购物车）</li>
<li>点击激活</li>
<li>将必要的密钥、秘密和令牌复制到 vue-storefront-api 配置的 api 部分</li>
</ul>
<h4 id="构建-vs" tabindex="-1"><a class="header-anchor" href="#构建-vs" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#build-vs" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>构建 VS</h4>
<p>在我们可以运行 Vue Storefront 和 Vue Storefront API 之前，我们应该在生产模式下构建它。为此，请执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/www/vuestorefront/vue-storefront/
<span class="token function">yarn</span> build
<span class="token builtin class-name">cd</span> /home/www/vuestorefront/vue-storefront-api/
<span class="token function">yarn</span> build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="数据导入" tabindex="-1"><a class="header-anchor" href="#数据导入" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#data-import" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>数据导入</h4>
<p>Vue Storefront 需要在 Elasticsearch 中有一些数据才能正确显示产品和类别。当然你可以安装<a href="https://github.com/vuestorefront/mage2vuestorefront" target="_blank" rel="noopener noreferrer">mage2vuestorefront （打开新窗口）<OutboundLink/></a>并配置数据泵以在 Magento 中更改数据时同步和更新 Elasticsearch 索引。出于本教程的目的，我们将仅从 JSON 文件中恢复数据。</p>
<p>您可以使用以下命令（您的本地安装）轻松转储当前的 VS 索引：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-storefront-api
<span class="token function">rm</span> var/catalog.json
<span class="token function">yarn</span> dump
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>现在，<code>var/catalog.json</code>您拥有当前的数据库转储。请将此文件传输到服务器——例如，使用以下 ssh 命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> vuestorefront@prod.vuestorefront.io <span class="token function">rm</span> ~/vue-storefront-api/var/catalog.json
<span class="token function">scp</span> vue-storefront-api/var/catalog.json vuestorefront@prod.vuestorefront.io:~/vue-storefront-api/var/catalog.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后，在以<code>prod.vuestorefront.io</code>身份登录到您的服务器后<code>vuestorefront</code>，您可以运行以下命令来导入数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-storefront-api
<span class="token function">yarn</span> db new
<span class="token function">yarn</span> restore2main
<span class="token function">yarn</span> db rebuild
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="运行-vue-storefront-和-vue-storefront-api" tabindex="-1"><a class="header-anchor" href="#运行-vue-storefront-和-vue-storefront-api" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#running-the-vue-storefront-and-vue-storefront-api" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>运行 Vue Storefront 和 Vue Storefront API</h4>
<p>一切设置好后，您就可以启动<code>vue-storefront</code>and 了<code>vue-storefront-api</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-storefront-api
<span class="token function">yarn</span> start
<span class="token builtin class-name">cd</span> vue-storefront
<span class="token function">yarn</span> start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>两个应用程序都使用<a href="https://pm2.keymetrics.io/docs/usage/process-management/" target="_blank" rel="noopener noreferrer"><code>PM2</code>进程管理器 （打开新窗口）<OutboundLink/></a>在生产模式（<code>start</code>命令）中在需要时管理和重新生成 node.js 进程。</p>
<h2 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#cache-strategies" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>缓存策略</h2>
<h3 id="vsf-的清漆缓存" tabindex="-1"><a class="header-anchor" href="#vsf-的清漆缓存" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#varnish-cache-for-vsf" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>VSF 的清漆缓存</h3>
<p><em>Vue Storefront</em>有多层缓存，最前面的缓存是<em>Varnish</em>，一旦请求被点击，它就会像静态 HTML 页面一样快速地处理请求。你可以从<a href="https://github.com/new-fantastic/vsf-cache-varnish" target="_blank" rel="noopener noreferrer">这里<OutboundLink/></a>安装它<a href="https://github.com/new-fantastic/vsf-cache-varnish" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</p>
<h3 id="vue-店面代理" tabindex="-1"><a class="header-anchor" href="#vue-店面代理" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#vue-storefront-proxy" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue 店面代理</h3>
<p><em>Vue Storefront</em>可以使用<a href="http://openresty.org/en/" target="_blank" rel="noopener noreferrer">OpenResty<OutboundLink/></a>进行设置<a href="http://openresty.org/en/" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>基于反向代理从 Redis 提供缓存页面，无需 Vue StoreFront（VSF 或 VSF API）调用，使用 LUA。<a href="https://github.com/ClickAndMortar/docker/tree/master/vue-storefront/proxy" target="_blank" rel="noopener noreferrer">这里 （打开新窗口）<OutboundLink/></a>是 github 仓库。</p>
<h2 id="生产设置-使用-docker-kubernetes" tabindex="-1"><a class="header-anchor" href="#生产设置-使用-docker-kubernetes" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/installation/production-setup.html#production-setup-using-docker-kubernetes" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>生产设置 - 使用 Docker / Kubernetes</h2>
<p>做好准备。</p>
</template>
