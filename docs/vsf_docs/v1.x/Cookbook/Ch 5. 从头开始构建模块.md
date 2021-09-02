# Ch 5. 从头开始构建*模块*

在本章中，我们将介绍：

- [0. 介绍](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_0-introduction)
- [1. 如何引导一个模块](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)
- [2. 调整模块的最佳实践](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-best-practices-for-tweaking-a-module)
- [3.钩入钩子](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks)
- [4. 关于模块配置](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-module-configuration)
- [5. 打包一个模块](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module)
- [6. 使用 storefront-query-builder 扩展 Elasticsearch 请求体](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_6-extend-elasticsearch-request-body-using-storefront-query-builder)
- [7. 在模块中处理翻译](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-working-with-translations-in-module)
- [8. 模块中的测试](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_8-tests-in-module)



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_0-introduction)0. 介绍

系统的模块化方法通常被认为是传统工程概念的实现[*高内聚低耦合* （打开新窗口）](https://stackoverflow.com/questions/14000762/what-does-low-in-coupling-and-high-in-cohesion-mean). 我们的意思是，一个人可以在不破坏原始流程的情况下***扩展***其他人的逻辑。**Vue Storefront**也采用了这个概念来确保 3rd 方开发人员的幸福。本章为您打开了*1.11*版本中新的**Vue Storefront**模块结构的腹部。



## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)1. 如何引导一个模块

如果开源作者对他们的后代是认真的，那么必须承认，不可能在野外处理所有用例的所有细节。所以创建者应该暴露核心部件的连接点，以便第三方开发人员可以在需要时将他们的狂野逻辑注入工作机器。现在你瞧，丛林被征服了。

当您出于任何原因想要调整任何开源以使其更加出色时，您首先需要寻找的是代码库中的*模块*。你可以为同一件事命名*API*、*钩子*或*观察者*，但*模块*基本上在设计中的一个地方代表了所有这些。

在这个秘籍中，我们将介绍如何以最低限度引导模块，以便将我们的逻辑注入机器。我们将探索两种不同的方法，一种用于手动安装，另一种用于使用[`CLI`](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service)样板生成模块。*泰山人，跟上！*

提示

如果你想知道*Manual*方式和*CLI*方式的详细区别，请看[秘诀5. 打包一个模块](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation)1. 准备

- 你需要[**Vue店面** （打开新窗口）](https://github.com/vuestorefront/vue-storefront)实例[与](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)您机器上的[其他基础设施一起安装，](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_1-install-with-docker)以构建新模块并测试其工作。
- 为了您自己的方便，您需要一个您选择的开发编辑器。
- 你需要*Vue店面* [`CLI` （打开新窗口）](https://www.npmjs.com/package/@vue-storefront/cli)[安装](https://docs.vuestorefront.io/v1/guide/cookbook/setup.html#_4-storefront-cli-at-your-service)在计算机上的[配方乙](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-cli-bootstrapping)与安装`CLI`。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-manual-bootstrapping)2-1。方法 A（手动引导）

1. 在`./src/modules/example-module`您的**Vue Storefront**根路径下创建一个文件夹。

```bash
cd src/modules
mkdir example-module && cd example-module
```

1. `index.ts`在目录中创建文件

```bash
touch index.ts
```

1. 打开该文件并记下模块的最小签名

```bash
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {

}
```

我们在这里导出*ExampleModule*实现*StorefrontModule*接口。

看看里面

从`./core/lib/modules.ts`，您可以查看*StorefrontModule*签名如下：

```bash
export interface StorefrontModule { (
  app: any, # app instance (Vue instance)
  store: Store<any>, # Vuex store instance
  router: VueRouter, # router instance
  moduleConfig: any, # module config during registration
  appConfig: any): void # VSF config
}
```

从这个签名来看，你可以从你的模块中访问`store`, `router`, `config`s 。

1. *（可选）*添加注释以了解稍后注册的时间：

```bash
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
	console.log('Hello World and VSF!'); # Any punch line allowed!
}
```

1. 转到父目录 ( `./src/modules`) 并按`index.ts`如下方式打开文件：

```bash
cd ..
vi index.ts # here you can use another editor for sure instead of vi
```

您可以在此文件中注册您创建的任何模块。现在在这里为我们刚刚创建的模块插入注册，如下所示：







 

















 





```ts
/* ... abridged */

import { PaymentCashOnDeliveryModule } from './payment-cash-on-delivery';
import { InstantCheckoutModule } from './instant-checkout'
import { ExampleModule } from './example-module' /* Import Example module we just created */

import { registerModule } from '@vue-storefront/core/lib/modules'

export function registerNewModules () {
  registerModule(UrlModule)
  registerModule(CatalogModule)
  registerModule(CheckoutModule) 

/* ... abridged ... */

  registerModule(PaymentCashOnDeliveryModule) 
  registerModule(AmpRendererModule)
  registerModule(InstantCheckoutModule) 
  
  registerModule(ExampleModule) // Register Example module we just created
}
```

提示

模块可以自然地*延迟加载*。在*迟缓装载*初始化期间通常具有诸如性能，低开销的一些优势，并且可以允许在更结构化的方式码分离。一个建议是，如果整个应用程序都需要你的模块，最好留在`./src/modules/index.ts`上面演示的常规位置。相反，如果您的模块被限制并绑定到某个路由或包，那么将它注册到它们内部并延迟加载包可能更明智。

然而，*延迟加载*也有一个缺点，即您可能无法访问某些钩子，例如`afterAppInit`因为它们不是惰性的。（意味着仅在应用程序初始化期间触发）

1. 在**Vue Storefront**根路径运行命令以引导**Vue Storefront**应用程序

```bash
docker-compose up 
```

或没有 `docker`

```bash
yarn dev
```

应用程序启动并运行后，它会吐出大量日志，指示已完成的工作。睁大你的眼睛，如果幸运的话，你会从超快速滚动中选择类似如下的行：





 







```bash
# ... abridged 

app_1  | [GTM] Google Tag Manager extensions is not working. Ensure Google Tag Manager container ID is defined in config null
app_1  | Hello World and VSF! # YAY! now we know it's successfully registered
app_1  | [module] VS Modules registration finished. { succesfulyRegistered: '0 / 0', registrationOrder: [] }
app_1  | Entity cache is enabled for productList null

# abridged ...
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-cli-bootstrapping)2-2。方案 B（CLI 引导）

1. 转到您的项目文件夹*或*任何用于新`module`开发的prestine 文件夹。

```bash
mkdir example-folder
cd example-folder
```

1. 运行`vsf`CLI 命令，如下所示：

```bash
vsf init:module example-folder
```

此处模块初始化所需的命令是`vsf init:module`，您的新模块名称`example-folder`在这种情况下。

您将看到以下结果：

```bash
Module vsf-example-folder has been succesfully created!
 cd vsf-example-folder
```

笔记

您可能已经注意到默认情况下为新创建的模块名称添加`vsf`前缀*`vsf`*。这有助于您的模块在*[INSERT UPDATE REQUIRED]*期间自动编译

1. 结果表明，将您的目录更改为：

```bash
cd vsf-example-folder
```

1. 列出里面的文件如下：

```bash
ls *
```

您将看到以下结构：

```bash
package.json  README.md  tsconfig.json

src:
index.ts  store.ts
```

恭喜你，你现在可以走了。

可以在方法[5. 打包模块中](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module)找到更多场景

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally)3.窥视厨房（内部发生的事情）

我们只用了几个简单的步骤就创建了一个模块并成功注册了它。尽管它实际上什么都不做，但在设计中抓住概念就足够了，并帮助您转变为一个很棒的模块开发人员。

我们`module`在 的领土上建造了我们的房子`./src/modules`。我们创建了一个名为`index.ts`所有模块部件组装和导出的门，尽管为了简洁起见我们跳过了构建模块部件，稍后我们将更详细地了解它。相反，我们创建的`index.ts`是构建模块并声明它是模块所需的最低限度的骨架。

这里`index.ts`发现一个模块基本上是一个函数，可以访问 Vue 应用程序实例的某些部分并允许与其交互。此外，由于它`helpers`并`hooks`伴随着它，还实现了更好的多功能性。

如果你再深入一点，你就会`./core/lib/modules.ts`发现模块签名和`registerModule`功能占据了哪些位置。`registerModule`是努力`src/modules/index.ts`注册将个人推入`registeredModules`. （谨防小的差异在那些名字中`registerModule`，`registeredModules`，`registerModules`等等，如果你把它撇去可能会混淆，但它们是正确的，并与匹配的名称自己的角色为宜）

通过这种方法，我们的模块开发体验非常简单，并且*Vue 原生 API*友好，因此代码变得更简单、更清晰和可维护。

现在您正式成为**Vue Storefront 模块开发人员**。恭喜！

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-1-lazy-loading-in-practical-examples)秘诀一、实际例子中的延迟加载

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-2-how-a-module-can-be-leveraged-to-build-extensions-or-integrations-with)秘密 2. 如何利用模块来构建扩展或与其集成。

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-3-on-the-border-of-modularity)秘密 3. 在模块化的边界上





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-best-practices-for-tweaking-a-module)2. 调整模块的最佳实践

一旦你掌握了为模块构建骨架的窍门，现在是时候真正处理模块了。这里有很多机会可以自由构建由各种可用方法驱动的新模块，主要是在工作、扩展和挂钩到 Vue 的主要部分的意义上。

在这个秘籍中，我们逐步介绍了为*产品页面中的 Like 按钮*构建一个简单模块的步骤。本秘籍浏览每个主题的简要概念以用于演示目的。构建模块的完整细节在方法[7 中](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-building-a-module-from-a-to-z-in-an-iteration)继续。[从 A 到 Z 构建模块](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-building-a-module-from-a-to-z-in-an-iteration)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-2)1. 准备

- 你需要一个新的模块来玩。如果你完成了方法[*1，*](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)你就已经有了一个[*。 如何引导一个模块*](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-extend-vuex-store-from-inside-a-module)2-1。方案 A（从模块内部扩展 Vuex 存储）

*Vue Storefront*利用了*Vuex*的`module`特性。您可以从全局范围内封装模块的数据，以便您轻松控制对数据的控制。

1. 打开`index.ts`文件`example-module`at`./src/modules/example-module`

```bash
cd src/modules/example-module
vi index.ts # of course you can open it with other editors!
```

1. 为模块准备一个商店，如下所示：





 

 

 

 

 

 







```ts
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

const exampleModuleStore = {
  namespaced: true,
  state: {
    key: null
  }
}

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
// abridged ...
```

`namespaced`with `true`value 意味着它`store`被封装在一个模块中，而不是注册到全局存储。

`state` 包含要跟踪的数据对象。

1. 注册此`store`对应用程序的`store`使用`registerModule`：













 





```ts
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

const exampleModuleStore = {
  namespaced: true,
  state: {
    key: null
  }
}

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);
}
```

`registerModule`方法是一个 Vue 原生 API，用于为每个模块动态注册一个 store。*Vue Storefront Module*使用此方法进行数据存储，以便从全局范围封装模块数据。[更多信息（打开新窗口）](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration)

考虑`store`作为一个*模型*以纯MVC模型。

1. 您可以将 Vuex 添加`plugins`到您的商店。





 

 

 

 

 

 

 









 









```ts
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

const examplePlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'PRESSED_LIKE') {
      console.log('Customer pressed LIKE button on the product');
    }
  })
}

