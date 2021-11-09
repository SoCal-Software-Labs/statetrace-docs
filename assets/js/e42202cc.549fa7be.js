"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[6],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5845:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={slug:"time-for-a-change",title:"Time for a Change",description:"Data auditing with Statetrace",authors:["kyle-hanson"],tags:["statetrace","postgres","mysql","auditing"]},l=void 0,u={permalink:"/blog/time-for-a-change",source:"@site/blog/2021-11-12-time-for-a-change/index.md",title:"Time for a Change",description:"Data auditing with Statetrace",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"statetrace",permalink:"/blog/tags/statetrace"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"mysql",permalink:"/blog/tags/mysql"},{label:"auditing",permalink:"/blog/tags/auditing"}],readingTime:2.33,truncated:!0,authors:[{name:"Kyle Hanson",title:"CEO of Statetrace",url:"https://github.com/hansonkd",imageURL:"https://github.com/hansonkd.png",key:"kyle-hanson"}]},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The world of application today is broken. We treat our application data as a second-citizen citizen, only keeping the most recent version data available and throwing away the record about how the data got there. The world is reluctant to change because it is a hard problem. Statetrace is here to make it easier."))}m.isMDXComponent=!0}}]);