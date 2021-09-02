<template><h1 id="vue-storefront介绍" tabindex="-1"><a class="header-anchor" href="#vue-storefront介绍" aria-hidden="true">#</a> Vue Storefront介绍</h1>
<p>Vue Storefront 是一个相当复杂的解决方案，有很多用途。学习所有的内容可能需要一些时间。在本介绍中，我们将在几分钟内了解其所有关键概念，了解这些内容足以开始使用 Vue Storefront。</p>
<h2 id="vue-storefront是什么" tabindex="-1"><a class="header-anchor" href="#vue-storefront是什么" aria-hidden="true">#</a> #Vue Storefront是什么？</h2>
<p><img src="https://cdn-images-1.medium.com/max/1600/0*X7cXhVkWidbWFrbM" alt="alt 图标"></p>
<p>Vue Storefront 是一个用 Vue.js 编写的HeadLess且与后端无关的电子商务&quot;渐进式 Web 应用程序&quot; (PWA)。 它使用HeadLess架构的事实允许 Vue Storefront 与任何电子商务平台连接，因此它可以成为 Magento、Shopify、BigCommerce、WooCommerce 等的前端 <a href="https://baike.baidu.com/item/PWA/22378897?fr=aladdin" target="_blank" rel="noopener noreferrer">PWA<OutboundLink/></a>。</p>
<p>它是一个非常流行的开源项目，拥有强大和正在成长的社区。</p>
<p><strong>Vue Storefront 的主要特点：</strong></p>
<ul>
<li>
<p>平台无关</p>
</li>
<li>
<p>专注于性能</p>
</li>
<li>
<p>移动优先方法</p>
</li>
<li>
<p>尖端技术</p>
</li>
<li>
<p>主题和自定义没有限制</p>
</li>
<li>
<p>具有 MIT 许可证的开源</p>
</li>
<li>
<p>令人兴奋的开发者体验</p>
</li>
<li>
<p>开箱即用的服务器端渲染（用于 SEO）</p>
</li>
<li>
<p>离线模式</p>
</li>
</ul>
<h2 id="如何链接平台后端" tabindex="-1"><a class="header-anchor" href="#如何链接平台后端" aria-hidden="true">#</a> #如何链接平台后端？</h2>
<p>由于 vue-storefront-api和用于电子商务后端平台的专用 API 连接器，Vue Storefront 与平台无关。 vue-storefront-api 中的数据格式对于任何平台都是相同的，这意味着无论您使用什么电子商务后端，您的前端都保持不变，没有任何变化。</p>
<p>这是一个很好的迁移策略，因为您可以轻松地从一个平台迁移到另一个平台（或一个版本到另一个版本，例如 Magento 1 到 2），而无需接触您的前端。</p>
<p><img src="https://raw.githubusercontent.com/vuestorefront/vue-storefront/master/docs/.vuepress/public/GitHub-Architecture-VS.png" alt="alt 架构图"></p>
<ul>
<li>
<p>VSBridge Indexer（上图中的magento2-vsbridge-indexer）是Magento 和Elasticsearch 之间的多进程数据同步器，它发送有关产品、类别、税收规则、属性、cms 块和cms 页的数据。</p>
</li>
<li>
<p>VSF-API（或SF-API）只是电子商务后端的代理，它为我们提供了多种好处，例如缓存层、映射到不可知类型、创建自己的“处理器”（某些实体的映射函数）的功能。</p>
</li>
</ul>
<p>VueStorefront 与您的后端平台无缝协作，同时管理以上两个集成。</p>
<p>一些最流行的后端平台已经集成（Magento 2、Magento 1、CoreShop、BigCommerce、WooCommerce）， 您可以使用集成样板轻松制作自己的样板。</p>
<p>在数据同步器方面，作为核心团队，我们只维护一个 magento2-vsbridge-indexer。 这些代码负责的人是 Maciej Kucmus。</p>
<p>图中蓝色部分负责离线缓存，文章后面会讲解。</p>
<h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的？</h2>
<p>在使用 Vue Storefront 时，您需要熟悉 3 个概念。</p>
<ul>
<li><strong>Vue Storefront Core</strong>（<code>core</code>文件夹）是让 Vue Storefront 工作的所有功能的粘合剂。它包含所有入口点、SSR 行为、构建过程、应用程序内库和帮助程序。在构建您自己的实现时，您不应直接接触此文件夹，以便及时了解其功能和安全性。</li>
<li><strong>Vue Storefront 模块</strong>（<code>core/modules</code>和<code>src/modules</code>）是电子商务功能。每个模块都是一个封装的功能（如购物车、愿望清单、目录和一些第三方集成）。您可以根据需要添加/删除/编辑这些模块，并仅使用您需要的功能来组成您的 Vue Storefront 商店。它们也用于第 3 方扩展。</li>
<li><strong>Vue Storefront Themes</strong> ( <code>src/themes</code>) 是实际的商店实现。在主题中，您可以使用和扩展注册模块/核心中的所有逻辑，并添加您的 HTML 标记和样式。Vue Storefront 提供了一个完全可定制的<a href="https://github.com/vuestorefront/vsf-default" target="_blank" rel="noopener noreferrer">默认主题 <OutboundLink/></a>和<a href="https://github.com/vuestorefront/vsf-capybara" target="_blank" rel="noopener noreferrer">水豚主题 <OutboundLink/></a>. 我们建议使用默认主题，因为它比水豚主题更稳定。</li>
</ul>
<p>总结一下：您的商店基本上是一个 Vue Storefront 主题，它使用模块提供的功能。Vue Storefront Core 将所有内容粘合在一起。</p>
<p>了解这 3 个概念可以让您有信心与 Vue Storefront 合作并创建自己的商店。</p>
<h2 id="安装-vue-storefront" tabindex="-1"><a class="header-anchor" href="#安装-vue-storefront" aria-hidden="true">#</a> 安装 Vue Storefront</h2>
<p>当你想使用 Vue Storefront 时，有三个选项：</p>
<p><img src="https://cdn-images-1.medium.com/max/1200/0*dz-mwiEQ_Qkzpd5H" alt="安装"> <em>这是让 VS 与我们的演示后端一起工作所需的一切。</em></p>
<ul>
<li>您可以设置连接到我们的演示后端平台的前端（最适合试用 Vue Storefront）。</li>
<li>您可以使用自己的<code>vue-storefront-api</code>和从演示中转储的数据库设置前端。</li>
<li>您可以设置前端并<code>vue-storefront-api</code>连接到您的电子商务后端。</li>
</ul>
<p>为此，只需输入<code>yarn installer</code>项目的根目录并在控制台中回答问题即可。安装完成后，键入<code>yarn dev</code>以运行您的项目（默认情况下，在 port 上<code>3000</code>）。无论您选择哪个选项，您都可以稍后更改配置文件中的设置。</p>
<h2 id="vue-storefront配置文件" tabindex="-1"><a class="header-anchor" href="#vue-storefront配置文件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#vue-storefront-config-file" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront配置文件</h2>
<p>大多数 Vue Storefront 配置（如活动主题、后端 API 地址、多商店设置等）都是通过其<a href="https://docs.vuestorefront.io/v1/guide/basics/configuration.html" target="_blank" rel="noopener noreferrer">配置<OutboundLink/></a>文件完成的，该文件可以在<code>config</code>文件夹下找到。该<code>default.json</code>文件包含所有默认设置。</p>
<p>对于您自己的实现，您应该<code>local.json</code>在同一目录中创建一个文件，并包含<code>default.json</code>要覆盖的字段。这两个文件将<code>local.json</code>在构建过程中合并。如果您使用安装程序来设置 Vue Storefront 实例，它将生成正确的配置文件。</p>
<h2 id="在-vue-storefront-中构建主题" tabindex="-1"><a class="header-anchor" href="#在-vue-storefront-中构建主题" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#building-themes-in-vue-storefront" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>在 Vue Storefront 中构建主题</h2>
<p><img src="https://cdn-images-1.medium.com/max/1200/1*jMel95nhs5UTIi2DQdeq4Q.png" alt="主题结构"></p>
<p>在 Vue Storefront 中制作主题时，在大多数情况下，您需要做的就是创建自己的 HTML 和 CSS 标记。所有必须的业务逻辑都由Core及其核心模块完成，并且可以轻松注入任何主题组件。 <img src="https://cdn-images-1.medium.com/max/1200/1*tMwC0smduKIwKh82jTiJmw.png" alt="业务逻辑"> <em>核心组件的业务逻辑可以很容易地作为 Vue.js mixin 注入到任何主题组件中。</em></p>
<p>将核心业务逻辑注入主题的机制非常简单。我们正在使用<a href="https://vuejs.org/v2/guide/mixins.html" target="_blank" rel="noopener noreferrer">Vue.js mixins （打开新窗口）<OutboundLink/></a>保持核心业务逻辑可升级。</p>
<p>因此，假设我们有一个核心 Microcart 组件，其业务逻辑如上（左侧），我们可以轻松地将其注入到我们的任何主题组件（右侧）中，只需将其导入并添加为 mixin 即可<code>mixins: [Microcart]</code>。这就是在主题中使用核心业务逻辑所需的全部内容。通过这种方法，我们可以轻松地将更新发送到所有核心组件，而不会中断您的工作。</p>
<p><a href="https://docs.vuestorefront.io/v1/guide/installation/theme.html" target="_blank" rel="noopener noreferrer">查看如何根据我们的官方主题创建主题<OutboundLink/></a>。</p>
<h2 id="离线模式和缓存" tabindex="-1"><a class="header-anchor" href="#离线模式和缓存" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#offline-mode-and-cache" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>离线模式和缓存</h2>
<p>即使用户离线，Vue Storefront 仍然可以工作。</p>
<p>我们通过广泛使用浏览器缓存设法做到了这一点。</p>
<ul>
<li><strong>对于静态资产</strong>（仅生产），我们使用<a href="https://github.com/GoogleChromeLabs/sw-precache" target="_blank" rel="noopener noreferrer">sw-precache （打开新窗口）<OutboundLink/></a>插件（配置可以在 <code>core/build/webpack.prod.sw.config.js</code>中找到）。它们缓存在 Service Worker 中，可以在<code>Application/Cache Storage</code>开发人员工具的选项卡下进行检查。</li>
</ul>
<p><img src="https://cdn-images-1.medium.com/max/1200/1*BHVzt7oCIxcM3bNPZriKmw.png" alt="缓存"> <em>在这里您可以找到缓存的静态资产。</em></p>
<p>警告</p>
<p>请注意，Service Worker 仅在生产模式下工作。</p>
<ul>
<li>**对于目录和存储数据缓存，**我们使用<a href="https://localforage.github.io/localForage/" target="_blank" rel="noopener noreferrer">LocalForage （打开新窗口）<OutboundLink/></a>. 我们还从访问过的类别中预取产品，因此一旦您输入一个类别，其所有产品都可以离线使用。离线存储的机制位于<code>core/lib/store/</code>.</li>
</ul>
<p>即使用户在线，我们也会使用一些缓存数据来立即显示内容。这就解释了为什么 Vue Storefront 快如闪电。</p>
<h2 id="还有什么" tabindex="-1"><a class="header-anchor" href="#还有什么" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#what-else" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>还有什么</h2>
<p>您可能不相信我，但这就是开始使用 Vue Storefront 所需要知道的全部内容！完成基本知识的梳理后，只需查看文档并访问社区<a href="https://vuestorefront.slack.com/" target="_blank" rel="noopener noreferrer">slack （打开新窗口）<OutboundLink/></a>深入了解该项目。</p>
<h2 id="有用的链接" tabindex="-1"><a class="header-anchor" href="#有用的链接" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#useful-links" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>有用的链接</h2>
<ul>
<li><a href="https://docs.vuestorefront.io/v1/" target="_blank" rel="noopener noreferrer">文档<OutboundLink/></a></li>
<li><a href="https://join.slack.com/t/vuestorefront/shared_invite/enQtOTUwNjQyNjY5MDI0LWFmYzE4NTYxNDBhZDRlMjM5MDUzY2RiMjU0YTRjYWQ3YzdkY2YzZjZhZDZmMDUwMWQyOWRmZjQ3NDgwZGQ3NTk" target="_blank" rel="noopener noreferrer">社区松弛邀请链接（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/guide/basics/project-structure.html" target="_blank" rel="noopener noreferrer">项目结构说明（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/guide/basics/configuration.html" target="_blank" rel="noopener noreferrer">配置文件解释（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/guide/extensions/introduction.html" target="_blank" rel="noopener noreferrer">扩展 Vue Storefront（打开新窗口）<OutboundLink/></a></li>
<li><a href="https://docs.vuestorefront.io/guide/basics/contributing.html#how-to-contribute" target="_blank" rel="noopener noreferrer">如何贡献（打开新窗口）<OutboundLink/></a></li>
</ul>
<h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/general/introduction.html#video-with-training" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>视频教程</h2>
<p>您还可以通过免费介绍培训观看第四届 Vue Storefront 黑客马拉松的视频录制</p>
<p><a href="https://youtu.be/IL2HMtvf_hw" target="_blank" rel="noopener noreferrer"><img src="http://img.youtube.com/vi/IL2HMtvf_hw/0.jpg" alt="0.jpg"><OutboundLink/></a></p>
</template>