const exampleModuleStore = {
  namespaced: true,
  state: {
    key: null
  },
  plugins: ['examplePlugin']
}

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);
}
```

`plugins`当您想将事件*插入*到`mutation`of时很方便`state`。

`mutation`是一个包含`type`和的对象`payload`。通过检查`mutation`类型，您可以监听特定类型的状态变化。[更多信息（打开新窗口）](https://vuex.vuejs.org/guide/plugins.html)

您不仅可以聆听，`mutations`还可以聆听`actions`以下内容：

```js
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
```

它还提供了`before`与`after`当装饰器`plugin`应该被解雇的事件。（可用`3.1.0`）[更多信息（打开新窗口）](https://vuex.vuejs.org/api/#subscribeaction)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-2-recipe-b-override-vuex-store-with-extendstore)2-2。配方 B（使用 覆盖 Vuex 存储`extendStore`）

*Vue Storefront 的*人提出了***帮助***模块开发人员轻松扩展已注册的同名模块存储的想法。

1. 再次打开`index.ts`文件`example-module`在`./src/modules/example-module`

```bash
cd src/modules/example-module
vi index.ts # of course you can open it with other editors!
```

1. `helpers`核心导入如下：

 







```ts
import { extendStore, isServer } from '@vue-storefront/core/helpers';
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

