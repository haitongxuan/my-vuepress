# Vuex

提醒

这份文件是*存档*和*不*具有这是最新版本的有关`1.11`在写作的时间。请记住，本文档旨在帮助您维护旧产品，而不是全新安装。

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#introduction)介绍

所有数据处理和远程请求都应该由 Vuex 数据存储管理。核心模块`store`里面一般都包含文件夹。您可以通过响应事件来修改现有的存储操作。事件在下面的文档中指定，可以在[核心模块中](https://github.com/vuestorefront/vue-storefront/tree/master/core)找到[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/tree/master/core)，`EventBus.$emit`主要用于 Vuex Actions。

**您应该将所有 REST 调用、Elasticsearch 数据查询放在 Vuex 操作中。**这是我们管理数据的默认设计模式。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-conventions)Vuex  conventions

在开始使用 Vuex 之前，建议先熟悉我们的[vuex 约定](https://docs.vuestorefront.io/v1/guide/archives/vuex-conventions.html)

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-modules)Vuex  modules

- [产品](https://docs.vuestorefront.io/v1/guide/archives/product-store.html)
- [类别](https://docs.vuestorefront.io/v1/guide/archives/category-store.html)
- [大车](https://docs.vuestorefront.io/v1/guide/archives/Cart Store.html)
- [查看](https://docs.vuestorefront.io/v1/guide/archives/Checkout Store.html)
- [命令](https://docs.vuestorefront.io/v1/guide/archives/Order Store.html)
- [库存](https://docs.vuestorefront.io/v1/guide/archives/stock-store.html)
- [同步](https://docs.vuestorefront.io/v1/guide/archives/sync-store.html)
- [用户](https://docs.vuestorefront.io/v1/guide/archives/User Store.html)
- [属性](https://docs.vuestorefront.io/v1/guide/archives/attribute-store.html)
- [用户界面商店（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/Working with UI Store (interface state).md)

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#override-existing-core-modules)Override existing core modules

现有的核心模块可以在主题存储中被覆盖。只需导入任何核心存储模块并使用`extendStore()`实用程序方法覆盖它们，如下面的`src/modules/ui-store/index.ts`.

```text
import coreStore from '@vue-storefront/core/store/modules/ui-store'
import { extendStore } from '@vue-storefront/core/lib/themes'

const state = {
  // override state of core ui module...
}

const mutations = {
  // override mutations of core ui module...
}

const actions = {
  // override actions of core ui module...
}

export default extendStore(coreStore, {
  state,
  mutations,
  actions
})
```

然后将其导入 `src/modules/index.ts`

```text
import ui from './ui-store'

export default {
  ui
}
```

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#related)Related

[处理数据](https://docs.vuestorefront.io/v1/guide/archives/data.html)

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#vuex-conventions-2)Vuex conventions

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#module)Module

应该为一组特定的功能创建 Vuex 模块。它还应该对其他模块只有绝对必要的依赖关系。模块的名称应该简短，明确它的目的地，并且用破折号分隔单词。

很好的例子：

- 产品
- 产品
- 用户
- 查看
- 比较产品
- 通知
- 命令

不好的例子：

- 下一个模块
- 比较（因为它没有说明它比较的是什么）

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state)State

状态属性应该简单，并且它们的结构不应该嵌套。它们的名称以下划线表示法书写并指示它们包含的内容。我们应该避免一个对象的多个实例，即使在模块之间也是如此。在绝大多数情况下，它们可以通过其唯一 ID 属性进行引用。例子：

```text
{
  "products_map": {
    "WS08": {
      "sku": "WS08",
      "name": "Minerva LumaTech&trade; V-Tee"
      // other options
    },
    "WS12": {
      "sku": "WS12",
      "name": "Radiant Tee"
      // other options
    },
    "WS08-XS-Black": {
        "sku": "WS08-XS-Black",
        "name": "Minerva LumaTech&trade; V-Tee"
        // other options
    }
    // maaaaaaaany more products
  },
  "current_product_id": "WS08-XS-Black",
  "wishlist": ["MP01-32-Black", "MSH05-32-Black"],
  "cart_items": [
    {
      "sku": "WH09-XS-Green",
      "qty": 3
    },
    {
      "sku": "WH09-S-Red",
      "qty": 1
    }
  ]
}
```

很好的例子：

- category_map
- current_category_id
- 命令
- product_parent_id

不好的例子

- 列表
- 元素

```text
filters: {
  available: {},
  chosen: {}
},
```

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters)Getters

Vuex 状态，除了突变，应该总是被 getter 访问，包括操作。吸气剂应该：

- 从`is`返回布尔值时开始，`get`否则
- 回答问题 `what am I returning?`
- 包含模块名称以确保 getter 在整个 Vuex 中是唯一的，但不必以该名称开头。首先，它应该有一个自然的名字，例如我们有 module`category`和 state `availableFilters`。所以`what am I returning?`->`available Filters`而这些过滤器是`category filters`. 它不是布尔值，它是一个数组或映射，所以我们从`get`->`getAvailableCategoryFilters`

很好的例子：

- 对于状态用户 -> isUserLoggedIn, getUser
- 对于状态 availableFilters -> getAvailableCategoryFilters
- 对于状态 currentProductId -> getCurrentProduct（因为它从地图获取产品对象），getCurrentProductId

不好的例子：

- 总计
- 产品
- 当前的
- 列表

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions)Actions

模块外部的每个状态更改都应作为操作调用。行动旨在：

- 从服务器（或缓存）获取一些东西——在这种情况下，它们必须是异步的（返回承诺）。
- 改变当前模块的状态。
- 从同一模块分派动作（以避免重复逻辑）。
- 从另一个模块调度操作（仅在绝对需要时）。
- 它们的名称应尽可能独特，并简单地描述将发生的具体操作。**几乎每个动作都应该返回 promise。**我们允许您在新模块中复制现有方法（如 list 或 single ）的约定，以获得一致的 API。

很好的例子：

- fetchProduct - 根据 ID 从服务器或缓存获取产品，将其设置在产品映射中，并通过 getter 返回。
- findProducts - 通过特定查询获取产品，将它们设置在产品映射中，并将它们作为数组返回。
- setCurrentProduct - 参数可以是 ID，它可以分派 fetchProduct，将其变异为 productsMap，并将其 ID 变异为 currentProductId。此外，如果 productId 为 null，则它会删除 currentProduct。
- 添加购物车项目
- 切换微车

不好的例子：

- 产品
- 重启

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#mutations)Mutations

最后我们有突变。只有突变可以改变模块的状态。它们应该是同步的（从不返回承诺），不包含任何逻辑（非常快），除了需要保持状态原样（例如，为状态设置默认值）。突变只能由来自同一模块的操作调用。在大多数情况下，它应该只是调用特定突变的单个操作。突变类型：

- SET_ - 最常见的突变类型。它可以设置一个对象（或整个数组），设置对象的默认值（或者可能是干净的数组），
- ADD_ - 它可以添加一个新元素到状态属性，它是一个数组或添加新元素到映射。
- REMOVE_ - 与 ADD 相对。它可以通过索引删除地图元素或数组元素（或通过查找对象，不推荐在大数组上使用，因为变异可能很慢）。

很好的例子：

- 添加_产品
- SET_CURRENT_PRODUCT_ID
- ADD_CATEGORY_FILTER
- REMOVE_WISHLIST_PRODUCT_ID

不好的例子：

- CATEGORY_UPD_CURRENT_CATEGORY
- TAX_UPDATE_RULES

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#product-vuex-store)产品 Vuex 商店

Product Store 旨在处理与产品数据相关的所有操作。它负责加载产品列表或单个产品以及配置可配置产品和管理产品附件。

该模块与 Elasticsearch 紧密配合，并在[Product 数据格式上运行](https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html)

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-2)State

```js
const state = {
  breadcrumbs: { routes: [] },
  current: null, // shown product
  current_options: { color: [], size: [] },
  current_configuration: {},
  parent: null,
  list: [],
  original: null, // default, not configured product
  related: {},
};
```

产品状态通常仅由两种方法填充 -[列表 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395)和[单身 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L428)- 并通过[重置](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215)清除为默认值[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L215).

产品状态数据：

- `breadcrumbs`- 这是[面包屑组件](https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js)使用的路由列表[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js)
- `current`- 这是具有选定`configurable_children`变体的产品对象，因此它是基本产品，其属性被选定`configurable_children`变体的值覆盖；它在[Product.vue 页面](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203)上使用[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/pages/Product.vue#L203). 这是在“加入购物车”后加入购物车的产品
- `current_options`- 用于在[Product.vue 页面](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56)上填充变体选择器的列表[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/themes/default/pages/Product.vue#L56). 它包含属性字典以及可能的属性值和标签，并由[setupVariants](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344)填充[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L344)根据`configurable_children`财产。
- `current_configuration`当前产品配置。选定变体属性的字典；例如，它包含一个选定产品属性的字典：

```json
{
  "color": 123,
  "size": 24
}
```

请注意，我们使用的是类似 Magento 的 EAV 属性结构，因此这里的值是属性值索引，而不是值本身。请查看[数据格式](https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html)以供参考。

- `parent`- 如果当前产品是 a `type_id="single"`，则在此变量`configurable`中存储父产品。此数据仅`Product.vue`由[checkConfigurableParent](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323)填充[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L323)
- `list`- 这是由[列表](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395)加载的一系列产品[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L395)
- `original`- 仅用于`configurable`产品，这是没有选定变体的基础产品。
- `related`- 这是相关产品的字典；设置在这家商店外（[例如这里 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/src/themes/default/components/core/blocks/Product/Related.vue)) 通过调用和[相关操作（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L528)

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events)Events

以下事件是从`product`商店发布的：

- `EventBus.$emit('product-after-priceupdate', product)`- 来自[同步产品价格 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/bd559f1baad7cd392bc5bae7b935a60484e2e6e5/src/store/modules/product.js#L33)产品价格与 Magento 同步后。
- `EventBus.$emit('product-after-configure', { product: product, configuration: configuration, selectedVariant: selectedVariant })`from `configureProductAsync`（由`product/configure`之后的动作调用`product/single`）。此事件在产品页面上提供有关所选产品变体的信息。
- `EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, result: resp })`- 此事件通过`product/list`提供当前过滤器等返回当前产品列表。您可以通过设置`meta`属性来标记特定的产品列表标识符；这很重要，因为在单个页面上，可以为每个单独的产品块多次执行此事件。
- `EventBus.$emit('product-after-single', { key: key, options: options, product: cachedProduct })`- 加载单个产品后（通过`product/single`操作调用）。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-2)Actions

产品商店提供以下公共操作：

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupbreadcrumbs-context-product)`setupBreadcrumbs (context, { product })`

该方法负责`state.breadcrumbs`在`Product.vue`页面上使用的设置。它是从 调用的`Product.vue:fetchData`。所述`product`参数是一个[Elasticsearch产品对象](https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html)。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#syncplatformpricesover-context-skus)`syncPlatformPricesOver(context, { skus })`

当 config 选项`products.alwaysSyncPlatformPricesOver`打开时，Vue Storefront 将在每次调度`product/single`或`product/list`操作时请求当前产品价格。它由这些操作专门调用，不应手动调用。此方法调用`vue-storefront-api`代理从 Magento 或任何其他后端 CMS 获取当前价格。

`skus` - 这是一个包含要同步的产品 SKU 的数组。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupassociated-context-product)`setupAssociated (context, { product })`

此方法被称为后续调用`Product.vue:fetchData`或`product/list`操作。它用于获取子产品`grouped`或`bundle`产品类型。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#checkconfigurableparent-context-product)`checkConfigurableParent (context, {product})`

调用此方法`Product.vue:fetchData`以检查当前的简单产品是否具有可配置的父级。如果是，则重定向到父产品。这是[#508](https://github.com/vuestorefront/vue-storefront/issues/508)的修复[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/issues/508)

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setupvariants-context-product)`setupVariants (context, { product })`

此方法随后被调用`Product.vue:fetchData`以加载 中定义的所有可配置属性`product.configurable_options`，然后填充`state.current_configuration`和`state.current_options`。此操作的主要用途是在产品页面上准备用户要配置的产品，并正确显示产品配置器 UI。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-query-start-0-size-50-entitytype-product-sort-cachebykey-sku-prefetchgroupproducts-true-updatestate-true-meta)`list (context, { query, start = 0, size = 50, entityType = 'product', sort = '', cacheByKey = 'sku', prefetchGroupProducts = true, updateState = true, meta = {} })`

这是加载产品列表的关键方法。它返回包含产品列表对象的 Promise。这种方法应该在您需要获取产品数据的任何地方使用。当`config.tax.calculateServerSide=false`此方法运行产品税计算器并根据需要与 Magento 同步价格时。

**Events**：此方法将产品列表作为`EventBus.$emit('product-after-list', { query: query, start: start, size: size, sort: sort, entityType: entityType, meta: meta, result: resp })`

Important

此方法通过将整个查询结果对象存储到`localForage`每个产品中并单独缓存每个产品（例如，在产品页面上使用）来同步产品以供离线使用。

- `query`- 这是`bodybuilder`Elasticsearch 查询（请检查`bodybuilder`包或例如`Home.vue`参考如何使用它）。
- `start`, `size`- 两个参数都用于分页；start 是起始索引；size 是页面大小。
- `entityType`- 默认情况下，它当然设置为`product`并映射到 Elasticsearch 实体类。
- `sort`- 用于排序的产品属性。此字段必须在 Elasticsearch 中映射为数字字段，
- `prefetchGroupProducts`- 默认情况下，它设置为 true 并导致`setupAssociated`调度操作以获取所有关联的产品
- `updateState`- 如果您将此设置为 false，`state.list`则不会更新，只会退回产品。
- `meta`- 这是一个与`product-after-list`事件一起返回的可选属性；例如，它可以用于标记任何特定的 ES 调用。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#single-context-options-setcurrentproduct-true-selectdefaultvariant-true-key-sku)`single (context, { options, setCurrentProduct = true, selectDefaultVariant = true, key = 'sku' })`

此方法随后调度`product/list`操作以获取产品并同步税金/价格。当最近通过`product/list`此方法下载产品时，将从 中返回缓存的版本`localForage`，但无论如何都要更新缓存。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#configure-context-product-null-configuration-selectdefaultvariant-true)`configure (context, { product = null, configuration, selectDefaultVariant = true })`

此操作用于配置`configurable`具有指定属性的产品。它获取`configuration`应具有以下格式的对象：`{ attribute_code: attribute_value_id }`并找到`product.configurable_children`符合此配置的项目。然后，它将此特定内容`configurable_child`与产品本身合并- 例如，将 product.price 设置为可配置的价格、颜色、尺寸等。此方法用于：`Product.vue`允许用户选择颜色、尺寸等的页面。第二种用法为它`Category.vue`在用户选择一些过滤器后出现在页面上 - 生成的产品被配置为显示正确的图像（与选定的颜色和尺寸相关）和价格。

如果`selectDefaultVariant`设置为 true（默认），`state.current`则将根据配置的产品进行更改。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setcurrent-context-productvariant)`setCurrent (context, productVariant)`

辅助方法只是设置`state.current`为 productVariant。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#setoriginal-context-originalproduct)`setOriginal (context, originalProduct)`

辅助方法只是设置`state.original`为 originalProduct。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#related-context-key-related-products-items)`related (context, { key = 'related-products', items })`

更改`state.related`字典以设置要在`Product.vue`页面上显示的相关产品的特定列表（`RelatedProducts`组件用于此）。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-2)Getters

所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考。

```js
const getters = {
  getParentProduct: state => state.parent,
  getCurrentProduct: state => state.current,
  getCurrentProductConfiguration: state => state.current_configuration,
  getOriginalProduct: state => state.original,
  getCurrentProductOptions: state => state.current_options,
  breadcrumbs: state => state.breadcrumbs,
};
```

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#category-vuex-store)Category Vuex Store

类别存储旨在处理与类别数据相关的所有操作。

该模块与 Elasticsearch 紧密配合，并在[Product 数据格式上运行](https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html)

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-3)State

