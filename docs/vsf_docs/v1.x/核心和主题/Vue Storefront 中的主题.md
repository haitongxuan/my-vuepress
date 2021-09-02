# Vue Storefront 中的主题

提醒

本指南基于版本发布`default`前的主题`1.12`。这里提到的一般思想和结构是基于前`1.12` `default`主题创建的。

Vue Storefront 允许您快速开发自己的主题并使用我们的核心业务逻辑。所有电子商务功能都在核心中实现，因此您只需编写 HTML 和 CSS 并从核心继承业务逻辑，即可轻松开发完全可用的在线商店。当然，您可以轻松修改和扩展主题中的核心逻辑。

您可以[在此处](https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html)阅读有关 Vue Storefront 核心组件以及如何使用它们的更多[信息](https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html)

所有主题都位于`src/themes`文件夹中，您可以将它们视为单独的 Vue.js 应用程序，这些应用程序使用 Vue Storefront 核心提供开箱即用的功能。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#switching-themes)切换主题

要使用位于 中的任何主题`src/themes`，只需`theme`将配置文件中的`name`属性更改为位于主题根目录中的 package.json 文件中的属性。配置文件位于`config`文件夹中。你不应该在`config/default.json`. 而只是将`default.json`文件复制到同一文件夹，命名`local.json`并在那里进行更改。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#creating-your-own-themes)创建自己的主题

要创建您自己的 Vue Storefront 主题，您可以复制和修改默认主题，该主题是完全样式的并且可以立即使用（这是您可以在我们的演示中找到的主题）。

这样做：

1. 复制`default`位于中的文件夹`src/themes`并将其名称更改为新主题的名称。
2. 更改`name`主题`package.json`文件中的属性。
3. 将此名称插入`theme`.config 文件的属性中`config/local.json`。
4. 运行`yarn install`以便*lerna*可以检测到新主题。
5. 开始为 Vue Storefront 开发您自己的主题！

只有经过社区测试和接受的官方主题才能在`master`分支中。请在不同的分支上开发您自己的主题并保持更新`master`以确保它与最新的核心一起使用。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#important-theme-files)重要的主题文件

每个主题都是一个单独的 Vue.js 应用程序，具有自己的依赖项，可以使用核心甚至对其进行修改。您可以在下面找到对您的主题工作至关重要的文件列表：

- `assets` - 特定主题的资产

- `components` - 特定主题的组件

- `css` - 特定主题的 css 文件

- `helpers` - 辅助方法

- `layouts` - 布局文件

- ```
  mixins
  ```

  \- 特定主题的混入（扩展

  ```
  core/mixins
  ```

  ）

  - `index.js` - 在这里你可以注册你的主题特定的mixin

- `pages` - 您的商店页面

- `resource`- 特定主题的资源（扩展`core/resource`）

- `router` - 主题路由器

- ```
  store
  ```

  \- 特定主题的商店（扩展

  ```
  core/store
  ```

  ）

  - `ui-store.js` - 在这里你可以扩展核心 `ui-store`
  - `index.js` - 在这里您可以注册特定主题的商店

- `App.vue` - 主题入口组件

- `index.js` - 主题初始化

- `package.json` - 特定于主题的依赖项

- ```
  service-worker
  ```

  - `index.js`您可以在此处扩展核心服务工作者（请参阅[使用服务工作者](https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html)

- `webpack.config.js`- 您可以在此文件中扩展核心 webpack 构建（扩展`core/build/`，请参阅[使用 webpack](https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html)）

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#official-vue-storefront-themes)官方 Vue 店面主题：

- [水豚 （打开新窗口）](https://github.com/vuestorefront/vsf-capybara)- Capybara 是 Vue Storefront 的基于 Storefront UI 的主题。
- [默认 （打开新窗口）](https://github.com/vuestorefront/vsf-default)- 默认 VS 主题始终具有最新功能。在您的商店中采用 VS 的最简单方法是采用此方法并根据您的需要对其进行修改（查看[gogetgold.com （打开新窗口）](https://www.gogetgold.com/)举个例子）

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/themes.html#related)有关的

- [使用组件](https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html)
- [在 Vue Storefront 中创建主题——与后端无关的电子商务 PWA 前端（第 1 部分——了解 Vue Storefront 核心）](https://medium.com/@frakowski/developing-themes-in-vue-storefront-backend-agnostic-ecommerce-pwa-frontend-part-1-72ea3c939593)