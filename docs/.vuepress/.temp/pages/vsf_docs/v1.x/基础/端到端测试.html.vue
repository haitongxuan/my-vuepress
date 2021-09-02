<template><h1 id="端到端测试" tabindex="-1"><a class="header-anchor" href="#端到端测试" aria-hidden="true">#</a> 端到端测试</h1>
<p>对于 Vue Storefront 中的 e2e 测试，我们使用<a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress （打开新窗口）<OutboundLink/></a>. 前往他们的网站，获取有关如何编写 e2e 测试的优秀文档、最佳实践和教程。</p>
<p>我们还没有 e2e 测试指南，但我们尝试遵循 Cypress 推荐的最佳实践。遵循它们以使测试更可靠且更易于维护。</p>
<h2 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/e2e.html#running-tests" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>运行测试</h2>
<p>要打开 cypress，只需运行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn test:e2e
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在后台运行所有测试：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn test:e2e:ci
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
