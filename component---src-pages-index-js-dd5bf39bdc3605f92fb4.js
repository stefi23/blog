(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return m}));var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),c=t("vrFN"),o=t("Wbzz"),s=(t("q4sD"),function(e){var a=e.label,t=e.to,n=void 0===t?"#":t,r=e.isDisabled;return void 0!==r&&r?l.a.createElement("p",null):l.a.createElement(o.Link,{to:n,className:"p-1"},a)}),i=function(e){var a=e.prefix,t=void 0===a?"/page/":a,n=e.currentPage,r=e.totalPages;return l.a.createElement("div",{className:"row mt-2 post-inner-content",style:{borderRadius:"4px"}},l.a.createElement("div",{className:"col-md-12 navigation-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 p-2 d-flex justify-content-start pl-4 hover-bright"},l.a.createElement(s,{to:2==n?"/":t+"/"+(n-1),label:n-1,isDisabled:1==n||null==n})),l.a.createElement("div",{className:"col-6 p-2 d-flex justify-content-end pr-4 hover-bright"},l.a.createElement(s,{isDisabled:n==r,to:t+"/"+(n+1),label:n+1})))))},m=(t("TJpk"),"1676434080");a.default=function(e){var a=e.data,t=e.pageContext;return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Home"}),a.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement("div",{className:"post-inner-content"},l.a.createElement("div",{className:"article-card row"},l.a.createElement("div",{className:"col",key:a.id},l.a.createElement(o.Link,{to:a.fields.slug,className:"hover-bright"}," ",l.a.createElement("h1",null,a.frontmatter.title)),l.a.createElement("span",{style:{fontFamily:"Open Sans, sans-serif",color:"#8f3774",fontSize:"12px"}},a.frontmatter.date),l.a.createElement("p",null,a.excerpt),l.a.createElement("p",null,"Reading time: ",a.timeToRead," ",1==a.timeToRead?"minute":"minutes"),l.a.createElement("div",{className:"col"},l.a.createElement(o.Link,{to:a.fields.slug,className:"btn-bordo rounded"},"Read More")))))})),l.a.createElement(i,{currentPage:t.BlogCurrentPage,totalPages:t.BlogNumPages}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd5bf39bdc3605f92fb4.js.map