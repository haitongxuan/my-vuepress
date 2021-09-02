# Vue Storefront 中的静态数据支持

在 Vue Storefront 中，我们可以使用 Magento 2 中的 CMS 静态块和 CMS 静态页面。

从 1.6 版开始，感谢@yuriboyko，我们有了更好的静态数据解决方案——它被添加到 Elasticsearch 数据库中，并使用 graphQL 查询，显示在店面上。

### [#](https://docs.vuestorefront.io/v1/guide/data/static-data.html#how-it-works)这个怎么运作？

数据与 Magento 2 在适配器级别上的 ElasticSearch 同步 `mage2vuestorefront`

同步基本 Magento 2 数据后，运行`node --harmony cli.js blocks`和`node --harmony cli.js pages`。确保你有`SnowdogApps/magento2-cms-api`，需要将 Magento 所见即所得数据和变量编译成 HTML 代码。不幸的是，这些小部件并未得到完全支持，因此请尽量避免使用它们。

静态数据使用 entityTypes 泵送到 ElasticSearch 数据库：

- `cms_block` 对于块
- `cms_page` 页面

使用新的 CMS 核心模块和两个组件（用于 CMS 块和用于 CMS 页面），我们可以轻松地在店面展示。查看示例 CMS 页面组件。

CMS 页面的路由设置在默认主题中：

```js
{ name: 'cms-page', path: '/i/:slug', component: CmsPage }])
```

因此，您`about_us`可以在以下位置找到带有标识符的 cms 页面（在 Magento 2 管理 URL 密钥中）：`<project_base_url>/i/about_us`

## [#](https://docs.vuestorefront.io/v1/guide/data/static-data.html#provide-your-own-static-data-for-vue-storefront)为 Vue Storefront 提供您自己的静态数据

您不必使用 Magento 2 来提供静态数据。您可以使用自己的数据抽取 ElasticSearch 数据库。

1. 添加具有适当类型的数据：

- `cms_block` 对于块
- `cms_page` 页面

1. 保留数据架构：

- 块：

```text
type CmsBlock @doc(description: "CMS block defines all CMS block information") {
    identifier: String @doc(description: "CMS block identifier")
    title: String @doc(description: "CMS block title")
    content: String @doc(description: "CMS block content")
    creation_time: String @doc(description: "Timestamp indicating when the CMS block was created")
    store_id: Int @doc(description: "Store Id of CMS block")
}
```

- 页数：

```text
type CmsPages @doc(description: "CMS page defines all CMS page information") {
    page_id: Int @doc(description: "Id of CMS page")
    title: String @doc(description: "CMS page title")
    identifier: String @doc(description: "URL key of CMS page")
    content: String @doc(description: "CMS page content")
    content_heading: String @doc(description: "CMS page content heading")
    meta_description: String @doc(description: "CMS page meta description")
    meta_keywords: String @doc(description: "CMS page meta keywords")
    store_id: Int @doc(description: "Store Id of CMS page")
}
```