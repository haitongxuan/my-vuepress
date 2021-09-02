# 直接价格与 Magento 同步

您可能已经在我们的架构中注意到，我们正在将整个产品目录与我们的 Elasticsearch 数据存储同步。在行业中存在一些边缘情况，这种同步可能导致非无效价格和库存数量问题。

针对这些挑战，我们引入了一种特殊模式，允许 vue-storefront 直接从 CMS（Magento 或其他）下载价格（in）。要启用实时价格同步，请更改以下行`config/local.json`

```json
    "products": {
      "preventConfigurableChildrenDirectAccess": true,
      "alwaysSyncPlatformPricesOver": true,
      "clearPricesBeforePlatformSync": true,
      "waitForPlatformSync": false,
      "endpoint": "http://localhost:8080/api/product"
    },
```

这意味着每次 vue-storefront 从 Elasticsearch 下载产品提要时，它都会调用`vue-storefront-api`统一代理方法从 Magento 实时获取价格。

要使用此功能，您还应该`config/local.json`在`vue-storefront-api`安装中进行修改：

```json
	"tax": {
		"defaultCountry": "PL",
		"defaultRegion": "",
		"calculateServerSide": true,
		"alwaysSyncPlatformPricesOver": true
	  },
```

*重要提示*：要使用动态的Magento 2种价格同步后，应该恢复使用的数据库`yarn restore`中的`vue-storefront-api`或重新运行`mage2vuestorefront`的产品同步，因为“ID”字段已添加到`configurable_children`产品和它需要的价格同步。