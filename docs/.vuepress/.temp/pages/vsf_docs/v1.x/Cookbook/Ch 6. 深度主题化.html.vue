<template><h1 id="ch-6-深度主题化" tabindex="-1"><a class="header-anchor" href="#ch-6-深度主题化" aria-hidden="true">#</a> Ch 6. 深度主题化</h1>
<p>在本章中，我们将介绍：</p>
<ul>
<li><a href="#_0-introduction">0. 介绍</a></li>
<li><a href="#_2-how-to-upgrade-theme-from-1-11-to-1-12">2. 如何将主题从 1.11 升级到 1.12</a></li>
<li><a href="#_3-how-to-upgrade-theme-from-1-10-to-1-11">3. 如何将主题从 1.10 升级到 1.11</a></li>
</ul>
<h2 id="_0-介绍" tabindex="-1"><a class="header-anchor" href="#_0-介绍" aria-hidden="true">#</a> <a href="#_0-introduction">#</a>0. 介绍</h2>
<p>主题是客户从您的商店获得的第一印象。如果您的客户在您的商店中为客户提供有价值的珍珠和黄金时，由于设计不佳的主题而通过外观和感觉低估了您的商店，您将非常沮丧。出色的产品，经过精心校准的技术支持您的商店，但贬值幅度极小，从而影响您的销售结果。我们在这里通过指导您思考如何<code>theme</code>在<em>Vue Storefront</em>上下文中处理来帮助您摆脱此类灾难。你准备好了吗？一个<em>毕加索</em>？</p>
<h2 id="_2-如何将主题从-1-11-升级到-1-12" tabindex="-1"><a class="header-anchor" href="#_2-如何将主题从-1-11-升级到-1-12" aria-hidden="true">#</a> <a href="#_2-how-to-upgrade-theme-from-1-11-to-1-12">#</a>2. 如何将主题从 1.11 升级到 1.12</h2>
<p>又来了！我们把很多东西装在一个装满礼物的包裹里。然而，这一次与过去不同，我们为<em>Vue Storefront</em>提出了全新的方法，从头开始构建它，并给它一个新名称<a href="https://github.com/vuestorefront/vsf-capybara" target="_blank" rel="noopener noreferrer"><em>Capybara</em> （打开新窗口）<OutboundLink/></a>. <em>Capybara</em>基于<a href="https://www.storefrontui.io/" target="_blank" rel="noopener noreferrer">Storefront UI 设计系统 （打开新窗口）<OutboundLink/></a>它对其最小的块采用模块化方法。那是多么的多才多艺啊！现在，以前的<em>默认</em>主题不再是<em>默认</em>主题，但<em>Capybara</em>将其替换为基本主题。</p>
<p>在这个配方，我们将看看如何从升级<code>1.11</code>到<code>1.12</code>无缝关于主题。<code>1.11</code>不会考虑对您的主题所做的更改，因为我们不会使用<code>default</code>主题，但<code>capybara</code>对于此配方。</p>
<h3 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> <a href="#_1-preparation">#</a>1. 准备</h3>
<ul>
<li>您的机器上<a href="#_3-how-to-upgrade-theme-from-1-10-to-1-11">安装</a>了<a href="#_3-how-to-upgrade-theme-from-1-10-to-1-11"><em>Vue Storefront</em> <code>1.11</code>应用程序</a>。</li>
<li>您<code>1.12</code>已从<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"><em>Vue Storefront</em><OutboundLink/></a><a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"> git 存储库中<OutboundLink/></a>提取<a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer">提交<OutboundLink/></a><a href="https://github.com/vuestorefront/vue-storefront" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>.</li>
</ul>
<h3 id="_2-食谱" tabindex="-1"><a class="header-anchor" href="#_2-食谱" aria-hidden="true">#</a> <a href="#_2-recipe">#</a>2. 食谱</h3>
<ol>
<li>拉<code>v1.12.0</code>标签到<code>1.11</code>VSF 应用程序如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch 
<span class="token function">git</span> checkout tags/v1.12.0 -b recipe <span class="token comment"># this checkouts to v1.12.0 tag and create a [recipe] branch for this tutorial.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>将目录更改<code>src/themes</code>为如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src
<span class="token function">mkdir</span> themes <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> themes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>添加<code>git</code> <code>submodule</code>到<code>themes</code>文件夹如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/vuestorefront/vsf-capybara capybara
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在文件准备好了。</p>
<p>提示</p>
<p>如果您转到根<code>./config</code>文件夹并打开<code>local.json</code>，那么您会注意到<code>theme</code>node<code>capybara</code>默认设置为如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"theme"</span><span class="token operator">:</span> <span class="token string">"@vue-storefront/theme-capybara"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>运行应用程序，您将看到如下屏幕：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker-compose up -d 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://docs.vuestorefront.io/v1/assets/img/home_capybara.22bcb3d6.png" alt="vs_home_intro_borderline"></p>
<h3 id="_3-窥视厨房-内部发生的事情" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情" aria-hidden="true">#</a> <a href="#_3-peep-into-the-kitchen-what-happens-internally">#</a>3.窥视厨房（内部发生的事情）</h3>
<p>在这个秘籍中，我们已经检出<code>v1.12.0</code>并将<code>vsf-capybara</code>主题作为子模块安装到<code>themes</code>文件夹中。这就是全部，让您的应用程序适应新的主题生态系统就是这么简单。</p>
<p><em>Capybara</em>主题基于<a href="https://www.storefrontui.io/" target="_blank" rel="noopener noreferrer"><em>Storefront UI</em> （打开新窗口）<OutboundLink/></a>它与其他普通主题完全不同，因为它有点像CSS 框架中<em>Bootstrap</em>的电子商务版本。所有经常使用的组件都以最小的有意义的大小分成了它们的块，以便用户可以按照他们想要的方式组合这些组件以满足他们的目的。更容易，有组织，有计划，模块化系统的所有光明面都已在其中实现。您可以通过查看<em>Capybara</em>的结构来遵循核心团队制定的最佳实践。</p>
<p>也就是说，您必须告别旧<code>1.11</code>主题。<a href="#_1-start-building-your-own-theme"><em>开始构建自己的主题</em>食谱</a>可以帮助你实现主题的定制配件完整的迁移在<em>说再见</em>。</p>
<h3 id="_4-厨师的秘密-protip" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip" aria-hidden="true">#</a> <a href="#_4-chef-s-secret-protip">#</a>4. 厨师的秘密 (protip)</h3>
<h2 id="_3-如何将主题从-1-10-升级到-1-11" tabindex="-1"><a class="header-anchor" href="#_3-如何将主题从-1-10-升级到-1-11" aria-hidden="true">#</a> <a href="#_3-how-to-upgrade-theme-from-1-10-to-1-11">#</a>3. 如何将主题从 1.10 升级到 1.11</h2>
<p>提醒</p>
<p>本食谱假设您将使用<a href="https://github.com/vuestorefront/vsf-default" target="_blank" rel="noopener noreferrer"><code>default</code>主题 （打开新窗口）<OutboundLink/></a>对于您的商店，这很自然，因为<code>1.11</code>只有一个<em>默认</em>主题，其名称为<code>default</code>.</p>
<p><code>1.12</code>然而，从那时起，<code>default</code>theme 变为可选，而<code>capybara</code>is <em>default</em>。</p>
<p>当您已经在生产环境中运行<em>Vue Storefront</em>商店时，即使您没有开发人员资源，您也可能至少对<em>主题进行</em>了一些更改。希望您根据<code>default</code>主题对您的子主题进行了此类更改，以便正常升级不会对您的商店产生巨大的负面影响。</p>
<p>然而，有时可能会发生如此巨大的升级，以至于您无法顺利地从一个升级到另一个。帮助您在这种情况下<code>1.10</code>避免头痛，我们将向您展示<code>1.11</code>升级位置影响主题如何工作和修复碎片的示例。</p>
<p>此秘籍可帮助您解决升级后遇到的错误，尽可能缩短路线。您的主题中会有更多警告和小残留。要进行全面检修，请查找<a href="https://docs.vuestorefront.io/v1/guide/cookbook/migration.html#_1-upgrade-from-1-10-to-1-11" target="_blank" rel="noopener noreferrer">从 1.10 到 11 的迁移<OutboundLink/></a></p>
<h3 id="_1-准备-1" tabindex="-1"><a class="header-anchor" href="#_1-准备-1" aria-hidden="true">#</a> <a href="#_1-preparation-2">#</a>1. 准备</h3>
<ul>
<li>你有一个<a href="https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_0-introduction" target="_blank" rel="noopener noreferrer">Vue的店面应用程序运行<OutboundLink/></a>的<code>docker</code>或<code>yarn dev</code>在您的浏览器观看。</li>
<li>您有一个在<em>Vue Storefront</em>应用程序之上<a href="#_1-start-building-your-own-theme">运行</a>的子主题。</li>
<li>在这个<em>秘籍中</em>，我们从基于<code>1.10</code>版本的<em>degi</em>子主题开始(git hash : <a href="https://github.com/vuestorefront/vue-storefront/commit/1b53bd2a829f7cab571dbd3c2a4021ea46857da7" target="_blank" rel="noopener noreferrer"><em><strong>1b53bd2a</strong></em> （打开新窗口）<OutboundLink/></a>) 的<code>default</code>主题。这个<em>degi</em>主题是您可能为自己创建的一个示例。这意味着，您可以将其更改为您喜欢的任何内容。</li>
<li>换句话说，假设您有一个<em>Vue Storefront</em>商店在<code>degi</code>从<em>Vue Storefront</em> <code>default</code>主题版本分支出来的子主题上运行，<code>1.10</code>并且想要升级到<code>1.11</code>.</li>
</ul>
<h3 id="_1-1。内容" tabindex="-1"><a class="header-anchor" href="#_1-1。内容" aria-hidden="true">#</a> <a href="#_1-1-contents">#</a>1-1。内容</h3>
<p>添加/删除/增强了许多功能<code>1.11</code>。这个食谱涉及所有这些。然而，它们太多了，无法一目了然。这就是您可能需要这些<em>内容</em>的原因。</p>
<ul>
<li>Pages
<ul>
<li><a href="#_3-now-we-start-hunting-down-the-culprits-one-by-one">Home</a></li>
<li><a href="#_11-the-next-big-chunk-to-take-care-of-is-category-from-pages">Category</a></li>
<li><a href="#_12-now-look-into-checkout-from-pages">Checkout</a></li>
<li><a href="#_13-next-is-compare-in-pages">Compare</a></li>
<li><a href="#_14-here-comes-myaccount-in-pages">MyAccount</a></li>
<li><a href="#_15-another-page-pagenotfound-in-pages">PageNotFound</a></li>
<li><a href="#_16-another-big-update-for-product-in-pages">Product</a></li>
<li><a href="#_17-now-static-in-pages">Static</a></li>
</ul>
</li>
<li>Core components
<ul>
<li>Blocks
<ul>
<li><a href="#_6-now-you-are-ok-with-home-page-but-there-are-still-subtle-changes-made-to-each-corner-of-the-app-let-s-find-them-out">Microcart</a></li>
<li>Auth
<ul>
<li>ForgotPass</li>
<li>Login</li>
<li>Register</li>
</ul>
</li>
<li>Category
<ul>
<li><a href="#_19-next-block-to-fix-is-category-sidebar">Sidebar</a></li>
</ul>
</li>
<li>Checkout
<ul>
<li>OrderConfirmation</li>
<li>OrderReview</li>
<li>Payment</li>
<li>Product</li>
<li>Shipping</li>
<li>ThankYouPage</li>
</ul>
</li>
<li>CMS
<ul>
<li><a href="#_21-move-on-to-cms-block">Block</a></li>
</ul>
</li>
<li>Compare
<ul>
<li><a href="#_22-copy-addtocompare">AddToCompare</a></li>
</ul>
</li>
<li>Footer
<ul>
<li>Footer</li>
<li>MinimalFooter</li>
<li>NewsLetter</li>
</ul>
</li>
<li>Form
<ul>
<li><a href="#_24-baseinputnumber-needs-update">BaseInputNumber</a></li>
</ul>
</li>
<li>Header
<ul>
<li>CompareIcon</li>
<li>Header</li>
<li>MicroCartIcon</li>
<li>MinimalHeader</li>
<li>WishListIcon</li>
</ul>
</li>
<li>MyAccount
<ul>
<li>MyNewsLetter</li>
<li>MyOrder</li>
<li>MyOrders</li>
<li>MyProfile</li>
<li>MyShippingDetails</li>
</ul>
</li>
<li>Product
<ul>
<li><a href="#_27-product-related-is-ready-to-transform">Related</a></li>
</ul>
</li>
<li>Reviews
<ul>
<li><a href="#_28-reviews-is-fixed-too">Reviews</a></li>
</ul>
</li>
<li>SearchPanel
<ul>
<li><a href="#_29-searchpanel-has-parts-to-update">SearchPanel</a></li>
</ul>
</li>
<li>SidebarMenu
<ul>
<li>SidebarMenu</li>
<li>SubCategory</li>
</ul>
</li>
<li>Switcher
<ul>
<li><a href="#_31-it-s-switcher-language-turn">Language</a></li>
</ul>
</li>
<li>Wishlist
<ul>
<li>AddToWishlist</li>
<li>Product</li>
</ul>
</li>
</ul>
</li>
<li><a href="#_10-next-target-is-breadcrumb-now-breadcrumb-supports-the-multistore-feature">Breadcrumb</a></li>
<li><a href="#_33-start-with-addtocart">AddToCart</a></li>
<li><a href="#_34-next-is-colorselector">ColorSelector</a></li>
<li><a href="#_35-update-cookienotification">CookieNotification</a></li>
<li><a href="#_36-time-for-fixing-genericselector">GenericSelector</a></li>
<li><a href="#_37-now-it-s-logo-turn">Logo</a></li>
<li><a href="#_38-let-s-fix-modal">Modal</a></li>
<li><a href="#_39-let-s-fix-newsletterpopup">NewsletterPopup</a></li>
<li><a href="#_40-offlinebadge-to-be-tackled">OfflineBadge</a></li>
<li><a href="#_41-overlay-needs-fix">Overlay</a></li>
<li><a href="#_42-priceselector-needs-fix">PriceSelector</a></li>
<li><a href="#_43-productbundleoptions-ready-to-update">ProductBundleOptions</a></li>
<li><a href="#_44-productcustomoptions-ready-to-update">ProductCustomOptions</a></li>
<li><a href="#_45-productgallerycarousel-ready-to-update">ProductGalleryCarousel</a></li>
<li><a href="#_46-productgalleryzoomcarousel-ready-to-update">ProductGalleryZoomCarousel</a></li>
<li><a href="#_47-productimage-waits-in-line">ProductImage</a></li>
<li><a href="#_48-productlinks-waits-in-line">ProductLinks</a></li>
<li><a href="#_49-productquantity">ProductQuantity</a></li>
<li><a href="#_50-producttile">ProductTile</a></li>
<li><a href="#_51-sizeselector">SizeSelector</a></li>
<li><a href="#_52-sortby">SortBy</a></li>
<li><a href="#_53-spinner">Spinner</a></li>
</ul>
</li>
<li>Theme components
<ul>
<li><a href="#_54-buttonfull-in-theme">ButtonFull</a></li>
<li><a href="#_55-buttonoutline-in-theme">ButtonOutline</a></li>
<li><a href="#_56-webshare-in-theme">WebShare</a></li>
<li>Blocks
<ul>
<li>AsyncSidebar
<ul>
<li><a href="#_57-asyncsidebar-in-theme-blocks">AsyncSidebar</a></li>
</ul>
</li>
<li>Home
<ul>
<li><a href="#_58-onboard-in-theme-blocks">Onboard</a></li>
</ul>
</li>
<li>Inspirations
<ul>
<li><a href="#_59-inspirationtile-in-theme-blocks">InspirationTile</a></li>
</ul>
</li>
<li>Reviews
<ul>
<li><a href="#_60-reviewslist-in-theme-blocks">ReviewsList</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#_4-add-new-files-introduced-from-1-11-as-following-path-from-the-default-theme">Store</a></li>
<li>Other Important Files
<ul>
<li><a href="#_61-helpers">helpers/index.ts</a></li>
<li><a href="#_61-index-js">index.js</a></li>
<li><a href="#_62-mixins-filtermixin-ts">mixins/filterMixin.ts</a></li>
<li>[package.json]</li>
<li><a href="#_63-router-index-js">router/index.js</a></li>
<li>Resource
<ul>
<li><a href="#_64-resource-i18n">i18n</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_2-食谱-1" tabindex="-1"><a class="header-anchor" href="#_2-食谱-1" aria-hidden="true">#</a> <a href="#_2-recipe-2">#</a>2. 食谱</h3>
<h4 id="_1-转到您的vue-storefront应用程序根目录和git-checkout以下哈希e4959550" tabindex="-1"><a class="header-anchor" href="#_1-转到您的vue-storefront应用程序根目录和git-checkout以下哈希e4959550" aria-hidden="true">#</a> <a href="#_1-go-to-your-vue-storefront-app-root-directory-and-git-checkout-to-following-hash-e4959550">#</a>1. 转到您的<em>Vue Storefront</em>应用程序根目录和<code>git checkout</code>以下哈希<code>e4959550</code>：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
<span class="token function">git</span> checkout e4959550 <span class="token comment"># origin/release/v1.11</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意</p>
<p><code>origin/release/v1.11</code>仍在发展。它可能与您阅读时的最新哈希不同。这<code>docs</code>会定期更新，无论如何你明白了。</p>
<h4 id="_2-浏览器中的结果屏幕可能看起来像这样" tabindex="-1"><a class="header-anchor" href="#_2-浏览器中的结果屏幕可能看起来像这样" aria-hidden="true">#</a> <a href="#_2-resulting-screen-in-your-browser-would-somewhat-look-like-this-as-sad-as-can-be">#</a>2. 浏览器中的结果屏幕可能看起来像这样：</h4>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/error_1.11.299fe38d.png" alt="错误_1.11"></p>
<h4 id="_3-现在我们开始一一追捕罪魁祸首。" tabindex="-1"><a class="header-anchor" href="#_3-现在我们开始一一追捕罪魁祸首。" aria-hidden="true">#</a> <a href="#_3-now-we-start-hunting-down-the-culprits-one-by-one">#</a>3. 现在我们开始一一追捕罪魁祸首。</h4>
<p>提示</p>
<p>顺便说一句，您还<code>1.10</code>可以<code>1.11</code>在<a href="https://github.com/vuestorefront/vue-storefront/commit/a42d480aea56d90f7ab65c5caf6ce3f49b00dfec" target="_blank" rel="noopener noreferrer">github 链接中<OutboundLink/></a>比较to之间所做的更改<a href="https://github.com/vuestorefront/vue-storefront/commit/a42d480aea56d90f7ab65c5caf6ce3f49b00dfec" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>也一目了然。</p>
<ul>
<li>第一个目标位于<code>./src/themes/degi/components/core/blocks/MyAccount/MyOrders.vue</code>。将其替换如下：</li>
</ul>
<p>注意</p>
<p>行号表示文件中的编号，它们可能不匹配，因为它假定没有修改。将其视为近似参考。</p>
<p>src/themes/degi/components/core/blocks/MyAccount/MyOrders.vue改变</p>
<p>src/themes/degi/components/core/blocks/MyAccount/MyOrders.vue CHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -80,7 +80,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>80 80</td>
<td></template></td>
</tr>
<tr>
<td>81 81</td>
<td></td>
</tr>
<tr>
<td>82 82</td>
<td><script></td>
</tr>
<tr>
<td>83</td>
<td>- import UserOrder from '<s>src</s>/modules/order~~-history~~/components/<s>UserOrders</s>'</td>
</tr>
<tr>
<td>83</td>
<td>+ import UserOrder from '@vue-storefront/core/modules/order/components/UserOrdersHistory'</td>
</tr>
<tr>
<td>84 84</td>
<td></td>
</tr>
<tr>
<td>85 85</td>
<td>export default {</td>
</tr>
<tr>
<td>86 86</td>
<td>mixins: [UserOrder]</td>
</tr>
</tbody>
</table>
<p>如您所见<code>UserOrdersHistory</code>，已移至<code>core/modules</code>包。</p>
<ul>
<li>接下来，转到<code>./src/themes/degi/pages/Home.vue</code>并修复它，如下所示：</li>
</ul>
<p>src/themes/degi/pages/Home.vue改变</p>
<p>src/themes/degi/pages/Home.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -4,7 +4,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>44</td>
<td></td>
</tr>
<tr>
<td>55</td>
<td><promoted-offers /></td>
</tr>
<tr>
<td>66</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>-    &lt;section class=&quot;new-collection container px15&quot;~~ v-if=&quot;everythingNewCollection &amp;&amp; everythingNewCollection.length&quot;~~&gt;</td>
</tr>
<tr>
<td>7</td>
<td>+    <section class="new-collection container px15"></td>
</tr>
<tr>
<td>88</td>
<td><div></td>
</tr>
<tr>
<td>99</td>
<td><header class="col-md-12"></td>
</tr>
</tbody>
</table>
<p>src/themes/degi/pages/Home.vue改变</p>
<p>src/themes/degi/pages/Home.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -13,13 +13,16 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1313</td>
<td></header></td>
</tr>
<tr>
<td>1414</td>
<td></div></td>
</tr>
<tr>
<td>1515</td>
<td><div class="row center-xs"></td>
</tr>
<tr>
<td>16</td>
<td>-        &lt;<s>product</s>-<s>listing</s> <s>columns</s>=&quot;<s>4</s>&quot; <s>:products</s>=&quot;<s>everythingNewCollection</s>&quot;~~ /&gt;~~</td>
</tr>
<tr>
<td>16</td>
<td>+        <lazy-hydrate :trigger-hydration="!loading" v-if="isLazyHydrateEnabled"></td>
</tr>
<tr>
<td>17</td>
<td>+          <product-listing columns="4" :products="getEverythingNewCollection" /></td>
</tr>
<tr>
<td>18</td>
<td>+        </lazy-hydrate></td>
</tr>
<tr>
<td>19</td>
<td>+        <product-listing v-else columns="4" :products="getEverythingNewCollection" /></td>
</tr>
<tr>
<td>1720</td>
<td></div></td>
</tr>
<tr>
<td>1821</td>
<td></section></td>
</tr>
<tr>
<td>1922</td>
<td></td>
</tr>
<tr>
<td>2023</td>
<td><section v-if="isOnline" class="container pb60 px15"></td>
</tr>
<tr>
<td>2124</td>
<td><div class="row center-xs"></td>
</tr>
<tr>
<td>22</td>
<td>-        <header class="col-md-12" :class="{ pt40: ~~everythingNewCollection~~ && ~~everythingNewCollection~~.length }"></td>
</tr>
<tr>
<td>25</td>
<td>+        <header class="col-md-12" :class="{ pt40: getEverythingNewCollection && getEverythingNewCollection.length }"></td>
</tr>
<tr>
<td>2326</td>
<td></td>
</tr>
</tbody>
</table>
<p>在那里你可以看到<code>lazy-hydrate</code>实现了更好的用户体验。</p>
<ul>
<li>现在，将<code>36</code>我们不再使用的替换为另一个，因为我们现在使用惰性水合物功能：</li>
</ul>
<p>src/themes/degi/pages/Home.vue改变</p>
<p>src/themes/degi/pages/Home.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -33,51 +36,56 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>3336</td>
<td></td>
</tr>
<tr>
<td>3437</td>
<td><script></td>
</tr>
<tr>
<td>3538</td>
<td>// query constructor</td>
</tr>
<tr>
<td>36</td>
<td>- import { prepareQuery } from '@vue-storefront/core/modules/catalog/queries/common'</td>
</tr>
<tr>
<td>3739</td>
<td>import { isServer, onlineHelper } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>40</td>
<td>+ import LazyHydrate from 'vue-lazy-hydration'</td>
</tr>
<tr>
<td>3841</td>
<td></td>
</tr>
<tr>
<td>3942</td>
<td>// Core pages</td>
</tr>
<tr>
<td>4043</td>
<td>import Home from '@vue-storefront/core/pages/Home'</td>
</tr>
<tr>
<td>41</td>
<td>-</td>
</tr>
<tr>
<td>4244</td>
<td>// Theme core components</td>
</tr>
<tr>
<td>4345</td>
<td>import ProductListing from 'theme/components/core/ProductListing'</td>
</tr>
<tr>
<td>4446</td>
<td>import HeadImage from 'theme/components/core/blocks/MainSlider/HeadImage'</td>
</tr>
<tr>
<td>45</td>
<td>-</td>
</tr>
<tr>
<td>4647</td>
<td>// Theme local components</td>
</tr>
<tr>
<td>4748</td>
<td>import Onboard from 'theme/components/theme/blocks/Home/Onboard'</td>
</tr>
<tr>
<td>4849</td>
<td>import PromotedOffers from 'theme/components/theme/blocks/PromotedOffers/PromotedOffers'</td>
</tr>
<tr>
<td>4950</td>
<td>import TileLinks from 'theme/components/theme/blocks/TileLinks/TileLinks'</td>
</tr>
<tr>
<td>50</td>
<td>- import {~~ <s>Logger</s> ~~} from '@vue-storefront/core/lib/logger'</td>
</tr>
<tr>
<td>51</td>
<td>- import {~~ <s>mapGetters</s> ~~} from 'vuex'</td>
</tr>
<tr>
<td>51</td>
<td>+ import {Logger} from '@vue-storefront/core/lib/logger'</td>
</tr>
<tr>
<td>52</td>
<td>+ import {mapGetters} from 'vuex'</td>
</tr>
<tr>
<td>5253</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>54</td>
<td>+ import {registerModule} from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>55</td>
<td>+ import {RecentlyViewedModule} from '@vue-storefront/core/modules/recently-viewed'</td>
</tr>
<tr>
<td>5356</td>
<td></td>
</tr>
<tr>
<td>5457</td>
<td>export default {</td>
</tr>
<tr>
<td>58</td>
<td>+  data () {</td>
</tr>
<tr>
<td>59</td>
<td>+    return {</td>
</tr>
<tr>
<td>60</td>
<td>+      loading: true</td>
</tr>
<tr>
<td>61</td>
<td>+    }</td>
</tr>
<tr>
<td>62</td>
<td>+  },</td>
</tr>
<tr>
<td>5563</td>
<td>mixins: [Home],</td>
</tr>
<tr>
<td>5664</td>
<td>components: {</td>
</tr>
<tr>
<td>5765</td>
<td>HeadImage,</td>
</tr>
<tr>
<td>5866</td>
<td>Onboard,</td>
</tr>
<tr>
<td>5967</td>
<td>ProductListing,</td>
</tr>
<tr>
<td>6068</td>
<td>PromotedOffers,</td>
</tr>
<tr>
<td>61</td>
<td>-    TileLinks</td>
</tr>
<tr>
<td>69</td>
<td>+    TileLinks,</td>
</tr>
<tr>
<td>70</td>
<td>+    LazyHydrate</td>
</tr>
<tr>
<td>6271</td>
<td>},</td>
</tr>
<tr>
<td>6372</td>
<td>computed: {</td>
</tr>
<tr>
<td>6473</td>
<td>...mapGetters('user', ['isLoggedIn']),</td>
</tr>
<tr>
<td>74</td>
<td>+    ...mapGetters('homepage', ['getEverythingNewCollection']),</td>
</tr>
<tr>
<td>6575</td>
<td>categories () {</td>
</tr>
<tr>
<td>6676</td>
<td>return this.getCategories</td>
</tr>
<tr>
<td>6777</td>
<td>},</td>
</tr>
<tr>
<td>68</td>
<td>-    everythingNewCollection () {</td>
</tr>
<tr>
<td>69</td>
<td>-      return this.$store.state.homepage.new_collection</td>
</tr>
<tr>
<td>70</td>
<td>-    },</td>
</tr>
<tr>
<td>71</td>
<td>-    coolBagsCollection () {</td>
</tr>
<tr>
<td>72</td>
<td>-      return this.$store.state.homepage.coolbags_collection</td>
</tr>
<tr>
<td>73</td>
<td>-    },</td>
</tr>
<tr>
<td>7478</td>
<td>isOnline () {</td>
</tr>
<tr>
<td>7579</td>
<td>return onlineHelper.isOnline</td>
</tr>
<tr>
<td>80</td>
<td>+    },</td>
</tr>
<tr>
<td>81</td>
<td>+    isLazyHydrateEnabled () {</td>
</tr>
<tr>
<td>82</td>
<td>+      return config.ssr.lazyHydrateFor.some(</td>
</tr>
<tr>
<td>83</td>
<td>+        field =&gt; ['homepage', 'homepage.new_collection'].includes(field)</td>
</tr>
<tr>
<td>84</td>
<td>+      )</td>
</tr>
<tr>
<td>7685</td>
<td>}</td>
</tr>
<tr>
<td>7786</td>
<td>},</td>
</tr>
<tr>
<td>78</td>
<td>-  <s>created</s> () {</td>
</tr>
<tr>
<td>79</td>
<td>-    <s>// Load personal and shipping details for Checkout page from IndexedDB</s></td>
</tr>
<tr>
<td>87</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>88</td>
<td>+    registerModule(RecentlyViewedModule)</td>
</tr>
<tr>
<td>80</td>
<td>-    this.$store.dispatch('checkout/load')</td>
</tr>
<tr>
<td>8189</td>
<td>},</td>
</tr>
<tr>
<td>8290</td>
<td>async beforeMount () {</td>
</tr>
<tr>
<td>8391</td>
<td>if (this.$store.state.<strong>DEMO_MODE</strong>) {</td>
</tr>
</tbody>
</table>
<p>因为我们现在使用<code>lazy-hydrate</code>功能。</p>
<p>此外，<code>recently-viewed</code>模块<code>Home.vue</code>从<code>1.11</code>.</p>
<p><code>loading</code>需要确定是否<code>lazy-hydrate</code>触发了需求</p>
<p>从<code>1.11</code>，<em>集合</em>来自<code>vuex</code> <code>store</code>使用<code>mapGetters</code>助手。</p>
<ul>
<li><code>actions</code>在已<code>./src/themes/degi/store</code>替换的 in-page下的多个单独文件中<code>actions</code>。</li>
</ul>
<p>我们将在下一步中添加这些文件。</p>
<p>src/themes/degi/pages/Home.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -101,41 +109,19 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>101109</td>
<td>async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data</td>
</tr>
<tr>
<td>102110</td>
<td>Logger.info('Calling asyncData in Home (theme)')()</td>
</tr>
<tr>
<td>103111</td>
<td></td>
</tr>
<tr>
<td>104</td>
<td>-    <s>let</s> <s>newProductsQuery = prepareQuery</s>(<s>{ queryConfig: 'newProducts' })</s></td>
</tr>
<tr>
<td>105</td>
<td>- ~~    let coolBagsQuery = prepareQuery~~(<s>{ queryConfig: <s>'<s>coolBags</s>'</s> }</s>)</td>
</tr>
<tr>
<td>106</td>
<td>-</td>
</tr>
<tr>
<td>107</td>
<td>- ~~    const newProductsResult = await <s>store.dispatch('<s>product</s>/<s>list</s>'</s>, {~~</td>
</tr>
<tr>
<td>108</td>
<td>- ~~      query: newProductsQuery,~~</td>
</tr>
<tr>
<td>112</td>
<td>+    await Promise.all([</td>
</tr>
<tr>
<td>113</td>
<td>+      store.dispatch('homepage/fetchNewCollection'),</td>
</tr>
<tr>
<td>114</td>
<td>+      store.dispatch('promoted/updateHeadImage'),</td>
</tr>
<tr>
<td>115</td>
<td>+      store.dispatch('promoted/updatePromotedOffers')</td>
</tr>
<tr>
<td>116</td>
<td>+    ])</td>
</tr>
<tr>
<td>109</td>
<td>-      size: 8,</td>
</tr>
<tr>
<td>110</td>
<td>-      sort: 'created_at:desc'</td>
</tr>
<tr>
<td>111</td>
<td>-    })</td>
</tr>
<tr>
<td>112</td>
<td>-    if (newProductsResult) {</td>
</tr>
<tr>
<td>113</td>
<td>-      store.state.homepage.new_collection = newProductsResult.items</td>
</tr>
<tr>
<td>114</td>
<td>-    }</td>
</tr>
<tr>
<td>115</td>
<td>-</td>
</tr>
<tr>
<td>116</td>
<td>-    const coolBagsResult = await store.dispatch('product/list', {</td>
</tr>
<tr>
<td>117</td>
<td>-      query: coolBagsQuery,</td>
</tr>
<tr>
<td>118</td>
<td>-      size: 4,</td>
</tr>
<tr>
<td>119</td>
<td>-      sort: 'created_at:desc',</td>
</tr>
<tr>
<td>120</td>
<td>-      includeFields: config.entities.optimize ? (config.products.setFirstVarianAsDefaultInURL ? config.entities.productListWithChildren.includeFields : config.entities.productList.includeFields) : []</td>
</tr>
<tr>
<td>121</td>
<td>-    })</td>
</tr>
<tr>
<td>122</td>
<td>-    if (coolBagsResult) {</td>
</tr>
<tr>
<td>123</td>
<td>-      store.state.homepage.coolbags_collection = coolBagsResult.items</td>
</tr>
<tr>
<td>124</td>
<td>-    }</td>
</tr>
<tr>
<td>125</td>
<td>-</td>
</tr>
<tr>
<td>126</td>
<td>-    await store.dispatch('promoted/updateHeadImage')</td>
</tr>
<tr>
<td>127</td>
<td>-    await store.dispatch('promoted/updatePromotedOffers')</td>
</tr>
<tr>
<td>128117</td>
<td>},</td>
</tr>
<tr>
<td>129118</td>
<td>beforeRouteEnter (to, from, next) {</td>
</tr>
<tr>
<td>130119</td>
<td>if (!isServer &amp;&amp; !from.name) { // Loading products to cache on SSR render</td>
</tr>
<tr>
<td>131</td>
<td>-      next(vm =&gt;~~ {~~</td>
</tr>
<tr>
<td>132</td>
<td>-        <s>let newProductsQuery = prepareQuery</s>(~~{ queryConfig: ~~'<s>newProducts</s>' <s>})</s></td>
</tr>
<tr>
<td>133</td>
<td>- ~~        <s>vm</s>.$store~~.<s>dispatch('product/list',</s> <s>{</s></td>
</tr>
<tr>
<td>120</td>
<td>+      next(vm =&gt;</td>
</tr>
<tr>
<td>121</td>
<td>+        vm.$store.dispatch('homepage/fetchNewCollection').then(res =&gt; {</td>
</tr>
<tr>
<td>122</td>
<td>+          vm.loading = false</td>
</tr>
<tr>
<td>134</td>
<td>-          query: newProductsQuery,</td>
</tr>
<tr>
<td>135</td>
<td>-          size: 8,</td>
</tr>
<tr>
<td>136</td>
<td>-          sort: 'created_at:desc'</td>
</tr>
<tr>
<td>137123</td>
<td>})</td>
</tr>
<tr>
<td>138</td>
<td>-      <s>}</s>)</td>
</tr>
<tr>
<td>124</td>
<td>+      )</td>
</tr>
<tr>
<td>139125</td>
<td>} else {</td>
</tr>
<tr>
<td>140126</td>
<td>next()</td>
</tr>
<tr>
<td>141127</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>同样，<code>actions</code>这里使用新的而不是旧的方式。</p>
<h4 id="_4-1-11从default主题添加以下路径引入的新文件" tabindex="-1"><a class="header-anchor" href="#_4-1-11从default主题添加以下路径引入的新文件" aria-hidden="true">#</a> <a href="#_4-add-new-files-introduced-from-1-11-as-following-path-from-the-default-theme">#</a>4.<code>1.11</code>从<code>default</code>主题添加以下路径引入的新文件：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Assuming you are at the root directory</span>
<span class="token builtin class-name">cd</span> src
<span class="token function">cp</span> -r themes/default/store themes/degi/

<span class="token comment"># Now replace index.js to import new features and abandon deprecated ones.</span>
<span class="token function">cp</span> themes/default/index.js themes/degi/index.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_5-再次打开您的浏览器-您的错误将消失-如下所示" tabindex="-1"><a class="header-anchor" href="#_5-再次打开您的浏览器-您的错误将消失-如下所示" aria-hidden="true">#</a> <a href="#_5-open-your-browser-once-again-then-your-errors-now-be-gone-as-follows">#</a>5. 再次打开您的浏览器，您的错误将消失，如下所示：</h4>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/success_1.11_home.f1da7209.png" alt="success_home_with_1.11_borderline"></p>
<h4 id="_6-现在您可以使用主页-但是应用程序的每个角落仍然有细微的变化。让我们找出他们。" tabindex="-1"><a class="header-anchor" href="#_6-现在您可以使用主页-但是应用程序的每个角落仍然有细微的变化。让我们找出他们。" aria-hidden="true">#</a> <a href="#_6-now-you-are-ok-with-home-page-but-there-are-still-subtle-changes-made-to-each-corner-of-the-app-let-s-find-them-out">#</a>6. 现在您可以使用<em>主页</em>，但是应用程序的每个角落仍然有细微的变化。让我们找出他们。</h4>
<p>单击<em>Microcart</em>图标，您将看到如下页面：</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/microcart_nan.08070fcd.png" alt="microcart_nan_borderline"></p>
<p>多个点需要注意固定。我们升级了<em>Microcart</em>以即时启用<em>编辑模式</em>。让我们修复它。</p>
<h4 id="_7-将新添加的文件从default主题复制到degi主题" tabindex="-1"><a class="header-anchor" href="#_7-将新添加的文件从default主题复制到degi主题" aria-hidden="true">#</a> <a href="#_7-copy-newly-added-files-from-the-default-theme-to-degi-theme">#</a>7. 将新添加的文件从<code>default</code>主题复制到<code>degi</code>主题：</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># you are at the root directory</span>
<span class="token builtin class-name">cd</span> src
<span class="token function">cp</span> themes/default/components/core/blocks/Microcart/EditButton.vue themes/degi/components/core/blocks/Microcart/
<span class="token function">cp</span> themes/default/components/core/blocks/Microcart/EditMode.vue themes/degi/components/core/blocks/Microcart/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_8-然后修复您可能在升级前修改过的文件。" tabindex="-1"><a class="header-anchor" href="#_8-然后修复您可能在升级前修改过的文件。" aria-hidden="true">#</a> <a href="#_8-then-fix-files-that-you-might-have-modified-before-upgrade">#</a>8.然后修复您可能在升级前修改过的文件。</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Microcart/Microcart.vue</code>并按如下方式修复它<code>3</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,9 +1,12 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;div</td>
</tr>
<tr>
<td>3</td>
<td>-    class=&quot;microcart cl-accent&quot;</td>
</tr>
<tr>
<td>3</td>
<td>+    class=&quot;microcart cl-accent relative&quot;</td>
</tr>
<tr>
<td>44</td>
<td>:class=&quot;[productsInCart.length ? 'bg-cl-secondary' : 'bg-cl-primary']&quot;</td>
</tr>
<tr>
<td>55</td>
<td>data-testid=&quot;microcart&quot;</td>
</tr>
<tr>
<td>66</td>
<td>&gt;</td>
</tr>
<tr>
<td>7</td>
<td>+    <transition name="fade"></td>
</tr>
<tr>
<td>8</td>
<td>+      <div v-if="isEditMode" class="overlay" @click="closeEditMode" /></td>
</tr>
<tr>
<td>9</td>
<td>+    </transition></td>
</tr>
<tr>
<td>710</td>
<td><div class="row bg-cl-primary px40 actions"></td>
</tr>
<tr>
<td>811</td>
<td><div class="col-xs end-xs"></td>
</tr>
<tr>
<td>912</td>
<td>&lt;button</td>
</tr>
</tbody>
</table>
<p>此转换允许<em>EditMode</em>覆盖，也可用作切换按钮。</p>
<ul>
<li>替换<code>48</code>为以下内容：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -46,7 +49,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>4649</td>
<td></div></td>
</tr>
<tr>
<td>4750</td>
<td><ul v-if="productsInCart.length" class="bg-cl-primary m0 px40 pb40 products"></td>
</tr>
<tr>
<td>48</td>
<td>-      <product v-for="product in productsInCart" :key="product.sku" :product="product" /></td>
</tr>
<tr>
<td>51</td>
<td>+      <product v-for="product in productsInCart" :key="product.checksum || product.sku" :product="product" /></td>
</tr>
<tr>
<td>4952</td>
<td></ul></td>
</tr>
<tr>
<td>5053</td>
<td><div v-if="productsInCart.length" class="summary px40 cl-accent serif"></td>
</tr>
<tr>
<td>5154</td>
<td><h3 class="m0 pt40 mb30 weight-400 summary-heading"></td>
</tr>
</tbody>
</table>
<p>现在，<code>product.checksum</code>可以用作钥匙</p>
<ul>
<li>修复它<code>125</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -121,19 +124,22 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>121124</td>
<td></template></td>
</tr>
<tr>
<td>122125</td>
<td></td>
</tr>
<tr>
<td>123126</td>
<td><script></td>
</tr>
<tr>
<td>127</td>
<td>+ import { mapGetters, mapActions } from 'vuex'</td>
</tr>
<tr>
<td>124128</td>
<td>import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>125</td>
<td>- import { isModuleRegistered } from '@vue-storefront/core/lib/<s>module</s>'</td>
</tr>
<tr>
<td>129</td>
<td>+ import { isModuleRegistered } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>126130</td>
<td></td>
</tr>
<tr>
<td>127</td>
<td>- import Microcart from '@vue-storefront/core/compatibility/components/blocks/Microcart/Microcart'</td>
</tr>
<tr>
<td>128131</td>
<td>import VueOfflineMixin from 'vue-offline/mixin'</td>
</tr>
<tr>
<td>129132</td>
<td>import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'</td>
</tr>
<tr>
<td>130133</td>
<td>import InstantCheckout from 'src/modules/instant-checkout/components/InstantCheckout.vue'</td>
</tr>
<tr>
<td>134</td>
<td>+ import { registerModule } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>131135</td>
<td></td>
</tr>
<tr>
<td>132136</td>
<td>import BaseInput from 'theme/components/core/blocks/Form/BaseInput'</td>
</tr>
<tr>
<td>133137</td>
<td>import ClearCartButton from 'theme/components/core/blocks/Microcart/ClearCartButton'</td>
</tr>
<tr>
<td>134138</td>
<td>import ButtonFull from 'theme/components/theme/ButtonFull'</td>
</tr>
<tr>
<td>135139</td>
<td>import ButtonOutline from 'theme/components/theme/ButtonOutline'</td>
</tr>
<tr>
<td>136140</td>
<td>import Product from 'theme/components/core/blocks/Microcart/Product'</td>
</tr>
<tr>
<td>141</td>
<td>+ import EditMode from './EditMode'</td>
</tr>
<tr>
<td>142</td>
<td>+ import { InstantCheckoutModule } from 'src/modules/instant-checkout'</td>
</tr>
<tr>
<td>137143</td>
<td></td>
</tr>
<tr>
<td>138144</td>
<td>export default {</td>
</tr>
<tr>
<td>139145</td>
<td>components: {</td>
</tr>
</tbody>
</table>
<p>在删除不推荐使用的功能的同时导入新功能。</p>
<ul>
<li>更改<code>mixins</code>时间<code>148</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -145,8 +151,8 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>145151</td>
<td>InstantCheckout</td>
</tr>
<tr>
<td>146152</td>
<td>},</td>
</tr>
<tr>
<td>147153</td>
<td>mixins: [</td>
</tr>
<tr>
<td>148</td>
<td>-    Microcart,</td>
</tr>
<tr>
<td>149154</td>
<td>VueOfflineMixin,</td>
</tr>
<tr>
<td>155</td>
<td>+    EditMode,</td>
</tr>
<tr>
<td>150156</td>
<td>onEscapePress</td>
</tr>
<tr>
<td>151157</td>
<td>],</td>
</tr>
<tr>
<td>152158</td>
<td>data () {</td>
</tr>
<tr>
<td></td>
<td>@@ -154,7 +160,7 @@ export default {</td>
</tr>
<tr>
<td>154160</td>
<td>addCouponPressed: false,</td>
</tr>
<tr>
<td>155161</td>
<td>couponCode: '',</td>
</tr>
<tr>
<td>156162</td>
<td>componentLoaded: false,</td>
</tr>
<tr>
<td>157</td>
<td>-      isInstantCheckoutRegistered: isModuleRegistered('<s>instant-checkout</s>')</td>
</tr>
<tr>
<td>163</td>
<td>+      isInstantCheckoutRegistered: isModuleRegistered('InstantCheckoutModule')</td>
</tr>
<tr>
<td>158164</td>
<td>}</td>
</tr>
<tr>
<td>159165</td>
<td>},</td>
</tr>
<tr>
<td>160166</td>
<td>props: {</td>
</tr>
</tbody>
</table>
<ul>
<li>在 around添加<em>函数</em>和修复<em>方法</em><code>166</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -164,19 +170,36 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>164170</td>
<td>default: () =&gt; false</td>
</tr>
<tr>
<td>165171</td>
<td>}</td>
</tr>
<tr>
<td>166172</td>
<td>},</td>
</tr>
<tr>
<td>173</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>174</td>
<td>+    registerModule(InstantCheckoutModule)</td>
</tr>
<tr>
<td>175</td>
<td>+  },</td>
</tr>
<tr>
<td>167176</td>
<td>mounted () {</td>
</tr>
<tr>
<td>168177</td>
<td>this.$nextTick(() =&gt; {</td>
</tr>
<tr>
<td>169178</td>
<td>this.componentLoaded = true</td>
</tr>
<tr>
<td>170179</td>
<td>})</td>
</tr>
<tr>
<td>171180</td>
<td>},</td>
</tr>
<tr>
<td>181</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>182</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>183</td>
<td>+      productsInCart: 'cart/getCartItems',</td>
</tr>
<tr>
<td>184</td>
<td>+      appliedCoupon: 'cart/getCoupon',</td>
</tr>
<tr>
<td>185</td>
<td>+      totals: 'cart/getTotals',</td>
</tr>
<tr>
<td>186</td>
<td>+      isOpen: 'cart/getIsMicroCartOpen'</td>
</tr>
<tr>
<td>187</td>
<td>+    })</td>
</tr>
<tr>
<td>188</td>
<td>+  },</td>
</tr>
<tr>
<td>172189</td>
<td>methods: {</td>
</tr>
<tr>
<td>190</td>
<td>+    ...mapActions({</td>
</tr>
<tr>
<td>191</td>
<td>+      applyCoupon: 'cart/applyCoupon'</td>
</tr>
<tr>
<td>192</td>
<td>+    }),</td>
</tr>
<tr>
<td>173193</td>
<td>addDiscountCoupon () {</td>
</tr>
<tr>
<td>174194</td>
<td>this.addCouponPressed = true</td>
</tr>
<tr>
<td>175195</td>
<td>},</td>
</tr>
<tr>
<td>176196</td>
<td>clearCoupon () {</td>
</tr>
<tr>
<td>177</td>
<td>-      this.removeCoupon~~(~~)</td>
</tr>
<tr>
<td>197</td>
<td>+      this.$store.dispatch('cart/removeCoupon')</td>
</tr>
<tr>
<td>178198</td>
<td>this.addCouponPressed = false</td>
</tr>
<tr>
<td>179199</td>
<td>},</td>
</tr>
<tr>
<td>200</td>
<td>+    toggleMicrocart () {</td>
</tr>
<tr>
<td>201</td>
<td>+      this.$store.dispatch('ui/toggleMicrocart')</td>
</tr>
<tr>
<td>202</td>
<td>+    },</td>
</tr>
<tr>
<td>180203</td>
<td>async setCoupon () {</td>
</tr>
<tr>
<td>181204</td>
<td>const couponApplied = await this.applyCoupon(this.couponCode)</td>
</tr>
<tr>
<td>182205</td>
<td>this.addCouponPressed = false</td>
</tr>
<tr>
<td></td>
<td>@@ -190,12 +213,12 @@ export default {</td>
</tr>
<tr>
<td>190213</td>
<td>}</td>
</tr>
<tr>
<td>191214</td>
<td>},</td>
</tr>
<tr>
<td>192215</td>
<td>closeMicrocartExtend () {</td>
</tr>
<tr>
<td>193</td>
<td>-      this.<s>closeMicrocart</s>()</td>
</tr>
<tr>
<td>216</td>
<td>+      this.toggleMicrocart()</td>
</tr>
<tr>
<td>194217</td>
<td>this.$store.commit('ui/setSidebar', false)</td>
</tr>
<tr>
<td>195218</td>
<td>this.addCouponPressed = false</td>
</tr>
<tr>
<td>196219</td>
<td>},</td>
</tr>
<tr>
<td>197220</td>
<td>onEscapePress () {</td>
</tr>
<tr>
<td>198</td>
<td>-      this.<s>closeMicrocart</s>()</td>
</tr>
<tr>
<td>221</td>
<td>+      this.toggleMicrocart()</td>
</tr>
<tr>
<td>199222</td>
<td>},</td>
</tr>
<tr>
<td>200223</td>
<td>clearCart () {</td>
</tr>
<tr>
<td>201224</td>
<td>this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
</tbody>
</table>
<p>在这里，您可以看到<code>InstantCheckoutModule</code>注册于<code>beforeCreate</code>。</p>
<p><code>mapGetters</code>helper 用于获取<code>vuex</code> <code>actions</code>. <a href="https://stackoverflow.com/questions/49696542/differences-b-n-mapstate-mapgetters-mapactions-mapmutations-in-vuex" target="_blank" rel="noopener noreferrer">更多信息 （打开新窗口）<OutboundLink/></a>关于<code>vuex</code> <em>帮手</em></p>
<ul>
<li>最后但并非最不重要的文件，在*<style></style>*标签中添加一些样式<code>311</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Microcart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -308,4 +331,22 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>308331</td>
<td>width: 100%;</td>
</tr>
<tr>
<td>309332</td>
<td>}</td>
</tr>
<tr>
<td>310333</td>
<td>}</td>
</tr>
<tr>
<td>334</td>
<td>+</td>
</tr>
<tr>
<td>335</td>
<td>+  .overlay {</td>
</tr>
<tr>
<td>336</td>
<td>+    top: 0;</td>
</tr>
<tr>
<td>337</td>
<td>+    bottom: 0;</td>
</tr>
<tr>
<td>338</td>
<td>+    left: 0;</td>
</tr>
<tr>
<td>339</td>
<td>+    right: 0;</td>
</tr>
<tr>
<td>340</td>
<td>+    position: absolute;</td>
</tr>
<tr>
<td>341</td>
<td>+    z-index: 0;</td>
</tr>
<tr>
<td>342</td>
<td>+    height: 100%;</td>
</tr>
<tr>
<td>343</td>
<td>+    background:rgba(0, 0, 0, 0.4);</td>
</tr>
<tr>
<td>344</td>
<td>+  }</td>
</tr>
<tr>
<td>345</td>
<td>+</td>
</tr>
<tr>
<td>346</td>
<td>+  .fade-enter-active, .fade-leave-active {</td>
</tr>
<tr>
<td>347</td>
<td>+    transition: opacity .4s;</td>
</tr>
<tr>
<td>348</td>
<td>+  }</td>
</tr>
<tr>
<td>349</td>
<td>+  .fade-enter, .fade-leave-to {</td>
</tr>
<tr>
<td>350</td>
<td>+    opacity: 0;</td>
</tr>
<tr>
<td>351</td>
<td>+  }</td>
</tr>
<tr>
<td>311352</td>
<td></style></td>
</tr>
</tbody>
</table>
<ul>
<li>Another big change has been made to <code>./src/themes/degi/components/core/blocks/Microcart/Product.vue</code>.</li>
</ul>
<p>Start with replacing <em>template</em> at <code>2</code> as follows :</p>
<p>src/themes/degi/components/core/blocks/Microcart/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,131 +1,312 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  <li class="row ~~flex~~-~~nowrap~~ ~~py10~~"></td>
</tr>
<tr>
<td>3</td>
<td>-    <div></td>
</tr>
<tr>
<td>2</td>
<td>+  <li class="row py10 bg-cl-white" :class="{ 'relative': editMode }"></td>
</tr>
<tr>
<td>3</td>
<td>+    <div class="mx10 w-100 py10 mb15 edit-mode flex between-xs middle-xs" v-if="editMode"></td>
</tr>
<tr>
<td>4</td>
<td>+      Edit mode</td>
</tr>
<tr>
<td>5</td>
<td>+      <button class="brdr-none bg-cl-transparent" @click="closeEditMode"></td>
</tr>
<tr>
<td>6</td>
<td>+        <span class="cl-accent"></td>
</tr>
<tr>
<td>7</td>
<td>+          <i class="material-icons cl-accent mr5"></td>
</tr>
<tr>
<td>8</td>
<td>+            close</td>
</tr>
<tr>
<td>9</td>
<td>+          </i></td>
</tr>
<tr>
<td>10</td>
<td>+        </span></td>
</tr>
<tr>
<td>11</td>
<td>+      </button></td>
</tr>
<tr>
<td>12</td>
<td>+    </div></td>
</tr>
<tr>
<td>13</td>
<td>+    <div class="blend"></td>
</tr>
<tr>
<td>414</td>
<td><div class="ml10 bg-cl-secondary"></td>
</tr>
<tr>
<td>515</td>
<td><product-image :image="image" /></td>
</tr>
<tr>
<td>616</td>
<td></div></td>
</tr>
<tr>
<td>717</td>
<td></div></td>
</tr>
<tr>
<td>8</td>
<td>-    <div class="col-xs flex pl35 ~~py15 start~~-~~xs between-sm details~~"></td>
</tr>
<tr>
<td>9</td>
<td>-      <div></td>
</tr>
<tr>
<td>10</td>
<td>-        &lt;<s>router</s>-<s>link</s></td>
</tr>
<tr>
<td>11</td>
<td>-          <s>class=&quot;serif h4 name&quot;</s></td>
</tr>
<tr>
<td>12</td>
<td>- ~~          :to=&quot;localizedRoute({~~</td>
</tr>
<tr>
<td>13</td>
<td>- ~~            name:~~ <s>product.type_id</s> <s>+ '-product',</s></td>
</tr>
<tr>
<td>14</td>
<td>- ~~            params~~:~~ {~~</td>
</tr>
<tr>
<td>15</td>
<td>-              <s>parentSku: product.parentSku ? product.parentSku : product.sku,</s></td>
</tr>
<tr>
<td>16</td>
<td>-              <s>slug: product</s>.<s>slug</s>,</td>
</tr>
<tr>
<td>17</td>
<td>- ~~              childSku: product.sku~~</td>
</tr>
<tr>
<td>18</td>
<td>- ~~            ~~}</td>
</tr>
<tr>
<td>19</td>
<td>- ~~          })&quot;~~</td>
</tr>
<tr>
<td>20</td>
<td>- ~~          ~~data-testid=&quot;<s>productLink</s>&quot;</td>
</tr>
<tr>
<td>21</td>
<td>- ~~          @click~~.<s>native=&quot;$store.commit('ui/setMicrocart',</s> <s>false)&quot;</s></td>
</tr>
<tr>
<td>22</td>
<td>- ~~        ~~&gt;</td>
</tr>
<tr>
<td>23</td>
<td>- ~~          {{~~ <s>product.name</s> <s>|</s> <s>htmlDecode</s> <s>}}</s></td>
</tr>
<tr>
<td>24</td>
<td>- ~~        -<s>link</s>&gt;</td>
</tr>
<tr>
<td>25</td>
<td>- ~~        ~~&lt;<s>div</s> class=&quot;<s>h6</s> <s>cl-bg-tertiary</s> <s>pt5</s> <s>sku&quot; data-testid=&quot;productSku&quot;</s>&gt;</td>
</tr>
<tr>
<td>26</td>
<td>- ~~          {{~~ <s>product</s>.<s>sku</s> <s>}}</s></td>
</tr>
<tr>
<td>27</td>
<td>- ~~        ~~</div></td>
</tr>
<tr>
<td>28</td>
<td>- ~~        &lt;<s>div</s> class=&quot;h6 cl-bg-tertiary pt5 options&quot; v-if=&quot;isOnline &amp;&amp; product.totals &amp;&amp; product.totals.options&quot;~~&gt;</td>
</tr>
<tr>
<td>29</td>
<td>- ~~          ~~&lt;div <s>v-for</s>=&quot;<s>opt</s> <s>in</s> ~~product.totals.~~options&quot; <s>:key</s>=&quot;<s>opt</s>.<s>label</s>&quot;&gt;</td>
</tr>
<tr>
<td>30</td>
<td>- ~~            <s>&lt;<s>span</s> <s>class</s>=&quot;<s>opn</s>&quot;</s>&gt;{{~~ opt.label~~ }}: &gt;</td>
</tr>
<tr>
<td>31</td>
<td>- ~~            ~~&lt;span class=&quot;<s>opv</s>&quot; ~~v-html=&quot;~~opt.<s>value&quot;</s> <s>/&gt;</s></td>
</tr>
<tr>
<td>18</td>
<td>+    <div class="col-xs pt15 flex pl35 flex-wrap"></td>
</tr>
<tr>
<td>19</td>
<td>+      <div class="flex flex-nowrap details"></td>
</tr>
<tr>
<td>20</td>
<td>+        <div class="flex w-100 flex-wrap between-xs"></td>
</tr>
<tr>
<td>21</td>
<td>+          <div></td>
</tr>
<tr>
<td>22</td>
<td>+            &lt;router-link</td>
</tr>
<tr>
<td>23</td>
<td>+              class=&quot;serif h4 name&quot;</td>
</tr>
<tr>
<td>24</td>
<td>+              :to=&quot;productLink&quot;</td>
</tr>
<tr>
<td>25</td>
<td>+              data-testid=&quot;productLink&quot;</td>
</tr>
<tr>
<td>26</td>
<td>+              @click.native=&quot;$store.commit('ui/setMicrocart', false)&quot;</td>
</tr>
<tr>
<td>27</td>
<td>+            &gt;</td>
</tr>
<tr>
<td>28</td>
<td>+              {{ product.name | htmlDecode }}</td>
</tr>
<tr>
<td>29</td>
<td>+            </router-link></td>
</tr>
<tr>
<td>30</td>
<td>+            <div class="h6 cl-bg-tertiary pt5 sku" data-testid="productSku"></td>
</tr>
<tr>
<td>31</td>
<td>+              {{ product.sku }}</td>
</tr>
<tr>
<td>32</td>
<td>+            </div></td>
</tr>
<tr>
<td>33</td>
<td>+            <div class="h6 cl-bg-tertiary pt5 options" v-if="isTotalsActive"></td>
</tr>
<tr>
<td>34</td>
<td>+              <div v-for="opt in product.totals.options" :key="opt.label"></td>
</tr>
<tr>
<td>35</td>
<td>+                <span class="opn">{{ opt.label }}: </span></td>
</tr>
<tr>
<td>36</td>
<td>+                <span class="opv" v-html="opt.value" /></td>
</tr>
<tr>
<td>37</td>
<td>+              </div></td>
</tr>
<tr>
<td>38</td>
<td>+            </div></td>
</tr>
<tr>
<td>39</td>
<td>+            <div class="h6 cl-bg-tertiary pt5 options" v-else-if="!editMode && product.options"></td>
</tr>
<tr>
<td>40</td>
<td>+              <div v-for="opt in product.options" :key="opt.label"></td>
</tr>
<tr>
<td>41</td>
<td>+                <span class="opn">{{ opt.label }}: </span></td>
</tr>
<tr>
<td>42</td>
<td>+                <span class="opv" v-html="opt.value" /></td>
</tr>
<tr>
<td>43</td>
<td>+              </div></td>
</tr>
<tr>
<td>44</td>
<td>+            </div></td>
</tr>
<tr>
<td>45</td>
<td>+            <div class="h6 pt5 cl-error" v-if="hasProductErrors"></td>
</tr>
<tr>
<td>46</td>
<td>+              {{ product.errors | formatProductMessages }}</td>
</tr>
<tr>
<td>47</td>
<td>+            </div></td>
</tr>
<tr>
<td>48</td>
<td>+            <div class="h6 pt5 cl-success" v-if="hasProductInfo && !hasProductErrors"></td>
</tr>
<tr>
<td>49</td>
<td>+              {{ product.info | formatProductMessages }}</td>
</tr>
<tr>
<td>50</td>
<td>+            </div></td>
</tr>
<tr>
<td>3251</td>
<td></div></td>
</tr>
<tr>
<td>52</td>
<td>+          &lt;product-quantity</td>
</tr>
<tr>
<td>53</td>
<td>+            class=&quot;h5 cl-accent lh25 qty&quot;</td>
</tr>
<tr>
<td>54</td>
<td>+            v-if=&quot;product.type_id !== 'grouped' &amp;&amp; product.type_id !== 'bundle'&quot;</td>
</tr>
<tr>
<td>55</td>
<td>+            :value=&quot;productQty&quot;</td>
</tr>
<tr>
<td>56</td>
<td>+            :max-quantity=&quot;maxQuantity&quot;</td>
</tr>
<tr>
<td>57</td>
<td>+            :loading=&quot;isStockInfoLoading&quot;</td>
</tr>
<tr>
<td>58</td>
<td>+            :is-simple-or-configurable=&quot;isSimpleOrConfigurable&quot;</td>
</tr>
<tr>
<td>59</td>
<td>+            @input=&quot;updateProductQty&quot;</td>
</tr>
<tr>
<td>60</td>
<td>+            @error=&quot;handleQuantityError&quot;</td>
</tr>
<tr>
<td>61</td>
<td>+          /&gt;</td>
</tr>
<tr>
<td>3362</td>
<td></div></td>
</tr>
<tr>
<td>34</td>
<td>-        &lt;div class=&quot;<s>h6</s> <s>cl</s>-<s>bg</s>-<s>tertiary</s> <s>pt5</s> <s>options</s>&quot;~~ v-else-if=&quot;product.options&quot;~~&gt;</td>
</tr>
<tr>
<td>35</td>
<td>-          &lt;div v-<s>for</s>=&quot;<s>opt</s> <s>in</s> <s>product.options</s>&quot;~~ :key=&quot;opt.label&quot;~~&gt;</td>
</tr>
<tr>
<td>36</td>
<td>-            &lt;span class=&quot;<s>opn</s>&quot;<s>&gt;{{</s> <s>opt</s>.~~label }}: &gt;</td>
</tr>
<tr>
<td>37</td>
<td>- ~~             <s>class=&quot;opv&quot;</s> <s>v-html=&quot;opt</s>.<s>value&quot;</s> <s>/&gt;</s></td>
</tr>
<tr>
<td>63</td>
<td>+        <div class="flex mr10 align-right start-xs between-sm prices"></td>
</tr>
<tr>
<td>64</td>
<td>+          <div class="prices" v-if="!displayItemDiscounts || !isOnline"></td>
</tr>
<tr>
<td>65</td>
<td>+            <span class="h4 serif cl-error price-special" v-if="product.special_price"></td>
</tr>
<tr>
<td>66</td>
<td>+              {{ product.price_incl_tax * product.qty | price }}</td>
</tr>
<tr>
<td>67</td>
<td>+            </span></td>
</tr>
<tr>
<td>68</td>
<td>+            <span class="h6 serif price-original" v-if="product.special_price"></td>
</tr>
<tr>
<td>69</td>
<td>+              {{ product.original_price_incl_tax * product.qty | price }}</td>
</tr>
<tr>
<td>70</td>
<td>+            </span></td>
</tr>
<tr>
<td>71</td>
<td>+            <span class="h4 serif price-regular" v-else data-testid="productPrice"></td>
</tr>
<tr>
<td>72</td>
<td>+              {{ (product.original_price_incl_tax ? product.original_price_incl_tax : product.price_incl_tax) * product.qty | price }}</td>
</tr>
<tr>
<td>73</td>
<td>+            </span></td>
</tr>
<tr>
<td>74</td>
<td>+          </div></td>
</tr>
<tr>
<td>75</td>
<td>+          <div class="prices" v-else-if="isOnline && product.totals"></td>
</tr>
<tr>
<td>76</td>
<td>+            <span class="h4 serif cl-error price-special" v-if="product.totals.discount_amount"></td>
</tr>
<tr>
<td>77</td>
<td>+              {{ product.totals.row_total - product.totals.discount_amount + product.totals.tax_amount | price }}</td>
</tr>
<tr>
<td>78</td>
<td>+            </span></td>
</tr>
<tr>
<td>79</td>
<td>+            <span class="h6 serif price-original" v-if="product.totals.discount_amount"></td>
</tr>
<tr>
<td>80</td>
<td>+              {{ product.totals.row_total_incl_tax | price }}</td>
</tr>
<tr>
<td>81</td>
<td>+            </span></td>
</tr>
<tr>
<td>82</td>
<td>+            <span class="h4 serif price-regular" v-if="!product.totals.discount_amount"></td>
</tr>
<tr>
<td>83</td>
<td>+              {{ product.totals.row_total_incl_tax | price }}</td>
</tr>
<tr>
<td>84</td>
<td>+            </span></td>
</tr>
<tr>
<td>85</td>
<td>+          </div></td>
</tr>
<tr>
<td>86</td>
<td>+          <div class="prices" v-else></td>
</tr>
<tr>
<td>87</td>
<td>+            <span class="h4 serif price-regular"></td>
</tr>
<tr>
<td>88</td>
<td>+              {{ (product.regular_price || product.price_incl_tax) * product.qty | price }}</td>
</tr>
<tr>
<td>89</td>
<td>+            </span></td>
</tr>
<tr>
<td>3890</td>
<td></div></td>
</tr>
<tr>
<td>3991</td>
<td></div></td>
</tr>
<tr>
<td>40</td>
<td>-        <div class="h6 pt5 cl-error" v-if="product.errors && Object.keys(product.errors).length > 0"></td>
</tr>
<tr>
<td>41</td>
<td>-          {{ product.errors | formatProductMessages }}</td>
</tr>
<tr>
<td>42</td>
<td>-        </div></td>
</tr>
<tr>
<td>43</td>
<td>-        <div class="h6 pt5 cl-success" v-if="product.info && Object.keys(product.info).length > 0 && Object.keys(product.errors).length === 0"></td>
</tr>
<tr>
<td>44</td>
<td>-          {{ product.info | formatProductMessages }}</td>
</tr>
<tr>
<td>45</td>
<td>-        </div></td>
</tr>
<tr>
<td>46</td>
<td>-      </div></td>
</tr>
<tr>
<td>47</td>
<td>-      <div class="h5 pt5 cl-accent lh25 qty"></td>
</tr>
<tr>
<td>48</td>
<td>-        &lt;base-input-number</td>
</tr>
<tr>
<td>49</td>
<td>-          :name=&quot;$t('Quantity')&quot;</td>
</tr>
<tr>
<td>50</td>
<td>-          :value=&quot;product.qty&quot;</td>
</tr>
<tr>
<td>51</td>
<td>-          @input=&quot;updateQuantity&quot;</td>
</tr>
<tr>
<td>52</td>
<td>-          :min=&quot;1&quot;</td>
</tr>
<tr>
<td>53</td>
<td>-        /&gt;</td>
</tr>
<tr>
<td>54</td>
<td>-      </div></td>
</tr>
<tr>
<td>55</td>
<td>-    </div></td>
</tr>
<tr>
<td>56</td>
<td>-    <div class="flex py15 mr10 align-right start-xs between-sm actions"></td>
</tr>
<tr>
<td>57</td>
<td>-      <div class="prices" v-if="!displayItemDiscounts || !isOnline"></td>
</tr>
<tr>
<td>58</td>
<td>-        <span class="h4 serif cl-error price-special" v-if="product.special_price"></td>
</tr>
<tr>
<td>59</td>
<td>-          {{ product.priceInclTax * product.qty | price }} </td>
</tr>
<tr>
<td>60</td>
<td>-        </span></td>
</tr>
<tr>
<td>61</td>
<td>-        <span class="h6 serif price-original" v-if="product.special_price"></td>
</tr>
<tr>
<td>62</td>
<td>-          {{ product.originalPriceInclTax * product.qty | price }}</td>
</tr>
<tr>
<td>63</td>
<td>-        </span></td>
</tr>
<tr>
<td>64</td>
<td>-        <span class="h4 serif price-regular" v-else data-testid="productPrice"></td>
</tr>
<tr>
<td>65</td>
<td>-          {{ (product.originalPriceInclTax ? product.originalPriceInclTax : product.priceInclTax) * product.qty | price }}</td>
</tr>
<tr>
<td>66</td>
<td>-        </span></td>
</tr>
<tr>
<td>67</td>
<td>-      </div></td>
</tr>
<tr>
<td>68</td>
<td>-      <div class="prices" v-else-if="isOnline && product.totals"></td>
</tr>
<tr>
<td>69</td>
<td>-        <span class="h4 serif cl-error price-special" v-if="product.totals.discount_amount"></td>
</tr>
<tr>
<td>70</td>
<td>-          {{ product.totals.row_total - product.totals.discount_amount + product.totals.tax_amount | price }} </td>
</tr>
<tr>
<td>71</td>
<td>-        </span></td>
</tr>
<tr>
<td>72</td>
<td>-        <span class="h6 serif price-original" v-if="product.totals.discount_amount"></td>
</tr>
<tr>
<td>73</td>
<td>-          {{ product.totals.row_total_incl_tax | price }}</td>
</tr>
<tr>
<td>74</td>
<td>-        </span></td>
</tr>
<tr>
<td>75</td>
<td>-        <span class="h4 serif price-regular" v-if="!product.totals.discount_amount"></td>
</tr>
<tr>
<td>76</td>
<td>-          {{ product.totals.row_total_incl_tax | price }}</td>
</tr>
<tr>
<td>77</td>
<td>-        </span></td>
</tr>
<tr>
<td>78</td>
<td>-      </div></td>
</tr>
<tr>
<td>79</td>
<td>-      <div class="prices" v-else></td>
</tr>
<tr>
<td>80</td>
<td>-        <span class="h4 serif price-regular"></td>
</tr>
<tr>
<td>81</td>
<td>-          {{ product.regular_price * product.qty | price }}</td>
</tr>
<tr>
<td>82</td>
<td>-        </span></td>
</tr>
<tr>
<td>8392</td>
<td></div></td>
</tr>
<tr>
<td>84</td>
<td>-      <div class="~~links~~"></td>
</tr>
<tr>
<td>85</td>
<td>-        &lt;div class=&quot;<s>mt5</s>&quot; <s>@click</s>=&quot;<s>removeItem</s>&quot;&gt;</td>
</tr>
<tr>
<td>86</td>
<td>-          &lt;<s>remove</s>-<s>button</s> <s>/&gt;</s></td>
</tr>
<tr>
<td>93</td>
<td>+      <div class="w-100 pb15 flex flex-wrap bottom-xs" v-if="editMode"></td>
</tr>
<tr>
<td>94</td>
<td>+        <div class="ml0 flex flex-wrap filters" v-if="productsAreReconfigurable"></td>
</tr>
<tr>
<td>95</td>
<td>+          <div class="h5 pt5 w-100" v-for="(option, index) in product.configurable_options" :key="index"></td>
</tr>
<tr>
<td>96</td>
<td>+            <div class="h6 cl-bg-tertiary mr10"></td>
</tr>
<tr>
<td>97</td>
<td>+              {{ option.label }}:</td>
</tr>
<tr>
<td>98</td>
<td>+            </div></td>
</tr>
<tr>
<td>99</td>
<td>+            <div class="flex flex-wrap pt5" v-if="option.label == 'Color' && editMode"></td>
</tr>
<tr>
<td>100</td>
<td>+              &lt;color-selector</td>
</tr>
<tr>
<td>101</td>
<td>+                v-for=&quot;filter in getAvailableFilters[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>102</td>
<td>+                v-if=&quot;isOptionAvailable(filter)&quot;</td>
</tr>
<tr>
<td>103</td>
<td>+                :key=&quot;filter.id&quot;</td>
</tr>
<tr>
<td>104</td>
<td>+                :variant=&quot;filter&quot;</td>
</tr>
<tr>
<td>105</td>
<td>+                :selected-filters=&quot;getSelectedOptions&quot;</td>
</tr>
<tr>
<td>106</td>
<td>+                @change=&quot;changeEditModeFilter&quot;</td>
</tr>
<tr>
<td>107</td>
<td>+              /&gt;</td>
</tr>
<tr>
<td>108</td>
<td>+            </div></td>
</tr>
<tr>
<td>109</td>
<td>+            <div class="flex flex-wrap pt5" v-else-if="option.label == 'Size' && editMode"></td>
</tr>
<tr>
<td>110</td>
<td>+              &lt;size-selector</td>
</tr>
<tr>
<td>111</td>
<td>+                class=&quot;mr10 mb10&quot;</td>
</tr>
<tr>
<td>112</td>
<td>+                v-for=&quot;filter in getAvailableFilters[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>113</td>
<td>+                v-if=&quot;isOptionAvailable(filter)&quot;</td>
</tr>
<tr>
<td>114</td>
<td>+                :key=&quot;filter.id&quot;</td>
</tr>
<tr>
<td>115</td>
<td>+                :variant=&quot;filter&quot;</td>
</tr>
<tr>
<td>116</td>
<td>+                :selected-filters=&quot;getSelectedOptions&quot;</td>
</tr>
<tr>
<td>117</td>
<td>+                @change=&quot;changeEditModeFilter&quot;</td>
</tr>
<tr>
<td>118</td>
<td>+              /&gt;</td>
</tr>
<tr>
<td>119</td>
<td>+            </div></td>
</tr>
<tr>
<td>120</td>
<td>+          </div></td>
</tr>
<tr>
<td>87121</td>
<td></div></td>
</tr>
<tr>
<td>122</td>
<td>+        &lt;button-full</td>
</tr>
<tr>
<td>123</td>
<td>+          class=&quot;update-button mb10 mr10&quot;</td>
</tr>
<tr>
<td>124</td>
<td>+          @click.native=&quot;updateProductVariant&quot;</td>
</tr>
<tr>
<td>125</td>
<td>+          :disabled=&quot;isUpdateCartDisabled&quot;</td>
</tr>
<tr>
<td>126</td>
<td>+        &gt;</td>
</tr>
<tr>
<td>127</td>
<td>+          {{ $t('Update item') }}</td>
</tr>
<tr>
<td>128</td>
<td>+        </button-full></td>
</tr>
<tr>
<td>129</td>
<td>+      </div></td>
</tr>
<tr>
<td>130</td>
<td>+      <div class="w-100 flex middle-xs actions" v-if="!editMode"></td>
</tr>
<tr>
<td>131</td>
<td>+        <edit-button class="mx5" @click="openEditMode" v-if="productsAreReconfigurable && !editMode" /></td>
</tr>
<tr>
<td>132</td>
<td>+        <remove-button class="mx5" @click="removeItem" /></td>
</tr>
<tr>
<td>88133</td>
<td></div></td>
</tr>
<tr>
<td>89134</td>
<td></div></td>
</tr>
<tr>
<td>90135</td>
<td></li></td>
</tr>
<tr>
<td>91136</td>
<td></template></td>
</tr>
</tbody>
</table>
<p>这里我们替换了模板。</p>
<ul>
<li>现在修复脚本如下<code>135</code>：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,131 +1,312 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><script></td>
</tr>
<tr>
<td>2</td>
<td>+ import { mapActions } from 'vuex'</td>
</tr>
<tr>
<td>23</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>4</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>5</td>
<td>+ import { formatProductLink } from '@vue-storefront/core/modules/url/helpers'</td>
</tr>
<tr>
<td>36</td>
<td>import Product from '@vue-storefront/core/compatibility/components/blocks/Microcart/Product'</td>
</tr>
<tr>
<td>47</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>+ import ProductQuantity from 'theme/components/core/ProductQuantity.vue'</td>
</tr>
<tr>
<td>59</td>
<td>import ProductImage from 'theme/components/core/ProductImage'</td>
</tr>
<tr>
<td>10</td>
<td>+ import ColorSelector from 'theme/components/core/ColorSelector.vue'</td>
</tr>
<tr>
<td>11</td>
<td>+ import SizeSelector from 'theme/components/core/SizeSelector.vue'</td>
</tr>
<tr>
<td>612</td>
<td>import RemoveButton from './RemoveButton'</td>
</tr>
<tr>
<td>7</td>
<td>- import <s>BaseInputNumber</s> from '<s>theme/components/core/blocks/Form/BaseInputNumber</s>'</td>
</tr>
<tr>
<td>13</td>
<td>+ import EditButton from './EditButton'</td>
</tr>
<tr>
<td>814</td>
<td>import { onlineHelper } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>15</td>
<td>+ import { ProductOption } from '@vue-storefront/core/modules/catalog/components/ProductOption'</td>
</tr>
<tr>
<td>16</td>
<td>+ import { getThumbnailForProduct, getProductConfiguration } from '@vue-storefront/core/modules/cart/helpers'</td>
</tr>
<tr>
<td>17</td>
<td>+ import ButtonFull from 'theme/components/theme/ButtonFull'</td>
</tr>
<tr>
<td>18</td>
<td>+ import EditMode from './EditMode'</td>
</tr>
<tr>
<td>919</td>
<td></td>
</tr>
<tr>
<td>1020</td>
<td>export default {</td>
</tr>
<tr>
<td>21</td>
<td>+  data () {</td>
</tr>
<tr>
<td>22</td>
<td>+    return {</td>
</tr>
<tr>
<td>23</td>
<td>+      maxQuantity: 0,</td>
</tr>
<tr>
<td>24</td>
<td>+      quantityError: false,</td>
</tr>
<tr>
<td>25</td>
<td>+      isStockInfoLoading: false</td>
</tr>
<tr>
<td>26</td>
<td>+    }</td>
</tr>
<tr>
<td>27</td>
<td>+  },</td>
</tr>
<tr>
<td>28</td>
<td>+  props: {</td>
</tr>
<tr>
<td>29</td>
<td>+    product: {</td>
</tr>
<tr>
<td>30</td>
<td>+      type: Object,</td>
</tr>
<tr>
<td>31</td>
<td>+      required: true</td>
</tr>
<tr>
<td>32</td>
<td>+    }</td>
</tr>
<tr>
<td>33</td>
<td>+  },</td>
</tr>
<tr>
<td>1134</td>
<td>components: {</td>
</tr>
<tr>
<td>1235</td>
<td>RemoveButton,</td>
</tr>
<tr>
<td>13</td>
<td>-    <s>BaseInputNumber</s>,</td>
</tr>
<tr>
<td>14</td>
<td>-    <s>ProductImage</s></td>
</tr>
<tr>
<td>36</td>
<td>+    ProductImage,</td>
</tr>
<tr>
<td>37</td>
<td>+    ColorSelector,</td>
</tr>
<tr>
<td>38</td>
<td>+    SizeSelector,</td>
</tr>
<tr>
<td>39</td>
<td>+    EditButton,</td>
</tr>
<tr>
<td>40</td>
<td>+    ButtonFull,</td>
</tr>
<tr>
<td>41</td>
<td>+    ProductQuantity</td>
</tr>
<tr>
<td>1542</td>
<td>},</td>
</tr>
<tr>
<td>16</td>
<td>-  mixins: [Product],</td>
</tr>
<tr>
<td>43</td>
<td>+  mixins: [Product, ProductOption, EditMode],</td>
</tr>
<tr>
<td>1744</td>
<td>computed: {</td>
</tr>
<tr>
<td>45</td>
<td>+    hasProductInfo () {</td>
</tr>
<tr>
<td>46</td>
<td>+      return this.product.info &amp;&amp; Object.keys(this.product.info).length &gt; 0</td>
</tr>
<tr>
<td>47</td>
<td>+    },</td>
</tr>
<tr>
<td>48</td>
<td>+    hasProductErrors () {</td>
</tr>
<tr>
<td>49</td>
<td>+      return this.product.errors &amp;&amp; Object.keys(this.product.errors).length &gt; 0</td>
</tr>
<tr>
<td>50</td>
<td>+    },</td>
</tr>
<tr>
<td>51</td>
<td>+    isTotalsActive () {</td>
</tr>
<tr>
<td>52</td>
<td>+      return this.isOnline &amp;&amp; !this.editMode &amp;&amp; this.product.totals &amp;&amp; this.product.totals.options</td>
</tr>
<tr>
<td>53</td>
<td>+    },</td>
</tr>
<tr>
<td>1854</td>
<td>isOnline () {</td>
</tr>
<tr>
<td>1955</td>
<td>return onlineHelper.isOnline</td>
</tr>
<tr>
<td>2056</td>
<td>},</td>
</tr>
<tr>
<td>57</td>
<td>+    productsAreReconfigurable () {</td>
</tr>
<tr>
<td>58</td>
<td>+      return config.cart.productsAreReconfigurable &amp;&amp; this.product.type_id === 'configurable' &amp;&amp; this.isOnline</td>
</tr>
<tr>
<td>59</td>
<td>+    },</td>
</tr>
<tr>
<td>60</td>
<td>+    displayItemDiscounts () {</td>
</tr>
<tr>
<td>61</td>
<td>+      return config.cart.displayItemDiscounts</td>
</tr>
<tr>
<td>62</td>
<td>+    },</td>
</tr>
<tr>
<td>2163</td>
<td>image () {</td>
</tr>
<tr>
<td>2264</td>
<td>return {</td>
</tr>
<tr>
<td>2365</td>
<td>loading: this.thumbnail,</td>
</tr>
<tr>
<td>2466</td>
<td>src: this.thumbnail</td>
</tr>
<tr>
<td>2567</td>
<td>}</td>
</tr>
<tr>
<td>68</td>
<td>+    },</td>
</tr>
<tr>
<td>69</td>
<td>+    thumbnail () {</td>
</tr>
<tr>
<td>70</td>
<td>+      return getThumbnailForProduct(this.product)</td>
</tr>
<tr>
<td>71</td>
<td>+    },</td>
</tr>
<tr>
<td>72</td>
<td>+    configuration () {</td>
</tr>
<tr>
<td>73</td>
<td>+      return getProductConfiguration(this.product)</td>
</tr>
<tr>
<td>74</td>
<td>+    },</td>
</tr>
<tr>
<td>75</td>
<td>+    productLink () {</td>
</tr>
<tr>
<td>76</td>
<td>+      return formatProductLink(this.product, currentStoreView().storeCode)</td>
</tr>
<tr>
<td>77</td>
<td>+    },</td>
</tr>
<tr>
<td>78</td>
<td>+    editMode () {</td>
</tr>
<tr>
<td>79</td>
<td>+      return this.getEditingProductId === this.product.id</td>
</tr>
<tr>
<td>80</td>
<td>+    },</td>
</tr>
<tr>
<td>81</td>
<td>+    productQty () {</td>
</tr>
<tr>
<td>82</td>
<td>+      return this.editMode ? this.getEditingQty : this.product.qty</td>
</tr>
<tr>
<td>83</td>
<td>+    },</td>
</tr>
<tr>
<td>84</td>
<td>+    isSimpleOrConfigurable () {</td>
</tr>
<tr>
<td>85</td>
<td>+      return ['simple', 'configurable'].includes(this.product.type_id)</td>
</tr>
<tr>
<td>86</td>
<td>+    },</td>
</tr>
<tr>
<td>87</td>
<td>+    isUpdateCartDisabled () {</td>
</tr>
<tr>
<td>88</td>
<td>+      return this.quantityError ||</td>
</tr>
<tr>
<td>89</td>
<td>+        this.isStockInfoLoading ||</td>
</tr>
<tr>
<td>90</td>
<td>+        (this.isOnline &amp;&amp; !this.maxQuantity &amp;&amp; this.isSimpleOrConfigurable)</td>
</tr>
<tr>
<td>2691</td>
<td>}</td>
</tr>
<tr>
<td>2792</td>
<td>},</td>
</tr>
<tr>
<td>28</td>
<td>-  <s>data</s> ~~() ~~{</td>
</tr>
<tr>
<td>29</td>
<td>-    <s>return</s> {</td>
</tr>
<tr>
<td>30</td>
<td>-      <s>displayItemDiscounts: config</s>.<s>cart.displayItemDiscounts</s></td>
</tr>
<tr>
<td>93</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>94</td>
<td>+    updateProductVariant () {</td>
</tr>
<tr>
<td>95</td>
<td>+      this.updateVariant()</td>
</tr>
<tr>
<td>96</td>
<td>+      this.closeEditMode()</td>
</tr>
<tr>
<td>97</td>
<td>+    },</td>
</tr>
<tr>
<td>98</td>
<td>+    updateProductQty (qty) {</td>
</tr>
<tr>
<td>99</td>
<td>+      if (this.editMode) {</td>
</tr>
<tr>
<td>100</td>
<td>+        this.editModeSetQty(qty)</td>
</tr>
<tr>
<td>101</td>
<td>+        return</td>
</tr>
<tr>
<td>102</td>
<td>+      }</td>
</tr>
<tr>
<td>103</td>
<td>+</td>
</tr>
<tr>
<td>104</td>
<td>+      this.updateQuantity(qty)</td>
</tr>
<tr>
<td>105</td>
<td>+    },</td>
</tr>
<tr>
<td>106</td>
<td>+    removeFromCart () {</td>
</tr>
<tr>
<td>107</td>
<td>+      this.$store.dispatch('cart/removeItem', { product: this.product })</td>
</tr>
<tr>
<td>108</td>
<td>+    },</td>
</tr>
<tr>
<td>109</td>
<td>+    updateQuantity (quantity) {</td>
</tr>
<tr>
<td>110</td>
<td>+      this.$store.dispatch('cart/updateQuantity', { product: this.product, qty: quantity })</td>
</tr>
<tr>
<td>111</td>
<td>+    },</td>
</tr>
<tr>
<td>112</td>
<td>+    async getQuantity (product) {</td>
</tr>
<tr>
<td>113</td>
<td>+      if (this.isStockInfoLoading) return // stock info is already loading</td>
</tr>
<tr>
<td>114</td>
<td>+      this.isStockInfoLoading = true</td>
</tr>
<tr>
<td>115</td>
<td>+      try {</td>
</tr>
<tr>
<td>116</td>
<td>+        const validProduct = product || this.product</td>
</tr>
<tr>
<td>117</td>
<td>+        const res = await this.$store.dispatch('stock/check', {</td>
</tr>
<tr>
<td>118</td>
<td>+          product: validProduct,</td>
</tr>
<tr>
<td>119</td>
<td>+          qty: this.productQty</td>
</tr>
<tr>
<td>120</td>
<td>+        })</td>
</tr>
<tr>
<td>121</td>
<td>+        return res.qty</td>
</tr>
<tr>
<td>122</td>
<td>+      } finally {</td>
</tr>
<tr>
<td>123</td>
<td>+        this.isStockInfoLoading = false</td>
</tr>
<tr>
<td>124</td>
<td>+      }</td>
</tr>
<tr>
<td>125</td>
<td>+    },</td>
</tr>
<tr>
<td>126</td>
<td>+    handleQuantityError (error) {</td>
</tr>
<tr>
<td>127</td>
<td>+      this.quantityError = error</td>
</tr>
<tr>
<td>128</td>
<td>+    },</td>
</tr>
<tr>
<td>129</td>
<td>+    async changeEditModeFilter (filter) {</td>
</tr>
<tr>
<td>130</td>
<td>+      const editedProduct = this.getEditedProduct(filter)</td>
</tr>
<tr>
<td>131</td>
<td>+      const maxQuantity = await this.getQuantity(editedProduct)</td>
</tr>
<tr>
<td>132</td>
<td>+      if (!maxQuantity) {</td>
</tr>
<tr>
<td>133</td>
<td>+        this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>134</td>
<td>+          type: 'error',</td>
</tr>
<tr>
<td>135</td>
<td>+          message: this.$t(</td>
</tr>
<tr>
<td>136</td>
<td>+            'The product is out of stock and cannot be added to the cart!'</td>
</tr>
<tr>
<td>137</td>
<td>+          ),</td>
</tr>
<tr>
<td>138</td>
<td>+          action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>139</td>
<td>+        })</td>
</tr>
<tr>
<td>140</td>
<td>+      } else if (maxQuantity &lt; this.productQty) {</td>
</tr>
<tr>
<td>141</td>
<td>+        this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>142</td>
<td>+          type: 'error',</td>
</tr>
<tr>
<td>143</td>
<td>+          message: this.$t('Only {maxQuantity} products of this type are available!', { maxQuantity }),</td>
</tr>
<tr>
<td>144</td>
<td>+          action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>145</td>
<td>+        })</td>
</tr>
<tr>
<td>146</td>
<td>+      } else {</td>
</tr>
<tr>
<td>147</td>
<td>+        this.maxQuantity = maxQuantity</td>
</tr>
<tr>
<td>148</td>
<td>+        this.editModeSetFilters(filter)</td>
</tr>
<tr>
<td>149</td>
<td>+      }</td>
</tr>
<tr>
<td>150</td>
<td>+    }</td>
</tr>
<tr>
<td>151</td>
<td>+  },</td>
</tr>
<tr>
<td>152</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>153</td>
<td>+    isOnline: {</td>
</tr>
<tr>
<td>154</td>
<td>+      async handler (isOnline) {</td>
</tr>
<tr>
<td>155</td>
<td>+        if (isOnline) {</td>
</tr>
<tr>
<td>156</td>
<td>+          const maxQuantity = await this.getQuantity()</td>
</tr>
<tr>
<td>157</td>
<td>+          this.maxQuantity = maxQuantity</td>
</tr>
<tr>
<td>158</td>
<td>+        }</td>
</tr>
<tr>
<td>159</td>
<td>+      },</td>
</tr>
<tr>
<td>160</td>
<td>+      immediate: true</td>
</tr>
<tr>
<td>31161</td>
<td>}</td>
</tr>
<tr>
<td>32162</td>
<td>}</td>
</tr>
<tr>
<td>33163</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>正如您在此处看到的，我们添加<code>EditMode</code>了<em>Microcart</em>。很多事情在这样做，如被认为是<code>color</code>，<code>size</code>，<code>option</code>，<em>multistores</em>等。</p>
<ul>
<li>修复<em>样式的</em>时间：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,131 +1,312 @@ <style lang="scss" scoped></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ @import '~theme/css/variables/colors';</td>
</tr>
<tr>
<td>2</td>
<td>+ @import '~theme/css/helpers/functions/color';</td>
</tr>
<tr>
<td>3</td>
<td>+  .blend {</td>
</tr>
<tr>
<td>4</td>
<td>+    flex: 0 0 150px;</td>
</tr>
<tr>
<td>5</td>
<td>+  }</td>
</tr>
<tr>
<td>6</td>
<td>+</td>
</tr>
<tr>
<td>17</td>
<td>.image {</td>
</tr>
<tr>
<td>28</td>
<td>mix-blend-mode: multiply;</td>
</tr>
<tr>
<td>39</td>
<td>vertical-align: top;</td>
</tr>
<tr>
<td></td>
<td>@@ -136,10 +317,9 @@ export default {</td>
</tr>
<tr>
<td>136317</td>
<td>}</td>
</tr>
<tr>
<td>137318</td>
<td></td>
</tr>
<tr>
<td>138319</td>
<td>.details {</td>
</tr>
<tr>
<td>139</td>
<td>-    flex~~-direction~~: <s>column</s>;</td>
</tr>
<tr>
<td>140</td>
<td>-    <s>@media (max-width</s>: <s>767px) {</s></td>
</tr>
<tr>
<td>141</td>
<td>- ~~      padding~~: <s>0</s> <s>10px 0 20px</s>;</td>
</tr>
<tr>
<td>320</td>
<td>+    flex: 1 1 auto;</td>
</tr>
<tr>
<td>321</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>322</td>
<td>+    flex-flow: row wrap;</td>
</tr>
<tr>
<td>142</td>
<td>-    }</td>
</tr>
<tr>
<td>143323</td>
<td>}</td>
</tr>
<tr>
<td>144324</td>
<td></td>
</tr>
<tr>
<td>145325</td>
<td>.name {</td>
</tr>
<tr>
<td></td>
<td>@@ -155,22 +335,23 @@ export default {</td>
</tr>
<tr>
<td>155335</td>
<td>}</td>
</tr>
<tr>
<td>156336</td>
<td></td>
</tr>
<tr>
<td>157337</td>
<td>.qty {</td>
</tr>
<tr>
<td>338</td>
<td>+    padding-right: 30px;</td>
</tr>
<tr>
<td>339</td>
<td>+</td>
</tr>
<tr>
<td>158340</td>
<td>@media (max-width: 767px) {</td>
</tr>
<tr>
<td>159341</td>
<td>font-size: 12px;</td>
</tr>
<tr>
<td>160342</td>
<td>}</td>
</tr>
<tr>
<td>161343</td>
<td>}</td>
</tr>
<tr>
<td>162344</td>
<td></td>
</tr>
<tr>
<td>163345</td>
<td>.actions {</td>
</tr>
<tr>
<td>346</td>
<td>+    margin: 0 -5px;</td>
</tr>
<tr>
<td>347</td>
<td>+  }</td>
</tr>
<tr>
<td>348</td>
<td>+</td>
</tr>
<tr>
<td>349</td>
<td>+  .prices {</td>
</tr>
<tr>
<td>164350</td>
<td>flex-direction: column;</td>
</tr>
<tr>
<td>165351</td>
<td>@media (max-width: 767px) {</td>
</tr>
<tr>
<td>166352</td>
<td>padding: 0;</td>
</tr>
<tr>
<td>167353</td>
<td>font-size: 12px;</td>
</tr>
<tr>
<td>168354</td>
<td>}</td>
</tr>
<tr>
<td>169</td>
<td>-    .links {</td>
</tr>
<tr>
<td>170</td>
<td>-      @media (max-width: 767px) {</td>
</tr>
<tr>
<td>171</td>
<td>-        margin-top: 20px;</td>
</tr>
<tr>
<td>172</td>
<td>-      }</td>
</tr>
<tr>
<td>173</td>
<td>-    }</td>
</tr>
<tr>
<td>174355</td>
<td>}</td>
</tr>
<tr>
<td>175356</td>
<td></td>
</tr>
<tr>
<td>176357</td>
<td>.price-special {</td>
</tr>
<tr>
<td></td>
<td>@@ -183,12 +364,6 @@ export default {</td>
</tr>
<tr>
<td>183364</td>
<td>text-decoration: line-through;</td>
</tr>
<tr>
<td>184365</td>
<td>}</td>
</tr>
<tr>
<td>185366</td>
<td></td>
</tr>
<tr>
<td>186</td>
<td>-  .price-regular {</td>
</tr>
<tr>
<td>187</td>
<td>-    @media (max-width: 767px) {</td>
</tr>
<tr>
<td>188</td>
<td>-      font-size: 14px;</td>
</tr>
<tr>
<td>189</td>
<td>-    }</td>
</tr>
<tr>
<td>190</td>
<td>-  }</td>
</tr>
<tr>
<td>191</td>
<td>-</td>
</tr>
<tr>
<td>192367</td>
<td>input {</td>
</tr>
<tr>
<td>193368</td>
<td>width: 30px;</td>
</tr>
<tr>
<td>194369</td>
<td>}</td>
</tr>
<tr>
<td></td>
<td>@@ -196,4 +371,23 @@ export default {</td>
</tr>
<tr>
<td>196371</td>
<td>.flex-nowrap {</td>
</tr>
<tr>
<td>197372</td>
<td>flex-wrap: nowrap;</td>
</tr>
<tr>
<td>198373</td>
<td>}</td>
</tr>
<tr>
<td>374</td>
<td>+</td>
</tr>
<tr>
<td>375</td>
<td>+  .flex-wrap {</td>
</tr>
<tr>
<td>376</td>
<td>+    flex-wrap: wrap;</td>
</tr>
<tr>
<td>377</td>
<td>+  }</td>
</tr>
<tr>
<td>378</td>
<td>+</td>
</tr>
<tr>
<td>379</td>
<td>+  .edit-mode {</td>
</tr>
<tr>
<td>380</td>
<td>+    border-bottom: 1px solid color(white-smoke);</td>
</tr>
<tr>
<td>381</td>
<td>+  }</td>
</tr>
<tr>
<td>382</td>
<td>+</td>
</tr>
<tr>
<td>383</td>
<td>+  .filters {</td>
</tr>
<tr>
<td>384</td>
<td>+    flex: 1 1 200px;</td>
</tr>
<tr>
<td>385</td>
<td>+  }</td>
</tr>
<tr>
<td>386</td>
<td>+</td>
</tr>
<tr>
<td>387</td>
<td>+  .update-button {</td>
</tr>
<tr>
<td>388</td>
<td>+    font-size: 14px;</td>
</tr>
<tr>
<td>389</td>
<td>+    min-width: 150px;</td>
</tr>
<tr>
<td>390</td>
<td>+    width: 150px;</td>
</tr>
<tr>
<td>391</td>
<td>+    padding: 10px;</td>
</tr>
<tr>
<td>392</td>
<td>+  }</td>
</tr>
<tr>
<td>199393</td>
<td></style></td>
</tr>
</tbody>
</table>
<ul>
<li>移至下一个文件<code>./src/themes/degi/components/core/blocks/Microcart/RemoveButton.vue</code>并按<code>2</code>如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Microcart/RemoveButton.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,5 +1,5 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  <button class="brdr-none bg-cl-transparent p0 middle-xs inline-flex cl-secondary"></td>
</tr>
<tr>
<td>2</td>
<td>+  <button @click="$emit('click')" class="brdr-none bg-cl-transparent p0 middle-xs inline-flex cl-secondary"></td>
</tr>
<tr>
<td>33</td>
<td><span class="hidden-xs h6"></td>
</tr>
<tr>
<td>44</td>
<td>{{ $t('Remove') }}</td>
</tr>
<tr>
<td>55</td>
<td></span></td>
</tr>
</tbody>
</table>
<p>这里我们添加了<em>Vue</em>点击事件。</p>
<h4 id="_9-让我们确认目前在您的浏览器上是否正确。打开它然后瞧" tabindex="-1"><a class="header-anchor" href="#_9-让我们确认目前在您的浏览器上是否正确。打开它然后瞧" aria-hidden="true">#</a> <a href="#_9-let-s-confirm-if-we-got-it-right-so-far-on-your-browser-open-it-then-voila">#</a>9. 让我们确认目前在您的浏览器上是否正确。打开它然后<em>瞧！</em>：</h4>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/editmodeInMC.a3cc63a0.png" alt="editmode_in_mc_borderline"></p>
<p>现在您可以在<em>Microcart 中</em>为您的产品编辑选项。</p>
<h4 id="_10-下一个目标是breadcrumb。现在breadcrumb支持-multistore-功能。" tabindex="-1"><a class="header-anchor" href="#_10-下一个目标是breadcrumb。现在breadcrumb支持-multistore-功能。" aria-hidden="true">#</a> <a href="#_10-next-target-is-breadcrumb-now-breadcrumb-supports-the-multistore-feature">#</a>10. 下一个目标是<em>Breadcrumb</em>。现在<em>Breadcrumb</em>支持 multistore 功能。</h4>
<ul>
<li>打开<code>./src/themes/degi/components/core/Breadcrumbs.vue</code>并修复它们，如下所示：</li>
</ul>
<p>src/themes/degi/components/core/Breadcrumbs.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,20 +1,52 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div class="breadcrumbs h5 cl-gray"></td>
</tr>
<tr>
<td>3</td>
<td>-    <span v-for="link in ~~routes~~" :key="link.route_link"></td>
</tr>
<tr>
<td>4</td>
<td>-      <router-link :to="~~localizedRoute(~~link.route_link~~)~~"></td>
</tr>
<tr>
<td>3</td>
<td>+    <span v-for="link in paths" :key="link.route_link"></td>
</tr>
<tr>
<td>4</td>
<td>+      <router-link :to="link.route_link"></td>
</tr>
<tr>
<td>55</td>
<td>{{ link.name | htmlDecode }}</td>
</tr>
<tr>
<td>66</td>
<td></router-link> /</td>
</tr>
<tr>
<td>77</td>
<td></span></td>
</tr>
<tr>
<td>88</td>
<td><span class="cl-mine-shaft"></td>
</tr>
<tr>
<td>9</td>
<td>-      {{ <s>activeRoute</s> | htmlDecode }}</td>
</tr>
<tr>
<td>9</td>
<td>+      {{ current | htmlDecode }}</td>
</tr>
<tr>
<td>1010</td>
<td></span></td>
</tr>
<tr>
<td>1111</td>
<td></div></td>
</tr>
<tr>
<td>1212</td>
<td></template></td>
</tr>
<tr>
<td>1313</td>
<td></td>
</tr>
<tr>
<td>1414</td>
<td><script></td>
</tr>
<tr>
<td>15</td>
<td>- import <s>Breadcrumbs</s> from '@vue-storefront/core/<s>compatibility</s>/<s>components/Breadcrumbs</s>'</td>
</tr>
<tr>
<td>15</td>
<td>+ import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>16</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>1617</td>
<td></td>
</tr>
<tr>
<td>1718</td>
<td>export default {</td>
</tr>
<tr>
<td>18</td>
<td>-  <s>mixins</s>: <s>[Breadcrumbs]</s></td>
</tr>
<tr>
<td>19</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>20</td>
<td>+    paths () {</td>
</tr>
<tr>
<td>21</td>
<td>+      const routes = this.routes ? this.routes : this.$store.state.breadcrumbs.routes</td>
</tr>
<tr>
<td>22</td>
<td>+</td>
</tr>
<tr>
<td>23</td>
<td>+      if (this.withHomepage) {</td>
</tr>
<tr>
<td>24</td>
<td>+        return [</td>
</tr>
<tr>
<td>25</td>
<td>+          { name: i18n.t('Homepage'), route_link: localizedRoute('/', currentStoreView().storeCode) },</td>
</tr>
<tr>
<td>26</td>
<td>+          ...routes</td>
</tr>
<tr>
<td>27</td>
<td>+        ]</td>
</tr>
<tr>
<td>28</td>
<td>+      }</td>
</tr>
<tr>
<td>29</td>
<td>+</td>
</tr>
<tr>
<td>30</td>
<td>+      return routes</td>
</tr>
<tr>
<td>31</td>
<td>+    },</td>
</tr>
<tr>
<td>32</td>
<td>+    current () {</td>
</tr>
<tr>
<td>33</td>
<td>+      return this.activeRoute || this.$store.state.breadcrumbs.current</td>
</tr>
<tr>
<td>34</td>
<td>+    }</td>
</tr>
<tr>
<td>35</td>
<td>+  },</td>
</tr>
<tr>
<td>36</td>
<td>+  props: {</td>
</tr>
<tr>
<td>37</td>
<td>+    routes: {</td>
</tr>
<tr>
<td>38</td>
<td>+      type: Array,</td>
</tr>
<tr>
<td>39</td>
<td>+      required: false,</td>
</tr>
<tr>
<td>40</td>
<td>+      default: null</td>
</tr>
<tr>
<td>41</td>
<td>+    },</td>
</tr>
<tr>
<td>42</td>
<td>+    withHomepage: {</td>
</tr>
<tr>
<td>43</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>44</td>
<td>+      default: false</td>
</tr>
<tr>
<td>45</td>
<td>+    },</td>
</tr>
<tr>
<td>46</td>
<td>+    activeRoute: {</td>
</tr>
<tr>
<td>47</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>48</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>49</td>
<td>+    }</td>
</tr>
<tr>
<td>50</td>
<td>+  }</td>
</tr>
<tr>
<td>1951</td>
<td>}</td>
</tr>
<tr>
<td>2052</td>
<td></script></td>
</tr>
</tbody>
</table>
<p>如您所见，<code>paths</code>是为分配店面而<em>计算</em>的。现在，单击面包屑链接会将您带到指定商店视图的链接。</p>
<h4 id="_11-下一个要处理的大块是category-from-pages。" tabindex="-1"><a class="header-anchor" href="#_11-下一个要处理的大块是category-from-pages。" aria-hidden="true">#</a> <a href="#_11-the-next-big-chunk-to-take-care-of-is-category-from-pages">#</a>11. 下一个要处理的大块是<em>Category</em> from <em>pages</em>。</h4>
<ul>
<li>去<code>./src/themes/degi/pages/Category.vue</code>检修它如下：</li>
</ul>
<p>src/themes/degi/pages/Category.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,17 +2,21 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td><div id="category"></td>
</tr>
<tr>
<td>33</td>
<td><header class="bg-cl-secondary py35 pl20"></td>
</tr>
<tr>
<td>44</td>
<td><div class="container"></td>
</tr>
<tr>
<td>5</td>
<td>-        <breadcrumbs :routes="~~breadcrumbs.routes~~" :active-route="~~category~~.name" /></td>
</tr>
<tr>
<td>5</td>
<td>+        <breadcrumbs :routes="getBreadcrumbs" :active-route="getCurrentCategory.name" /></td>
</tr>
<tr>
<td>66</td>
<td><div class="row middle-sm"></td>
</tr>
<tr>
<td>77</td>
<td><h1 class="col-sm-8 category-title mb10"></td>
</tr>
<tr>
<td>8</td>
<td>-            {{ <s>category</s>.name }}</td>
</tr>
<tr>
<td>8</td>
<td>+            {{ getCurrentCategory.name }}</td>
</tr>
<tr>
<td>99</td>
<td></h1></td>
</tr>
<tr>
<td>1010</td>
<td><div class="sorting col-sm-2 align-right mt50"></td>
</tr>
<tr>
<td>1111</td>
<td><label class="mr10">{{ $t('Columns') }}:</label></td>
</tr>
<tr>
<td>1212</td>
<td><columns @change-column="columnChange" /></td>
</tr>
<tr>
<td>1313</td>
<td></div></td>
</tr>
<tr>
<td>1414</td>
<td><div class="sorting col-sm-2 align-right mt50"></td>
</tr>
<tr>
<td>15</td>
<td>-            &lt;sort-by~~ :has-label=&quot;true&quot; /&gt;~~</td>
</tr>
<tr>
<td>15</td>
<td>+            &lt;sort-by</td>
</tr>
<tr>
<td>16</td>
<td>+              :has-label=&quot;true&quot;</td>
</tr>
<tr>
<td>17</td>
<td>+              @change=&quot;changeFilter&quot;</td>
</tr>
<tr>
<td>18</td>
<td>+              :value=&quot;getCurrentSearchQuery.sort&quot;</td>
</tr>
<tr>
<td>19</td>
<td>+            /&gt;</td>
</tr>
<tr>
<td>1620</td>
<td></div></td>
</tr>
<tr>
<td>1721</td>
<td></div></td>
</tr>
<tr>
<td>1822</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -25,7 +29,10 @@</td>
</tr>
<tr>
<td>2529</td>
<td>{{ $t('Filters') }}</td>
</tr>
<tr>
<td>2630</td>
<td></button></td>
</tr>
<tr>
<td>2731</td>
<td><div class="mobile-sorting col-xs-6 mt25"></td>
</tr>
<tr>
<td>28</td>
<td>-            &lt;sort-by~~ /&gt;~~</td>
</tr>
<tr>
<td>32</td>
<td>+            &lt;sort-by</td>
</tr>
<tr>
<td>33</td>
<td>+              @change=&quot;changeFilter&quot;</td>
</tr>
<tr>
<td>34</td>
<td>+              :value=&quot;getCurrentSearchQuery.sort&quot;</td>
</tr>
<tr>
<td>35</td>
<td>+            /&gt;</td>
</tr>
<tr>
<td>2936</td>
<td></div></td>
</tr>
<tr>
<td>3037</td>
<td></div></td>
</tr>
<tr>
<td>3138</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -33,13 +40,13 @@</td>
</tr>
<tr>
<td>3340</td>
<td><div class="container pb60"></td>
</tr>
<tr>
<td>3441</td>
<td><div class="row m0 pt15"></td>
</tr>
<tr>
<td>3542</td>
<td><div class="col-md-3 start-xs category-filters"></td>
</tr>
<tr>
<td>36</td>
<td>-          <sidebar :filters="~~filters.available~~" /></td>
</tr>
<tr>
<td>43</td>
<td>+          <sidebar :filters="getAvailableFilters" @changeFilter="changeFilter" /></td>
</tr>
<tr>
<td>3744</td>
<td></div></td>
</tr>
<tr>
<td>3845</td>
<td><div class="col-md-3 start-xs mobile-filters" v-show="mobileFilters"></td>
</tr>
<tr>
<td>3946</td>
<td><div class="close-container absolute w-100"></td>
</tr>
<tr>
<td>4047</td>
<td><i class="material-icons p15 close cl-accent" @click="closeFilters">close</i></td>
</tr>
<tr>
<td>4148</td>
<td></div></td>
</tr>
<tr>
<td>42</td>
<td>-          <sidebar class="mobile-filters-body" :filters="~~filters.available~~" /></td>
</tr>
<tr>
<td>49</td>
<td>+          <sidebar class="mobile-filters-body" :filters="getAvailableFilters" @changeFilter="changeFilter" /></td>
</tr>
<tr>
<td>4350</td>
<td><div class="relative pb20 pt15"></td>
</tr>
<tr>
<td>4451</td>
<td><div class="brdr-top-1 brdr-cl-primary absolute divider w-100" /></td>
</tr>
<tr>
<td>4552</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -52,7 +59,7 @@</td>
</tr>
<tr>
<td>5259</td>
<td></div></td>
</tr>
<tr>
<td>5360</td>
<td><div class="col-md-9 px10 border-box products-list"></td>
</tr>
<tr>
<td>5461</td>
<td><p class="col-xs-12 end-md m0 pb20 cl-secondary"></td>
</tr>
<tr>
<td>55</td>
<td>-            {{ ~~productsTotal }} {{ ~~$t('items') }}</td>
</tr>
<tr>
<td>62</td>
<td>+            {{ $t('{count} items', { count: getCategoryProductsTotal }) }}</td>
</tr>
<tr>
<td>5663</td>
<td></p></td>
</tr>
<tr>
<td>5764</td>
<td><div v-if="isCategoryEmpty" class="hidden-xs"></td>
</tr>
<tr>
<td>5865</td>
<td><h4 data-testid="noProductsInfo"></td>
</tr>
<tr>
<td></td>
<td>@@ -60,7 +67,10 @@</td>
</tr>
<tr>
<td>6067</td>
<td></h4></td>
</tr>
<tr>
<td>6168</td>
<td><p>{{ $t('Please change Your search criteria and try again. If still not finding anything relevant, please visit the Home page and try out some of our bestsellers!') }}</p></td>
</tr>
<tr>
<td>6269</td>
<td></div></td>
</tr>
<tr>
<td>63</td>
<td>-          &lt;<s>product</s>-<s>listing</s> :<s>columns</s>=&quot;<s>defaultColumn</s>&quot; <s>:products</s>=&quot;<s>products</s>&quot;~~ /&gt;~~</td>
</tr>
<tr>
<td>70</td>
<td>+          <lazy-hydrate :trigger-hydration="!loading" v-if="isLazyHydrateEnabled"></td>
</tr>
<tr>
<td>71</td>
<td>+            <product-listing :columns="defaultColumn" :products="getCategoryProducts" /></td>
</tr>
<tr>
<td>72</td>
<td>+          </lazy-hydrate></td>
</tr>
<tr>
<td>73</td>
<td>+          <product-listing v-else :columns="defaultColumn" :products="getCategoryProducts" /></td>
</tr>
<tr>
<td>6474</td>
<td></div></td>
</tr>
<tr>
<td>6575</td>
<td></div></td>
</tr>
<tr>
<td>6676</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -68,17 +78,38 @@</td>
</tr>
<tr>
<td>6878</td>
<td></template></td>
</tr>
<tr>
<td>6979</td>
<td></td>
</tr>
<tr>
<td>7080</td>
<td><script></td>
</tr>
<tr>
<td>71</td>
<td>- import <s>Category</s> from '~~@~~vue-<s>storefront/core/pages/Category</s>'</td>
</tr>
<tr>
<td>81</td>
<td>+ import LazyHydrate from 'vue-lazy-hydration'</td>
</tr>
<tr>
<td>7282</td>
<td>import Sidebar from '../components/core/blocks/Category/Sidebar.vue'</td>
</tr>
<tr>
<td>7383</td>
<td>import ProductListing from '../components/core/ProductListing.vue'</td>
</tr>
<tr>
<td>7484</td>
<td>import Breadcrumbs from '../components/core/Breadcrumbs.vue'</td>
</tr>
<tr>
<td>7585</td>
<td>import SortBy from '../components/core/SortBy.vue'</td>
</tr>
<tr>
<td>86</td>
<td>+ import { isServer } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>87</td>
<td>+ import { getSearchOptionsFromRouteParams } from '@vue-storefront/core/modules/catalog-next/helpers/categoryHelpers'</td>
</tr>
<tr>
<td>88</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>7689</td>
<td>import Columns from '../components/core/Columns.vue'</td>
</tr>
<tr>
<td>7790</td>
<td>import ButtonFull from 'theme/components/theme/ButtonFull.vue'</td>
</tr>
<tr>
<td>78</td>
<td>- ~~// ~~import <s>builder</s> from '<s>bodybuilder</s>'</td>
</tr>
<tr>
<td>91</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>92</td>
<td>+ import onBottomScroll from '@vue-storefront/core/mixins/onBottomScroll'</td>
</tr>
<tr>
<td>93</td>
<td>+ import rootStore from '@vue-storefront/core/store';</td>
</tr>
<tr>
<td>94</td>
<td>+ import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'</td>
</tr>
<tr>
<td>95</td>
<td>+</td>
</tr>
<tr>
<td>96</td>
<td>+ const composeInitialPageState = async (store, route, forceLoad = false) =&gt; {</td>
</tr>
<tr>
<td>97</td>
<td>+  try {</td>
</tr>
<tr>
<td>98</td>
<td>+    const filters = getSearchOptionsFromRouteParams(route.params)</td>
</tr>
<tr>
<td>99</td>
<td>+    const cachedCategory = store.getters<a href="route.path">'category-next/getCategoryFrom'</a></td>
</tr>
<tr>
<td>100</td>
<td>+    const currentCategory = cachedCategory &amp;&amp; !forceLoad ? cachedCategory : await store.dispatch('category-next/loadCategory', { filters })</td>
</tr>
<tr>
<td>101</td>
<td>+    await store.dispatch('category-next/loadCategoryProducts', {route, category: currentCategory})</td>
</tr>
<tr>
<td>102</td>
<td>+    const breadCrumbsLoader = store.dispatch('category-next/loadCategoryBreadcrumbs', currentCategory)</td>
</tr>
<tr>
<td>103</td>
<td>+    if (isServer) await breadCrumbsLoader</td>
</tr>
<tr>
<td>104</td>
<td>+    catalogHooksExecutors.categoryPageVisited(currentCategory)</td>
</tr>
<tr>
<td>105</td>
<td>+  } catch (e) {</td>
</tr>
<tr>
<td>106</td>
<td>+    console.error('Problem with setting Category initial data!', e)</td>
</tr>
<tr>
<td>107</td>
<td>+  }</td>
</tr>
<tr>
<td>108</td>
<td>+ }</td>
</tr>
<tr>
<td>79109</td>
<td></td>
</tr>
<tr>
<td>80110</td>
<td>export default {</td>
</tr>
<tr>
<td>81111</td>
<td>components: {</td>
</tr>
<tr>
<td>112</td>
<td>+    LazyHydrate,</td>
</tr>
<tr>
<td>82113</td>
<td>ButtonFull,</td>
</tr>
<tr>
<td>83114</td>
<td>ProductListing,</td>
</tr>
<tr>
<td>84115</td>
<td>Breadcrumbs,</td>
</tr>
<tr>
<td></td>
<td>@@ -86,17 +117,52 @@ export default {</td>
</tr>
<tr>
<td>86117</td>
<td>SortBy,</td>
</tr>
<tr>
<td>87118</td>
<td>Columns</td>
</tr>
<tr>
<td>88119</td>
<td>},</td>
</tr>
<tr>
<td>120</td>
<td>+  mixins: [onBottomScroll],</td>
</tr>
<tr>
<td>89121</td>
<td>data () {</td>
</tr>
<tr>
<td>90122</td>
<td>return {</td>
</tr>
<tr>
<td>91123</td>
<td>mobileFilters: false,</td>
</tr>
<tr>
<td>92</td>
<td>-      defaultColumn: 3</td>
</tr>
<tr>
<td>124</td>
<td>+      defaultColumn: 3,</td>
</tr>
<tr>
<td>125</td>
<td>+      loadingProducts: false,</td>
</tr>
<tr>
<td>126</td>
<td>+      loading: true</td>
</tr>
<tr>
<td>127</td>
<td>+    }</td>
</tr>
<tr>
<td>128</td>
<td>+  },</td>
</tr>
<tr>
<td>129</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>130</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>131</td>
<td>+      getCurrentSearchQuery: 'category-next/getCurrentSearchQuery',</td>
</tr>
<tr>
<td>132</td>
<td>+      getCategoryProducts: 'category-next/getCategoryProducts',</td>
</tr>
<tr>
<td>133</td>
<td>+      getCurrentCategory: 'category-next/getCurrentCategory',</td>
</tr>
<tr>
<td>134</td>
<td>+      getCategoryProductsTotal: 'category-next/getCategoryProductsTotal',</td>
</tr>
<tr>
<td>135</td>
<td>+      getAvailableFilters: 'category-next/getAvailableFilters'</td>
</tr>
<tr>
<td>136</td>
<td>+    }),</td>
</tr>
<tr>
<td>137</td>
<td>+    isLazyHydrateEnabled () {</td>
</tr>
<tr>
<td>138</td>
<td>+      return config.ssr.lazyHydrateFor.includes('category-next.products')</td>
</tr>
<tr>
<td>139</td>
<td>+    },</td>
</tr>
<tr>
<td>140</td>
<td>+    isCategoryEmpty () {</td>
</tr>
<tr>
<td>141</td>
<td>+      return this.getCategoryProductsTotal === 0</td>
</tr>
<tr>
<td>142</td>
<td>+    },</td>
</tr>
<tr>
<td>143</td>
<td>+    getBreadcrumbs () {</td>
</tr>
<tr>
<td>144</td>
<td>+      return this.$store.getters['category-next/getBreadcrumbs'].filter(breadcrumb =&gt; breadcrumb.name !== this.getCurrentCategory.name)</td>
</tr>
<tr>
<td>93145</td>
<td>}</td>
</tr>
<tr>
<td>94146</td>
<td>},</td>
</tr>
<tr>
<td>95147</td>
<td>async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data - and it's always executed before parent component methods</td>
</tr>
<tr>
<td>96</td>
<td>-    await store~~.dispatch('category/mergeSearchOptions'~~, <s>{ // this is just an example how can you modify the search criteria in child components</s></td>
</tr>
<tr>
<td>97</td>
<td>- ~~      sort: store.state.config.products.defaultSortBy.attribute + (store.state.config.products.defaultSortBy.order ? ':' + store.state.config.products.defaultSortBy.order : '')~~</td>
</tr>
<tr>
<td>98</td>
<td>- ~~      //~~ <s>searchProductQuery:</s> <s>builder</s>(<s>).query('range'</s>, <s>'price'</s>, <s>{ 'gt': 0 }</s>)<s>.andFilter('range',</s> <s>'visibility', <s>{</s> 'gte': 2, 'lte': 4 }) // this is an example on how to modify the ES query, please take a look at the @vue-storefront/core/helpers for refernce on how to build valid query</s></td>
</tr>
<tr>
<td>99</td>
<td>-    <s>}</s>)</td>
</tr>
<tr>
<td>148</td>
<td>+    await composeInitialPageState(store, route)</td>
</tr>
<tr>
<td>149</td>
<td>+  },</td>
</tr>
<tr>
<td>150</td>
<td>+  async beforeRouteEnter (to, from, next) {</td>
</tr>
<tr>
<td>151</td>
<td>+    if (isServer) next() // SSR no need to invoke SW caching here</td>
</tr>
<tr>
<td>152</td>
<td>+    else if (!from.name) { // SSR but client side invocation, we need to cache products and invoke requests from asyncData for offline support</td>
</tr>
<tr>
<td>153</td>
<td>+      next(async vm =&gt; {</td>
</tr>
<tr>
<td>154</td>
<td>+        vm.loading = true</td>
</tr>
<tr>
<td>155</td>
<td>+        await composeInitialPageState(vm.$store, to, true)</td>
</tr>
<tr>
<td>156</td>
<td>+        await vm.$store.dispatch('category-next/cacheProducts', { route: to }) // await here is because we must wait for the hydration</td>
</tr>
<tr>
<td>157</td>
<td>+        vm.loading = false</td>
</tr>
<tr>
<td>158</td>
<td>+      })</td>
</tr>
<tr>
<td>159</td>
<td>+    } else { // Pure CSR, with no initial category state</td>
</tr>
<tr>
<td>160</td>
<td>+      next(async vm =&gt; {</td>
</tr>
<tr>
<td>161</td>
<td>+        vm.loading = true</td>
</tr>
<tr>
<td>162</td>
<td>+        vm.$store.dispatch('category-next/cacheProducts', { route: to })</td>
</tr>
<tr>
<td>163</td>
<td>+        vm.loading = false</td>
</tr>
<tr>
<td>164</td>
<td>+      })</td>
</tr>
<tr>
<td>165</td>
<td>+    }</td>
</tr>
<tr>
<td>100166</td>
<td>},</td>
</tr>
<tr>
<td>101167</td>
<td>methods: {</td>
</tr>
<tr>
<td>102168</td>
<td>openFilters () {</td>
</tr>
<tr>
<td></td>
<td>@@ -105,18 +171,24 @@ export default {</td>
</tr>
<tr>
<td>105171</td>
<td>closeFilters () {</td>
</tr>
<tr>
<td>106172</td>
<td>this.mobileFilters = false</td>
</tr>
<tr>
<td>107173</td>
<td>},</td>
</tr>
<tr>
<td>108</td>
<td>-    <s>notify</s> () {</td>
</tr>
<tr>
<td>109</td>
<td>-      this.$store.dispatch('<s>notification</s>/<s>spawnNotification</s>', <s>{</s></td>
</tr>
<tr>
<td>174</td>
<td>+    async changeFilter (filterVariant) {</td>
</tr>
<tr>
<td>175</td>
<td>+      this.$store.dispatch('category-next/switchSearchFilters', [filterVariant])</td>
</tr>
<tr>
<td>110</td>
<td>-        type: 'error',</td>
</tr>
<tr>
<td>111</td>
<td>-        message: this.$t('Please select the field which You like to sort by'),</td>
</tr>
<tr>
<td>112</td>
<td>-        action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>113</td>
<td>-      })</td>
</tr>
<tr>
<td>114176</td>
<td>},</td>
</tr>
<tr>
<td>115177</td>
<td>columnChange (column) {</td>
</tr>
<tr>
<td>116178</td>
<td>this.defaultColumn = column</td>
</tr>
<tr>
<td>179</td>
<td>+    },</td>
</tr>
<tr>
<td>180</td>
<td>+    async onBottomScroll () {</td>
</tr>
<tr>
<td>181</td>
<td>+      if (this.loadingProducts) return</td>
</tr>
<tr>
<td>182</td>
<td>+      this.loadingProducts = true</td>
</tr>
<tr>
<td>183</td>
<td>+      try {</td>
</tr>
<tr>
<td>184</td>
<td>+        await this.$store.dispatch('category-next/loadMoreCategoryProducts')</td>
</tr>
<tr>
<td>185</td>
<td>+      } catch (e) {</td>
</tr>
<tr>
<td>186</td>
<td>+        console.error('Problem with fetching more products', e)</td>
</tr>
<tr>
<td>187</td>
<td>+      } finally {</td>
</tr>
<tr>
<td>188</td>
<td>+        this.loadingProducts = false</td>
</tr>
<tr>
<td>189</td>
<td>+      }</td>
</tr>
<tr>
<td>117190</td>
<td>}</td>
</tr>
<tr>
<td>118</td>
<td>-  }<s>,</s></td>
</tr>
<tr>
<td>191</td>
<td>+  }</td>
</tr>
<tr>
<td>119</td>
<td>-  mixins: [Category]</td>
</tr>
<tr>
<td>120192</td>
<td>}</td>
</tr>
<tr>
<td>121193</td>
<td></script></td>
</tr>
</tbody>
</table>
<p><em>Lazy Hydrate</em>也在<em>类别</em>页面中实现。</p>
<p>许多从<em>store</em>中获取值的<em>getter</em>是使用<em>计算的</em><code>mapGetters</code></p>
<h4 id="_12-现在从页面查看checkout" tabindex="-1"><a class="header-anchor" href="#_12-现在从页面查看checkout" aria-hidden="true">#</a> <a href="#_12-now-look-into-checkout-from-pages">#</a>12. 现在从<em>页面</em>查看<em>Checkout</em></h4>
<ul>
<li>转到<code>./src/themes/degi/pages/Checkout.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/Checkout.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -36,6 +36,8 @@ import Payment from 'theme/components/core/blocks/Checkout/Payment'</th>
</tr>
</thead>
<tbody>
<tr>
<td>3636</td>
<td>import OrderReview from 'theme/components/core/blocks/Checkout/OrderReview'</td>
</tr>
<tr>
<td>3737</td>
<td>import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'</td>
</tr>
<tr>
<td>3838</td>
<td>import ThankYouPage from 'theme/components/core/blocks/Checkout/ThankYouPage'</td>
</tr>
<tr>
<td>39</td>
<td>+ import { registerModule } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>40</td>
<td>+ import { OrderModule } from '@vue-storefront/core/modules/order'</td>
</tr>
<tr>
<td>3941</td>
<td></td>
</tr>
<tr>
<td>4042</td>
<td>export default {</td>
</tr>
<tr>
<td>4143</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -47,6 +49,9 @@ export default {</td>
</tr>
<tr>
<td>4749</td>
<td>ThankYouPage</td>
</tr>
<tr>
<td>4850</td>
<td>},</td>
</tr>
<tr>
<td>4951</td>
<td>mixins: [Checkout],</td>
</tr>
<tr>
<td>52</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>53</td>
<td>+    registerModule(OrderModule)</td>
</tr>
<tr>
<td>54</td>
<td>+  },</td>
</tr>
<tr>
<td>5055</td>
<td>methods: {</td>
</tr>
<tr>
<td>5156</td>
<td>notifyEmptyCart () {</td>
</tr>
<tr>
<td>5257</td>
<td>this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td></td>
<td>@@ -58,7 +63,7 @@ export default {</td>
</tr>
<tr>
<td>5863</td>
<td>notifyOutStock (chp) {</td>
</tr>
<tr>
<td>5964</td>
<td>this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>6065</td>
<td>type: 'error',</td>
</tr>
<tr>
<td>61</td>
<td>-        message: chp.name + this.$t(' is out of ~~the ~~stock!'),</td>
</tr>
<tr>
<td>66</td>
<td>+        message: chp.name + this.$t(' is out of stock!'),</td>
</tr>
<tr>
<td>6267</td>
<td>action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>6368</td>
<td>})</td>
</tr>
<tr>
<td>6469</td>
<td>},</td>
</tr>
</tbody>
</table>
<p><em>结帐</em>页面导入<em>Order</em>模块并在<em>beforeCreate</em>钩子中注册它。</p>
<p>它还修复了一个小错字。</p>
<h4 id="_13-接下来是按页-比较" tabindex="-1"><a class="header-anchor" href="#_13-接下来是按页-比较" aria-hidden="true">#</a> <a href="#_13-next-is-compare-in-pages">#</a>13.接下来是按<em>页**比较</em></h4>
<ul>
<li>转到<code>./src/themes/degi/pages/Compare.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/Compare.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,7 +2,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td><div class="compare"></td>
</tr>
<tr>
<td>33</td>
<td><div class="bg-cl-secondary py35 pl20"></td>
</tr>
<tr>
<td>44</td>
<td><div class="container"></td>
</tr>
<tr>
<td>5</td>
<td>-        &lt;breadcrumbs :<s>routes</s>=&quot;<s>[{name: 'Homepage', route_link: '/'}]</s>&quot; active-route=&quot;Compare&quot; /&gt;</td>
</tr>
<tr>
<td>5</td>
<td>+        <breadcrumbs :with-homepage="true" active-route="Compare" /></td>
</tr>
<tr>
<td>66</td>
<td><h2>{{ title }}</h2></td>
</tr>
<tr>
<td>77</td>
<td></div></td>
</tr>
<tr>
<td>88</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -15,28 +15,28 @@</td>
</tr>
<tr>
<td>1515</td>
<td>{{ $t('Products') }}</td>
</tr>
<tr>
<td>1616</td>
<td></div></td>
</tr>
<tr>
<td>1717</td>
<td><ul class="compare__features-list"></td>
</tr>
<tr>
<td>18</td>
<td>-                &lt;li~~ class=&quot;compare__features-item&quot;&gt;~~</td>
</tr>
<tr>
<td>19</td>
<td>-                  <s>{{</s> <s>$t('SKU'</s>) <s>}}</s></td>
</tr>
<tr>
<td>20</td>
<td>- ~~                ~~</td>
</tr>
<tr>
<td>21</td>
<td>- ~~                class=&quot;compare__features-item&quot;<s>&gt;</s></td>
</tr>
<tr>
<td>18</td>
<td>+                &lt;li</td>
</tr>
<tr>
<td>19</td>
<td>+                  v-for=&quot;(attr, index) in all_comparable_attributes&quot;</td>
</tr>
<tr>
<td>20</td>
<td>+                  :key=&quot;index&quot;</td>
</tr>
<tr>
<td>21</td>
<td>+                  class=&quot;compare__features-item&quot;</td>
</tr>
<tr>
<td>22</td>
<td>+                &gt;</td>
</tr>
<tr>
<td>2223</td>
<td>{{ attr.default_frontend_label }}</td>
</tr>
<tr>
<td>2324</td>
<td></li></td>
</tr>
<tr>
<td>2425</td>
<td></ul></td>
</tr>
<tr>
<td>2526</td>
<td></div></td>
</tr>
<tr>
<td>2627</td>
<td><div class="compare__products-wrapper"></td>
</tr>
<tr>
<td>2728</td>
<td><ul class="compare__products-columns"></td>
</tr>
<tr>
<td>28</td>
<td>-                &lt;li~~ v-for=&quot;(product, index) in items&quot; :key=&quot;index&quot; class=&quot;compare__product&quot; data-testid=&quot;comparedProduct&quot;&gt;~~</td>
</tr>
<tr>
<td>29</td>
<td>+                &lt;li</td>
</tr>
<tr>
<td>30</td>
<td>+                  v-for=&quot;(product, index) in items&quot;</td>
</tr>
<tr>
<td>31</td>
<td>+                  :key=&quot;index&quot;</td>
</tr>
<tr>
<td>32</td>
<td>+                  class=&quot;compare__product&quot;</td>
</tr>
<tr>
<td>33</td>
<td>+                  data-testid=&quot;comparedProduct&quot;</td>
</tr>
<tr>
<td>34</td>
<td>+                &gt;</td>
</tr>
<tr>
<td>2935</td>
<td><div class="compare__top-info"></td>
</tr>
<tr>
<td>3036</td>
<td><div class="check" /></td>
</tr>
<tr>
<td>3137</td>
<td><product-tile class="col-md-12 collection-product" :product="product" /></td>
</tr>
<tr>
<td>32</td>
<td>-                    <span class="compare__remove" @click="removeFromCompare(product)"></td>
</tr>
<tr>
<td>33</td>
<td>-                      <remove-button /></td>
</tr>
<tr>
<td>34</td>
<td>-                    </span></td>
</tr>
<tr>
<td>3538</td>
<td></div></td>
</tr>
<tr>
<td>3639</td>
<td><ul class="compare__features-list"></td>
</tr>
<tr>
<td>37</td>
<td>-                    <li class="compare__features-item"></td>
</tr>
<tr>
<td>38</td>
<td>-                      {{ product.sku }}</td>
</tr>
<tr>
<td>39</td>
<td>-                    </li></td>
</tr>
<tr>
<td>4040</td>
<td>&lt;li</td>
</tr>
<tr>
<td>4141</td>
<td>v-for=&quot;(attr, attIndex) in all_comparable_attributes&quot;</td>
</tr>
<tr>
<td>4242</td>
<td>:key=&quot;attIndex&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -72,7 +72,6 @@</td>
</tr>
<tr>
<td>7272</td>
<td><script></td>
</tr>
<tr>
<td>7373</td>
<td>import Compare from '@vue-storefront/core/pages/Compare'</td>
</tr>
<tr>
<td>7474</td>
<td>import Breadcrumbs from '../components/core/Breadcrumbs'</td>
</tr>
<tr>
<td>75</td>
<td>- import RemoveButton from '../components/core/blocks/Compare/RemoveButton'</td>
</tr>
<tr>
<td>7675</td>
<td>import ProductTile from '../components/core/ProductTile'</td>
</tr>
<tr>
<td>7776</td>
<td>import ProductAttribute from '../components/core/blocks/Compare/ProductAttribute'</td>
</tr>
<tr>
<td>7877</td>
<td>import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td></td>
<td>@@ -81,7 +80,6 @@ export default {</td>
</tr>
<tr>
<td>8180</td>
<td>components: {</td>
</tr>
<tr>
<td>8281</td>
<td>Breadcrumbs,</td>
</tr>
<tr>
<td>8382</td>
<td>ProductTile,</td>
</tr>
<tr>
<td>84</td>
<td>-    RemoveButton,</td>
</tr>
<tr>
<td>8583</td>
<td>ProductAttribute</td>
</tr>
<tr>
<td>8684</td>
<td>},</td>
</tr>
<tr>
<td>8785</td>
<td>mixins: [Compare],</td>
</tr>
<tr>
<td></td>
<td>@@ -94,7 +92,9 @@ export default {</td>
</tr>
<tr>
<td>9492</td>
<td>metaInfo () {</td>
</tr>
<tr>
<td>9593</td>
<td>return {</td>
</tr>
<tr>
<td>9694</td>
<td>title: this.$route.meta.title || this.title || i18n.t('Compare Products'),</td>
</tr>
<tr>
<td>97</td>
<td>-      meta: this.$route.meta.description~~ ? [{ vmid: 'description', description: this.$route.meta.description }] : []~~</td>
</tr>
<tr>
<td>95</td>
<td>+      meta: this.$route.meta.description</td>
</tr>
<tr>
<td>96</td>
<td>+        ? [{ vmid: 'description', description: this.$route.meta.description }]</td>
</tr>
<tr>
<td>97</td>
<td>+        : []</td>
</tr>
<tr>
<td>9898</td>
<td>}</td>
</tr>
<tr>
<td>9999</td>
<td>}</td>
</tr>
<tr>
<td>100100</td>
<td>}</td>
</tr>
<tr>
<td></td>
<td>@@ -122,7 +122,6 @@ $screen-l: 1170px;</td>
</tr>
<tr>
<td>122122</td>
<td>}</td>
</tr>
<tr>
<td>123123</td>
<td></td>
</tr>
<tr>
<td>124124</td>
<td>.compare {</td>
</tr>
<tr>
<td>125</td>
<td>-</td>
</tr>
<tr>
<td>126125</td>
<td>&amp;__products-wrapper {</td>
</tr>
<tr>
<td>127126</td>
<td>overflow-x: auto;</td>
</tr>
<tr>
<td>128127</td>
<td>-webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td></td>
<td>@@ -156,7 +155,7 @@ $screen-l: 1170px;</td>
</tr>
<tr>
<td>156155</td>
<td>border-color: $border;</td>
</tr>
<tr>
<td>157156</td>
<td>border-width: 1px 0 1px 0;</td>
</tr>
<tr>
<td>158157</td>
<td>background-color: mix(#000, $color-white, 2%);</td>
</tr>
<tr>
<td>159</td>
<td>-    opacity: .95;</td>
</tr>
<tr>
<td>158</td>
<td>+    opacity: 0.95;</td>
</tr>
<tr>
<td>160159</td>
<td></td>
</tr>
<tr>
<td>161160</td>
<td>@media (min-width: $screen-l) {</td>
</tr>
<tr>
<td>162161</td>
<td>width: $features-column-width;</td>
</tr>
<tr>
<td></td>
<td>@@ -169,7 +168,7 @@ $screen-l: 1170px;</td>
</tr>
<tr>
<td>169168</td>
<td>float: left;</td>
</tr>
<tr>
<td>170169</td>
<td>width: $products-column-width-mobile;</td>
</tr>
<tr>
<td>171170</td>
<td>text-align: center;</td>
</tr>
<tr>
<td>172</td>
<td>-    transition: opacity .3s, visibility .3s, transform .3s;</td>
</tr>
<tr>
<td>171</td>
<td>+    transition: opacity 0.3s, visibility 0.3s, transform 0.3s;</td>
</tr>
<tr>
<td>173172</td>
<td></td>
</tr>
<tr>
<td>174173</td>
<td>@media (min-width: $screen-l) {</td>
</tr>
<tr>
<td>175174</td>
<td>width: $products-column-width;</td>
</tr>
<tr>
<td></td>
<td>@@ -198,7 +197,7 @@ $screen-l: 1170px;</td>
</tr>
<tr>
<td>198197</td>
<td>border-color: $border;</td>
</tr>
<tr>
<td>199198</td>
<td>border-style: solid;</td>
</tr>
<tr>
<td>200199</td>
<td>border-width: 0 1px 0 0;</td>
</tr>
<tr>
<td>201</td>
<td>-    transition: height .3s;</td>
</tr>
<tr>
<td>200</td>
<td>+    transition: height 0.3s;</td>
</tr>
<tr>
<td>202201</td>
<td>cursor: pointer;</td>
</tr>
<tr>
<td>203202</td>
<td>background: $color-product-bg;</td>
</tr>
<tr>
<td>204203</td>
<td>overflow: hidden;</td>
</tr>
</tbody>
</table>
<p><em>RemoveButton</em> 被<em>移除了！</em></p>
<h4 id="_14-出现在页面中的-myaccount。" tabindex="-1"><a class="header-anchor" href="#_14-出现在页面中的-myaccount。" aria-hidden="true">#</a> <a href="#_14-here-comes-myaccount-in-pages">#</a>14. 出现在<em>页面中的**MyAccount</em>。</h4>
<ul>
<li>转到<code>./src/themes/degi/pages/MyAccount.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/MyAccount.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -3,7 +3,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>33</td>
<td><div class="bg-cl-secondary py35 pl20"></td>
</tr>
<tr>
<td>44</td>
<td><div class="container"></td>
</tr>
<tr>
<td>55</td>
<td>&lt;breadcrumbs</td>
</tr>
<tr>
<td>6</td>
<td>-          :<s>routes</s>=&quot;<s>[{name: 'Homepage', route_link: '/'}]</s>&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+          :with-homepage=&quot;true&quot;</td>
</tr>
<tr>
<td>77</td>
<td>active-route=&quot;My Account&quot;</td>
</tr>
<tr>
<td>88</td>
<td>/&gt;</td>
</tr>
<tr>
<td>99</td>
<td><h1></td>
</tr>
<tr>
<td></td>
<td>@@ -45,6 +45,8 @@ import MyOrders from '../components/core/blocks/MyAccount/MyOrders'</td>
</tr>
<tr>
<td>4545</td>
<td>import MyOrder from '../components/core/blocks/MyAccount/MyOrder'</td>
</tr>
<tr>
<td>4646</td>
<td>import MyRecentlyViewed from '../components/core/blocks/MyAccount/MyRecentlyViewed'</td>
</tr>
<tr>
<td>4747</td>
<td>import NoSSR from 'vue-no-ssr'</td>
</tr>
<tr>
<td>48</td>
<td>+ import {RecentlyViewedModule} from '@vue-storefront/core/modules/recently-viewed'</td>
</tr>
<tr>
<td>49</td>
<td>+ import {registerModule} from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>4850</td>
<td></td>
</tr>
<tr>
<td>4951</td>
<td>export default {</td>
</tr>
<tr>
<td>5052</td>
<td>data () {</td>
</tr>
<tr>
<td></td>
<td>@@ -70,6 +72,9 @@ export default {</td>
</tr>
<tr>
<td>7072</td>
<td>MyRecentlyViewed,</td>
</tr>
<tr>
<td>7173</td>
<td>'no-ssr': NoSSR</td>
</tr>
<tr>
<td>7274</td>
<td>},</td>
</tr>
<tr>
<td>75</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>76</td>
<td>+    registerModule(RecentlyViewedModule)</td>
</tr>
<tr>
<td>77</td>
<td>+  },</td>
</tr>
<tr>
<td>7378</td>
<td>mixins: [MyAccount],</td>
</tr>
<tr>
<td>7479</td>
<td>methods: {</td>
</tr>
<tr>
<td>7580</td>
<td>notify (title) {</td>
</tr>
</tbody>
</table>
<p><em>最近**查看的</em>模块在<em>beforeCreate</em>钩子中导入和注册。</p>
<h4 id="_15-另一个页面pagenotfound的页面。" tabindex="-1"><a class="header-anchor" href="#_15-另一个页面pagenotfound的页面。" aria-hidden="true">#</a> <a href="#_15-another-page-pagenotfound-in-pages">#</a>15.另一个页面<em>PageNotFound</em>的<em>页面</em>。</h4>
<ul>
<li>转到<code>./src/themes/degi/pages/PageNotFound.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/PageNotFound.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -49,14 +49,31 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>4949</td>
<td></template></td>
</tr>
<tr>
<td>5050</td>
<td></td>
</tr>
<tr>
<td>5151</td>
<td><script></td>
</tr>
<tr>
<td>52</td>
<td>- import <s>PageNotFound</s> from '<s>@vue-storefront/core/pages/PageNotFound</s>'</td>
</tr>
<tr>
<td>52</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>53</td>
<td>+ import { Logger } from '@vue-storefront/core/lib/logger'</td>
</tr>
<tr>
<td>54</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>5355</td>
<td>import ProductTile from '../components/core/ProductTile.vue'</td>
</tr>
<tr>
<td>5456</td>
<td></td>
</tr>
<tr>
<td>5557</td>
<td>export default {</td>
</tr>
<tr>
<td>5658</td>
<td>name: 'PageNotFound',</td>
</tr>
<tr>
<td>5759</td>
<td>computed: {</td>
</tr>
<tr>
<td>58</td>
<td>-    ~~ourBestsellersCollection <s>(</s>) ~~{</td>
</tr>
<tr>
<td>59</td>
<td>-      <s>return</s> <s>this.$store.state.<s>homepage</s>.bestsellers</s></td>
</tr>
<tr>
<td>60</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>61</td>
<td>+      ourBestsellersCollection: 'homepage/getBestsellers'</td>
</tr>
<tr>
<td>62</td>
<td>+    })</td>
</tr>
<tr>
<td>63</td>
<td>+  },</td>
</tr>
<tr>
<td>64</td>
<td>+  async asyncData ({ store, route, context }) {</td>
</tr>
<tr>
<td>65</td>
<td>+    Logger.log('Entering asyncData for PageNotFound ' + new Date())()</td>
</tr>
<tr>
<td>66</td>
<td>+    if (context) {</td>
</tr>
<tr>
<td>67</td>
<td>+      context.output.cacheTags.add(<code>page-not-found</code>)</td>
</tr>
<tr>
<td>68</td>
<td>+      context.server.response.statusCode = 404</td>
</tr>
<tr>
<td>69</td>
<td>+    }</td>
</tr>
<tr>
<td>70</td>
<td>+</td>
</tr>
<tr>
<td>71</td>
<td>+    await store.dispatch('homepage/loadBestsellers')</td>
</tr>
<tr>
<td>72</td>
<td>+  },</td>
</tr>
<tr>
<td>73</td>
<td>+  metaInfo () {</td>
</tr>
<tr>
<td>74</td>
<td>+    return {</td>
</tr>
<tr>
<td>75</td>
<td>+      title: this.$route.meta.title || i18n.t('404 Page Not Found'),</td>
</tr>
<tr>
<td>76</td>
<td>+      meta: this.$route.meta.description ? [{ vmid: 'description', name: 'description', content: this.$route.meta.description }] : []</td>
</tr>
<tr>
<td>6077</td>
<td>}</td>
</tr>
<tr>
<td>6178</td>
<td>},</td>
</tr>
<tr>
<td>6279</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -66,8 +83,7 @@ export default {</td>
</tr>
<tr>
<td>6683</td>
<td>toggleSearchpanel () {</td>
</tr>
<tr>
<td>6784</td>
<td>this.$store.commit('ui/setSearchpanel', true)</td>
</tr>
<tr>
<td>6885</td>
<td>}</td>
</tr>
<tr>
<td>69</td>
<td>-  }<s>,</s></td>
</tr>
<tr>
<td>86</td>
<td>+  }</td>
</tr>
<tr>
<td>70</td>
<td>-  mixins: [PageNotFound]</td>
</tr>
<tr>
<td>7187</td>
<td>}</td>
</tr>
<tr>
<td>7288</td>
<td></script></td>
</tr>
</tbody>
</table>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ourBestsellersCollection`由`vuex` *商店*通过`mapGetters
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_16-product-in-pages-的另一个大更新。" tabindex="-1"><a class="header-anchor" href="#_16-product-in-pages-的另一个大更新。" aria-hidden="true">#</a> <a href="#_16-another-big-update-for-product-in-pages">#</a>16. <em>Product</em> in <em>pages 的</em>另一个大更新。</h4>
<ul>
<li>转到<code>./src/themes/degi/pages/Product.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -5,184 +5,152 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>55</td>
<td><section class="row m0 between-xs"></td>
</tr>
<tr>
<td>66</td>
<td><div class="col-xs-12 col-md-6 center-xs middle-xs image"></td>
</tr>
<tr>
<td>77</td>
<td>&lt;product-gallery</td>
</tr>
<tr>
<td>8</td>
<td>-              :offline=&quot;<s>image</s>&quot;</td>
</tr>
<tr>
<td>9</td>
<td>-              :gallery=&quot;<s>gallery</s>&quot;</td>
</tr>
<tr>
<td>10</td>
<td>-              :configuration=&quot;<s>configuration</s>&quot;</td>
</tr>
<tr>
<td>11</td>
<td>-              :product=&quot;<s>product</s>&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+              :offline=&quot;getOfflineImage&quot;</td>
</tr>
<tr>
<td>9</td>
<td>+              :gallery=&quot;getProductGallery&quot;</td>
</tr>
<tr>
<td>10</td>
<td>+              :configuration=&quot;getCurrentProductConfiguration&quot;</td>
</tr>
<tr>
<td>11</td>
<td>+              :product=&quot;getCurrentProduct&quot;</td>
</tr>
<tr>
<td>1212</td>
<td>/&gt;</td>
</tr>
<tr>
<td>1313</td>
<td></div></td>
</tr>
<tr>
<td>1414</td>
<td><div class="col-xs-12 col-md-5 data"></td>
</tr>
<tr>
<td>1515</td>
<td>&lt;breadcrumbs</td>
</tr>
<tr>
<td>1616</td>
<td>class=&quot;pt40 pb20 hidden-xs&quot;</td>
</tr>
<tr>
<td>17</td>
<td>-              :routes=&quot;<s>breadcrumbs.routes</s>&quot;</td>
</tr>
<tr>
<td>18</td>
<td>-              :active-route=&quot;<s>breadcrumbs</s>.name&quot;</td>
</tr>
<tr>
<td>17</td>
<td>+              :routes=&quot;getBreadcrumbs&quot;</td>
</tr>
<tr>
<td>18</td>
<td>+              :active-route=&quot;getCurrentProduct.name&quot;</td>
</tr>
<tr>
<td>1919</td>
<td>/&gt;</td>
</tr>
<tr>
<td>20</td>
<td>-            &lt;h1~~ class=&quot;mb20 mt0 cl-mine-shaft product-name&quot; data-testid=&quot;productName&quot; itemprop=&quot;name&quot;&gt;~~</td>
</tr>
<tr>
<td>21</td>
<td>-              <s>{{</s> product~~.<s>name</s> | htmlDecode }}~~</td>
</tr>
<tr>
<td>22</td>
<td>-              <s>-<s>share :title</s>=&quot;<s>product.name | htmlDecode</s>&quot;</s> text=&quot;Check this product!&quot; class=&quot;web-share&quot; /&gt;~~</td>
</tr>
<tr>
<td>20</td>
<td>+            &lt;h1</td>
</tr>
<tr>
<td>21</td>
<td>+              class=&quot;mb20 mt0 cl-mine-shaft product-name&quot;</td>
</tr>
<tr>
<td>22</td>
<td>+              data-testid=&quot;productName&quot;</td>
</tr>
<tr>
<td>23</td>
<td>+              itemprop=&quot;name&quot;</td>
</tr>
<tr>
<td>24</td>
<td>+            &gt;</td>
</tr>
<tr>
<td>25</td>
<td>+              {{ getCurrentProduct.name | htmlDecode }}</td>
</tr>
<tr>
<td>26</td>
<td>+              &lt;web-share</td>
</tr>
<tr>
<td>27</td>
<td>+                :title=&quot;getCurrentProduct.name | htmlDecode&quot;</td>
</tr>
<tr>
<td>28</td>
<td>+                text=&quot;Check this product!&quot;</td>
</tr>
<tr>
<td>29</td>
<td>+                class=&quot;web-share&quot;</td>
</tr>
<tr>
<td>30</td>
<td>+              /&gt;</td>
</tr>
<tr>
<td>2331</td>
<td></h1></td>
</tr>
<tr>
<td>24</td>
<td>-            &lt;div~~ class=&quot;mb20 uppercase cl-secondary&quot; itemprop=&quot;sku&quot; :content=&quot;product.sku&quot;&gt;~~</td>
</tr>
<tr>
<td>25</td>
<td>-              <s>{{</s> <s>$t('SKU')</s> <s>}}: {{ product.sku }}</s></td>
</tr>
<tr>
<td>32</td>
<td>+            &lt;div</td>
</tr>
<tr>
<td>33</td>
<td>+              class=&quot;mb20 uppercase cl-secondary&quot;</td>
</tr>
<tr>
<td>34</td>
<td>+              itemprop=&quot;sku&quot;</td>
</tr>
<tr>
<td>35</td>
<td>+              :content=&quot;getCurrentProduct.sku&quot;</td>
</tr>
<tr>
<td>36</td>
<td>+            &gt;</td>
</tr>
<tr>
<td>37</td>
<td>+              {{ $t('SKU: {sku}', { sku: getCurrentProduct.sku }) }}</td>
</tr>
<tr>
<td>2638</td>
<td></div></td>
</tr>
<tr>
<td>2739</td>
<td><div itemprop="offers" itemscope itemtype="http://schema.org/Offer"></td>
</tr>
<tr>
<td>28</td>
<td>-              <meta itemprop="priceCurrency" :content="~~currentStore~~.i18n.currencyCode"></td>
</tr>
<tr>
<td>29</td>
<td>-              <meta itemprop="price" :content="parseFloat(~~product~~.priceInclTax).toFixed(2)"></td>
</tr>
<tr>
<td>40</td>
<td>+              <meta itemprop="priceCurrency" :content="$store.state.storeView.i18n.currencyCode"></td>
</tr>
<tr>
<td>41</td>
<td>+              <meta itemprop="price" :content="parseFloat(getCurrentProduct.priceInclTax).toFixed(2)"></td>
</tr>
<tr>
<td>3042</td>
<td><meta itemprop="availability" :content="structuredData.availability"></td>
</tr>
<tr>
<td>31</td>
<td>-              <meta itemprop="url" :content="~~product~~.url_path"></td>
</tr>
<tr>
<td>32</td>
<td>-              &lt;div</td>
</tr>
<tr>
<td>43</td>
<td>+              <meta itemprop="url" :content="getCurrentProduct.url_path"></td>
</tr>
<tr>
<td>44</td>
<td>+              <div class="mb40 price serif" v-if="getCurrentProduct.type_id !== 'grouped'"></td>
</tr>
<tr>
<td>33</td>
<td>-                class=&quot;mb40 price serif&quot;</td>
</tr>
<tr>
<td>34</td>
<td>-                v-if=&quot;product.type_id !== 'grouped'&quot;</td>
</tr>
<tr>
<td>35</td>
<td>-              &gt;</td>
</tr>
<tr>
<td>3645</td>
<td>&lt;div</td>
</tr>
<tr>
<td>3746</td>
<td>class=&quot;h3 cl-secondary&quot;</td>
</tr>
<tr>
<td>38</td>
<td>-                  v-if=&quot;<s>product</s>.special_price &amp;&amp; <s>product</s>.priceInclTax &amp;&amp; <s>product</s>.<s>originalPriceInclTax</s>&quot;</td>
</tr>
<tr>
<td>47</td>
<td>+                  v-if=&quot;getCurrentProduct.special_price &amp;&amp; getCurrentProduct.priceInclTax &amp;&amp; getCurrentProduct.original_price_incl_tax&quot;</td>
</tr>
<tr>
<td>3948</td>
<td>&gt;</td>
</tr>
<tr>
<td>40</td>
<td>-                  &lt;span~~ class=&quot;h2 cl-mine-shaft weight-700&quot;&gt;~~</td>
</tr>
<tr>
<td>41</td>
<td>-                    <s>{{</s> <s>product.priceInclTax</s> <s>* product.qty | price }}</s></td>
</tr>
<tr>
<td>42</td>
<td>-                  </span> </td>
</tr>
<tr>
<td>43</td>
<td>-                  &lt;span~~ class=&quot;price-original h3&quot;&gt;~~</td>
</tr>
<tr>
<td>44</td>
<td>-                    ~~{{ product.originalPriceInclTax * product.qty | ~~price <s>}}</s></td>
</tr>
<tr>
<td>45</td>
<td>-                  </span></td>
</tr>
<tr>
<td>49</td>
<td>+                  &lt;span</td>
</tr>
<tr>
<td>50</td>
<td>+                    class=&quot;h2 cl-mine-shaft weight-700&quot;</td>
</tr>
<tr>
<td>51</td>
<td>+                  &gt;{{ getCurrentProduct.priceInclTax * getCurrentProduct.qty | price }}</span> </td>
</tr>
<tr>
<td>52</td>
<td>+                  &lt;span</td>
</tr>
<tr>
<td>53</td>
<td>+                    class=&quot;price-original h3&quot;</td>
</tr>
<tr>
<td>54</td>
<td>+                  &gt;{{ getCurrentProduct.original_price_incl_tax * getCurrentProduct.qty | price }}</span></td>
</tr>
<tr>
<td>4655</td>
<td></div></td>
</tr>
<tr>
<td>4756</td>
<td>&lt;div</td>
</tr>
<tr>
<td>4857</td>
<td>class=&quot;h2 cl-mine-shaft weight-700&quot;</td>
</tr>
<tr>
<td>49</td>
<td>-                  v-if=&quot;!<s>product</s>.special_price &amp;&amp; <s>product</s>.priceInclTax&quot;</td>
</tr>
<tr>
<td>58</td>
<td>+ getCurrentProduct.special_price &amp;&amp; getCurrentProduct.priceInclTax&quot;</td>
</tr>
<tr>
<td>5059</td>
<td>&gt;</td>
</tr>
<tr>
<td>51</td>
<td>-                  {{ <s>product</s>.qty &gt; 0 ? <s>product</s>.priceInclTax * <s>product</s>.qty : <s>product</s>.priceInclTax | price }}</td>
</tr>
<tr>
<td>60</td>
<td>+                  {{ getCurrentProduct.qty &gt; 0 ? getCurrentProduct.priceInclTax * getCurrentProduct.qty : getCurrentProduct.priceInclTax | price }}</td>
</tr>
<tr>
<td>5261</td>
<td></div></td>
</tr>
<tr>
<td>5362</td>
<td></div></td>
</tr>
<tr>
<td>54</td>
<td>-              &lt;div</td>
</tr>
<tr>
<td>63</td>
<td>+              <div class="cl-primary variants" v-if="getCurrentProduct.type_id =='configurable'"></td>
</tr>
<tr>
<td>55</td>
<td>-                class=&quot;cl-primary variants&quot;</td>
</tr>
<tr>
<td>56</td>
<td>-                v-if=&quot;product.type_id =='configurable' &amp;&amp; !loading&quot;</td>
</tr>
<tr>
<td>57</td>
<td>-              &gt;</td>
</tr>
<tr>
<td>58</td>
<td>-                <div class="error" v-if="product.errors && Object.keys(product.errors).length > 0"></td>
</tr>
<tr>
<td>59</td>
<td>-                  {{ product.errors | formatProductMessages }}</td>
</tr>
<tr>
<td>60</td>
<td>-                </div></td>
</tr>
<tr>
<td>6164</td>
<td>&lt;div</td>
</tr>
<tr>
<td>62</td>
<td>-                  class=&quot;<s>h5</s>&quot;</td>
</tr>
<tr>
<td>63</td>
<td>-                  v-<s>for</s>=&quot;(<s>option, index</s>) <s>in</s> <s>product.configurable_options</s>&quot;</td>
</tr>
<tr>
<td>65</td>
<td>+                  class=&quot;error&quot;</td>
</tr>
<tr>
<td>66</td>
<td>+                  v-if=&quot;getCurrentProduct.errors &amp;&amp; Object.keys(getCurrentProduct.errors).length &gt; 0&quot;</td>
</tr>
<tr>
<td>64</td>
<td>-                  v-if=&quot;(!product.errors || Object.keys(product.errors).length === 0) &amp;&amp; Object.keys(configuration).length &gt; 0&quot;</td>
</tr>
<tr>
<td>65</td>
<td>-                  :key=&quot;index&quot;</td>
</tr>
<tr>
<td>6667</td>
<td>&gt;</td>
</tr>
<tr>
<td>68</td>
<td>+                  {{ getCurrentProduct.errors | formatProductMessages }}</td>
</tr>
<tr>
<td>69</td>
<td>+                </div></td>
</tr>
<tr>
<td>70</td>
<td>+                <div class="h5" v-for="option in getProductOptions" :key="option.id"></td>
</tr>
<tr>
<td>6771</td>
<td><div class="variants-label" data-testid="variantsLabel"></td>
</tr>
<tr>
<td>6872</td>
<td>{{ option.label }}</td>
</tr>
<tr>
<td>69</td>
<td>-                    &lt;span~~ class=&quot;weight-700&quot;&gt;~~</td>
</tr>
<tr>
<td>70</td>
<td>-                      <s>{{ configuration[option.attribute_code ? option.attribute_code : option.label.toLowerCase()].label }}</s></td>
</tr>
<tr>
<td>71</td>
<td>-                    </span></td>
</tr>
<tr>
<td>73</td>
<td>+                    &lt;span</td>
</tr>
<tr>
<td>74</td>
<td>+                      class=&quot;weight-700&quot;</td>
</tr>
<tr>
<td>75</td>
<td>+                    &gt;{{ getOptionLabel(option) }}</span></td>
</tr>
<tr>
<td>7276</td>
<td></div></td>
</tr>
<tr>
<td>7377</td>
<td><div class="row top-xs m0 pt15 pb40 variants-wrapper"></td>
</tr>
<tr>
<td>7478</td>
<td><div v-if="option.label == 'Color'"></td>
</tr>
<tr>
<td>7579</td>
<td>&lt;color-selector</td>
</tr>
<tr>
<td>76</td>
<td>-                        v-for=&quot;<s>(c,</s> ~~i) ~~in <s>options</s>[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>77</td>
<td>-                        <s>v-if</s>=&quot;<s>isOptionAvailable(c)</s>&quot;</td>
</tr>
<tr>
<td>78</td>
<td>-                        :<s>key</s>=&quot;<s>i</s>&quot;</td>
</tr>
<tr>
<td>79</td>
<td>-                        :<s>id</s>=&quot;<s>c.id</s>&quot;</td>
</tr>
<tr>
<td>80</td>
<td>-                        <s>:label</s>=&quot;<s>c.label</s>&quot;</td>
</tr>
<tr>
<td>80</td>
<td>+                        v-for=&quot;filter in getAvailableFilters[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>81</td>
<td>+                        :key=&quot;filter.id&quot;</td>
</tr>
<tr>
<td>82</td>
<td>+                        :variant=&quot;filter&quot;</td>
</tr>
<tr>
<td>83</td>
<td>+                        :selected-filters=&quot;getSelectedFilters&quot;</td>
</tr>
<tr>
<td>84</td>
<td>+                        @change=&quot;changeFilter&quot;</td>
</tr>
<tr>
<td>81</td>
<td>-                        context=&quot;product&quot;</td>
</tr>
<tr>
<td>82</td>
<td>-                        :code=&quot;option.attribute_code&quot;</td>
</tr>
<tr>
<td>83</td>
<td>-                        :class=&quot;{ active: c.id == configuration[option.attribute_code].id }&quot;</td>
</tr>
<tr>
<td>8485</td>
<td>/&gt;</td>
</tr>
<tr>
<td>8586</td>
<td></div></td>
</tr>
<tr>
<td>8687</td>
<td><div class="sizes" v-else-if="option.label == 'Size'"></td>
</tr>
<tr>
<td>8788</td>
<td>&lt;size-selector</td>
</tr>
<tr>
<td>88</td>
<td>-                        v-for=&quot;(s, i) in options[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>89</td>
<td>-                        v-if=&quot;isOptionAvailable(s)&quot;</td>
</tr>
<tr>
<td>90</td>
<td>-                        :key=&quot;i&quot;</td>
</tr>
<tr>
<td>91</td>
<td>-                        :id=&quot;s.id&quot;</td>
</tr>
<tr>
<td>92</td>
<td>-                        :label=&quot;s.label&quot;</td>
</tr>
<tr>
<td>93</td>
<td>-                        context=&quot;product&quot;</td>
</tr>
<tr>
<td>94</td>
<td>-                        :code=&quot;option.attribute_code&quot;</td>
</tr>
<tr>
<td>9589</td>
<td>class=&quot;mr10 mb10&quot;</td>
</tr>
<tr>
<td>96</td>
<td>-                        <s>:class</s>=&quot;<s>{</s> <s>active:</s> <s>s.id == configuration</s>[option.attribute_code]<s>.id }</s>&quot;</td>
</tr>
<tr>
<td>97</td>
<td>-                        <s>v-focus-clean</s></td>
</tr>
<tr>
<td>90</td>
<td>+                        v-for=&quot;filter in getAvailableFilters[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>91</td>
<td>+                        :key=&quot;filter.id&quot;</td>
</tr>
<tr>
<td>92</td>
<td>+                        :variant=&quot;filter&quot;</td>
</tr>
<tr>
<td>93</td>
<td>+                        :selected-filters=&quot;getSelectedFilters&quot;</td>
</tr>
<tr>
<td>94</td>
<td>+                        @change=&quot;changeFilter&quot;</td>
</tr>
<tr>
<td>9895</td>
<td>/&gt;</td>
</tr>
<tr>
<td>9996</td>
<td></div></td>
</tr>
<tr>
<td>10097</td>
<td><div :class="option.attribute_code" v-else></td>
</tr>
<tr>
<td>10198</td>
<td>&lt;generic-selector</td>
</tr>
<tr>
<td>102</td>
<td>-                        v-for=&quot;(s, i) in options[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>103</td>
<td>-                        v-if=&quot;isOptionAvailable(s)&quot;</td>
</tr>
<tr>
<td>104</td>
<td>-                        :key=&quot;i&quot;</td>
</tr>
<tr>
<td>105</td>
<td>-                        :id=&quot;s.id&quot;</td>
</tr>
<tr>
<td>106</td>
<td>-                        :label=&quot;s.label&quot;</td>
</tr>
<tr>
<td>107</td>
<td>-                        context=&quot;product&quot;</td>
</tr>
<tr>
<td>108</td>
<td>-                        :code=&quot;option.attribute_code&quot;</td>
</tr>
<tr>
<td>10999</td>
<td>class=&quot;mr10 mb10&quot;</td>
</tr>
<tr>
<td>110</td>
<td>-                        <s>:class</s>=&quot;<s>{</s> <s>active:</s> <s>s.id == configuration</s>[option.attribute_code]<s>.id }</s>&quot;</td>
</tr>
<tr>
<td>111</td>
<td>-                        <s>v-focus-clean</s></td>
</tr>
<tr>
<td>100</td>
<td>+                        v-for=&quot;filter in getAvailableFilters[option.attribute_code]&quot;</td>
</tr>
<tr>
<td>101</td>
<td>+                        :key=&quot;filter.id&quot;</td>
</tr>
<tr>
<td>102</td>
<td>+                        :variant=&quot;filter&quot;</td>
</tr>
<tr>
<td>103</td>
<td>+                        :selected-filters=&quot;getSelectedFilters&quot;</td>
</tr>
<tr>
<td>104</td>
<td>+                        @change=&quot;changeFilter&quot;</td>
</tr>
<tr>
<td>112105</td>
<td>/&gt;</td>
</tr>
<tr>
<td>113106</td>
<td></div></td>
</tr>
<tr>
<td>114107</td>
<td>&lt;span</td>
</tr>
<tr>
<td>115108</td>
<td>v-if=&quot;option.label == 'Size'&quot;</td>
</tr>
<tr>
<td>116109</td>
<td>@click=&quot;openSizeGuide&quot;</td>
</tr>
<tr>
<td>117</td>
<td>-                      class=&quot;</td>
</tr>
<tr>
<td>110</td>
<td>+                      class=&quot;p0 ml30 inline-flex middle-xs no-underline h5 action size-guide pointer cl-secondary&quot;</td>
</tr>
<tr>
<td>118</td>
<td>-                        p0 ml30 inline-flex middle-xs no-underline h5</td>
</tr>
<tr>
<td>119</td>
<td>-                        action size-guide pointer cl-secondary</td>
</tr>
<tr>
<td>120</td>
<td>-                      &quot;</td>
</tr>
<tr>
<td>121111</td>
<td>&gt;</td>
</tr>
<tr>
<td>122112</td>
<td><i class="pr5 material-icons">accessibility</i></td>
</tr>
<tr>
<td>123</td>
<td>-                      <span></td>
</tr>
<tr>
<td>113</td>
<td>+                      <span>{{ $t('Size guide') }}</span></td>
</tr>
<tr>
<td>124</td>
<td>-                        {{ $t('Size guide') }}</td>
</tr>
<tr>
<td>125</td>
<td>-                      </span></td>
</tr>
<tr>
<td>126114</td>
<td></span></td>
</tr>
<tr>
<td>127115</td>
<td></div></td>
</tr>
<tr>
<td>128116</td>
<td></div></td>
</tr>
<tr>
<td>129117</td>
<td></div></td>
</tr>
<tr>
<td>130118</td>
<td></div></td>
</tr>
<tr>
<td>131119</td>
<td>&lt;product-links</td>
</tr>
<tr>
<td>132</td>
<td>-              v-if=&quot;<s>product</s>.type_id =='grouped'~~ &amp;&amp; !loading~~&quot;</td>
</tr>
<tr>
<td>133</td>
<td>-              :products=&quot;<s>product</s>.product_links&quot;</td>
</tr>
<tr>
<td>120</td>
<td>+              v-if=&quot;getCurrentProduct.type_id =='grouped'&quot;</td>
</tr>
<tr>
<td>121</td>
<td>+              :products=&quot;getCurrentProduct.product_links&quot;</td>
</tr>
<tr>
<td>134122</td>
<td>/&gt;</td>
</tr>
<tr>
<td>135123</td>
<td>&lt;product-bundle-options</td>
</tr>
<tr>
<td>136</td>
<td>-              v-if=&quot;<s>product</s>.bundle_options &amp;&amp; <s>product</s>.bundle_options.length &gt; 0~~ &amp;&amp; !loading~~&quot;</td>
</tr>
<tr>
<td>137</td>
<td>-              :product=&quot;<s>product</s>&quot;</td>
</tr>
<tr>
<td>124</td>
<td>+              v-if=&quot;getCurrentProduct.bundle_options &amp;&amp; getCurrentProduct.bundle_options.length &gt; 0&quot;</td>
</tr>
<tr>
<td>125</td>
<td>+              :product=&quot;getCurrentProduct&quot;</td>
</tr>
<tr>
<td>138126</td>
<td>/&gt;</td>
</tr>
<tr>
<td>139127</td>
<td>&lt;product-custom-options</td>
</tr>
<tr>
<td>140</td>
<td>-              v-else-if=&quot;<s>product</s>.custom_options &amp;&amp; <s>product</s>.custom_options.length &gt; 0~~ &amp;&amp; !loading~~&quot;</td>
</tr>
<tr>
<td>141</td>
<td>-              :product=&quot;<s>product</s>&quot;</td>
</tr>
<tr>
<td>128</td>
<td>+              v-else-if=&quot;getCurrentProduct.custom_options &amp;&amp; getCurrentProduct.custom_options.length &gt; 0&quot;</td>
</tr>
<tr>
<td>129</td>
<td>+              :product=&quot;getCurrentProduct&quot;</td>
</tr>
<tr>
<td>130</td>
<td>+            /&gt;</td>
</tr>
<tr>
<td>131</td>
<td>+            &lt;product-quantity</td>
</tr>
<tr>
<td>132</td>
<td>+              class=&quot;row m0 mb35&quot;</td>
</tr>
<tr>
<td>133</td>
<td>+              v-if=&quot;getCurrentProduct.type_id !== 'grouped' &amp;&amp; getCurrentProduct.type_id !== 'bundle'&quot;</td>
</tr>
<tr>
<td>134</td>
<td>+              v-model=&quot;getCurrentProduct.qty&quot;</td>
</tr>
<tr>
<td>135</td>
<td>+              :max-quantity=&quot;maxQuantity&quot;</td>
</tr>
<tr>
<td>136</td>
<td>+              :loading=&quot;isStockInfoLoading&quot;</td>
</tr>
<tr>
<td>137</td>
<td>+              :is-simple-or-configurable=&quot;isSimpleOrConfigurable&quot;</td>
</tr>
<tr>
<td>138</td>
<td>+              show-quantity</td>
</tr>
<tr>
<td>139</td>
<td>+              @error=&quot;handleQuantityError&quot;</td>
</tr>
<tr>
<td>142140</td>
<td>/&gt;</td>
</tr>
<tr>
<td>143</td>
<td>-            <div class="row m0 mb35" v-if="product.type_id !== 'grouped' && product.type_id !== 'bundle'"></td>
</tr>
<tr>
<td>144</td>
<td>-              &lt;base-input-number</td>
</tr>
<tr>
<td>145</td>
<td>-                :name=&quot;$t('Quantity')&quot;</td>
</tr>
<tr>
<td>146</td>
<td>-                v-model=&quot;product.qty&quot;</td>
</tr>
<tr>
<td>147</td>
<td>-                :min=&quot;1&quot;</td>
</tr>
<tr>
<td>148</td>
<td>-                @blur=&quot;$v.$touch()&quot;</td>
</tr>
<tr>
<td>149</td>
<td>-                :validations=&quot;[</td>
</tr>
<tr>
<td>150</td>
<td>-                  {</td>
</tr>
<tr>
<td>151</td>
<td>-                    condition: $v.product.qty.$error &amp;&amp; !$v.product.qty.minValue,</td>
</tr>
<tr>
<td>152</td>
<td>-                    text: $t('Quantity must be above 0')</td>
</tr>
<tr>
<td>153</td>
<td>-                  }</td>
</tr>
<tr>
<td>154</td>
<td>-                ]&quot;</td>
</tr>
<tr>
<td>155</td>
<td>-              /&gt;</td>
</tr>
<tr>
<td>156</td>
<td>-            </div></td>
</tr>
<tr>
<td>157141</td>
<td><div class="row m0"></td>
</tr>
<tr>
<td>158142</td>
<td>&lt;add-to-cart</td>
</tr>
<tr>
<td>159</td>
<td>-                :product=&quot;<s>product</s>&quot;</td>
</tr>
<tr>
<td>160</td>
<td>-                :disabled=&quot;<s>$v.product.qty.$error &amp;&amp; !$v.product.qty.minValue</s>&quot;</td>
</tr>
<tr>
<td>143</td>
<td>+                :product=&quot;getCurrentProduct&quot;</td>
</tr>
<tr>
<td>144</td>
<td>+                :disabled=&quot;isAddToCartDisabled&quot;</td>
</tr>
<tr>
<td>161145</td>
<td>class=&quot;col-xs-12 col-sm-4 col-md-6&quot;</td>
</tr>
<tr>
<td>162146</td>
<td>/&gt;</td>
</tr>
<tr>
<td>163147</td>
<td></div></td>
</tr>
<tr>
<td>164148</td>
<td><div class="row py40 add-to-buttons"></td>
</tr>
<tr>
<td>165149</td>
<td><div class="col-xs-6 col-sm-3 col-md-6"></td>
</tr>
<tr>
<td>166</td>
<td>-                &lt;<s>wishlist-button</s> :product=&quot;<s>product</s>&quot; /&gt;</td>
</tr>
<tr>
<td>150</td>
<td>+                <AddToWishlist :product="getCurrentProduct" /></td>
</tr>
<tr>
<td>167151</td>
<td></div></td>
</tr>
<tr>
<td>168</td>
<td>-              <div class="col-xs-6 col-sm-3 col-md-6~~ product__add-to-compare~~"></td>
</tr>
<tr>
<td>169</td>
<td>-                &lt;<s>button</s></td>
</tr>
<tr>
<td>152</td>
<td>+              <div class="col-xs-6 col-sm-3 col-md-6"></td>
</tr>
<tr>
<td>153</td>
<td>+                <AddToCompare :product="getCurrentProduct" /></td>
</tr>
<tr>
<td>170</td>
<td>-                  @click=&quot;isOnCompare ? removeFromList('compare') : addToList('compare')&quot;</td>
</tr>
<tr>
<td>171</td>
<td>-                  class=&quot;</td>
</tr>
<tr>
<td>172</td>
<td>-                    p0 inline-flex middle-xs bg-cl-transparent brdr-none</td>
</tr>
<tr>
<td>173</td>
<td>-                    action h5 pointer cl-secondary</td>
</tr>
<tr>
<td>174</td>
<td>-                  &quot;</td>
</tr>
<tr>
<td>175</td>
<td>-                  type=&quot;button&quot;</td>
</tr>
<tr>
<td>176</td>
<td>-                  data-testid=&quot;addToCompare&quot;</td>
</tr>
<tr>
<td>177</td>
<td>-                &gt;</td>
</tr>
<tr>
<td>178</td>
<td>-                  <i class="pr5 material-icons">compare</i></td>
</tr>
<tr>
<td>179</td>
<td>-                  <template v-if="!isOnCompare"></td>
</tr>
<tr>
<td>180</td>
<td>-                    {{ $t('Add to compare') }}</td>
</tr>
<tr>
<td>181</td>
<td>-                  </template></td>
</tr>
<tr>
<td>182</td>
<td>-                  <template v-else></td>
</tr>
<tr>
<td>183</td>
<td>-                    {{ $t('Remove from compare') }}</td>
</tr>
<tr>
<td>184</td>
<td>-                  </template></td>
</tr>
<tr>
<td>185</td>
<td>-                </button></td>
</tr>
<tr>
<td>186154</td>
<td></div></td>
</tr>
<tr>
<td>187155</td>
<td></div></td>
</tr>
<tr>
<td>188156</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -193,51 +161,51 @@</td>
</tr>
<tr>
<td>193161</td>
<td><h2 class="h3 m0 mb10 serif lh20 details-title"></td>
</tr>
<tr>
<td>194162</td>
<td>{{ $t('Product details') }}</td>
</tr>
<tr>
<td>195163</td>
<td></h2></td>
</tr>
<tr>
<td>196</td>
<td>-      &lt;div</td>
</tr>
<tr>
<td>164</td>
<td>+      <div class="h4 details-wrapper" :class="{'details-wrapper--open': detailsOpen}"></td>
</tr>
<tr>
<td>197</td>
<td>-        class=&quot;h4 details-wrapper&quot;</td>
</tr>
<tr>
<td>198</td>
<td>-        :class=&quot;{'details-wrapper--open': detailsOpen}&quot;</td>
</tr>
<tr>
<td>199</td>
<td>-      &gt;</td>
</tr>
<tr>
<td>200165</td>
<td><div class="row between-md m0"></td>
</tr>
<tr>
<td>201166</td>
<td><div class="col-xs-12 col-sm-6"></td>
</tr>
<tr>
<td>202</td>
<td>-            &lt;div</td>
</tr>
<tr>
<td>167</td>
<td>+            <div class="lh30 h5" itemprop="description" v-html="getCurrentProduct.description" /></td>
</tr>
<tr>
<td>203</td>
<td>-              class=&quot;lh30 h5&quot;</td>
</tr>
<tr>
<td>204</td>
<td>-              itemprop=&quot;description&quot;</td>
</tr>
<tr>
<td>205</td>
<td>-              v-html=&quot;product.description&quot;</td>
</tr>
<tr>
<td>206</td>
<td>-            /&gt;</td>
</tr>
<tr>
<td>207168</td>
<td></div></td>
</tr>
<tr>
<td>208169</td>
<td><div class="col-xs-12 col-sm-5"></td>
</tr>
<tr>
<td>209170</td>
<td><ul class="attributes p0 pt5 m0"></td>
</tr>
<tr>
<td>210171</td>
<td>&lt;product-attribute</td>
</tr>
<tr>
<td>211172</td>
<td>:key=&quot;attr.attribute_code&quot;</td>
</tr>
<tr>
<td>212</td>
<td>-                v-for=&quot;attr in <s>customAttributes</s>&quot;</td>
</tr>
<tr>
<td>213</td>
<td>-                :product=&quot;<s>product</s>&quot;</td>
</tr>
<tr>
<td>173</td>
<td>+                v-for=&quot;attr in getCustomAttributes&quot;</td>
</tr>
<tr>
<td>174</td>
<td>+                :product=&quot;getCurrentProduct&quot;</td>
</tr>
<tr>
<td>214175</td>
<td>:attribute=&quot;attr&quot;</td>
</tr>
<tr>
<td>215176</td>
<td>empty-placeholder=&quot;N/A&quot;</td>
</tr>
<tr>
<td>216177</td>
<td>/&gt;</td>
</tr>
<tr>
<td>217178</td>
<td></ul></td>
</tr>
<tr>
<td>218179</td>
<td></div></td>
</tr>
<tr>
<td>219</td>
<td>-          &lt;div</td>
</tr>
<tr>
<td>180</td>
<td>+          <div class="details-overlay" @click="showDetails" /></td>
</tr>
<tr>
<td>220</td>
<td>-            class=&quot;details-overlay&quot;</td>
</tr>
<tr>
<td>221</td>
<td>-            @click=&quot;showDetails&quot;</td>
</tr>
<tr>
<td>222</td>
<td>-          /&gt;</td>
</tr>
<tr>
<td>223181</td>
<td></div></td>
</tr>
<tr>
<td>224182</td>
<td></div></td>
</tr>
<tr>
<td>225183</td>
<td></section></td>
</tr>
<tr>
<td>226</td>
<td>-    &lt;<s>reviews :product</s>-<s>id=&quot;originalProduct.id&quot;</s> <s>v</s>-<s>show=&quot;OnlineOnly&quot; /&gt;</s></td>
</tr>
<tr>
<td>227</td>
<td>- ~~    ~~&lt;<s>related-products</s></td>
</tr>
<tr>
<td>228</td>
<td>- ~~      type~~=&quot;<s>upsell</s>&quot;</td>
</tr>
<tr>
<td>229</td>
<td>- ~~      <s>:<s>heading</s>=&quot;</s>$t('We found other products you might like')~~&quot;</td>
</tr>
<tr>
<td>230</td>
<td>- ~~    /&gt;~~</td>
</tr>
<tr>
<td>231</td>
<td>- ~~    /&gt;</td>
</tr>
<tr>
<td>232</td>
<td>-    ~~-<s>products type=&quot;related&quot; /&gt;</s></td>
</tr>
<tr>
<td>184</td>
<td>+    <lazy-hydrate when-idle></td>
</tr>
<tr>
<td>185</td>
<td>+      &lt;reviews</td>
</tr>
<tr>
<td>186</td>
<td>+        :product-name=&quot;getOriginalProduct.name&quot;</td>
</tr>
<tr>
<td>187</td>
<td>+        :product-id=&quot;getOriginalProduct.id&quot;</td>
</tr>
<tr>
<td>188</td>
<td>+        v-show=&quot;isOnline&quot;</td>
</tr>
<tr>
<td>189</td>
<td>+      /&gt;</td>
</tr>
<tr>
<td>190</td>
<td>+    </lazy-hydrate></td>
</tr>
<tr>
<td>191</td>
<td>+    <lazy-hydrate when-idle></td>
</tr>
<tr>
<td>192</td>
<td>+      <related-products type="upsell" :heading="$t('We found other products you might like')" /></td>
</tr>
<tr>
<td>193</td>
<td>+    </lazy-hydrate></td>
</tr>
<tr>
<td>194</td>
<td>+    <lazy-hydrate when-idle></td>
</tr>
<tr>
<td>195</td>
<td>+      <promoted-offers single-banner /></td>
</tr>
<tr>
<td>196</td>
<td>+    </lazy-hydrate></td>
</tr>
<tr>
<td>197</td>
<td>+    <lazy-hydrate when-idle></td>
</tr>
<tr>
<td>198</td>
<td>+      <related-products type="related" /></td>
</tr>
<tr>
<td>199</td>
<td>+    </lazy-hydrate></td>
</tr>
<tr>
<td>233200</td>
<td><SizeGuide /></td>
</tr>
<tr>
<td>234201</td>
<td></div></td>
</tr>
<tr>
<td>235202</td>
<td></template></td>
</tr>
</tbody>
</table>
<p>在这里，<em>模板</em>部分进行了大修。</p>
<p>数据由<code>vuex</code> <em>getter</em>填充。</p>
<p><em>点评</em>也<em>懒得补水</em>。</p>
<ul>
<li>继续它的<em>脚本</em>部分。</li>
</ul>
<p>src/themes/degi/pages/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -5,184 +5,152 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>55</td>
<td><script></td>
</tr>
<tr>
<td>6</td>
<td>- import <s>{</s> ~~minValue } ~~from '<s>vuelidate</s>/<s>lib/validators</s>'</td>
</tr>
<tr>
<td>6</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>77</td>
<td>import Product from '@vue-storefront/core/pages/Product'</td>
</tr>
<tr>
<td>88</td>
<td>import VueOfflineMixin from 'vue-offline/mixin'</td>
</tr>
<tr>
<td>9</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>910</td>
<td>import RelatedProducts from 'theme/components/core/blocks/Product/Related.vue'</td>
</tr>
<tr>
<td>1011</td>
<td>import Reviews from 'theme/components/core/blocks/Reviews/Reviews.vue'</td>
</tr>
<tr>
<td>1112</td>
<td>import AddToCart from 'theme/components/core/AddToCart.vue'</td>
</tr>
<tr>
<td></td>
<td>@@ -246,20 +214,37 @@ import ColorSelector from 'theme/components/core/ColorSelector.vue'</td>
</tr>
<tr>
<td>246214</td>
<td>import SizeSelector from 'theme/components/core/SizeSelector.vue'</td>
</tr>
<tr>
<td>247215</td>
<td>import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'</td>
</tr>
<tr>
<td>248216</td>
<td>import ProductAttribute from 'theme/components/core/ProductAttribute.vue'</td>
</tr>
<tr>
<td>217</td>
<td>+ import ProductQuantity from 'theme/components/core/ProductQuantity.vue'</td>
</tr>
<tr>
<td>249218</td>
<td>import ProductLinks from 'theme/components/core/ProductLinks.vue'</td>
</tr>
<tr>
<td>250219</td>
<td>import ProductCustomOptions from 'theme/components/core/ProductCustomOptions.vue'</td>
</tr>
<tr>
<td>251220</td>
<td>import ProductBundleOptions from 'theme/components/core/ProductBundleOptions.vue'</td>
</tr>
<tr>
<td>252221</td>
<td>import ProductGallery from 'theme/components/core/ProductGallery'</td>
</tr>
<tr>
<td>222</td>
<td>+ import Spinner from 'theme/components/core/Spinner'</td>
</tr>
<tr>
<td>253223</td>
<td>import PromotedOffers from 'theme/components/theme/blocks/PromotedOffers/PromotedOffers'</td>
</tr>
<tr>
<td>254224</td>
<td>import focusClean from 'theme/components/theme/directives/focusClean'</td>
</tr>
<tr>
<td>255</td>
<td>- import WebShare from '<s>@vue-storefront</s>/<s>core</s>/<s>modules</s>/~~social-share/components/~~WebShare'</td>
</tr>
<tr>
<td>225</td>
<td>+ import WebShare from 'theme/components/theme/WebShare'</td>
</tr>
<tr>
<td>256226</td>
<td>import BaseInputNumber from 'theme/components/core/blocks/Form/BaseInputNumber'</td>
</tr>
<tr>
<td>257227</td>
<td>import SizeGuide from 'theme/components/core/blocks/Product/SizeGuide'</td>
</tr>
<tr>
<td>228</td>
<td>+ import AddToWishlist from 'theme/components/core/blocks/Wishlist/AddToWishlist'</td>
</tr>
<tr>
<td>229</td>
<td>+ import AddToCompare from 'theme/components/core/blocks/Compare/AddToCompare'</td>
</tr>
<tr>
<td>230</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>231</td>
<td>+ import LazyHydrate from 'vue-lazy-hydration'</td>
</tr>
<tr>
<td>232</td>
<td>+ import { ProductOption } from '@vue-storefront/core/modules/catalog/components/ProductOption.ts'</td>
</tr>
<tr>
<td>233</td>
<td>+ import { getAvailableFiltersByProduct, getSelectedFiltersByProduct } from '@vue-storefront/core/modules/catalog/helpers/filters'</td>
</tr>
<tr>
<td>234</td>
<td>+ import { isOptionAvailableAsync } from '@vue-storefront/core/modules/catalog/helpers/index'</td>
</tr>
<tr>
<td>235</td>
<td>+ import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>236</td>
<td>+ import { htmlDecode } from '@vue-storefront/core/filters'</td>
</tr>
<tr>
<td>237</td>
<td>+ import { ReviewModule } from '@vue-storefront/core/modules/review'</td>
</tr>
<tr>
<td>238</td>
<td>+ import { RecentlyViewedModule } from '@vue-storefront/core/modules/recently-viewed'</td>
</tr>
<tr>
<td>239</td>
<td>+ import { registerModule, isModuleRegistered } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>240</td>
<td>+ import { onlineHelper, isServer } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>241</td>
<td>+ import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'</td>
</tr>
<tr>
<td>258242</td>
<td></td>
</tr>
<tr>
<td>259243</td>
<td>export default {</td>
</tr>
<tr>
<td>260244</td>
<td>components: {</td>
</tr>
<tr>
<td>261</td>
<td>-    'WishlistButton': () =&gt; import(/* webpackChunkName: &quot;wishlist&quot; */'theme/components/core/blocks/Wishlist/AddToWishlist'),</td>
</tr>
<tr>
<td>262245</td>
<td>AddToCart,</td>
</tr>
<tr>
<td>246</td>
<td>+    AddToCompare,</td>
</tr>
<tr>
<td>247</td>
<td>+    AddToWishlist,</td>
</tr>
<tr>
<td>263248</td>
<td>Breadcrumbs,</td>
</tr>
<tr>
<td>264249</td>
<td>ColorSelector,</td>
</tr>
<tr>
<td>265250</td>
<td>GenericSelector,</td>
</tr>
<tr>
<td></td>
<td>@@ -273,20 +258,110 @@ export default {</td>
</tr>
<tr>
<td>273258</td>
<td>Reviews,</td>
</tr>
<tr>
<td>274259</td>
<td>SizeSelector,</td>
</tr>
<tr>
<td>275260</td>
<td>WebShare,</td>
</tr>
<tr>
<td>276</td>
<td>-    <s>BaseInputNumber</s>,</td>
</tr>
<tr>
<td>277</td>
<td>-    <s>SizeGuide</s></td>
</tr>
<tr>
<td>261</td>
<td>+    SizeGuide,</td>
</tr>
<tr>
<td>262</td>
<td>+    LazyHydrate,</td>
</tr>
<tr>
<td>263</td>
<td>+    ProductQuantity</td>
</tr>
<tr>
<td>264</td>
<td>+  },</td>
</tr>
<tr>
<td>265</td>
<td>+  mixins: [ProductOption],</td>
</tr>
<tr>
<td>266</td>
<td>+  directives: { focusClean },</td>
</tr>
<tr>
<td>267</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>268</td>
<td>+    registerModule(ReviewModule)</td>
</tr>
<tr>
<td>269</td>
<td>+    registerModule(RecentlyViewedModule)</td>
</tr>
<tr>
<td>278270</td>
<td>},</td>
</tr>
<tr>
<td>279</td>
<td>-  mixins: [Product, VueOfflineMixin],</td>
</tr>
<tr>
<td>280271</td>
<td>data () {</td>
</tr>
<tr>
<td>281272</td>
<td>return {</td>
</tr>
<tr>
<td>282</td>
<td>-      detailsOpen: false</td>
</tr>
<tr>
<td>273</td>
<td>+      detailsOpen: false,</td>
</tr>
<tr>
<td>274</td>
<td>+      maxQuantity: 0,</td>
</tr>
<tr>
<td>275</td>
<td>+      quantityError: false,</td>
</tr>
<tr>
<td>276</td>
<td>+      isStockInfoLoading: false,</td>
</tr>
<tr>
<td>277</td>
<td>+      hasAttributesLoaded: false</td>
</tr>
<tr>
<td>283278</td>
<td>}</td>
</tr>
<tr>
<td>284279</td>
<td>},</td>
</tr>
<tr>
<td>285</td>
<td>-  directives: { focusClean },</td>
</tr>
<tr>
<td>286280</td>
<td>computed: {</td>
</tr>
<tr>
<td>281</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>282</td>
<td>+      getCurrentCategory: 'category-next/getCurrentCategory',</td>
</tr>
<tr>
<td>283</td>
<td>+      getBreadcrumbs: 'product/getProductBreadcrumbs',</td>
</tr>
<tr>
<td>284</td>
<td>+      getCurrentProduct: 'product/getCurrentProduct',</td>
</tr>
<tr>
<td>285</td>
<td>+      getProductGallery: 'product/getProductGallery',</td>
</tr>
<tr>
<td>286</td>
<td>+      getCurrentProductConfiguration: 'product/getCurrentProductConfiguration',</td>
</tr>
<tr>
<td>287</td>
<td>+      getOriginalProduct: 'product/getOriginalProduct',</td>
</tr>
<tr>
<td>288</td>
<td>+      attributesByCode: 'attribute/attributeListByCode'</td>
</tr>
<tr>
<td>289</td>
<td>+    }),</td>
</tr>
<tr>
<td>290</td>
<td>+    getOptionLabel () {</td>
</tr>
<tr>
<td>291</td>
<td>+      return (option) =&gt; {</td>
</tr>
<tr>
<td>292</td>
<td>+        const configName = option.attribute_code ? option.attribute_code : option.label.toLowerCase()</td>
</tr>
<tr>
<td>293</td>
<td>+        return this.getCurrentProductConfiguration[configName] ? this.getCurrentProductConfiguration[configName].label : configName</td>
</tr>
<tr>
<td>294</td>
<td>+      }</td>
</tr>
<tr>
<td>295</td>
<td>+    },</td>
</tr>
<tr>
<td>296</td>
<td>+    isOnline (value) {</td>
</tr>
<tr>
<td>297</td>
<td>+      return onlineHelper.isOnline</td>
</tr>
<tr>
<td>298</td>
<td>+    },</td>
</tr>
<tr>
<td>287299</td>
<td>structuredData () {</td>
</tr>
<tr>
<td>288300</td>
<td>return {</td>
</tr>
<tr>
<td>289</td>
<td>-        availability: <s>(<s>this.<s>product</s>.stock.is_in_stock</s>)</s> ? 'InStock' : 'OutOfStock'</td>
</tr>
<tr>
<td>301</td>
<td>+        availability: this.getCurrentProduct.stock &amp;&amp; this.getCurrentProduct.stock.is_in_stock ? 'InStock' : 'OutOfStock'</td>
</tr>
<tr>
<td>302</td>
<td>+      }</td>
</tr>
<tr>
<td>303</td>
<td>+    },</td>
</tr>
<tr>
<td>304</td>
<td>+    getProductOptions () {</td>
</tr>
<tr>
<td>305</td>
<td>+      if (</td>
</tr>
<tr>
<td>306</td>
<td>+        this.getCurrentProduct.errors &amp;&amp;</td>
</tr>
<tr>
<td>307</td>
<td>+        Object.keys(this.getCurrentProduct.errors).length &amp;&amp;</td>
</tr>
<tr>
<td>308</td>
<td>+        Object.keys(this.getCurrentProductConfiguration).length</td>
</tr>
<tr>
<td>309</td>
<td>+      ) {</td>
</tr>
<tr>
<td>310</td>
<td>+        return []</td>
</tr>
<tr>
<td>311</td>
<td>+      }</td>
</tr>
<tr>
<td>312</td>
<td>+      return this.getCurrentProduct.configurable_options</td>
</tr>
<tr>
<td>313</td>
<td>+    },</td>
</tr>
<tr>
<td>314</td>
<td>+    getOfflineImage () {</td>
</tr>
<tr>
<td>315</td>
<td>+      return {</td>
</tr>
<tr>
<td>316</td>
<td>+        src: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),</td>
</tr>
<tr>
<td>317</td>
<td>+        error: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),</td>
</tr>
<tr>
<td>318</td>
<td>+        loading: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height)</td>
</tr>
<tr>
<td>319</td>
<td>+      }</td>
</tr>
<tr>
<td>320</td>
<td>+    },</td>
</tr>
<tr>
<td>321</td>
<td>+    getCustomAttributes () {</td>
</tr>
<tr>
<td>322</td>
<td>+      return Object.values(this.attributesByCode).filter(a =&gt; {</td>
</tr>
<tr>
<td>323</td>
<td>+        return a.is_visible &amp;&amp; a.is_user_defined &amp;&amp; (parseInt(a.is_visible_on_front) || a.is_visible_on_front === true) &amp;&amp; this.getCurrentProduct[a.attribute_code]</td>
</tr>
<tr>
<td>324</td>
<td>+      }).sort((a, b) =&gt; { return a.attribute_id &gt; b.attribute_id })</td>
</tr>
<tr>
<td>325</td>
<td>+    },</td>
</tr>
<tr>
<td>326</td>
<td>+    getAvailableFilters () {</td>
</tr>
<tr>
<td>327</td>
<td>+      return getAvailableFiltersByProduct(this.getCurrentProduct)</td>
</tr>
<tr>
<td>328</td>
<td>+    },</td>
</tr>
<tr>
<td>329</td>
<td>+    getSelectedFilters () {</td>
</tr>
<tr>
<td>330</td>
<td>+      return getSelectedFiltersByProduct(this.getCurrentProduct, this.getCurrentProductConfiguration)</td>
</tr>
<tr>
<td>331</td>
<td>+    },</td>
</tr>
<tr>
<td>332</td>
<td>+    isSimpleOrConfigurable () {</td>
</tr>
<tr>
<td>333</td>
<td>+      return ['simple', 'configurable'].includes(this.getCurrentProduct.type_id)</td>
</tr>
<tr>
<td>334</td>
<td>+    },</td>
</tr>
<tr>
<td>335</td>
<td>+    isAddToCartDisabled () {</td>
</tr>
<tr>
<td>336</td>
<td>+      return this.quantityError ||</td>
</tr>
<tr>
<td>337</td>
<td>+        this.isStockInfoLoading ||</td>
</tr>
<tr>
<td>338</td>
<td>+        (this.isOnline &amp;&amp; !this.maxQuantity &amp;&amp; this.isSimpleOrConfigurable)</td>
</tr>
<tr>
<td>339</td>
<td>+    }</td>
</tr>
<tr>
<td>340</td>
<td>+  },</td>
</tr>
<tr>
<td>341</td>
<td>+  async mounted () {</td>
</tr>
<tr>
<td>342</td>
<td>+    await this.$store.dispatch('recently-viewed/addItem', this.getCurrentProduct)</td>
</tr>
<tr>
<td>343</td>
<td>+  },</td>
</tr>
<tr>
<td>344</td>
<td>+  async asyncData ({ store, route }) {</td>
</tr>
<tr>
<td>345</td>
<td>+    const product = await store.dispatch('product/loadProduct', { parentSku: route.params.parentSku, childSku: route &amp;&amp; route.params &amp;&amp; route.params.childSku ? route.params.childSku : null })</td>
</tr>
<tr>
<td>346</td>
<td>+    const loadBreadcrumbsPromise = store.dispatch('product/loadProductBreadcrumbs', { product })</td>
</tr>
<tr>
<td>347</td>
<td>+    if (isServer) await loadBreadcrumbsPromise</td>
</tr>
<tr>
<td>348</td>
<td>+    catalogHooksExecutors.productPageVisited(product)</td>
</tr>
<tr>
<td>349</td>
<td>+  },</td>
</tr>
<tr>
<td>350</td>
<td>+  beforeRouteEnter (to, from, next) {</td>
</tr>
<tr>
<td>351</td>
<td>+    if (isServer) {</td>
</tr>
<tr>
<td>352</td>
<td>+      next()</td>
</tr>
<tr>
<td>353</td>
<td>+    } else {</td>
</tr>
<tr>
<td>354</td>
<td>+      next((vm) =&gt; {</td>
</tr>
<tr>
<td>355</td>
<td>+        vm.getQuantity()</td>
</tr>
<tr>
<td>356</td>
<td>+      })</td>
</tr>
<tr>
<td>357</td>
<td>+    }</td>
</tr>
<tr>
<td>358</td>
<td>+  },</td>
</tr>
<tr>
<td>359</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>360</td>
<td>+    isOnline: {</td>
</tr>
<tr>
<td>361</td>
<td>+      handler (isOnline) {</td>
</tr>
<tr>
<td>362</td>
<td>+        if (isOnline) {</td>
</tr>
<tr>
<td>363</td>
<td>+          this.getQuantity()</td>
</tr>
<tr>
<td>364</td>
<td>+        }</td>
</tr>
<tr>
<td>290365</td>
<td>}</td>
</tr>
<tr>
<td>291366</td>
<td>}</td>
</tr>
<tr>
<td>292367</td>
<td>},</td>
</tr>
<tr>
<td></td>
<td>@@ -298,26 +373,70 @@ export default {</td>
</tr>
<tr>
<td>298373</td>
<td>notifyOutStock () {</td>
</tr>
<tr>
<td>299374</td>
<td>this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>300375</td>
<td>type: 'error',</td>
</tr>
<tr>
<td>301</td>
<td>-        message: this.$t(<s>'The product is out of stock and cannot be added to the cart!'),</s></td>
</tr>
<tr>
<td>376</td>
<td>+        message: this.$t(</td>
</tr>
<tr>
<td>377</td>
<td>+          'The product is out of stock and cannot be added to the cart!'</td>
</tr>
<tr>
<td>378</td>
<td>+        ),</td>
</tr>
<tr>
<td>302379</td>
<td>action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>303380</td>
<td>})</td>
</tr>
<tr>
<td>304381</td>
<td>},</td>
</tr>
<tr>
<td>305382</td>
<td>notifyWrongAttributes () {</td>
</tr>
<tr>
<td>306383</td>
<td>this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>307384</td>
<td>type: 'warning',</td>
</tr>
<tr>
<td>308</td>
<td>-        message: this.$t(<s>'No such configuration for the product. Please do choose another combination of attributes.'),</s></td>
</tr>
<tr>
<td>385</td>
<td>+        message: this.$t(</td>
</tr>
<tr>
<td>386</td>
<td>+          'No such configuration for the product. Please do choose another combination of attributes.'</td>
</tr>
<tr>
<td>387</td>
<td>+        ),</td>
</tr>
<tr>
<td>309388</td>
<td>action1: { label: this.$t('OK') }</td>
</tr>
<tr>
<td>310389</td>
<td>})</td>
</tr>
<tr>
<td>311390</td>
<td>},</td>
</tr>
<tr>
<td>391</td>
<td>+    changeFilter (variant) {</td>
</tr>
<tr>
<td>392</td>
<td>+      this.$bus.$emit(</td>
</tr>
<tr>
<td>393</td>
<td>+        'filter-changed-product',</td>
</tr>
<tr>
<td>394</td>
<td>+        Object.assign({ attribute_code: variant.type }, variant)</td>
</tr>
<tr>
<td>395</td>
<td>+      )</td>
</tr>
<tr>
<td>396</td>
<td>+      this.getQuantity()</td>
</tr>
<tr>
<td>397</td>
<td>+    },</td>
</tr>
<tr>
<td>312398</td>
<td>openSizeGuide () {</td>
</tr>
<tr>
<td>313399</td>
<td>this.$bus.$emit('modal-show', 'modal-sizeguide')</td>
</tr>
<tr>
<td>400</td>
<td>+    },</td>
</tr>
<tr>
<td>401</td>
<td>+    isOptionAvailable (option) { // check if the option is available</td>
</tr>
<tr>
<td>402</td>
<td>+      const currentConfig = Object.assign({}, this.getCurrentProductConfiguration)</td>
</tr>
<tr>
<td>403</td>
<td>+      currentConfig[option.type] = option</td>
</tr>
<tr>
<td>404</td>
<td>+      return isOptionAvailableAsync(this.$store, { product: this.getCurrentProduct, configuration: currentConfig })</td>
</tr>
<tr>
<td>405</td>
<td>+    },</td>
</tr>
<tr>
<td>406</td>
<td>+    async getQuantity () {</td>
</tr>
<tr>
<td>407</td>
<td>+      if (this.isStockInfoLoading) return // stock info is already loading</td>
</tr>
<tr>
<td>408</td>
<td>+      this.isStockInfoLoading = true</td>
</tr>
<tr>
<td>409</td>
<td>+      try {</td>
</tr>
<tr>
<td>410</td>
<td>+        const res = await this.$store.dispatch('stock/check', {</td>
</tr>
<tr>
<td>411</td>
<td>+          product: this.getCurrentProduct,</td>
</tr>
<tr>
<td>412</td>
<td>+          qty: this.getCurrentProduct.qty</td>
</tr>
<tr>
<td>413</td>
<td>+        })</td>
</tr>
<tr>
<td>414</td>
<td>+        this.maxQuantity = res.qty</td>
</tr>
<tr>
<td>415</td>
<td>+      } finally {</td>
</tr>
<tr>
<td>416</td>
<td>+        this.isStockInfoLoading = false</td>
</tr>
<tr>
<td>417</td>
<td>+      }</td>
</tr>
<tr>
<td>418</td>
<td>+    },</td>
</tr>
<tr>
<td>419</td>
<td>+    handleQuantityError (error) {</td>
</tr>
<tr>
<td>420</td>
<td>+      this.quantityError = error</td>
</tr>
<tr>
<td>314421</td>
<td>}</td>
</tr>
<tr>
<td>315422</td>
<td>},</td>
</tr>
<tr>
<td>316</td>
<td>-  <s>validations:</s> {</td>
</tr>
<tr>
<td>317</td>
<td>-    <s>product:</s> <s>{</s></td>
</tr>
<tr>
<td>318</td>
<td>- ~~      qty:~~ {</td>
</tr>
<tr>
<td>319</td>
<td>- ~~        minValue~~: <s>minValue(1)</s></td>
</tr>
<tr>
<td>320</td>
<td>- ~~      }~~</td>
</tr>
<tr>
<td>423</td>
<td>+  metaInfo () {</td>
</tr>
<tr>
<td>424</td>
<td>+    const storeView = currentStoreView()</td>
</tr>
<tr>
<td>425</td>
<td>+    return {</td>
</tr>
<tr>
<td>426</td>
<td>+      link: [</td>
</tr>
<tr>
<td>427</td>
<td>+        { rel: 'amphtml',</td>
</tr>
<tr>
<td>428</td>
<td>+          href: this.$router.resolve(localizedRoute({</td>
</tr>
<tr>
<td>429</td>
<td>+            name: this.getCurrentProduct.type_id + '-product-amp',</td>
</tr>
<tr>
<td>430</td>
<td>+            params: {</td>
</tr>
<tr>
<td>431</td>
<td>+              parentSku: this.getCurrentProduct.parentSku ? this.getCurrentProduct.parentSku : this.getCurrentProduct.sku,</td>
</tr>
<tr>
<td>432</td>
<td>+              slug: this.getCurrentProduct.slug,</td>
</tr>
<tr>
<td>433</td>
<td>+              childSku: this.getCurrentProduct.sku</td>
</tr>
<tr>
<td>434</td>
<td>+            }</td>
</tr>
<tr>
<td>435</td>
<td>+          }, storeView.storeCode)).href</td>
</tr>
<tr>
<td>436</td>
<td>+        }</td>
</tr>
<tr>
<td>437</td>
<td>+      ],</td>
</tr>
<tr>
<td>438</td>
<td>+      title: htmlDecode(this.getCurrentProduct.meta_title || this.getCurrentProduct.name),</td>
</tr>
<tr>
<td>439</td>
<td>+      meta: this.getCurrentProduct.meta_description ? [{ vmid: 'description', name: 'description', content: htmlDecode(this.getCurrentProduct.meta_description) }] : []</td>
</tr>
<tr>
<td>321440</td>
<td>}</td>
</tr>
<tr>
<td>322441</td>
<td>}</td>
</tr>
<tr>
<td>323442</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>在这里再次<em>vuex</em> <em>getter</em>被广泛用于<em>计算</em>数据。</p>
<h4 id="_17-现在-静态的网页。" tabindex="-1"><a class="header-anchor" href="#_17-现在-静态的网页。" aria-hidden="true">#</a> <a href="#_17-now-static-in-pages">#</a>17.现在，<em>静态</em>的<em>网页</em>。</h4>
<ul>
<li>转到<code>./src/themes/degi/pages/Static.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/pages/Static.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,7 +2,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td><div></td>
</tr>
<tr>
<td>33</td>
<td><div class="bg-cl-secondary py35 pl20"></td>
</tr>
<tr>
<td>44</td>
<td><div class="container"></td>
</tr>
<tr>
<td>5</td>
<td>-        &lt;breadcrumbs :<s>routes</s>=&quot;<s>[{name: 'Homepage', route_link: '/'}]</s>&quot; :active-route=&quot;$props.title&quot; /&gt;</td>
</tr>
<tr>
<td>5</td>
<td>+        <breadcrumbs :with-homepage="true" :active-route="$props.title" /></td>
</tr>
<tr>
<td>66</td>
<td><h2 class="fs-big"></td>
</tr>
<tr>
<td>77</td>
<td>{{ $props.title }}</td>
</tr>
<tr>
<td>88</td>
<td></h2></td>
</tr>
<tr>
<td></td>
<td>@@ -35,6 +35,8 @@ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>3535</td>
<td>import Breadcrumbs from 'theme/components/core/Breadcrumbs'</td>
</tr>
<tr>
<td>3636</td>
<td>import StaticExample from 'theme/components/theme/blocks/Static/Example'</td>
</tr>
<tr>
<td>3737</td>
<td>import StaticShortExample from 'theme/components/theme/blocks/Static/Short'</td>
</tr>
<tr>
<td>38</td>
<td>+ import { getPathForStaticPage } from 'theme/helpers'</td>
</tr>
<tr>
<td>39</td>
<td>+ import { localizedRoute } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>3840</td>
<td></td>
</tr>
<tr>
<td>3941</td>
<td>export default {</td>
</tr>
<tr>
<td>4042</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -65,9 +67,9 @@ export default {</td>
</tr>
<tr>
<td>6567</td>
<td>data () {</td>
</tr>
<tr>
<td>6668</td>
<td>return {</td>
</tr>
<tr>
<td>6769</td>
<td>navigation: [</td>
</tr>
<tr>
<td>68</td>
<td>-        { title: i18n.t('About us'), link: '/about-us', component: StaticExample },</td>
</tr>
<tr>
<td>69</td>
<td>-        { title: i18n.t('Customer service'), link: '/customer-service', component: StaticShortExample },</td>
</tr>
<tr>
<td>70</td>
<td>-        { title: i18n.t('Store locator'), link: '/store-locator', component: StaticExample },</td>
</tr>
<tr>
<td>70</td>
<td>+        { title: i18n.t('About us'), link: getPathForStaticPage('/about-us'), component: StaticExample },</td>
</tr>
<tr>
<td>71</td>
<td>+        { title: i18n.t('Customer service'), link: getPathForStaticPage('/customer-service'), component: StaticShortExample },</td>
</tr>
<tr>
<td>72</td>
<td>+        { title: i18n.t('Store locator'), link: localizedRoute('/store-locator'), component: StaticExample },</td>
</tr>
<tr>
<td>7173</td>
<td>{ title: i18n.t('Delivery'), link: '/delivery', component: StaticShortExample },</td>
</tr>
<tr>
<td>7274</td>
<td>{ title: i18n.t('Return policy'), link: '/returns', component: StaticExample },</td>
</tr>
<tr>
<td>7375</td>
<td>{ title: i18n.t('Privacy policy'), link: '/privacy', component: StaticShortExample },</td>
</tr>
</tbody>
</table>
<p><em>路由</em>已更新，以支持<em>MultiStore的</em>功能。</p>
<h4 id="_18-auth部分的工作时间" tabindex="-1"><a class="header-anchor" href="#_18-auth部分的工作时间" aria-hidden="true">#</a> <a href="#_18-time-to-work-on-auth-part">#</a>18. <em>Auth</em>部分的工作时间</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Auth/ForgotPass.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Auth/ForgotPass.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,17 +1,17 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div></td>
</tr>
<tr>
<td>33</td>
<td><header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary"></td>
</tr>
<tr>
<td>4</td>
<td>+      {{ $t('Reset password') }}</td>
</tr>
<tr>
<td>45</td>
<td>&lt;i</td>
</tr>
<tr>
<td>56</td>
<td>slot=&quot;close&quot;</td>
</tr>
<tr>
<td>6</td>
<td>-        class=&quot;modal-close material-icons ~~p15 ~~cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+        class=&quot;modal-close material-icons cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>78</td>
<td>@click=&quot;close&quot;</td>
</tr>
<tr>
<td>89</td>
<td>&gt;</td>
</tr>
<tr>
<td>910</td>
<td>close</td>
</tr>
<tr>
<td>1011</td>
<td></i></td>
</tr>
<tr>
<td>11</td>
<td>-      {{ $t('Reset password') }}</td>
</tr>
<tr>
<td>1212</td>
<td></header></td>
</tr>
<tr>
<td>1313</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>-    <div class="modal-content pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>14</td>
<td>+    <div class="modal-content bg-cl-primary pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>1515</td>
<td><template v-if="!passwordSent"></td>
</tr>
<tr>
<td>1616</td>
<td><form @submit.prevent="sendEmail" novalidate></td>
</tr>
<tr>
<td>1717</td>
<td><div class="mb20"></td>
</tr>
<tr>
<td></td>
<td>@@ -128,6 +128,14 @@ export default {</td>
</tr>
<tr>
<td>128128</td>
<td></script></td>
</tr>
<tr>
<td>129129</td>
<td></td>
</tr>
<tr>
<td>130130</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>131</td>
<td>+  .modal-header{</td>
</tr>
<tr>
<td>132</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>133</td>
<td>+    align-items: center;</td>
</tr>
<tr>
<td>134</td>
<td>+    justify-content: space-between;</td>
</tr>
<tr>
<td>135</td>
<td>+  }</td>
</tr>
<tr>
<td>136</td>
<td>+  .modal-close{</td>
</tr>
<tr>
<td>137</td>
<td>+    cursor: pointer;</td>
</tr>
<tr>
<td>138</td>
<td>+  }</td>
</tr>
<tr>
<td>131139</td>
<td>.modal-content {</td>
</tr>
<tr>
<td>132140</td>
<td>@media (max-width: 400px) {</td>
</tr>
<tr>
<td>133141</td>
<td>padding-left: 20px;</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Auth/Login.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Auth/Login.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,21 +1,21 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div></td>
</tr>
<tr>
<td>33</td>
<td><header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary"></td>
</tr>
<tr>
<td>4</td>
<td>+      {{ $t('Log in') }}</td>
</tr>
<tr>
<td>45</td>
<td>&lt;i</td>
</tr>
<tr>
<td>56</td>
<td>slot=&quot;close&quot;</td>
</tr>
<tr>
<td>6</td>
<td>-        class=&quot;modal-close material-icons ~~p15 ~~cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+        class=&quot;modal-close material-icons cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>78</td>
<td>@click=&quot;close&quot;</td>
</tr>
<tr>
<td>89</td>
<td>&gt;</td>
</tr>
<tr>
<td>910</td>
<td>close</td>
</tr>
<tr>
<td>1011</td>
<td></i></td>
</tr>
<tr>
<td>11</td>
<td>-      {{ $t('Log in') }}</td>
</tr>
<tr>
<td>1212</td>
<td></header></td>
</tr>
<tr>
<td>1313</td>
<td><div v-if="hasRedirect" class="pt10 pb10 px65 redirect-error"></td>
</tr>
<tr>
<td>1414</td>
<td><p class="h5 mb0 mt0"></td>
</tr>
<tr>
<td>1515</td>
<td>{{ $t('You need to be logged in to see this page') }}</td>
</tr>
<tr>
<td>1616</td>
<td></p></td>
</tr>
<tr>
<td>1717</td>
<td></div></td>
</tr>
<tr>
<td>18</td>
<td>-    <div class="modal-content pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>18</td>
<td>+    <div class="modal-content bg-cl-primary pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>1919</td>
<td><form @submit.prevent="login" novalidate></td>
</tr>
<tr>
<td>2020</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td>2121</td>
<td>class=&quot;mb10&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -156,7 +156,14 @@ export default {</td>
</tr>
<tr>
<td>156156</td>
<td>@import '~theme/css/helpers/functions/color';</td>
</tr>
<tr>
<td>157157</td>
<td>$color-error: color(error);</td>
</tr>
<tr>
<td>158158</td>
<td>$white: color(white);</td>
</tr>
<tr>
<td>159</td>
<td>-</td>
</tr>
<tr>
<td>159</td>
<td>+  .modal-header{</td>
</tr>
<tr>
<td>160</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>161</td>
<td>+    align-items: center;</td>
</tr>
<tr>
<td>162</td>
<td>+    justify-content: space-between;</td>
</tr>
<tr>
<td>163</td>
<td>+  }</td>
</tr>
<tr>
<td>164</td>
<td>+  .modal-close{</td>
</tr>
<tr>
<td>165</td>
<td>+    cursor: pointer;</td>
</tr>
<tr>
<td>166</td>
<td>+  }</td>
</tr>
<tr>
<td>160167</td>
<td>.modal-content {</td>
</tr>
<tr>
<td>161168</td>
<td>@media (max-width: 400px) {</td>
</tr>
<tr>
<td>162169</td>
<td>padding-left: 20px;</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Auth/Register.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Auth/Register.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,17 +1,17 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div></td>
</tr>
<tr>
<td>33</td>
<td><header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary"></td>
</tr>
<tr>
<td>4</td>
<td>+      {{ $t('Register') }}</td>
</tr>
<tr>
<td>45</td>
<td>&lt;i</td>
</tr>
<tr>
<td>56</td>
<td>slot=&quot;close&quot;</td>
</tr>
<tr>
<td>6</td>
<td>-        class=&quot;modal-close material-icons ~~p15 ~~cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+        class=&quot;modal-close material-icons cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>78</td>
<td>@click=&quot;close&quot;</td>
</tr>
<tr>
<td>89</td>
<td>&gt;</td>
</tr>
<tr>
<td>910</td>
<td>close</td>
</tr>
<tr>
<td>1011</td>
<td></i></td>
</tr>
<tr>
<td>11</td>
<td>-      {{ $t('Register') }}</td>
</tr>
<tr>
<td>1212</td>
<td></header></td>
</tr>
<tr>
<td>1313</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>-    <div class="modal-content pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>14</td>
<td>+    <div class="modal-content bg-cl-primary pt30 pb60 px65 cl-secondary"></td>
</tr>
<tr>
<td>1515</td>
<td><form @submit.prevent="register" novalidate></td>
</tr>
<tr>
<td>1616</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td>1717</td>
<td>class=&quot;mb10&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -37,7 +37,7 @@</td>
</tr>
<tr>
<td>3737</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td>3838</td>
<td>class=&quot;col-xs-6&quot;</td>
</tr>
<tr>
<td>3939</td>
<td>type=&quot;text&quot;</td>
</tr>
<tr>
<td>40</td>
<td>-            name=&quot;<s>fist</s>-name&quot;</td>
</tr>
<tr>
<td>40</td>
<td>+            name=&quot;first-name&quot;</td>
</tr>
<tr>
<td>4141</td>
<td>autocomplete=&quot;given-name&quot;</td>
</tr>
<tr>
<td>4242</td>
<td>v-model=&quot;firstName&quot;</td>
</tr>
<tr>
<td>4343</td>
<td>@blur=&quot;$v.firstName.$touch()&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -204,6 +204,14 @@ export default {</td>
</tr>
<tr>
<td>204204</td>
<td></script></td>
</tr>
<tr>
<td>205205</td>
<td></td>
</tr>
<tr>
<td>206206</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>207</td>
<td>+  .modal-header{</td>
</tr>
<tr>
<td>208</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>209</td>
<td>+    align-items: center;</td>
</tr>
<tr>
<td>210</td>
<td>+    justify-content: space-between;</td>
</tr>
<tr>
<td>211</td>
<td>+  }</td>
</tr>
<tr>
<td>212</td>
<td>+  .modal-close{</td>
</tr>
<tr>
<td>213</td>
<td>+    cursor: pointer;</td>
</tr>
<tr>
<td>214</td>
<td>+  }</td>
</tr>
<tr>
<td>207215</td>
<td>.modal-content {</td>
</tr>
<tr>
<td>208216</td>
<td>@media (max-width: 400px) {</td>
</tr>
<tr>
<td>209217</td>
<td>padding-left: 20px;</td>
</tr>
</tbody>
</table>
<h4 id="_19-下一个要修复的块是类别-侧边栏" tabindex="-1"><a class="header-anchor" href="#_19-下一个要修复的块是类别-侧边栏" aria-hidden="true">#</a> <a href="#_19-next-block-to-fix-is-category-sidebar">#</a>19. 下一个要修复的块是<em>类别/侧边栏</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Category/Sidebar.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Category/Sidebar.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -27,8 +27,9 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>2727</td>
<td>code=&quot;color&quot;</td>
</tr>
<tr>
<td>2828</td>
<td>v-for=&quot;(color, index) in filter&quot;</td>
</tr>
<tr>
<td>2929</td>
<td>:key=&quot;index&quot;</td>
</tr>
<tr>
<td>30</td>
<td>-          :<s>id</s>=&quot;color~~.id~~&quot;</td>
</tr>
<tr>
<td>31</td>
<td>-          :<s>label</s>=&quot;<s>color.label</s>&quot;</td>
</tr>
<tr>
<td>30</td>
<td>+          :variant=&quot;color&quot;</td>
</tr>
<tr>
<td>31</td>
<td>+          :selected-filters=&quot;getCurrentFilters&quot;</td>
</tr>
<tr>
<td>32</td>
<td>+          @change=&quot;$emit('changeFilter', $event)&quot;</td>
</tr>
<tr>
<td>3233</td>
<td>/&gt;</td>
</tr>
<tr>
<td>3334</td>
<td></div></td>
</tr>
<tr>
<td>3435</td>
<td><div v-else-if="filterIndex==='size'"></td>
</tr>
<tr>
<td></td>
<td>@@ -38,8 +39,9 @@</td>
</tr>
<tr>
<td>3839</td>
<td>class=&quot;size-select mr10 mb10&quot;</td>
</tr>
<tr>
<td>3940</td>
<td>v-for=&quot;(size, index) in sortById(filter)&quot;</td>
</tr>
<tr>
<td>4041</td>
<td>:key=&quot;index&quot;</td>
</tr>
<tr>
<td>41</td>
<td>-          :<s>id</s>=&quot;size~~.id~~&quot;</td>
</tr>
<tr>
<td>42</td>
<td>-          :<s>label</s>=&quot;<s>size.label</s>&quot;</td>
</tr>
<tr>
<td>42</td>
<td>+          :variant=&quot;size&quot;</td>
</tr>
<tr>
<td>43</td>
<td>+          :selected-filters=&quot;getCurrentFilters&quot;</td>
</tr>
<tr>
<td>44</td>
<td>+          @change=&quot;$emit('changeFilter', $event)&quot;</td>
</tr>
<tr>
<td>4345</td>
<td>/&gt;</td>
</tr>
<tr>
<td>4446</td>
<td></div></td>
</tr>
<tr>
<td>4547</td>
<td><div v-else-if="filterIndex==='price'"></td>
</tr>
<tr>
<td></td>
<td>@@ -53,6 +55,9 @@</td>
</tr>
<tr>
<td>5355</td>
<td>:from=&quot;price.from&quot;</td>
</tr>
<tr>
<td>5456</td>
<td>:to=&quot;price.to&quot;</td>
</tr>
<tr>
<td>5557</td>
<td>:content=&quot;price.label&quot;</td>
</tr>
<tr>
<td>58</td>
<td>+          :variant=&quot;price&quot;</td>
</tr>
<tr>
<td>59</td>
<td>+          :selected-filters=&quot;getCurrentFilters&quot;</td>
</tr>
<tr>
<td>60</td>
<td>+          @change=&quot;$emit('changeFilter', $event)&quot;</td>
</tr>
<tr>
<td>5661</td>
<td>/&gt;</td>
</tr>
<tr>
<td>5762</td>
<td></div></td>
</tr>
<tr>
<td>5863</td>
<td><div v-else class="sidebar__inline-selecors"></td>
</tr>
<tr>
<td></td>
<td>@@ -62,8 +67,9 @@</td>
</tr>
<tr>
<td>6267</td>
<td>:code=&quot;filterIndex&quot;</td>
</tr>
<tr>
<td>6368</td>
<td>v-for=&quot;(option, index) in filter&quot;</td>
</tr>
<tr>
<td>6469</td>
<td>:key=&quot;index&quot;</td>
</tr>
<tr>
<td>65</td>
<td>-          :<s>id</s>=&quot;option~~.id~~&quot;</td>
</tr>
<tr>
<td>66</td>
<td>-          :<s>label</s>=&quot;<s>option.label</s>&quot;</td>
</tr>
<tr>
<td>70</td>
<td>+          :variant=&quot;option&quot;</td>
</tr>
<tr>
<td>71</td>
<td>+          :selected-filters=&quot;getCurrentFilters&quot;</td>
</tr>
<tr>
<td>72</td>
<td>+          @change=&quot;$emit('changeFilter', $event)&quot;</td>
</tr>
<tr>
<td>6773</td>
<td>/&gt;</td>
</tr>
<tr>
<td>6874</td>
<td></div></td>
</tr>
<tr>
<td>6975</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -85,12 +91,11 @@</td>
</tr>
<tr>
<td>8591</td>
<td></template></td>
</tr>
<tr>
<td>8692</td>
<td></td>
</tr>
<tr>
<td>8793</td>
<td><script></td>
</tr>
<tr>
<td>88</td>
<td>- import Sidebar from '@vue-storefront/core/compatibility/components/blocks/Category/Sidebar'</td>
</tr>
<tr>
<td>89</td>
<td>-</td>
</tr>
<tr>
<td>9094</td>
<td>import ColorSelector from 'theme/components/core/ColorSelector'</td>
</tr>
<tr>
<td>9195</td>
<td>import SizeSelector from 'theme/components/core/SizeSelector'</td>
</tr>
<tr>
<td>9296</td>
<td>import PriceSelector from 'theme/components/core/PriceSelector'</td>
</tr>
<tr>
<td>9397</td>
<td>import GenericSelector from 'theme/components/core/GenericSelector'</td>
</tr>
<tr>
<td>98</td>
<td>+ import pickBy from 'lodash-es/pickBy'</td>
</tr>
<tr>
<td>9499</td>
<td></td>
</tr>
<tr>
<td>95100</td>
<td>export default {</td>
</tr>
<tr>
<td>96101</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -99,7 +104,31 @@ export default {</td>
</tr>
<tr>
<td>99104</td>
<td>PriceSelector,</td>
</tr>
<tr>
<td>100105</td>
<td>GenericSelector</td>
</tr>
<tr>
<td>101106</td>
<td>},</td>
</tr>
<tr>
<td>102</td>
<td>-  <s>mixins</s>: <s>[Sidebar]</s></td>
</tr>
<tr>
<td>107</td>
<td>+  props: {</td>
</tr>
<tr>
<td>108</td>
<td>+    filters: {</td>
</tr>
<tr>
<td>109</td>
<td>+      type: Object,</td>
</tr>
<tr>
<td>110</td>
<td>+      required: true</td>
</tr>
<tr>
<td>111</td>
<td>+    }</td>
</tr>
<tr>
<td>112</td>
<td>+  },</td>
</tr>
<tr>
<td>113</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>114</td>
<td>+    hasActiveFilters () {</td>
</tr>
<tr>
<td>115</td>
<td>+      return this.$store.getters['category-next/hasActiveFilters']</td>
</tr>
<tr>
<td>116</td>
<td>+    },</td>
</tr>
<tr>
<td>117</td>
<td>+    getCurrentFilters () {</td>
</tr>
<tr>
<td>118</td>
<td>+      return this.$store.getters['category-next/getCurrentFilters']</td>
</tr>
<tr>
<td>119</td>
<td>+    },</td>
</tr>
<tr>
<td>120</td>
<td>+    availableFilters () {</td>
</tr>
<tr>
<td>121</td>
<td>+      return pickBy(this.filters, (filter, filterType) =&gt; { return (filter.length &amp;&amp; !this.$store.getters['category-next/getSystemFilterNames'].includes(filterType)) })</td>
</tr>
<tr>
<td>122</td>
<td>+    }</td>
</tr>
<tr>
<td>123</td>
<td>+  },</td>
</tr>
<tr>
<td>124</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>125</td>
<td>+    resetAllFilters () {</td>
</tr>
<tr>
<td>126</td>
<td>+      this.$store.dispatch('category-next/resetSearchFilters')</td>
</tr>
<tr>
<td>127</td>
<td>+    },</td>
</tr>
<tr>
<td>128</td>
<td>+    sortById (filters) {</td>
</tr>
<tr>
<td>129</td>
<td>+      return [...filters].sort((a, b) =&gt; { return a.id - b.id })</td>
</tr>
<tr>
<td>130</td>
<td>+    }</td>
</tr>
<tr>
<td>131</td>
<td>+  }</td>
</tr>
<tr>
<td>103132</td>
<td>}</td>
</tr>
<tr>
<td>104133</td>
<td></script></td>
</tr>
</tbody>
</table>
<p>添加了<em>事件</em>。</p>
<p><code>methods</code>并且<code>computed</code>还添加了<em>过滤器</em></p>
<h4 id="_20-下一个要解决的问题是checkout" tabindex="-1"><a class="header-anchor" href="#_20-下一个要解决的问题是checkout" aria-hidden="true">#</a> <a href="#_20-next-block-to-fix-is-checkout">#</a>20. 下一个要解决的问题是<em>Checkout</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/OrderConfirmation.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/OrderConfirmation.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -6,7 +6,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td><div slot="content"></td>
</tr>
<tr>
<td>77</td>
<td><p>{{ $t('Please confirm order you placed when you was offline') }}</p></td>
</tr>
<tr>
<td>88</td>
<td><div class="mb40" v-for="(order, key) in ordersData" :key="key"></td>
</tr>
<tr>
<td>9</td>
<td>-        <h3>{{ $t('Order #'<s>)</s> <s>}}</s>{<s>{</s> key + 1 }}</h3></td>
</tr>
<tr>
<td>9</td>
<td>+        <h3>{{ $t('Order #{id}', { id: key + 1}) }}</h3></td>
</tr>
<tr>
<td>1010</td>
<td><h4>{{ $t('Items ordered') }}</h4></td>
</tr>
<tr>
<td>1111</td>
<td><table class="brdr-1 brdr-cl-bg-secondary"></td>
</tr>
<tr>
<td>1212</td>
<td><thead></td>
</tr>
<tr>
<td></td>
<td>@@ -34,13 +34,13 @@</td>
</tr>
<tr>
<td>3434</td>
<td></span></td>
</tr>
<tr>
<td>3535</td>
<td></td></td>
</tr>
<tr>
<td>3636</td>
<td><td class="fs-medium lh25" :data-th="$t('Price')"></td>
</tr>
<tr>
<td>37</td>
<td>-                {{ product.<s>priceInclTax</s> | price }}</td>
</tr>
<tr>
<td>37</td>
<td>+                {{ product.price_incl_tax | price }}</td>
</tr>
<tr>
<td>3838</td>
<td></td></td>
</tr>
<tr>
<td>3939</td>
<td><td class="fs-medium lh25 align-right" :data-th="$t('Qty')"></td>
</tr>
<tr>
<td>4040</td>
<td>{{ product.qty }}</td>
</tr>
<tr>
<td>4141</td>
<td></td></td>
</tr>
<tr>
<td>4242</td>
<td><td class="fs-medium lh25" :data-th="$t('Subtotal')"></td>
</tr>
<tr>
<td>43</td>
<td>-                {{ product.<s>priceInclTax</s> * product.qty | price }}</td>
</tr>
<tr>
<td>43</td>
<td>+                {{ product.price_incl_tax * product.qty | price }}</td>
</tr>
<tr>
<td>4444</td>
<td></td></td>
</tr>
<tr>
<td>4545</td>
<td></tr></td>
</tr>
<tr>
<td>4646</td>
<td></tbody></td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/OrderReview.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/OrderReview.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -116,6 +116,8 @@ import ButtonFull from 'theme/components/theme/ButtonFull'</th>
</tr>
</thead>
<tbody>
<tr>
<td>116116</td>
<td>import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'</td>
</tr>
<tr>
<td>117117</td>
<td>import Modal from 'theme/components/core/Modal'</td>
</tr>
<tr>
<td>118118</td>
<td>import { OrderReview } from '@vue-storefront/core/modules/checkout/components/OrderReview'</td>
</tr>
<tr>
<td>119</td>
<td>+ import { OrderModule } from '@vue-storefront/core/modules/order'</td>
</tr>
<tr>
<td>120</td>
<td>+ import { registerModule } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>119121</td>
<td></td>
</tr>
<tr>
<td>120122</td>
<td>export default {</td>
</tr>
<tr>
<td>121123</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -132,6 +134,9 @@ export default {</td>
</tr>
<tr>
<td>132134</td>
<td>}</td>
</tr>
<tr>
<td>133135</td>
<td>}</td>
</tr>
<tr>
<td>134136</td>
<td>},</td>
</tr>
<tr>
<td>137</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>138</td>
<td>+    registerModule(OrderModule)</td>
</tr>
<tr>
<td>139</td>
<td>+  },</td>
</tr>
<tr>
<td>135140</td>
<td>methods: {</td>
</tr>
<tr>
<td>136141</td>
<td>onSuccess () {</td>
</tr>
<tr>
<td>137142</td>
<td>},</td>
</tr>
</tbody>
</table>
<p>导入<em>订单</em>模块进行注册。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/Payment.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/Payment.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -121,10 +121,16 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>121121</td>
<td>v-model.trim=&quot;payment.city&quot;</td>
</tr>
<tr>
<td>122122</td>
<td>@blur=&quot;$v.payment.city.$touch()&quot;</td>
</tr>
<tr>
<td>123123</td>
<td>autocomplete=&quot;address-level2&quot;</td>
</tr>
<tr>
<td>124</td>
<td>-            :validations=&quot;[<s>{</s></td>
</tr>
<tr>
<td>124</td>
<td>+            :validations=&quot;[</td>
</tr>
<tr>
<td>125</td>
<td>+            {</td>
</tr>
<tr>
<td>125126</td>
<td>condition: $v.payment.city.$error &amp;&amp; !$v.payment.city.required,</td>
</tr>
<tr>
<td>126127</td>
<td>text: $t('Field is required')</td>
</tr>
<tr>
<td>127</td>
<td>-            }<s>]&quot;</s></td>
</tr>
<tr>
<td>128</td>
<td>+            },</td>
</tr>
<tr>
<td>129</td>
<td>+            {</td>
</tr>
<tr>
<td>130</td>
<td>+              condition: $v.payment.city.$error &amp;&amp; $v.payment.city.required,</td>
</tr>
<tr>
<td>131</td>
<td>+              text: $t('Please provide valid city name')</td>
</tr>
<tr>
<td>132</td>
<td>+            }</td>
</tr>
<tr>
<td>133</td>
<td>+            ]&quot;</td>
</tr>
<tr>
<td>128134</td>
<td>/&gt;</td>
</tr>
<tr>
<td>129135</td>
<td></td>
</tr>
<tr>
<td>130136</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td></td>
<td>@@ -171,7 +177,7 @@</td>
</tr>
<tr>
<td>171177</td>
<td>v-model=&quot;payment.country&quot;</td>
</tr>
<tr>
<td>172178</td>
<td>autocomplete=&quot;country-name&quot;</td>
</tr>
<tr>
<td>173179</td>
<td>@blur=&quot;$v.payment.country.$touch()&quot;</td>
</tr>
<tr>
<td>174</td>
<td>-            @change=&quot;$v.payment.country.$touch()&quot;</td>
</tr>
<tr>
<td>180</td>
<td>+            @change=&quot;$v.payment.country.$touch(); changeCountry();&quot;</td>
</tr>
<tr>
<td>175181</td>
<td>/&gt;</td>
</tr>
<tr>
<td>176182</td>
<td></td>
</tr>
<tr>
<td>177183</td>
<td>&lt;base-input</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/Product.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,6 +1,8 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div class="row p25 between-xs"></td>
</tr>
<tr>
<td>3</td>
<td>-    &lt;<s>product-image</s> <s>:image=&quot;image&quot; <s>class=&quot;blend&quot;</s> /&gt;</s></td>
</tr>
<tr>
<td>3</td>
<td>+    <div class="blend"></td>
</tr>
<tr>
<td>4</td>
<td>+      <product-image :image="image" /></td>
</tr>
<tr>
<td>5</td>
<td>+    </div></td>
</tr>
<tr>
<td>46</td>
<td><div class="col-xs"></td>
</tr>
<tr>
<td>57</td>
<td><div class="row"></td>
</tr>
<tr>
<td>68</td>
<td><div class="col-xs-12 col-md-9 pb15"></td>
</tr>
<tr>
<td></td>
<td>@@ -45,9 +47,9 @@</td>
</tr>
<tr>
<td>4547</td>
<td><span v-if="!product.totals.discount_amount" class="h4">{{ product.totals.row_total_incl_tax | price }}</span></td>
</tr>
<tr>
<td>4648</td>
<td></div></td>
</tr>
<tr>
<td>4749</td>
<td><div v-else></td>
</tr>
<tr>
<td>48</td>
<td>-            <span class="h4 cl-error" v-if="product.special_price">{{ product.<s>priceInclTax</s> * product.qty | price }} </span></td>
</tr>
<tr>
<td>49</td>
<td>-            <span class="price-original h5" v-if="product.special_price">{{ product.<s>originalPriceInclTax</s> * product.qty | price }}</span></td>
</tr>
<tr>
<td>50</td>
<td>-            <span v-if="!product.special_price" class="h4">{{ product.<s>priceInclTax</s> * product.qty | price }}</span></td>
</tr>
<tr>
<td>50</td>
<td>+            <span class="h4 cl-error" v-if="product.special_price">{{ product.price_incl_tax * product.qty | price }} </span></td>
</tr>
<tr>
<td>51</td>
<td>+            <span class="price-original h5" v-if="product.special_price">{{ product.original_price_incl_tax * product.qty | price }}</span></td>
</tr>
<tr>
<td>52</td>
<td>+            <span v-if="!product.special_price" class="h4">{{ product.price_incl_tax * product.qty | price }}</span></td>
</tr>
<tr>
<td>5153</td>
<td></div></td>
</tr>
<tr>
<td>5254</td>
<td></div></td>
</tr>
<tr>
<td>5355</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -84,9 +86,6 @@ export default {</td>
</tr>
<tr>
<td>8486</td>
<td>text-decoration: line-through;</td>
</tr>
<tr>
<td>8587</td>
<td>}</td>
</tr>
<tr>
<td>8688</td>
<td>.blend {</td>
</tr>
<tr>
<td>87</td>
<td>-  mix-blend-mode: multiply;</td>
</tr>
<tr>
<td>88</td>
<td>-  align-self: center;</td>
</tr>
<tr>
<td>8989</td>
<td>flex: 0 0 121px;</td>
</tr>
<tr>
<td>90</td>
<td>-  padding-bottom: 32.68%;</td>
</tr>
<tr>
<td>9190</td>
<td>}</td>
</tr>
<tr>
<td>9291</td>
<td></style></td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/Shipping.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/Shipping.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -112,10 +112,16 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>112112</td>
<td>v-model.trim=&quot;shipping.city&quot;</td>
</tr>
<tr>
<td>113113</td>
<td>@blur=&quot;$v.shipping.city.$touch()&quot;</td>
</tr>
<tr>
<td>114114</td>
<td>autocomplete=&quot;address-level2&quot;</td>
</tr>
<tr>
<td>115</td>
<td>-            :validations=&quot;[<s>{</s></td>
</tr>
<tr>
<td>115</td>
<td>+            :validations=&quot;[</td>
</tr>
<tr>
<td>116</td>
<td>+            {</td>
</tr>
<tr>
<td>116117</td>
<td>condition: $v.shipping.city.$error &amp;&amp; !$v.shipping.city.required,</td>
</tr>
<tr>
<td>117118</td>
<td>text: $t('Field is required')</td>
</tr>
<tr>
<td>118</td>
<td>-            }<s>]&quot;</s></td>
</tr>
<tr>
<td>119</td>
<td>+            },</td>
</tr>
<tr>
<td>120</td>
<td>+            {</td>
</tr>
<tr>
<td>121</td>
<td>+              condition: $v.shipping.city.$error &amp;&amp; $v.shipping.city.required,</td>
</tr>
<tr>
<td>122</td>
<td>+              text: $t('Please provide valid city name')</td>
</tr>
<tr>
<td>123</td>
<td>+            }</td>
</tr>
<tr>
<td>124</td>
<td>+            ]&quot;</td>
</tr>
<tr>
<td>119125</td>
<td>/&gt;</td>
</tr>
<tr>
<td>120126</td>
<td></td>
</tr>
<tr>
<td>121127</td>
<td>&lt;base-input</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Checkout/ThankYouPage.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Checkout/ThankYouPage.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -3,7 +3,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>33</td>
<td><header class="thank-you-title bg-cl-secondary py35 pl20"></td>
</tr>
<tr>
<td>44</td>
<td><div class="container"></td>
</tr>
<tr>
<td>55</td>
<td>&lt;breadcrumbs</td>
</tr>
<tr>
<td>6</td>
<td>-          :<s>routes</s>=&quot;<s>[{name: 'Homepage', route_link: '/'}]</s>&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+          :with-homepage=&quot;true&quot;</td>
</tr>
<tr>
<td>77</td>
<td>:active-route=&quot;this.$t('Order confirmation')&quot;</td>
</tr>
<tr>
<td>88</td>
<td>/&gt;</td>
</tr>
<tr>
<td>99</td>
<td><h2 class="category-title"></td>
</tr>
<tr>
<td></td>
<td>@@ -19,8 +19,7 @@</td>
</tr>
<tr>
<td>1919</td>
<td>{{ $t('Your purchase') }}</td>
</tr>
<tr>
<td>2020</td>
<td></h3></td>
</tr>
<tr>
<td>2121</td>
<td><p v-if="OnlineOnly" v-html="this.$t('You have successfuly placed the order. You can check status of your order by using our <b>delivery status</b> feature. You will receive an order confirmation e-mail with details of your order and a link to track its progress.')" /></td>
</tr>
<tr>
<td>22</td>
<td>-            <p v-if="OnlineOnly && lastOrderConfirmation" v-html="this.$t('The ~~server~~ ~~order~~ id ~~has~~ ~~been~~ ~~set~~ ~~to '~~)~~ + lastOrderConfirmation.backendOrderId~~" /></td>
</tr>
<tr>
<td>22</td>
<td>+            <p v-if="OnlineOnly && lastOrderConfirmation.orderNumber" v-html="this.$t('The OrderNumber is {id}', { id: lastOrderConfirmation.orderNumber })" /></td>
</tr>
<tr>
<td>23</td>
<td>-            <p v-if="OnlineOnly && lastOrderConfirmation.orderNumber" v-html="this.$t('The OrderNumber is ') + lastOrderConfirmation.orderNumber" /></td>
</tr>
<tr>
<td>2423</td>
<td></td>
</tr>
<tr>
<td>2524</td>
<td><h4 v-if="OfflineOnly"></td>
</tr>
<tr>
<td>2625</td>
<td>{{ $t('You are offline') }}</td>
</tr>
<tr>
<td></td>
<td>@@ -31,6 +30,9 @@</td>
</tr>
<tr>
<td>3130</td>
<td><p v-if="OfflineOnly && isNotificationSupported && !isPermissionGranted"></td>
</tr>
<tr>
<td>3231</td>
<td>{{ $t(&quot;You can allow us to remind you about the order via push notification after coming back online. You'll only need to click on it to confirm.&quot;) }}</td>
</tr>
<tr>
<td>3332</td>
<td></p></td>
</tr>
<tr>
<td>33</td>
<td>+            <p v-if="OfflineOnly && isNotificationSupported && !isPermissionGranted"></td>
</tr>
<tr>
<td>34</td>
<td>+              {{ $t(<code>Or if you will stay on &quot;Order confirmation&quot; page, the order will be placed automatically without confirmation, once the internet connection will be back.</code>) }}</td>
</tr>
<tr>
<td>35</td>
<td>+            </p></td>
</tr>
<tr>
<td>3436</td>
<td><p v-if="OfflineOnly && isNotificationSupported && isPermissionGranted"></td>
</tr>
<tr>
<td>3537</td>
<td><strong>{{ $t('You will receive Push notification after coming back online. You can confirm the order by clicking on it') }}</strong></td>
</tr>
<tr>
<td>3638</td>
<td></p></td>
</tr>
<tr>
<td></td>
<td>@@ -85,10 +87,15 @@ import VueOfflineMixin from 'vue-offline/mixin'</td>
</tr>
<tr>
<td>8587</td>
<td>import { EmailForm } from '@vue-storefront/core/modules/mailer/components/EmailForm'</td>
</tr>
<tr>
<td>8688</td>
<td>import { isServer } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>8789</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>90</td>
<td>+ import { registerModule } from '@vue-storefront/core/lib/modules'</td>
</tr>
<tr>
<td>91</td>
<td>+ import { MailerModule } from '@vue-storefront/core/modules/mailer'</td>
</tr>
<tr>
<td>8892</td>
<td></td>
</tr>
<tr>
<td>8993</td>
<td>export default {</td>
</tr>
<tr>
<td>9094</td>
<td>name: 'ThankYouPage',</td>
</tr>
<tr>
<td>9195</td>
<td>mixins: [Composite, VueOfflineMixin, EmailForm],</td>
</tr>
<tr>
<td>96</td>
<td>+  beforeCreate () {</td>
</tr>
<tr>
<td>97</td>
<td>+    registerModule(MailerModule)</td>
</tr>
<tr>
<td>98</td>
<td>+  },</td>
</tr>
<tr>
<td>9299</td>
<td>data () {</td>
</tr>
<tr>
<td>93100</td>
<td>return {</td>
</tr>
<tr>
<td>94101</td>
<td>feedback: ''</td>
</tr>
</tbody>
</table>
<p>已注册<em>邮件程序</em>模块并添加用于离线订单履行的消息。</p>
<h4 id="_21-转到cms-block" tabindex="-1"><a class="header-anchor" href="#_21-转到cms-block" aria-hidden="true">#</a> <a href="#_21-move-on-to-cms-block">#</a>21. 转到<em>CMS/Block</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Cms/Block.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Cms/Block.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -59,9 +59,9 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>5959</td>
<td>computed: {</td>
</tr>
<tr>
<td>6060</td>
<td>getCmsData () {</td>
</tr>
<tr>
<td>6161</td>
<td>if (this.id) {</td>
</tr>
<tr>
<td>62</td>
<td>-        return this.$store.getters<a href="this.id"><code>cmsBlock/~~cmsBlockId~~</code></a></td>
</tr>
<tr>
<td>62</td>
<td>+        return this.$store.getters<a href="this.id"><code>cmsBlock/getCmsBlockById</code></a></td>
</tr>
<tr>
<td>6363</td>
<td>} else if (this.identifier) {</td>
</tr>
<tr>
<td>64</td>
<td>-        return this.$store.getters<a href="this.identifier"><code>cmsBlock/~~cmsBlockIdentifier~~</code></a></td>
</tr>
<tr>
<td>64</td>
<td>+        return this.$store.getters<a href="this.identifier"><code>cmsBlock/getCmsBlockByIdentifier</code></a></td>
</tr>
<tr>
<td>6565</td>
<td>}</td>
</tr>
<tr>
<td>6666</td>
<td>return null</td>
</tr>
<tr>
<td>6767</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>在整个更新过程中，<em>getter</em>的名称更改为遵循约定。</p>
<h4 id="_22-复制addtocompare" tabindex="-1"><a class="header-anchor" href="#_22-复制addtocompare" aria-hidden="true">#</a> <a href="#_22-copy-addtocompare">#</a>22. 复制<em>AddToCompare</em></h4>
<ul>
<li>添加引入的新文件 <code>1.11</code></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> src

<span class="token function">cp</span> themes/default/components/core/blocks/Compare/AddToCompare.vue themes/degi/components/core/blocks/Compare/AddToCompare.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_23-页脚-块的时间" tabindex="-1"><a class="header-anchor" href="#_23-页脚-块的时间" aria-hidden="true">#</a> <a href="#_23-time-for-footer-block">#</a>23.<em>页脚</em> <em>块的</em>时间</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Footer/Footer.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Footer/Footer.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -55,12 +55,12 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>5555</td>
<td>{{ $t('About us') }}</td>
</tr>
<tr>
<td>5656</td>
<td></h3></td>
</tr>
<tr>
<td>5757</td>
<td><div class="mt15"></td>
</tr>
<tr>
<td>58</td>
<td>-                <router-link class="cl-secondary" :to="~~localizedRoute~~('/~~i/~~about-us')" exact></td>
</tr>
<tr>
<td>58</td>
<td>+                <router-link class="cl-secondary" :to="getLinkFor('/about-us')" exact></td>
</tr>
<tr>
<td>5959</td>
<td>{{ $t('About us (Magento CMS)') }}</td>
</tr>
<tr>
<td>6060</td>
<td></router-link></td>
</tr>
<tr>
<td>6161</td>
<td></div></td>
</tr>
<tr>
<td>6262</td>
<td><div class="mt15"></td>
</tr>
<tr>
<td>63</td>
<td>-                <router-link class="cl-secondary" :to="~~localizedRoute~~('/~~i/~~customer-service')" exact></td>
</tr>
<tr>
<td>63</td>
<td>+                <router-link class="cl-secondary" :to="getLinkFor('/customer-service')" exact></td>
</tr>
<tr>
<td>6464</td>
<td>{{ $t('Customer service (Magento CMS)') }}</td>
</tr>
<tr>
<td>6565</td>
<td></router-link></td>
</tr>
<tr>
<td>6666</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -158,10 +158,12 @@</td>
</tr>
<tr>
<td>158158</td>
<td></template></td>
</tr>
<tr>
<td>159159</td>
<td></td>
</tr>
<tr>
<td>160160</td>
<td><script></td>
</tr>
<tr>
<td>161</td>
<td>+ import { currentStoreView, localizedRoute } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>161162</td>
<td>import CurrentPage from 'theme/mixins/currentPage'</td>
</tr>
<tr>
<td>162163</td>
<td>import LanguageSwitcher from '../../LanguageSwitcher.vue'</td>
</tr>
<tr>
<td>163164</td>
<td>import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'</td>
</tr>
<tr>
<td>164165</td>
<td>import BackToTop from 'theme/components/core/BackToTop'</td>
</tr>
<tr>
<td>166</td>
<td>+ import { getPathForStaticPage } from 'theme/helpers'</td>
</tr>
<tr>
<td>165167</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>166168</td>
<td></td>
</tr>
<tr>
<td>167169</td>
<td>export default {</td>
</tr>
<tr>
<td></td>
<td>@@ -175,6 +177,11 @@ export default {</td>
</tr>
<tr>
<td>175177</td>
<td>return <code>v${process.env.__APPVERSION__} ${process.env.__BUILDTIME__}</code></td>
</tr>
<tr>
<td>176178</td>
<td>}</td>
</tr>
<tr>
<td>177179</td>
<td>},</td>
</tr>
<tr>
<td>180</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>181</td>
<td>+    getLinkFor (path) {</td>
</tr>
<tr>
<td>182</td>
<td>+      return localizedRoute(getPathForStaticPage(path))</td>
</tr>
<tr>
<td>183</td>
<td>+    }</td>
</tr>
<tr>
<td>184</td>
<td>+  },</td>
</tr>
<tr>
<td>178185</td>
<td>components: {</td>
</tr>
<tr>
<td>179186</td>
<td>Newsletter,</td>
</tr>
<tr>
<td>180187</td>
<td>LanguageSwitcher,</td>
</tr>
</tbody>
</table>
<p>裹<em>MultiStore的</em>功能用于编写<em>静态</em>页面的路径。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Footer/MinimalFooter.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Footer/MinimalFooter.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -14,12 +14,12 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1414</td>
<td>{{ $t('Departments') }}</td>
</tr>
<tr>
<td>1515</td>
<td></h3></td>
</tr>
<tr>
<td>1616</td>
<td><div class="mt15"></td>
</tr>
<tr>
<td>17</td>
<td>- <s>c</s>/women-20')&quot; exact&gt;</td>
</tr>
<tr>
<td>17</td>
<td>+ women/women-20')&quot; exact&gt;</td>
</tr>
<tr>
<td>1818</td>
<td>{{ $t('Women fashion') }}</td>
</tr>
<tr>
<td>1919</td>
<td></router-link></td>
</tr>
<tr>
<td>2020</td>
<td></div></td>
</tr>
<tr>
<td>2121</td>
<td><div class="mt15"></td>
</tr>
<tr>
<td>22</td>
<td>- <s>c</s>/men-11')&quot; exact&gt;</td>
</tr>
<tr>
<td>22</td>
<td>+                <router-link class="cl-secondary" :to="localizedRoute('/men/men-11')" exact></td>
</tr>
<tr>
<td>2323</td>
<td>{{ $t(&quot;Men's fashion&quot;) }}</td>
</tr>
<tr>
<td>2424</td>
<td></router-link></td>
</tr>
<tr>
<td>2525</td>
<td></div></td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Footer/NewsLetter.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Footer/Newsletter.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,5 +1,5 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  &lt;div class=&quot;newsletter py25 px15 bg-cl-secondary&quot; v-<s>if</s>=&quot;!isSubscribed&quot;&gt;</td>
</tr>
<tr>
<td>2</td>
<td>+  <div class="newsletter py25 px15 bg-cl-secondary" v-show="!isSubscribed"></td>
</tr>
<tr>
<td>33</td>
<td><div class="container"></td>
</tr>
<tr>
<td>44</td>
<td><div class="newsletter-content m0 row middle-sm start-md"></td>
</tr>
<tr>
<td>55</td>
<td><div class="col-md-8 col-xs-12"></td>
</tr>
</tbody>
</table>
<p><code>v-if</code>已更改为<code>v-show</code>.</p>
<h4 id="_24-baseinputnumber-也需要更新" tabindex="-1"><a class="header-anchor" href="#_24-baseinputnumber-也需要更新" aria-hidden="true">#</a> <a href="#_24-baseinputnumber-needs-update-too">#</a>24. <em>BaseInputNumber 也</em>需要更新</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Form/BaseInputNumber.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Form/BaseInputNumber.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -5,6 +5,8 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>55</td>
<td>:id=&quot;getInputId&quot;</td>
</tr>
<tr>
<td>66</td>
<td>type=&quot;number&quot;</td>
</tr>
<tr>
<td>77</td>
<td>:min=&quot;min&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+      :max=&quot;max&quot;</td>
</tr>
<tr>
<td>9</td>
<td>+      :disabled=&quot;disabled&quot;</td>
</tr>
<tr>
<td>810</td>
<td>class=&quot;m0 no-outline base-input-number__input brdr-cl-primary bg-cl-trans</td>
</tr>
<tr>
<td>911</td>
<td>:focus=&quot;autofocus&quot;</td>
</tr>
<tr>
<td>1012</td>
<td>:value=&quot;value&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -22,10 +24,6 @@ export default {</td>
</tr>
<tr>
<td>2224</td>
<td>components: {</td>
</tr>
<tr>
<td>2325</td>
<td>ValidationMessages</td>
</tr>
<tr>
<td>2426</td>
<td>},</td>
</tr>
<tr>
<td>25</td>
<td>-  data () {</td>
</tr>
<tr>
<td>26</td>
<td>-    return {</td>
</tr>
<tr>
<td>27</td>
<td>-    }</td>
</tr>
<tr>
<td>28</td>
<td>-  },</td>
</tr>
<tr>
<td>2927</td>
<td>props: {</td>
</tr>
<tr>
<td>3028</td>
<td>value: {</td>
</tr>
<tr>
<td>3129</td>
<td>type: [String, Number],</td>
</tr>
<tr>
<td></td>
<td>@@ -40,6 +38,14 @@ export default {</td>
</tr>
<tr>
<td>4038</td>
<td>type: Number,</td>
</tr>
<tr>
<td>4139</td>
<td>default: 0</td>
</tr>
<tr>
<td>4240</td>
<td>},</td>
</tr>
<tr>
<td>41</td>
<td>+    max: {</td>
</tr>
<tr>
<td>42</td>
<td>+      type: Number,</td>
</tr>
<tr>
<td>43</td>
<td>+      default: undefined</td>
</tr>
<tr>
<td>44</td>
<td>+    },</td>
</tr>
<tr>
<td>45</td>
<td>+    disabled: {</td>
</tr>
<tr>
<td>46</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>47</td>
<td>+      default: false</td>
</tr>
<tr>
<td>48</td>
<td>+    },</td>
</tr>
<tr>
<td>4349</td>
<td>autofocus: {</td>
</tr>
<tr>
<td>4450</td>
<td>type: Boolean,</td>
</tr>
<tr>
<td>4551</td>
<td>required: false,</td>
</tr>
<tr>
<td></td>
<td>@@ -59,32 +65,28 @@ export default {</td>
</tr>
<tr>
<td>5965</td>
<td></script></td>
</tr>
<tr>
<td>6066</td>
<td></td>
</tr>
<tr>
<td>6167</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>62</td>
<td>- ~~  ~~@import '~theme/css/variables/colors';</td>
</tr>
<tr>
<td>63</td>
<td>- ~~  ~~@import '~theme/css/helpers/functions/color';</td>
</tr>
<tr>
<td>68</td>
<td>+ @import '~theme/css/variables/colors';</td>
</tr>
<tr>
<td>69</td>
<td>+ @import '~theme/css/helpers/functions/color';</td>
</tr>
<tr>
<td>64</td>
<td>-</td>
</tr>
<tr>
<td>65</td>
<td>-  .base-input-number {</td>
</tr>
<tr>
<td>66</td>
<td>-    width: 100%;</td>
</tr>
<tr>
<td>6770</td>
<td></td>
</tr>
<tr>
<td>68</td>
<td>- ~~    &amp;__input~~ {</td>
</tr>
<tr>
<td>69</td>
<td>- ~~      border-style:~~ <s>solid;</s></td>
</tr>
<tr>
<td>70</td>
<td>- ~~      ~~border-<s>width</s>: <s>0 0 1px 0</s>;</td>
</tr>
<tr>
<td>71</td>
<td>- ~~      ~~width: <s>50px</s>;</td>
</tr>
<tr>
<td>72</td>
<td>- ~~      height~~: <s>1.4rem</s>;</td>
</tr>
<tr>
<td>73</td>
<td>- ~~      line-~~height: 1.<s>7rem</s>;</td>
</tr>
<tr>
<td>74</td>
<td>- ~~      @media (min~~-<s>width</s>: <s>768px) {</s></td>
</tr>
<tr>
<td>75</td>
<td>- ~~        height~~: <s>1.7rem;</s></td>
</tr>
<tr>
<td>76</td>
<td>-      <s>}</s></td>
</tr>
<tr>
<td>71</td>
<td>+ .base-input-number {</td>
</tr>
<tr>
<td>72</td>
<td>+  &amp;__input {</td>
</tr>
<tr>
<td>73</td>
<td>+    border-style: solid;</td>
</tr>
<tr>
<td>74</td>
<td>+    border-width: 0 0 1px 0;</td>
</tr>
<tr>
<td>75</td>
<td>+    width: 50px;</td>
</tr>
<tr>
<td>76</td>
<td>+    height: 1.4rem;</td>
</tr>
<tr>
<td>77</td>
<td>+    line-height: 1.7rem;</td>
</tr>
<tr>
<td>78</td>
<td>+    @media (min-width: 768px) {</td>
</tr>
<tr>
<td>79</td>
<td>+      height: 1.7rem;</td>
</tr>
<tr>
<td>7780</td>
<td>}</td>
</tr>
<tr>
<td>81</td>
<td>+  }</td>
</tr>
<tr>
<td>7882</td>
<td></td>
</tr>
<tr>
<td>79</td>
<td>- ~~    ~~&amp;__label {</td>
</tr>
<tr>
<td>80</td>
<td>- ~~      ~~font-size: 0.8rem;</td>
</tr>
<tr>
<td>81</td>
<td>- ~~      ~~line-height: 1.2rem;</td>
</tr>
<tr>
<td>82</td>
<td>- ~~      max~~-width: <s>100px;</s></td>
</tr>
<tr>
<td>83</td>
<td>-      <s>@media (min</s>-<s>width</s>: <s>768px) {</s></td>
</tr>
<tr>
<td>84</td>
<td>- ~~        font~~-<s>size</s>: <s>1rem</s>;</td>
</tr>
<tr>
<td>83</td>
<td>+  &amp;__label {</td>
</tr>
<tr>
<td>84</td>
<td>+    font-size: 0.8rem;</td>
</tr>
<tr>
<td>85</td>
<td>+    line-height: 1.2rem;</td>
</tr>
<tr>
<td>86</td>
<td>+    @media (min-width: 768px) {</td>
</tr>
<tr>
<td>87</td>
<td>+      font-size: 1rem;</td>
</tr>
<tr>
<td>88</td>
<td>+      line-height: 1.4rem;</td>
</tr>
<tr>
<td>85</td>
<td>-        line-height: 1.4rem;</td>
</tr>
<tr>
<td>86</td>
<td>-      }</td>
</tr>
<tr>
<td>8789</td>
<td>}</td>
</tr>
<tr>
<td>8890</td>
<td>}</td>
</tr>
<tr>
<td>89</td>
<td>-</td>
</tr>
<tr>
<td>91</td>
<td>+ }</td>
</tr>
<tr>
<td>9092</td>
<td></style></td>
</tr>
</tbody>
</table>
<p><code>max</code>并添加了<code>disabled</code> <em>属性</em>。</p>
<p>更新了一些样式。</p>
<h4 id="_25-标题也需要修复。" tabindex="-1"><a class="header-anchor" href="#_25-标题也需要修复。" aria-hidden="true">#</a> <a href="#_25-header-needs-fix-too">#</a>25.<em>标题也</em>需要修复。</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Header/CompareIcon.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Header/CompareIcon.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,13 +1,34 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><router-link :to="localizedRoute('/compare')" class="compare-icon no-underline inline-flex" v-if="isActive"></td>
</tr>
<tr>
<td>33</td>
<td><i class="material-icons">compare</i></td>
</tr>
<tr>
<td>4</td>
<td>+    &lt;span</td>
</tr>
<tr>
<td>5</td>
<td>+      class=&quot;compare-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white bg-cl-silver&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+      v-cloak</td>
</tr>
<tr>
<td>7</td>
<td>+      v-show=&quot;getCompareProductsCount&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+    &gt;</td>
</tr>
<tr>
<td>9</td>
<td>+      {{ getCompareProductsCount }}</td>
</tr>
<tr>
<td>10</td>
<td>+    </span></td>
</tr>
<tr>
<td>411</td>
<td></router-link></td>
</tr>
<tr>
<td>512</td>
<td></template></td>
</tr>
<tr>
<td>613</td>
<td></td>
</tr>
<tr>
<td>714</td>
<td><script></td>
</tr>
<tr>
<td>815</td>
<td>import CompareIcon from '@vue-storefront/core/compatibility/components/blocks/Header/CompareIcon'</td>
</tr>
<tr>
<td>16</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>917</td>
<td></td>
</tr>
<tr>
<td>1018</td>
<td>export default {</td>
</tr>
<tr>
<td>11</td>
<td>-  mixins: [CompareIcon]</td>
</tr>
<tr>
<td>19</td>
<td>+  mixins: [CompareIcon],</td>
</tr>
<tr>
<td>20</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>21</td>
<td>+    ...mapGetters('compare', ['getCompareProductsCount'])</td>
</tr>
<tr>
<td>22</td>
<td>+  }</td>
</tr>
<tr>
<td>1223</td>
<td>}</td>
</tr>
<tr>
<td>1324</td>
<td></script></td>
</tr>
<tr>
<td>25</td>
<td>+</td>
</tr>
<tr>
<td>26</td>
<td>+ <style scoped></td>
</tr>
<tr>
<td>27</td>
<td>+  .compare-count {</td>
</tr>
<tr>
<td>28</td>
<td>+    top: 7px;</td>
</tr>
<tr>
<td>29</td>
<td>+    left: 50%;</td>
</tr>
<tr>
<td>30</td>
<td>+    min-width: 16px;</td>
</tr>
<tr>
<td>31</td>
<td>+    min-height: 16px;</td>
</tr>
<tr>
<td>32</td>
<td>+    border-radius: 10px;</td>
</tr>
<tr>
<td>33</td>
<td>+  }</td>
</tr>
<tr>
<td>34</td>
<td>+ </style></td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Header/Header.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Header/Header.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -35,7 +35,10 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>3535</td>
<td>&lt;div class=&quot;row between-xs middle-xs px15 py5&quot; v-if=&quot;isCheckoutPage &amp;&amp;</td>
</tr>
<tr>
<td>3636</td>
<td><div class="col-xs-5 col-md-3 middle-xs"></td>
</tr>
<tr>
<td>3737</td>
<td><div></td>
</tr>
<tr>
<td>38</td>
<td>-              &lt;router-link~~ :to=&quot;localizedRoute('/')&quot; class=&quot;cl-tertiary links&quot;&gt;~~</td>
</tr>
<tr>
<td>38</td>
<td>+              &lt;router-link</td>
</tr>
<tr>
<td>39</td>
<td>+                :to=&quot;localizedRoute('/')&quot;</td>
</tr>
<tr>
<td>40</td>
<td>+                class=&quot;cl-tertiary links&quot;</td>
</tr>
<tr>
<td>41</td>
<td>+              &gt;</td>
</tr>
<tr>
<td>3942</td>
<td>{{ $t('Return to shopping') }}</td>
</tr>
<tr>
<td>4043</td>
<td></router-link></td>
</tr>
<tr>
<td>4144</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -45,12 +48,13 @@</td>
</tr>
<tr>
<td>4548</td>
<td></div></td>
</tr>
<tr>
<td>4649</td>
<td><div class="col-xs-5 col-md-3 end-xs"></td>
</tr>
<tr>
<td>4750</td>
<td><div></td>
</tr>
<tr>
<td>48</td>
<td>-              &lt;a~~ v-if=&quot;!currentUser&quot; href=&quot;#&quot; @click.prevent=&quot;gotoAccount&quot; clas~~</td>
</tr>
<tr>
<td>49</td>
<td>-                <s>{{ $t('Login to your account') }}</s></td>
</tr>
<tr>
<td>50</td>
<td>- ~~              ~~</td>
</tr>
<tr>
<td>51</td>
<td>- ~~              ~~</td>
</tr>
<tr>
<td>52</td>
<td>-                <s>{{</s> <s>$t('You are logged in as') }} {{ currentUser.firstname }}</s></td>
</tr>
<tr>
<td>53</td>
<td>-              &lt;/<s>span</s>&gt;</td>
</tr>
<tr>
<td>51</td>
<td>+              &lt;a</td>
</tr>
<tr>
<td>52</td>
<td>+                v-if=&quot;!currentUser&quot;</td>
</tr>
<tr>
<td>53</td>
<td>+                href=&quot;#&quot;</td>
</tr>
<tr>
<td>54</td>
<td>+                @click.prevent=&quot;gotoAccount&quot;</td>
</tr>
<tr>
<td>55</td>
<td>+                class=&quot;cl-tertiary links&quot;</td>
</tr>
<tr>
<td>56</td>
<td>+              &gt;{{ $t('Login to your account') }}</a></td>
</tr>
<tr>
<td>57</td>
<td>+              <span v-else>{{ $t('You are logged in as {firstname}', currentUse</td>
</tr>
<tr>
<td>5458</td>
<td></div></td>
</tr>
<tr>
<td>5559</td>
<td></div></td>
</tr>
<tr>
<td>5660</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -98,13 +102,19 @@ export default {</td>
</tr>
<tr>
<td>98102</td>
<td>currentUser: state =&gt; state.user.current</td>
</tr>
<tr>
<td>99103</td>
<td>}),</td>
</tr>
<tr>
<td>100104</td>
<td>isThankYouPage () {</td>
</tr>
<tr>
<td>101</td>
<td>-      return this.$store.state.checkout.isThankYouPage~~ ? this.$store.state.chec~~</td>
</tr>
<tr>
<td>105</td>
<td>+      return this.$store.state.checkout.isThankYouPage</td>
</tr>
<tr>
<td>106</td>
<td>+        ? this.$store.state.checkout.isThankYouPage</td>
</tr>
<tr>
<td>107</td>
<td>+        : false</td>
</tr>
<tr>
<td>102108</td>
<td>}</td>
</tr>
<tr>
<td>103109</td>
<td>},</td>
</tr>
<tr>
<td>104110</td>
<td>beforeMount () {</td>
</tr>
<tr>
<td>105</td>
<td>-    window.addEventListener(<s>'scroll', () =&gt; {</s></td>
</tr>
<tr>
<td>106</td>
<td>-      <s>this.isScrolling = true</s></td>
</tr>
<tr>
<td>107</td>
<td>- ~~    },~~ {<s>passive: true})</s></td>
</tr>
<tr>
<td>111</td>
<td>+    window.addEventListener(</td>
</tr>
<tr>
<td>112</td>
<td>+      'scroll',</td>
</tr>
<tr>
<td>113</td>
<td>+      () =&gt; {</td>
</tr>
<tr>
<td>114</td>
<td>+        this.isScrolling = true</td>
</tr>
<tr>
<td>115</td>
<td>+      },</td>
</tr>
<tr>
<td>116</td>
<td>+      { passive: true }</td>
</tr>
<tr>
<td>117</td>
<td>+    )</td>
</tr>
<tr>
<td>108118</td>
<td></td>
</tr>
<tr>
<td>109119</td>
<td>setInterval(() =&gt; {</td>
</tr>
<tr>
<td>110120</td>
<td>if (this.isScrolling) {</td>
</tr>
<tr>
<td></td>
<td>@@ -119,7 +129,10 @@ export default {</td>
</tr>
<tr>
<td>119129</td>
<td>},</td>
</tr>
<tr>
<td>120130</td>
<td>hasScrolled () {</td>
</tr>
<tr>
<td>121131</td>
<td>this.scrollTop = window.scrollY</td>
</tr>
<tr>
<td>122</td>
<td>-      if (<s>this.scrollTop &gt; this.lastScrollTop &amp;&amp; this.scrollTop &gt; this.navbarHeight) {</s></td>
</tr>
<tr>
<td>132</td>
<td>+      if (</td>
</tr>
<tr>
<td>133</td>
<td>+        this.scrollTop &gt; this.lastScrollTop &amp;&amp;</td>
</tr>
<tr>
<td>134</td>
<td>+        this.scrollTop &gt; this.navbarHeight</td>
</tr>
<tr>
<td>135</td>
<td>+      ) {</td>
</tr>
<tr>
<td>123136</td>
<td>this.navVisible = false</td>
</tr>
<tr>
<td>124137</td>
<td>} else {</td>
</tr>
<tr>
<td>125138</td>
<td>this.navVisible = true</td>
</tr>
<tr>
<td></td>
<td>@@ -138,7 +151,7 @@ $color-icon-hover: color(secondary, $colors-background);</td>
</tr>
<tr>
<td>138151</td>
<td>header {</td>
</tr>
<tr>
<td>139152</td>
<td>height: 54px;</td>
</tr>
<tr>
<td>140153</td>
<td>top: -55px;</td>
</tr>
<tr>
<td>141</td>
<td>-  z-index: <s>2</s>;</td>
</tr>
<tr>
<td>154</td>
<td>+  z-index: 3;</td>
</tr>
<tr>
<td>142155</td>
<td>transition: top 0.2s ease-in-out;</td>
</tr>
<tr>
<td>143156</td>
<td>&amp;.is-visible {</td>
</tr>
<tr>
<td>144157</td>
<td>top: 0;</td>
</tr>
<tr>
<td></td>
<td>@@ -171,12 +184,13 @@ header {</td>
</tr>
<tr>
<td>171184</td>
<td>}</td>
</tr>
<tr>
<td>172185</td>
<td>}</td>
</tr>
<tr>
<td>173186</td>
<td>.col-xs-2:first-of-type {</td>
</tr>
<tr>
<td>174</td>
<td>- ~~      ~~padding-left: 0;</td>
</tr>
<tr>
<td>187</td>
<td>+    padding-left: 0;</td>
</tr>
<tr>
<td>175188</td>
<td>}</td>
</tr>
<tr>
<td>176189</td>
<td>.col-xs-2:last-of-type {</td>
</tr>
<tr>
<td>177</td>
<td>- ~~      ~~padding-right: 0;</td>
</tr>
<tr>
<td>190</td>
<td>+    padding-right: 0;</td>
</tr>
<tr>
<td>178191</td>
<td>}</td>
</tr>
<tr>
<td>179</td>
<td>-  a,~~ span {~~</td>
</tr>
<tr>
<td>192</td>
<td>+  a,</td>
</tr>
<tr>
<td>193</td>
<td>+  span {</td>
</tr>
<tr>
<td>180194</td>
<td>font-size: 12px;</td>
</tr>
<tr>
<td>181195</td>
<td>}</td>
</tr>
<tr>
<td>182196</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>一些代码样式已经到位。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Header/MicrocartIcon.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Header/MicrocartIcon.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -19,10 +19,28 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1919</td>
<td></template></td>
</tr>
<tr>
<td>2020</td>
<td></td>
</tr>
<tr>
<td>2121</td>
<td><script></td>
</tr>
<tr>
<td>22</td>
<td>+ import { mapGetters, mapActions } from 'vuex'</td>
</tr>
<tr>
<td>2223</td>
<td>import MicrocartIcon from '@vue-storefront/core/compatibility/components/blocks/Header/MicrocartIcon'</td>
</tr>
<tr>
<td>2324</td>
<td></td>
</tr>
<tr>
<td>2425</td>
<td>export default {</td>
</tr>
<tr>
<td>25</td>
<td>-  mixins: [MicrocartIcon]</td>
</tr>
<tr>
<td>26</td>
<td>+  // mixins: [MicrocartIcon],</td>
</tr>
<tr>
<td>27</td>
<td>+  mounted () {</td>
</tr>
<tr>
<td>28</td>
<td>+    document.addEventListener('visibilitychange', () =&gt; {</td>
</tr>
<tr>
<td>29</td>
<td>+      if (!document.hidden) {</td>
</tr>
<tr>
<td>30</td>
<td>+        this.$store.dispatch('cart/load')</td>
</tr>
<tr>
<td>31</td>
<td>+      }</td>
</tr>
<tr>
<td>32</td>
<td>+    })</td>
</tr>
<tr>
<td>33</td>
<td>+  },</td>
</tr>
<tr>
<td>34</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>35</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>36</td>
<td>+      totalQuantity: 'cart/getItemsTotalQuantity'</td>
</tr>
<tr>
<td>37</td>
<td>+    })</td>
</tr>
<tr>
<td>38</td>
<td>+  },</td>
</tr>
<tr>
<td>39</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>40</td>
<td>+    ...mapActions({</td>
</tr>
<tr>
<td>41</td>
<td>+      openMicrocart: 'ui/toggleMicrocart'</td>
</tr>
<tr>
<td>42</td>
<td>+    })</td>
</tr>
<tr>
<td>43</td>
<td>+  }</td>
</tr>
<tr>
<td>2644</td>
<td>}</td>
</tr>
</tbody>
</table>
<p><code>mixins</code>被评论并<code>vuex</code> <code>mapGetters</code>作为其他更新引入。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Header/MinimalHeader.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Header/MinimalHeader.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -9,7 +9,11 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>99</td>
<td><div class="col-sm-4 col-xs-2 middle-xs"></td>
</tr>
<tr>
<td>1010</td>
<td><div></td>
</tr>
<tr>
<td>1111</td>
<td><template></td>
</tr>
<tr>
<td>12</td>
<td>-                &lt;a~~ class=&quot;inline-flex brdr-none p15 icon bg-cl-secondary pointer&quot; href=&quot;/&quot; data-testid=&quot;returnButton&quot;&gt;~~</td>
</tr>
<tr>
<td>12</td>
<td>+                &lt;a</td>
</tr>
<tr>
<td>13</td>
<td>+                  class=&quot;inline-flex brdr-none p15 icon bg-cl-secondary pointer&quot;</td>
</tr>
<tr>
<td>14</td>
<td>+                  href=&quot;/&quot;</td>
</tr>
<tr>
<td>15</td>
<td>+                  data-testid=&quot;returnButton&quot;</td>
</tr>
<tr>
<td>16</td>
<td>+                &gt;</td>
</tr>
<tr>
<td>1317</td>
<td><i class="material-icons">keyboard_backspace</i></td>
</tr>
<tr>
<td>1418</td>
<td></a></td>
</tr>
<tr>
<td>1519</td>
<td></template></td>
</tr>
<tr>
<td></td>
<td>@@ -19,12 +23,7 @@</td>
</tr>
<tr>
<td>1923</td>
<td><div class="col-sm-4 col-xs-4 center-xs"></td>
</tr>
<tr>
<td>2024</td>
<td><div></td>
</tr>
<tr>
<td>2125</td>
<td><a class="no-underline inline-flex" href="/" data-testid="logo"></td>
</tr>
<tr>
<td>22</td>
<td>-                &lt;img</td>
</tr>
<tr>
<td>26</td>
<td>+                <img width="auto" height="41px" src="/assets/logo.svg" :alt="$t(defaultTitle)"></td>
</tr>
<tr>
<td>23</td>
<td>-                  width=&quot;auto&quot;</td>
</tr>
<tr>
<td>24</td>
<td>-                  height=&quot;41px&quot;</td>
</tr>
<tr>
<td>25</td>
<td>-                  src=&quot;/assets/logo.svg&quot;</td>
</tr>
<tr>
<td>26</td>
<td>-                  alt=&quot;Vuestore logo&quot;</td>
</tr>
<tr>
<td>27</td>
<td>-                &gt;</td>
</tr>
<tr>
<td>2827</td>
<td></a></td>
</tr>
<tr>
<td>2928</td>
<td></div></td>
</tr>
<tr>
<td>3029</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -41,8 +40,16 @@</td>
</tr>
<tr>
<td>4140</td>
<td></td>
</tr>
<tr>
<td>4241</td>
<td><script></td>
</tr>
<tr>
<td>4342</td>
<td>import CurrentPage from 'theme/mixins/currentPage'</td>
</tr>
<tr>
<td>43</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>44</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>4445</td>
<td></td>
</tr>
<tr>
<td>4546</td>
<td>export default {</td>
</tr>
<tr>
<td>47</td>
<td>+  data () {</td>
</tr>
<tr>
<td>48</td>
<td>+    const storeView = currentStoreView()</td>
</tr>
<tr>
<td>49</td>
<td>+    return {</td>
</tr>
<tr>
<td>50</td>
<td>+      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config.seo.defaultTitle</td>
</tr>
<tr>
<td>51</td>
<td>+    }</td>
</tr>
<tr>
<td>52</td>
<td>+  },</td>
</tr>
<tr>
<td>4653</td>
<td>mixins: [CurrentPage]</td>
</tr>
<tr>
<td>4754</td>
<td>}</td>
</tr>
<tr>
<td>4855</td>
<td></script></td>
</tr>
<tr>
<td></td>
<td>@@ -55,7 +62,7 @@ $color-icon-hover: color(secondary, $colors-background);</td>
</tr>
<tr>
<td>5562</td>
<td>header {</td>
</tr>
<tr>
<td>5663</td>
<td>height: 54px;</td>
</tr>
<tr>
<td>5764</td>
<td>top: -55px;</td>
</tr>
<tr>
<td>58</td>
<td>-  z-index: <s>2</s>;</td>
</tr>
<tr>
<td>65</td>
<td>+  z-index: 3;</td>
</tr>
<tr>
<td>5966</td>
<td>transition: top 0.2s ease-in-out;</td>
</tr>
<tr>
<td>6067</td>
<td>&amp;.is-visible {</td>
</tr>
<tr>
<td>6168</td>
<td>top: 0;</td>
</tr>
<tr>
<td></td>
<td>@@ -88,12 +95,13 @@ header {</td>
</tr>
<tr>
<td>8895</td>
<td>}</td>
</tr>
<tr>
<td>8996</td>
<td>}</td>
</tr>
<tr>
<td>9097</td>
<td>.col-xs-2:first-of-type {</td>
</tr>
<tr>
<td>91</td>
<td>- ~~      ~~padding-left: 0;</td>
</tr>
<tr>
<td>98</td>
<td>+    padding-left: 0;</td>
</tr>
<tr>
<td>9299</td>
<td>}</td>
</tr>
<tr>
<td>93100</td>
<td>.col-xs-2:last-of-type {</td>
</tr>
<tr>
<td>94</td>
<td>- ~~      ~~padding-right: 0;</td>
</tr>
<tr>
<td>101</td>
<td>+    padding-right: 0;</td>
</tr>
<tr>
<td>95102</td>
<td>}</td>
</tr>
<tr>
<td>96</td>
<td>-  a,~~ span {~~</td>
</tr>
<tr>
<td>103</td>
<td>+  a,</td>
</tr>
<tr>
<td>104</td>
<td>+  span {</td>
</tr>
<tr>
<td>97105</td>
<td>font-size: 12px;</td>
</tr>
<tr>
<td>98106</td>
<td>}</td>
</tr>
<tr>
<td>99107</td>
<td>}</td>
</tr>
</tbody>
</table>
<p><em>多商店</em>功能和一些样式已更新。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Header/WishListIcon.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Header/WishlistIcon.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,11 +1,18 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;button</td>
</tr>
<tr>
<td>33</td>
<td>type=&quot;button&quot;</td>
</tr>
<tr>
<td>4</td>
<td>-    class=&quot;inline-flex bg-cl-transparent brdr-none&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+    class=&quot;inline-flex bg-cl-transparent brdr-none relative&quot;</td>
</tr>
<tr>
<td>55</td>
<td>@click=&quot;toggleWishlistPanel&quot;</td>
</tr>
<tr>
<td>66</td>
<td>:aria-label=&quot;$t('Open wishlist')&quot;</td>
</tr>
<tr>
<td>77</td>
<td>&gt;</td>
</tr>
<tr>
<td>88</td>
<td><i class="material-icons">favorite_border</i></td>
</tr>
<tr>
<td>9</td>
<td>+    &lt;span</td>
</tr>
<tr>
<td>10</td>
<td>+      class=&quot;whishlist-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white bg-cl-silver&quot;</td>
</tr>
<tr>
<td>11</td>
<td>+      v-cloak</td>
</tr>
<tr>
<td>12</td>
<td>+      v-show=&quot;getWishlistItemsCount&quot;</td>
</tr>
<tr>
<td>13</td>
<td>+    &gt;</td>
</tr>
<tr>
<td>14</td>
<td>+      {{ getWishlistItemsCount }}</td>
</tr>
<tr>
<td>15</td>
<td>+    </span></td>
</tr>
<tr>
<td>916</td>
<td></button></td>
</tr>
<tr>
<td>1017</td>
<td></template></td>
</tr>
<tr>
<td>1118</td>
<td></td>
</tr>
<tr>
<td></td>
<td>@@ -16,3 +23,13 @@ export default {</td>
</tr>
<tr>
<td>1623</td>
<td>mixins: [WishlistIcon]</td>
</tr>
<tr>
<td>1724</td>
<td>}</td>
</tr>
<tr>
<td>1825</td>
<td></script></td>
</tr>
<tr>
<td>26</td>
<td>+</td>
</tr>
<tr>
<td>27</td>
<td>+ <style scoped></td>
</tr>
<tr>
<td>28</td>
<td>+  .whishlist-count {</td>
</tr>
<tr>
<td>29</td>
<td>+    top: 7px;</td>
</tr>
<tr>
<td>30</td>
<td>+    left: 50%;</td>
</tr>
<tr>
<td>31</td>
<td>+    min-width: 16px;</td>
</tr>
<tr>
<td>32</td>
<td>+    min-height: 16px;</td>
</tr>
<tr>
<td>33</td>
<td>+    border-radius: 10px;</td>
</tr>
<tr>
<td>34</td>
<td>+  }</td>
</tr>
<tr>
<td>35</td>
<td>+ </style></td>
</tr>
</tbody>
</table>
<p>添加了<em>愿望清单**计数</em>。</p>
<h4 id="_26-现在轮到我的账户了。" tabindex="-1"><a class="header-anchor" href="#_26-现在轮到我的账户了。" aria-hidden="true">#</a> <a href="#_26-myaccount-turn-is-now">#</a>26.现在轮到<em>我的账户</em>了。</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/MyAccount/MyNewsLetter.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/MyAccount/MyNewsletter.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -39,6 +39,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>3939</td>
<td>import { Newsletter } from '@vue-storefront/core/modules/newsletter/components/Newsletter'</td>
</tr>
<tr>
<td>4040</td>
<td>import ButtonFull from 'theme/components/theme/ButtonFull.vue'</td>
</tr>
<tr>
<td>4141</td>
<td>import BaseCheckbox from '../Form/BaseCheckbox.vue'</td>
</tr>
<tr>
<td>42</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>4243</td>
<td></td>
</tr>
<tr>
<td>4344</td>
<td>export default {</td>
</tr>
<tr>
<td>4445</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -53,11 +54,27 @@ export default {</td>
</tr>
<tr>
<td>5354</td>
<td>edit () {</td>
</tr>
<tr>
<td>5455</td>
<td>this.isEdited = true</td>
</tr>
<tr>
<td>5556</td>
<td>},</td>
</tr>
<tr>
<td>56</td>
<td>-    updateNewsletter () {</td>
</tr>
<tr>
<td>57</td>
<td>+    async updateNewsletter () {</td>
</tr>
<tr>
<td>5758</td>
<td>if (this.user.isSubscribed) {</td>
</tr>
<tr>
<td>58</td>
<td>-        this.subscribe~~(~~)</td>
</tr>
<tr>
<td>59</td>
<td>- ~~      } else {~~</td>
</tr>
<tr>
<td>60</td>
<td>-        <s>this.unsubscribe</s>()</td>
</tr>
<tr>
<td>59</td>
<td>+        const isSubscribed = await this.$store.dispatch('newsletter/subscribe', this.email)</td>
</tr>
<tr>
<td>60</td>
<td>+</td>
</tr>
<tr>
<td>61</td>
<td>+        if (isSubscribed) {</td>
</tr>
<tr>
<td>62</td>
<td>+          this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>63</td>
<td>+            type: 'success',</td>
</tr>
<tr>
<td>64</td>
<td>+            message: i18n.t('You have been successfully subscribed to our newsletter!'),</td>
</tr>
<tr>
<td>65</td>
<td>+            action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>66</td>
<td>+          })</td>
</tr>
<tr>
<td>67</td>
<td>+        }</td>
</tr>
<tr>
<td>68</td>
<td>+        return</td>
</tr>
<tr>
<td>69</td>
<td>+      }</td>
</tr>
<tr>
<td>70</td>
<td>+</td>
</tr>
<tr>
<td>71</td>
<td>+      const isUnsubscribed = await this.$store.dispatch('newsletter/unsubscribe', this.email)</td>
</tr>
<tr>
<td>72</td>
<td>+      if (isUnsubscribed) {</td>
</tr>
<tr>
<td>73</td>
<td>+        this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>74</td>
<td>+          type: 'success',</td>
</tr>
<tr>
<td>75</td>
<td>+          message: i18n.t('You have been successfully unsubscribed from our newsletter!'),</td>
</tr>
<tr>
<td>76</td>
<td>+          action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>77</td>
<td>+        })</td>
</tr>
<tr>
<td>6178</td>
<td>}</td>
</tr>
<tr>
<td>6279</td>
<td>}</td>
</tr>
<tr>
<td>6380</td>
<td>},</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/MyAccount/MyOrder.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/MyAccount/MyOrder.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,5 +1,5 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  <div class="mb35"></td>
</tr>
<tr>
<td>2</td>
<td>+  <div class="mb35" v-if="order"></td>
</tr>
<tr>
<td>33</td>
<td><!-- My order header --></td>
</tr>
<tr>
<td>44</td>
<td><div class="row mb15"></td>
</tr>
<tr>
<td>55</td>
<td><div class="col-xs-12 col-md-2 col-lg-1"></td>
</tr>
<tr>
<td></td>
<td>@@ -7,7 +7,7 @@</td>
</tr>
<tr>
<td>77</td>
<td></div></td>
</tr>
<tr>
<td>88</td>
<td><div class="col-xs-12 col-md-6"></td>
</tr>
<tr>
<td>99</td>
<td><h3 class="m0 mb5 mt5"></td>
</tr>
<tr>
<td>10</td>
<td>-          {{ $t('Order #'<s>)</s> <s>}}</s>{<s>{</s> order.increment_id }}</td>
</tr>
<tr>
<td>10</td>
<td>+          {{ $t('Order #{id}', { id: order.increment_id }) }}</td>
</tr>
<tr>
<td>1111</td>
<td><span class="brdr-1 brdr-cl-bg-secondary py5 px10 ml20 sans-serif fs-medium-small weight-400 cl-secondary"></td>
</tr>
<tr>
<td>1212</td>
<td>{{ order.status | capitalize }}</td>
</tr>
<tr>
<td>1313</td>
<td></span></td>
</tr>
<tr>
<td></td>
<td>@@ -19,7 +19,7 @@</td>
</tr>
<tr>
<td>1919</td>
<td><div class="col-xs-12 h4"></td>
</tr>
<tr>
<td>2020</td>
<td><p>{{ order.created_at | date('LLL') }}</p></td>
</tr>
<tr>
<td>2121</td>
<td><p class="mt35"></td>
</tr>
<tr>
<td>22</td>
<td>-          <a href="#" class="underline" @click.prevent="remakeOrder(~~skipGrouped(order.items~~)~~)~~">{{ $t('Remake order') }}</a></td>
</tr>
<tr>
<td>22</td>
<td>+          <a href="#" class="underline" @click.prevent="remakeOrder(singleOrderItems)">{{ $t('Remake order') }}</a></td>
</tr>
<tr>
<td>2323</td>
<td></p></td>
</tr>
<tr>
<td>2424</td>
<td></div></td>
</tr>
<tr>
<td>2525</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -44,10 +44,13 @@</td>
</tr>
<tr>
<td>4444</td>
<td><th class="serif lh20"></td>
</tr>
<tr>
<td>4545</td>
<td>{{ $t('Subtotal') }}</td>
</tr>
<tr>
<td>4646</td>
<td></th></td>
</tr>
<tr>
<td>47</td>
<td>+              <th class="serif lh20"></td>
</tr>
<tr>
<td>48</td>
<td>+                {{ $t('Thumbnail') }}</td>
</tr>
<tr>
<td>49</td>
<td>+              </th></td>
</tr>
<tr>
<td>4750</td>
<td></tr></td>
</tr>
<tr>
<td>4851</td>
<td></thead></td>
</tr>
<tr>
<td>4952</td>
<td><tbody></td>
</tr>
<tr>
<td>50</td>
<td>-            <tr class="brdr-top-1 brdr-cl-bg-secondary" v-for="item in ~~skipGrouped(order.items)~~" :key="item.item_id"></td>
</tr>
<tr>
<td>53</td>
<td>+            <tr class="brdr-top-1 brdr-cl-bg-secondary" v-for="item in singleOrderItems" :key="item.item_id"></td>
</tr>
<tr>
<td>5154</td>
<td><td class="fs-medium lh25" :data-th="$t('Product Name')"></td>
</tr>
<tr>
<td>5255</td>
<td>{{ item.name }}</td>
</tr>
<tr>
<td>5356</td>
<td></td></td>
</tr>
<tr>
<td></td>
<td>@@ -63,35 +66,38 @@</td>
</tr>
<tr>
<td>6366</td>
<td><td class="fs-medium lh25" :data-th="$t('Subtotal')"></td>
</tr>
<tr>
<td>6467</td>
<td>{{ item.row_total_incl_tax | price }}</td>
</tr>
<tr>
<td>6568</td>
<td></td></td>
</tr>
<tr>
<td>69</td>
<td>+              <td class="fs-medium lh25"></td>
</tr>
<tr>
<td>70</td>
<td>+                <product-image :image="{src: itemThumbnail[item.sku]}" /></td>
</tr>
<tr>
<td>71</td>
<td>+              </td></td>
</tr>
<tr>
<td>6672</td>
<td></tr></td>
</tr>
<tr>
<td>6773</td>
<td></tbody></td>
</tr>
<tr>
<td>6874</td>
<td><tfoot></td>
</tr>
<tr>
<td>6975</td>
<td><tr class="brdr-top-1 brdr-cl-bg-secondary"></td>
</tr>
<tr>
<td>70</td>
<td>-              <td colspan="~~4~~" class="align-right"></td>
</tr>
<tr>
<td>76</td>
<td>+              <td colspan="5" class="align-right"></td>
</tr>
<tr>
<td>7177</td>
<td>{{ $t('Subtotal') }}</td>
</tr>
<tr>
<td>7278</td>
<td></td></td>
</tr>
<tr>
<td>7379</td>
<td><td>{{ order.subtotal | price }}</td></td>
</tr>
<tr>
<td>7480</td>
<td></tr></td>
</tr>
<tr>
<td>7581</td>
<td><tr></td>
</tr>
<tr>
<td>76</td>
<td>-              <td colspan="~~4~~" class="align-right"></td>
</tr>
<tr>
<td>82</td>
<td>+              <td colspan="5" class="align-right"></td>
</tr>
<tr>
<td>7783</td>
<td>{{ $t('Shipping') }}</td>
</tr>
<tr>
<td>7884</td>
<td></td></td>
</tr>
<tr>
<td>7985</td>
<td><td>{{ order.shipping_amount | price }}</td></td>
</tr>
<tr>
<td>8086</td>
<td></tr></td>
</tr>
<tr>
<td>8187</td>
<td><tr></td>
</tr>
<tr>
<td>82</td>
<td>-              <td colspan="~~4~~" class="align-right"></td>
</tr>
<tr>
<td>88</td>
<td>+              <td colspan="5" class="align-right"></td>
</tr>
<tr>
<td>8389</td>
<td>{{ $t('Tax') }}</td>
</tr>
<tr>
<td>8490</td>
<td></td></td>
</tr>
<tr>
<td>8591</td>
<td><td>{{ order.tax_amount + order.discount_tax_compensation_amount | price }}</td></td>
</tr>
<tr>
<td>8692</td>
<td></tr></td>
</tr>
<tr>
<td>8793</td>
<td><tr v-if="order.discount_amount"></td>
</tr>
<tr>
<td>88</td>
<td>-              <td colspan="~~4~~" class="align-right"></td>
</tr>
<tr>
<td>94</td>
<td>+              <td colspan="5" class="align-right"></td>
</tr>
<tr>
<td>8995</td>
<td>{{ $t('Discount') }}</td>
</tr>
<tr>
<td>9096</td>
<td></td></td>
</tr>
<tr>
<td>9197</td>
<td><td>{{ order.discount_amount | price }}</td></td>
</tr>
<tr>
<td>9298</td>
<td></tr></td>
</tr>
<tr>
<td>9399</td>
<td><tr></td>
</tr>
<tr>
<td>94</td>
<td>-              <td colspan="~~4~~" class="align-right"></td>
</tr>
<tr>
<td>100</td>
<td>+              <td colspan="5" class="align-right"></td>
</tr>
<tr>
<td>95101</td>
<td>{{ $t('Grand total') }}</td>
</tr>
<tr>
<td>96102</td>
<td></td></td>
</tr>
<tr>
<td>97103</td>
<td><td>{{ order.grand_total | price }}</td></td>
</tr>
<tr>
<td></td>
<td>@@ -137,13 +143,37 @@</td>
</tr>
<tr>
<td>137143</td>
<td></template></td>
</tr>
<tr>
<td>138144</td>
<td></td>
</tr>
<tr>
<td>139145</td>
<td><script></td>
</tr>
<tr>
<td>146</td>
<td>+ import Vue from 'vue'</td>
</tr>
<tr>
<td>140147</td>
<td>import MyOrder from '@vue-storefront/core/compatibility/components/blocks/MyAccount/MyOrder'</td>
</tr>
<tr>
<td>141148</td>
<td>import ReturnIcon from 'theme/components/core/blocks/Header/ReturnIcon'</td>
</tr>
<tr>
<td>149</td>
<td>+ import ProductImage from 'theme/components/core/ProductImage'</td>
</tr>
<tr>
<td>150</td>
<td>+ import { getThumbnailPath, productThumbnailPath } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>151</td>
<td>+ import { mapActions } from 'vuex'</td>
</tr>
<tr>
<td>142152</td>
<td></td>
</tr>
<tr>
<td>143153</td>
<td>export default {</td>
</tr>
<tr>
<td>144154</td>
<td>mixins: [MyOrder],</td>
</tr>
<tr>
<td>145155</td>
<td>components: {</td>
</tr>
<tr>
<td>146</td>
<td>-    ReturnIcon</td>
</tr>
<tr>
<td>156</td>
<td>+    ReturnIcon,</td>
</tr>
<tr>
<td>157</td>
<td>+    ProductImage</td>
</tr>
<tr>
<td>158</td>
<td>+  },</td>
</tr>
<tr>
<td>159</td>
<td>+  data () {</td>
</tr>
<tr>
<td>160</td>
<td>+    return {</td>
</tr>
<tr>
<td>161</td>
<td>+      itemThumbnail: []</td>
</tr>
<tr>
<td>162</td>
<td>+    }</td>
</tr>
<tr>
<td>163</td>
<td>+  },</td>
</tr>
<tr>
<td>164</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>165</td>
<td>+    ...mapActions({</td>
</tr>
<tr>
<td>166</td>
<td>+      getProduct: 'product/single'</td>
</tr>
<tr>
<td>167</td>
<td>+    })</td>
</tr>
<tr>
<td>168</td>
<td>+  },</td>
</tr>
<tr>
<td>169</td>
<td>+  mounted () {</td>
</tr>
<tr>
<td>170</td>
<td>+    this.singleOrderItems.forEach(async item =&gt; {</td>
</tr>
<tr>
<td>171</td>
<td>+      if (!this.itemThumbnail[item.sku]) {</td>
</tr>
<tr>
<td>172</td>
<td>+        const product = await this.getProduct({ options: { sku: item.sku }, setCurrentProduct: false, setCurrentCategoryPath: false, selectDefaultVariant: false })</td>
</tr>
<tr>
<td>173</td>
<td>+        const thumbnail = productThumbnailPath(product)</td>
</tr>
<tr>
<td>174</td>
<td>+        Vue.set(this.itemThumbnail, item.sku, getThumbnailPath(thumbnail, 280, 280))</td>
</tr>
<tr>
<td>175</td>
<td>+      }</td>
</tr>
<tr>
<td>176</td>
<td>+    })</td>
</tr>
<tr>
<td>147177</td>
<td>}</td>
</tr>
<tr>
<td>148178</td>
<td>}</td>
</tr>
<tr>
<td>149179</td>
<td></script></td>
</tr>
</tbody>
</table>
<p>一些样式已经到位。</p>
<p>已添加产品缩略图。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/MyAccount/MyOrders.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/MyAccount/MyOrders.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -80,7 +80,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>8080</td>
<td></template></td>
</tr>
<tr>
<td>8181</td>
<td></td>
</tr>
<tr>
<td>8282</td>
<td><script></td>
</tr>
<tr>
<td>83</td>
<td>- import UserOrder from '<s>src</s>/modules/order~~-history~~/components/<s>UserOrders</s>'</td>
</tr>
<tr>
<td>83</td>
<td>+ import UserOrder from '@vue-storefront/core/modules/order/components/UserOrdersHistory'</td>
</tr>
<tr>
<td>8484</td>
<td></td>
</tr>
<tr>
<td>8585</td>
<td>export default {</td>
</tr>
<tr>
<td>8686</td>
<td>mixins: [UserOrder]</td>
</tr>
</tbody>
</table>
<p><code>UserOrdersHistory</code> 模块已移至核心模块。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/MyAccount/MyProfile.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/MyAccount/MyProfile.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -195,10 +195,16 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>195195</td>
<td>:placeholder=&quot;$t('City *')&quot;</td>
</tr>
<tr>
<td>196196</td>
<td>v-model.trim=&quot;userCompany.city&quot;</td>
</tr>
<tr>
<td>197197</td>
<td>@input=&quot;$v.userCompany.city.$touch()&quot;</td>
</tr>
<tr>
<td>198</td>
<td>-          :validations=&quot;[<s>{</s></td>
</tr>
<tr>
<td>198</td>
<td>+          :validations=&quot;[</td>
</tr>
<tr>
<td>199</td>
<td>+          {</td>
</tr>
<tr>
<td>199200</td>
<td>condition: !$v.userCompany.city.required &amp;&amp; $v.userCompany.city.$error,</td>
</tr>
<tr>
<td>200201</td>
<td>text: $t('Field is required')</td>
</tr>
<tr>
<td>201</td>
<td>- <s>]&quot;</s></td>
</tr>
<tr>
<td>202</td>
<td>+ ,</td>
</tr>
<tr>
<td>203</td>
<td>+          {</td>
</tr>
<tr>
<td>204</td>
<td>+            condition: $v.userCompany.city.$error &amp;&amp; $v.userCompany.city.required,</td>
</tr>
<tr>
<td>205</td>
<td>+            text: $t('Please provide valid city name')</td>
</tr>
<tr>
<td>206</td>
<td>+          }</td>
</tr>
<tr>
<td>207</td>
<td>+          ]&quot;</td>
</tr>
<tr>
<td>202208</td>
<td>/&gt;</td>
</tr>
<tr>
<td>203209</td>
<td></td>
</tr>
<tr>
<td>204210</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td></td>
<td>@@ -348,6 +354,7 @@</td>
</tr>
<tr>
<td>348354</td>
<td><script></td>
</tr>
<tr>
<td>349355</td>
<td>import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'</td>
</tr>
<tr>
<td>350356</td>
<td>import MyProfile from '@vue-storefront/core/compatibility/components/blocks/MyAccount/MyProfile'</td>
</tr>
<tr>
<td>357</td>
<td>+ import { unicodeAlpha, unicodeAlphaNum } from '@vue-storefront/core/helpers/validators'</td>
</tr>
<tr>
<td>351358</td>
<td></td>
</tr>
<tr>
<td>352359</td>
<td>import BaseCheckbox from 'theme/components/core/blocks/Form/BaseCheckbox'</td>
</tr>
<tr>
<td>353360</td>
<td>import BaseSelect from 'theme/components/core/blocks/Form/BaseSelect'</td>
</tr>
<tr>
<td></td>
<td>@@ -391,10 +398,12 @@ export default {</td>
</tr>
<tr>
<td>391398</td>
<td>currentUser: {</td>
</tr>
<tr>
<td>392399</td>
<td>firstname: {</td>
</tr>
<tr>
<td>393400</td>
<td>required,</td>
</tr>
<tr>
<td>394</td>
<td>-        minLength: minLength(2)</td>
</tr>
<tr>
<td>401</td>
<td>+        minLength: minLength(2),</td>
</tr>
<tr>
<td>402</td>
<td>+        unicodeAlpha</td>
</tr>
<tr>
<td>395403</td>
<td>},</td>
</tr>
<tr>
<td>396404</td>
<td>lastname: {</td>
</tr>
<tr>
<td>397</td>
<td>-        required</td>
</tr>
<tr>
<td>405</td>
<td>+        required,</td>
</tr>
<tr>
<td>406</td>
<td>+        unicodeAlpha</td>
</tr>
<tr>
<td>398407</td>
<td>},</td>
</tr>
<tr>
<td>399408</td>
<td>email: {</td>
</tr>
<tr>
<td>400409</td>
<td>required,</td>
</tr>
<tr>
<td></td>
<td>@@ -419,17 +428,20 @@ export default {</td>
</tr>
<tr>
<td>419428</td>
<td>required</td>
</tr>
<tr>
<td>420429</td>
<td>},</td>
</tr>
<tr>
<td>421430</td>
<td>street: {</td>
</tr>
<tr>
<td>422</td>
<td>-        required</td>
</tr>
<tr>
<td>431</td>
<td>+        required,</td>
</tr>
<tr>
<td>432</td>
<td>+        unicodeAlphaNum</td>
</tr>
<tr>
<td>423433</td>
<td>},</td>
</tr>
<tr>
<td>424434</td>
<td>house: {</td>
</tr>
<tr>
<td>425</td>
<td>-        required</td>
</tr>
<tr>
<td>435</td>
<td>+        required,</td>
</tr>
<tr>
<td>436</td>
<td>+        unicodeAlphaNum</td>
</tr>
<tr>
<td>426437</td>
<td>},</td>
</tr>
<tr>
<td>427438</td>
<td>postcode: {</td>
</tr>
<tr>
<td>428439</td>
<td>required,</td>
</tr>
<tr>
<td>429440</td>
<td>minLength: minLength(3)</td>
</tr>
<tr>
<td>430441</td>
<td>},</td>
</tr>
<tr>
<td>431442</td>
<td>city: {</td>
</tr>
<tr>
<td>432</td>
<td>-        required</td>
</tr>
<tr>
<td>443</td>
<td>+        required,</td>
</tr>
<tr>
<td>444</td>
<td>+        unicodeAlpha</td>
</tr>
<tr>
<td>433445</td>
<td>},</td>
</tr>
<tr>
<td>434446</td>
<td>taxId: {</td>
</tr>
<tr>
<td>435447</td>
<td>required,</td>
</tr>
</tbody>
</table>
<p>添加了代码样式更新和<em>验证</em>。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/MyAccount/MyShippingDetails.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/MyAccount/MyShippingDetails.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -101,10 +101,16 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>101101</td>
<td>:placeholder=&quot;<code>${$t('City')} *</code>&quot;</td>
</tr>
<tr>
<td>102102</td>
<td>v-model.trim=&quot;shippingDetails.city&quot;</td>
</tr>
<tr>
<td>103103</td>
<td>@input=&quot;$v.shippingDetails.city.$touch()&quot;</td>
</tr>
<tr>
<td>104</td>
<td>-          :validations=&quot;[<s>{</s></td>
</tr>
<tr>
<td>104</td>
<td>+          :validations=&quot;[</td>
</tr>
<tr>
<td>105</td>
<td>+          {</td>
</tr>
<tr>
<td>105106</td>
<td>condition: !$v.shippingDetails.city.required &amp;&amp; $v.shippingDetails.city.$error,</td>
</tr>
<tr>
<td>106107</td>
<td>text: $t('Field is required')</td>
</tr>
<tr>
<td>107</td>
<td>-          }<s>]&quot;</s></td>
</tr>
<tr>
<td>108</td>
<td>+          },</td>
</tr>
<tr>
<td>109</td>
<td>+          {</td>
</tr>
<tr>
<td>110</td>
<td>+            condition: $v.shippingDetails.city.$error &amp;&amp; $v.shippingDetails.city.required,</td>
</tr>
<tr>
<td>111</td>
<td>+            text: $t('Please provide valid city name')</td>
</tr>
<tr>
<td>112</td>
<td>+          }</td>
</tr>
<tr>
<td>113</td>
<td>+          ]&quot;</td>
</tr>
<tr>
<td>108114</td>
<td>/&gt;</td>
</tr>
<tr>
<td>109115</td>
<td></td>
</tr>
<tr>
<td>110116</td>
<td>&lt;base-input</td>
</tr>
<tr>
<td></td>
<td>@@ -224,6 +230,7 @@</td>
</tr>
<tr>
<td>224230</td>
<td><script></td>
</tr>
<tr>
<td>225231</td>
<td>import { required, minLength } from 'vuelidate/lib/validators'</td>
</tr>
<tr>
<td>226232</td>
<td>import MyShippingDetails from '@vue-storefront/core/compatibility/components/blocks/MyAccount/MyShippingDetails'</td>
</tr>
<tr>
<td>233</td>
<td>+ import { unicodeAlpha, unicodeAlphaNum } from '@vue-storefront/core/helpers/validators'</td>
</tr>
<tr>
<td>227234</td>
<td></td>
</tr>
<tr>
<td>228235</td>
<td>import ButtonFull from 'theme/components/theme/ButtonFull'</td>
</tr>
<tr>
<td>229236</td>
<td>import Tooltip from 'theme/components/core/Tooltip'</td>
</tr>
<tr>
<td></td>
<td>@@ -254,7 +261,8 @@ export default {</td>
</tr>
<tr>
<td>254261</td>
<td>shippingDetails: {</td>
</tr>
<tr>
<td>255262</td>
<td>firstName: {</td>
</tr>
<tr>
<td>256263</td>
<td>required,</td>
</tr>
<tr>
<td>257</td>
<td>-        minLength: minLength(2)</td>
</tr>
<tr>
<td>264</td>
<td>+ ,</td>
</tr>
<tr>
<td>265</td>
<td>+        unicodeAlpha</td>
</tr>
<tr>
<td>258266</td>
<td>},</td>
</tr>
<tr>
<td>259267</td>
<td>lastName: {</td>
</tr>
<tr>
<td>260268</td>
<td>required</td>
</tr>
<tr>
<td></td>
<td>@@ -263,17 +271,20 @@ export default {</td>
</tr>
<tr>
<td>263271</td>
<td>required</td>
</tr>
<tr>
<td>264272</td>
<td>},</td>
</tr>
<tr>
<td>265273</td>
<td>street: {</td>
</tr>
<tr>
<td>266</td>
<td>-        required</td>
</tr>
<tr>
<td>274</td>
<td>+ ,</td>
</tr>
<tr>
<td>275</td>
<td>+        unicodeAlphaNum</td>
</tr>
<tr>
<td>267276</td>
<td>},</td>
</tr>
<tr>
<td>268277</td>
<td>house: {</td>
</tr>
<tr>
<td>269</td>
<td>-        required</td>
</tr>
<tr>
<td>278</td>
<td>+        required,</td>
</tr>
<tr>
<td>279</td>
<td>+        unicodeAlphaNum</td>
</tr>
<tr>
<td>270280</td>
<td>},</td>
</tr>
<tr>
<td>271281</td>
<td>postcode: {</td>
</tr>
<tr>
<td>272282</td>
<td>required,</td>
</tr>
<tr>
<td>273283</td>
<td>minLength: minLength(3)</td>
</tr>
<tr>
<td>274284</td>
<td>},</td>
</tr>
<tr>
<td>275285</td>
<td>city: {</td>
</tr>
<tr>
<td>276</td>
<td>-        required</td>
</tr>
<tr>
<td>286</td>
<td>+        required,</td>
</tr>
<tr>
<td>287</td>
<td>+        unicodeAlpha</td>
</tr>
<tr>
<td>277288</td>
<td>}</td>
</tr>
<tr>
<td>278289</td>
<td>}</td>
</tr>
<tr>
<td>279290</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>添加了代码样式更新和<em>验证</em>。</p>
<h4 id="_27-产品-相关已准备好转型。" tabindex="-1"><a class="header-anchor" href="#_27-产品-相关已准备好转型。" aria-hidden="true">#</a> <a href="#_27-product-related-is-ready-to-transform">#</a>27.<em>产品</em> <em>相关</em>已准备好转型。</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Product/Related.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Product/Related.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,7 +1,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;section</td>
</tr>
<tr>
<td>33</td>
<td>class=&quot;py20 new-collection container px15&quot;</td>
</tr>
<tr>
<td>4</td>
<td>-    v-if=&quot;<s>product</s>.<s>related[type] &amp;&amp; product.related[type].<s>length</s> &gt; 0</s>&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+    v-if=&quot;getCurrentRelatedProducts.length&quot;</td>
</tr>
<tr>
<td>55</td>
<td>&gt;</td>
</tr>
<tr>
<td>66</td>
<td><div></td>
</tr>
<tr>
<td>77</td>
<td><header class="col-md-12"></td>
</tr>
<tr>
<td></td>
<td>@@ -10,15 +10,13 @@</td>
</tr>
<tr>
<td>1010</td>
<td></h2></td>
</tr>
<tr>
<td>1111</td>
<td></header></td>
</tr>
<tr>
<td>1212</td>
<td></div></td>
</tr>
<tr>
<td>13</td>
<td>-    &lt;<s>div</s> <s>class</s>=&quot;<s>row</s> <s>center-xs</s>&quot;<s>&gt;</s></td>
</tr>
<tr>
<td>13</td>
<td>+    <product-listing columns="4" :products="getCurrentRelatedProducts" /></td>
</tr>
<tr>
<td>14</td>
<td>-      <product-listing columns="4" :products="product.related[type]" /></td>
</tr>
<tr>
<td>15</td>
<td>-    </div></td>
</tr>
<tr>
<td>1614</td>
<td></section></td>
</tr>
<tr>
<td>1715</td>
<td></template></td>
</tr>
<tr>
<td>1816</td>
<td></td>
</tr>
<tr>
<td>1917</td>
<td><script></td>
</tr>
<tr>
<td>2018</td>
<td>import ProductListing from 'theme/components/core/ProductListing'</td>
</tr>
<tr>
<td>21</td>
<td>-</td>
</tr>
<tr>
<td>19</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>2220</td>
<td>import { prepareRelatedQuery } from '@vue-storefront/core/modules/catalog/queries/related'</td>
</tr>
<tr>
<td>2321</td>
<td>import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>2422</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td></td>
<td>@@ -59,40 +57,43 @@ export default {</td>
</tr>
<tr>
<td>5957</td>
<td>this.$bus.$off('product-after-load', this.refreshList)</td>
</tr>
<tr>
<td>6058</td>
<td>},</td>
</tr>
<tr>
<td>6159</td>
<td>methods: {</td>
</tr>
<tr>
<td>62</td>
<td>-    refreshList () {</td>
</tr>
<tr>
<td>60</td>
<td>+    async refreshList () {</td>
</tr>
<tr>
<td>6361</td>
<td>let sku = this.productLinks ? this.productLinks</td>
</tr>
<tr>
<td>6462</td>
<td>.filter(pl =&gt; pl.link_type === this.type)</td>
</tr>
<tr>
<td>6563</td>
<td>.map(pl =&gt; pl.linked_product_sku) : null</td>
</tr>
<tr>
<td>6664</td>
<td></td>
</tr>
<tr>
<td>6765</td>
<td>let key = 'sku'</td>
</tr>
<tr>
<td>6866</td>
<td>if (sku === null || (sku.length === 0)) {</td>
</tr>
<tr>
<td>69</td>
<td>-        sku = this.<s>product</s>.<s>current.category.map(cat =&gt; cat.category_id)</s></td>
</tr>
<tr>
<td>67</td>
<td>+        sku = this.getCurrentProduct.category_ids</td>
</tr>
<tr>
<td>7068</td>
<td>key = 'category_ids'</td>
</tr>
<tr>
<td>7169</td>
<td>}</td>
</tr>
<tr>
<td>7270</td>
<td>let relatedProductsQuery = prepareRelatedQuery(key, sku)</td>
</tr>
<tr>
<td>7371</td>
<td></td>
</tr>
<tr>
<td>74</td>
<td>-      this.$store.dispatch('product/list', {</td>
</tr>
<tr>
<td>72</td>
<td>+      const response = await this.$store.dispatch('product/list', {</td>
</tr>
<tr>
<td>7573</td>
<td>query: relatedProductsQuery,</td>
</tr>
<tr>
<td>7674</td>
<td>size: 8,</td>
</tr>
<tr>
<td>7775</td>
<td>prefetchGroupProducts: false,</td>
</tr>
<tr>
<td>7876</td>
<td>updateState: false</td>
</tr>
<tr>
<td>79</td>
<td>-      }).then((response) =&gt; {</td>
</tr>
<tr>
<td>80</td>
<td>-        if (response) {</td>
</tr>
<tr>
<td>81</td>
<td>-          this.$store.dispatch('product/related', {</td>
</tr>
<tr>
<td>82</td>
<td>-            key: this.type,</td>
</tr>
<tr>
<td>83</td>
<td>-            items: response.items</td>
</tr>
<tr>
<td>84</td>
<td>-          })</td>
</tr>
<tr>
<td>85</td>
<td>-          this.$forceUpdate()</td>
</tr>
<tr>
<td>86</td>
<td>-        }</td>
</tr>
<tr>
<td>8777</td>
<td>})</td>
</tr>
<tr>
<td>78</td>
<td>+      if (response) {</td>
</tr>
<tr>
<td>79</td>
<td>+        this.$store.dispatch('product/related', {</td>
</tr>
<tr>
<td>80</td>
<td>+          key: this.type,</td>
</tr>
<tr>
<td>81</td>
<td>+          items: response.items</td>
</tr>
<tr>
<td>82</td>
<td>+        })</td>
</tr>
<tr>
<td>83</td>
<td>+        this.$forceUpdate()</td>
</tr>
<tr>
<td>84</td>
<td>+      }</td>
</tr>
<tr>
<td>8885</td>
<td>}</td>
</tr>
<tr>
<td>8986</td>
<td>},</td>
</tr>
<tr>
<td>9087</td>
<td>computed: {</td>
</tr>
<tr>
<td>91</td>
<td>-    ~~product <s>(</s>) ~~{</td>
</tr>
<tr>
<td>92</td>
<td>-      <s>return</s> ~~this.$store.state.~~product</td>
</tr>
<tr>
<td>88</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>89</td>
<td>+      getProductRelated: 'product/getProductRelated',</td>
</tr>
<tr>
<td>90</td>
<td>+      getCurrentProduct: 'product/getCurrentProduct'</td>
</tr>
<tr>
<td>91</td>
<td>+    }),</td>
</tr>
<tr>
<td>92</td>
<td>+    getCurrentRelatedProducts () {</td>
</tr>
<tr>
<td>93</td>
<td>+      return this.getProductRelated[this.type] || []</td>
</tr>
<tr>
<td>9394</td>
<td>},</td>
</tr>
<tr>
<td>9495</td>
<td>productLinks () {</td>
</tr>
<tr>
<td>95</td>
<td>-      return this.<s>product</s>.~~current.~~product_links</td>
</tr>
<tr>
<td>96</td>
<td>+      return this.getCurrentProduct.product_links</td>
</tr>
<tr>
<td>9697</td>
<td>}</td>
</tr>
<tr>
<td>9798</td>
<td>}</td>
</tr>
<tr>
<td>9899</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>现在您已经熟悉了<code>vuex</code> <code>mapGetters</code>在更新中的实现。</p>
<p><code>async</code>-<code>await</code>实施也在进行。</p>
<h4 id="_28-评论也是固定的" tabindex="-1"><a class="header-anchor" href="#_28-评论也是固定的" aria-hidden="true">#</a> <a href="#_28-reviews-is-fixed-too">#</a>28.<em>评论</em>也是固定的</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Reviews/Reviews.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Reviews/Reviews.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -6,7 +6,11 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td><h2 class="h3 m0 mb10 serif lh20 weight-700"></td>
</tr>
<tr>
<td>77</td>
<td>{{ $t('Reviews') }}</td>
</tr>
<tr>
<td>88</td>
<td></h2></td>
</tr>
<tr>
<td>9</td>
<td>-          &lt;reviews-list~~ :per-page=&quot;4&quot; :items=&quot;reviews ? reviews : []&quot; /&gt;~~</td>
</tr>
<tr>
<td>9</td>
<td>+          &lt;reviews-list</td>
</tr>
<tr>
<td>10</td>
<td>+            :per-page=&quot;4&quot;</td>
</tr>
<tr>
<td>11</td>
<td>+            :items=&quot;reviews&quot;</td>
</tr>
<tr>
<td>12</td>
<td>+            :product-name=&quot;productName&quot;</td>
</tr>
<tr>
<td>13</td>
<td>+          /&gt;</td>
</tr>
<tr>
<td>1014</td>
<td></div></td>
</tr>
<tr>
<td>1115</td>
<td><div class="col-xs-12 col-md-5 pt50"></td>
</tr>
<tr>
<td>1216</td>
<td><h2 class="h3 m0 mb10 serif lh20 weight-700"></td>
</tr>
<tr>
<td></td>
<td>@@ -110,6 +114,7 @@ import ReviewsList from 'theme/components/theme/blocks/Reviews/ReviewsList'</td>
</tr>
<tr>
<td>110114</td>
<td>import { Reviews } from '@vue-storefront/core/modules/review/components/Reviews'</td>
</tr>
<tr>
<td>111115</td>
<td>import { AddReview } from '@vue-storefront/core/modules/review/components/AddReview'</td>
</tr>
<tr>
<td>112116</td>
<td>import NoSSR from 'vue-no-ssr'</td>
</tr>
<tr>
<td>117</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>113118</td>
<td></td>
</tr>
<tr>
<td>114119</td>
<td>export default {</td>
</tr>
<tr>
<td>115120</td>
<td>name: 'Reviews',</td>
</tr>
<tr>
<td></td>
<td>@@ -125,8 +130,12 @@ export default {</td>
</tr>
<tr>
<td>125130</td>
<td>},</td>
</tr>
<tr>
<td>126131</td>
<td>props: {</td>
</tr>
<tr>
<td>127132</td>
<td>productId: {</td>
</tr>
<tr>
<td>128</td>
<td>-      type: Number,</td>
</tr>
<tr>
<td>133</td>
<td>+      type: [String, Number],</td>
</tr>
<tr>
<td>129134</td>
<td>required: true</td>
</tr>
<tr>
<td>135</td>
<td>+    },</td>
</tr>
<tr>
<td>136</td>
<td>+    productName: {</td>
</tr>
<tr>
<td>137</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>138</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>130139</td>
<td>}</td>
</tr>
<tr>
<td>131140</td>
<td>},</td>
</tr>
<tr>
<td>132141</td>
<td>computed: {</td>
</tr>
<tr>
<td></td>
<td>@@ -144,16 +153,31 @@ export default {</td>
</tr>
<tr>
<td>144153</td>
<td>refreshList () {</td>
</tr>
<tr>
<td>145154</td>
<td>this.$store.dispatch('review/list', { productId: this.productId })</td>
</tr>
<tr>
<td>146155</td>
<td>},</td>
</tr>
<tr>
<td>147</td>
<td>-    submit () {</td>
</tr>
<tr>
<td>148</td>
<td>-      this.<s>addReview</s>({</td>
</tr>
<tr>
<td>156</td>
<td>+    async submit () {</td>
</tr>
<tr>
<td>157</td>
<td>+      const isReviewCreated = await this.$store.dispatch('review/add', {</td>
</tr>
<tr>
<td>149158</td>
<td>'product_id': this.productId,</td>
</tr>
<tr>
<td>150159</td>
<td>'title': this.formData.summary,</td>
</tr>
<tr>
<td>151160</td>
<td>'detail': this.formData.review,</td>
</tr>
<tr>
<td>152161</td>
<td>'nickname': this.formData.name,</td>
</tr>
<tr>
<td>153162</td>
<td>'review_entity': 'product',</td>
</tr>
<tr>
<td>154</td>
<td>-        'review_status': 2,</td>
</tr>
<tr>
<td>155163</td>
<td>'customer_id': this.currentUser ? this.currentUser.id : null</td>
</tr>
<tr>
<td>156164</td>
<td>})</td>
</tr>
<tr>
<td>165</td>
<td>+</td>
</tr>
<tr>
<td>166</td>
<td>+      if (isReviewCreated) {</td>
</tr>
<tr>
<td>167</td>
<td>+        this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>168</td>
<td>+          type: 'success',</td>
</tr>
<tr>
<td>169</td>
<td>+          message: i18n.t('You submitted your review for moderation.'),</td>
</tr>
<tr>
<td>170</td>
<td>+          action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>171</td>
<td>+        })</td>
</tr>
<tr>
<td>172</td>
<td>+</td>
</tr>
<tr>
<td>173</td>
<td>+        return</td>
</tr>
<tr>
<td>174</td>
<td>+      }</td>
</tr>
<tr>
<td>175</td>
<td>+</td>
</tr>
<tr>
<td>176</td>
<td>+      this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>177</td>
<td>+        type: 'error',</td>
</tr>
<tr>
<td>178</td>
<td>+        message: i18n.t('Something went wrong. Try again in a few seconds.'),</td>
</tr>
<tr>
<td>179</td>
<td>+        action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>180</td>
<td>+      })</td>
</tr>
<tr>
<td>157181</td>
<td>},</td>
</tr>
<tr>
<td>158182</td>
<td>clearReviewForm () {</td>
</tr>
<tr>
<td>159183</td>
<td>this.formData.name = ''</td>
</tr>
<tr>
<td></td>
<td>@@ -186,7 +210,7 @@ export default {</td>
</tr>
<tr>
<td>186210</td>
<td>this.refreshList()</td>
</tr>
<tr>
<td>187211</td>
<td>this.fillInUserData()</td>
</tr>
<tr>
<td>188212</td>
<td>},</td>
</tr>
<tr>
<td>189</td>
<td>-  mixins: [ Reviews~~,~~ ~~AddReview ~~],</td>
</tr>
<tr>
<td>213</td>
<td>+  mixins: [ Reviews ],</td>
</tr>
<tr>
<td>190214</td>
<td>validations: {</td>
</tr>
<tr>
<td>191215</td>
<td>formData: {</td>
</tr>
<tr>
<td>192216</td>
<td>name: {</td>
</tr>
</tbody>
</table>
<p><code>i18n</code> 添加了支持。</p>
<p><code>async</code>-<code>await</code>实施也在进行。</p>
<p>已添加<em>审查</em>提交通知。</p>
<h4 id="_29-searchpanel有要更新的部分" tabindex="-1"><a class="header-anchor" href="#_29-searchpanel有要更新的部分" aria-hidden="true">#</a> <a href="#_29-searchpanel-has-parts-to-update">#</a>29. <em>SearchPanel</em>有要更新的部分</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/SearchPanel/SearchPanel.gql.vue</code>并添加如下：</li>
</ul>
<p>src/themes/degi/components/core/blocks/SearchPanel/SearchPanel.gql.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -67,6 +67,7 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>6767</td>
<td>transition: transform 300ms $motion-main;</td>
</tr>
<tr>
<td>6868</td>
<td>overflow-y: auto;</td>
</tr>
<tr>
<td>6969</td>
<td>overflow-x: hidden;</td>
</tr>
<tr>
<td>70</td>
<td>+  -webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>7071</td>
<td></td>
</tr>
<tr>
<td>7172</td>
<td>&amp;.active {</td>
</tr>
<tr>
<td>7273</td>
<td>transform: translateX(0);</td>
</tr>
</tbody>
</table>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/SearchPanel/SearchPanel.vue</code>并添加如下：</li>
</ul>
<p>src/themes/degi/components/core/blocks/SearchPanel/SearchPanel.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -83,6 +83,7 @@ import ProductTile from 'theme/components/core/ProductTile'</th>
</tr>
</thead>
<tbody>
<tr>
<td>8383</td>
<td>import VueOfflineMixin from 'vue-offline/mixin'</td>
</tr>
<tr>
<td>8484</td>
<td>import CategoryPanel from 'theme/components/core/blocks/Category/CategoryPanel'</td>
</tr>
<tr>
<td>8585</td>
<td>import { minLength } from 'vuelidate/lib/validators'</td>
</tr>
<tr>
<td>86</td>
<td>+ import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'</td>
</tr>
<tr>
<td>8687</td>
<td></td>
</tr>
<tr>
<td>8788</td>
<td>export default {</td>
</tr>
<tr>
<td>8889</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -112,13 +113,16 @@ export default {</td>
</tr>
<tr>
<td>112113</td>
<td>return productList</td>
</tr>
<tr>
<td>113114</td>
<td>},</td>
</tr>
<tr>
<td>114115</td>
<td>categories () {</td>
</tr>
<tr>
<td>115</td>
<td>-      const <s>categoriesMap</s> = <s>{}</s></td>
</tr>
<tr>
<td>116</td>
<td>- ~~      this~~.<s>products.forEach</s>(<s>product</s> =&gt; <s>{</s></td>
</tr>
<tr>
<td>117</td>
<td>-        <s>[...product</s>.<s>category].forEach</s>(<s>category</s> =&gt; <s>{</s></td>
</tr>
<tr>
<td>118</td>
<td>- ~~          categoriesMap[category~~.<s>category_id] = category</s></td>
</tr>
<tr>
<td>119</td>
<td>- ~~        })~~</td>
</tr>
<tr>
<td>120</td>
<td>-      <s>})</s></td>
</tr>
<tr>
<td>121</td>
<td>- ~~      return~~ <s>Object.keys</s>(<s>categoriesMap)</s>.map(<s>categoryId</s> =&gt; <s>categoriesMap[categoryId]</s>)</td>
</tr>
<tr>
<td>116</td>
<td>+      const categories = this.products</td>
</tr>
<tr>
<td>117</td>
<td>+        .filter(p =&gt; p.category)</td>
</tr>
<tr>
<td>118</td>
<td>+        .map(p =&gt; p.category)</td>
</tr>
<tr>
<td>119</td>
<td>+        .flat()</td>
</tr>
<tr>
<td>120</td>
<td>+</td>
</tr>
<tr>
<td>121</td>
<td>+      const discinctCategories = Array.from(</td>
</tr>
<tr>
<td>122</td>
<td>+        new Set(categories.map(c =&gt; c.category_id))</td>
</tr>
<tr>
<td>123</td>
<td>+      ).map(catId =&gt; categories.find(c =&gt; c.category_id === catId))</td>
</tr>
<tr>
<td>124</td>
<td>+</td>
</tr>
<tr>
<td>125</td>
<td>+      return discinctCategories</td>
</tr>
<tr>
<td>122126</td>
<td>},</td>
</tr>
<tr>
<td>123127</td>
<td>getNoResultsMessage () {</td>
</tr>
<tr>
<td>124128</td>
<td>let msg = ''</td>
</tr>
<tr>
<td></td>
<td>@@ -138,6 +142,10 @@ export default {</td>
</tr>
<tr>
<td>138142</td>
<td>mounted () {</td>
</tr>
<tr>
<td>139143</td>
<td>// add autofocus to search input field</td>
</tr>
<tr>
<td>140144</td>
<td>this.$refs.search.focus()</td>
</tr>
<tr>
<td>145</td>
<td>+    disableBodyScroll(this.$el)</td>
</tr>
<tr>
<td>146</td>
<td>+  },</td>
</tr>
<tr>
<td>147</td>
<td>+  destroyed () {</td>
</tr>
<tr>
<td>148</td>
<td>+    clearAllBodyScrollLocks()</td>
</tr>
<tr>
<td>141149</td>
<td>}</td>
</tr>
<tr>
<td>142150</td>
<td>}</td>
</tr>
<tr>
<td>143151</td>
<td></script></td>
</tr>
<tr>
<td></td>
<td>@@ -156,6 +164,7 @@ export default {</td>
</tr>
<tr>
<td>156164</td>
<td>overflow-y: auto;</td>
</tr>
<tr>
<td>157165</td>
<td>overflow-x: hidden;</td>
</tr>
<tr>
<td>158166</td>
<td>-webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>167</td>
<td>+</td>
</tr>
<tr>
<td>159168</td>
<td>.close-icon-row {</td>
</tr>
<tr>
<td>160169</td>
<td>display: flex;</td>
</tr>
<tr>
<td>161170</td>
<td>justify-content: flex-end;</td>
</tr>
</tbody>
</table>
<p><em>禁用滚动</em>功能已添加到<em>SearchPanel</em>。</p>
<p>JavaScript的<code>filter</code>，<code>map</code>取代<code>forEach</code>了<em>产品</em></p>
<h4 id="_30-sidebarmenu也要更新" tabindex="-1"><a class="header-anchor" href="#_30-sidebarmenu也要更新" aria-hidden="true">#</a> <a href="#_30-sidebarmenu-wants-to-update-too">#</a>30. <em>SidebarMenu</em>也要更新！</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/SidebarMenu/SidebarMenu.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/SidebarMenu/SidebarMenu.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -18,7 +18,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1818</td>
<td></button></td>
</tr>
<tr>
<td>1919</td>
<td></div></td>
</tr>
<tr>
<td>2020</td>
<td></div></td>
</tr>
<tr>
<td>21</td>
<td>-    <div class="sidebar-menu__container row"></td>
</tr>
<tr>
<td>21</td>
<td>+    <div class="sidebar-menu__container row" ref="container"></td>
</tr>
<tr>
<td>2222</td>
<td><div class="col-xs-12 h4 serif"></td>
</tr>
<tr>
<td>2323</td>
<td><ul class="p0 m0 relative sidebar-menu__list" :style="mainListStyles"></td>
</tr>
<tr>
<td>2424</td>
<td>&lt;li</td>
</tr>
<tr>
<td></td>
<td>@@ -52,7 +52,7 @@</td>
</tr>
<tr>
<td>5252</td>
<td>&lt;router-link</td>
</tr>
<tr>
<td>5353</td>
<td>v-else</td>
</tr>
<tr>
<td>5454</td>
<td>class=&quot;px25 py20 cl-accent no-underline col-xs&quot;</td>
</tr>
<tr>
<td>55</td>
<td>-                :to=&quot;<s>localizedRoute</s>(<s>{ name: '<s>category</s>', fullPath: category.url_path, params: { id: category.id, slug: category.slug }}</s>)&quot;</td>
</tr>
<tr>
<td>55</td>
<td>+                :to=&quot;categoryLink(category)&quot;</td>
</tr>
<tr>
<td>5656</td>
<td>&gt;</td>
</tr>
<tr>
<td>5757</td>
<td>{{ category.name }}</td>
</tr>
<tr>
<td>5858</td>
<td></router-link></td>
</tr>
<tr>
<td></td>
<td>@@ -140,6 +140,8 @@ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>140140</td>
<td>import SidebarMenu from '@vue-storefront/core/compatibility/components/blocks/SidebarMenu/SidebarMenu'</td>
</tr>
<tr>
<td>141141</td>
<td>import SubBtn from 'theme/components/core/blocks/SidebarMenu/SubBtn'</td>
</tr>
<tr>
<td>142142</td>
<td>import SubCategory from 'theme/components/core/blocks/SidebarMenu/SubCategory'</td>
</tr>
<tr>
<td>143</td>
<td>+ import { formatCategoryLink } from '@vue-storefront/core/modules/url/helpers'</td>
</tr>
<tr>
<td>144</td>
<td>+ import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'</td>
</tr>
<tr>
<td>143145</td>
<td></td>
</tr>
<tr>
<td>144146</td>
<td>export default {</td>
</tr>
<tr>
<td>145147</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -206,9 +208,13 @@ export default {</td>
</tr>
<tr>
<td>206208</td>
<td>},</td>
</tr>
<tr>
<td>207209</td>
<td>mounted () {</td>
</tr>
<tr>
<td>208210</td>
<td>this.$nextTick(() =&gt; {</td>
</tr>
<tr>
<td>209</td>
<td>-      this.componentLoaded = true</td>
</tr>
<tr>
<td>211</td>
<td>+      this.componentLoaded = true;</td>
</tr>
<tr>
<td>212</td>
<td>+      disableBodyScroll(this.$refs.container)</td>
</tr>
<tr>
<td>210213</td>
<td>})</td>
</tr>
<tr>
<td>211214</td>
<td>},</td>
</tr>
<tr>
<td>215</td>
<td>+  destroyed () {</td>
</tr>
<tr>
<td>216</td>
<td>+    clearAllBodyScrollLocks()</td>
</tr>
<tr>
<td>217</td>
<td>+  },</td>
</tr>
<tr>
<td>212218</td>
<td>methods: {</td>
</tr>
<tr>
<td>213219</td>
<td>login () {</td>
</tr>
<tr>
<td>214220</td>
<td>if (!this.currentUser &amp;&amp; this.isCurrentMenuShowed) {</td>
</tr>
<tr>
<td></td>
<td>@@ -218,6 +224,9 @@ export default {</td>
</tr>
<tr>
<td>218224</td>
<td>this.$router.push({ name: 'my-account' })</td>
</tr>
<tr>
<td>219225</td>
<td>})</td>
</tr>
<tr>
<td>220226</td>
<td>}</td>
</tr>
<tr>
<td>227</td>
<td>+    },</td>
</tr>
<tr>
<td>228</td>
<td>+    categoryLink (category) {</td>
</tr>
<tr>
<td>229</td>
<td>+      return formatCategoryLink(category)</td>
</tr>
<tr>
<td>221230</td>
<td>}</td>
</tr>
<tr>
<td>222231</td>
<td>}</td>
</tr>
<tr>
<td>223232</td>
<td>}</td>
</tr>
<tr>
<td></td>
<td>@@ -243,9 +252,8 @@ $color-mine-shaft: color(mine-shaft);</td>
</tr>
<tr>
<td>243252</td>
<td></td>
</tr>
<tr>
<td>244253</td>
<td>&amp;__container {</td>
</tr>
<tr>
<td>245254</td>
<td>overflow-y: auto;</td>
</tr>
<tr>
<td>246</td>
<td>-    overflow-x: hidden;</td>
</tr>
<tr>
<td>247</td>
<td>-    height: calc(100% - 55px);</td>
</tr>
<tr>
<td>248255</td>
<td>-webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>256</td>
<td>+    height: calc(100% - 55px);</td>
</tr>
<tr>
<td>249257</td>
<td>}</td>
</tr>
<tr>
<td>250258</td>
<td></td>
</tr>
<tr>
<td>251259</td>
<td>&amp;__list {</td>
</tr>
</tbody>
</table>
<p><em>CategoryLink</em>获取<code>helper</code>格式帮助。</p>
<p><em>SidebarMenu</em>也添加了<em>禁用滚动</em>功能。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/SidebarMenu/SubCategory.vue</code>并添加如下：</li>
</ul>
<p>src/themes/degi/components/core/blocks/SidebarMenu/SubCategory.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -11,7 +11,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1111</td>
<td>&gt;</td>
</tr>
<tr>
<td>1212</td>
<td>&lt;router-link</td>
</tr>
<tr>
<td>1313</td>
<td>class=&quot;px25 py20 cl-accent no-underline col-xs&quot;</td>
</tr>
<tr>
<td>14</td>
<td>-          :to=&quot;<s>localizedRoute</s>({ <s>name</s>: ~~'category', fullPath: ~~parentPath, <s>params: { id: id, <s>slug: parentSlug }</s>}</s>)&quot;</td>
</tr>
<tr>
<td>14</td>
<td>+          :to=&quot;categoryLink({ url_path: parentPath, slug: parentSlug })&quot;</td>
</tr>
<tr>
<td>1515</td>
<td>data-testid=&quot;categoryLink&quot;</td>
</tr>
<tr>
<td>1616</td>
<td>&gt;</td>
</tr>
<tr>
<td>1717</td>
<td>{{ $t('View all') }}</td>
</tr>
<tr>
<td></td>
<td>@@ -35,7 +35,7 @@</td>
</tr>
<tr>
<td>3535</td>
<td>&lt;router-link</td>
</tr>
<tr>
<td>3636</td>
<td>v-else</td>
</tr>
<tr>
<td>3737</td>
<td>class=&quot;px25 py20 cl-accent no-underline col-xs&quot;</td>
</tr>
<tr>
<td>38</td>
<td>-            :to=&quot;<s>localizedRoute</s>(<s>{ name: 'category', fullPath: <s>link</s>.url_path, params: { id: link.id, slug: link.slug }}</s>)&quot;</td>
</tr>
<tr>
<td>38</td>
<td>+            :to=&quot;categoryLink(link)&quot;</td>
</tr>
<tr>
<td>3939</td>
<td>&gt;</td>
</tr>
<tr>
<td>4040</td>
<td>{{ link.name }}</td>
</tr>
<tr>
<td>4141</td>
<td></router-link></td>
</tr>
<tr>
<td></td>
<td>@@ -84,6 +84,7 @@ import { mapState } from 'vuex'</td>
</tr>
<tr>
<td>8484</td>
<td>import SubBtn from './SubBtn.vue'</td>
</tr>
<tr>
<td>8585</td>
<td>import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>8686</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>87</td>
<td>+ import { formatCategoryLink } from '@vue-storefront/core/modules/url/helpers'</td>
</tr>
<tr>
<td>8788</td>
<td></td>
</tr>
<tr>
<td>8889</td>
<td>export default {</td>
</tr>
<tr>
<td>8990</td>
<td>name: 'SubCategory',</td>
</tr>
<tr>
<td></td>
<td>@@ -142,9 +143,10 @@ export default {</td>
</tr>
<tr>
<td>142143</td>
<td>}</td>
</tr>
<tr>
<td>143144</td>
<td>},</td>
</tr>
<tr>
<td>144145</td>
<td>methods: {</td>
</tr>
<tr>
<td>145</td>
<td>-    logout () {</td>
</tr>
<tr>
<td>146</td>
<td>-      this.$<s>bus.$emit</s>('user~~-before-~~logout')</td>
</tr>
<tr>
<td>146</td>
<td>+    async logout () {</td>
</tr>
<tr>
<td>147</td>
<td>+      await this.$store.dispatch('user/logout', {})</td>
</tr>
<tr>
<td>147148</td>
<td>this.$router.push(this.localizedRoute('/'))</td>
</tr>
<tr>
<td>149</td>
<td>+      this.$store.commit('ui/setSubmenu', { depth: false })</td>
</tr>
<tr>
<td>148150</td>
<td>},</td>
</tr>
<tr>
<td>149151</td>
<td>notify (title) {</td>
</tr>
<tr>
<td>150152</td>
<td>if (title === 'My loyalty card' || title === 'My product reviews') {</td>
</tr>
<tr>
<td></td>
<td>@@ -154,6 +156,9 @@ export default {</td>
</tr>
<tr>
<td>154156</td>
<td>action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>155157</td>
<td>})</td>
</tr>
<tr>
<td>156158</td>
<td>}</td>
</tr>
<tr>
<td>159</td>
<td>+    },</td>
</tr>
<tr>
<td>160</td>
<td>+    categoryLink (category) {</td>
</tr>
<tr>
<td>161</td>
<td>+      return formatCategoryLink(category)</td>
</tr>
<tr>
<td>157162</td>
<td>}</td>
</tr>
<tr>
<td>158163</td>
<td>}</td>
</tr>
<tr>
<td>159164</td>
<td>}</td>
</tr>
</tbody>
</table>
<p><code>async</code>-<code>await</code>实施也在进行。</p>
<p><em>CategoryLink</em>获取<code>helper</code>格式帮助。</p>
<h4 id="_31-这是切换-语言转" tabindex="-1"><a class="header-anchor" href="#_31-这是切换-语言转" aria-hidden="true">#</a> <a href="#_31-it-s-switcher-language-turn">#</a>31.这是<em>切换</em> <em>语言</em>转</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Switcher/Language.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Switcher/Language.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -6,12 +6,12 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td><div slot="content"></td>
</tr>
<tr>
<td>77</td>
<td><div :class="{ 'columns': enableColumns }"></td>
</tr>
<tr>
<td>88</td>
<td><div class="country country-current"></td>
</tr>
<tr>
<td>9</td>
<td>-          <h3>{{ $t(~~config.i18n.~~fullCountryName) }}</h3></td>
</tr>
<tr>
<td>9</td>
<td>+          <h3>{{ $t(fullCountryName) }}</h3></td>
</tr>
<tr>
<td>1010</td>
<td><ul></td>
</tr>
<tr>
<td>11</td>
<td>-            <li><a href="/">{{ $t(~~config.i18n.~~fullLanguageName) }}</a></li></td>
</tr>
<tr>
<td>11</td>
<td>+            <li><a href="/">{{ $t(fullLanguageName) }}</a></li></td>
</tr>
<tr>
<td>1212</td>
<td></ul></td>
</tr>
<tr>
<td>1313</td>
<td></div></td>
</tr>
<tr>
<td>14</td>
<td>-        &lt;div class=&quot;country country-available&quot; v-for=&quot;(storeView, storeCode) in storeViews&quot; :key=&quot;storeCode&quot;~~ v-if=&quot;!storeView.disabled &amp;&amp; typeof storeView === 'object' &amp;&amp; storeView.i18n&quot;~~&gt;</td>
</tr>
<tr>
<td>14</td>
<td>+        <div class="country country-available" v-for="(storeView, storeCode) in storeViews" :key="storeCode"></td>
</tr>
<tr>
<td>1515</td>
<td><h3>{{ $t(storeView.i18n.fullCountryName) }}</h3></td>
</tr>
<tr>
<td>1616</td>
<td><ul></td>
</tr>
<tr>
<td>1717</td>
<td><li><a :href="storeView.url">{{ $t(storeView.i18n.fullLanguageName) }}</a></li></td>
</tr>
<tr>
<td></td>
<td>@@ -35,18 +35,23 @@ export default {</td>
</tr>
<tr>
<td>3535</td>
<td>}</td>
</tr>
<tr>
<td>3636</td>
<td>},</td>
</tr>
<tr>
<td>3737</td>
<td>computed: {</td>
</tr>
<tr>
<td>38</td>
<td>-    <s>storeViews</s> () {</td>
</tr>
<tr>
<td>39</td>
<td>-      return config.<s>storeViews</s></td>
</tr>
<tr>
<td>38</td>
<td>+    fullCountryName () {</td>
</tr>
<tr>
<td>39</td>
<td>+      return config.i18n.fullCountryName</td>
</tr>
<tr>
<td>4040</td>
<td>},</td>
</tr>
<tr>
<td>41</td>
<td>-    <s>config</s> () {</td>
</tr>
<tr>
<td>42</td>
<td>-      return config</td>
</tr>
<tr>
<td>41</td>
<td>+    fullLanguageName () {</td>
</tr>
<tr>
<td>42</td>
<td>+      return config.i18n.fullLanguageName</td>
</tr>
<tr>
<td>4343</td>
<td>},</td>
</tr>
<tr>
<td>4444</td>
<td>enableColumns () {</td>
</tr>
<tr>
<td>45</td>
<td>-      <s>var</s> enableStoreViews = Object.keys(<s>config</s>.storeViews)<s>.filter((key) =&gt; {</s></td>
</tr>
<tr>
<td>45</td>
<td>+      const enableStoreViews = Object.keys(this.storeViews)</td>
</tr>
<tr>
<td>46</td>
<td>-        var value = config.storeViews[key]</td>
</tr>
<tr>
<td>47</td>
<td>-        return (typeof value === 'object' &amp;&amp; value.disabled === false)</td>
</tr>
<tr>
<td>48</td>
<td>-      })</td>
</tr>
<tr>
<td>4946</td>
<td>return enableStoreViews.length &gt; this.minCountryPerColumn</td>
</tr>
<tr>
<td>47</td>
<td>+    },</td>
</tr>
<tr>
<td>48</td>
<td>+    storeViews () {</td>
</tr>
<tr>
<td>49</td>
<td>+      return Object.keys(config.storeViews).reduce((storeViews, storeCode) =&gt; {</td>
</tr>
<tr>
<td>50</td>
<td>+        if (this.isValidStoreCode(storeCode)) {</td>
</tr>
<tr>
<td>51</td>
<td>+          storeViews[storeCode] = config.storeViews[storeCode]</td>
</tr>
<tr>
<td>52</td>
<td>+        }</td>
</tr>
<tr>
<td>53</td>
<td>+        return storeViews</td>
</tr>
<tr>
<td>54</td>
<td>+      }, {})</td>
</tr>
<tr>
<td>5055</td>
<td>}</td>
</tr>
<tr>
<td>5156</td>
<td>},</td>
</tr>
<tr>
<td>5257</td>
<td>mounted () {</td>
</tr>
<tr>
<td></td>
<td>@@ -58,6 +63,10 @@ export default {</td>
</tr>
<tr>
<td>5863</td>
<td>methods: {</td>
</tr>
<tr>
<td>5964</td>
<td>close () {</td>
</tr>
<tr>
<td>6065</td>
<td>this.$bus.$emit('modal-hide', 'modal-switcher')</td>
</tr>
<tr>
<td>66</td>
<td>+    },</td>
</tr>
<tr>
<td>67</td>
<td>+    isValidStoreCode (storeCode) {</td>
</tr>
<tr>
<td>68</td>
<td>+      const storeView = config.storeViews[storeCode]</td>
</tr>
<tr>
<td>69</td>
<td>+      return !!(storeView &amp;&amp; typeof storeView === 'object' &amp;&amp; storeView.i18n)</td>
</tr>
<tr>
<td>6170</td>
<td>}</td>
</tr>
<tr>
<td>6271</td>
<td>}</td>
</tr>
<tr>
<td>6372</td>
<td>}</td>
</tr>
</tbody>
</table>
<p>添加了对<em>storeCode 的**验证</em>。</p>
<h4 id="_32-让我们看看愿望清单并许个愿" tabindex="-1"><a class="header-anchor" href="#_32-让我们看看愿望清单并许个愿" aria-hidden="true">#</a> <a href="#_32-let-s-look-into-wishlist-and-make-a-wish">#</a>32.让我们看看<em>愿望清单</em>并许个愿</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Wishlist/AddToWishlist.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Wishlist/AddToWishlist.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,12 +1,14 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  &lt;button @click=&quot;isOnWishlist ? <s>removeFromWishlist</s>(product) : <s>addToWishlist(pr</s></td>
</tr>
<tr>
<td>3</td>
<td>-    &lt;<s>i class=&quot;pr5 material-icons&quot;</s>&gt;<s>{{ favoriteIcon }}</s></td>
</tr>
<tr>
<td>4</td>
<td>- ~~    <s>&lt;<s>template</s> <s>v-if</s>=&quot;</s>!isOnWishlist~~&quot;&gt;</td>
</tr>
<tr>
<td>5</td>
<td>-      <s>{{</s> <s>$t('Add to favorite') }}</s></td>
</tr>
<tr>
<td>6</td>
<td>- ~~    ~~</td>
</tr>
<tr>
<td>7</td>
<td>- ~~    &lt;<s>template</s> v-else~~&gt;</td>
</tr>
<tr>
<td>8</td>
<td>-      <s>{{</s> <s>$t('Remove') }}</s></td>
</tr>
<tr>
<td>9</td>
<td>- ~~    ~~</td>
</tr>
<tr>
<td>2</td>
<td>+  &lt;button @click=&quot;isOnWishlist ? removeProductFromWhishList(product) : addProdu</td>
</tr>
<tr>
<td>3</td>
<td>+    <slot></td>
</tr>
<tr>
<td>4</td>
<td>+      <i class="pr5 material-icons">{{ favoriteIcon }}</i></td>
</tr>
<tr>
<td>5</td>
<td>+      <template v-if="!isOnWishlist"></td>
</tr>
<tr>
<td>6</td>
<td>+        {{ $t('Add to favorite') }}</td>
</tr>
<tr>
<td>7</td>
<td>+      </template></td>
</tr>
<tr>
<td>8</td>
<td>+      <template v-else></td>
</tr>
<tr>
<td>9</td>
<td>+        {{ $t('Remove') }}</td>
</tr>
<tr>
<td>10</td>
<td>+      </template></td>
</tr>
<tr>
<td>11</td>
<td>+    </slot></td>
</tr>
<tr>
<td>1012</td>
<td></button></td>
</tr>
<tr>
<td>1113</td>
<td></template></td>
</tr>
<tr>
<td>1214</td>
<td></td>
</tr>
<tr>
<td></td>
<td>@@ -14,6 +16,8 @@</td>
</tr>
<tr>
<td>1416</td>
<td>import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'</td>
</tr>
<tr>
<td>1517</td>
<td>import { AddToWishlist } from '@vue-storefront/core/modules/wishlist/components/AddToWishlist'</td>
</tr>
<tr>
<td>1618</td>
<td>import { RemoveFromWishlist } from '@vue-storefront/core/modules/wishlist/components/RemoveFromWishlist'</td>
</tr>
<tr>
<td>19</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>20</td>
<td>+ import { htmlDecode } from '@vue-storefront/core/lib/store/filters'</td>
</tr>
<tr>
<td>1721</td>
<td></td>
</tr>
<tr>
<td>1822</td>
<td>export default {</td>
</tr>
<tr>
<td>1923</td>
<td>mixins: [ IsOnWishlist, AddToWishlist, RemoveFromWishlist ],</td>
</tr>
<tr>
<td></td>
<td>@@ -21,6 +25,24 @@ export default {</td>
</tr>
<tr>
<td>2125</td>
<td>favoriteIcon () {</td>
</tr>
<tr>
<td>2226</td>
<td>return this.isOnWishlist ? 'favorite' : 'favorite_border'</td>
</tr>
<tr>
<td>2327</td>
<td>}</td>
</tr>
<tr>
<td>28</td>
<td>+  },</td>
</tr>
<tr>
<td>29</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>30</td>
<td>+    addProductToWhishlist (product) {</td>
</tr>
<tr>
<td>31</td>
<td>+      this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>32</td>
<td>+        type: 'success',</td>
</tr>
<tr>
<td>33</td>
<td>+        message: i18n.t('Product {productName} has been added to wishlist!', { productName: htmlDecode(product.name) }),</td>
</tr>
<tr>
<td>34</td>
<td>+        action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>35</td>
<td>+      }, { root: true })</td>
</tr>
<tr>
<td>36</td>
<td>+      this.addToWishlist(product)</td>
</tr>
<tr>
<td>37</td>
<td>+    },</td>
</tr>
<tr>
<td>38</td>
<td>+    removeProductFromWhishList (product) {</td>
</tr>
<tr>
<td>39</td>
<td>+      this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>40</td>
<td>+        type: 'success',</td>
</tr>
<tr>
<td>41</td>
<td>+        message: i18n.t('Product {productName} has been removed from wishlist!', { productName: htmlDecode(product.name) }),</td>
</tr>
<tr>
<td>42</td>
<td>+        action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>43</td>
<td>+      }, { root: true })</td>
</tr>
<tr>
<td>44</td>
<td>+      this.removeFromWishlist(product)</td>
</tr>
<tr>
<td>45</td>
<td>+    }</td>
</tr>
<tr>
<td>2446</td>
<td>}</td>
</tr>
<tr>
<td>2547</td>
<td>}</td>
</tr>
<tr>
<td>2648</td>
<td></script></td>
</tr>
</tbody>
</table>
<p><code>i18n</code> 添加了支持。</p>
<p><code>methods</code>添加/删除<em>产品</em>到<em>愿望清单</em>，包括对他们的通知。</p>
<ul>
<li>转到<code>./src/themes/degi/components/core/blocks/Wishlist/Product.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/blocks/Wishlist/Product.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,23 +1,13 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><li class="row pr55 py20"></td>
</tr>
<tr>
<td>3</td>
<td>-    <div class="~~image~~" @click="closeWishlist"></td>
</tr>
<tr>
<td>4</td>
<td>-      &lt;router-link :to=&quot;<s>localizedRoute({</s></td>
</tr>
<tr>
<td>3</td>
<td>+    <div class="blend bg-cl-secondary" @click="closeWishlist"></td>
</tr>
<tr>
<td>4</td>
<td>+      <router-link :to="productLink"></td>
</tr>
<tr>
<td>5</td>
<td>-        name: product.type_id + '-product',</td>
</tr>
<tr>
<td>6</td>
<td>-        fullPath: product.url_path,</td>
</tr>
<tr>
<td>7</td>
<td>-        params: { parentSku: product.parentSku ? product.parentSku : product.sku, slug: product.slug, childSku: product.sku }</td>
</tr>
<tr>
<td>8</td>
<td>-      })&quot;</td>
</tr>
<tr>
<td>9</td>
<td>-      &gt;</td>
</tr>
<tr>
<td>105</td>
<td><product-image :image="image" /></td>
</tr>
<tr>
<td>116</td>
<td></router-link></td>
</tr>
<tr>
<td>127</td>
<td></div></td>
</tr>
<tr>
<td>138</td>
<td><div class="col-xs between-xs flex pl40 py15"></td>
</tr>
<tr>
<td>149</td>
<td><div @click="closeWishlist"></td>
</tr>
<tr>
<td>15</td>
<td>-        &lt;router-link :to=&quot;<s>localizedRoute({</s></td>
</tr>
<tr>
<td>10</td>
<td>+        <router-link :to="productLink"></td>
</tr>
<tr>
<td>16</td>
<td>-          name: product.type_id + '-product',</td>
</tr>
<tr>
<td>17</td>
<td>-          fullPath: product.url_path,</td>
</tr>
<tr>
<td>18</td>
<td>-          params: { parentSku: product.parentSku ? product.parentSku : product.sku, slug: product.slug, childSku: product.sku }</td>
</tr>
<tr>
<td>19</td>
<td>-        })&quot;</td>
</tr>
<tr>
<td>20</td>
<td>-        &gt;</td>
</tr>
<tr>
<td>2111</td>
<td>{{ product.name | htmlDecode }}</td>
</tr>
<tr>
<td>2212</td>
<td></router-link></td>
</tr>
<tr>
<td>2313</td>
<td><div class="h6 cl-bg-tertiary pt5 sku"></td>
</tr>
<tr>
<td></td>
<td>@@ -27,16 +17,16 @@</td>
</tr>
<tr>
<td>2717</td>
<td></div></td>
</tr>
<tr>
<td>2818</td>
<td><div class="col-xs flex py15 align-right"></td>
</tr>
<tr>
<td>2919</td>
<td><div></td>
</tr>
<tr>
<td>30</td>
<td>-        <span class="price-special" v-if="product.special_price">{{ product.<s>priceInclTax</s> | price }}</span> </td>
</tr>
<tr>
<td>31</td>
<td>-        <span class="price-original" v-if="product.special_price">{{ product.<s>originalPriceInclTax</s> | price }}</span></td>
</tr>
<tr>
<td>20</td>
<td>+        <span class="price-special" v-if="product.special_price">{{ product.price_incl_tax | price }}</span> </td>
</tr>
<tr>
<td>21</td>
<td>+        <span class="price-original" v-if="product.special_price">{{ product.original_price_incl_tax | price }}</span></td>
</tr>
<tr>
<td>3222</td>
<td></td>
</tr>
<tr>
<td>3323</td>
<td><span v-if="!product.special_price"></td>
</tr>
<tr>
<td>34</td>
<td>-          {{ product.<s>priceInclTax</s> | price }}</td>
</tr>
<tr>
<td>24</td>
<td>+          {{ product.price_incl_tax | price }}</td>
</tr>
<tr>
<td>3525</td>
<td></span></td>
</tr>
<tr>
<td>3626</td>
<td></div></td>
</tr>
<tr>
<td>3727</td>
<td><div></td>
</tr>
<tr>
<td>3828</td>
<td><div class="mt5"></td>
</tr>
<tr>
<td>39</td>
<td>-          <span @click="~~removeFromWishlist~~(product)"><remove-button class="cl-accent" /></span></td>
</tr>
<tr>
<td>29</td>
<td>+          <span @click="removeProductFromWhishList(product)"><remove-button class="cl-accent" /></span></td>
</tr>
<tr>
<td>4030</td>
<td></div></td>
</tr>
<tr>
<td>4131</td>
<td></div></td>
</tr>
<tr>
<td>4232</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -45,8 +35,12 @@</td>
</tr>
<tr>
<td>4535</td>
<td></td>
</tr>
<tr>
<td>4636</td>
<td><script></td>
</tr>
<tr>
<td>4737</td>
<td>import Product from '@vue-storefront/core/compatibility/components/blocks/Wishlist/Product'</td>
</tr>
<tr>
<td>48</td>
<td>- import <s>RemoveButton</s> from '<s>./RemoveButton</s>'</td>
</tr>
<tr>
<td>38</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>39</td>
<td>+ import { formatProductLink } from '@vue-storefront/core/modules/url/helpers'</td>
</tr>
<tr>
<td>4940</td>
<td>import ProductImage from 'theme/components/core/ProductImage'</td>
</tr>
<tr>
<td>41</td>
<td>+ import RemoveButton from './RemoveButton'</td>
</tr>
<tr>
<td>42</td>
<td>+ import i18n from '@vue-storefront/i18n'</td>
</tr>
<tr>
<td>43</td>
<td>+ import { htmlDecode } from '@vue-storefront/core/lib/store/filters'</td>
</tr>
<tr>
<td>5044</td>
<td></td>
</tr>
<tr>
<td>5145</td>
<td>export default {</td>
</tr>
<tr>
<td>5246</td>
<td>components: {</td>
</tr>
<tr>
<td></td>
<td>@@ -55,24 +49,49 @@ export default {</td>
</tr>
<tr>
<td>5549</td>
<td>},</td>
</tr>
<tr>
<td>5650</td>
<td>mixins: [Product],</td>
</tr>
<tr>
<td>5751</td>
<td>computed: {</td>
</tr>
<tr>
<td>52</td>
<td>+    productLink () {</td>
</tr>
<tr>
<td>53</td>
<td>+      return formatProductLink(this.product, currentStoreView().storeCode)</td>
</tr>
<tr>
<td>54</td>
<td>+    },</td>
</tr>
<tr>
<td>5855</td>
<td>image () {</td>
</tr>
<tr>
<td>5956</td>
<td>return {</td>
</tr>
<tr>
<td>6057</td>
<td>loading: this.thumbnail,</td>
</tr>
<tr>
<td>6158</td>
<td>src: this.thumbnail</td>
</tr>
<tr>
<td>6259</td>
<td>}</td>
</tr>
<tr>
<td>6360</td>
<td>}</td>
</tr>
<tr>
<td>61</td>
<td>+  },</td>
</tr>
<tr>
<td>62</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>63</td>
<td>+    removeProductFromWhishList (product) {</td>
</tr>
<tr>
<td>64</td>
<td>+      this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>65</td>
<td>+        type: 'success',</td>
</tr>
<tr>
<td>66</td>
<td>+        message: i18n.t('Product {productName} has been removed from wishlist!', { productName: htmlDecode(product.name) }),</td>
</tr>
<tr>
<td>67</td>
<td>+        action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>68</td>
<td>+      }, { root: true })</td>
</tr>
<tr>
<td>69</td>
<td>+      this.removeFromWishlist(product)</td>
</tr>
<tr>
<td>70</td>
<td>+    }</td>
</tr>
<tr>
<td>6471</td>
<td>}</td>
</tr>
<tr>
<td>6572</td>
<td>}</td>
</tr>
<tr>
<td>6673</td>
<td></script></td>
</tr>
<tr>
<td>6774</td>
<td></td>
</tr>
<tr>
<td>68</td>
<td>- <style scoped></td>
</tr>
<tr>
<td>75</td>
<td>+ <style lang="scss" scoped></td>
</tr>
<tr>
<td>76</td>
<td>+ @import '~theme/css/animations/transitions';</td>
</tr>
<tr>
<td>77</td>
<td>+ .blend {</td>
</tr>
<tr>
<td>78</td>
<td>+  flex: 0 0 121px;</td>
</tr>
<tr>
<td>79</td>
<td>+  opacity: .8;</td>
</tr>
<tr>
<td>80</td>
<td>+  will-change: opacity;</td>
</tr>
<tr>
<td>81</td>
<td>+  transition: .3s opacity $motion-main;</td>
</tr>
<tr>
<td>82</td>
<td>+  &amp;:hover{</td>
</tr>
<tr>
<td>83</td>
<td>+     opacity: 1;</td>
</tr>
<tr>
<td>84</td>
<td>+   }</td>
</tr>
<tr>
<td>85</td>
<td>+ }</td>
</tr>
<tr>
<td>6986</td>
<td>.col-xs {</td>
</tr>
<tr>
<td>7087</td>
<td>flex-direction: column;</td>
</tr>
<tr>
<td>7188</td>
<td>}</td>
</tr>
<tr>
<td>7289</td>
<td>input {</td>
</tr>
<tr>
<td>7390</td>
<td>width: 30px;</td>
</tr>
<tr>
<td>7491</td>
<td>}</td>
</tr>
<tr>
<td>75</td>
<td>- .<s>image</s>{</td>
</tr>
<tr>
<td>76</td>
<td>-  <s>flex</s>: <s>0 0 121px</s>;</td>
</tr>
<tr>
<td>92</td>
<td>+ .price-original {</td>
</tr>
<tr>
<td>93</td>
<td>+  text-decoration: line-through;</td>
</tr>
<tr>
<td>94</td>
<td>+  color: #828282;</td>
</tr>
<tr>
<td>95</td>
<td>+  font-size: .95rem;</td>
</tr>
<tr>
<td>7796</td>
<td>}</td>
</tr>
<tr>
<td>7897</td>
<td></style></td>
</tr>
</tbody>
</table>
<p>现在，<code>core</code> <code>blocks</code>更新已全部涵盖。让我们转到<code>core</code>组件。</p>
<h4 id="_33-从添加到购物车开始" tabindex="-1"><a class="header-anchor" href="#_33-从添加到购物车开始" aria-hidden="true">#</a> <a href="#_33-start-with-addtocart">#</a>33.从添加到<em>购物车</em>开始</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/AddToCart.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/AddToCart.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -6,23 +6,46 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td></td>
</tr>
<tr>
<td>77</td>
<td><script></td>
</tr>
<tr>
<td>88</td>
<td>import { formatProductMessages } from '@vue-storefront/core/filters/product-messages'</td>
</tr>
<tr>
<td>9</td>
<td>+ import { notifications } from '@vue-storefront/core/modules/cart/helpers'</td>
</tr>
<tr>
<td>910</td>
<td>import focusClean from 'theme/components/theme/directives/focusClean'</td>
</tr>
<tr>
<td>1011</td>
<td>import ButtonFull from 'theme/components/theme/ButtonFull.vue'</td>
</tr>
<tr>
<td>11</td>
<td>- import { <s>AddToCart</s> } from '<s>@vue-storefront/core/modules/cart/components/AddToCart</s>'</td>
</tr>
<tr>
<td>12</td>
<td>+ import { mapGetters } from 'vuex'</td>
</tr>
<tr>
<td>1213</td>
<td></td>
</tr>
<tr>
<td>1314</td>
<td>export default {</td>
</tr>
<tr>
<td>14</td>
<td>-  mixins: [AddToCart],</td>
</tr>
<tr>
<td>1515</td>
<td>directives: { focusClean },</td>
</tr>
<tr>
<td>1616</td>
<td>components: { ButtonFull },</td>
</tr>
<tr>
<td>17</td>
<td>+  props: {</td>
</tr>
<tr>
<td>18</td>
<td>+    product: {</td>
</tr>
<tr>
<td>19</td>
<td>+      required: true,</td>
</tr>
<tr>
<td>20</td>
<td>+      type: Object</td>
</tr>
<tr>
<td>21</td>
<td>+    },</td>
</tr>
<tr>
<td>22</td>
<td>+    disabled: {</td>
</tr>
<tr>
<td>23</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>24</td>
<td>+      default: false</td>
</tr>
<tr>
<td>25</td>
<td>+    }</td>
</tr>
<tr>
<td>26</td>
<td>+  },</td>
</tr>
<tr>
<td>1727</td>
<td>methods: {</td>
</tr>
<tr>
<td>1828</td>
<td>onAfterRemovedVariant () {</td>
</tr>
<tr>
<td>1929</td>
<td>this.$forceUpdate()</td>
</tr>
<tr>
<td>2030</td>
<td>},</td>
</tr>
<tr>
<td>31</td>
<td>+    async addToCart (product) {</td>
</tr>
<tr>
<td>32</td>
<td>+      try {</td>
</tr>
<tr>
<td>33</td>
<td>+        const diffLog = await this.$store.dispatch('cart/addItem', { productToAdd: product })</td>
</tr>
<tr>
<td>34</td>
<td>+        diffLog.clientNotifications.forEach(notificationData =&gt; {</td>
</tr>
<tr>
<td>35</td>
<td>+          this.notifyUser(notificationData)</td>
</tr>
<tr>
<td>36</td>
<td>+        })</td>
</tr>
<tr>
<td>37</td>
<td>+      } catch (message) {</td>
</tr>
<tr>
<td>38</td>
<td>+        this.notifyUser(notifications.createNotification({ type: 'error', message }))</td>
</tr>
<tr>
<td>39</td>
<td>+      }</td>
</tr>
<tr>
<td>40</td>
<td>+    },</td>
</tr>
<tr>
<td>2141</td>
<td>notifyUser (notificationData) {</td>
</tr>
<tr>
<td>2242</td>
<td>this.$store.dispatch('notification/spawnNotification', notificationData, { root: true })</td>
</tr>
<tr>
<td>2343</td>
<td>}</td>
</tr>
<tr>
<td>2444</td>
<td>},</td>
</tr>
<tr>
<td>2545</td>
<td>computed: {</td>
</tr>
<tr>
<td>46</td>
<td>+    ...mapGetters({</td>
</tr>
<tr>
<td>47</td>
<td>+      isAddingToCart: 'cart/getIsAdding'</td>
</tr>
<tr>
<td>48</td>
<td>+    }),</td>
</tr>
<tr>
<td>2649</td>
<td>isProductDisabled () {</td>
</tr>
<tr>
<td>2750</td>
<td>return this.disabled || formatProductMessages(this.product.errors) !== '' || this.isAddingToCart</td>
</tr>
<tr>
<td>2851</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_34-接下来是颜色选择器" tabindex="-1"><a class="header-anchor" href="#_34-接下来是颜色选择器" aria-hidden="true">#</a> <a href="#_34-next-is-colorselector">#</a>34.接下来是<em>颜色选择器</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ColorSelector.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ColorSelector.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,23 +1,25 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;button</td>
</tr>
<tr>
<td>3</td>
<td>-    :class=&quot;['mr10 mb5 bg-cl-transparent brdr-1 brdr-circle brdr-cl-transparent :brdr-cl-bg-primary relative inline-flex pointer color', <s>active</s> ? 'active' : '']&quot;</td>
</tr>
<tr>
<td>4</td>
<td>-    @click=&quot;<s>switchFilter</s>(<s>id</s>, <s>label</s>)&quot;</td>
</tr>
<tr>
<td>5</td>
<td>-    :aria-label=&quot;$t('Select color ') + label&quot;</td>
</tr>
<tr>
<td>3</td>
<td>+    :class=&quot;['mr10 mb5 bg-cl-transparent brdr-1 brdr-circle brdr-cl-transparent :brdr-cl-bg-primary relative inline-flex pointer color', isActive ? 'active' : '']&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+    @click=&quot;$emit('change', variant)&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+    :aria-label=&quot;$t('Select color ') + variant.label&quot;</td>
</tr>
<tr>
<td>66</td>
<td>&gt;</td>
</tr>
<tr>
<td>77</td>
<td>&lt;span</td>
</tr>
<tr>
<td>88</td>
<td>class=&quot;absolute brdr-circle brdr-1 brdr-cl-secondary block color-inside&quot;</td>
</tr>
<tr>
<td>9</td>
<td>-      :style=&quot;colorFrom(label)&quot;</td>
</tr>
<tr>
<td>9</td>
<td>+      :style=&quot;colorFrom(variant.label)&quot;</td>
</tr>
<tr>
<td>1010</td>
<td>/&gt;</td>
</tr>
<tr>
<td>1111</td>
<td></button></td>
</tr>
<tr>
<td>1212</td>
<td></template></td>
</tr>
<tr>
<td>1313</td>
<td></td>
</tr>
<tr>
<td>1414</td>
<td><script></td>
</tr>
<tr>
<td>15</td>
<td>- import GenericSelector from '@vue-storefront/core/compatibility/components/GenericSelector'</td>
</tr>
<tr>
<td>1615</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>16</td>
<td>+ import filterMixin from 'theme/mixins/filterMixin.ts'</td>
</tr>
<tr>
<td>17</td>
<td>+</td>
</tr>
<tr>
<td>1718</td>
<td>export default {</td>
</tr>
<tr>
<td>18</td>
<td>-  mixins: [<s>GenericSelector</s>],</td>
</tr>
<tr>
<td>19</td>
<td>+  mixins: [filterMixin],</td>
</tr>
<tr>
<td>1920</td>
<td>methods: {</td>
</tr>
<tr>
<td>2021</td>
<td>colorFrom (label) {</td>
</tr>
<tr>
<td>22</td>
<td>+      if (!label) return ''</td>
</tr>
<tr>
<td>2123</td>
<td>if (config.products.colorMappings) {</td>
</tr>
<tr>
<td>2224</td>
<td>if (typeof config.products.colorMappings[label] !== 'undefined') {</td>
</tr>
<tr>
<td>2325</td>
<td>label = config.products.colorMappings[label]</td>
</tr>
</tbody>
</table>
<h4 id="_35-更新cookienotification" tabindex="-1"><a class="header-anchor" href="#_35-更新cookienotification" aria-hidden="true">#</a> <a href="#_35-update-cookienotification">#</a>35. 更新<em>CookieNotification</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/CookieNotification.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/CookieNotification.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -74,13 +74,15 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>7474</td>
<td></script></td>
</tr>
<tr>
<td>7575</td>
<td></td>
</tr>
<tr>
<td>7676</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>77</td>
<td>+ @import '~theme/css/base/global_vars';</td>
</tr>
<tr>
<td>7778</td>
<td>@import '~theme/css/variables/colors';</td>
</tr>
<tr>
<td>7879</td>
<td>@import '~theme/css/helpers/functions/color';</td>
</tr>
<tr>
<td>7980</td>
<td>$color-icon: color(black);</td>
</tr>
<tr>
<td>8081</td>
<td>$bg-icon: color(suva-gray);</td>
</tr>
<tr>
<td>82</td>
<td>+ $z-index: map-get($z-index, overlay) - 1;</td>
</tr>
<tr>
<td>8183</td>
<td></td>
</tr>
<tr>
<td>8284</td>
<td>.cookie {</td>
</tr>
<tr>
<td>83</td>
<td>-  z-index: <s>2</s>;</td>
</tr>
<tr>
<td>85</td>
<td>+  z-index: $z-index;</td>
</tr>
<tr>
<td>8486</td>
<td>bottom: 0;</td>
</tr>
<tr>
<td>8587</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_36-修复genericselector-的时间" tabindex="-1"><a class="header-anchor" href="#_36-修复genericselector-的时间" aria-hidden="true">#</a> <a href="#_36-time-for-fixing-genericselector">#</a>36. 修复<em>GenericSelector 的</em>时间</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/GenericSelector.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/GenericSelector.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,18 +1,19 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;button</td>
</tr>
<tr>
<td>3</td>
<td>-    :class=&quot;{'active': <s>active</s>}&quot;</td>
</tr>
<tr>
<td>3</td>
<td>+    :class=&quot;{'active': isActive}&quot;</td>
</tr>
<tr>
<td>44</td>
<td>class=&quot;bg-cl-primary brdr-1 brdr-cl-primary brdr-square h5 cl-tertiary generic-selector&quot;</td>
</tr>
<tr>
<td>5</td>
<td>-    @click=&quot;<s>switchFilter</s>(<s>id</s>, <s>label</s>)&quot;</td>
</tr>
<tr>
<td>6</td>
<td>-    :aria-label=&quot;$t('Select ' + label)&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+    @click=&quot;$emit('change', variant)&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+    :aria-label=&quot;$t('Select ' + variant.label)&quot;</td>
</tr>
<tr>
<td>77</td>
<td>&gt;</td>
</tr>
<tr>
<td>8</td>
<td>-    {{ label }}</td>
</tr>
<tr>
<td>8</td>
<td>+    {{ variant.label }}</td>
</tr>
<tr>
<td>99</td>
<td></button></td>
</tr>
<tr>
<td>1010</td>
<td></template></td>
</tr>
<tr>
<td>1111</td>
<td></td>
</tr>
<tr>
<td>1212</td>
<td><script></td>
</tr>
<tr>
<td>13</td>
<td>- import <s>GenericSelector</s> from '<s>@vue-storefront</s>/<s>core</s>/<s>compatibility/components/GenericSelector</s>'</td>
</tr>
<tr>
<td>13</td>
<td>+ import filterMixin from 'theme/mixins/filterMixin.ts'</td>
</tr>
<tr>
<td>14</td>
<td>+</td>
</tr>
<tr>
<td>1415</td>
<td>export default {</td>
</tr>
<tr>
<td>15</td>
<td>-  mixins: [<s>GenericSelector</s>]</td>
</tr>
<tr>
<td>16</td>
<td>+  mixins: [filterMixin]</td>
</tr>
<tr>
<td>1617</td>
<td>}</td>
</tr>
<tr>
<td>1718</td>
<td></script></td>
</tr>
</tbody>
</table>
<h4 id="_37-现在-轮到标志了" tabindex="-1"><a class="header-anchor" href="#_37-现在-轮到标志了" aria-hidden="true">#</a> <a href="#_37-now-it-s-logo-turn">#</a>37.现在，轮到<em>标志了</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/Logo.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/Logo.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -4,13 +4,22 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>44</td>
<td>:width=&quot;width&quot;</td>
</tr>
<tr>
<td>55</td>
<td>:height=&quot;height&quot;</td>
</tr>
<tr>
<td>66</td>
<td>src=&quot;/assets/logo.svg&quot;</td>
</tr>
<tr>
<td>7</td>
<td>-      alt=&quot;<s>Vuestore logo</s>&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+      :alt=&quot;$t(defaultTitle)&quot;</td>
</tr>
<tr>
<td>88</td>
<td>&gt;</td>
</tr>
<tr>
<td>99</td>
<td></router-link></td>
</tr>
<tr>
<td>1010</td>
<td></template></td>
</tr>
<tr>
<td>1111</td>
<td></td>
</tr>
<tr>
<td>1212</td>
<td><script></td>
</tr>
<tr>
<td>13</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>14</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>15</td>
<td>+</td>
</tr>
<tr>
<td>1316</td>
<td>export default {</td>
</tr>
<tr>
<td>17</td>
<td>+  data () {</td>
</tr>
<tr>
<td>18</td>
<td>+    const storeView = currentStoreView()</td>
</tr>
<tr>
<td>19</td>
<td>+    return {</td>
</tr>
<tr>
<td>20</td>
<td>+      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config.seo.defaultTitle</td>
</tr>
<tr>
<td>21</td>
<td>+    }</td>
</tr>
<tr>
<td>22</td>
<td>+  },</td>
</tr>
<tr>
<td>1423</td>
<td>props: {</td>
</tr>
<tr>
<td>1524</td>
<td>width: {</td>
</tr>
<tr>
<td>1625</td>
<td>type: [String, Number],</td>
</tr>
</tbody>
</table>
<h4 id="_38-让我们修复modal" tabindex="-1"><a class="header-anchor" href="#_38-让我们修复modal" aria-hidden="true">#</a> <a href="#_38-let-s-fix-modal">#</a>38. 让我们修复<em>Modal</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/Modal.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/Modal.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,39 +1,40 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  <transition name="~~fade-in-down~~"></td>
</tr>
<tr>
<td>2</td>
<td>+  <transition :name="transitionName"></td>
</tr>
<tr>
<td>33</td>
<td>&lt;div</td>
</tr>
<tr>
<td>44</td>
<td>class=&quot;modal&quot;</td>
</tr>
<tr>
<td>55</td>
<td>v-if=&quot;isVisible&quot;</td>
</tr>
<tr>
<td>66</td>
<td>ref=&quot;modal&quot;</td>
</tr>
<tr>
<td>7</td>
<td>-      @click.self=&quot;close&quot;</td>
</tr>
<tr>
<td>87</td>
<td>&gt;</td>
</tr>
<tr>
<td>9</td>
<td>-      &lt;div class=&quot;modal-wrapper&quot;<s>&gt;</s></td>
</tr>
<tr>
<td>10</td>
<td>-        &lt;div class=&quot;modal-center&quot;<s>&gt;</s></td>
</tr>
<tr>
<td>11</td>
<td>- ~~          ~~&lt;div class=&quot;modal-<s>container bg-cl-primary</s>&quot; <s>ref</s>=&quot;<s>modal-content</s>&quot; <s>:style=&quot;style&quot;&gt;</s></td>
</tr>
<tr>
<td>12</td>
<td>- ~~            ~~&lt;<s>header</s> class=&quot;modal-<s>header</s> <s>py25 px65 h1 serif weight-700 <s>bg-cl-<s>secondary</s>&quot; <s>v</s>-<s>if</s>=&quot;</s>$slots.header</s>&quot;&gt;</td>
</tr>
<tr>
<td>13</td>
<td>- ~~              ~~&lt;<s>i</s></td>
</tr>
<tr>
<td>14</td>
<td>- ~~                ~~slot=&quot;<s>close</s>&quot;</td>
</tr>
<tr>
<td>15</td>
<td>- ~~                class=&quot;modal-close material-icons p15 cl-bg-tertiary&quot;~~</td>
</tr>
<tr>
<td>16</td>
<td>- ~~                @click~~=&quot;close&quot;</td>
</tr>
<tr>
<td>17</td>
<td>- ~~                data-testid~~=&quot;<s>closeModalButton</s>&quot;</td>
</tr>
<tr>
<td>18</td>
<td>- ~~              &gt;~~</td>
</tr>
<tr>
<td>19</td>
<td>- ~~                close~~</td>
</tr>
<tr>
<td>20</td>
<td>- ~~              &gt;</td>
</tr>
<tr>
<td>21</td>
<td>- ~~              ~~</td>
</tr>
<tr>
<td>22</td>
<td>- ~~            ~~&lt;/<s>header</s>&gt;</td>
</tr>
<tr>
<td>23</td>
<td>- ~~            &gt;</td>
</tr>
<tr>
<td>24</td>
<td>- ~~              ~~&lt;<s>slot</s> <s>name</s>=&quot;content&quot; <s>/&gt;</s></td>
</tr>
<tr>
<td>25</td>
<td>- ~~            ~~</td>
</tr>
<tr>
<td>8</td>
<td>+      <!--      <div class="modal-wrapper">--></td>
</tr>
<tr>
<td>9</td>
<td>+      <!--        <div class="modal-center">--></td>
</tr>
<tr>
<td>10</td>
<td>+      <div class="modal-backdrop" @click="close" /></td>
</tr>
<tr>
<td>11</td>
<td>+      <div class="modal-container bg-cl-primary" ref="modal-content" :style="style"></td>
</tr>
<tr>
<td>12</td>
<td>+        <header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary" v-if="$slots.header"></td>
</tr>
<tr>
<td>13</td>
<td>+          <slot name="header" /></td>
</tr>
<tr>
<td>14</td>
<td>+          &lt;i</td>
</tr>
<tr>
<td>15</td>
<td>+            slot=&quot;close&quot;</td>
</tr>
<tr>
<td>16</td>
<td>+            class=&quot;modal-close material-icons cl-bg-tertiary&quot;</td>
</tr>
<tr>
<td>17</td>
<td>+            @click=&quot;close&quot;</td>
</tr>
<tr>
<td>18</td>
<td>+            data-testid=&quot;closeModalButton&quot;</td>
</tr>
<tr>
<td>19</td>
<td>+          &gt;</td>
</tr>
<tr>
<td>20</td>
<td>+            close</td>
</tr>
<tr>
<td>21</td>
<td>+          </i></td>
</tr>
<tr>
<td>22</td>
<td>+        </header></td>
</tr>
<tr>
<td>23</td>
<td>+        <div class="modal-content bg-cl-primary pt30 pb60 px65" v-if="$slots.content"></td>
</tr>
<tr>
<td>24</td>
<td>+          <slot name="content" /></td>
</tr>
<tr>
<td>26</td>
<td>-            <slot /></td>
</tr>
<tr>
<td>27</td>
<td>-          </div></td>
</tr>
<tr>
<td>2825</td>
<td></div></td>
</tr>
<tr>
<td>26</td>
<td>+        <slot /></td>
</tr>
<tr>
<td>2927</td>
<td></div></td>
</tr>
<tr>
<td>3028</td>
<td></div></td>
</tr>
<tr>
<td>29</td>
<td>+    <!--      </div>--></td>
</tr>
<tr>
<td>30</td>
<td>+    <!--    </div>--></td>
</tr>
<tr>
<td>3131</td>
<td></transition></td>
</tr>
<tr>
<td>3232</td>
<td></template></td>
</tr>
<tr>
<td>3333</td>
<td></td>
</tr>
<tr>
<td>3434</td>
<td><script></td>
</tr>
<tr>
<td>3535</td>
<td>import { mapMutations } from 'vuex'</td>
</tr>
<tr>
<td>3636</td>
<td>import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'</td>
</tr>
<tr>
<td>37</td>
<td>+ import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'</td>
</tr>
<tr>
<td>3738</td>
<td></td>
</tr>
<tr>
<td>3839</td>
<td>export default {</td>
</tr>
<tr>
<td>3940</td>
<td>name: 'Modal',</td>
</tr>
<tr>
<td></td>
<td>@@ -42,6 +43,17 @@ export default {</td>
</tr>
<tr>
<td>4243</td>
<td>isVisible: false</td>
</tr>
<tr>
<td>4344</td>
<td>}</td>
</tr>
<tr>
<td>4445</td>
<td>},</td>
</tr>
<tr>
<td>46</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>47</td>
<td>+    isVisible (state) {</td>
</tr>
<tr>
<td>48</td>
<td>+      if (state) {</td>
</tr>
<tr>
<td>49</td>
<td>+        this.$nextTick(() =&gt; {</td>
</tr>
<tr>
<td>50</td>
<td>+          disableBodyScroll(this.$refs['modal']);</td>
</tr>
<tr>
<td>51</td>
<td>+        })</td>
</tr>
<tr>
<td>52</td>
<td>+      } else {</td>
</tr>
<tr>
<td>53</td>
<td>+        clearAllBodyScrollLocks();</td>
</tr>
<tr>
<td>54</td>
<td>+      }</td>
</tr>
<tr>
<td>55</td>
<td>+    }</td>
</tr>
<tr>
<td>56</td>
<td>+  },</td>
</tr>
<tr>
<td>4557</td>
<td>methods: {</td>
</tr>
<tr>
<td>4658</td>
<td>onHide (name, state, params) {</td>
</tr>
<tr>
<td>4759</td>
<td>return name === this.name ? this.toggle(false) : false</td>
</tr>
<tr>
<td></td>
<td>@@ -93,6 +105,10 @@ export default {</td>
</tr>
<tr>
<td>93105</td>
<td>width: {</td>
</tr>
<tr>
<td>94106</td>
<td>type: Number,</td>
</tr>
<tr>
<td>95107</td>
<td>default: 0</td>
</tr>
<tr>
<td>108</td>
<td>+    },</td>
</tr>
<tr>
<td>109</td>
<td>+    transitionName: {</td>
</tr>
<tr>
<td>110</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>111</td>
<td>+      default: 'fade-in-down'</td>
</tr>
<tr>
<td>96112</td>
<td>}</td>
</tr>
<tr>
<td>97113</td>
<td>},</td>
</tr>
<tr>
<td>98114</td>
<td>computed: {</td>
</tr>
<tr>
<td></td>
<td>@@ -103,7 +119,7 @@ export default {</td>
</tr>
<tr>
<td>103119</td>
<td>}</td>
</tr>
<tr>
<td>104120</td>
<td></script></td>
</tr>
<tr>
<td>105121</td>
<td></td>
</tr>
<tr>
<td>106</td>
<td>- <style lang="scss"></td>
</tr>
<tr>
<td>122</td>
<td>+ <style lang="scss" scoped></td>
</tr>
<tr>
<td>107123</td>
<td>@import '~theme/css/base/global_vars';</td>
</tr>
<tr>
<td>108124</td>
<td>$z-index-modal: map-get($z-index, modal);</td>
</tr>
<tr>
<td>109125</td>
<td></td>
</tr>
<tr>
<td></td>
<td>@@ -115,28 +131,17 @@ $z-index-modal: map-get($z-index, modal);</td>
</tr>
<tr>
<td>115131</td>
<td>left: 0;</td>
</tr>
<tr>
<td>116132</td>
<td>overflow: auto;</td>
</tr>
<tr>
<td>117133</td>
<td>z-index: $z-index-modal;</td>
</tr>
<tr>
<td>118</td>
<td>-  text-align: inherit;</td>
</tr>
<tr>
<td>119</td>
<td>-</td>
</tr>
<tr>
<td>120</td>
<td>-  .modal-wrapper {</td>
</tr>
<tr>
<td>121</td>
<td>-    display: table;</td>
</tr>
<tr>
<td>122</td>
<td>-    height: 100%;</td>
</tr>
<tr>
<td>123</td>
<td>-    width: 100%;</td>
</tr>
<tr>
<td>124</td>
<td>-    table-layout: fixed;</td>
</tr>
<tr>
<td>125</td>
<td>-    pointer-events: none;</td>
</tr>
<tr>
<td>126</td>
<td>-  }</td>
</tr>
<tr>
<td>127</td>
<td>-</td>
</tr>
<tr>
<td>128</td>
<td>-  .modal-center {</td>
</tr>
<tr>
<td>129</td>
<td>-    display: table-cell;</td>
</tr>
<tr>
<td>130</td>
<td>-    vertical-align: middle;</td>
</tr>
<tr>
<td>131</td>
<td>-  }</td>
</tr>
<tr>
<td>132134</td>
<td></td>
</tr>
<tr>
<td>133135</td>
<td>.modal-container {</td>
</tr>
<tr>
<td>136</td>
<td>+    position: absolute;</td>
</tr>
<tr>
<td>137</td>
<td>+    top: 50%;</td>
</tr>
<tr>
<td>138</td>
<td>+    left: 50%;</td>
</tr>
<tr>
<td>139</td>
<td>+    transform: translate(-50%, -50%);</td>
</tr>
<tr>
<td>134140</td>
<td>width: 945px;</td>
</tr>
<tr>
<td>135141</td>
<td>margin: 0 auto;</td>
</tr>
<tr>
<td>136142</td>
<td>max-width: 100%;</td>
</tr>
<tr>
<td>137143</td>
<td>max-height: 100%;</td>
</tr>
<tr>
<td>138144</td>
<td>z-index: $z-index-modal+1;</td>
</tr>
<tr>
<td>139</td>
<td>-    pointer-events: auto;</td>
</tr>
<tr>
<td>140145</td>
<td></td>
</tr>
<tr>
<td>141146</td>
<td>@media (max-width: 600px) {</td>
</tr>
<tr>
<td>142147</td>
<td>min-height: 100%;</td>
</tr>
<tr>
<td></td>
<td>@@ -163,11 +168,20 @@ $z-index-modal: map-get($z-index, modal);</td>
</tr>
<tr>
<td>163168</td>
<td>}</td>
</tr>
<tr>
<td>164169</td>
<td>}</td>
</tr>
<tr>
<td>165170</td>
<td></td>
</tr>
<tr>
<td>166</td>
<td>-  .modal-~~close ~~{</td>
</tr>
<tr>
<td>167</td>
<td>-    <s>position</s>: <s>absolute</s>;</td>
</tr>
<tr>
<td>171</td>
<td>+  .modal-header{</td>
</tr>
<tr>
<td>172</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>173</td>
<td>+    align-items: center;</td>
</tr>
<tr>
<td>174</td>
<td>+    justify-content: space-between;</td>
</tr>
<tr>
<td>175</td>
<td>+  }</td>
</tr>
<tr>
<td>176</td>
<td>+  .modal-close{</td>
</tr>
<tr>
<td>168177</td>
<td>cursor: pointer;</td>
</tr>
<tr>
<td>169</td>
<td>- ~~    right: 0;~~</td>
</tr>
<tr>
<td>178</td>
<td>+  }</td>
</tr>
<tr>
<td>179</td>
<td>+  .modal-backdrop{</td>
</tr>
<tr>
<td>180</td>
<td>+    position: absolute;</td>
</tr>
<tr>
<td>170181</td>
<td>top: 0;</td>
</tr>
<tr>
<td>182</td>
<td>+    left: 0;</td>
</tr>
<tr>
<td>183</td>
<td>+    width:100%;</td>
</tr>
<tr>
<td>184</td>
<td>+    height: 100%;</td>
</tr>
<tr>
<td>171185</td>
<td>}</td>
</tr>
<tr>
<td>172186</td>
<td>}</td>
</tr>
<tr>
<td>173187</td>
<td></style></td>
</tr>
</tbody>
</table>
<h4 id="_39-让我们修复newsletterpopup" tabindex="-1"><a class="header-anchor" href="#_39-让我们修复newsletterpopup" aria-hidden="true">#</a> <a href="#_39-let-s-fix-newsletterpopup">#</a>39. 让我们修复<em>NewsletterPopup</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/NewsletterPopup.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/NewsletterPopup.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -59,12 +59,15 @@ export default {</th>
</tr>
</thead>
<tbody>
<tr>
<td>5959</td>
<td>this.$off('validation-error')</td>
</tr>
<tr>
<td>6060</td>
<td>},</td>
</tr>
<tr>
<td>6161</td>
<td>methods: {</td>
</tr>
<tr>
<td>62</td>
<td>-    onSuccesfulSubmission () {</td>
</tr>
<tr>
<td>63</td>
<td>-      <s>this.$store.dispatch</s>(<s>'notification/spawnNotification',</s> {</td>
</tr>
<tr>
<td>64</td>
<td>-        ~~type: ~~'<s>success</s>',</td>
</tr>
<tr>
<td>65</td>
<td>- ~~        message~~: <s>i18n.t(</s>'<s>You have been successfully subscribed to our newsletter!</s>'<s>)</s>,</td>
</tr>
<tr>
<td>66</td>
<td>- ~~        action1~~: <s>{ label: <s>i18n.t('<s>OK</s>')</s> }</s></td>
</tr>
<tr>
<td>67</td>
<td>- ~~      <s>}</s>)~~</td>
</tr>
<tr>
<td>62</td>
<td>+    onSuccesfulSubmission (isSubscribed) {</td>
</tr>
<tr>
<td>63</td>
<td>+      if (isSubscribed) {</td>
</tr>
<tr>
<td>64</td>
<td>+        this.$store.dispatch('notification/spawnNotification', {</td>
</tr>
<tr>
<td>65</td>
<td>+          type: 'success',</td>
</tr>
<tr>
<td>66</td>
<td>+          message: i18n.t('You have been successfully subscribed to our newsletter!'),</td>
</tr>
<tr>
<td>67</td>
<td>+          action1: { label: i18n.t('OK') }</td>
</tr>
<tr>
<td>68</td>
<td>+        })</td>
</tr>
<tr>
<td>69</td>
<td>+      }</td>
</tr>
<tr>
<td>70</td>
<td>+</td>
</tr>
<tr>
<td>6871</td>
<td>this.$bus.$emit('modal-hide', 'modal-newsletter')</td>
</tr>
<tr>
<td>6972</td>
<td>}</td>
</tr>
<tr>
<td>7073</td>
<td>},</td>
</tr>
</tbody>
</table>
<h4 id="_40-offlinebadge待解决" tabindex="-1"><a class="header-anchor" href="#_40-offlinebadge待解决" aria-hidden="true">#</a> <a href="#_40-offlinebadge-to-be-tackled">#</a>40. <em>OfflineBadge</em>待解决</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/OfflineBadge.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/OfflineBadge.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,9 +2,9 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td><no-ssr></td>
</tr>
<tr>
<td>33</td>
<td>&lt;div</td>
</tr>
<tr>
<td>44</td>
<td>v-show=&quot;OfflineOnly&quot;</td>
</tr>
<tr>
<td>5</td>
<td>-      class=&quot;offline-badge fixed ~~w-100 ~~p10 bg-cl-th-error cl-white center-xs&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+      class=&quot;offline-badge fixed p10 bg-cl-th-error cl-white center-xs&quot;</td>
</tr>
<tr>
<td>66</td>
<td>&gt;</td>
</tr>
<tr>
<td>7</td>
<td>-      {{ $t('You are offline~~,~~ <s>some</s> <s>of</s> <s>the</s> <s>functionalities</s> <s>are</s> <s>limited</s>') }}</td>
</tr>
<tr>
<td>7</td>
<td>+      {{ $t('You are offline. Some features might not be available.') }}</td>
</tr>
<tr>
<td>88</td>
<td></div></td>
</tr>
<tr>
<td>99</td>
<td></no-ssr></td>
</tr>
<tr>
<td>1010</td>
<td></template></td>
</tr>
<tr>
<td></td>
<td>@@ -20,9 +20,14 @@ export default {</td>
</tr>
<tr>
<td>2020</td>
<td>mixins: [VueOfflineMixin]</td>
</tr>
<tr>
<td>2121</td>
<td>}</td>
</tr>
<tr>
<td>2222</td>
<td></script></td>
</tr>
<tr>
<td>23</td>
<td>- <style scoped></td>
</tr>
<tr>
<td>23</td>
<td>+ <style lang="scss" scoped></td>
</tr>
<tr>
<td>24</td>
<td>+ @import '~theme/css/base/global_vars';</td>
</tr>
<tr>
<td>25</td>
<td>+ $z-index: map-get($z-index, overlay) - 1;</td>
</tr>
<tr>
<td>26</td>
<td>+</td>
</tr>
<tr>
<td>2427</td>
<td>.offline-badge {</td>
</tr>
<tr>
<td>2528</td>
<td>bottom: 0;</td>
</tr>
<tr>
<td>2629</td>
<td>left: 0;</td>
</tr>
<tr>
<td>30</td>
<td>+  right: 0;</td>
</tr>
<tr>
<td>31</td>
<td>+  z-index: $z-index;</td>
</tr>
<tr>
<td>2732</td>
<td>}</td>
</tr>
<tr>
<td>2833</td>
<td></style></td>
</tr>
</tbody>
</table>
<h4 id="_41-覆盖需要修复" tabindex="-1"><a class="header-anchor" href="#_41-覆盖需要修复" aria-hidden="true">#</a> <a href="#_41-overlay-needs-fix">#</a>41.<em>覆盖</em>需要修复</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/Overlay.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/Overlay.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -7,12 +7,6 @@ import Overlay from '@vue-storefront/core/compatibility/components/Overlay'</th>
</tr>
</thead>
<tbody>
<tr>
<td>77</td>
<td></td>
</tr>
<tr>
<td>88</td>
<td>export default {</td>
</tr>
<tr>
<td>99</td>
<td>mixins: [Overlay],</td>
</tr>
<tr>
<td>10</td>
<td>-  beforeCreate () {</td>
</tr>
<tr>
<td>11</td>
<td>-    document.documentElement.classList.add('no-scroll')</td>
</tr>
<tr>
<td>12</td>
<td>-  },</td>
</tr>
<tr>
<td>13</td>
<td>-  destroyed () {</td>
</tr>
<tr>
<td>14</td>
<td>-    document.documentElement.classList.remove('no-scroll')</td>
</tr>
<tr>
<td>15</td>
<td>-  },</td>
</tr>
<tr>
<td>1610</td>
<td>methods: {</td>
</tr>
<tr>
<td>1711</td>
<td>close () {</td>
</tr>
<tr>
<td>1812</td>
<td>this.$store.commit('ui/setOverlay', false)</td>
</tr>
<tr>
<td></td>
<td>@@ -20,6 +14,7 @@ export default {</td>
</tr>
<tr>
<td>2014</td>
<td>this.$store.commit('ui/setWishlist', false)</td>
</tr>
<tr>
<td>2115</td>
<td>this.$store.commit('ui/setSearchpanel', false)</td>
</tr>
<tr>
<td>2216</td>
<td>this.$store.commit('ui/setSidebar', false)</td>
</tr>
<tr>
<td>17</td>
<td>+      this.$store.dispatch('themeCart/closeEditMode')</td>
</tr>
<tr>
<td>2318</td>
<td>}</td>
</tr>
<tr>
<td>2419</td>
<td>}</td>
</tr>
<tr>
<td>2520</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_42-priceselector需要修复" tabindex="-1"><a class="header-anchor" href="#_42-priceselector需要修复" aria-hidden="true">#</a> <a href="#_42-priceselector-needs-fix">#</a>42. <em>PriceSelector</em>需要修复</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/PriceSelector.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/PriceSelector.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,21 +1,21 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  <div @click="~~switchFilter~~(~~id~~, ~~from, to~~)"></td>
</tr>
<tr>
<td>2</td>
<td>+  <div @click="$emit('change', variant)"></td>
</tr>
<tr>
<td>33</td>
<td>&lt;button</td>
</tr>
<tr>
<td>44</td>
<td>class=&quot;relative brdr-cl-bg-tertiary brdr-1 bg-cl-transparent mr10 pointer price-selector&quot;</td>
</tr>
<tr>
<td>5</td>
<td>-      :class=&quot;{ active: <s>active</s> }&quot;</td>
</tr>
<tr>
<td>6</td>
<td>-      :aria-label=&quot;$t('Price '<s>)</s> <s>+</s> <s>content</s>&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+      :class=&quot;{ active: isActive }&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+      :aria-label=&quot;$t('Price {variant}', { variant: variant.label })&quot;</td>
</tr>
<tr>
<td>77</td>
<td>&gt;</td>
</tr>
<tr>
<td>88</td>
<td><span class="bg-cl-transparent absolute block square" /></td>
</tr>
<tr>
<td>99</td>
<td></button></td>
</tr>
<tr>
<td>10</td>
<td>-    <span>{{ <s>content</s> }}</span></td>
</tr>
<tr>
<td>10</td>
<td>+    <span>{{ variant.label }}</span></td>
</tr>
<tr>
<td>1111</td>
<td></div></td>
</tr>
<tr>
<td>1212</td>
<td></template></td>
</tr>
<tr>
<td>1313</td>
<td></td>
</tr>
<tr>
<td>1414</td>
<td><script></td>
</tr>
<tr>
<td>15</td>
<td>- import <s>PriceSelector</s> from '<s>@vue-storefront</s>/<s>core</s>/<s>compatibility/components/PriceSelector</s>'</td>
</tr>
<tr>
<td>15</td>
<td>+ import filterMixin from 'theme/mixins/filterMixin.ts'</td>
</tr>
<tr>
<td>1616</td>
<td></td>
</tr>
<tr>
<td>1717</td>
<td>export default {</td>
</tr>
<tr>
<td>18</td>
<td>-  mixins: [<s>PriceSelector</s>]</td>
</tr>
<tr>
<td>18</td>
<td>+  mixins: [filterMixin]</td>
</tr>
<tr>
<td>1919</td>
<td>}</td>
</tr>
<tr>
<td>2020</td>
<td></script></td>
</tr>
</tbody>
</table>
<h4 id="_43-productbundleoptions准备更新" tabindex="-1"><a class="header-anchor" href="#_43-productbundleoptions准备更新" aria-hidden="true">#</a> <a href="#_43-productbundleoptions-ready-to-update">#</a>43. <em>ProductBundleOptions</em>准备更新</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductBundleOptions.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductBundleOptions.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,7 +1,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><form class="custom-options"></td>
</tr>
<tr>
<td>33</td>
<td><div v-for="option in product.bundle_options" :key="('bundleOption_' + option.option_id)"></td>
</tr>
<tr>
<td>4</td>
<td>-      &lt;product-bundle-option :option=&quot;option&quot; @<s>optionChanged</s>=&quot;optionChanged&quot; :error-messages=&quot;errorMessages&quot; /&gt;</td>
</tr>
<tr>
<td>4</td>
<td>+      <product-bundle-option :option="option" @option-changed="optionChanged" :error-messages="errorMessages" /></td>
</tr>
<tr>
<td>55</td>
<td></div></td>
</tr>
<tr>
<td>66</td>
<td></form></td>
</tr>
<tr>
<td>77</td>
<td></template></td>
</tr>
</tbody>
</table>
<h4 id="_44-productcustomoptions准备更新" tabindex="-1"><a class="header-anchor" href="#_44-productcustomoptions准备更新" aria-hidden="true">#</a> <a href="#_44-productcustomoptions-ready-to-update">#</a>44. <em>ProductCustomOptions</em>准备更新</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductCustomOptions.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductCustomOptions.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -18,7 +18,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1818</td>
<td>&gt;</td>
</tr>
<tr>
<td>1919</td>
<td><div class="m5 relative" v-for="opval in option.values" :key="opval.option_type_id" v-if="option.type === 'radio' || option.type === 'select' || option.type === 'drop_down'"></td>
</tr>
<tr>
<td>2020</td>
<td>&lt;input</td>
</tr>
<tr>
<td>21</td>
<td>-            @change=&quot;optionChanged(option~~, opval~~)&quot;</td>
</tr>
<tr>
<td>21</td>
<td>+            @change=&quot;optionChanged(option)&quot;</td>
</tr>
<tr>
<td>2222</td>
<td>type=&quot;radio&quot;</td>
</tr>
<tr>
<td>2323</td>
<td>class=&quot;m0 no-outline&quot;</td>
</tr>
<tr>
<td>2424</td>
<td>:name=&quot;('customOption_' + option.option_id)&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -30,7 +30,7 @@</td>
</tr>
<tr>
<td>3030</td>
<td></div></td>
</tr>
<tr>
<td>3131</td>
<td><div class="m5 relative" v-for="opval in option.values" :key="opval.option_type_id" v-if="option.type === 'checkbox'"></td>
</tr>
<tr>
<td>3232</td>
<td>&lt;input</td>
</tr>
<tr>
<td>33</td>
<td>-            @change=&quot;optionChanged(option~~, opval~~)&quot;</td>
</tr>
<tr>
<td>33</td>
<td>+            @change=&quot;optionChanged(option)&quot;</td>
</tr>
<tr>
<td>3434</td>
<td>type=&quot;checkbox&quot;</td>
</tr>
<tr>
<td>3535</td>
<td>class=&quot;m0 no-outline&quot;</td>
</tr>
<tr>
<td>3636</td>
<td>:name=&quot;('customOption_' + option.option_id)&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -115,6 +115,7 @@ export default {</td>
</tr>
<tr>
<td>115115</td>
<td>position: absolute;</td>
</tr>
<tr>
<td>116116</td>
<td>top: 3px;</td>
</tr>
<tr>
<td>117117</td>
<td>left: 0;</td>
</tr>
<tr>
<td>118</td>
<td>+    opacity: 0;</td>
</tr>
<tr>
<td>118119</td>
<td>&amp;:checked + label {</td>
</tr>
<tr>
<td>119120</td>
<td>&amp;:before {</td>
</tr>
<tr>
<td>120121</td>
<td>background-color: $color-silver;</td>
</tr>
</tbody>
</table>
<h4 id="_45-productgallerycarousel准备更新" tabindex="-1"><a class="header-anchor" href="#_45-productgallerycarousel准备更新" aria-hidden="true">#</a> <a href="#_45-productgallerycarousel-ready-to-update">#</a>45. <em>ProductGalleryCarousel</em>准备更新</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductGalleryCarousel.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductGalleryCarousel.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -23,8 +23,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>2323</td>
<td>&lt;product-image</td>
</tr>
<tr>
<td>2424</td>
<td>v-show=&quot;hideImageAtIndex !== index&quot;</td>
</tr>
<tr>
<td>2525</td>
<td>@dblclick=&quot;openOverlay&quot;</td>
</tr>
<tr>
<td>26</td>
<td>-            class=&quot;<s>product-<s>image</s> pointer</s>&quot;</td>
</tr>
<tr>
<td>26</td>
<td>+            class=&quot;pointer image&quot;</td>
</tr>
<tr>
<td>27</td>
<td>-            :class=&quot;{'product-image--video': images.video}&quot;</td>
</tr>
<tr>
<td>2827</td>
<td>:image=&quot;images&quot;</td>
</tr>
<tr>
<td>2928</td>
<td>:alt=&quot;productName | htmlDecode&quot;</td>
</tr>
<tr>
<td>3029</td>
<td>/&gt;</td>
</tr>
<tr>
<td></td>
<td>@@ -67,7 +66,7 @@ export default {</td>
</tr>
<tr>
<td>6766</td>
<td>},</td>
</tr>
<tr>
<td>6867</td>
<td>productName: {</td>
</tr>
<tr>
<td>6968</td>
<td>type: String,</td>
</tr>
<tr>
<td>70</td>
<td>-      <s>required</s>: <s>true</s></td>
</tr>
<tr>
<td>69</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>7170</td>
<td>},</td>
</tr>
<tr>
<td>7271</td>
<td>configuration: {</td>
</tr>
<tr>
<td>7372</td>
<td>type: Object,</td>
</tr>
<tr>
<td></td>
<td>@@ -160,17 +159,13 @@ export default {</td>
</tr>
<tr>
<td>160159</td>
<td>bottom: 0;</td>
</tr>
<tr>
<td>161160</td>
<td>right: 0;</td>
</tr>
<tr>
<td>162161</td>
<td>}</td>
</tr>
<tr>
<td>163</td>
<td>- .~~product-~~image{</td>
</tr>
<tr>
<td>162</td>
<td>+ .image{</td>
</tr>
<tr>
<td>164</td>
<td>-  mix-blend-mode: multiply;</td>
</tr>
<tr>
<td>165163</td>
<td>opacity: 1;</td>
</tr>
<tr>
<td>166</td>
<td>-  will-change: <s>transform</s>;</td>
</tr>
<tr>
<td>164</td>
<td>+  will-change: opacity;</td>
</tr>
<tr>
<td>167165</td>
<td>transition: .3s opacity $motion-main;</td>
</tr>
<tr>
<td>168166</td>
<td>&amp;:hover{</td>
</tr>
<tr>
<td>169167</td>
<td>opacity: .9;</td>
</tr>
<tr>
<td>170168</td>
<td>}</td>
</tr>
<tr>
<td>171</td>
<td>-  &amp;--video{</td>
</tr>
<tr>
<td>172</td>
<td>-    padding-bottom: calc(319% / (568 / 100));</td>
</tr>
<tr>
<td>173</td>
<td>-  }</td>
</tr>
<tr>
<td>174169</td>
<td>}</td>
</tr>
<tr>
<td>175170</td>
<td>.video-container {</td>
</tr>
<tr>
<td>176171</td>
<td>align-items: center;</td>
</tr>
</tbody>
</table>
<h4 id="_46-productgalleryzoomcarousel准备更新" tabindex="-1"><a class="header-anchor" href="#_46-productgalleryzoomcarousel准备更新" aria-hidden="true">#</a> <a href="#_46-productgalleryzoomcarousel-ready-to-update">#</a>46. <em>ProductGalleryZoomCarousel</em>准备更新</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductGalleryZoomCarousel.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductGalleryZoomCarousel.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,10 +1,9 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div class="media-zoom-carousel"></td>
</tr>
<tr>
<td>33</td>
<td><div class="media-zoom-carousel__container row flex"></td>
</tr>
<tr>
<td>4</td>
<td>-      <ul class="media-zoom-carousel__thumbs m0 p0"></td>
</tr>
<tr>
<td>4</td>
<td>+      <ul class="media-zoom-carousel__thumbs m0 p0" ref="thumbs"></td>
</tr>
<tr>
<td>55</td>
<td><li class="media-zoom-carousel__thumb bg-cl-secondary" v-for="(images, index) in gallery" :key="images.src"></td>
</tr>
<tr>
<td>66</td>
<td>&lt;product-image</td>
</tr>
<tr>
<td>7</td>
<td>-            :class=&quot;{'thumb-video': images.video}&quot;</td>
</tr>
<tr>
<td>87</td>
<td>@click=&quot;navigate(index)&quot;</td>
</tr>
<tr>
<td>98</td>
<td>:image=&quot;images&quot;</td>
</tr>
<tr>
<td>109</td>
<td>:alt=&quot;productName | htmlDecode&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -34,7 +33,6 @@</td>
</tr>
<tr>
<td>3433</td>
<td>&gt;</td>
</tr>
<tr>
<td>3534</td>
<td>&lt;product-image</td>
</tr>
<tr>
<td>3635</td>
<td>v-show=&quot;hideImageAtIndex !== index&quot;</td>
</tr>
<tr>
<td>37</td>
<td>-                :class=&quot;{'image--video': images.video}&quot;</td>
</tr>
<tr>
<td>3836</td>
<td>:image=&quot;images&quot;</td>
</tr>
<tr>
<td>3937</td>
<td>:alt=&quot;productName | htmlDecode&quot;</td>
</tr>
<tr>
<td>4038</td>
<td>/&gt;</td>
</tr>
<tr>
<td></td>
<td>@@ -54,6 +52,7 @@</td>
</tr>
<tr>
<td>5452</td>
<td></td>
</tr>
<tr>
<td>5553</td>
<td><script></td>
</tr>
<tr>
<td>5654</td>
<td>import { Carousel, Slide } from 'vue-carousel'</td>
</tr>
<tr>
<td>55</td>
<td>+ import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'</td>
</tr>
<tr>
<td>5756</td>
<td>import ProductImage from './ProductImage'</td>
</tr>
<tr>
<td>5857</td>
<td>import ProductVideo from './ProductVideo'</td>
</tr>
<tr>
<td>5958</td>
<td></td>
</tr>
<tr>
<td></td>
<td>@@ -88,6 +87,9 @@ export default {</td>
</tr>
<tr>
<td>8887</td>
<td>ProductVideo</td>
</tr>
<tr>
<td>8988</td>
<td>},</td>
</tr>
<tr>
<td>9089</td>
<td>mounted () {</td>
</tr>
<tr>
<td>90</td>
<td>+    this.$nextTick(() =&gt; {</td>
</tr>
<tr>
<td>91</td>
<td>+      disableBodyScroll(this.$refs.thumbs)</td>
</tr>
<tr>
<td>92</td>
<td>+    })</td>
</tr>
<tr>
<td>9193</td>
<td>this.navigate(this.currentSlide)</td>
</tr>
<tr>
<td>9294</td>
<td>if (this.$refs.zoomCarousel) {</td>
</tr>
<tr>
<td>9395</td>
<td>let navigation = this.$refs.zoomCarousel.$children.find(c =&gt; c.$el.className === 'VueCarousel-navigation')</td>
</tr>
<tr>
<td></td>
<td>@@ -100,6 +102,9 @@ export default {</td>
</tr>
<tr>
<td>100102</td>
<td>}</td>
</tr>
<tr>
<td>101103</td>
<td>}</td>
</tr>
<tr>
<td>102104</td>
<td>},</td>
</tr>
<tr>
<td>105</td>
<td>+  destroyed () {</td>
</tr>
<tr>
<td>106</td>
<td>+    clearAllBodyScrollLocks()</td>
</tr>
<tr>
<td>107</td>
<td>+  },</td>
</tr>
<tr>
<td>103108</td>
<td>methods: {</td>
</tr>
<tr>
<td>104109</td>
<td>navigate (key) {</td>
</tr>
<tr>
<td>105110</td>
<td>this.$refs.zoomCarousel.goToPage(key)</td>
</tr>
<tr>
<td></td>
<td>@@ -174,10 +179,9 @@ export default {</td>
</tr>
<tr>
<td>174179</td>
<td>margin-bottom: 0;</td>
</tr>
<tr>
<td>175180</td>
<td>}</td>
</tr>
<tr>
<td>176181</td>
<td></td>
</tr>
<tr>
<td>177</td>
<td>-    &amp; &gt; <s>.image</s>{</td>
</tr>
<tr>
<td>178</td>
<td>-      <s>mix-blend-mode</s>: <s>multiply</s>;</td>
</tr>
<tr>
<td>179</td>
<td>-      <s>opacity</s>: <s>0.9</s>;</td>
</tr>
<tr>
<td>182</td>
<td>+    &amp; &gt; *{</td>
</tr>
<tr>
<td>183</td>
<td>+      opacity: .9;</td>
</tr>
<tr>
<td>184</td>
<td>+      will-change: opacity;</td>
</tr>
<tr>
<td>180</td>
<td>-      will-change: transform;</td>
</tr>
<tr>
<td>181185</td>
<td>transition: .3s opacity $motion-main;</td>
</tr>
<tr>
<td>182186</td>
<td></td>
</tr>
<tr>
<td>183187</td>
<td>&amp;:hover{</td>
</tr>
<tr>
<td></td>
<td>@@ -202,13 +206,6 @@ export default {</td>
</tr>
<tr>
<td>202206</td>
<td>&amp;__slide{</td>
</tr>
<tr>
<td>203207</td>
<td>height: 100%;</td>
</tr>
<tr>
<td>204208</td>
<td>max-height: 100%;</td>
</tr>
<tr>
<td>205</td>
<td>-    &amp; &gt; .image {</td>
</tr>
<tr>
<td>206</td>
<td>-      mix-blend-mode: multiply;</td>
</tr>
<tr>
<td>207</td>
<td>-    padding-bottom: calc(710% / (600 / 100));</td>
</tr>
<tr>
<td>208</td>
<td>-    }</td>
</tr>
<tr>
<td>209</td>
<td>-    .image--video{</td>
</tr>
<tr>
<td>210</td>
<td>-      padding-bottom: calc(319% / (568 / 100));</td>
</tr>
<tr>
<td>211</td>
<td>-    }</td>
</tr>
<tr>
<td>212209</td>
<td>}</td>
</tr>
<tr>
<td>213210</td>
<td>}</td>
</tr>
<tr>
<td>214211</td>
<td>.thumb-video{</td>
</tr>
</tbody>
</table>
<h4 id="_47-productimage排队等候" tabindex="-1"><a class="header-anchor" href="#_47-productimage排队等候" aria-hidden="true">#</a> <a href="#_47-productimage-waits-in-line">#</a>47. <em>ProductImage</em>排队等候</h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductImage.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductImage.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,13 +1,15 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  &lt;div~~ class=&quot;image&quot; v-on=&quot;$listeners&quot;&gt;~~</td>
</tr>
<tr>
<td>2</td>
<td>+  &lt;div</td>
</tr>
<tr>
<td>3</td>
<td>+    class=&quot;product-image&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+    :class=&quot;{'product-image--height': basic, 'product-image--width': !basic}&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+    :style=&quot;style&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+    v-on=&quot;$listeners&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+  &gt;</td>
</tr>
<tr>
<td>38</td>
<td>&lt;img</td>
</tr>
<tr>
<td>49</td>
<td>v-show=&quot;showPlaceholder&quot;</td>
</tr>
<tr>
<td>510</td>
<td>src=&quot;/assets/placeholder.svg&quot;</td>
</tr>
<tr>
<td>611</td>
<td>:alt=&quot;alt&quot;</td>
</tr>
<tr>
<td>7</td>
<td>-      <s>key</s>=&quot;<s>placeholder</s>&quot;</td>
</tr>
<tr>
<td>12</td>
<td>+      class=&quot;product-image__placeholder&quot;</td>
</tr>
<tr>
<td>8</td>
<td>-      ref=&quot;images&quot;</td>
</tr>
<tr>
<td>9</td>
<td>-      itemprop=&quot;image&quot;</td>
</tr>
<tr>
<td>10</td>
<td>-      class=&quot;image__thumb image__thumb--placeholder&quot;</td>
</tr>
<tr>
<td>1113</td>
<td>&gt;</td>
</tr>
<tr>
<td>1214</td>
<td>&lt;img</td>
</tr>
<tr>
<td>1315</td>
<td>v-if=&quot;!lowerQualityImageError || isOnline&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -16,10 +18,8 @@</td>
</tr>
<tr>
<td>1618</td>
<td>:alt=&quot;alt&quot;</td>
</tr>
<tr>
<td>1719</td>
<td>@load=&quot;imageLoaded('lower', true)&quot;</td>
</tr>
<tr>
<td>1820</td>
<td>@error=&quot;imageLoaded('lower', false)&quot;</td>
</tr>
<tr>
<td>19</td>
<td>-      <s>key</s>=&quot;<s>lowerQualityImage</s>&quot;</td>
</tr>
<tr>
<td>20</td>
<td>-      <s>ref</s>=&quot;<s>images</s>&quot;</td>
</tr>
<tr>
<td>21</td>
<td>+      ref=&quot;lQ&quot;</td>
</tr>
<tr>
<td>22</td>
<td>+      class=&quot;product-image__thumb&quot;</td>
</tr>
<tr>
<td>21</td>
<td>-      itemprop=&quot;image&quot;</td>
</tr>
<tr>
<td>22</td>
<td>-      class=&quot;image__thumb&quot;</td>
</tr>
<tr>
<td>2323</td>
<td>&gt;</td>
</tr>
<tr>
<td>2424</td>
<td>&lt;img</td>
</tr>
<tr>
<td>2525</td>
<td>v-if=&quot;!highQualityImageError || isOnline&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -28,10 +28,7 @@</td>
</tr>
<tr>
<td>2828</td>
<td>:alt=&quot;alt&quot;</td>
</tr>
<tr>
<td>2929</td>
<td>@load=&quot;imageLoaded('high', true)&quot;</td>
</tr>
<tr>
<td>3030</td>
<td>@error=&quot;imageLoaded('high', false)&quot;</td>
</tr>
<tr>
<td>31</td>
<td>-      <s>key</s>=&quot;<s>highQualityImage</s>&quot;</td>
</tr>
<tr>
<td>31</td>
<td>+      class=&quot;product-image__thumb&quot;</td>
</tr>
<tr>
<td>32</td>
<td>-      ref=&quot;images&quot;</td>
</tr>
<tr>
<td>33</td>
<td>-      itemprop=&quot;image&quot;</td>
</tr>
<tr>
<td>34</td>
<td>-      class=&quot;image__thumb&quot;</td>
</tr>
<tr>
<td>3532</td>
<td>&gt;</td>
</tr>
<tr>
<td>3633</td>
<td></div></td>
</tr>
<tr>
<td>3734</td>
<td></template></td>
</tr>
<tr>
<td></td>
<td>@@ -41,6 +38,10 @@ import { onlineHelper } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>4138</td>
<td></td>
</tr>
<tr>
<td>4239</td>
<td>export default {</td>
</tr>
<tr>
<td>4340</td>
<td>props: {</td>
</tr>
<tr>
<td>41</td>
<td>+    calcRatio: {</td>
</tr>
<tr>
<td>42</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>43</td>
<td>+      default: true</td>
</tr>
<tr>
<td>44</td>
<td>+    },</td>
</tr>
<tr>
<td>4445</td>
<td>image: {</td>
</tr>
<tr>
<td>4546</td>
<td>type: Object,</td>
</tr>
<tr>
<td>4647</td>
<td>default: () =&gt; ({</td>
</tr>
<tr>
<td></td>
<td>@@ -58,7 +59,15 @@ export default {</td>
</tr>
<tr>
<td>5859</td>
<td>lowerQualityImage: false,</td>
</tr>
<tr>
<td>5960</td>
<td>lowerQualityImageError: false,</td>
</tr>
<tr>
<td>6061</td>
<td>highQualityImage: false,</td>
</tr>
<tr>
<td>61</td>
<td>-      highQualityImageError: false</td>
</tr>
<tr>
<td>62</td>
<td>+      highQualityImageError: false,</td>
</tr>
<tr>
<td>63</td>
<td>+      basic: true</td>
</tr>
<tr>
<td>64</td>
<td>+    }</td>
</tr>
<tr>
<td>65</td>
<td>+  },</td>
</tr>
<tr>
<td>66</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>67</td>
<td>+    lowerQualityImage (state) {</td>
</tr>
<tr>
<td>68</td>
<td>+      if (state) {</td>
</tr>
<tr>
<td>69</td>
<td>+        this.basic = this.$refs.lQ.naturalWidth &lt; this.$refs.lQ.naturalHeight;</td>
</tr>
<tr>
<td>70</td>
<td>+      }</td>
</tr>
<tr>
<td>6271</td>
<td>}</td>
</tr>
<tr>
<td>6372</td>
<td>},</td>
</tr>
<tr>
<td>6473</td>
<td>computed: {</td>
</tr>
<tr>
<td></td>
<td>@@ -71,6 +80,13 @@ export default {</td>
</tr>
<tr>
<td>7180</td>
<td>showHighQuality () {</td>
</tr>
<tr>
<td>7281</td>
<td>return this.highQualityImage</td>
</tr>
<tr>
<td>7382</td>
<td>},</td>
</tr>
<tr>
<td>83</td>
<td>+    imageRatio () {</td>
</tr>
<tr>
<td>84</td>
<td>+      const {width, height} = this.$store.state.config.products.gallery</td>
</tr>
<tr>
<td>85</td>
<td>+      return <code>${height / (width / 100)}%</code></td>
</tr>
<tr>
<td>86</td>
<td>+    },</td>
</tr>
<tr>
<td>87</td>
<td>+    style () {</td>
</tr>
<tr>
<td>88</td>
<td>+      return this.calcRatio ? {paddingBottom: this.imageRatio} : {}</td>
</tr>
<tr>
<td>89</td>
<td>+    },</td>
</tr>
<tr>
<td>7490</td>
<td>isOnline (value) {</td>
</tr>
<tr>
<td>7591</td>
<td>return onlineHelper.isOnline</td>
</tr>
<tr>
<td>7692</td>
<td>}</td>
</tr>
<tr>
<td></td>
<td>@@ -85,25 +101,30 @@ export default {</td>
</tr>
<tr>
<td>85101</td>
<td></script></td>
</tr>
<tr>
<td>86102</td>
<td></td>
</tr>
<tr>
<td>87103</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>88</td>
<td>-  .image{</td>
</tr>
<tr>
<td>104</td>
<td>+  .product-image{</td>
</tr>
<tr>
<td>89105</td>
<td>position: relative;</td>
</tr>
<tr>
<td>90106</td>
<td>width: 100%;</td>
</tr>
<tr>
<td>107</td>
<td>+    max-width: 100%;</td>
</tr>
<tr>
<td>91108</td>
<td>height: 0;</td>
</tr>
<tr>
<td>92</td>
<td>-    padding-bottom: calc(740% / (600 / 100));</td>
</tr>
<tr>
<td>93</td>
<td>-    overflow: hidden;</td>
</tr>
<tr>
<td>94109</td>
<td>mix-blend-mode: multiply;</td>
</tr>
<tr>
<td>95</td>
<td>-    &amp;<s>__thumb{</s></td>
</tr>
<tr>
<td>96</td>
<td>- ~~      max-width:~~ <s>100%;</s></td>
</tr>
<tr>
<td>110</td>
<td>+    &amp;__placeholder,</td>
</tr>
<tr>
<td>111</td>
<td>+    &amp;__thumb {</td>
</tr>
<tr>
<td>97</td>
<td>-      height: auto;</td>
</tr>
<tr>
<td>98112</td>
<td>position: absolute;</td>
</tr>
<tr>
<td>99113</td>
<td>top: 50%;</td>
</tr>
<tr>
<td>100114</td>
<td>left: 50%;</td>
</tr>
<tr>
<td>101</td>
<td>-      <s>width</s>: <s>auto</s>;</td>
</tr>
<tr>
<td>102</td>
<td>- ~~      height: 100%;~~</td>
</tr>
<tr>
<td>103</td>
<td>- ~~      transform:~~ <s>translate3d(-50%, -50%, 0);</s></td>
</tr>
<tr>
<td>104</td>
<td>-      <s>&amp;--placeholder{</s></td>
</tr>
<tr>
<td>105</td>
<td>- ~~        width: auto;~~</td>
</tr>
<tr>
<td>106</td>
<td>- ~~        <s>height</s>:~~ <s>auto;</s></td>
</tr>
<tr>
<td>115</td>
<td>+      transform: translate(-50%, -50%);</td>
</tr>
<tr>
<td>116</td>
<td>+    }</td>
</tr>
<tr>
<td>117</td>
<td>+    &amp;__placeholder {</td>
</tr>
<tr>
<td>118</td>
<td>+      max-width: 50%;</td>
</tr>
<tr>
<td>119</td>
<td>+    }</td>
</tr>
<tr>
<td>120</td>
<td>+    &amp;--height {</td>
</tr>
<tr>
<td>121</td>
<td>+      .product-image__thumb {</td>
</tr>
<tr>
<td>122</td>
<td>+        height: 100%;</td>
</tr>
<tr>
<td>123</td>
<td>+      }</td>
</tr>
<tr>
<td>124</td>
<td>+    }</td>
</tr>
<tr>
<td>125</td>
<td>+    &amp;--width {</td>
</tr>
<tr>
<td>126</td>
<td>+      .product-image__thumb {</td>
</tr>
<tr>
<td>127</td>
<td>+        width: 100%;</td>
</tr>
<tr>
<td>107128</td>
<td>}</td>
</tr>
<tr>
<td>108129</td>
<td>}</td>
</tr>
<tr>
<td>109130</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_48-产品链接" tabindex="-1"><a class="header-anchor" href="#_48-产品链接" aria-hidden="true">#</a> <a href="#_48-productlinks">#</a>48.<em>产品链接</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductLinks.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductLinks.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -7,12 +7,12 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>77</td>
<td>{{ productLink.product.name | htmlDecode }}</td>
</tr>
<tr>
<td>88</td>
<td></p></td>
</tr>
<tr>
<td>99</td>
<td><div class="col-xs-4 cl-bg-tertiary"></td>
</tr>
<tr>
<td>10</td>
<td>-            <div v-if="productLink.product.special_price && productLink.product.~~priceInclTax~~ && productLink.product.~~originalPriceInclTax~~"></td>
</tr>
<tr>
<td>11</td>
<td>-              <span class="price-special">{{ productLink.product.<s>priceInclTax</s> | price }}</span> </td>
</tr>
<tr>
<td>12</td>
<td>-              <span class="price-original">{{ productLink.product.<s>originalPriceInclTax</s> | price }}</span></td>
</tr>
<tr>
<td>10</td>
<td>+            <div v-if="productLink.product.special_price && productLink.product.price_incl_tax && productLink.product.original_price_incl_tax"></td>
</tr>
<tr>
<td>11</td>
<td>+              <span class="price-special">{{ productLink.product.price_incl_tax | price }}</span> </td>
</tr>
<tr>
<td>12</td>
<td>+              <span class="price-original">{{ productLink.product.original_price_incl_tax | price }}</span></td>
</tr>
<tr>
<td>1313</td>
<td></div></td>
</tr>
<tr>
<td>14</td>
<td>-            <div v-if="!productLink.product.special_price && productLink.product.~~priceInclTax~~"></td>
</tr>
<tr>
<td>15</td>
<td>-              {{ productLink.product.<s>priceInclTax</s> | price }}</td>
</tr>
<tr>
<td>14</td>
<td>+            <div v-if="!productLink.product.special_price && productLink.product.price_incl_tax"></td>
</tr>
<tr>
<td>15</td>
<td>+              {{ productLink.product.price_incl_tax | price }}</td>
</tr>
<tr>
<td>1616</td>
<td></div></td>
</tr>
<tr>
<td>1717</td>
<td></div></td>
</tr>
<tr>
<td>1818</td>
<td></div></td>
</tr>
</tbody>
</table>
<h4 id="_49-productquantity" tabindex="-1"><a class="header-anchor" href="#_49-productquantity" aria-hidden="true">#</a> <a href="#_49-productquantity">#</a>49. <em>ProductQuantity</em></h4>
<ul>
<li>Go to <code>./src/themes/degi/components/core/ProductQuantity.vue</code> and create it as follows :</li>
</ul>
<p>src/themes/degi/components/core/ProductQuantity.vueRENAMED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -0,0 +1,102 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ <template></td>
</tr>
<tr>
<td>2</td>
<td>+  <div class="product-quantity"></td>
</tr>
<tr>
<td>3</td>
<td>+    &lt;base-input-number</td>
</tr>
<tr>
<td>4</td>
<td>+      :name=&quot;name&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+      :value=&quot;value&quot;</td>
</tr>
<tr>
<td>6</td>
<td>+      :min=&quot;1&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+      :max=&quot;maxQuantity&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+      :disabled=&quot;disabled&quot;</td>
</tr>
<tr>
<td>9</td>
<td>+      @input=&quot;$emit('input', $event)&quot;</td>
</tr>
<tr>
<td>10</td>
<td>+      @blur=&quot;$v.$touch()&quot;</td>
</tr>
<tr>
<td>11</td>
<td>+      :validations=&quot;[</td>
</tr>
<tr>
<td>12</td>
<td>+        {</td>
</tr>
<tr>
<td>13</td>
<td>+          condition: !$v.value.numeric || !$v.value.minValue || !$v.value.required,</td>
</tr>
<tr>
<td>14</td>
<td>+          text: $t(<code>Quantity must be positive integer</code>)</td>
</tr>
<tr>
<td>15</td>
<td>+        },</td>
</tr>
<tr>
<td>16</td>
<td>+        {</td>
</tr>
<tr>
<td>17</td>
<td>+          condition: maxQuantity &amp;&amp; value &amp;&amp; !$v.value.maxValue,</td>
</tr>
<tr>
<td>18</td>
<td>+          text: $t('Quantity must be below {quantity}', { quantity: maxQuantity })</td>
</tr>
<tr>
<td>19</td>
<td>+        }</td>
</tr>
<tr>
<td>20</td>
<td>+      ]&quot;</td>
</tr>
<tr>
<td>21</td>
<td>+    /&gt;</td>
</tr>
<tr>
<td>22</td>
<td>+    <spinner v-if="loading" /></td>
</tr>
<tr>
<td>23</td>
<td>+  </div></td>
</tr>
<tr>
<td>24</td>
<td>+ </template></td>
</tr>
<tr>
<td>25</td>
<td>+</td>
</tr>
<tr>
<td>26</td>
<td>+ <script></td>
</tr>
<tr>
<td>27</td>
<td>+ import { minValue, maxValue, numeric, required } from 'vuelidate/lib/validators'</td>
</tr>
<tr>
<td>28</td>
<td>+ import { onlineHelper } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>29</td>
<td>+ import BaseInputNumber from 'theme/components/core/blocks/Form/BaseInputNumber'</td>
</tr>
<tr>
<td>30</td>
<td>+ import Spinner from 'theme/components/core/Spinner'</td>
</tr>
<tr>
<td>31</td>
<td>+</td>
</tr>
<tr>
<td>32</td>
<td>+ export default {</td>
</tr>
<tr>
<td>33</td>
<td>+  components: {</td>
</tr>
<tr>
<td>34</td>
<td>+    Spinner,</td>
</tr>
<tr>
<td>35</td>
<td>+    BaseInputNumber</td>
</tr>
<tr>
<td>36</td>
<td>+  },</td>
</tr>
<tr>
<td>37</td>
<td>+  props: {</td>
</tr>
<tr>
<td>38</td>
<td>+    value: {</td>
</tr>
<tr>
<td>39</td>
<td>+      type: [Number, String],</td>
</tr>
<tr>
<td>40</td>
<td>+      required: true</td>
</tr>
<tr>
<td>41</td>
<td>+    },</td>
</tr>
<tr>
<td>42</td>
<td>+    showQuantity: {</td>
</tr>
<tr>
<td>43</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>44</td>
<td>+      default: false</td>
</tr>
<tr>
<td>45</td>
<td>+    },</td>
</tr>
<tr>
<td>46</td>
<td>+    maxQuantity: {</td>
</tr>
<tr>
<td>47</td>
<td>+      type: Number,</td>
</tr>
<tr>
<td>48</td>
<td>+      required: true</td>
</tr>
<tr>
<td>49</td>
<td>+    },</td>
</tr>
<tr>
<td>50</td>
<td>+    loading: {</td>
</tr>
<tr>
<td>51</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>52</td>
<td>+      default: false</td>
</tr>
<tr>
<td>53</td>
<td>+    },</td>
</tr>
<tr>
<td>54</td>
<td>+    isSimpleOrConfigurable: {</td>
</tr>
<tr>
<td>55</td>
<td>+      type: Boolean,</td>
</tr>
<tr>
<td>56</td>
<td>+      default: false</td>
</tr>
<tr>
<td>57</td>
<td>+    }</td>
</tr>
<tr>
<td>58</td>
<td>+  },</td>
</tr>
<tr>
<td>59</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>60</td>
<td>+    isOnline (value) {</td>
</tr>
<tr>
<td>61</td>
<td>+      return onlineHelper.isOnline</td>
</tr>
<tr>
<td>62</td>
<td>+    },</td>
</tr>
<tr>
<td>63</td>
<td>+    disabled () {</td>
</tr>
<tr>
<td>64</td>
<td>+      return this.isOnline ? !this.maxQuantity : false</td>
</tr>
<tr>
<td>65</td>
<td>+    },</td>
</tr>
<tr>
<td>66</td>
<td>+    name () {</td>
</tr>
<tr>
<td>67</td>
<td>+      if (this.isSimpleOrConfigurable &amp;&amp; !this.loading &amp;&amp; this.showQuantity) {</td>
</tr>
<tr>
<td>68</td>
<td>+        return this.$i18n.t(this.isOnline ? 'Quantity available' : 'Quantity available offline', { qty: this.maxQuantity })</td>
</tr>
<tr>
<td>69</td>
<td>+      }</td>
</tr>
<tr>
<td>70</td>
<td>+      return this.$i18n.t('Quantity')</td>
</tr>
<tr>
<td>71</td>
<td>+    }</td>
</tr>
<tr>
<td>72</td>
<td>+  },</td>
</tr>
<tr>
<td>73</td>
<td>+  validations () {</td>
</tr>
<tr>
<td>74</td>
<td>+    return {</td>
</tr>
<tr>
<td>75</td>
<td>+      value: {</td>
</tr>
<tr>
<td>76</td>
<td>+        minValue: minValue(1),</td>
</tr>
<tr>
<td>77</td>
<td>+        maxValue: maxValue(this.maxQuantity) &amp;&amp; !this.isSimpleOrConfigurable,</td>
</tr>
<tr>
<td>78</td>
<td>+        numeric,</td>
</tr>
<tr>
<td>79</td>
<td>+        required</td>
</tr>
<tr>
<td>80</td>
<td>+      }</td>
</tr>
<tr>
<td>81</td>
<td>+    }</td>
</tr>
<tr>
<td>82</td>
<td>+  },</td>
</tr>
<tr>
<td>83</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>84</td>
<td>+    '$v.$invalid' (error) {</td>
</tr>
<tr>
<td>85</td>
<td>+      this.$emit('error', error)</td>
</tr>
<tr>
<td>86</td>
<td>+    }</td>
</tr>
<tr>
<td>87</td>
<td>+  }</td>
</tr>
<tr>
<td>88</td>
<td>+ }</td>
</tr>
<tr>
<td>89</td>
<td>+ </script></td>
</tr>
<tr>
<td>90</td>
<td>+ <style lang="scss" scoped></td>
</tr>
<tr>
<td>91</td>
<td>+ .product-quantity {</td>
</tr>
<tr>
<td>92</td>
<td>+  position: relative;</td>
</tr>
<tr>
<td>93</td>
<td>+  /deep/ .spinner {</td>
</tr>
<tr>
<td>94</td>
<td>+    position: absolute;</td>
</tr>
<tr>
<td>95</td>
<td>+    top: 0;</td>
</tr>
<tr>
<td>96</td>
<td>+    right: 0;</td>
</tr>
<tr>
<td>97</td>
<td>+    bottom: 0;</td>
</tr>
<tr>
<td>98</td>
<td>+    left: 0;</td>
</tr>
<tr>
<td>99</td>
<td>+    margin: auto;</td>
</tr>
<tr>
<td>100</td>
<td>+  }</td>
</tr>
<tr>
<td>101</td>
<td>+ }</td>
</tr>
<tr>
<td>102</td>
<td>+ </style></td>
</tr>
</tbody>
</table>
<h4 id="_50-产品瓷砖" tabindex="-1"><a class="header-anchor" href="#_50-产品瓷砖" aria-hidden="true">#</a> <a href="#_50-producttile">#</a>50. 产品<em>瓷砖</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/ProductTile.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/ProductTile.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,21 +1,39 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>2</td>
<td>-  &lt;div</td>
</tr>
<tr>
<td>3</td>
<td>-    class=&quot;<s>product align-center w-100 pb20</s>&quot;</td>
</tr>
<tr>
<td>4</td>
<td>- ~~    v-observe-visibility~~=&quot;<s>visibilityChanged</s>&quot;</td>
</tr>
<tr>
<td>5</td>
<td>- ~~  &gt;~~</td>
</tr>
<tr>
<td>2</td>
<td>+  <div class="product align-center w-100 pb20" v-observe-visibility="visibilityChanged"></td>
</tr>
<tr>
<td>3</td>
<td>+    <div class="product__icons"></td>
</tr>
<tr>
<td>4</td>
<td>+      <AddToWishlist :product="product"></td>
</tr>
<tr>
<td>5</td>
<td>+        &lt;div</td>
</tr>
<tr>
<td>6</td>
<td>+          class=&quot;product__icon&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+          :class=&quot;{'product__icon--active': isOnWishlist }&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+          :title=&quot;isOnWishlist ? $t('Remove') : $t('Add to favorite') &quot;</td>
</tr>
<tr>
<td>9</td>
<td>+        &gt;</td>
</tr>
<tr>
<td>10</td>
<td>+          <i class="material-icons">{{ favoriteIcon }}</i></td>
</tr>
<tr>
<td>11</td>
<td>+        </div></td>
</tr>
<tr>
<td>12</td>
<td>+      </AddToWishlist></td>
</tr>
<tr>
<td>13</td>
<td>+      <AddToCompare :product="product"></td>
</tr>
<tr>
<td>14</td>
<td>+        &lt;div</td>
</tr>
<tr>
<td>15</td>
<td>+          class=&quot;product__icon&quot;</td>
</tr>
<tr>
<td>16</td>
<td>+          :class=&quot;{'product__icon--active':isOnCompare } &quot;</td>
</tr>
<tr>
<td>17</td>
<td>+          :title=&quot;isOnCompare ? $t('Remove from compare') : $t('Add to compare')&quot;</td>
</tr>
<tr>
<td>18</td>
<td>+        &gt;</td>
</tr>
<tr>
<td>19</td>
<td>+          <i class="material-icons">compare</i></td>
</tr>
<tr>
<td>20</td>
<td>+        </div></td>
</tr>
<tr>
<td>21</td>
<td>+      </AddToCompare></td>
</tr>
<tr>
<td>22</td>
<td>+    </div></td>
</tr>
<tr>
<td>623</td>
<td>&lt;router-link</td>
</tr>
<tr>
<td>724</td>
<td>class=&quot;block no-underline product-link&quot;</td>
</tr>
<tr>
<td>825</td>
<td>:to=&quot;productLink&quot;</td>
</tr>
<tr>
<td>926</td>
<td>data-testid=&quot;productLink&quot;</td>
</tr>
<tr>
<td>1027</td>
<td>&gt;</td>
</tr>
<tr>
<td>1128</td>
<td>&lt;div</td>
</tr>
<tr>
<td>12</td>
<td>-        class=&quot;product-<s>image</s> ~~relative ~~bg-cl-secondary&quot;</td>
</tr>
<tr>
<td>29</td>
<td>+        class=&quot;product-cover bg-cl-secondary&quot;</td>
</tr>
<tr>
<td>1330</td>
<td>:class=&quot;[{ sale: labelsActive &amp;&amp; isOnSale }, { new: labelsActive &amp;&amp; isNew }]&quot;</td>
</tr>
<tr>
<td>1431</td>
<td>&gt;</td>
</tr>
<tr>
<td>1532</td>
<td>&lt;product-image</td>
</tr>
<tr>
<td>16</td>
<td>-          class=&quot;product-<s>image__content</s>&quot;</td>
</tr>
<tr>
<td>33</td>
<td>+          class=&quot;product-cover__thumb&quot;</td>
</tr>
<tr>
<td>1734</td>
<td>:image=&quot;thumbnailObj&quot;</td>
</tr>
<tr>
<td>1835</td>
<td>:alt=&quot;product.name | htmlDecode&quot;</td>
</tr>
<tr>
<td>36</td>
<td>+          :calc-ratio=&quot;false&quot;</td>
</tr>
<tr>
<td>1937</td>
<td>data-testid=&quot;productImage&quot;</td>
</tr>
<tr>
<td>2038</td>
<td>/&gt;</td>
</tr>
<tr>
<td>2139</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -26,24 +44,18 @@</td>
</tr>
<tr>
<td>2644</td>
<td></td>
</tr>
<tr>
<td>2745</td>
<td>&lt;span</td>
</tr>
<tr>
<td>2846</td>
<td>class=&quot;price-original mr5 lh30 cl-secondary&quot;</td>
</tr>
<tr>
<td>29</td>
<td>-        v-if=&quot;product.special_price &amp;&amp; parseFloat(product.<s>originalPriceInclTax</s>) &gt; 0 &amp;&amp; !onlyImage&quot;</td>
</tr>
<tr>
<td>30</td>
<td>-      &gt;</td>
</tr>
<tr>
<td>47</td>
<td>+        v-if=&quot;product.special_price &amp;&amp; parseFloat(product.original_price_incl_tax) &gt; 0 &amp;&amp; !onlyImage&quot;</td>
</tr>
<tr>
<td>48</td>
<td>+      &gt;{{ product.original_price_incl_tax | price }}</span></td>
</tr>
<tr>
<td>31</td>
<td>-        {{ product.originalPriceInclTax | price }}</td>
</tr>
<tr>
<td>32</td>
<td>-      </span></td>
</tr>
<tr>
<td>3349</td>
<td></td>
</tr>
<tr>
<td>3450</td>
<td>&lt;span</td>
</tr>
<tr>
<td>3551</td>
<td>class=&quot;price-special lh30 cl-accent weight-700&quot;</td>
</tr>
<tr>
<td>3652</td>
<td>v-if=&quot;product.special_price &amp;&amp; parseFloat(product.special_price) &gt; 0 &amp;&amp; !onlyImage&quot;</td>
</tr>
<tr>
<td>37</td>
<td>-      &gt;</td>
</tr>
<tr>
<td>53</td>
<td>+      &gt;{{ product.price_incl_tax | price }}</span></td>
</tr>
<tr>
<td>38</td>
<td>-        {{ product.priceInclTax | price }}</td>
</tr>
<tr>
<td>39</td>
<td>-      </span></td>
</tr>
<tr>
<td>4054</td>
<td></td>
</tr>
<tr>
<td>4155</td>
<td>&lt;span</td>
</tr>
<tr>
<td>4256</td>
<td>class=&quot;lh30 cl-secondary&quot;</td>
</tr>
<tr>
<td>43</td>
<td>-        v-if=&quot;!product.special_price &amp;&amp; parseFloat(product.<s>priceInclTax</s>) &gt; 0 &amp;&amp; !onlyImage&quot;</td>
</tr>
<tr>
<td>44</td>
<td>-      &gt;</td>
</tr>
<tr>
<td>57</td>
<td>+        v-if=&quot;!product.special_price &amp;&amp; parseFloat(product.price_incl_tax) &gt; 0 &amp;&amp; !onlyImage&quot;</td>
</tr>
<tr>
<td>58</td>
<td>+      &gt;{{ product.price_incl_tax | price }}</span></td>
</tr>
<tr>
<td>45</td>
<td>-        {{ product.priceInclTax | price }}</td>
</tr>
<tr>
<td>46</td>
<td>-      </span></td>
</tr>
<tr>
<td>4759</td>
<td></router-link></td>
</tr>
<tr>
<td>4860</td>
<td></div></td>
</tr>
<tr>
<td>4961</td>
<td></template></td>
</tr>
<tr>
<td></td>
<td>@@ -53,11 +65,17 @@ import rootStore from '@vue-storefront/core/store'</td>
</tr>
<tr>
<td>5365</td>
<td>import { ProductTile } from '@vue-storefront/core/modules/catalog/components/ProductTile.ts'</td>
</tr>
<tr>
<td>5466</td>
<td>import config from 'config'</td>
</tr>
<tr>
<td>5567</td>
<td>import ProductImage from './ProductImage'</td>
</tr>
<tr>
<td>68</td>
<td>+ import AddToWishlist from 'theme/components/core/blocks/Wishlist/AddToWishlist'</td>
</tr>
<tr>
<td>69</td>
<td>+ import AddToCompare from 'theme/components/core/blocks/Compare/AddToCompare'</td>
</tr>
<tr>
<td>70</td>
<td>+ import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'</td>
</tr>
<tr>
<td>71</td>
<td>+ import { IsOnCompare } from '@vue-storefront/core/modules/compare/components/IsOnCompare'</td>
</tr>
<tr>
<td>5672</td>
<td></td>
</tr>
<tr>
<td>5773</td>
<td>export default {</td>
</tr>
<tr>
<td>58</td>
<td>-  mixins: [ProductTile],</td>
</tr>
<tr>
<td>74</td>
<td>+  mixins: [ProductTile, IsOnWishlist, IsOnCompare],</td>
</tr>
<tr>
<td>5975</td>
<td>components: {</td>
</tr>
<tr>
<td>60</td>
<td>-    ProductImage</td>
</tr>
<tr>
<td>76</td>
<td>+    ProductImage,</td>
</tr>
<tr>
<td>77</td>
<td>+    AddToWishlist,</td>
</tr>
<tr>
<td>78</td>
<td>+    AddToCompare</td>
</tr>
<tr>
<td>6179</td>
<td>},</td>
</tr>
<tr>
<td>6280</td>
<td>props: {</td>
</tr>
<tr>
<td>6381</td>
<td>labelsActive: {</td>
</tr>
<tr>
<td></td>
<td>@@ -75,6 +93,9 @@ export default {</td>
</tr>
<tr>
<td>7593</td>
<td>src: this.thumbnail,</td>
</tr>
<tr>
<td>7694</td>
<td>loading: this.thumbnail</td>
</tr>
<tr>
<td>7795</td>
<td>}</td>
</tr>
<tr>
<td>96</td>
<td>+    },</td>
</tr>
<tr>
<td>97</td>
<td>+    favoriteIcon () {</td>
</tr>
<tr>
<td>98</td>
<td>+      return this.isOnWishlist ? 'favorite' : 'favorite_border'</td>
</tr>
<tr>
<td>7899</td>
<td>}</td>
</tr>
<tr>
<td>79100</td>
<td>},</td>
</tr>
<tr>
<td>80101</td>
<td>methods: {</td>
</tr>
<tr>
<td></td>
<td>@@ -84,21 +105,24 @@ export default {</td>
</tr>
<tr>
<td>84105</td>
<td>}</td>
</tr>
<tr>
<td>85106</td>
<td>},</td>
</tr>
<tr>
<td>86107</td>
<td>visibilityChanged (isVisible, entry) {</td>
</tr>
<tr>
<td>87</td>
<td>-      if (<s>isVisible) {</s></td>
</tr>
<tr>
<td>88</td>
<td>-        <s>if</s> <s>(config.products.configurableChildrenStockPrefetchDynamic <s>&amp;&amp;</s> rootStore.products.filterUnavailableVariants) {</s></td>
</tr>
<tr>
<td>89</td>
<td>- ~~          const skus = [this~~.<s>product</s>.<s>sku]</s></td>
</tr>
<tr>
<td>90</td>
<td>- ~~          if (this~~.<s>product</s>.<s>type_id</s> <s>=== 'configurable' <s>&amp;&amp;</s> this.product.configurable_children &amp;&amp; this.product.configurable_children.length &gt; 0) {</s></td>
</tr>
<tr>
<td>91</td>
<td>- ~~            for (const confChild of ~~this.product.<s>configurable_children)</s> <s>{</s></td>
</tr>
<tr>
<td>92</td>
<td>- ~~              const cachedItem = rootStore~~.<s>state</s>.<s>stock.cache[confChild.id]</s></td>
</tr>
<tr>
<td>93</td>
<td>- ~~              if~~ <s>(typeof</s> <s>cachedItem === 'undefined' || cachedItem === null) {</s></td>
</tr>
<tr>
<td>94</td>
<td>- ~~                skus.push(confChild.sku~~)</td>
</tr>
<tr>
<td>95</td>
<td>- ~~              }~~</td>
</tr>
<tr>
<td>96</td>
<td>- ~~            }~~</td>
</tr>
<tr>
<td>97</td>
<td>- ~~            if~~ <s>(skus.length</s> <s>&gt;</s> <s>0) {</s></td>
</tr>
<tr>
<td>98</td>
<td>- ~~              rootStore.dispatch~~('<s>stock/list</s>'<s>,</s> <s>{</s> <s>skus:</s> <s>skus</s> <s>}</s>) <s>// store it in the cache</s></td>
</tr>
<tr>
<td>99</td>
<td>-            <s>}</s></td>
</tr>
<tr>
<td>108</td>
<td>+      if (</td>
</tr>
<tr>
<td>109</td>
<td>+        isVisible &amp;&amp;</td>
</tr>
<tr>
<td>110</td>
<td>+        config.products.configurableChildrenStockPrefetchDynamic &amp;&amp;</td>
</tr>
<tr>
<td>111</td>
<td>+        config.products.filterUnavailableVariants &amp;&amp;</td>
</tr>
<tr>
<td>112</td>
<td>+        this.product.type_id === 'configurable' &amp;&amp;</td>
</tr>
<tr>
<td>113</td>
<td>+        this.product.configurable_children &amp;&amp;</td>
</tr>
<tr>
<td>114</td>
<td>+        this.product.configurable_children.length &gt; 0</td>
</tr>
<tr>
<td>115</td>
<td>+      ) {</td>
</tr>
<tr>
<td>116</td>
<td>+        const skus = [this.product.sku]</td>
</tr>
<tr>
<td>117</td>
<td>+        for (const confChild of this.product.configurable_children) {</td>
</tr>
<tr>
<td>118</td>
<td>+          const cachedItem = rootStore.state.stock.cache[confChild.id]</td>
</tr>
<tr>
<td>119</td>
<td>+          if (typeof cachedItem === 'undefined' || cachedItem === null) {</td>
</tr>
<tr>
<td>120</td>
<td>+            skus.push(confChild.sku)</td>
</tr>
<tr>
<td>100121</td>
<td>}</td>
</tr>
<tr>
<td>101122</td>
<td>}</td>
</tr>
<tr>
<td>123</td>
<td>+        if (skus.length &gt; 0) {</td>
</tr>
<tr>
<td>124</td>
<td>+          rootStore.dispatch('stock/list', { skus: skus }) // store it in the cache</td>
</tr>
<tr>
<td>125</td>
<td>+        }</td>
</tr>
<tr>
<td>102126</td>
<td>}</td>
</tr>
<tr>
<td>103127</td>
<td>}</td>
</tr>
<tr>
<td>104128</td>
<td>},</td>
</tr>
<tr>
<td></td>
<td>@@ -121,9 +145,36 @@ $border-secondary: color(secondary, $colors-border);</td>
</tr>
<tr>
<td>121145</td>
<td>$color-white: color(white);</td>
</tr>
<tr>
<td>122146</td>
<td></td>
</tr>
<tr>
<td>123147</td>
<td>.product {</td>
</tr>
<tr>
<td>148</td>
<td>+  position: relative;</td>
</tr>
<tr>
<td>124149</td>
<td>@media (max-width: 767px) {</td>
</tr>
<tr>
<td>125150</td>
<td>padding-bottom: 10px;</td>
</tr>
<tr>
<td>126151</td>
<td>}</td>
</tr>
<tr>
<td>152</td>
<td>+  &amp;__icons {</td>
</tr>
<tr>
<td>153</td>
<td>+    position: absolute;</td>
</tr>
<tr>
<td>154</td>
<td>+    top: 0;</td>
</tr>
<tr>
<td>155</td>
<td>+    right: 0;</td>
</tr>
<tr>
<td>156</td>
<td>+    display: flex;</td>
</tr>
<tr>
<td>157</td>
<td>+    flex-direction: column;</td>
</tr>
<tr>
<td>158</td>
<td>+    padding-right: 20px;</td>
</tr>
<tr>
<td>159</td>
<td>+    padding-top: 10px;</td>
</tr>
<tr>
<td>160</td>
<td>+  }</td>
</tr>
<tr>
<td>161</td>
<td>+  &amp;__icon {</td>
</tr>
<tr>
<td>162</td>
<td>+    padding-top: 10px;</td>
</tr>
<tr>
<td>163</td>
<td>+    opacity: 0;</td>
</tr>
<tr>
<td>164</td>
<td>+    z-index: 2;</td>
</tr>
<tr>
<td>165</td>
<td>+    transition: 0.3s opacity $motion-main;</td>
</tr>
<tr>
<td>166</td>
<td>+    @media (max-width: 767px) {</td>
</tr>
<tr>
<td>167</td>
<td>+      opacity: 1;</td>
</tr>
<tr>
<td>168</td>
<td>+    }</td>
</tr>
<tr>
<td>169</td>
<td>+    &amp;--active {</td>
</tr>
<tr>
<td>170</td>
<td>+      opacity: 1;</td>
</tr>
<tr>
<td>171</td>
<td>+    }</td>
</tr>
<tr>
<td>172</td>
<td>+  }</td>
</tr>
<tr>
<td>173</td>
<td>+  &amp;:hover {</td>
</tr>
<tr>
<td>174</td>
<td>+    .product__icon {</td>
</tr>
<tr>
<td>175</td>
<td>+      opacity: 1;</td>
</tr>
<tr>
<td>176</td>
<td>+    }</td>
</tr>
<tr>
<td>177</td>
<td>+  }</td>
</tr>
<tr>
<td>127178</td>
<td>}</td>
</tr>
<tr>
<td>128179</td>
<td></td>
</tr>
<tr>
<td>129180</td>
<td>.price-original {</td>
</tr>
<tr>
<td></td>
<td>@@ -145,45 +196,42 @@ $color-white: color(white);</td>
</tr>
<tr>
<td>145196</td>
<td>font-size: 12px;</td>
</tr>
<tr>
<td>146197</td>
<td>}</td>
</tr>
<tr>
<td>147198</td>
<td></td>
</tr>
<tr>
<td>148</td>
<td>- .product-<s>image</s>{</td>
</tr>
<tr>
<td>199</td>
<td>+ .product-cover {</td>
</tr>
<tr>
<td>149200</td>
<td>overflow: hidden;</td>
</tr>
<tr>
<td>150</td>
<td>-  width:100%;</td>
</tr>
<tr>
<td>151</td>
<td>-  height: 100%;</td>
</tr>
<tr>
<td>152201</td>
<td>max-height: 300px;</td>
</tr>
<tr>
<td>153</td>
<td>-</td>
</tr>
<tr>
<td>154</td>
<td>- ~~  &amp;:hover{~~</td>
</tr>
<tr>
<td>155</td>
<td>-    <s>.product</s>-<s>image__content</s>{</td>
</tr>
<tr>
<td>156</td>
<td>-      <s>opacity</s>: <s>1</s>;</td>
</tr>
<tr>
<td>202</td>
<td>+  &amp;__thumb {</td>
</tr>
<tr>
<td>203</td>
<td>+    padding-bottom: calc(143.88% / (164.5 / 100));</td>
</tr>
<tr>
<td>204</td>
<td>+    @media screen and (min-width: 768px) {</td>
</tr>
<tr>
<td>205</td>
<td>+      padding-bottom: calc(250% / (276.5 / 100));</td>
</tr>
<tr>
<td>157</td>
<td>-      transform: scale(1.1);</td>
</tr>
<tr>
<td>158206</td>
<td>}</td>
</tr>
<tr>
<td>159</td>
<td>-    <s>&amp;.sale::after,</s></td>
</tr>
<tr>
<td>160</td>
<td>- ~~    &amp;.new::after{~~</td>
</tr>
<tr>
<td>207</td>
<td>+    @media screen and (min-width: 1024px) {</td>
</tr>
<tr>
<td>208</td>
<td>+      padding-bottom: calc(200% / (276.5 / 100));</td>
</tr>
<tr>
<td>161</td>
<td>-      opacity: .8;</td>
</tr>
<tr>
<td>162209</td>
<td>}</td>
</tr>
<tr>
<td>210</td>
<td>+    opacity: 0.8;</td>
</tr>
<tr>
<td>211</td>
<td>+    will-change: opacity, transform;</td>
</tr>
<tr>
<td>212</td>
<td>+    transition: 0.3s opacity $motion-main, 0.3s transform $motion-main;</td>
</tr>
<tr>
<td>163213</td>
<td>}</td>
</tr>
<tr>
<td>164</td>
<td>-  &amp;__content{</td>
</tr>
<tr>
<td>165214</td>
<td></td>
</tr>
<tr>
<td>166</td>
<td>- ~~    padding-bottom:~~ <s>calc(300%</s> <s>/</s> (<s>257</s> <s>/</s> <s>100));</s></td>
</tr>
<tr>
<td>167</td>
<td>-    <s>mix-blend-mode:</s> <s>darken;</s></td>
</tr>
<tr>
<td>168</td>
<td>- ~~    opacity:~~ <s>.8;</s></td>
</tr>
<tr>
<td>169</td>
<td>- ~~    transform~~: <s>scale(<s>1</s>)</s>;</td>
</tr>
<tr>
<td>170</td>
<td>- ~~    will-change~~: <s>transform</s>;</td>
</tr>
<tr>
<td>171</td>
<td>- ~~    transition: .3s opacity $motion-main, .3s transform $motion-main;~~</td>
</tr>
<tr>
<td>172</td>
<td>- ~~    @media (min-width: 768px) {~~</td>
</tr>
<tr>
<td>173</td>
<td>-      <s>padding-bottom:</s> <s>calc(208% / (168 / 100));</s></td>
</tr>
<tr>
<td>174</td>
<td>- ~~    }~~</td>
</tr>
<tr>
<td>175</td>
<td>- ~~    @media (min-width: 1200px) {~~</td>
</tr>
<tr>
<td>215</td>
<td>+  @media screen and (min-width: 768px) {</td>
</tr>
<tr>
<td>216</td>
<td>+    &amp;:hover {</td>
</tr>
<tr>
<td>217</td>
<td>+      .product-cover__thumb {</td>
</tr>
<tr>
<td>218</td>
<td>+        opacity: 1;</td>
</tr>
<tr>
<td>219</td>
<td>+        transform: scale(1.1);</td>
</tr>
<tr>
<td>220</td>
<td>+      }</td>
</tr>
<tr>
<td>221</td>
<td>+      &amp;.sale::after,</td>
</tr>
<tr>
<td>222</td>
<td>+      &amp;.new::after {</td>
</tr>
<tr>
<td>223</td>
<td>+        opacity: 0.8;</td>
</tr>
<tr>
<td>224</td>
<td>+      }</td>
</tr>
<tr>
<td>176</td>
<td>-      padding-bottom: calc(300% / (276 / 100));</td>
</tr>
<tr>
<td>177225</td>
<td>}</td>
</tr>
<tr>
<td>178226</td>
<td>}</td>
</tr>
<tr>
<td>179227</td>
<td></td>
</tr>
<tr>
<td>180</td>
<td>-  &amp;.sale{</td>
</tr>
<tr>
<td>228</td>
<td>+  &amp;.sale {</td>
</tr>
<tr>
<td>181229</td>
<td>&amp;::after {</td>
</tr>
<tr>
<td>182230</td>
<td>@extend %label;</td>
</tr>
<tr>
<td>183231</td>
<td>content: 'Sale';</td>
</tr>
<tr>
<td>184232</td>
<td>}</td>
</tr>
<tr>
<td>185233</td>
<td>}</td>
</tr>
<tr>
<td>186</td>
<td>-  &amp;.new{</td>
</tr>
<tr>
<td>234</td>
<td>+  &amp;.new {</td>
</tr>
<tr>
<td>187235</td>
<td>&amp;::after {</td>
</tr>
<tr>
<td>188236</td>
<td>@extend %label;</td>
</tr>
<tr>
<td>189237</td>
<td>content: 'New';</td>
</tr>
</tbody>
</table>
<h4 id="_51-尺寸选择器" tabindex="-1"><a class="header-anchor" href="#_51-尺寸选择器" aria-hidden="true">#</a> <a href="#_51-sizeselector">#</a>51.<em>尺寸选择器</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/SizeSelector.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/SizeSelector.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -4,19 +4,19 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>44</td>
<td>p0 bg-cl-primary brdr-1 brdr-cl-primary</td>
</tr>
<tr>
<td>55</td>
<td>brdr-square h5 cl-tertiary size-selector</td>
</tr>
<tr>
<td>66</td>
<td>&quot;</td>
</tr>
<tr>
<td>7</td>
<td>-    :class=&quot;{ active: <s>active</s> }&quot;</td>
</tr>
<tr>
<td>8</td>
<td>-    @click=&quot;<s>switchFilter</s>(<s>id</s>, <s>label</s>)&quot;</td>
</tr>
<tr>
<td>9</td>
<td>-    :aria-label=&quot;$t('Select size '<s>)</s> <s>+</s> label&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+    :class=&quot;{ active: isActive }&quot;</td>
</tr>
<tr>
<td>8</td>
<td>+    @click=&quot;$emit('change', variant)&quot;</td>
</tr>
<tr>
<td>9</td>
<td>+    :aria-label=&quot;$t('Select size {variant}', { variant: variant.label })&quot;</td>
</tr>
<tr>
<td>1010</td>
<td>&gt;</td>
</tr>
<tr>
<td>11</td>
<td>-    {{ label }}</td>
</tr>
<tr>
<td>11</td>
<td>+    {{ variant.label }}</td>
</tr>
<tr>
<td>1212</td>
<td></button></td>
</tr>
<tr>
<td>1313</td>
<td></template></td>
</tr>
<tr>
<td>1414</td>
<td></td>
</tr>
<tr>
<td>1515</td>
<td><script></td>
</tr>
<tr>
<td>16</td>
<td>- import <s>GenericSelector</s> from '<s>@vue-storefront</s>/<s>core</s>/<s>compatibility/components/GenericSelector</s>'</td>
</tr>
<tr>
<td>16</td>
<td>+ import filterMixin from 'theme/mixins/filterMixin.ts'</td>
</tr>
<tr>
<td>1717</td>
<td></td>
</tr>
<tr>
<td>1818</td>
<td>export default {</td>
</tr>
<tr>
<td>19</td>
<td>-  mixins: [<s>GenericSelector</s>]</td>
</tr>
<tr>
<td>19</td>
<td>+  mixins: [filterMixin]</td>
</tr>
<tr>
<td>2020</td>
<td>}</td>
</tr>
<tr>
<td>2121</td>
<td></script></td>
</tr>
</tbody>
</table>
<h4 id="_52-排序方式" tabindex="-1"><a class="header-anchor" href="#_52-排序方式" aria-hidden="true">#</a> <a href="#_52-sortby">#</a>52.<em>排序方式</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/SortBy.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/SortBy.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -9,8 +9,8 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>99</td>
<td><option selected="selected" disabled value="" v-if="!hasLabel"></td>
</tr>
<tr>
<td>1010</td>
<td>{{ $t('Sort By') }}</td>
</tr>
<tr>
<td>1111</td>
<td></option></td>
</tr>
<tr>
<td>12</td>
<td>-      &lt;option v-for=&quot;<s>(option,</s> ~~label) ~~in <s>sortByAttribute</s>&quot; :~~disabled=&quot;sortby === option&quot; :~~value=&quot;<s>option</s>&quot; :key=&quot;<s>option</s>&quot;&gt;</td>
</tr>
<tr>
<td>13</td>
<td>-        {{ $t(label) }}</td>
</tr>
<tr>
<td>12</td>
<td>+      <option v-for="variant in sortingVariants" :value="variant" :key="variant.id"></td>
</tr>
<tr>
<td>13</td>
<td>+        {{ $t(variant.label) }}</td>
</tr>
<tr>
<td>1414</td>
<td></option></td>
</tr>
<tr>
<td>1515</td>
<td></select></td>
</tr>
<tr>
<td>1616</td>
<td></div></td>
</tr>
<tr>
<td></td>
<td>@@ -18,6 +18,7 @@</td>
</tr>
<tr>
<td>1818</td>
<td></td>
</tr>
<tr>
<td>1919</td>
<td><script></td>
</tr>
<tr>
<td>2020</td>
<td>import SortBy from '@vue-storefront/core/compatibility/components/SortBy'</td>
</tr>
<tr>
<td>21</td>
<td>+ import { products } from 'config'</td>
</tr>
<tr>
<td>2122</td>
<td>export default {</td>
</tr>
<tr>
<td>2223</td>
<td>mixins: [SortBy],</td>
</tr>
<tr>
<td>2324</td>
<td>props: {</td>
</tr>
<tr>
<td></td>
<td>@@ -25,11 +26,24 @@ export default {</td>
</tr>
<tr>
<td>2526</td>
<td>type: Boolean,</td>
</tr>
<tr>
<td>2627</td>
<td>required: false,</td>
</tr>
<tr>
<td>2728</td>
<td>default: false</td>
</tr>
<tr>
<td>29</td>
<td>+    },</td>
</tr>
<tr>
<td>30</td>
<td>+    value: {</td>
</tr>
<tr>
<td>31</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>32</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>2833</td>
<td>}</td>
</tr>
<tr>
<td>2934</td>
<td>},</td>
</tr>
<tr>
<td>3035</td>
<td>data () {</td>
</tr>
<tr>
<td>3136</td>
<td>return {</td>
</tr>
<tr>
<td>32</td>
<td>-      sortby: <s>this.$store.state.config.products.defaultSortBy.attribute</s></td>
</tr>
<tr>
<td>37</td>
<td>+      sortby: null</td>
</tr>
<tr>
<td>38</td>
<td>+    }</td>
</tr>
<tr>
<td>39</td>
<td>+  },</td>
</tr>
<tr>
<td>40</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>41</td>
<td>+    value: {</td>
</tr>
<tr>
<td>42</td>
<td>+      handler () {</td>
</tr>
<tr>
<td>43</td>
<td>+        const defaultVariant = this.value &amp;&amp; this.value.length ? this.value : products.defaultSortBy.attribute</td>
</tr>
<tr>
<td>44</td>
<td>+        this.sortby = this.sortingVariants.find(variant =&gt; variant.id === defaultVariant)</td>
</tr>
<tr>
<td>45</td>
<td>+      },</td>
</tr>
<tr>
<td>46</td>
<td>+      immediate: true</td>
</tr>
<tr>
<td>3347</td>
<td>}</td>
</tr>
<tr>
<td>3448</td>
<td>}</td>
</tr>
<tr>
<td>3549</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_53-纺纱机" tabindex="-1"><a class="header-anchor" href="#_53-纺纱机" aria-hidden="true">#</a> <a href="#_53-spinner">#</a>53.<em>纺纱机</em></h4>
<ul>
<li>转到<code>./src/themes/degi/components/core/Spinner.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/core/Spinner.vueRENAMED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -0,0 +1,18 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ <template functional></td>
</tr>
<tr>
<td>2</td>
<td>+  <div class="spinner"></td>
</tr>
<tr>
<td>3</td>
<td>+    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="22px" height="22px" viewBox="0 0 128 128" xml:space="preserve"><rect x="0" y="0" width="100%" height="100%" fill="transparent" /><g transform="rotate(135 64 64)"><circle cx="16" cy="64" r="16" fill="#000000" fill-opacity="1" /><circle cx="16" cy="64" r="16" fill="#555555" fill-opacity="0.67" transform="rotate(45,64,64)" /><circle cx="16" cy="64" r="16" fill="#949494" fill-opacity="0.42" transform="rotate(90,64,64)" /><circle cx="16" cy="64" r="16" fill="#cccccc" fill-opacity="0.2" transform="rotate(135,64,64)" /><circle cx="16" cy="64" r="16" fill="#e1e1e1" fill-opacity="0.12" transform="rotate(180,64,64)" /><circle cx="16" cy="64" r="16" fill="#e1e1e1" fill-opacity="0.12" transform="rotate(225,64,64)" /><circle cx="16" cy="64" r="16" fill="#e1e1e1" fill-opacity="0.12" transform="rotate(270,64,64)" /><circle cx="16" cy="64" r="16" fill="#e1e1e1" fill-opacity="0.12" transform="rotate(315,64,64)" /><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite" /></g></svg></td>
</tr>
<tr>
<td>4</td>
<td>+  </div></td>
</tr>
<tr>
<td>5</td>
<td>+ </template></td>
</tr>
<tr>
<td>6</td>
<td>+</td>
</tr>
<tr>
<td>7</td>
<td>+ <script></td>
</tr>
<tr>
<td>8</td>
<td>+ export default {</td>
</tr>
<tr>
<td>9</td>
<td>+  name: 'Spinner',</td>
</tr>
<tr>
<td>10</td>
<td>+  functional: true</td>
</tr>
<tr>
<td>11</td>
<td>+ }</td>
</tr>
<tr>
<td>12</td>
<td>+ </script></td>
</tr>
<tr>
<td>13</td>
<td>+</td>
</tr>
<tr>
<td>14</td>
<td>+ <style lang="scss" scoped></td>
</tr>
<tr>
<td>15</td>
<td>+ .spinner {</td>
</tr>
<tr>
<td>16</td>
<td>+ padding: 0 15px;</td>
</tr>
<tr>
<td>17</td>
<td>+ }</td>
</tr>
<tr>
<td>18</td>
<td>+ </style></td>
</tr>
</tbody>
</table>
<p>现在，您已经完成了<code>core</code>组件部分。继续分道扬镳<code>theme</code>。</p>
<h4 id="_54-buttonfull-intheme" tabindex="-1"><a class="header-anchor" href="#_54-buttonfull-intheme" aria-hidden="true">#</a> <a href="#_54-buttonfull-in-theme">#</a>54. <em>ButtonFull</em> in<code>theme</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/ButtonFull.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/theme/ButtonFull.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,8 +1,8 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;component</td>
</tr>
<tr>
<td>3</td>
<td>-    :is=&quot;<s>link ? 'router-link' : 'button'</s>&quot;</td>
</tr>
<tr>
<td>3</td>
<td>+    :is=&quot;compontentType&quot;</td>
</tr>
<tr>
<td>44</td>
<td>:type=&quot;!link ? type : false&quot;</td>
</tr>
<tr>
<td>5</td>
<td>-    :to=&quot;<s>localizedRoute(link)</s>&quot;</td>
</tr>
<tr>
<td>5</td>
<td>+    :to=&quot;redirectionLink&quot;</td>
</tr>
<tr>
<td>66</td>
<td>class=&quot;no-outline button-full block brdr-none w-100 px10 py20 bg-cl-mine-shaft :bg-cl-th-secondary ripple weight-400 h4 cl-white sans-serif fs-medium&quot;</td>
</tr>
<tr>
<td>77</td>
<td>:class=&quot;{ 'no-underline pointer align-center border-box': link, 'disabled': disabled, 'button-disabled': disabled }&quot;</td>
</tr>
<tr>
<td>88</td>
<td>data-testid=&quot;subscribeSubmit&quot;</td>
</tr>
<tr>
<td></td>
<td>@@ -35,6 +35,14 @@ export default {</td>
</tr>
<tr>
<td>3535</td>
<td>required: false,</td>
</tr>
<tr>
<td>3636</td>
<td>default: false</td>
</tr>
<tr>
<td>3737</td>
<td>}</td>
</tr>
<tr>
<td>38</td>
<td>+  },</td>
</tr>
<tr>
<td>39</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>40</td>
<td>+    compontentType () {</td>
</tr>
<tr>
<td>41</td>
<td>+      return this.link ? 'router-link' : 'button'</td>
</tr>
<tr>
<td>42</td>
<td>+    },</td>
</tr>
<tr>
<td>43</td>
<td>+    redirectionLink () {</td>
</tr>
<tr>
<td>44</td>
<td>+      return this.link ? this.localizedRoute(this.link) : null</td>
</tr>
<tr>
<td>45</td>
<td>+    }</td>
</tr>
<tr>
<td>3846</td>
<td>}</td>
</tr>
<tr>
<td>3947</td>
<td>}</td>
</tr>
<tr>
<td>4048</td>
<td></script></td>
</tr>
</tbody>
</table>
<h4 id="_55-buttonoutline中theme" tabindex="-1"><a class="header-anchor" href="#_55-buttonoutline中theme" aria-hidden="true">#</a> <a href="#_55-buttonoutline-in-theme">#</a>55. <em>ButtonOutline</em>中<code>theme</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/ButtonOutline.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/theme/ButtonOutline.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,7 +1,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td>&lt;component</td>
</tr>
<tr>
<td>3</td>
<td>-    :is=&quot;<s>link ? 'router-link' : 'button'</s>&quot;</td>
</tr>
<tr>
<td>4</td>
<td>-    :to=&quot;<s>localizedRoute(link)</s>&quot;</td>
</tr>
<tr>
<td>3</td>
<td>+    :is=&quot;compontentType&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+    :to=&quot;redirectionLink&quot;</td>
</tr>
<tr>
<td>55</td>
<td>class=&quot;button-outline no-outline py15 bg-cl-transparent h4 no-underline sans-serif fs-medium&quot;</td>
</tr>
<tr>
<td>66</td>
<td>:class=&quot;{</td>
</tr>
<tr>
<td>77</td>
<td>light : color === 'light', 'brdr-white' : color === 'light', 'cl-white' : color === 'light',</td>
</tr>
<tr>
<td></td>
<td>@@ -30,6 +30,14 @@ export default {</td>
</tr>
<tr>
<td>3030</td>
<td>default: null,</td>
</tr>
<tr>
<td>3131</td>
<td>required: false</td>
</tr>
<tr>
<td>3232</td>
<td>}</td>
</tr>
<tr>
<td>33</td>
<td>+  },</td>
</tr>
<tr>
<td>34</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>35</td>
<td>+    compontentType () {</td>
</tr>
<tr>
<td>36</td>
<td>+      return this.link ? 'router-link' : 'button'</td>
</tr>
<tr>
<td>37</td>
<td>+    },</td>
</tr>
<tr>
<td>38</td>
<td>+    redirectionLink () {</td>
</tr>
<tr>
<td>39</td>
<td>+      return this.link ? this.localizedRoute(this.link) : null</td>
</tr>
<tr>
<td>40</td>
<td>+    }</td>
</tr>
<tr>
<td>3341</td>
<td>}</td>
</tr>
<tr>
<td>3442</td>
<td>}</td>
</tr>
<tr>
<td>3543</td>
<td></script></td>
</tr>
</tbody>
</table>
<h4 id="_56-webshare的中theme" tabindex="-1"><a class="header-anchor" href="#_56-webshare的中theme" aria-hidden="true">#</a> <a href="#_56-webshare-in-theme">#</a>56. <em>Webshare的</em>中<code>theme</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/WebShare.vue</code>并创建它，如下所示：</li>
</ul>
<p>src/themes/degi/components/theme/WebShare.vueRENAMED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -0,0 +1,53 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ <template></td>
</tr>
<tr>
<td>2</td>
<td>+  <no-ssr></td>
</tr>
<tr>
<td>3</td>
<td>+    <span v-if="isSupported" @click="share"></td>
</tr>
<tr>
<td>4</td>
<td>+      <slot></td>
</tr>
<tr>
<td>5</td>
<td>+        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg></td>
</tr>
<tr>
<td>6</td>
<td>+      </slot></td>
</tr>
<tr>
<td>7</td>
<td>+    </span></td>
</tr>
<tr>
<td>8</td>
<td>+  </no-ssr></td>
</tr>
<tr>
<td>9</td>
<td>+ </template></td>
</tr>
<tr>
<td>10</td>
<td>+</td>
</tr>
<tr>
<td>11</td>
<td>+ <script></td>
</tr>
<tr>
<td>12</td>
<td>+ import NoSSR from 'vue-no-ssr'</td>
</tr>
<tr>
<td>13</td>
<td>+ import { isServer } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>14</td>
<td>+</td>
</tr>
<tr>
<td>15</td>
<td>+ export default {</td>
</tr>
<tr>
<td>16</td>
<td>+  name: 'WebShare',</td>
</tr>
<tr>
<td>17</td>
<td>+  components: {</td>
</tr>
<tr>
<td>18</td>
<td>+    'no-ssr': NoSSR</td>
</tr>
<tr>
<td>19</td>
<td>+  },</td>
</tr>
<tr>
<td>20</td>
<td>+  props: {</td>
</tr>
<tr>
<td>21</td>
<td>+    title: {</td>
</tr>
<tr>
<td>22</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>23</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>24</td>
<td>+    },</td>
</tr>
<tr>
<td>25</td>
<td>+    text: {</td>
</tr>
<tr>
<td>26</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>27</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>28</td>
<td>+    },</td>
</tr>
<tr>
<td>29</td>
<td>+    url: {</td>
</tr>
<tr>
<td>30</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>31</td>
<td>+      default () {</td>
</tr>
<tr>
<td>32</td>
<td>+        return typeof window !== 'undefined' ? window.location.href : ''</td>
</tr>
<tr>
<td>33</td>
<td>+      }</td>
</tr>
<tr>
<td>34</td>
<td>+    }</td>
</tr>
<tr>
<td>35</td>
<td>+  },</td>
</tr>
<tr>
<td>36</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>37</td>
<td>+    isSupported () {</td>
</tr>
<tr>
<td>38</td>
<td>+      return !isServer &amp;&amp; navigator.share</td>
</tr>
<tr>
<td>39</td>
<td>+    }</td>
</tr>
<tr>
<td>40</td>
<td>+  },</td>
</tr>
<tr>
<td>41</td>
<td>+  methods: {</td>
</tr>
<tr>
<td>42</td>
<td>+    share () {</td>
</tr>
<tr>
<td>43</td>
<td>+      if (navigator.share) {</td>
</tr>
<tr>
<td>44</td>
<td>+        navigator.share({</td>
</tr>
<tr>
<td>45</td>
<td>+          title: this.title,</td>
</tr>
<tr>
<td>46</td>
<td>+          text: this.text,</td>
</tr>
<tr>
<td>47</td>
<td>+          url: this.url || window.location.href</td>
</tr>
<tr>
<td>48</td>
<td>+        })</td>
</tr>
<tr>
<td>49</td>
<td>+      }</td>
</tr>
<tr>
<td>50</td>
<td>+    }</td>
</tr>
<tr>
<td>51</td>
<td>+  }</td>
</tr>
<tr>
<td>52</td>
<td>+ }</td>
</tr>
<tr>
<td>53</td>
<td>+ </script></td>
</tr>
</tbody>
</table>
<h4 id="_57-asyncsidebar中theme-blocks" tabindex="-1"><a class="header-anchor" href="#_57-asyncsidebar中theme-blocks" aria-hidden="true">#</a> <a href="#_57-asyncsidebar-in-theme-blocks">#</a>57. <em>AsyncSidebar</em>中<code>theme</code> <code>blocks</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/blocks/AsyncSidebar/AsyncSidebar.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/theme/blocks/AsyncSidebar/AsyncSidebar.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -4,6 +4,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>44</td>
<td>class=&quot;mw-100 fixed cl-accent bg-cl-primary&quot;</td>
</tr>
<tr>
<td>55</td>
<td>:class=&quot;direction === 'left' ? 'left-sidebar' : direction === 'right' ? 'right-sidebar' : null &quot;</td>
</tr>
<tr>
<td>66</td>
<td>data-testid=&quot;sidebar&quot;</td>
</tr>
<tr>
<td>7</td>
<td>+      ref=&quot;sidebar&quot;</td>
</tr>
<tr>
<td>78</td>
<td>v-if=&quot;isOpen&quot;</td>
</tr>
<tr>
<td>89</td>
<td>&gt;</td>
</tr>
<tr>
<td>910</td>
<td><component :is="component" @close="$emit('close')" @reload="getComponent" /></td>
</tr>
<tr>
<td></td>
<td>@@ -14,6 +15,7 @@</td>
</tr>
<tr>
<td>1415</td>
<td><script></td>
</tr>
<tr>
<td>1516</td>
<td>import LoadingSpinner from 'theme/components/theme/blocks/AsyncSidebar/LoadingSpinner.vue'</td>
</tr>
<tr>
<td>1617</td>
<td>import LoadingError from 'theme/components/theme/blocks/AsyncSidebar/LoadingError.vue'</td>
</tr>
<tr>
<td>18</td>
<td>+ import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'</td>
</tr>
<tr>
<td>1719</td>
<td></td>
</tr>
<tr>
<td>1820</td>
<td>export default {</td>
</tr>
<tr>
<td>1921</td>
<td>props: {</td>
</tr>
<tr>
<td></td>
<td>@@ -39,6 +41,17 @@ export default {</td>
</tr>
<tr>
<td>3941</td>
<td>created () {</td>
</tr>
<tr>
<td>4042</td>
<td>this.getComponent()</td>
</tr>
<tr>
<td>4143</td>
<td>},</td>
</tr>
<tr>
<td>44</td>
<td>+  watch: {</td>
</tr>
<tr>
<td>45</td>
<td>+    isOpen (state) {</td>
</tr>
<tr>
<td>46</td>
<td>+      if (state) {</td>
</tr>
<tr>
<td>47</td>
<td>+        this.$nextTick(() =&gt; {</td>
</tr>
<tr>
<td>48</td>
<td>+          disableBodyScroll(this.$refs.sidebar)</td>
</tr>
<tr>
<td>49</td>
<td>+        })</td>
</tr>
<tr>
<td>50</td>
<td>+      } else {</td>
</tr>
<tr>
<td>51</td>
<td>+        clearAllBodyScrollLocks()</td>
</tr>
<tr>
<td>52</td>
<td>+      }</td>
</tr>
<tr>
<td>53</td>
<td>+    }</td>
</tr>
<tr>
<td>54</td>
<td>+  },</td>
</tr>
<tr>
<td>4255</td>
<td>methods: {</td>
</tr>
<tr>
<td>4356</td>
<td>getComponent () {</td>
</tr>
<tr>
<td>4457</td>
<td>this.component = () =&gt; ({</td>
</tr>
<tr>
<td></td>
<td>@@ -55,44 +68,45 @@ export default {</td>
</tr>
<tr>
<td>5568</td>
<td><style lang="scss" scoped></td>
</tr>
<tr>
<td>5669</td>
<td>@import &quot;~theme/css/animations/transitions&quot;;</td>
</tr>
<tr>
<td>5770</td>
<td></td>
</tr>
<tr>
<td>58</td>
<td>- ~~  ~~.slide-left-enter-active,</td>
</tr>
<tr>
<td>59</td>
<td>- ~~  ~~.slide-left-leave-active,</td>
</tr>
<tr>
<td>60</td>
<td>- ~~  ~~.slide-right-enter-active,</td>
</tr>
<tr>
<td>61</td>
<td>- ~~  ~~.slide-right-leave-active {</td>
</tr>
<tr>
<td>62</td>
<td>- ~~    ~~transition: transform .25s;</td>
</tr>
<tr>
<td>63</td>
<td>- ~~  ~~}</td>
</tr>
<tr>
<td>71</td>
<td>+ .slide-left-enter-active,</td>
</tr>
<tr>
<td>72</td>
<td>+ .slide-left-leave-active,</td>
</tr>
<tr>
<td>73</td>
<td>+ .slide-right-enter-active,</td>
</tr>
<tr>
<td>74</td>
<td>+ .slide-right-leave-active {</td>
</tr>
<tr>
<td>75</td>
<td>+  transition: transform .25s;</td>
</tr>
<tr>
<td>76</td>
<td>+ }</td>
</tr>
<tr>
<td>6477</td>
<td></td>
</tr>
<tr>
<td>65</td>
<td>- ~~  ~~.slide-left-enter,</td>
</tr>
<tr>
<td>66</td>
<td>- ~~  ~~.slide-left-leave-to {</td>
</tr>
<tr>
<td>67</td>
<td>- ~~    ~~transform: translateX(100%);</td>
</tr>
<tr>
<td>68</td>
<td>- ~~  ~~}</td>
</tr>
<tr>
<td>78</td>
<td>+ .slide-left-enter,</td>
</tr>
<tr>
<td>79</td>
<td>+ .slide-left-leave-to {</td>
</tr>
<tr>
<td>80</td>
<td>+  transform: translateX(100%);</td>
</tr>
<tr>
<td>81</td>
<td>+ }</td>
</tr>
<tr>
<td>6982</td>
<td></td>
</tr>
<tr>
<td>70</td>
<td>- ~~  ~~.slide-right-enter,</td>
</tr>
<tr>
<td>71</td>
<td>- ~~  ~~.slide-right-leave-to {</td>
</tr>
<tr>
<td>72</td>
<td>- ~~    ~~transform: translateX(-100%);</td>
</tr>
<tr>
<td>73</td>
<td>- ~~  ~~}</td>
</tr>
<tr>
<td>83</td>
<td>+ .slide-right-enter,</td>
</tr>
<tr>
<td>84</td>
<td>+ .slide-right-leave-to {</td>
</tr>
<tr>
<td>85</td>
<td>+  transform: translateX(-100%);</td>
</tr>
<tr>
<td>86</td>
<td>+ }</td>
</tr>
<tr>
<td>7487</td>
<td></td>
</tr>
<tr>
<td>75</td>
<td>- ~~  ~~.right-sidebar {</td>
</tr>
<tr>
<td>76</td>
<td>- ~~    ~~top: 0;</td>
</tr>
<tr>
<td>77</td>
<td>- ~~    ~~right: 0;</td>
</tr>
<tr>
<td>78</td>
<td>- ~~    ~~z-index: <s>3</s>;</td>
</tr>
<tr>
<td>79</td>
<td>- ~~    ~~height: 100%;</td>
</tr>
<tr>
<td>80</td>
<td>- ~~    ~~width: 800px;</td>
</tr>
<tr>
<td>81</td>
<td>- ~~    ~~min-width: 320px;</td>
</tr>
<tr>
<td>82</td>
<td>- ~~    ~~overflow-y: auto;</td>
</tr>
<tr>
<td>83</td>
<td>- ~~    ~~overflow-x: hidden;</td>
</tr>
<tr>
<td>84</td>
<td>- ~~    ~~-webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>85</td>
<td>- ~~  ~~}</td>
</tr>
<tr>
<td>88</td>
<td>+ .right-sidebar {</td>
</tr>
<tr>
<td>89</td>
<td>+  top: 0;</td>
</tr>
<tr>
<td>90</td>
<td>+  right: 0;</td>
</tr>
<tr>
<td>91</td>
<td>+  z-index: 4;</td>
</tr>
<tr>
<td>92</td>
<td>+  height: 100%;</td>
</tr>
<tr>
<td>93</td>
<td>+  width: 800px;</td>
</tr>
<tr>
<td>94</td>
<td>+  min-width: 320px;</td>
</tr>
<tr>
<td>95</td>
<td>+  overflow-y: auto;</td>
</tr>
<tr>
<td>96</td>
<td>+  overflow-x: hidden;</td>
</tr>
<tr>
<td>97</td>
<td>+  -webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>98</td>
<td>+ }</td>
</tr>
<tr>
<td>99</td>
<td>+</td>
</tr>
<tr>
<td>100</td>
<td>+ .left-sidebar{</td>
</tr>
<tr>
<td>101</td>
<td>+  height: 100vh;</td>
</tr>
<tr>
<td>102</td>
<td>+  width: 350px;</td>
</tr>
<tr>
<td>103</td>
<td>+  top: 0;</td>
</tr>
<tr>
<td>104</td>
<td>+  left: 0;</td>
</tr>
<tr>
<td>105</td>
<td>+  overflow: hidden;</td>
</tr>
<tr>
<td>106</td>
<td>+  overflow-y: auto;</td>
</tr>
<tr>
<td>107</td>
<td>+  -webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>108</td>
<td>+  z-index: 4;</td>
</tr>
<tr>
<td>86109</td>
<td></td>
</tr>
<tr>
<td>87</td>
<td>-  .left-sidebar{</td>
</tr>
<tr>
<td>88</td>
<td>-    height: 100vh;</td>
</tr>
<tr>
<td>89</td>
<td>-    width: 350px;</td>
</tr>
<tr>
<td>90</td>
<td>-    top: 0;</td>
</tr>
<tr>
<td>91</td>
<td>-    left: 0;</td>
</tr>
<tr>
<td>92</td>
<td>-    overflow: hidden;</td>
</tr>
<tr>
<td>93</td>
<td>-    overflow-y: auto;</td>
</tr>
<tr>
<td>94</td>
<td>-    z-index: 3;</td>
</tr>
<tr>
<td>95</td>
<td>-    -webkit-overflow-scrolling: touch;</td>
</tr>
<tr>
<td>96110</td>
<td>@media (max-width: 767px) {</td>
</tr>
<tr>
<td>97111</td>
<td>width: 100vh;</td>
</tr>
<tr>
<td>98112</td>
<td>}</td>
</tr>
</tbody>
</table>
<h4 id="_58-onboard-in-theme-blocks" tabindex="-1"><a class="header-anchor" href="#_58-onboard-in-theme-blocks" aria-hidden="true">#</a> <a href="#_58-onboard-in-theme-blocks">#</a>58. <em>Onboard</em> in <code>theme</code> <code>blocks</code></h4>
<ul>
<li>Go to <code>./src/themes/degi/components/theme/blocks/Home/Onboard.vue</code> and fix it as follows :</li>
</ul>
<p>src/themes/degi/components/theme/blocks/Home/Onboard.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -2,7 +2,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td><modal name="modal-onboard" class="modal-onboard"></td>
</tr>
<tr>
<td>33</td>
<td><div class="content relative flex middle-xs"></td>
</tr>
<tr>
<td>44</td>
<td><i slot="close" class="modal-close material-icons p15 cl-bg-tertiary" @click="close">close</i></td>
</tr>
<tr>
<td>5</td>
<td>-      <img src="/assets/logo.svg" alt="~~Vuestore~~" class="logo"></td>
</tr>
<tr>
<td>5</td>
<td>+      <img src="/assets/logo.svg" :alt="$t(defaultTitle)" class="logo"></td>
</tr>
<tr>
<td>66</td>
<td></td>
</tr>
<tr>
<td>77</td>
<td><div class="copy align-center cl-secondary"></td>
</tr>
<tr>
<td>88</td>
<td><p class="h1"></td>
</tr>
<tr>
<td></td>
<td>@@ -38,7 +38,16 @@</td>
</tr>
<tr>
<td>3838</td>
<td></template></td>
</tr>
<tr>
<td>3939</td>
<td><script></td>
</tr>
<tr>
<td>4040</td>
<td>import Modal from 'theme/components/core/Modal.vue'</td>
</tr>
<tr>
<td>41</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>42</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>43</td>
<td>+</td>
</tr>
<tr>
<td>4144</td>
<td>export default {</td>
</tr>
<tr>
<td>45</td>
<td>+  data () {</td>
</tr>
<tr>
<td>46</td>
<td>+    const storeView = currentStoreView()</td>
</tr>
<tr>
<td>47</td>
<td>+    return {</td>
</tr>
<tr>
<td>48</td>
<td>+      defaultTitle: storeView.seo.defaultTitle ? storeView.seo.defaultTitle : config.seo.defaultTitle</td>
</tr>
<tr>
<td>49</td>
<td>+    }</td>
</tr>
<tr>
<td>50</td>
<td>+  },</td>
</tr>
<tr>
<td>4251</td>
<td>components: {</td>
</tr>
<tr>
<td>4352</td>
<td>Modal</td>
</tr>
<tr>
<td>4453</td>
<td>},</td>
</tr>
</tbody>
</table>
<h4 id="_59-inspirationtile在theme-blocks" tabindex="-1"><a class="header-anchor" href="#_59-inspirationtile在theme-blocks" aria-hidden="true">#</a> <a href="#_59-inspirationtile-in-theme-blocks">#</a>59. <em>InspirationTile</em>在<code>theme</code> <code>blocks</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/blocks/Inspirations/InspirationTile.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/theme/blocks/Inspirations/InspirationTile.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -1,7 +1,7 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td><template></td>
</tr>
<tr>
<td>22</td>
<td><div class="inspiration-tile w-100"></td>
</tr>
<tr>
<td>33</td>
<td>&lt;router-link</td>
</tr>
<tr>
<td>4</td>
<td>-      :to=&quot;localizedRoute({ name: product.type_id + '-product', <s>fullPath</s>: product.url_path, params: { parentSku: product.sku, slug: product.slug }})&quot;</td>
</tr>
<tr>
<td>4</td>
<td>+      :to=&quot;localizedRoute({ name: product.type_id + '-product', path: product.url_path, params: { parentSku: product.sku, slug: product.slug }})&quot;</td>
</tr>
<tr>
<td>55</td>
<td>&gt;</td>
</tr>
<tr>
<td>66</td>
<td><div class="product-image bg-cl-secondary"></td>
</tr>
<tr>
<td>77</td>
<td><img :src="thumbnail" class="product-thumbnail"></td>
</tr>
</tbody>
</table>
<h4 id="_60-reviewslist在theme-blocks" tabindex="-1"><a class="header-anchor" href="#_60-reviewslist在theme-blocks" aria-hidden="true">#</a> <a href="#_60-reviewslist-in-theme-blocks">#</a>60. <em>ReviewsList</em>在<code>theme</code> <code>blocks</code></h4>
<ul>
<li>转到<code>./src/themes/degi/components/theme/blocks/Reviews/ReviewsList.vue</code>并按如下方式修复它：</li>
</ul>
<p>src/themes/degi/components/theme/blocks/Reviews/ReviewsList.vueCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -35,7 +35,6 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>3535</td>
<td></template></td>
</tr>
<tr>
<td>3636</td>
<td></td>
</tr>
<tr>
<td>3737</td>
<td><script></td>
</tr>
<tr>
<td>38</td>
<td>- import Product from '@vue-storefront/core/pages/Product'</td>
</tr>
<tr>
<td>3938</td>
<td></td>
</tr>
<tr>
<td>4039</td>
<td>export default {</td>
</tr>
<tr>
<td>4140</td>
<td>props: {</td>
</tr>
<tr>
<td></td>
<td>@@ -46,7 +45,11 @@ export default {</td>
</tr>
<tr>
<td>4645</td>
<td>},</td>
</tr>
<tr>
<td>4746</td>
<td>items: {</td>
</tr>
<tr>
<td>4847</td>
<td>type: Array,</td>
</tr>
<tr>
<td>49</td>
<td>-      <s>required</s>: <s>true</s></td>
</tr>
<tr>
<td>48</td>
<td>+      default: () =&gt; []</td>
</tr>
<tr>
<td>49</td>
<td>+    },</td>
</tr>
<tr>
<td>50</td>
<td>+    productName: {</td>
</tr>
<tr>
<td>51</td>
<td>+      type: String,</td>
</tr>
<tr>
<td>52</td>
<td>+      default: ''</td>
</tr>
<tr>
<td>5053</td>
<td>}</td>
</tr>
<tr>
<td>5154</td>
<td>},</td>
</tr>
<tr>
<td>5255</td>
<td>data () {</td>
</tr>
<tr>
<td></td>
<td>@@ -54,7 +57,6 @@ export default {</td>
</tr>
<tr>
<td>5457</td>
<td>currentPage: 1</td>
</tr>
<tr>
<td>5558</td>
<td>}</td>
</tr>
<tr>
<td>5659</td>
<td>},</td>
</tr>
<tr>
<td>57</td>
<td>-  mixins: [Product],</td>
</tr>
<tr>
<td>5860</td>
<td>computed: {</td>
</tr>
<tr>
<td>5961</td>
<td>itemsPerPage () {</td>
</tr>
<tr>
<td>6062</td>
<td>let start = ((this.currentPage - 1) * this.perPage)</td>
</tr>
</tbody>
</table>
<p><code>theme</code>到目前为止，已经涵盖了与特定相关的所有内容，现在是处理其他文件的时候了。</p>
<h4 id="_61-帮手" tabindex="-1"><a class="header-anchor" href="#_61-帮手" aria-hidden="true">#</a> <a href="#_61-helpers">#</a>61.<em>帮手</em></h4>
<ul>
<li>转到<code>./src/themes/degi/helpers/index.ts</code>并创建它，如下所示：</li>
</ul>
<p>src/themes/degi/helpers/index.tsRENAMED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -0,0 +1,9 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ import config from 'config'</td>
</tr>
<tr>
<td>2</td>
<td>+ import { currentStoreView } from '@vue-storefront/core/lib/multistore'</td>
</tr>
<tr>
<td>3</td>
<td>+</td>
</tr>
<tr>
<td>4</td>
<td>+ export function getPathForStaticPage (path: string) {</td>
</tr>
<tr>
<td>5</td>
<td>+  const { storeCode } = currentStoreView()</td>
</tr>
<tr>
<td>6</td>
<td>+  const isStoreCodeEquals = storeCode === config.defaultStoreCode</td>
</tr>
<tr>
<td>7</td>
<td>+</td>
</tr>
<tr>
<td>8</td>
<td>+  return isStoreCodeEquals ? <code>/i${path}</code> : path</td>
</tr>
<tr>
<td>9</td>
<td>+ }</td>
</tr>
</tbody>
</table>
<h4 id="_61-index-js" tabindex="-1"><a class="header-anchor" href="#_61-index-js" aria-hidden="true">#</a> <a href="#_61-index-js">#</a>61. <em>index.js</em></h4>
<ul>
<li>Go to <code>./src/themes/degi/index.js</code> and fix it as follows :</li>
</ul>
<p>src/themes/degi/index.jsCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -4,8 +4,14 @@ import routes from './router'</th>
</tr>
</thead>
<tbody>
<tr>
<td>44</td>
<td>import Vue from 'vue'</td>
</tr>
<tr>
<td>55</td>
<td>import VueProgressBar from 'vue-progressbar'</td>
</tr>
<tr>
<td>66</td>
<td>import '@vue-storefront/core/lib/passive-listeners'</td>
</tr>
<tr>
<td>7</td>
<td>- import { RouterManager } from '@vue-storefront/core/lib/router-manager'</td>
</tr>
<tr>
<td>87</td>
<td>import { once } from '@vue-storefront/core/helpers'</td>
</tr>
<tr>
<td>8</td>
<td>+ import { module as cartModule } from './store/cart'</td>
</tr>
<tr>
<td>9</td>
<td>+</td>
</tr>
<tr>
<td>10</td>
<td>+ import { claimsStore } from 'theme/store/claims'</td>
</tr>
<tr>
<td>11</td>
<td>+ import { homepageStore } from 'theme/store/homepage'</td>
</tr>
<tr>
<td>12</td>
<td>+ import { uiStore } from 'theme/store/ui'</td>
</tr>
<tr>
<td>13</td>
<td>+ import { promotedStore } from 'theme/store/promoted-offers'</td>
</tr>
<tr>
<td>14</td>
<td>+ import { StorageManager } from '@vue-storefront/core/lib/storage-manager'</td>
</tr>
<tr>
<td>915</td>
<td></td>
</tr>
<tr>
<td>1016</td>
<td>once('<strong>VUE_EXTEND_DROPPOINT_VPB</strong>', () =&gt; {</td>
</tr>
<tr>
<td>1117</td>
<td>Vue.use(VueProgressBar)</td>
</tr>
<tr>
<td></td>
<td>@@ -13,12 +19,22 @@ once('<strong>VUE_EXTEND_DROPPOINT_VPB</strong>', () =&gt; {</td>
</tr>
<tr>
<td>1319</td>
<td></td>
</tr>
<tr>
<td>1420</td>
<td>const themeEntry = App</td>
</tr>
<tr>
<td>1521</td>
<td>function initTheme (app, router, store, config, ssrContext) {</td>
</tr>
<tr>
<td>16</td>
<td>-  <s>// if youre</s>'~~ runing multistore setup this is copying the routed above adding the ~~'<s>storeCode'</s> <s>prefix to the urls and the names of the routes</s></td>
</tr>
<tr>
<td>17</td>
<td>-  // <s>You</s> <s>can</s> <s>do</s> <s>it</s> <s>on</s> <s>your</s> <s>own</s> <s>and</s> <s>then</s> <s>be</s> <s>able</s> <s>to</s> <s>customize</s> <s>the</s> <s>components</s> <s>used</s> <s>for</s> <s>example</s> <s>for</s> <s>German</s> <s>storeView</s> <s>checkout</s></td>
</tr>
<tr>
<td>18</td>
<td>-  // <s>To</s> <s>do</s> <s>so</s> <s>please</s> <s>execlude</s> <s>the</s> <s>desired</s> <s>storeView from <s>the config</s>.storeViews.mapStoreUrlsFor</s> <s>and</s> <s>map</s> the <s>urls</s> <s>by Your own like:</s></td>
</tr>
<tr>
<td>19</td>
<td>-  // <s>{</s> name: 'de-checkout', path: '/checkout'<s>, component: CheckoutCustomized },</s></td>
</tr>
<tr>
<td>20</td>
<td>-  <s>setupMultistoreRoutes(config,</s> <s>router,</s> routes~~)~~</td>
</tr>
<tr>
<td>21</td>
<td>-  ~~RouterManager.addRoutes(~~routes, <s>router)</s></td>
</tr>
<tr>
<td>22</td>
<td>+  store.registerModule('themeCart', cartModule)</td>
</tr>
<tr>
<td>23</td>
<td>+  // Register theme routes for the current store. In a single store setup this will add routes exactly as they are in the router definition file '[theme]/router/index.js'</td>
</tr>
<tr>
<td>24</td>
<td>+  // In a multistore setup, it depends on the config setting 'appendStoreCode' for the current store</td>
</tr>
<tr>
<td>25</td>
<td>+  // - true = the store code will be added to the front of all routes, e.g. name: 'de-checkout', path: '/de/checkout'</td>
</tr>
<tr>
<td>26</td>
<td>+  // - false = the store code will not be added. In this case you need to define custom routes for each of your stores</td>
</tr>
<tr>
<td>27</td>
<td>+  // You can also define custom routes to use a different component, for example for German storeView checkout</td>
</tr>
<tr>
<td>28</td>
<td>+  // To do so, exclude the desired storeView from the config.storeViews.mapStoreUrlsFor, set appendStoreCode = false, and map all the urls by your own like:</td>
</tr>
<tr>
<td>29</td>
<td>+  // { name: 'de-checkout', path: '/checkout', component: CheckoutCustomized }</td>
</tr>
<tr>
<td>30</td>
<td>+  // The 4th parameter is the route priority - a higher number will ensure the theme routes override any module routes. The default is 0.</td>
</tr>
<tr>
<td>31</td>
<td>+  setupMultistoreRoutes(config, router, routes, 10)</td>
</tr>
<tr>
<td>32</td>
<td>+</td>
</tr>
<tr>
<td>33</td>
<td>+  StorageManager.init('claims');</td>
</tr>
<tr>
<td>34</td>
<td>+  store.registerModule('claims', claimsStore);</td>
</tr>
<tr>
<td>35</td>
<td>+  store.registerModule('homepage', homepageStore);</td>
</tr>
<tr>
<td>36</td>
<td>+  store.registerModule('ui', uiStore);</td>
</tr>
<tr>
<td>37</td>
<td>+  store.registerModule('promoted', promotedStore);</td>
</tr>
<tr>
<td>2238</td>
<td>}</td>
</tr>
<tr>
<td>2339</td>
<td></td>
</tr>
<tr>
<td>2440</td>
<td>export {</td>
</tr>
</tbody>
</table>
<h4 id="_62-mixins-filtermixin-ts" tabindex="-1"><a class="header-anchor" href="#_62-mixins-filtermixin-ts" aria-hidden="true">#</a> <a href="#_62-mixins-filtermixin-ts">#</a>62. <em>mixins/filterMixin.ts</em></h4>
<ul>
<li>Go to <code>./src/themes/degi/mixins/filterMixin.ts</code> and create it as follows :</li>
</ul>
<p>src/themes/degi/mixins/filterMixin.tsRENAMED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -0,0 +1,22 @@</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>+ import toString from 'lodash-es/toString'</td>
</tr>
<tr>
<td>2</td>
<td>+</td>
</tr>
<tr>
<td>3</td>
<td>+ export default {</td>
</tr>
<tr>
<td>4</td>
<td>+  props: {</td>
</tr>
<tr>
<td>5</td>
<td>+    variant: {</td>
</tr>
<tr>
<td>6</td>
<td>+      type: Object,</td>
</tr>
<tr>
<td>7</td>
<td>+      default: () =&gt; ({})</td>
</tr>
<tr>
<td>8</td>
<td>+    },</td>
</tr>
<tr>
<td>9</td>
<td>+    selectedFilters: {</td>
</tr>
<tr>
<td>10</td>
<td>+      type: Object,</td>
</tr>
<tr>
<td>11</td>
<td>+      default: () =&gt; ({})</td>
</tr>
<tr>
<td>12</td>
<td>+    }</td>
</tr>
<tr>
<td>13</td>
<td>+  },</td>
</tr>
<tr>
<td>14</td>
<td>+  computed: {</td>
</tr>
<tr>
<td>15</td>
<td>+    isActive () {</td>
</tr>
<tr>
<td>16</td>
<td>+      const selectedVariantFilter = this.selectedFilters[this.variant.type]</td>
</tr>
<tr>
<td>17</td>
<td>+      if (!selectedVariantFilter) return false</td>
</tr>
<tr>
<td>18</td>
<td>+      if (Array.isArray(selectedVariantFilter)) return !!selectedVariantFilter.find(variant =&gt; variant.id === this.variant.id)</td>
</tr>
<tr>
<td>19</td>
<td>+      return toString(selectedVariantFilter.id) === toString(this.variant.id)</td>
</tr>
<tr>
<td>20</td>
<td>+    }</td>
</tr>
<tr>
<td>21</td>
<td>+  }</td>
</tr>
<tr>
<td>22</td>
<td>+ }</td>
</tr>
</tbody>
</table>
<h4 id="_63-router-index-js" tabindex="-1"><a class="header-anchor" href="#_63-router-index-js" aria-hidden="true">#</a> <a href="#_63-router-index-js">#</a>63. <em>router/index.js</em></h4>
<ul>
<li>Go to <code>./src/themes/degi/router/index.js</code> and fix it as follows :</li>
</ul>
<p>src/themes/degi/router/index.jsCHANGED</p>
<table>
<thead>
<tr>
<th></th>
<th>@@ -17,12 +17,12 @@ let routes = [</th>
</tr>
</thead>
<tbody>
<tr>
<td>1717</td>
<td>{ name: 'magazine', path: '/magazine', component: Static, props: {page: 'lorem', title: 'Magazine'} },</td>
</tr>
<tr>
<td>1818</td>
<td>{ name: 'sale', path: '/sale', component: Static, props: {page: 'lorem', title: 'Sale'} },</td>
</tr>
<tr>
<td>1919</td>
<td>{ name: 'order-tracking', path: '/order-tracking', component: Static, props: {page: 'lorem', title: 'Track my Order'} },</td>
</tr>
<tr>
<td>20</td>
<td>-  { name: 'my-account', path: '/my-account', component: MyAccount~~,~~ <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>21</td>
<td>-  { name: 'my-shipping-details', path: '/my-account/shipping-details', component: MyAccount, props: { activeBlock: 'MyShippingDetails' }<s>,</s> <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>22</td>
<td>-  { name: 'my-newsletter', path: '/my-account/newsletter', component: MyAccount, props: { activeBlock: 'MyNewsletter' }<s>,</s> <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>23</td>
<td>-  { name: 'my-orders', path: '/my-account/orders', component: MyAccount, props: { activeBlock: 'MyOrders' }<s>,</s> <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>24</td>
<td>-  { name: 'my-order', path: '/my-account/orders/:orderId', component: MyAccount, props: { activeBlock: 'MyOrder' }<s>,</s> <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>25</td>
<td>-  { name: 'my-recently-viewed', path: '/my-account/recently-viewed', component: MyAccount, props: { activeBlock: 'MyRecentlyViewed' }<s>,</s> <s>meta: { requiresAuth: true <s>}</s> }</s>,</td>
</tr>
<tr>
<td>20</td>
<td>+  { name: 'my-account', path: '/my-account', component: MyAccount },</td>
</tr>
<tr>
<td>21</td>
<td>+  { name: 'my-shipping-details', path: '/my-account/shipping-details', component: MyAccount, props: { activeBlock: 'MyShippingDetails' } },</td>
</tr>
<tr>
<td>22</td>
<td>+  { name: 'my-newsletter', path: '/my-account/newsletter', component: MyAccount, props: { activeBlock: 'MyNewsletter' } },</td>
</tr>
<tr>
<td>23</td>
<td>+  { name: 'my-orders', path: '/my-account/orders', component: MyAccount, props: { activeBlock: 'MyOrders' } },</td>
</tr>
<tr>
<td>24</td>
<td>+  { name: 'my-order', path: '/my-account/orders/:orderId', component: MyAccount, props: { activeBlock: 'MyOrder' } },</td>
</tr>
<tr>
<td>25</td>
<td>+  { name: 'my-recently-viewed', path: '/my-account/recently-viewed', component: MyAccount, props: { activeBlock: 'MyRecentlyViewed' } },</td>
</tr>
<tr>
<td>2626</td>
<td>{ name: 'about-us', path: '/about-us', component: Static, props: {page: 'lorem', title: 'About us'} },</td>
</tr>
<tr>
<td>2727</td>
<td>{ name: 'customer-service', path: '/customer-service', component: Static, props: {page: 'lorem', title: 'Customer service'} },</td>
</tr>
<tr>
<td>2828</td>
<td>{ name: 'store-locator', path: '/store-locator', component: Static, props: {page: 'lorem', title: 'Store locator'} },</td>
</tr>
<tr>
<td></td>
<td>@@ -33,7 +33,7 @@ let routes = [</td>
</tr>
<tr>
<td>3333</td>
<td>{ name: 'order-from-catalog', path: '/order-from-catalog', component: Static, props: {page: 'lorem', title: 'Order from catalog'} },</td>
</tr>
<tr>
<td>3434</td>
<td>{ name: 'contact', path: '/contact', component: Static, props: {page: 'contact', title: 'Contact'} },</td>
</tr>
<tr>
<td>3535</td>
<td>{ name: 'compare', path: '/compare', component: Compare, props: {title: 'Compare Products'} },</td>
</tr>
<tr>
<td>36</td>
<td>-  { name: 'page-not-found', path: '<s>/page-not-found</s>', component: PageNotFound },</td>
</tr>
<tr>
<td>36</td>
<td>+  { name: 'page-not-found', path: '*', component: PageNotFound },</td>
</tr>
<tr>
<td>3737</td>
<td>{ name: 'error', path: '/error', component: ErrorPage, meta: { layout: 'minimal' } },</td>
</tr>
<tr>
<td>3838</td>
<td>{ name: 'virtual-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with &quot;:sku?&quot; (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site</td>
</tr>
<tr>
<td>3939</td>
<td>{ name: 'bundle-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with &quot;:sku?&quot; (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site</td>
</tr>
</tbody>
</table>
<p>最后，我们完成了但是<code>i18n</code>，也就是说，关于复制<code>csv</code>文件。</p>
<h4 id="_64-资源-i18n" tabindex="-1"><a class="header-anchor" href="#_64-资源-i18n" aria-hidden="true">#</a> <a href="#_64-resource-i18n">#</a>64.<em>资源/i18n</em></h4>
<ul>
<li>转到<code>./src/themes/degi/resource/i18n</code>并复制它们，如下所示：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> -r themes/default/resource/i18n/* themes/degi/resource/i18n/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>请记住，如果您<code>i18n</code>在默认文件之外添加/修改/删除了文件并从主题中使用它们，您也应该对其进行处理。</p>
<h3 id="_3-窥视厨房-内部发生的事情-1" tabindex="-1"><a class="header-anchor" href="#_3-窥视厨房-内部发生的事情-1" aria-hidden="true">#</a> <a href="#_3-peep-into-the-kitchen-what-happens-internally-2">#</a>3.窥视厨房（内部发生的事情）</h3>
<p>我们已经对更改为 的内容进行了彻底审查<code>1.11</code>。</p>
<p>此升级配方仅处理<em>主题</em>部分，因为升级的<em>模块</em>和<em>核心</em>部分应以不同方式处理。当涉及到自定义<em>模块</em>时，仅复制/粘贴更新的部分并祈祷顺利升级并不容易，因为几乎不可能猜测<em>模块</em>开发人员的真实意图并使其与更新兼容，除非您是一个创造它的人。（<a href="https://docs.vuestorefront.io/v1/guide/cookbook/module.html" target="_blank" rel="noopener noreferrer">这里是<OutboundLink/></a>关于如何升级自定义模块）但是，<em>核心</em>部件应该可以通过复制/粘贴升级正常工作，因为它们首先应该保持不变。一旦<em>核心</em>部分已顺利升级，是时候升级<em>主题</em>部分了，这个秘籍就是关于如何做到这一点。</p>
<p>在<code>1.11</code>升级过程中，一个显着的变化是它如何处理整个应用程序中的数据。它利用了数据容器的<code>vuex</code> <em>存储</em>，在升级各种块中可以看出使用<code>mapGetters</code>.</p>
<p><em>Lazy Hydrate</em>还应用于产品列表和其他功能，并进行了改进以提高可读性和效率。</p>
<p><em>主题中</em>有许多补丁用于<em>核心</em>和<em>模块</em>升级以兼容引入的新概念<code>1.11</code>。</p>
<p>总的来说，主题升级对您来说可能是一个繁琐的过程，但为您的服务是值得的！</p>
<h3 id="_4-厨师的秘密-protip-1" tabindex="-1"><a class="header-anchor" href="#_4-厨师的秘密-protip-1" aria-hidden="true">#</a> <a href="#_4-chef-s-secret-protip-2">#</a>4. 厨师的秘密 (protip)</h3>
<ol>
<li>揭开<em>github</em>功能以发现代码更改</li>
</ol>
</template>
