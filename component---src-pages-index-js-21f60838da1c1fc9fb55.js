(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN"),i=a("Wbzz"),c=(a("q4sD"),function(e){var t=e.label,a=e.to,n=void 0===a?"#":a,l=e.isDisabled,o=void 0!==l&&l,c=e.direction;return o?r.a.createElement("p",null):(console.log("NAVIGATION"),console.log("NAVIGATION"),console.log("NAVIGATION"),r.a.createElement(i.Link,{to:n,className:"p-1 navigationButton navigationButton-"+c},t))}),s=function(e){var t=e.prefix,a=void 0===t?"/page/":t,n=e.currentPage,l=e.totalPages;return r.a.createElement("div",{className:"row mt-2 nav-innerContent",style:{borderRadius:"4px"}},r.a.createElement("div",{className:"col-md-12 navigation-card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 p-2 d-flex align-items-center justify-content-start pl-3"},r.a.createElement(c,{to:2==n?"/":a+"/"+(n-1),label:"← Previous page: "+(n-1),isDisabled:1==n||null==n,direction:"left"})),r.a.createElement("div",{className:"col-6 p-2 d-flex align-items-center justify-content-end pr-3"},r.a.createElement(c,{isDisabled:n==l,to:a+"/"+(n+1),label:"Next page: "+(n+1)+" →",direction:"right"})))))},m="2141993411";t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home"}),t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{className:"post-innerContent",key:t.id},r.a.createElement("div",{className:"article-card row"},r.a.createElement("div",{className:"col"},r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("h1",{className:"post-innerContent-title-main"},t.frontmatter.title)),r.a.createElement("span",{className:"post-innerContent-info"},t.frontmatter.date+" • "+t.timeToRead+" min read"," • ",r.a.createElement(i.Link,{className:"post-innerContent-info-link",to:"category/"+t.frontmatter.categories.toLowerCase()},"category: ",t.frontmatter.categories)),r.a.createElement("p",null,t.frontmatter.tags.map((function(e){return r.a.createElement(i.Link,{to:"/tags/"+e.toLowerCase()+"/",className:"post-innerContent-info-highlight",key:e},e)}))),r.a.createElement("p",null,t.excerpt),r.a.createElement("div",{className:"col"},r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("button",{className:"primaryButton primaryButton-right"},"Continue Reading"))))))})),r.a.createElement(s,{currentPage:a.BlogCurrentPage,totalPages:a.BlogNumPages}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-21f60838da1c1fc9fb55.js.map