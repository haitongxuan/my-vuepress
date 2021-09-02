# 使用 Webpack

为了使 Vue Storefront 快速且对开发人员友好，我们在后台使用 webpack。我们需要它来转换资产、处理`.vue`文件、处理所有样式，并使用 eslint 提供的 linting 使我们的代码更易于维护。有了它，您无需担心手动配置它即可开始在 Vue Storefront 上工作或为其构建自己的主题。然而，当你想根据你的特殊需求调整它时，也可以通过每个主题的可扩展 webpack 配置来实现。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#core-webpack-build)核心 webpack 构建

Vue Storefront 核心使用的所有构建脚本都可以在`core/build`目录中找到。如果您想改进我们的构建或添加对新案例的支持，您可能只需要更改那里的文件，有时更新`package.json`.

客户端和服务器的基本配置在`webpack.base.config.js`. 这种配置然后用特定的客户端和服务器合并CONFIGS`webpack.client.config.js`和`webpack.server.config.js`。

对于开发模式 ( `yarn dev`)`dev-server.js`文件用于使用主题提供的自定义配置运行前面提到的配置文件 ( `webpack.client.config.js`, `webpack.server.config.js`)。我们使用`webpack-dev-middleware`和`webpack-hot-middleware`使网站开发尽可能快速和简单。

在`vue-loader.config.js`整个配置`vue-loader`中存储。如果需要更改单文件组件的样式处理，可以在这个文件中进行设置（如果要扩展Vue Storefront核心）。

构建 Vue Storefront 的生产版本`webpack.prod.client.config.js`并`webpack.prod.server.config.js`与`build`脚本一起使用。在这些文件中，我们的基本配置与主题特定的扩展配置合并。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#extending-core-build-in-themes)扩展主题中的核心构建

Vue Storefront 遵循[next.js](https://github.com/zeit/next.js/)推广的[技术 （打开新窗口）](https://github.com/zeit/next.js/)和[Nuxt （打开新窗口）](https://nuxtjs.org/)用于扩展 webpack 配置。对于每个主题，您都可以配置`webpack.config.js`文件，以便您可以访问基本配置并根据需要对其进行自定义，而无需更改核心构建文件。

### [#](https://docs.vuestorefront.io/v1/guide/core-themes/webpack.html#example)例子

下面是一个简单的例子，`webpack-bundle-analyzer`用于检查生成的 webpack 包。除了analyzer，`json5-loader`用于处理`json5-loader`项目中的JSON5文件。

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = function(config, { isClient, isDev }) {
  let configLoaders;
  if (isClient) {
    configLoaders = config.module.rules;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        statsFilename: 'test',
        generateStatsFile: true,
        analyzerMode: 'static',
      }),
    );
  } else {
    configLoaders = config.module.rules;
  }
  configLoaders.push({
    test: /\.json5$/,
    loader: 'json5-loader',
  });
  return config;
};
```

此文件应导出返回完整配置的函数。此函数使用两个参数执行。首先是完整的核心 Vue Storefront webpack 配置。第二个是具有属性的对象：`isClient`和`isDev`。

选项`isClient`表示配置用于客户端包。

选项`isDev`设置为`true`如果 Vue Storefront 在开发模式下运行。

在客户端构建 ( `isClient == true`)的情况下， config 参数是一个包含两个元素的数组。第一个数组元素是客户端配置，第二个元素用于生成 Service Worker 文件。

对于服务器构建 ( `isClient == false`)， config 参数是标准的 webpack 配置对象。

扩展配置中使用的所有加载器和插件都将从主题`node_modules`目录中获取，因此请确保将其保存在主题`package.json`文件中。