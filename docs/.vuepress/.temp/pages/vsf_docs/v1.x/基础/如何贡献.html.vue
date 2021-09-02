<template><h1 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h1>
<p>已经是 JS/Vue.js 开发人员？选择一个问题，推送一个 PR，并立即成为 vue-storefront 贡献者社区的一员。我们已经标记了一些问题，<code>Easy first pick</code>以使新人更容易开始！</p>
<p>感谢您的关注和参与！</p>
<h2 id="分行" tabindex="-1"><a class="header-anchor" href="#分行" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/contributing.html#branches" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>分行</h2>
<p>您应该 fork 项目或为新功能创建一个分支。核心团队使用的主要分支有：</p>
<ul>
<li><code>master</code> - 我们存储应用程序的稳定版本（可以部署到我们的演示实例）的位置。</li>
<li><code>develop</code> - 应用程序的最新版本，有点像“夜间”构建。</li>
</ul>
<p>请<code>develop</code>用于开发目的，因为<code>master</code>可以在新版本发布时合并（大约每月一次）。</p>
<h2 id="问题报告指南" tabindex="-1"><a class="header-anchor" href="#问题报告指南" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/contributing.html#issue-reporting-guidelines" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>问题报告指南</h2>
<p>始终定义问题的类型：</p>
<ul>
<li>错误报告</li>
<li>功能要求</li>
</ul>
<p>在编写问题时，请尽可能具体。所有关于支持实施或应用程序设置的请求都应发送至<a href="mailto:contributors@vuestorefront.io">contributors@vuestorefront.io</a></p>
<p>如果问题与特定主题的某些更改有关，请在问题前加上主题名称（例如<code>[default] change product tile background color</code>）。</p>
<h2 id="打字稿" tabindex="-1"><a class="header-anchor" href="#打字稿" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/contributing.html#typescript" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>打字稿</h2>
<p>我们将 TypeScript 引入 Vue Storefront 核心，因此您可以在合适的地方使用它，但请务实。仅在新模块和 Vuex 中使用 TS 功能会很好。以下是关于如何在 Vue Storefront 中使用 TS 功能的一些想法：<a href="https://docs.vuestorefront.io/v1/guide/basics/typescript.html" target="_blank" rel="noopener noreferrer">TypeScript Action Plan<OutboundLink/></a>。</p>
<h2 id="拉取请求清单" tabindex="-1"><a class="header-anchor" href="#拉取请求清单" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/contributing.html#pull-request-checklist" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>拉取请求清单</h2>
<p>这是提交拉取请求的方法。<strong>不符合这些要求的拉取请求将不会被合并。</strong></p>
<p>警告</p>
<p><strong>始终</strong>使用<a href="https://github.com/vuestorefront/vue-storefront/blob/master/PULL_REQUEST_TEMPLATE.md" target="_blank" rel="noopener noreferrer">拉取请求模板 （打开新窗口）<OutboundLink/></a>，它会自动添加到每个 PR 中。</p>
<ol>
<li>分叉存储库并将其克隆到“开发”分支上的本地。</li>
<li>为您的编辑创建一个分支。使用以下分支命名约定：</li>
</ol>
<ul>
<li><code>bugfix/task-title</code></li>
<li><code>feature/task-name</code></li>
</ul>
<ol>
<li>描述你改变了什么。如果您的更改包含 HTML/CSS 中的差异，则包括新功能或前后的屏幕截图。将图像拖放到拉取请求的正文中。</li>
<li>在您的 PR 中引用任何相关问题或支持文档（例如<code>Issue: 39. Issue title.</code>）。</li>
<li>如果您要添加新功能，请随 PR 一起提供文档。另外，将其添加到[升级说明中（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/Upgrade notes.md)</li>
<li>如果您要删除/重命名某些内容或更改其行为，请同时将其包含在[升级说明中（打开新窗口）](https://github.com/vuestorefront/vue-storefront/blob/master/doc/Upgrade notes.md)</li>
<li>测试您的更改！针对任何现有测试运行更改并在需要时创建新测试。确保您的更改不会破坏现有项目。确保您的分支通过 Travis CI 构建。</li>
<li>如果您发现了潜在的安全漏洞，请不要在公共问题跟踪器上报告。相反，将其发送给我们：<a href="mailto:contributors@vuestorefront.io">contributors@vuestorefront.io</a>。我们将与您一起尽快进行验证和修复。</li>
</ol>
<h2 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/contributing.html#new-features" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>新功能</h2>
<p>如果您要制作任何新功能，请确保根据我们新的模块化方法进行调整。<a href="https://docs.vuestorefront.io/v1/guide/modules/introduction.html" target="_blank" rel="noopener noreferrer">在这里<OutboundLink/></a>阅读更多</p>
</template>