```js
const state = {
  list: [],
  current: {},
  filters: { color: [], size: [], price: [] },
  breadcrumbs: { routes: [] },
  current_path: [], // list of categories from root to current
};
```

类别状态通常仅由两种方法填充 -[列表 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L38)和[单身 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70)- 并通过[重置](https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28)清除为默认值[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L28)

笔记

该操作仅`category/single`使用`localForage`缓存——不直接使用Elasticsearch 数据存储。由于此优化，`category/list`首先通过调度下载类别列表。

类别状态数据：

- `breadcrumbs`- 这是[面包屑组件](https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js)使用的路由列表[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/core/components/Breadcrumbs.js)
- `current` - 这是当前类别对象。
- `filters`是类别过滤器的当前状态，所选变体属性的字典；例如，它包含选定产品属性的字典：

```json
{
  "color": 123,
  "size": 24
}
```

请注意，我们使用的是类似 Magento 的 EAV 属性结构，因此这里的值是属性值索引，而不是值本身。请查看[数据格式](https://docs.vuestorefront.io/v1/guide/data/elasticsearch.html)以供参考

- `current_path` - 这是类别对象的列表：从当前类别到顶级根，

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events-2)Events

以下事件是从`category`商店发布的：

- `EventBus.$emit('category-after-single', { category: mainCategory })`- 从[类别/单 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/06fbb89a5a8bc2c607847f65a7bca9ad54ed7146/core/store/modules/category.js#L70)加载单个类别后。
- `EventBus.$emit('category-after-current', { category: category })`- 当前类别更改后 - 这是后续`category/single`行动号召。
- `EventBus.$emit('category-after-reset', { })` - 类别重置后（例如，在从一个类别页面移动到另一个类别的过程中）。
- `EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })`- 此事件发出当前类别列表，因为它由 返回`category/list`。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-3)Actions

