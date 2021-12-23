---
title: "Understanding CSS display: inline; block; inline-block "
date: "2021-01-07"
tags: ["css", "coding"]
categories: "coding"
featuredImage: "../images/css-display.png"
---
 
When styling elements on a page it's important to understand what kind of elements these are.
 
## Inline elements 
 
Inline elements are elements that can be put inside block elements without taking a new line. An example of such elements are links &lt;a&gt;that can be inserted for example in titles or paragraphs or &lt;span&gt;.  
 
Another inline element is an image &lt;img&gt;. If you add an image in a paragraph you will see it will be inserted in the text. It’s important to know that this can be changed. If for example, you want an image to not sit inside the text you could change it's display property to `display: block;`
 
 
- Elements take only that necessary space without occupying a new line 
- They appear next to each other on the same line (e.g. link in a paragraph with a span)
- The height and width of these type of elements cannot be changed
- Examples: p, a, button, input, label, script, iframe, embeded, etc.
 
 
With **inline-block** you can change the width and height. Other than that it behaves just like an inline element.
 
## Block Elements
 
Block-like elements (div, p, h1, etc.) always take a new separate line and stretch out horizontally as far as possible by default.
 
- Elements take the largest possible width, by default.
- Every block element appears on a new line.
- The width and height properties can be used.
- Elements can contain both inline and block elements.
 
 
We also have `display:none` and `visibility:hidden`. The display: none option makes the element disappear without showing the space it took. This is used for example with a sliding navbar to show it on click and then to hide it. On the other hand with visibility: hidden the element is not visible but the space it took cannot be occupied by other elements.