const examplePlugin = store => {
// abridged ...
```

1. 添加额外的`product`商店：







 

 

 

 

 







```ts
// ... abridged
  plugins: ['examplePlugin']
}

const newProductModule = {
  state: {
    liked: false
  }
}

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
// abridged ...
```

1. 运行`extendStore`辅助方法以覆盖或添加到现有商店`product`，如下所示：





 





```ts
export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);

  extendStore('product', newProductModule);
}
```

1. 为了确认扩展成功，我们将使用[Chrome vue-devtools 扩展 （打开新窗口）](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)这在您开发*Vue.js*应用程序时真的很方便。

打开*Chrome DevTools*并转到*Vue*选项卡，然后单击*Vuex*选项卡或单击`ctrl`+ `2`。最后点击*Register module:product*，会看到如下界面，确认`product`店铺扩展成功：

![product_liked_borderline](https://docs.vuestorefront.io/v1/assets/img/product_like_state.d682e618.png)

提示

您可以使用*VUE-devtools*用于*Firefox的*，如果你使用*的Firefox*。安装[Firefox vue-devtools（打开新窗口）](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-3-recipe-c-extend-router-instance)2-3。方案 C（扩展路由器实例）

您还可以使用 Vue 原生 API 为您的模块动态添加路由。

1. 创建一个虚拟 Vue 组件`Liked.vue`只是为了`route`在`components`目录中的`./src/modules/example-module`目录中进行测试。

```bash
cd src/modules/example-module
mkdir components && cd components && vi Liked.vue
```

1. 使用虚拟模板代码填充文件，如下所示：

```vue
<template>
  <p>{{ greeting }} World and you {{liked}}! </p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello',
      liked: 'Liked it'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