购物车商店提供以下公共操作：

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-parent-null-onlyactive-true-onlynotempty-false-size-4000-start-0-sort-position-asc)`list (context, { parent = null, onlyActive = true, onlyNotEmpty = false, size = 4000, start = 0, sort = 'position:asc' })`

这是加载类别列表的关键方法。它返回包含产品列表对象的 Promise。这种方法应该在您需要获取产品数据的任何地方使用。

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#single-context-key-value-setcurrentcategory-true-setcurrentcategorypath-true)`single (context, { key, value, setCurrentCategory = true, setCurrentCategoryPath = true })`

此方法从`localForage`.

Important

要使此方法起作用，您应该先调用`category/list`。这个分类只对localForage有效，不能直接访问Elasticsearch

Important

此方法通过将整个查询结果对象存储到`localForage`每个类别中并单独缓存每个类别（例如，在产品页面上使用）来同步产品以供离线使用。

**Events**：此方法发出类别列表为`EventBus.$emit('category-after-list', { query: qrObj, sort: sort, size: size, start: start, list: resp })`

- `parent`- `category`- 仅加载子类别的对象。
- `start`, `size` - 两个参数都用于分页；start 是起始索引；size 是页面大小。
- `onlyActive` - (bool) 仅加载 CMS 中标记为活动的类别（例如，在 Magento 中）。
- `sort`- 用于排序的类别属性。此字段必须在 Elasticsearch 中映射为数字字段。
- `onlyNotEmpty` - (bool) 仅加载包含任何产品的类别。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-3)Getters

