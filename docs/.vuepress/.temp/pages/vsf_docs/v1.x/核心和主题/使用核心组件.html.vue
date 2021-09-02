<template><h1 id="使用核心组件" tabindex="-1"><a class="header-anchor" href="#使用核心组件" aria-hidden="true">#</a> 使用核心组件</h1>
<h2 id="vue-storefront-组件类型" tabindex="-1"><a class="header-anchor" href="#vue-storefront-组件类型" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#vue-storefront-component-types" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>Vue Storefront 组件类型</h2>
<p>在 Vue Storefront 中有两种类型的组件：</p>
<ul>
<li>**核心组件：**在核心组件中，我们实现了电子商务商店的所有基本业务逻辑，因此您无需自己从头开始编写。您可以在您的主题中使用它们，您需要做的就是设置样式和创建 HTML 标记。每个核心组件都提供了一个交互界面。如果需要，可以在您的主题中扩展或覆盖此界面。核心组件应该作为 mixins 注入到主题中。它们只包含业务逻辑——HTML 标记和样式应该在主题中完成。您通常可以在<code>components</code>每个模块的文件夹中找到核心组件。</li>
<li>**主题组件：**主题组件是您在应用程序中真正看到的内容。它们可以从核心组件继承业务逻辑，也可以创建为特定于主题的组件。所有 CSS、HTML 和特定于 ui 的逻辑都应放在主题中。</li>
</ul>
<h2 id="使用核心组件-1" tabindex="-1"><a class="header-anchor" href="#使用核心组件-1" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#working-with-core-components-2" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>使用核心组件</h2>
<p>首先，**仅当您向核心添加与 ui 无关的功能时才覆盖核心组件。**在主题中使用核心组件的正确方法是将它们视为外部 API。您可以继承功能并在主题中扩展它们，但永远不要在核心中更改它。</p>
<p><strong>当您修改核心组件时，永远不要更改组件的 API</strong>（组件为主题公开的数据和方法）。此类更改将破坏使用此核心组件的主题。</p>
<h2 id="在主题中使用核心组件" tabindex="-1"><a class="header-anchor" href="#在主题中使用核心组件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#using-core-components-in-your-theme" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>在主题中使用核心组件</h2>
<h3 id="对于组件" tabindex="-1"><a class="header-anchor" href="#对于组件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#for-components" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>对于组件</h3>
<p>继承本身是由<a href="https://vuejs.org/v2/guide/mixins.html" target="_blank" rel="noopener noreferrer">vue mixins<OutboundLink/></a>完成的<a href="https://vuejs.org/v2/guide/mixins.html" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>使用默认合并策略。</p>
<p>从核心组件继承：</p>
<ol>
<li><strong>在您的主题中创建新组件。</strong></li>
<li><strong>导入要继承的核心组件：</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> YourCoreComponent <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/modules/{module_name}/YourCoreComponent'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li><strong>将核心组件 mixin 添加到您新创建的主题组件中：</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span>YourCoreComponent<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>从现在开始，您可以访问和覆盖核心组件中的所有方法、数据和组件，就像在您自己的主题组件中声明的那样。</p>
<h3 id="对于页面" tabindex="-1"><a class="header-anchor" href="#对于页面" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#for-pages" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>对于页面</h3>
<p>页面中的继承与其他组件中的继承完全一样。唯一的区别是导入别名。而不是<code>core/components</code>我们需要从<code>core/pages</code>别名开始。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> YourCorePage <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/pages/YourCorePage'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span>YourCorePage<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>核心页面放置在<code>core/pages</code>文件夹中。</p>
<h2 id="覆盖和扩展核心组件和页面" tabindex="-1"><a class="header-anchor" href="#覆盖和扩展核心组件和页面" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/core-components.html#overriding-and-extending-core-components-and-pages" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>覆盖和扩展核心组件和页面</h2>
<p>由于核心组件只是普通的 JavaScript 对象，因此您可以在混合主题之前轻松修改它们。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> YourCorePage <span class="token keyword">from</span> <span class="token string">'@vue-storefront/core/pages/YourCorePage'</span>

YourCorePage<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Overrided method foo'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span>YourCorePage<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
