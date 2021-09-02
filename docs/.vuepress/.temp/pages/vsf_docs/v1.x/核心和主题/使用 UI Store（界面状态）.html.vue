<template><h1 id="使用-ui-store-界面状态" tabindex="-1"><a class="header-anchor" href="#使用-ui-store-界面状态" aria-hidden="true">#</a> 使用 UI Store（界面状态）</h1>
<p>我们使用 Vuex 来存储应用程序界面状态。在<a href="https://github.com/vuestorefront/vue-storefront/blob/master/core/store/index.ts" target="_blank" rel="noopener noreferrer">存储文件 （打开新窗口）<OutboundLink/></a>包含有关不同 UI 部分状态的信息，例如覆盖可见性、愿望清单可见性等。当然，您不必在主题中使用它，但请记住，许多核心组件都在使用 UI店铺。</p>
<h2 id="状态对象" tabindex="-1"><a class="header-anchor" href="#状态对象" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/ui-store.html#state-object" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>状态对象</h2>
<ul>
<li><code>sidebar</code>-工具栏菜单可见/隐藏状态（更多内容<code>SidebarMenu.vue</code>）</li>
<li><code>microcart</code>- microcart可见/隐藏状态（更多内容<code>Microcart.vue</code>）</li>
<li><code>wishlist</code>-心愿可见/隐藏状态（更多内容<code>Wishlist.vue</code>）</li>
<li><code>searchpanel</code>-搜索面板的可视/隐藏状态（更多内容<code>SearchPanel.vue</code>）</li>
<li><code>newsletterPopup</code>- 时事通讯弹出窗口的可见/隐藏状态（<em>将从 Vuex 商店中删除</em>）</li>
<li><code>overlay</code>-覆盖的可见光/隐藏状态（更多内容<code>Overlay.vue</code>）</li>
<li><code>loader</code>-装载机可见/隐藏状态（更多内容<code>Loader.vue</code>）</li>
<li><code>authElem</code> - 要在 Auth 弹出窗口中显示的组件（将仅更改并移动到此组件）</li>
<li><code>checkoutMode</code> - 确定用户是否在结帐中——当您只想在结帐时更改某些 UI 元素或行为时很有用（例如隐藏页脚）</li>
<li><code>openMyAccount</code>- 确定是否将用户重定向到我的帐户页面。当用户单击侧栏中的“我的帐户”链接但必须先登录时使用。成功登录后，用户将自动重定向到我的帐户页面。</li>
</ul>
</template>