1. 返回父目录，打开`index.ts`文件并在模块路由器上工作，如下所示：





 













 









 

 





```ts
import { extendStore, isServer } from '@vue-storefront/core/helpers';
import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import Liked from './components/Liked.vue'; // Import the component

const examplePlugin = store => {

// abridged ...

  state: {
    liked: false
  }
}

const exampleRoutes = [{ name: 'liked', path: '/liked', component: Liked, alias: '/liked.html' }]; // compose the router we will use

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);

  extendStore('product', newProductModule);

  router.addRoutes(exampleRoutes) // adding routes here
  router.beforeEach((to, from, next) => { next() }) // navigation guards here
}
```

要添加的路由必须是*数组*类型，即使它只有一个元素，`exampleRoutes`如上所示。每个路由对象有`name`，`path`，`component`和`alias`财产，这是非常简单的了解它们是什么。

`addRoutes` 是 Vue 原生 API，用于向路由器动态添加路由。

`beforeEach`是 Vue API 提供的导航守卫。[更多信息（打开新窗口）](https://router.vuejs.org/guide/advanced/navigation-guards.html)

1. 打开浏览器并访问`/liked`我们刚刚创建的路线，然后您将看到如下屏幕：

![route_liked_borderline](https://docs.vuestorefront.io/v1/assets/img/route_liked.2e7e0836.png)

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-4-recipe-d-use-hooks)2-4。配方 D（使用钩子）

构建模块最直观的方法之一是使用钩子。开源创建者经常故意在他们认为可扩展的任何地方留下尽可能多的钩子，以便 3rd 方开发人员将逻辑注入程序流。在这里，我们将研究*Vue Storefront*如何做到这一点。

1. 再次打开`index.ts`文件`example-module`在`./src/modules/example-module`

```bash
cd src/modules/example-module
vi index.ts # of course you can open it with other editors!
```

1. 进口`coreHooks`自`core`：





 







```ts
import { extendStore, isServer } from '@vue-storefront/core/helpers';
import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import Liked from './components/Liked.vue';
import { coreHooks  } from '@vue-storefront/core/hooks'; // Import hooks from core

const examplePlugin = store => {
// abridged ...
```

1. 调用您要使用的任何钩子，如下所示：













 

 

 





```ts
// ...abridged

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);

  extendStore('product', newProductModule);

  router.addRoutes(exampleRoutes)
  router.beforeEach((to, from, next) => { next() })

  coreHooks.afterAppInit(() => { // 
    console.log('App has just been initialized')
  })
}
```

1. 确认它已连接，在**Vue Storefront**根路径运行命令以引导**Vue Storefront**应用程序

```bash
docker-compose up 
```

或没有 `docker`

```bash
yarn dev
```

该应用程序再次启动并运行，它将吐出大量日志，指示已完成的工作，包括：



 





```bash
app_1  | [module] VS Modules registration finished. { succesfulyRegistered: '0 / 0', registrationOrder: [] }
app_1  | App has just been initialized # Successfully Hooked !
app_1  | Result from ES for 3e9eb2ab7b4d96276c016ae9d5aa18116483667603e7e84ad2346627 (category),  ms=613 null
app_1  | whole request [/liked]: 1323ms
```

你可以[更深入地](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks)阅读

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-5-recipe-e-manage-module-level-config)2-5。方案 E（管理模块级`config`）

有时您可能需要传递值以填充模块配置中的字段。我们为您提供了将`config`对象传递给`registerModule`函数的能力，让您可以选择何时注册`module`.

假设您需要使用集成到店面的 3rd 方服务。大多数情况下，您需要向第 3 方提供封装在请求中的 API 凭据，以便他们知道*您是您*并处理服务并返回属于您的结果。这个秘籍告诉你如何在模块注册期间使用 3rd 方帐户来做到这一点。

