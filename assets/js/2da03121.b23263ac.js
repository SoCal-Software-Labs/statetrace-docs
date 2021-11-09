"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[319],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="Connect to AWS RDS/Aurora Postgres",l={unversionedId:"inbound-configuration/aws-rds-postgres",id:"inbound-configuration/aws-rds-postgres",isDocsHomePage:!1,title:"Connect to AWS RDS/Aurora Postgres",description:"Configure the parameter group",source:"@site/docs/inbound-configuration/aws-rds-postgres.md",sourceDirName:"inbound-configuration",slug:"/inbound-configuration/aws-rds-postgres",permalink:"/statetrace-docs/docs/inbound-configuration/aws-rds-postgres",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Running Statetrace",permalink:"/statetrace-docs/docs/reference/running"},next:{title:"Connect to AWS RDS MySQL 8.0",permalink:"/statetrace-docs/docs/inbound-configuration/aws-rds-mysql"}},u=[{value:"Configure the parameter group",id:"configure-the-parameter-group",children:[],level:3},{value:"Create the user",id:"create-the-user",children:[],level:3},{value:"Configure Firewall",id:"configure-firewall",children:[],level:3},{value:"Connect to Statetrace",id:"connect-to-statetrace",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-aws-rdsaurora-postgres"},"Connect to AWS RDS/Aurora Postgres"),(0,o.kt)("h3",{id:"configure-the-parameter-group"},"Configure the parameter group"),(0,o.kt)("p",null,"From the AWS console, configure the parameter group with the following values."),(0,o.kt)("p",null,"Aws has an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.html"},"excellent guide to enabling logical replication")," available. In short you will need to configure the following variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rds.logical_replication")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_wal_senders")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"6")," (set this higher if you have more replicas)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_replication_slots")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"6")," (set this higher if you have more replicas)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wal_sender_timeout")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"0"))),(0,o.kt)("h3",{id:"create-the-user"},"Create the user"),(0,o.kt)("p",null,"Create the database user that will connect to the database from Statetrace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE <db_user> REPLICATION LOGIN;\nCREATE USER <db_user>;\nGRANT CONNECT ON DATABASE <db_name> TO <db_user>;\nGRANT USAGE ON SCHEMA <schema_name> TO <db_user>;\nGRANT SELECT ON DATABASE <database_name> TO <db_user>;\nGRANT USAGE ON SCHEMA <schema_name>  TO <db_user>; \nGRANT REFERENCES ON ALL TABLES IN SCHEMA <schema_name> TO <db_user>;\n")),(0,o.kt)("h3",{id:"configure-firewall"},"Configure Firewall"),(0,o.kt)("p",null,"You will need to configure your security group so that statetrace can connect to the database."),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"AWS guide")," to configuring security groups."),(0,o.kt)("h3",{id:"connect-to-statetrace"},"Connect to Statetrace"),(0,o.kt)("p",null,"Configure ",(0,o.kt)("a",{parentName:"p",href:"../reference/config"},"STATETRACE_INBOUND_CONFIG")," to connect to your RDS instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    host: "mycluster.cluster-123456789012.us-east-1.rds.amazonaws.com"\n    username: "postgres"\n    password: "postgres"\n    port: "5432"\n    database: "postgres"\n    publication: "statetrace"\n    slot: "statetrace"\n')))}d.isMDXComponent=!0}}]);