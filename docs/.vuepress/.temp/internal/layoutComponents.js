import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import(/* webpackChunkName: "layout-404" */"E:/my-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import(/* webpackChunkName: "layout-Layout" */"E:/my-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