1. 再次打开`index.ts`文件`example-module`在`./src/modules/example-module`

```bash
cd src/modules/example-module
vi index.ts # of course you can open it with other editors!
```

1. 准备模块以接受`moduleConfig`您希望允许覆盖值的动态选项，如下所示：









 

 

 

 

 







 





```ts
// ...abridged

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  store.registerModule('example-module', exampleModuleStore);
  // ... abridged ...

  // Prepare apiKey for a request to a 3rd party to integrate with it, example as follows : 
  if (moduleConfig.apiKey) {
    const apiKey = moduleConfig.apiKey
  } else {
    // raise an error related to failure for sign-in to 3rd party service due to lack of apiKey
  }

  // Continue to send a request to the 3rd party as the context demands 
  // ... abridged for the sake of brevity ...

  console.log(apiKey); // This line helps you confirm apiKey value is overridden as intended
}
```

这表示`moduleConfig`对象在注册时`apiKey`具有为`module`用户提供选择的选项。

1. 转到父目录，打开`index.ts`它`./src/modules/index.ts`并修复代码如下：







 

 

 

 

 





```ts
// ... abridged 

  registerModule(AmpRendererModule)
  registerModule(InstantCheckoutModule) 
  
  registerModule(ExampleModule, {
    apiKey: "YOUR_VALUABLE_API_KEY_ON_THE_FLY"
  }) // Here you pass config object as you want it
}

// abridged ...
```

1. 为了确认`moduleConfig`按计划传递的选项，在**Vue Storefront**根路径运行命令以引导**Vue Storefront**应用程序

```bash
docker-compose up 
```

或没有 `docker`

```bash
yarn dev
```

应用程序再次启动并运行，现在查找我们注入的部分：



 





```bash
app_1  | [module] VS Modules registration finished. { succesfulyRegistered: '0 / 0', registrationOrder: [] }
app_1  | YOUR_VALUABLE_API_KEY_ON_THE_FLY # moduleConfig injected successfully !
app_1  | Calling asyncData in Home (theme) null
```

你可以[更深入地](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-configuration)阅读

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-6-recipe-f-access-app-level-config)2-6。配方 F（访问应用程序级`config`）

当您在*Vue Storefront 中*构建*模块*时，您还可以访问应用程序的. 是文件夹的编译版本，通常是. 当您需要访问时，您可以在一个.`config``config``./config``local.json``config``module`

1. 再次打开`index.ts`文件`example-module`在`./src/modules/example-module`

```bash
cd src/modules/example-module
vi index.ts # of course you can open it with other editors!
```

1. 调用`config`内部 a的节点，`module`如下所示：





 





```ts
// ... abridged 

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
  console.log(appConfig.products.defaultFilters); //  "products": {"defaultFilters": ["color", "size", "price", "erin_recommends"]}

// abridged ...
```

1. 如果您引导*Vue Storefront*应用程序，您可以看到如下日志：



 





```bash
app_1  | [GTM] Google Tag Manager extensions is not working. Ensure Google Tag Manager container ID is defined in config null
app_1  | [ 'color', 'size', 'price', 'erin_recommends' ] # here we go! successfully fetched global app config
app_1  | [module] VS Modules registration finished. { succesfulyRegistered: '0 / 0', registrationOrder: [] }
app_1  | This is one way to use moduleConfig
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-7-recipe-g-setting-up-server-module)2-7。方案 G（设置服务器模块）

我们强烈建议在 Vue Storefront 前使用某种 HTTP 服务器作为代理。让它成为`nginx`（在我们的[生产设置文档中](https://docs.vuestorefront.io/v1/guide/installation/production-setup.html)建议）`Varnish`或什至`Apache`. 这些 HTTP 服务器中的任何一个都允许您在 Vue Storefront 之前添加一些授权或重定向层。

这是推荐的方式。

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-advanced-output-processing)1. 高级输出处理

但是，通过使用[高级输出处理，](https://docs.vuestorefront.io/v1/guide/core-themes/layouts.html#how-it-works)您可以轻松地从您想要的 Vue Storefront 站点生成任何文本数据输出。包括 JSON、XML 等。这是一种生成站点地图和其他基于数据的文档的方法。

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-express-js-middleware)2.`Express.js`中间件

另一种选择是创建一个`Express.js`中间件。我们`core/scripts/server.ts`是一个经典的 Node.js 应用程序，所以它应该很容易。为此，您可能需要创建一个[服务器模块 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/compress/server.ts).

服务器模块位于`src/modules`并始终具有`server.ts`响应少数服务器入口点之一的入口点：

- `afterProcessStarted`-[在服务器启动后立即](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L13)执行[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L13).
- `afterApplicationInitialized`-[在 Express 应用程序初始化后立即](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L34)执行[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L34). 这是绑定新请求处理程序 ( `app.get(...)`, `app.use(...)`)的一个很好的切入点。阅读有关[Express.js 请求处理程序和路由的更多信息 （打开新窗口）](https://expressjs.com/en/guide/routing.html).
- `beforeOutputRenderedResponse`-[在 SSR 渲染完成后](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L189)执行[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L189)但在将其发送到浏览器之前；它允许您用自己的内容覆盖呈现的 SSR 内容。
- `afterOutputRenderedResponse`-[在高级输出处理管道之后](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L212)执行[ （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L212)执行。
- `beforeCacheInvalidated`, `afterCacheInvalidated`-[在缓存失效之前和之后](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L76)执行[（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/2c6e0e1c8e73952beabf550fe4530344a6bcce15/core/scripts/server.ts#L76)

这是一个[如何绑定](https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/google-cloud-trace/server.ts)的[示例 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/google-cloud-trace/server.ts)服务器进程启动后的跟踪模块：

```js
import { serverHooks } from '@vue-storefront/core/server/hooks'

