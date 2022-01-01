---
title: "Using CSS Transitions"
date: "2020-12-09"
tags: ["coding"]
categories: "coding"
featuredImage: "../images/on-trust.jpg"
---

Recently Florin Pop shared a course he worked on and just launched on Udemy, [50 Projects In 50 Days - HTML, CSS & JavaScript](https://www.udemy.com/course/50-projects-50-days/). Given the great promotion, 10 euros for the course, I decided to purchase it in support of his work. The idea of the course is to sharpen my HTML, CSS & JavaScript skills by building 50 quick, unique & fun mini projects.

Yesterday I've build the Expanding Cards one and refreshed my mind about [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) which I believe are cool to know about and use.

CSS Transitions allow you do modify a CSS property smoothly, over a given duration.

To do this you have 4 propreties at hand and you can write it in 2 ways:

<pre class="line-numbers" 
     style="width:100%; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif; font-size:14px">
  <code style="max-width:100vw">
    .example {
      transition-property: color;
      transition-duration: 2s;
      transition-timing-function: linear;
      transition-delay: 1s;
    }
  </code>
</pre>

<pre class="line-numbers" 
     style="width:100%; background: #352d39; color:#e3f4f5; font-family: Open Sans,sans-serif; font-size:14px">
  <code style="max-width:100vw">
    .example {
      transition: [transition-property][transition-duration]
      [transition-timing-function][transition-delay];
    }
  </code>
</pre>

`transition` Is the shorthand property for setting the four transition properties into a single property as per the example above  
`transition-property` Specifies the name of the CSS property the transition effect is for.  
`transition-duration` Specifies how many seconds or milliseconds a transition effect takes to complete. The slower you want something to change the higher you would set this value.  
`transition-timing-function` Specifies the speed curve of the transition effect. There are various options. My advice for this is to try them out and see how things change. You can find the options with some visual examples [here](https://cssreference.io/property/transition-timing-function/).  
`transition-delay` Specifies a delay (in seconds) for the transition effect.

In the project I did the effect was used to ease in with for 0.3 seconds with a delay 0.4 second delay the opacity of the text. See it in action [here](https://stefi.xyz/50-JS-Projects/Expanding-Cards/index.html)
