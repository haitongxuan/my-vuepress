<template><h1 id="使用-默认-主题中的样式表" tabindex="-1"><a class="header-anchor" href="#使用-默认-主题中的样式表" aria-hidden="true">#</a> 使用“默认”主题中的样式表</h1>
<p>默认主题的 CSS 设计为易于维护，这意味着文件占用空间尽可能小。我们正在使用 flexbox 和可重用的原子类来防止 CSS 文件的快速增长。我们试图避免嵌套 CSS 类（最大嵌套级别为 1），以使它们更易于理解和调试。</p>
<p>所有 (S)CSS 文件都应放在该<code>src/themes/{theme_name}/css</code>文件夹中。</p>
<p>所有的原子类都应该按需创建（例如，我们只在需要时才创建<code>pt-20</code>类<code>padding-top: 20px</code>）。遵循该规则将帮助您避免未使用的 CSS。</p>
<p>在您自己的主题之外，<code>default</code>您不需要遵循我们的技术堆栈和约定。我们只需要正确的 CSS 文件夹路径 ( <code>{theme_name}/css</code>)</p>
<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/stylesheets.html#technology-stack" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>技术栈</h2>
<ol>
<li>我们正在使用<a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS （打开新窗口）<OutboundLink/></a>作为 CSS 预处理器。</li>
<li><a href="http://flexboxgrid.com/" target="_blank" rel="noopener noreferrer">弹性盒网格 （打开新窗口）<OutboundLink/></a>用于布局。</li>
<li>所有可重复 CSS 属性的原子 CSS 约定 - 边距、填充、颜色、文本属性和边框。（<a href="https://www.lucidchart.com/techblog/2014/01/31/atomic-css-tool-set/" target="_blank" rel="noopener noreferrer">参见 Atomic CSS 的一些不错的介绍 （打开新窗口）<OutboundLink/></a>）。</li>
</ol>
<h2 id="如何在-vue-storefront-中设置-ui-元素的样式" tabindex="-1"><a class="header-anchor" href="#如何在-vue-storefront-中设置-ui-元素的样式" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/stylesheets.html#how-to-style-ui-elements-in-vue-storefront" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>如何在 Vue Storefront 中设置 UI 元素的样式</h2>
<p>假设我们有一小块 UI，并希望根据我们的图形设计师提供的模拟来设计它的样式。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello Vuers!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>根据模拟，上面<code>&lt;div&gt;</code>应该有 20px 上下填充（y 轴），10px 左右填充（x 轴），黑色背景，白色文本颜色，并显示 inline-flex。</p>
<p>让我们检查<a href="https://github.com/vuestorefront/vue-storefront/tree/master/src/themes/default/css" target="_blank" rel="noopener noreferrer">CSS 文件夹 （打开新窗口）<OutboundLink/></a>并找到所需的课程。</p>
<p>对于填充顶部/底部，有一个<code>py-x</code>类，其中<code>py</code>表示“填充 y 轴”并且<code>x</code>是 px 的大小。我们将<code>py-20</code>在这种情况下使用。与 x 轴相同 - 我们将使用<code>px-10</code>.</p>
<p>对于颜色，我们将使用<code>c-white</code>for<code>color: white</code>属性和<code>bg-black</code>for <code>background-color: black</code>。</p>
<p>现在我们<code>&lt;div&gt;</code>应该看起来像这样：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-20 px-10 c-white bg-black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello Vuers!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这些<code>display</code>属性在整个项目中并不常用，因此，它们不由原子类处理。我们可以通过组件<code>&lt;style&gt;</code>部分中的类以“正常”方式添加这样的属性。</p>
<p>现在我们完成的 UI 应该是这样的：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cool-item py-20 px-10 c-white bg-black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello Vuers!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.cool-item</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="扩展-s-css-文件" tabindex="-1"><a class="header-anchor" href="#扩展-s-css-文件" aria-hidden="true">#</a> <a href="https://docs.vuestorefront.io/v1/guide/core-themes/stylesheets.html#extending-s-css-files" target="_blank" rel="noopener noreferrer">#<OutboundLink/></a>扩展 (S)CSS 文件</h2>
<p>如果您找不到所需的 CSS 规则，请在扩展当前样式表之前阅读以下规则：</p>
<ol>
<li>不要在<code>default/css/</code>文件夹中创建新文件。如果您认为缺少某些内容，请通过<a href="http://vuestorefront.slack.com/" target="_blank" rel="noopener noreferrer">slack<OutboundLink/></a>与我们联系<a href="http://vuestorefront.slack.com/" target="_blank" rel="noopener noreferrer"> （打开新窗口）<OutboundLink/></a>在创建新文件之前。</li>
<li>遵守约定！通常，您可以在每个 SCSS 文件的顶部找到具有大小或颜色的数组，并在它们下方循环遍历这些数组以生成 CSS 类。请看<a href="https://github.com/vuestorefront/vue-storefront/blob/master/src/themes/default/css/margin.scss" target="_blank" rel="noopener noreferrer">margin.scss （打开新窗口）<OutboundLink/></a>文件。</li>
</ol>
<p>在顶部，您可以找到大小数组（以 px 和 % 为单位）：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>  <span class="token comment">// Pixels</span>

  <span class="token property"><span class="token variable">$margin-px</span></span><span class="token punctuation">:</span> 0 5 10<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-x-px</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-y-px</span></span><span class="token punctuation">:</span> 0 5 10<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-top-px</span></span><span class="token punctuation">:</span> 0 6 10 15 25 50<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-bottom-px</span></span><span class="token punctuation">:</span> 0 5 10 15 20 25 30 35<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-left-px</span></span><span class="token punctuation">:</span> 10 15 30<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-right-px</span></span><span class="token punctuation">:</span> 0 5 10 15<span class="token punctuation">;</span>

  <span class="token comment">// Percents</span>

  <span class="token property"><span class="token variable">$margin-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-x-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-y-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-top-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-bottom-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-left-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$margin-right-p</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>您可以在下面看到它们如何用于生成原子 CSS 类：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>  <span class="token comment">// Generators</span>

  <span class="token keyword">@mixin</span> <span class="token selector">margin </span><span class="token punctuation">{</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.m<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.m<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-x-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mx<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-x-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mx<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-y-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.my<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-y-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.my<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-top-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mt<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-top-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mt<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-bottom-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mb<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-bottom-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mb<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-left-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.ml<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-left-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.ml<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-right-px</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mr<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$margin-right-p</span> </span><span class="token punctuation">{</span>
      <span class="token selector">.mr<span class="token variable">#{$i}</span>p </span><span class="token punctuation">{</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$i</span>/100<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><p>假设您需要一个现在不可用的 55px 顶部边距类。在这种情况下，您只需<code>55</code>要向<code>$margin-top-px</code>数组添加一个值。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$margin-top-px</span></span><span class="token punctuation">:</span> 0 6 10 15 25 50<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>更改后，它应如下所示：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$margin-top-px</span></span><span class="token punctuation">:</span> 0 6 10 15 25 50 55<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
