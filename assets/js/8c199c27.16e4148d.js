"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[66],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return a?o.createElement(g,i(i({ref:t},h),{},{components:a})):o.createElement(g,i({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5973:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return p}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"time-for-a-change",title:"Time for a Change",description:"Data auditing with Statetrace",authors:["kyle-hanson"],tags:["statetrace","postgres","mysql","auditing"]},l=void 0,c={permalink:"/blog/time-for-a-change",source:"@site/blog/2021-11-12-time-for-a-change/index.md",title:"Time for a Change",description:"Data auditing with Statetrace",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"statetrace",permalink:"/blog/tags/statetrace"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"mysql",permalink:"/blog/tags/mysql"},{label:"auditing",permalink:"/blog/tags/auditing"}],readingTime:4.08,truncated:!0,authors:[{name:"Kyle Hanson",title:"CEO of Statetrace",url:"https://github.com/hansonkd",imageURL:"https://github.com/hansonkd.png",key:"kyle-hanson"}]},h={authorsImageUrls:[void 0]},u=[{value:"Whats wrong today",id:"whats-wrong-today",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Solving the &quot;Who dunnit?&quot;",id:"solving-the-who-dunnit",children:[],level:2},{value:"Github for Code. Statetrace for Data.",id:"github-for-code-statetrace-for-data",children:[],level:2},{value:"Time traveling SQL",id:"time-traveling-sql",children:[],level:2},{value:"Compliance focused",id:"compliance-focused",children:[],level:2},{value:"Statetrace Core",id:"statetrace-core",children:[],level:2},{value:"Statetrace Enterprise",id:"statetrace-enterprise",children:[],level:2},{value:"The future",id:"the-future",children:[],level:2}],d={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The world of application data today is broken. We treat our most valuable asset as a second-class citizen, only keeping the most recent version data available and throwing away how the data got there. It's is a hard problem to fix. Statetrace is here to make it easier."),(0,r.kt)("div",{style:{background:"url(/img/ipanema.jpg)",backgroundSize:"150px",width:"100%",height:"200px",marginTop:"30px",marginBottom:"30px"}}),(0,r.kt)("p",null,"Data auditing is the future of application development. It enables teams to solve tougher problems faster. With Statetrace, teams can develop an auditing solution in hours instead of months and start delivering reliable answers to their customers. Statetrace annotates row level changes from your databases, piping them into webhooks, into data warehouses, or indexing them for fast searches."),(0,r.kt)("h2",{id:"whats-wrong-today"},"Whats wrong today"),(0,r.kt)("p",null,"The world of auditing today has been stuck for decades. There exist ",(0,r.kt)("a",{parentName:"p",href:"https://django-simple-history.readthedocs.io/en/latest/"},"libraries")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/etianen/django-reversion"},"tools")," at the application layer to associate changes with who changed them, however these tools are deeply flawed. Because they work at the application layer, they miss things that don't go through the application; like migrations or someone connected directly to the DB. More importantly they are strictly framework dependent and do not offer a general solution."),(0,r.kt)("p",null,"CDC pipelines capture the changes accurately but do not associate those changes with application meta information."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Statetrace connects to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/logical-replication.html"},"logical replication")," of Postgres or the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/internals/en/binary-log-overview.html"},"BinLog")," of MySQL. By reading events directly from the replication log, Statetrace gets a 100% accurate history of your data. More importantly because it is intefacing with the database instead of the application, Statetrace can work with any framework or language with minimal configuration."),(0,r.kt)("p",null,"The application annotates transactions by writing to an annotations table in the same transaction that you change other data, associating session and user information with individual row changes."),(0,r.kt)("h2",{id:"solving-the-who-dunnit"},'Solving the "Who dunnit?"'),(0,r.kt)("p",null,'Nobody wants to answer the dreaded customer complaint "Who changed my data?" Even if the customer was the last one to change the data, without a proper auditing solution one might not be able to give a reliable answer. Having uncertainty around the history of data puts a company\'s reputation at risk.'),(0,r.kt)("p",null,"Statetrace puts the answers to these questions at your fingertips. With an annotated audit log, each row change is associated with meta-information about who in the application changed the data. Pipe these changes into the destination of your choice for easy searching."),(0,r.kt)("h2",{id:"github-for-code-statetrace-for-data"},"Github for Code. Statetrace for Data."),(0,r.kt)("p",null,"Version control for code is integral to the development process. Companies spend billions of dollars every year on developer salaries and want to keep that investment of developer output. Data about what the code was and who changed it is so valuable that a multi-billion dollar industry has grown to support those needs. "),(0,r.kt)("p",null,"However, companies are throwing away money when it comes to their actual bread and butter: the application data. The stream of changes from application data are a gold mine for solving problems and answering questions. But the vast majority of companies today throw away these changes, because they have little value as they don't connect the change to who made the change. This is bad, because you don't know what type of questions you might want to know in the future and once you throw it away, its gone for ever."),(0,r.kt)("p",null,"Statetrace is solving this problem. Statetrace makes the stream of changes useful by associating the change with who changed it and simplifying piping these changes into other data sources."),(0,r.kt)("h2",{id:"time-traveling-sql"},"Time traveling SQL"),(0,r.kt)("p",null,"Once all changes from a DB are collected, they can be used to recreate transaction-level point-in-time snapshots of your entire database, a particular table, or just a single row. This allows you to easily go back to see what a the result of a query was. It also helps you answer more interesting questions in data analytics as you can compare two points in time in a single query all in your existing data warehouse."),(0,r.kt)("h2",{id:"compliance-focused"},"Compliance focused"),(0,r.kt)("p",null,"Your data belongs with you. Statetrace is designed to be run on-prem, leaving you in complete control of your data. Whether you are running a HIPAA deployment or need to stay SOC 2 compliant, Statetrace works with your compliance team to succeed."),(0,r.kt)("h2",{id:"statetrace-core"},"Statetrace Core"),(0,r.kt)("p",null,"Users can try ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro"},"Statetrace Core")," today for free. Its a limited edition of statetrace without a UI, but with all of the power. Try it out locally to quickly connect your database and start scanning within minutes."),(0,r.kt)("h2",{id:"statetrace-enterprise"},"Statetrace Enterprise"),(0,r.kt)("p",null,"Our flagship product is ",(0,r.kt)("a",{parentName:"p",href:"https://www.statetrace.com"},"Statetrace for Enterprise"),". Its the full featured Statetrace experience with a robust UI, enterprise level user permissions, pre-constructed SQL models for time-travel and support from our customer success team."),(0,r.kt)("h2",{id:"the-future"},"The future"),(0,r.kt)("p",null,"We are developing the highest quality auditing experience. If what we are doing sounds interesting, reach out at ",(0,r.kt)("a",{parentName:"p",href:"mailto:hello@statetrace.com"},"hello@statetrace.com")," and we would love to tell you about what we are working on."))}p.isMDXComponent=!0}}]);