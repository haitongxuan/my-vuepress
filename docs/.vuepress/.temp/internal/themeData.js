export const themeData = {
  "logo": "https://docs.vuestorefront.io/v1/vuelogo.jpg",
  "navbar": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "博客",
      "children": [
        {
          "text": "Vue Storefront",
          "link": "/blog/vsf"
        },
        {
          "text": "Magento",
          "link": "/blog/magento"
        }
      ]
    },
    {
      "text": "Vue Storefont文档",
      "children": [
        {
          "text": "v 1.x",
          "link": "/vsf_docs/v1.x"
        },
        {
          "text": "v 2",
          "link": "/vsf_docs/v2"
        }
      ]
    }
  ],
  "sidebar": {
    "/vsf_docs/v1.x": [
      {
        "text": "Vue Storefront文档",
        "children": [
          "/vsf_docs/v1.x/README.md",
          {
            "text": "Headless",
            "children": [
              "/vsf_docs/v1.x/HeadLess/无头安全.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/vsf_docs/v1.x/Cookbook/Ch 1. 数据导入.md",
              "/vsf_docs/v1.x/Cookbook/Ch 2. VSF 上下文中的 Elasticsearch.md",
              "/vsf_docs/v1.x/Cookbook/Ch 3. 新手入门包（安装）.md",
              "/vsf_docs/v1.x/Cookbook/Ch 5. 从头开始构建模块.md",
              "/vsf_docs/v1.x/Cookbook/厨师的秘密笔记：严肃业务的核心培训.md"
            ]
          },
          {
            "text": "安装",
            "children": [
              "/vsf_docs/v1.x/安装/安装主题.md",
              "/vsf_docs/v1.x/安装/生产设置.md"
            ]
          },
          {
            "text": "基础内容",
            "children": [
              "/vsf_docs/v1.x/基础/发布周期.md",
              "/vsf_docs/v1.x/基础/项目结构.md",
              "/vsf_docs/v1.x/基础/配置文件解释.md",
              "/vsf_docs/v1.x/基础/如何贡献.md",
              "/vsf_docs/v1.x/基础/功能列表.md",
              "/vsf_docs/v1.x/基础/常见问题和解决方案.md",
              "/vsf_docs/v1.x/基础/SSR缓存.md",
              "/vsf_docs/v1.x/基础/静态页面生成器.md",
              "/vsf_docs/v1.x/基础/端到端测试.md",
              "/vsf_docs/v1.x/基础/自定义URL结构.md"
            ]
          },
          {
            "text": "核心和主题",
            "children": [
              "/vsf_docs/v1.x/核心和主题/Vue Storefront 中的主题.md",
              "/vsf_docs/v1.x/核心和主题/布局和高级输出操作.md",
              "/vsf_docs/v1.x/核心和主题/使用核心组件.md",
              "/vsf_docs/v1.x/核心和主题/使用 UI Store（界面状态）.md",
              "/vsf_docs/v1.x/核心和主题/Vue Storefront 的国际化 (i18n).md",
              "/vsf_docs/v1.x/核心和主题/与 Service Worker 合作.md",
              "/vsf_docs/v1.x/核心和主题/使用 Webpack.md",
              "/vsf_docs/v1.x/核心和主题/使用插件.md",
              "/vsf_docs/v1.x/核心和主题/使用“默认”主题中的样式表.md"
            ]
          },
          {
            "text": "Vue Storefront 中的数据",
            "children": [
              "/vsf_docs/v1.x/Vue Storefront 中的数据/处理数据.md",
              "/vsf_docs/v1.x/Vue Storefront 中的数据/Elasticsearch 数据格式.md",
              "/vsf_docs/v1.x/Vue Storefront 中的数据/弹性搜索查询.md",
              "/vsf_docs/v1.x/Vue Storefront 中的数据/数据库工具.md",
              "/vsf_docs/v1.x/Vue Storefront 中的数据/Vue Storefront 中的静态数据支持.md",
              "/vsf_docs/v1.x/Vue Storefront 中的数据/异步数据加载器.md"
            ]
          },
          {
            "text": "集成",
            "children": [
              "/vsf_docs/v1.x/集成/现有集成.md",
              "/vsf_docs/v1.x/集成/产品评论.md",
              "/vsf_docs/v1.x/集成/支付网关集成.md",
              "/vsf_docs/v1.x/集成/贝宝支付支持.md",
              "/vsf_docs/v1.x/集成/直接价格与 Magento 同步.md",
              "/vsf_docs/v1.x/集成/层级价格与 Magento 同步.md",
              "/vsf_docs/v1.x/集成/总计和购物车与 Magento 同步.md",
              "/vsf_docs/v1.x/集成/多商店 Magento 2 支持.md"
            ]
          },
          {
            "text": "数据解析器",
            "children": [
              "/vsf_docs/v1.x/数据解析器/介绍.md",
              "/vsf_docs/v1.x/数据解析器/类别服务.md",
              "/vsf_docs/v1.x/数据解析器/用户服务.md"
            ]
          }
        ]
      }
    ]
  },
  "darkMode": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
