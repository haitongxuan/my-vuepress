<template><h1 id="发布周期" tabindex="-1"><a class="header-anchor" href="#发布周期" aria-hidden="true">#</a> 发布周期</h1>
<p>本文档描述了 Vue Storefront 代码版本的发布方式。您将了解发布过程是什么样的，验收标准，我们的 git 流程是什么样的，以及使用哪个分支作为稳定分支。</p>
<h2 id="vue-storefront-版本是如何发布的" tabindex="-1"><a class="header-anchor" href="#vue-storefront-版本是如何发布的" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#how-vue-storefront-versions-are-released" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront 版本是如何发布的</h2>
<p>从 1.9 版开始，我们分两个阶段发布每个 VSF 版本：</p>
<ul>
<li><strong>发布候选阶段 (RC)</strong>，也称为“功能版本”。此版本包含 API 的所有新功能、改进和添加，以及小错误修复。新功能和新增功能仅在此阶段合并和发布。在此阶段引入的功能 API 可能会略有变化。</li>
<li><strong>稳定阶段</strong> 是以生产就绪版本结束的<strong>阶段</strong>。在此阶段，我们只对之前引入的功能进行稳定和错误修复。没有合并新功能和 API 添加。来自 RC 版本的 PR 已经过测试，并且它们的 API 已根据反馈进行了简化和/或调整。</li>
</ul>
<p>假设下一个版本是 1.x，两个月的周期将如下所示：</p>
<ul>
<li>v1.x-RC.y — 不稳定的版本，具有准备测试和反馈的尖端功能。</li>
<li>v1.xy —<strong>准备用于生产</strong>的稳定版软件。</li>
</ul>
<h2 id="如何合并新功能" tabindex="-1"><a class="header-anchor" href="#如何合并新功能" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#how-new-features-are-merged" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何合并新功能</h2>
<p>在 RC 阶段，在反馈和接受后，带有新特性的特性 Pull Request 通常会合并到<code>develop</code>分支中。进入稳定阶段后，我们正在标记当前的开发分支，从中创建一个<code>release/x</code>（其中<code>x</code>是当前版本的编号）分支并在那里进行稳定。在稳定阶段，新功能合并到开发分支，并将在下一<code>RC</code>阶段合并。</p>
<h2 id="发布周期流程" tabindex="-1"><a class="header-anchor" href="#发布周期流程" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#release-cycle-flow" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>发布周期流程</h2>
<h3 id="_1-开发阶段" tabindex="-1"><a class="header-anchor" href="#_1-开发阶段" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#_1-development-phase" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>1. 开发阶段</h3>
<p>在周期的第一阶段，我们主要关注功能和改进。这个阶段的分支应该从实际创建<code>develop</code>，PR 也应该指向这个分支。合并到的更改<code>develop</code>可用于在 https://test.storefrontcloud.io 上进行测试</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/release-cycle-1.3c1cae02.png" alt="开发阶段"></p>
<h3 id="_2-发布候选阶段" tabindex="-1"><a class="header-anchor" href="#_2-发布候选阶段" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#_2-release-candidate-phase" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>2. 发布候选阶段</h3>
<p>在某个时候，当下一个次要版本的里程碑完成时，我们正在从<code>develop</code>被调用的<code>release/vx.y</code>（例如：）创建新分支<code>release/v1.9</code>。在该新分支被标记为版本的第一个 RC 之后（示例<code>v1.10.0-rc.1</code>）。然后就可以进行社区测试了。在测试、反馈和稳定期间，此分支上可能有多个候选发布版本。当在此阶段进行改进时，应该从实际创建分支，此时不应<code>release/vx.y</code>包含功能 - 仅对当前版本进行改进。在将一组错误修复和改进合并到<code>release/*</code>分支后，需要将其标记为下一个 RC 版本并合并到<code>develop</code>分支中，以对其进行更新。</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/release-cycle-2.51dae746.png" alt="发布候选阶段"></p>
<h3 id="_3-发布阶段" tabindex="-1"><a class="header-anchor" href="#_3-发布阶段" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#_3-release-phase" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>3. 发布阶段</h3>
<p>当 RC 版本稳定时，发布分支被合并<code>master</code>并标记为下一个稳定版本（示例<code>v1.9.0</code>）。之后，删除当前合并的发布分支并开始新的开发阶段。如果在当前的稳定版本上发现了一些严重的错误，那么一个新的修补程序（例如<code>hotfix/v1.9.1</code>，遵循<a href="https://semver.org/" target="_blank" rel="noopener noreferrer">语义版本控制规则 （打开新窗口）<OutboundLink/></a>) 分支应该从实际的<code>master</code>. 合并和测试修补程序后，此分支（如之前的发布分支）被合并到<code>master</code>并标记遵循<a href="https://semver.org/" target="_blank" rel="noopener noreferrer">语义版本控制规则 （打开新窗口）<OutboundLink/></a>.</p>
<p><img src="https://docs.vuestorefront.io/v1/assets/img/release-cycle-3.da4ffd44.png" alt="发布阶段"></p>
<h3 id="概括" tabindex="-1"><a class="header-anchor" href="#概括" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/basics/release-cycle.html#summary" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>概括</h3>
<p>需要注意的重要一点是，此发布周期可确保稳定可靠的 Storefront 版本。阶段也不会阻塞新功能——你可以在任何阶段开发新功能，但它应该只合并到<code>develop</code>分支并经历整个周期。</p>
<p><a href="https://github.com/vuestorefront/vue-storefront/edit/master/docs/guide/basics/release-cycle.md" target="_blank" rel="noopener noreferrer">编辑这个页面<OutboundLink/></a> （打开新窗口）</p>
</template>
