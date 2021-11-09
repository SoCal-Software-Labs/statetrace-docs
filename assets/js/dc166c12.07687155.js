"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[662],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Connect to AWS RDS MySQL 8.0",u={unversionedId:"inbound-configuration/aws-rds-mysql",id:"inbound-configuration/aws-rds-mysql",isDocsHomePage:!1,title:"Connect to AWS RDS MySQL 8.0",description:"Statetrace works with RDS MySQL starting at 8.0. Previous versions of MySQL are missing the binlogrowmetadata parameter needed.",source:"@site/docs/inbound-configuration/aws-rds-mysql.md",sourceDirName:"inbound-configuration",slug:"/inbound-configuration/aws-rds-mysql",permalink:"/docs/inbound-configuration/aws-rds-mysql",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Connect to AWS RDS/Aurora Postgres",permalink:"/docs/inbound-configuration/aws-rds-postgres"},next:{title:"Connect to GCP Cloud SQL Postgres",permalink:"/docs/inbound-configuration/gcp-postgres"}},s=[{value:"Configure the parameter group",id:"configure-the-parameter-group",children:[],level:3},{value:"Create the user",id:"create-the-user",children:[],level:3},{value:"Configure Firewall",id:"configure-firewall",children:[],level:3},{value:"Connect to Statetrace",id:"connect-to-statetrace",children:[],level:3}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-aws-rds-mysql-80"},"Connect to AWS RDS MySQL 8.0"),(0,a.kt)("p",null,"Statetrace works with RDS MySQL starting at 8.0. Previous versions of MySQL are missing the ",(0,a.kt)("inlineCode",{parentName:"p"},"binlog_row_metadata")," parameter needed."),(0,a.kt)("h3",{id:"configure-the-parameter-group"},"Configure the parameter group"),(0,a.kt)("p",null,"From the AWS console, configure the parameter group with the following values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binlog_format")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ROW")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binlog_row_image")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"FULL")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enforce_gtid_consistency")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gtid-mode")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binlog_rows_query_log_events")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ON")," (Optional if you want to log queries)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binlog_row_metadata")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"FULL"))),(0,a.kt)("h3",{id:"create-the-user"},"Create the user"),(0,a.kt)("p",null,"Create the database user that will connect to the database from Statetrace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER <db_user>@'%' IDENTIFIED BY '<password>';\nGRANT SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO <db_user>;\n")),(0,a.kt)("h3",{id:"configure-firewall"},"Configure Firewall"),(0,a.kt)("p",null,"You will need to configure your security group so that statetrace can connect to the database."),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"AWS guide")," to configuring security groups."),(0,a.kt)("h3",{id:"connect-to-statetrace"},"Connect to Statetrace"),(0,a.kt)("p",null,"Configure ",(0,a.kt)("a",{parentName:"p",href:"../reference/config"},"STATETRACE_INBOUND_CONFIG")," to connect to your RDS instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'inbounds:\n  - name: "Mysql DB"\n    database_type: "mysql"\n    host: "mycluster.cluster-123456789012.us-east-1.rds.amazonaws.com"\n    username: "mysql"\n    password: "mysql"\n    port: "3306"\n    database: "application_db"\n')))}d.isMDXComponent=!0}}]);