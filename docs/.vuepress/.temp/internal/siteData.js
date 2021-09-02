export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "海哥私房菜",
  "description": "Vue Storefont,Magento1.9,Magento2.2,magento,wordpress,Wordpress",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "favicon.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
