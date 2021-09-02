# 使用 UI Store（界面状态）

我们使用 Vuex 来存储应用程序界面状态。在[存储文件 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/store/index.ts)包含有关不同 UI 部分状态的信息，例如覆盖可见性、愿望清单可见性等。当然，您不必在主题中使用它，但请记住，许多核心组件都在使用 UI店铺。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/ui-store.html#state-object)状态对象

- `sidebar`-工具栏菜单可见/隐藏状态（更多内容`SidebarMenu.vue`）
- `microcart`- microcart可见/隐藏状态（更多内容`Microcart.vue`）
- `wishlist`-心愿可见/隐藏状态（更多内容`Wishlist.vue`）
- `searchpanel`-搜索面板的可视/隐藏状态（更多内容`SearchPanel.vue`）
- `newsletterPopup`- 时事通讯弹出窗口的可见/隐藏状态（*将从 Vuex 商店中删除*）
- `overlay`-覆盖的可见光/隐藏状态（更多内容`Overlay.vue`）
- `loader`-装载机可见/隐藏状态（更多内容`Loader.vue`）
- `authElem` - 要在 Auth 弹出窗口中显示的组件（将仅更改并移动到此组件）
- `checkoutMode` - 确定用户是否在结帐中——当您只想在结帐时更改某些 UI 元素或行为时很有用（例如隐藏页脚）
- `openMyAccount`- 确定是否将用户重定向到我的帐户页面。当用户单击侧栏中的“我的帐户”链接但必须先登录时使用。成功登录后，用户将自动重定向到我的帐户页面。