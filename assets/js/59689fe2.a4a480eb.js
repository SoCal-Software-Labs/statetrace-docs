"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[20],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6144:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l="Annotation Table",c={unversionedId:"reference/annotation-reference",id:"reference/annotation-reference",isDocsHomePage:!1,title:"Annotation Table",description:"Statetrace annotations work by writing to a special table. This page describes the low-level implementation. For a higher-level framework oriented discussion see the frameworks page.",source:"@site/docs/reference/annotation-reference.md",sourceDirName:"reference",slug:"/reference/annotation-reference",permalink:"/statetrace-docs/docs/reference/annotation-reference",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Statetrace Config",permalink:"/statetrace-docs/docs/reference/config"},next:{title:"Framework Integrations",permalink:"/statetrace-docs/docs/reference/application-integrations"}},u=[{value:"Creating",id:"creating",children:[],level:2},{value:"Using",id:"using",children:[{value:"Session",id:"session",children:[],level:3},{value:"Actions",id:"actions",children:[],level:3},{value:"Migrations",id:"migrations",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"annotation-table"},"Annotation Table"),(0,o.kt)("p",null,"Statetrace annotations work by writing to a special table. This page describes the low-level implementation. For a higher-level framework oriented discussion see the ",(0,o.kt)("a",{parentName:"p",href:"./application-integrations"},"frameworks page"),"."),(0,o.kt)("h2",{id:"creating"},"Creating"),(0,o.kt)("p",null,"The annotation table should be created on the same database as your application code. It requires no indexes and can be safely truncated at anytime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE statetrace_annotations(\n   id TEXT PRIMARY KEY,\n   kind TEXT,\n   meta JSON,\n   payload JSON,\n);\n")),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"There are several types of annotations that you can send to Statetrace."),(0,o.kt)("h3",{id:"session"},"Session"),(0,o.kt)("p",null,"A session is a logical grouping of actions. "),(0,o.kt)("p",null,"To insert the session annotation as JSON data. This requires a unique id that you will later use to link transactions to this session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nINSERT INTO \n    statetrace_annotations \n        (id, kind, meta, payload) \n    VALUES (\n        (\n            'bc573b1d-5ed0-4018-bcf4-74ce1b23875d',\n            '_st.app.sess',\n            '{}'::JSON,\n            '{\"session_actor_email\": \"anon@anon.com\", \"session_actor_id\": \"123\"}'::JSON,\n        )\n    );\nCOMMIT;\n")),(0,o.kt)("p",null,"The following fields are available for sessions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"session_actor_id"),(0,o.kt)("li",{parentName:"ul"},"session_actor_full_name"),(0,o.kt)("li",{parentName:"ul"},"session_actor_email"),(0,o.kt)("li",{parentName:"ul"},"session_actor_avatar"),(0,o.kt)("li",{parentName:"ul"},"session_client_user_agent"),(0,o.kt)("li",{parentName:"ul"},"session_application_id"),(0,o.kt)("li",{parentName:"ul"},"session_application_type (",(0,o.kt)("inlineCode",{parentName:"li"},"<lang>/<framework>")," i.e. python/django)")),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("p",null,"An action associates a transaction to a session. There should only be one action per transaction."),(0,o.kt)("p",null,"Actions should use a unique id and be inserted in the same transaction as other changes you wish to associate with the session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\n\n--Do all of your work\nINSERT ... VALUES ...;\nUPDATE ... WHERE ...;\nDELETE ... WHERE ...;\n\n-- Annotate transaction with link to session\nINSERT INTO \n    statetrace_annotations \n        (id, kind, meta, payload) \n    VALUES (\n        (\n            '9c4c25de-1bed-4037-b981-e3127fadfc32',\n            '_st.app.act',\n            '{}'::JSON,\n            '{\"action_session_id\": \"bc573b1d-5ed0-4018-bcf4-74ce1b23875d\"}'::JSON,\n        )\n    );\nCOMMIT;\n")),(0,o.kt)("p",null,"The following fields are available for actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"action_session_id (Session ID)"),(0,o.kt)("li",{parentName:"ul"},"action_url (URL that identifies action)"),(0,o.kt)("li",{parentName:"ul"},"action_method (HTTP method, GQL mutation that triggered action)"),(0,o.kt)("li",{parentName:"ul"},"action_version (version of the code (git hash, git tag, etc))"),(0,o.kt)("li",{parentName:"ul"},"action_length_ms (length of time the action took in ms)"),(0,o.kt)("li",{parentName:"ul"},"action_parent_id (the ID of another action)")),(0,o.kt)("h3",{id:"migrations"},"Migrations"),(0,o.kt)("p",null,"After a migration you can tell Statetrace to resynchronize the tables by sending a migration annotation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nINSERT INTO \n    statetrace_annotations \n        (id, kind, meta, payload) \n    VALUES (\n        (\n            'bc573b1d-5ed0-4018-bcf4-74ce1b23875d',\n            '_st.app.mig',\n            '{}'::JSON,\n            '{}'::JSON,\n        )\n    );\nCOMMIT;\n")),(0,o.kt)("p",null,"Migrations have no extra fields"))}d.isMDXComponent=!0}}]);