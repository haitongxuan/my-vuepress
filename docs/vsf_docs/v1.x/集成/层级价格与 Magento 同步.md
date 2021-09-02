# 层级价格与 Magento 同步

此功能允许您向用户显示最终价格，包括 Magento 的层级价格。它支持简单、可下载、可配置的捆绑和组产品。

要启用等级价格，请在

```json
  "usePriceTiers": true
```

要使用此功能，您还应该`config/local.json`在`vue-storefront-api`安装中进行修改：

```json
  "usePriceTiers": true
```