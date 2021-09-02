# 多商店 Magento 2 支持

Vue Storefront 支持 Magento Multistore 安装

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#limitations-of-multistore-in-vue-storefront-1)Vue Storefront 1 中 Multistore 的限制

- 现在可以实现多域支持，但它需要对核心进行棘手的更改。它将在重构的 Multistore 中可用，该 Multistore 应在 1.13/1.14 中发布
- 目前不支持不同商店的不同主题。如果你想实现这一点 - 最简单的方法是使用不同的配置运行 2 个实例。如果您只想根据当前商店更改主题的一部分，那么您可以使用下面描述的助手轻松实现。
- 每个商店不支持多币种

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#multiwebsite-indexing)多网站索引

多网站支持从 Elasticsearch 索引开始。基本上，每个商店都有自己的 Elasticsearch 索引，应该使用[Magento2 VSBridge 索引器](https://github.com/vuestorefront/magento2-vsbridge-indexer)填充[ （打开新窗口）](https://github.com/vuestorefront/magento2-vsbridge-indexer)工具。

警告

有已弃用的旧节点索引器。你不应该`mage2vuestorefront`再在生产中使用了！使用它的唯一可接受的原因是从开发实例向本地 Elasticsearch 集群提供数据。

向本地 Elasticsearch 提供数据的最简单脚本：

```bash
export TIME_TO_EXIT=2000
export MAGENTO_CONSUMER_KEY=byv3730rhoulpopcq64don8ukb8lf2gq
export MAGENTO_CONSUMER_SECRET=u9q4fcobv7vfx9td80oupa6uhexc27rb
export MAGENTO_ACCESS_TOKEN=040xx3qy7s0j28o3q0exrfop579cy20m
export MAGENTO_ACCESS_TOKEN_SECRET=7qunl3p505rubmr7u1ijt7odyialnih9

echo 'German store - de'
export MAGENTO_URL=http://demo-magento2.vuestorefront.io/rest/de
export INDEX_NAME=vue_storefront_catalog_de

node --harmony cli.js categories --partitions=1 --removeNonExistient=true
node --harmony cli.js productcategories --partitions=1
node --harmony cli.js attributes --partitions=1 --removeNonExistient=true
node --harmony cli.js taxrule --partitions=1 --removeNonExistient=true
node --harmony cli.js products --partitions=1 --removeNonExistient=true

echo 'Italian store - it'
export MAGENTO_URL=http://demo-magento2.vuestorefront.io/rest/it
export INDEX_NAME=vue_storefront_catalog_it

node --harmony cli.js categories --partitions=1 --removeNonExistient=true
node --harmony cli.js productcategories --partitions=1
node --harmony cli.js attributes --partitions=1 --removeNonExistient=true
node --harmony cli.js taxrule --partitions=1 --removeNonExistient=true
node --harmony cli.js products --partitions=1 --removeNonExistient=true

echo 'Default store - in our case United States / en'
export MAGENTO_URL=http://demo-magento2.vuestorefront.io/rest
export INDEX_NAME=vue_storefront_catalog

node --harmony cli.js categories --partitions=1 --removeNonExistient=true
node --harmony cli.js productcategories --partitions=1
node --harmony cli.js attributes --partitions=1 --removeNonExistient=true
node --harmony cli.js taxrule --partitions=1 --removeNonExistient=true
node --harmony cli.js products --partitions=1 --removeNonExistient=true
```

如您所见，它只是添加到基本 Magento 2 REST API URL的**IT**或**DE**商店代码，然后将**INDEX_NAME**设置为专用索引名称。

结果，你应该得到：

- *vue_storefront_catalog_it* - 填充了“it”商店数据
- *vue_storefront_catalog_de* - 填充“de”商店数据
- *vue_storefront_catalog* - 填充“默认”商店数据

然后，要在 Vue Storefront 中使用这些索引，您应该使用`vue-storefront-api`db 工具为数据库模式建立索引（仅在使用 mage2vuestorefront 时使用！）：

```bash
yarn db rebuild -- --indexName=vue_storefront_catalog_it
yarn db rebuild -- --indexName=vue_storefront_catalog_de
yarn db rebuild -- --indexName=vue_storefront_catalog
```

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#vue-storefront-and-vue-storefront-api-configuration)Vue Storefront 和 Vue Storefront API 配置

在这一系列命令之后，您可以将可用的 ES 索引添加到您的`vue-storefront-api/config/local.json`：

```json
{
    "server": {
      "host": "localhost",
      "port": 8080
    },
	"esHost": "localhost:9200",
	"esIndexes": [
		"vue_storefront_catalog",
		"vue_storefront_catalog_de",
		"vue_storefront_catalog_it"
	],
	"availableStores": [
      "de",
      "it"
	],
// ...
```

最后一件事是更改`vue-storefront/config/local.json`以配置可用的 storeView。

```json
"storeViews": {
  "multistore": false,
  "mapStoreUrlsFor": ["de", "it"],
  "de": {
    "storeCode": "de",
    "storeId": 3,
    "name": "German Store",
    "url": "/de",
    "elasticsearch": {
      "host": "localhost:8080/api/catalog",
        "index": "vue_storefront_catalog_de"
    },
    "tax": {
      "defaultCountry": "DE",
      "defaultRegion": "",
      "sourcePriceIncludesTax": false,
      "calculateServerSide": true,
      "userGroupId": null,
      "useOnlyDefaultUserGroupId": false,
      "deprecatedPriceFieldsSupport": true,
      "finalPriceIncludesTax": false
    },
    "i18n": {
      "defaultCountry": "DE",
      "defaultLanguage": "DE",
      "availableLocale": [
        "de-DE"
      ],
      "defaultLocale": "de-DE",
      "currencyCode": "EUR",
      "currencySign": "€",
      "currencyDecimal": "",
      "currencyGroup": "",
      "fractionDigits": 2,
      "priceFormat": "{sign}{amount}",
      "dateFormat": "HH:mm D/M/YYYY",
      "fullCountryName": "Deutschland",
      "fullLanguageName": "German",
      "bundleAllStoreviewLanguages": false
    }
  },
  "it": {
    "storeCode": "it",
    "storeId": 4,
    "name": "Italian Store",
    "url": "/it",
    "elasticsearch": {
      "host": "localhost:8080/api/catalog",
      "index": "vue_storefront_catalog_it"
    },
    "tax": {
      "defaultCountry": "IT",
      "defaultRegion": "",
      "sourcePriceIncludesTax": false,
      "calculateServerSide": true,
      "userGroupId": null,
      "useOnlyDefaultUserGroupId": false,
      "deprecatedPriceFieldsSupport": true,
      "finalPriceIncludesTax": false
    },
    "i18n": {
      "defaultCountry": "IT",
      "defaultLanguage": "IT",
      "availableLocale": [
        "it-IT"
      ],
      "defaultLocale": "it-IT",
      "currencyCode": "EUR",
      "currencySign": "€",
      "currencyDecimal": "",
      "currencyGroup": "",
      "fractionDigits": 2,
      "priceFormat": "{sign}{amount}",
      "dateFormat": "HH:mm D/M/YYYY",
      "fullCountryName": "Italy",
      "fullLanguageName": "Italian",
      "bundleAllStoreviewLanguages": false
    }
  }
},
```

提示

你可以找到适用于更多的选择*了MultiStore*在[商店视图](https://docs.vuestorefront.io/v1/guide/basics/configuration.html#store-views)的部分*解释配置文件*。

进行这些更改后，您将`LanguageSwitcher`在底部看到一个组件。

默认情况下，语言/商店由 URL 前缀切换：

- `http://localhost:3000` 用于默认商店
- `http://localhost:3000/it` 将商店切换到意大利商店
- `http://localhost:3000/de` 将商店切换到德国商店

通用网址格式为： `http://localhost:3000/{storeCode}`

storeCode 可以通过在运行`yarn dev`/之前设置的 ENV 变量来切换`yarn start`：

- `export STORE_CODE=de && yarn dev`将在`de`商店加载的情况下运行商店

在 NGINX/varnish 模式下使用多存储模式时，另一个有用的选项是通过`x-vs-store-code`HTTP 标头设置存储代码。

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#changing-the-ui-for-specific-store-views)更改特定商店视图的 UI

如果您想修改路线或更改有关当前区域设置的某些特定组件（例如，德国商店中的不同结帐），请查看`src/themes/default/index.js`：：

```js
export default function(app, router, store) {
  // if youre' runing multistore setup this is copying the routed above adding the 'storeCode' prefix to the URLs and the names of the routes
  // You can do it on your own and then be able to customize the components used for example for German storeView checkout
  // To do so please execlude the desired storeView from the config.storeViews.mapStoreUrlsFor and map the URLs by Your own like:
  // { name: 'de-checkout', path: '/checkout', component: CheckoutCustomized },
  router.addRoutes(routes);
  setupMultistoreRoutes(config, router, routes);
  store.registerModule('ui', UIStore);
}
```

另一种选择是为特定的商店视图创建一个单独的主题。运行时主题更改是不可能的，因为主题是在页面构建过程中由 webpack 编译到 JS 包中的。在这种情况下，您应该运行`vue-storefront`在`config/local.json`文件中设置正确主题的单独实例。

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#multi-source-inventory-msi-support)多源库存 (MSI) 支持

要支持此自定义功能，您应该注意两件事。首先请安装[Magento2 VSBridge Indexer MSI Extension （打开新窗口）](https://github.com/divanteLtd/magento2-vsbridge-indexer-msi). 然后在`config/local.json`您的 VSF-API 添加部分，如：

```js
"msi": {
  "enabled": true,
  "defaultStockId": 1
},
```

`defaultStockId`您的默认股票 ID在哪里。在每个使用不同股票 ID 的 storeCode 中，您应该添加如下部分：

```js
"msi": {
  "stockId": 2
},
```

## [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#useful-helpers)有用的*帮手*

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-get-current-store-view)如何获取当前商店视图？

这是获取当前商店视图值的辅助方法。

您只需`currentStoreView`要从`core/lib/multistore`如下示例中导入函数：

```js
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
// ... abridged 
  return {
    currency: currentStoreView().i18n.currencyCode,
    value: method.price_incl_tax
  }
```

`currentStoreView()`返回您在`local.json`其中设置的对象值- 它是 StoreView 或扩展 StoreView 的类型。

```ts
interface StoreView {
  storeCode: string,
  extend?: string,
  disabled?: boolean,
  storeId: any,
  name?: string,
  url?: string,
  appendStoreCode?: boolean,
  elasticsearch: {
    host: string,
    index: string
  },
  tax: {
    sourcePriceIncludesTax?: boolean,
    finalPriceIncludesTax?: boolean,
    deprecatedPriceFieldsSupport?: boolean,
    defaultCountry: string,
    defaultRegion: null | string,
    calculateServerSide: boolean,
    userGroupId?: number,
    useOnlyDefaultUserGroupId: boolean
  },
  i18n: {
    fullCountryName: string,
    fullLanguageName: string,
    defaultLanguage: string,
    defaultCountry: string,
    defaultLocale: string,
    currencyCode: string,
    currencySign: string,
    currencyDecimal: string,
    currencyGroup: string,
    fractionDigits: number,
    priceFormat: string,
    dateFormat: string
  },
  seo: {
    defaultTitle: string
  }
}
```

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-remove-store-code-from-route)如何从路线中删除商店代码

当您需要`storeCode`从路由中删除时，请使用`removeStoreCodeFromRoute`以下示例：

```js
import { removeStoreCodeFromRoute } from '@vue-storefront/core/lib/multistore'
// ... abridged 
    const urlWithoutStorecode1 = removeStoreCodeFromRoute('/gb/home'); // should return '/home`
    const urlWithoutStorecode2 = removeStoreCodeFromRoute('gb/home'); // should return 'home`
    const urlWithoutStorecode3 = removeStoreCodeFromRoute({
      path: '/gb/home'
    }); // should return '/home`
```

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#update-append-a-storecode-to-your-url)将 storeCode 更新/附加到您的 URL

如果您需要`storeCode`在提供的 URL 中附加或更新查询参数，您可以通过调用`adjustMultistoreApiUrl`函数来完成，如下例所示：

```js
import { adjustMultistoreApiUrl } from '@vue-storefront/core/lib/multistore'

// ... abridged 
// Let's say current storeCode is `de`
const myUrl1 = adjustMultistoreApiUrl('https://example.com?a=b'); // returns 'https://example.com?a=b&storeCode=de'
const myUrl2 = adjustMultistoreApiUrl('https://example.com?a=b&storeCode=it'); // returns 'https://example.com?a=b&storeCode=de'
```

当您向 VSF-API 发送请求并且希望 VSF-API 使用某些 storeCode 的端点时，此功能特别有用。

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#using-endpoint-of-certain-storecode-in-vue-storefront-api)在 Vue Storefront API 中使用某些 storeCode 的端点

在`src/api/extensions/example-magento-api/index.js`我们创建 Magento 2 客户端的代码行中：

```js
const client = Magento2Client(config.magento2.api);
```

如果你想为某个端点支持多存储，你应该这样做：

```js
const client = Magento2Client(multiStoreConfig(config.magento2.api, req));
```

它使用`storeCode`来自 的查询参数`req`来确定要使用的商店。为了使其正常工作，您还应该在 VSF-API 的配置中配置不同的存储。检查此示例配置`de`并`it`存储代码：

```js
"magento2": {
    "imgUrl": "http://demo-magento2.vuestorefront.io/media/catalog/product",
    "assetPath": "/../var/magento2-sample-data/pub/media",
    "api": {
      "url": "https://my-magento.com/rest",
      "consumerKey": "******",
      "consumerSecret": "******",
      "accessToken": "******",
      "accessTokenSecret": "******"
    },
    "api_de": {
      "url": "https://my-magento.com/de/rest",
      "consumerKey": "******",
      "consumerSecret": "******",
      "accessToken": "******",
      "accessTokenSecret": "******"
    },
    "api_it": {
      "url": "https://my-magento.com/it/rest",
      "consumerKey": "******",
      "consumerSecret": "******",
      "accessToken": "******",
      "accessTokenSecret": "******"
    }
  },
```

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#localize-url-with-correct-store-code)使用正确的商店代码本地化 URL

提示

本地化路由是指按照惯例在 URL 中表示存储代码，不带参数。

例如它`de`在`https://example.com/de?a=b`

允许使用的方法是`localizedRoute`. `de`作为当前 storeCode 的示例转换：

```js
localizedRoute('http://example.com/'); // returns http://example.com/de
localizedRoute('/'); // returns /de
localizedRoute('/?a=b'); // returns /de?a=b
localizedRoute('/about'); // returns /de/about
```

警告

`appendStoreCode`商店视图配置的选项应设置为`true`将商店代码显示为上面的提示

警告

`localizedRoute`被注入到每个 Vue 的实例中，因此您可以通过`this.localizedRoute`. 您也可以在模板中使用它而无需额外导入。

```vue
<router-link :to="localizedRoute(page.link)" class="cl-accent relative">{{
  page.title
}}</router-link>
```

或者

```vue
<router-link
  :to="
    localizedRoute({
      name: product.type_id + '-product',
      params: {
        parentSku: product.parentSku ? product.parentSku : product.sku,
        slug: product.slug,
        childSku: product.sku,
      },
    })
  "
></router-link>
```

### [#](https://docs.vuestorefront.io/v1/guide/integrations/multistore.html#how-to-extract-store-code-from-route)如何从路由中提取商店代码

您可以从路由中提取商店代码，如下所示：

```js
import storeCodeFromRoute from '@vue-storefront/core/lib/storeCodeFromRoute'
// abridged
const storeCode = storeCodeFromRoute(currentRoute)
```

如果 storeCode 是，您应该`gb`从路由获取商店代码`https://example.com/gb/foo``gb`