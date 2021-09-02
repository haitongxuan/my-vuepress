# SSR 缓存

Vue Storefront 生成服务器端呈现的页面和版本以改进 SEO 结果。在最新版本的 Vue Storefront 中，我们为 Vue Storefront 和 Vue Storefront API 添加了输出缓存选项（默认禁用）以提高性能。

小心！

Vue Storefront API 使用与 Vue Storefront 完全相同的输出缓存机制，具有相同的配置和 CLI 界面。

输出缓存由以下`config/local.json`变量设置：

```json
    "server": {
      "host": "localhost",
      "port": 3000,
      "protocol": "http",
      "api": "api",
      "useOutputCacheTagging": true,
      "useOutputCache": true,
      "outputCacheDefaultTtl": 86400,
      "invalidateCacheKey": "aeSu7aip",
      "invalidateCacheForwarding": false,
      "invalidateCacheForwardUrl": "http://localhost:8080/invalidate?key=aeSu7aip&tag=",      
    },
    "redis": {
      "host": "localhost",
      "port": 6379,
      "db": 0
    },
```

## [#](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html#dynamic-tags)动态标签

动态标签配置选项：`useOutputCacheTagging`- 如果设置为`true`，Vue Storefront 将生成特殊的 HTTP 标头`X-VS-Cache-Tags`

```js
res.setHeader('X-VS-Cache-Tags', cacheTags);
```

缓存标签是根据特定页面上使用的产品和类别分配的。一个典型的`X-VS-Cache-Tags`标签如下所示：

```text
X-VS-Cache-Tags: P1852 P198 C20
```

如果您正在使用 Varnish 缓存，则标签可用于使其无效。[阅读更多 （打开新窗口）](https://www.drupal.org/docs/8/api/cache-api/cache-tags-varnish).

## [#](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html#redis)Redis

如果`useOutputCache`和`useOutputCacheTagging`选项都设置为`true`，则 Vue Storefront 使用存储在 Redis 中的输出缓存（在配置文件的 redis 部分配置）。缓存使用动态标签进行标记，可以使用特殊的 webhook 使其失效：

清除包含特定产品和类别的所有页面的示例调用：

```bash
curl http://localhost:3000/invalidate?tag=P1852,C20
```

清除所有产品、类别和主页的示例调用：

```bash
curl http://localhost:3000/invalidate?tag=product,category,home
```

小心！

我们强烈建议您不要在开发模式下使用输出缓存。通过使用它，您将无法在修改 Vue 组件等后刷新 UI 更改。

## [#](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html#cli-cache-clear)CLI 缓存清除

您可以通过运行以下命令手动清除特定标签的 Redis 缓存：

```bash
yarn run cache clear
yarn run cache clear -- --tag=product,category
yarn run cache clear -- --tag=P198
yarn run cache clear -- --tag=*
```

**注意：**上述命令在`vue-storefront-api`.

可用标签键的设置`config.server.availableCacheTags`（默认：`"product", "category", "home", "checkout", "page-not-found", "compare", "my-account", "P", "C"`）

**动态缓存失效：**[mage2vuestorefront 的](https://github.com/vuestorefront/mage2vuestorefront)最新版本[ （打开新窗口）](https://github.com/vuestorefront/mage2vuestorefront)支持输出缓存失效。输出缓存标有产品和类别 ID（特定页面上使用的产品和类别）。如果您设置以下 ENV 变量，Mage2vuestorefront 可以使产品和类别页面的缓存无效：

```bash
export VS_INVALIDATE_CACHE_URL=http://localhost:3000/invalidate?key=SECRETKEY&tag=
export VS_INVALIDATE_CACHE=1
```

小心！

所有官方 Vue Storefront 数据索引器，包括[magento1-vsbridge-indexer （打开新窗口）](https://github.com/vuestorefront/magento1-vsbridge-indexer)和[magento2-vsbridge-indexer （打开新窗口）](https://github.com/vuestorefront/magento2-vsbridge-indexer)支持缓存失效。如果在 API 和 Vue Storefront 前端应用程序中都启用了缓存，请确保您正确使用了`config.server.invalidateCacheForwardUrl`config 变量，因为索引器只能将缓存无效请求发送到一个 URL（前端或后端）并且应该转发。请检查 中的默认转发 URL`default.json`并将`key`参数调整为 的值`server.invalidateCacheKey`。

对于`magento1-vsbridge-indexer`并且`magento2-vsbridge-indexer`请在 Magento 管理面板中使用正确的设置。

安全注意事项

请注意，`key=SECRETKEY`应等于的`vue-storefront/config/local.json`值`server.invalidateCacheKey`

## [#](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html#adding-new-types-cache-tags)添加新类型/缓存标签

如果您要添加新类型的页面 ( `core/pages`) 和`config.server.useOutputCache=true`，您还应该扩展`config.server.availableCacheTags`新的通用标签，该标签将与与此新页面连接的 URL 连接。

这样做之后，请将该`asyncData`方法添加到您的页面代码中以分配正确的标签（`core/pages/Home.js`例如请看一下）：

```js
  asyncData ({ store, route, context }) { // this is for SSR purposes to prefetch data
    return new Promise((resolve, reject) => {
      if (context) context.output.cacheTags.add(`home`)
      Logger.log('Entering asyncData for Home root ' + new Date())()
      EventBus.$emitFilter('home-after-load', { store: store, route: route }).then((results) => {
        return resolve()
      }).catch((err) => {
        Logger.error(err)()
        reject(err)
      })
    })
  },
```

这一行：

```js
if (context) context.output.cacheTags.add(`home`);
```

负责分配具有当前 HTTP 请求输出的特定标签。

## [#](https://docs.vuestorefront.io/v1/guide/basics/ssr-cache.html#caching-strategies-on-production)生产缓存策略

当谈到生产缓存时，我们在*Vue Storefront*基础设施的每一层都做了一组缓存。我们的指南中有一个关于[*生产设置*](https://docs.vuestorefront.io/v1/guide/installation/production-setup.html)的部分。另外阅读[这篇文章 （打开新窗口）](https://medium.com/the-vue-storefront-journal/caching-on-production-10b00a5614f8)更多细节。

