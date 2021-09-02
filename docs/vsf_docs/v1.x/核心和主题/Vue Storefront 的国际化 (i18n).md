# Vue Storefront 的国际化 (i18n)

Vue Storefront 允许您使用强大的[vue-i18n](http://kazupon.github.io/vue-i18n/)翻译整个 UI[ （打开新窗口）](http://kazupon.github.io/vue-i18n/)图书馆。

请在编写自己的主题/扩展时注意 i18n 问题，并牢记 i18n 支持，尤其是在向核心创建拉取请求时。

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/translations.html#using-i18n-in-code)在代码中使用 i18n

当你使用一个普通的 JS 模块时，你可以简单地使用翻译助手：

```js
import i18n from '@vue-storefront/i18n';
EventBus.$emit('notification', {
  type: 'success',
  message: i18n.t('Product has been added to the cart!'),
  action1: { label: i18n.t('OK'), action: 'close' },
});
```

如果您正在使用`.vue`组件，那么使用 Vue 指令就更简单了`$t`：

```html
    <span>
        {{ $t('Size guide') }}
    </span>
```

对于所有辅助方法和指令，以及可用参数，请查看[vue-i18n 文档 （打开新窗口）](http://kazupon.github.io/vue-i18n/introduction.html).

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/translations.html#working-with-translations)使用翻译

翻译在`core/i18n/resource/i18n/en-US.csv`文件中提供，可以相应地扩展/覆盖`src/themes/{themename}/resource/i18n/en-US.csv`。

下面是一个例子`en-US.csv`的`en-US`语言环境：

```csv
"customMessage","You can define or override translation messages here."
"welcomeMessage", "Welcome to Vue Storefront theme starter!",
"In case of any problems please take a look at the docs. If you haven't found what you were looking for in docs feel free to ask your question on our Slack", "In case of any problems please take a look at the docs. If you haven't found what you were looking for in docs feel free to ask your question on our Slack",
"Here are some links that can help you with developing your own theme", "Here are some links that can help you with developing your own theme",
"Project structure", "Project structure",
"Working with themes", "Working with themes",
"Working with components", "Working with components",
"Working with data", "Working with data",
"Vue Storefront Logo", "Vue Storefront Logo"
```

当您在`en-US.csv`文件`src/themes/{themename}/resource/i18n/`夹中创建文件并覆盖一些消息时，例如：

```csv
"customMessage","You can define or override translation messages here."
```

...您可能会期望它`$t('customMessage)`会返回`You can define or override translation messages here.`而不是`Here is the core message. that can be overwritten in the theme`. 就如此容易！😃