serverHooks.afterProcessStarted((config) => {
  let trace = require('@google-cloud/trace-agent')
  if (config.has('trace') && config.get('trace.enabled')) {
    trace.start(config.get('trace.config'))
  }
})
```

[另一个例子 （打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/develop/src/modules/compress/server.ts)- 非常常见的情况 - 在 SSR 渲染管道（包括自定义 URL 地址）处理所有用户请求之前，绑定新的 Express 中间件来处理所有用户请求：

```js
import { serverHooks } from '@vue-storefront/core/server/hooks'

const compression = require('compression')
serverHooks.afterApplicationInitialized(({ app, isProd }) => {
  if (isProd) {
    console.log('Output Compression is enabled')
    app.use(compression({ enabled: isProd }))
  }
})
```

如果你想绑定自定义 URL 地址，这个例子可以这样修改：

```js
import { serverHooks } from '@vue-storefront/core/server/hooks'

serverHooks.afterApplicationInitialized(({ app, isProd }) => {
  app.get('/custom-url-address', (req, res) => {
    res.end('Custom response')
  })
})
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-2)3.窥视厨房（内部发生的事情）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-2)4. 厨师的秘密 (protip)





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-hooking-into-hooks)3.钩入钩子

Hooks 是核心开发人员编写的常用开发方法，允许 3rd 方开发人员或模块开发人员在程序的预定义位置注入自己的逻辑。使用这种方法，软件可以灵活设计，从而有助于处理最初设计时未知的问题。

核心开发人员通常会努力优化放置钩子的位置。在*Vue Storefront 中*，钩子通常属于两组。其中之一是`listener`; 它允许我们在应用程序生命周期的某个时刻做一些事情。另一个是`mutator`; 它允许我们在应用程序执行某些操作之前修改内部对象。

在这个秘籍中，我们将研究它们的位置以及如何将其应用于您的*模块*开发。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-3)1. 准备

- 你需要一个新的模块来玩。如果你完成了方法[*1，*](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)你就已经有了一个[*。 如何引导一个模块*](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-how-to-bootstrap-a-module)
- 您需要[设置multistores](https://docs.vuestorefront.io/guide/cookbook/multistores)（我们假设你已经设置另一家店了，其`storeCode`是`de`）

注意

这个秘籍处理[*1.10 的*](https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-9-1-10)钩子。如果您使用其他版本的*Vue Storefront*，请记住它们在细节上可能有所不同。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe)2. 食谱

客观的

我们构建了一个`storeviews`仅对某些人应用折扣的模块。

1. 对模块的要求列表如下：

- 需要*配置*哪些`storeviews`可能适用于折扣以及它应该是多少。
- 需要对`category`,`product`页中的产品价格应用折扣。
- 需要应验证折扣的点列表。

1. 现在从第一项开始，为要使用的模块创建*配置*。

```json
  discountStore: {
      "enableDiscountPerStoreViews": true,
      "storeViewsToApplyTo": ["de"],
      "globalDiscountInPercentage": 25,
      "allowLocalOverride": true
  }
```

- ```
  discountStore
  ```

   包含我们模块的配置节点。

  - `enableDiscountPerStoreViews` ：该值决定是否启用该模块。
  - `storeViewsToApplyTo`：这个数组包含`storeviews`代码。
  - `globalDiscountInPercentage`：这个值是应该对目标应用多少折扣`storeviews`。
  - `allowLocalOverride` ：此值允许动态覆盖折扣。

