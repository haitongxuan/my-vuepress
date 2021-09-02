# 与 Service Worker 合作

我们使用 Service Worker 有两个主要目的：

1. 缓存静态和动态数据提要，使其[离线可用（打开新窗口）](https://developers.google.com/web/fundamentals/primers/service-workers/)
2. 运行离线数据同步。

为了实现第一点，我们使用[sw-precache （打开新窗口）](https://github.com/GoogleChromeLabs/sw-precache)来自谷歌，其次，在[sw-toolbox 的](https://www.google.pl/search?q=sw-toolbox&oq=sw-toolbox&aqs=chrome..69i57j69i60l3j0l2.1529j0j4&sourceid=chrome&ie=UTF-8)帮助下，Vanilla JS[（打开新窗口）](https://www.google.pl/search?q=sw-toolbox&oq=sw-toolbox&aqs=chrome..69i57j69i60l3j0l2.1529j0j4&sourceid=chrome&ie=UTF-8)

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html#making-things-happen)让事情发生

的 service-worker 源代码`vue-storefront`使用 Babel 预设进行了预编译，并且所有内容都存储在`src/{themename}/service-worker/index.js`. 此文件附加到`service-worker.js`由`sw-toolbox`.

更改 中的任何内容后`{themename}/service-worker/index.js`，尽管您处于`yarn dev`自动重新加载模式，但您需要做两件事：

1. 重新编译应用程序（重新生成 service-worker）： `yarn build`
2. 在 Dev Tools 中重新加载 Service Worker（在 Chrome 中，只需单击**“取消注册”**并重新加载页面，就会安装一个新的 Service Worker）。

![如何在 Chrome 中与 service-worker 一起工作](https://docs.vuestorefront.io/v1/assets/img/chrome-dev-console.3c88272d.png)

## [#](https://docs.vuestorefront.io/v1/guide/core-themes/service-workers.html#communication-with-the-app)与应用程序的通信

应用程序可以使用事件总线与 Service Worker 对话，并且只能这样做。请看看`/core/lib/sw.js`我们哪里有以下方法：

```js
export function postMessage(payload) {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    // check if it's properly installed
    navigator.serviceWorker.controller.postMessage(payload);
    return false;
  } else {
    // no service workers supported push the queue manualy
    return true;
  }
}
```

它允许您向 Service Worker 发送数据。例如，当下单时 ( `/core/store/modules/checkout`)：

```js
  /**
   * Add order to sync. queue
   * @param {Object} product data format for products is described in /doc/ElasticSearch data formats.md
   */
  [types.CHECKOUT_PLACE_ORDER] (state, order) {
    const ordersCollection = StorageManager.get('orders')
    const orderId = entities.uniqueEntityId(order) // timestamp as a order id is not the best we can do but it's enough
    order.id = orderId.toString()
    order.transmited = false
    order.created_at = new Date()
    order.updated_at = new Date()

    ordersCollection.setItem(orderId.toString(), order).catch((reason) => {
      console.error(reason) // it doesn't work on SSR
      sw.postMessage({ config: config, command: types.CHECKOUT_PROCESS_QUEUE }) // process checkout queue
      console.info('Order placed, orderId = ' + orderId)
    }) // populate cache
  },
```