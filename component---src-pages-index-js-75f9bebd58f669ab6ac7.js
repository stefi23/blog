"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5817:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(1538),l=a(6179),i=a(5444),o=function(e){var t=e.label,a=e.to,r=void 0===a?"#":a,l=e.isDisabled,o=void 0!==l&&l,c=e.direction;return o?n.createElement("p",null):n.createElement(i.Link,{to:r,className:"p-1 navigationButton navigationButton-"+c},t)},c=function(e){var t=e.prefix,a=void 0===t?"/page":t,r=e.currentPage,l=e.totalPages;return console.log("lzcssc"),n.createElement("div",{className:"row mt-2 nav-innerContent",style:{borderRadius:"4px"}},n.createElement("div",{className:"col-md-12 navigation-card"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-6 p-2 d-flex align-items-center justify-content-start pl-3"},n.createElement(o,{to:2==r?"/":a+"/"+(r-1),label:"← Previous page: "+(r-1),isDisabled:1==r||null==r,direction:"left"})),n.createElement("div",{className:"col-6 p-2 d-flex align-items-center justify-content-end pr-3"},n.createElement(o,{isDisabled:r==l,to:a+"/"+(r+1),label:"Next page: "+(r+1)+" →",direction:"right"})))))},s=function(e){var t=e.data,a=e.pageContext;return n.createElement(r.Z,null,n.createElement(l.Z,{title:"Home",canonical:""}),t.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.createElement("div",{className:"post-innerContent",key:t.id},n.createElement("div",{className:"article-card row"},n.createElement("div",{className:"col"},n.createElement(i.Link,{to:t.fields.slug},n.createElement("h1",{className:"post-innerContent-title-main"},t.frontmatter.title)),n.createElement("span",{className:"post-innerContent-info"},t.frontmatter.date+" • "+t.timeToRead+" min read"," • ",n.createElement(i.Link,{className:"post-innerContent-info-link",to:"/category/"+t.frontmatter.categories.toLowerCase()},"category: ",t.frontmatter.categories)),n.createElement("p",null,t.frontmatter.tags.map((function(e){return n.createElement(i.Link,{to:"/tags/"+e.toLowerCase()+"/",className:"post-innerContent-info-highlight",key:e},e)}))),n.createElement("p",null,t.excerpt),n.createElement("div",{className:"col"},n.createElement(i.Link,{to:t.fields.slug},n.createElement("button",{className:"primaryButton primaryButton-right"},"Continue Reading"))))))})),n.createElement(c,{currentPage:a.BlogCurrentPage,totalPages:a.BlogNumPages}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-75f9bebd58f669ab6ac7.js.map