1. 创建一个名为*hookExample*的模块（根据自己的喜好更改）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-3)3.窥视厨房（内部发生的事情）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-3)4. 厨师的秘密 (protip)

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-1-the-list-of-hooks)Secret 1. 钩子列表

1. `cart`

- `beforeSync` ：
- `afterSync` ：
- `beforeAddToCart` ：
- `afterAddToCart` ：
- `beforeRemoveFromCart` ：
- `afterRemoveFromCart` ：

1. `order`

- `beforePlaceOrder` ：
- `afterPlaceOrder` ：

1. `user`

- `afterUserAuthorize` ：
- `afterUserUnauthorize` ：

1. `app` *全球层面*

- `beforeStoreViewChange` ：
- `afterStoreViewChange` ：
- `afterAppInit` ：

注意

该列表当然可能会发生变化，它会随着每个核心模块的增长而增长，以处理所有用例。

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-2-the-core-hooks-design)秘诀2.核心钩子设计

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#secret-3-rewriting-the-module-again-without-the-hooks)秘诀 3. 不用钩子再次重写模块





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-on-module-configuration)4. 关于模块配置

*配置*是开发人员设计的选项的基本模板，用户可以根据自己的喜好进行更改。所做和保存的这些更改将根据配置值在其生命周期中改变软件的进程。

*配置*往往有默认值，这需要程序的默认行为，这样用户就不必担心他们对默认行为是否满意。通过使用默认值精心设计的*配置*，可以实现具有灵活性的最佳用户体验。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-4)1. 准备

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe-2)2. 食谱

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-4)3.窥视厨房（内部发生的事情）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-4)4. 厨师的秘密 (protip)





## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_5-packaging-a-module)5. 打包一个模块

*手动*引导模块是轻而易举的，因为最小签名所需的骨架非常简单明了。*`CLI`*然而，与方法相比，*手动*方法通常更适合*本地*开发，换句话说，使用[手动方法](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-1-recipe-a-manual-bootstrapping)构建项目特定模块以获得更好的可读性。相比之下，*`CLI`*method 可以`npm`通过为您提供样板来帮助您轻松地将模块构建为包。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_1-preparation-5)1. 准备

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_2-recipe-3)2. 食谱

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_3-peep-into-the-kitchen-what-happens-internally-5)3.窥视厨房（内部发生的事情）

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_4-chef-s-secret-protip-5)4. 厨师的秘密 (protip)

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_6-extend-elasticsearch-request-body-using-storefront-query-builder)6. 使用扩展 Elasticsearch 请求体 `storefront-query-builder`

