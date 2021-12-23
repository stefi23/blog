---
title: "CSS selectors - Who gets priority?"
date: "2020-12-24"
tags: ["css", "coding"]
categories: "coding"
featuredImage: "../images/css-specificity.png"
---

I always wondered how CSS selectors get priority. I knew it was classes above element selectors but was never very sure about the rest until recently when I did a <a style="color: #942874; text-decoration:underline" target="blank" href="https://scrimba.com/playlist/pVLpVsk">CSS Fundamentals</a> course by <a style="color: #942874; text-decoration:underline" target="blank" href="https://youtube.com/kevinpowell">Kevin Powell</a> on <a style="color: #942874; text-decoration:underline" target="blank" href="https://scrimba.com/">Scrimba</a>.

It might sound strange but I was not aware of the term <b>specificity</b> until this moment. A term I'm not sure I can pronounce.

Specificity bascically is the answer to my CSS selectors prioritisation question. Before we get into that here is a more official definition:

> <b>Specificity</b> is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. <a style="color: #942874; text-decoration:underline" target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">\*source</a>.

In order words specificity is the way CSS styling will be prioritized based on the CSS selectors defined.

So how does CSS priority or otherwise said CSS specificity work? Here you can see the CSS selectors from lowest priority to the highest priority (specificity):

- <b>tag selectors</b> like for example an h1 or p tag are worth 1
- <b>.class selectors</b> are worth 10
- <b>#id selectors</b> are worth 100

To better illustrate this let’s look at the following example.

<!-- <pre class="line-numbers" style="max-width=300px; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif">
<code class="language-markup">
  <h1 class="title" id="title">Hello world!</h1>
  </code>
</pre> -->
<pre class="line-numbers" style="max-width=300px; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif">
<code>
 &lt;h1 class="title" id="title"&gt;Hello, world!&lt;/h1&gt;
 
</code></pre>

<pre class="line-numbers" style="max-width=300px; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif">
 <code class="language-html">
  h1 {
      color: red;
  }

  .title {
      color: green;
  }

  #title {
      color: pink;
  }
 </code>
</pre>

This will output a pink title as its id selector has the highest priority.

<pre class="line-numbers" style="max-width=300px; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif">
 <code class="language-markup">
 <h1 class="title" id="title"> Hello, world!</h1>
 <style>
  h1{
      color:red;
  }
  .title{
      color:green;
  }
  #title{
      color:pink!important;
  }
  </style>
 </code>
</pre>

It's important to note that the selector with the highest priority will prevail. The order in which the CSS rules appear won't matter. I want to also add that I would never name a `class` the same way as an `id`. This specific case where I used `class="title" id="title"` is only intended to highlight the specificity better.

To add to this, if you would have repeaded something in your stylesheet like for example:

<pre class="line-numbers" style="max-width=300px; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif">
 <code class="language-html">
  h1 {
      color: red;
  }
  h1 {
      color: green;
  }
  h1 {
      color: pink;
  }
 </code>
</pre>

Know that the last one defined will be the lucky winner in case they are all having the same priority(specificity).

<u>Summary:</u>

- `#title{ color: pink;}` is the most specific one as ids must be unique throughout a webpage, and should only target one element.

- `.title{ color: green;}` one the other hand can target any HTML element with a `class="title"` attribute, and is, therefore, less specific that and id selector.

- Consequentaly `h1 {color: red;}` is the least specific as it can target any HTML header 1 tag.

To end I will add that the inline style has a higher priority than the style defined in the internal or external style sheet and by using !important you can override other selectors but <a style="color: #942874; text-decoration:underline" target="blank" href="https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css">I've read that it's not a good practice</a>. I will let you dig more into that on your own as I will myself.