所有状态成员只能由 getter 访问。请查看数据格式的状态参考。

```js
const getters = {
  current: state => state.current,
  list: state => state.list,
};
```

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#stock-vuex-store)Stock Vuex Store

Stock Store 旨在处理库存数量检查。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#events-3)Events

以下事件是从`stock`商店发布的：

- `stock-after-check` - 在从电子商务后端/Magento 收到库存项目后立即发出。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-4)Actions

购物车商店提供以下公共操作：

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#check-context-product-qty-1)`check (context, { product, qty = 1 })`

检查是否`product`可以将给定数量的商品添加到购物车中。

生成的 promise 扩展为以下对象：

```js
{
  qty: 100,
  status: 'ok', // another option is: 'out_of_stock'
  onlineCheckTaskId: 14241
}
```

## [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#attribute-vuex-store) Attribute Vuex Store

属性存储旨在处理与属性管理相关的所有操作。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#state-4)State

```js
  state: {
    list_by_code: {},
    list_by_id: {},
    labels: {}
  },
```

因为我们以与 Magento 非常相似的方式使用属性字典进行产品管理（[EAV 模型 （打开新窗口）](http://www.xpertdeveloper.com/2010/10/what-is-eav-model-in-magento/))，我们正在对属性、属性类型和字典进行操作。

属性由用户通过调用方法**显式**加载`attribute/list`。例如，当您要使用产品的可自定义属性或变体时，您需要预取属性元数据：

```js
this.$store.dispatch('attribute/list', {
  filterValues: [true],
  filterField: 'is_user_defined',
});
```

这是[产品比较功能](https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue)的示例[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/c954b96f6633a201e10bed1d2e4c0def1aeb3071/core/pages/Compare.vue).

属性状态数据：

- `list_by_code`- 这是一个字典，您可以通过访问`list_by_code['color']`等来获取特定属性。
- `list_by_id`- 这是一个字典，您可以通过访问`list_by_id[123]`等来获取特定属性。
- `labels` - 属性值的预加载标签（EAV 中的 V）。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#actions-5)Actions

属性存储提供以下公共操作：

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#list-context-filtervalues-null-filterfield-attribute-code-size-150-start-0)`列表（上下文，{filterValues = null，filterField = 'attribute_code'，size = 150，start = 0 }）``

此方法用于加载属性元数据。`filterValues`就像多个值的阵列：`['color', 'size']`和`filterField`是属性字段来比较`filterValues`针对。通常，它是`attribute_code`或`attribute_id`。该`size`和`start`只是用来限制列表。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#helpers) Helpers

属性模块导出一种非常流行的辅助方法：

#### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#export-function-optionlabel-state-attributekey-searchby-code-optionid)`export function optionLabel (state, { attributeKey, searchBy = 'code', optionId })`

这用于获取特定`optionId`. 例如，当用户过滤产品并使用 165 个 attribute_value 时，我们可以调用`optionLabel( { attributeKey: 'color', optionId: 165 })`以取回 'Red' 标签。

### [#](https://docs.vuestorefront.io/v1/guide/archives/vuex.html#getters-4)Getters

所有状态成员都应该只能由 getter 访问。请查看数据格式的状态参考

```js
export default {
  attributeListByCode: state => state.list_by_code,
  attributeListById: state => state.list_by_id,
};
```