如果您使用的是新 [`storefront-query-builder` （打开新窗口）](https://github.com/vuestorefront/storefront-query-builder)和`api-search-query`搜索适配器（[随 v1.1.12 引入](https://docs.vuestorefront.io/v1/guide/upgrade-notes/#_1-11-1-12)）现在可以通过新过滤器扩展它，甚至覆盖现有过滤器，以自定义您的 Elasticsearch 请求体。

因此，通过这种方式，您可以将自定义 Elasticsearch 查询添加到查询链中，并且仍然使用`SearchQuery`Vue Storefront 中的符号。

> **注意：**这仅适用于`storefront-query-builder`version`1.0.0`和`vue-storefront`version `1.12.2`。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#usecases)用例

此功能派上用场的一个用例是，例如，如果您想在源代码中的多个点上添加复杂的查询。使用以下技术，您可以`SearchQuery`使用该`query.applyFilter(...)`方法在 VSF 源代码中的一行中添加自定义过滤器，然后将复杂逻辑添加到 API 内的自定义过滤器中。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#registering-a-new-filter)注册新过滤器

在`vue-storefront-api`将只尝试加载那些在configs注册过滤器。必须启用包含过滤器的扩展/模块，并且需要在`catalogFilter`数组内的扩展配置中注册新的过滤器模块类。过滤器文件必须位于`filter/catalog/`您的模块文件夹内。

例如：如果您使用名为`extend-catalog`的过滤器调用了一个模块，则过滤器`StockFilter`的文件路径将是`src/api/extensions/extend-catalog/filter/catalog/StockFilter.ts`，配置将如下所示：

```text
{
  "registeredExtensions": [ "extend-catalog" ],
  "extensions": {
    "extend-catalog": {
      "catalogFilter": [ "StockFilter" ]
    }
  }
}
```

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#filter-module-class-properties)过滤器模块类属性

过滤器可以包含四个不同的属性。接下来是简短的解释，他们在做什么。

- `check`– 此方法检查执行过滤器必须匹配的条件。执行第一个有效过滤器 - 之后的所有过滤器都将被忽略。
- `priority`– 这是将调用过滤器的优先级。排序从低到高。
- `mutator` – mutator 方法负责预先处理过滤器值，例如设置默认值或检查和更改类型。
- `filter`– 此方法包含我们不想添加的查询逻辑并改变`bodybuilder`查询链。

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#example)例子

让我们假设我们想添加一种可能性来添加一组默认的产品属性过滤器，我们可以将其应用于每个过滤器，`SearchQuery`而无需在源代码中重复我们自己。因此，例如，它应该过滤两个`color`和一个特定`cut`的过滤器，以便为我们在 VSF 中的多个位置实现的弹簧色短裤提供过滤器。

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#changes-in-vue-storefront-repository)`vue-storefront`存储库中的更改

VSF 代码中的查询看起来像这样（在 VSF 端就是这样）：

```js
import { SearchQuery } from 'storefront-query-builder'
import { quickSearchByQuery } from '@vue-storefront/core/lib/search'

//...

const query = new SearchQuery()
query.applyFilter({ key: 'spring-shorts', value: 'male', scope: 'default' })
const products = await dispatch('product/list', { query, size: 5 })
```

#### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#changes-in-vue-storefront-api-repository)`vue-storefront-api`存储库中的更改

在`vue-storefront-api`我们将添加真正的过滤器/查询魔法。已经有一个示例模块被调用`example-custom-filter`，我们将用于我们的过滤器。

当您查看其模块文件夹时`src/api/extensions/example-custom-filter/`，您会发现一个子文件夹，`filter/catalog/`其中包含该模块的所有现有自定义过滤器。在这个文件夹中，我们将把现有的复制`SampleFilter.ts`到另一个名为的文件夹中`SpringShorts.ts`——这是我们新的自定义过滤器模块类。

这个文件需要在配置 JSON 中注册，让 API 知道我们的扩展中有一个新的自定义过滤器。
因此，您打开您的`default.json`或特定的配置 JSON 文件并将我们的新文件名添加`SpringShorts`到配置节点`extensions.example-custom-filter.catalogFilter`数组。

我们`SpringShorts.ts`的对象包含[四个属性](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#filter-module-class-properties)：`priority`, `check`, `filter`, `mutator`。我们不需要`mutator`nor `priority`，所以我们可以删除这些行。`check`并且`filter`需要改变以满足我们的需求。所以，这就是我们的过滤器最终的样子：

```js
import { FilterInterface } from 'storefront-query-builder'

const filter: FilterInterface = {
  check: ({ attribute }) => attribute === 'spring-shorts',
  filter ({ value, attribute, operator, queryChain }) {
    return queryChain
      .filter('terms', 'pants', [ 'shorts' ])
      .filter('terms', 'cut', [ 1, 2 ])
      .filter('terms', 'color', [ 3, 4 ])
      .filter('terms', 'gender', [ value ])
  }
}

export default filter
```

在里面，`check`我们告诉过滤器只在属性命名为精确时应用`spring-shorts`。

在内部，`filter`我们使用`bodybuilder`库语法通过所需的过滤器扩展 Elasticsearch 查询链。

就是这样，现在我们可以只在 VSF 中的一行中通过复杂的查询进行过滤。

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_7-working-with-translations-in-module)7. 在模块中处理翻译

翻译在`core/i18n/resource/i18n/{your-locale}.csv`文件中提供，可以相应地扩展或覆盖`src/modules/{my-module}/resource/i18n/{your-locale}.csv`，但`src/themes/{my-theme}/resource/i18n`翻译自`src/module/{my-module}/resource/i18n`.

### [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#example-2)例子

下面是一个例子`en-US.csv`的`en-US`语言环境：

```csv
"customMessage","Here is the core message that can be overwritten in the module"
```

当您在`en-US.csv`文件`src/modules/{my-module}/resource/i18n/`夹中创建文件并覆盖一些消息时，例如：

```csv
"customMessage","You can define or override translation messages here."
```

...您可能会期望它`$t('customMessage')`会返回`You can define or override translation messages here.`而不是`Here is the core message. that can be overwritten in the module`.

## [#](https://docs.vuestorefront.io/v1/guide/cookbook/module.html#_8-tests-in-module)8. 模块中的测试

我们的 jest 配置允许您为您创建的每个模块编写测试。

要创建测试，您必须在`src/modules/{my-module}/test/unit/`. 该文件必须以`.spec.ts`或结尾`.spec.js`。通常，它必须匹配以下模式：`src/modules/{my-module}/test/unit/{my-test}.spec.(js|ts)`.