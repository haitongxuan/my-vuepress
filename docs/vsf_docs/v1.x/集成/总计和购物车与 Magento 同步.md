# 总计和购物车与 Magento 同步

Vue Storefront 架构的关键原则之一是完全可扩展性。通过不依赖 Magento 2/CMS API 性能，我们取得了非常好的性能结果。通过实施“分而治之”规则，我们使用 Elasticsearch 创建了目录的中间件和外部数据存储。

这是我们的第一个目标，但第二个目标是为业务提供完整的数据安全性和可靠性，这样我们就不会遇到库存和价格不同步或未应用折扣规则等情况。无论性能如何，它都会毁了生意😃

## [#](https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#cart-and-totals-sync)购物车和总计同步

这就是我们将直接购物车与 Magento 2 同步的原因。每当用户向购物车添加商品时，我们都会检查库存并将本地浏览器内购物车与 CMS 同步。

![这是动态请求架构](https://docs.vuestorefront.io/v1/assets/img/Vue-storefront-architecture-proxy-requests.c87b9d51.png)

在向后的方向上，我们总是在应用 Magento 购物车规则和折扣以向用户显示正确数据之后获得当前总数。实现这种同步是为了保持 Vue Storefront 平台无关。该`vue-storefront-api`层负责将特定于平台的 API 格式转换为 Vue Storefront 通用数据抽象。

![这就是购物车同步的工作原理](https://docs.vuestorefront.io/v1/assets/img/cart-sync.6d48833c.png)

如您所见，同步的工作方式类似于对以下内容的网络调用序列`vue-storefront-api`：

1. `pull`执行该方法以获取当前用户的 Magento 购物车。
2. 在客户端，逻辑检查哪些元素在客户端、服务器端是新的，哪些是删除的。
3. 在我们的例子中，服务器端不存在一个元素，因此我们调用了一种`update`方法将其添加到服务器购物车中。
4. 然后，我们调用`totals`以获取购物车的当前行值和一般总计。

## [#](https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#how-to-make-this-feature-work)如何使此功能工作

默认情况下，购物车和总计同步处于禁用状态。要使其工作，您只需要按照以下步骤操作：

1. 生成 Magento 2 API 访问。在我们的第一个教程中，有[关于如何执行此操作](https://docs.vuestorefront.io/v1/guide/installation/magento.html)的[说明](https://docs.vuestorefront.io/v1/guide/installation/magento.html)。
2. 使用上一步中的 OAuth 密钥正确配置`vue-storefront-api`数据层（它应该已本地安装在您的计算机/服务器上）。为此，您需要修改`conf/local.json`授权数据并将其粘贴到该`magento2.api`部分：

```json
"magento2": {
		"url": "http://magento2.demo-1.xyz.com",
		"imgUrl": "http://localhost:8080/media/catalog/product",
		"magentoUserName": "",
		"magentoUserPassword": "",
		"httpUserName": "",
		"httpUserPassword": "",
		"api": {
			"url": "http://demo-magento2.vuestorefront.io/rest",
			"consumerKey": "byv3730rhoulpopcq64don8ukb8lf2gq",
			"consumerSecret": "u9q4fcobv7vfx9td80oupa6uhexc27rb",
			"accessToken": "040xx3qy7s0j28o3q0exrfop579cy20m",
			"accessTokenSecret": "7qunl3p505rubmr7u1ijt7odyialnih9"
		}
	},
```

请检查 [`conf/default.json` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/config/default.json)供参考。

1. 移至您的`vue-storefront`安装目录并修改`config/local.json`. 您需要更改`cart`部分以将`synchronize`和`synchronize_totals`标志切换为 true：

```json
   "cart": {
      "synchronize": false,
      "synchronize_totals": false,
      "create_endpoint": "http://localhost:8080/api/cart/create?token={{token}}",
      "updateitem_endpoint": "http://localhost:8080/api/cart/update?token={{token}}&cartId={{cartId}}",
      "deleteitem_endpoint": "http://localhost:8080/api/cart/delete?token={{token}}&cartId={{cartId}}",
      "pull_endpoint": "http://localhost:8080/api/cart/pull?token={{token}}&cartId={{cartId}}",
      "totals_endpoint": "http://localhost:8080/api/cart/totals?token={{token}}&cartId={{cartId}}",
      "paymentmethods_endpoint": "http://localhost:8080/api/cart/payment-methods?token={{token}}&cartId={{cartId}}",
      "shippingmethods_endpoint": "http://localhost:8080/api/cart/shipping-methods?token={{token}}&cartId={{cartId}}",
      "shippinginfo_endpoint": "http://localhost:8080/api/cart/shipping-information?token={{token}}&cartId={{cartId}}",
      "collecttotals_endpoint": "http://localhost:8080/api/cart/collect-totals?token={{token}}&cartId={{cartId}}"
    },
```

请检查 [`conf/default.json` （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/1302ed84561a514beb8c35e45ae1d0aa4dc9f74a/config/default.json#L8)供参考。

## [#](https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#prices-sync)价格同步

最后一个缺失的块是目录价格同步。使用称为动态价格的功能可以非常轻松地启用此功能。请查看[动态价格如何](https://docs.vuestorefront.io/v1/guide/integrations/direct-prices-sync.html)打开此功能。

## [#](https://docs.vuestorefront.io/v1/guide/integrations/totals-sync.html#order-sync)订单同步

Vue Storefront 的一项很酷的功能是排队订单同步。这意味着每当用户在应用程序中下订单时，我们都会将订单存储在本地浏览器缓存（indexedDb 实例）中，并在 Internet 连接可用时立即将其发送到服务器。

![订单在发送到服务器之前存储在本地](https://docs.vuestorefront.io/v1/assets/img/orders-collection.4c3351a2.png)

在服务器端，这`vue-storefront-api`是订单在返回 Magento 2 的途中经过的第一行。无论购物车是否同步（如上所述），订单都将转换为 Magento 2 对象。

服务器 API 将订单存储在由 [`order_2_magento` （打开新窗口）](https://github.com/vuestorefront/vue-storefront-api/blob/master/src/worker/order_to_magento2.js)工人进程。我们确实支持多种类型的订单：对于访客用户和已登录的订单，是否已同步购物车等。

这个过程不需要太多额外的配置：

1. 您必须在以下`config/local.json`文件中配置 Magento2 API 访问权限`vue-storefront-api`
2. 您必须在 Magento 集成的“权限”部分中将“订单”部分标记为“开”（[有关如何设置的参考，请参阅上一教程](https://docs.vuestorefront.io/v1/guide/installation/magento.html)）。
3. 在配置步骤之后您只需`yarn o2m`在您的`vue-storefront-api`目录中运行。

![这是设置成功后o2m的输出](https://docs.vuestorefront.io/v1/assets/img/o2m-output.790de781.png)