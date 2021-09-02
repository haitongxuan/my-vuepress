# 自定义 URL 结构

默认情况下，Vue Storefront 使用非常严格的 URL 结构 - 其中每种类型的内容都带有“前缀”，例如：`/p/MH08/product-slug`或`/c/women-20`。从 Vue Storefront **1.9**开始，我们添加了`url`包含完全可定制的 url 调度程序的模块。

当`config.seo.useUrlDispatcher`设置为 true 时，`product.url_path`and`category.url_path`字段用作绝对 URL 地址（不再有`/c`和`/p`前缀）。检查最新的 [ `mage2vuestorefront`] 快照并重新导入您的产品以正确设置`url_path`字段。

例如，当`category.url_path`设置为`women/frauen-20`产品时，将在以下 URL 地址下可用：

`http://localhost:3000/women/frauen-20` `http://localhost:3000/de/women/frauen-20` ...

**请注意：**本`config.products.useShortCatalogUrls`应被设置为`false`才能有`urlDispatcher`正常工作。它可能会干扰 Url Dispatcher 机制。从 VS 1.10.rc1 开始，该`useShortCatalogUrls`选项已被删除。

## [#](https://docs.vuestorefront.io/v1/guide/basics/url.html#how-to-customize-the-mapping-mechanism)如何自定义映射机制

该`url`模块包含负责将内容与 URL 正确映射的 Vuex Store 操作。

默认情况下， [`url/mappingFallback` （打开新窗口）](https://github.com/pkarw/vue-storefront/blob/9847f0695df0b54774dceb3c381e64770fd5cfda/core/modules/url/store/actions.ts#L65)动作查询首先：`product/list`然后`category/list`动作检查所提供的`url_path`产品是否与任一类别的产品相关。

因为它是 Vuex 操作 - 您可能希望从您的自定义模块覆盖它以自定义映射逻辑（例如：通过使用[Magento2 URL 调度机制 （打开新窗口）](https://devdocs.magento.com/guides/v2.3/graphql/reference/url-resolver.html)）。

对于所有`product/list`Vuex 操作调用，都会调用`url/registerMapping`操作来注册每个特定产品或类别的映射。映射被缓存，`localStorage`因此它们也可以在离线模式下工作 + 一旦检索到产品/类别列表，就不需要任何额外的网络调用。

## [#](https://docs.vuestorefront.io/v1/guide/basics/url.html#custom-urls-for-cms-pages-and-other-content-types)CMS 页面和其他内容类型的自定义 URL

您可以对所有内容类型使用 Url Dispatcher 功能。您唯一需要更改的是自定义`url/mappingFallback`Vuex 操作以正确查询其他内容源。

## [#](https://docs.vuestorefront.io/v1/guide/basics/url.html#modules)模块

- [vsf-mapping-fallback （打开新窗口）](https://github.com/kodbruket/vsf-mapping-fallback)简化添加 URL 映射的过程