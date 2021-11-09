"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[712],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(t),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7400:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:4},s="GraphQL",c={unversionedId:"reference/gql",id:"reference/gql",isDocsHomePage:!1,title:"GraphQL",description:"Quick Reference",source:"@site/docs/reference/gql.md",sourceDirName:"reference",slug:"/reference/gql",permalink:"/statetrace-docs/docs/reference/gql",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Framework Integrations",permalink:"/statetrace-docs/docs/reference/application-integrations"},next:{title:"Environment Variables",permalink:"/statetrace-docs/docs/reference/environment-variables"}},u=[{value:"Quick Reference",id:"quick-reference",children:[{value:"Setup",id:"setup",children:[],level:3},{value:"Query Reference",id:"query-reference",children:[],level:3},{value:"StreamRow Refrence",id:"streamrow-refrence",children:[],level:3}],level:2},{value:"Scanning the Buffer&#39;s Stream",id:"scanning-the-buffers-stream",children:[{value:"Get beginning of buffer",id:"get-beginning-of-buffer",children:[],level:3},{value:"Get the next slice of buffer",id:"get-the-next-slice-of-buffer",children:[],level:3},{value:"Limit buffer slice by size",id:"limit-buffer-slice-by-size",children:[],level:3},{value:"Limit buffer slice by Lsn",id:"limit-buffer-slice-by-lsn",children:[],level:3}],level:2},{value:"Get a single change",id:"get-a-single-change",children:[{value:"getChange",id:"getchange",children:[],level:3}],level:2},{value:"Collector States",id:"collector-states",children:[{value:"Get latest statuses for inbound",id:"get-latest-statuses-for-inbound",children:[],level:3},{value:"Get latest statuses for outbound",id:"get-latest-statuses-for-outbound",children:[],level:3}],level:2},{value:"Search",id:"search",children:[{value:"Search by email",id:"search-by-email",children:[],level:3},{value:"Search by actor id",id:"search-by-actor-id",children:[],level:3},{value:"Search limit",id:"search-limit",children:[],level:3},{value:"Search for table",id:"search-for-table",children:[],level:3},{value:"Search for row",id:"search-for-row",children:[],level:3},{value:"Search for Data Organization",id:"search-for-data-organization",children:[],level:3},{value:"Search for User Organization",id:"search-for-user-organization",children:[],level:3}],level:2}],d={toc:u};function h(e){var n=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql"},"GraphQL"),(0,o.kt)("h2",{id:"quick-reference"},"Quick Reference"),(0,o.kt)("p",null,"The best way to explore the GQL API is through GraphiQL. ",(0,o.kt)("a",{parentName:"p",href:"../intro#using-the-gql-api"},"See how to setup GraphiQL in the turorial.")," "),(0,o.kt)("p",null,"To learn more about GraphQL itself, ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"read the docs"),"."),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATETRACE_GQL_API_KEY")," environment variable of your state instance with a key at least 32 characters long. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"STATETRACE_PORT")," environment variable to what you want the HTTP server to bind to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  statetrace:\n    image: statetraceofficial/statetrace-beta\n    environment:\n      - STATETRACE_GQL_API_KEY=12345678901234567890123456789012\n      - PORT=4000\n")),(0,o.kt)("p",null,"The GraphQL endpoint will run located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/graphql/api/v1/")," of your running statetrace instance."),(0,o.kt)("p",null,"Now you can make a GQL query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -g \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer 12345678901234567890123456789012" \\\n  -d \'{"query":"query{scan(inboundName: \\"Postgres DB\\") { rowLsnId }}"}\' \\\n  http://localhost:4000/graphql/api/v1/\n')),(0,o.kt)("h3",{id:"query-reference"},"Query Reference"),(0,o.kt)("p",null,"Below is a list of all available queries"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:t(791).Z})),(0,o.kt)("h3",{id:"streamrow-refrence"},"StreamRow Refrence"),(0,o.kt)("p",null,"Scan and Search results come in as a StreamRow, below find all available fields to query:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:t(7612).Z})),(0,o.kt)("h2",{id:"scanning-the-buffers-stream"},"Scanning the Buffer's Stream"),(0,o.kt)("p",null,"Scanning the stream of changes from the buffer is easy. The scan starts from the earliest changes to the most recent changes at the end. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rowLsnId")," (LSN = Log Sequence Number) uniquely identifies a row change within an inbound and is monotonically incrementing logical timestamp.  This means that all changes are ordered based on ",(0,o.kt)("inlineCode",{parentName:"p"},"rowLsnId"),"."),(0,o.kt)("h3",{id:"get-beginning-of-buffer"},"Get beginning of buffer"),(0,o.kt)("p",null,"To grab the beginning of the buffer run ",(0,o.kt)("inlineCode",{parentName:"p"},"scan")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  scan(inboundName: "Postgres DB") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("p",null,"Results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "scan": [\n      {\n        "relationName": "django_migrations",\n        "relationSchema": "public",\n        "rowLsnId": "0x0DC97A33405711ECA69C0242AC1A0004000000000000000500000004",\n        "rowPk": [\n          "1"\n        ],\n        "rowRecord": {\n          ...\n        }\n      },\n    ],\n    ...\n  }\n}\n')),(0,o.kt)("h3",{id:"get-the-next-slice-of-buffer"},"Get the next slice of buffer"),(0,o.kt)("p",null,"To grab the next group of events from the buffer use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fromLsn")," argument with the last ",(0,o.kt)("inlineCode",{parentName:"p"},"rowLsnId")," of the previous chunk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  scan(inboundName: "Postgres DB", fromLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"limit-buffer-slice-by-size"},"Limit buffer slice by size"),(0,o.kt)("p",null,"Limit the number of results returned by the scan."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  scan(inboundName: "Postgres DB", limit: 3) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"limit-buffer-slice-by-lsn"},"Limit buffer slice by Lsn"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"limitLsn")," to contrain the maximum ID that is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  scan(\n    inboundName: "Postgres DB",\n    fromLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C",\n    limitLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007E"\n  ) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("p",null,"This allows you to scan the buffer completely. "),(0,o.kt)("h2",{id:"get-a-single-change"},"Get a single change"),(0,o.kt)("p",null,"If you already know the LSN of the change you wish to query you can access it directly."),(0,o.kt)("h3",{id:"getchange"},"getChange"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  getChange(\n    inboundName: "Postgres DB",\n    lsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C"\n  ) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h2",{id:"collector-states"},"Collector States"),(0,o.kt)("p",null,"Sometimes you need to know whether or not an inbound collector is online. You can do this by querying the latest statuses of inbound and outbounds."),(0,o.kt)("h3",{id:"get-latest-statuses-for-inbound"},"Get latest statuses for inbound"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  getLatestInboundStatuses(inboundName: "Postgres DB") {\n    status\n    extraText\n    timestamp\n  }\n}\n')),(0,o.kt)("p",null,"Results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "getLatestInboundStatuses": [\n      {\n        "extraText": null,\n        "status": "running",\n        "timestamp": "2021-11-08T18:43:15.303707"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"get-latest-statuses-for-outbound"},"Get latest statuses for outbound"),(0,o.kt)("p",null,"Sometimes you need to know whether or not an inbound collector is online. You can do this by querying the latest statuses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  getLatestOutboundStatuses(inboundName: "Postgres Redshift") {\n    status\n    extraText\n    timestamp\n  }\n}\n')),(0,o.kt)("p",null,"Results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "getLatestOutboundStatuses": [\n      {\n        "extraText": null,\n        "status": "running",\n        "timestamp": "2021-11-08T18:42:58.299150"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"search"},"Search"),(0,o.kt)("p",null,"Search requires the search outbound be enabled for your database. Search gives results with the most recent change first and the oldest change last (opposite of scan)."),(0,o.kt)("h3",{id:"search-by-email"},"Search by email"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", actorEmail: "john_do@example.com") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-by-actor-id"},"Search by actor id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", actorID: "1") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-limit"},"Search limit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", limit: 1) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-for-table"},"Search for table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", table: {schema: "public", name: "table_name"}, pks:["1"]) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-for-row"},"Search for row"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", table: {schema: "public", name: "table_name"}) {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-for-data-organization"},"Search for Data Organization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", dataOrganization: "1") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')),(0,o.kt)("h3",{id:"search-for-user-organization"},"Search for User Organization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n  search(outboundName:"Search", userOrganization: "1") {\n    rowLsnId\n    relationSchema\n    relationName\n    rowPk\n    rowRecord\n  }\n}\n')))}h.isMDXComponent=!0},791:function(e,n,t){n.Z=t.p+"assets/images/root_query-2fa627271c3a7172c43695be05e6bcd9.png"},7612:function(e,n,t){n.Z=t.p+"assets/images/stream_row-7954b59eaf2e21c65d0fa3e5213c3d95.png"}}]);