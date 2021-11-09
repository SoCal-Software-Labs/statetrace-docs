"use strict";(self.webpackChunkstatetrace_docs=self.webpackChunkstatetrace_docs||[]).push([[546],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1377:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],l={sidebar_position:1},i="Statetrace Config",c={unversionedId:"reference/config",id:"reference/config",isDocsHomePage:!1,title:"Statetrace Config",description:"The STATETRACEINBOUNDCONFIG controls inbounds and outbounds connected to Statetrace.",source:"@site/docs/reference/config.md",sourceDirName:"reference",slug:"/reference/config",permalink:"/docs/reference/config",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Statetrace in 10 minutes",permalink:"/docs/intro"},next:{title:"Annotation Table",permalink:"/docs/reference/annotation-reference"}},p=[{value:"Setting the environment",id:"setting-the-environment",children:[{value:"In Docker-Compose",id:"in-docker-compose",children:[],level:3},{value:"From a file",id:"from-a-file",children:[],level:3}],level:2},{value:"Configuring Inbounds",id:"configuring-inbounds",children:[{value:"MySQL",id:"mysql",children:[],level:3},{value:"Postgres",id:"postgres",children:[],level:3}],level:2},{value:"Configuring Outbounds",id:"configuring-outbounds",children:[{value:"Search",id:"search",children:[],level:3},{value:"Redshift",id:"redshift",children:[],level:3},{value:"Postgres",id:"postgres-1",children:[],level:3},{value:"Webhook",id:"webhook",children:[],level:3},{value:"Middleware",id:"middleware",children:[],level:3}],level:2},{value:"Controlling tables and columns",id:"controlling-tables-and-columns",children:[{value:"Don&#39;t include a table",id:"dont-include-a-table",children:[],level:3},{value:"Don&#39;t include a column",id:"dont-include-a-column",children:[],level:3},{value:"Hash a column value",id:"hash-a-column-value",children:[],level:3}],level:2},{value:"The Schema",id:"the-schema",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"statetrace-config"},"Statetrace Config"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"STATETRACE_INBOUND_CONFIG")," controls inbounds and outbounds connected to Statetrace. "),(0,o.kt)("p",null,"An example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"STATETRACE_INBOUND_CONFIG")," is below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    host: "application_db"\n    username: "postgres"\n    password: "postgres"\n    port: "5432"\n    database: "postgres"\n    publication: "statetrace"\n    slot: "statetrace"\n    tables:\n        - schema: public\n          name: secret_table\n          include: false\n        - schema: public\n          name: users\n          columns:\n            social_security_number:\n                hash_value_before_logging: true\n    outbounds:\n        - name: Postgres Search\n          handler: search\n')),(0,o.kt)("h2",{id:"setting-the-environment"},"Setting the environment"),(0,o.kt)("h3",{id:"in-docker-compose"},"In Docker-Compose"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," operator to easily embed the configuration in docker-compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},"...\n\n  statetrace:\n    image: statetraceofficial/statetrace-beta\n    environment:\n      - STATETRACE_INBOUND_CONFIG: |\n            inbounds:\n                name: Postgres DB\n                database_type: postgres\n                ...\n")),(0,o.kt)("h3",{id:"from-a-file"},"From a file"),(0,o.kt)("p",null,"Read the Yaml from a file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export STATETRACE_INBOUND_CONFIG=$(cat ./statetrace-config.yaml)\n")),(0,o.kt)("h2",{id:"configuring-inbounds"},"Configuring Inbounds"),(0,o.kt)("h3",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"Connect to MySQL by providing the required fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    host: "application_db"\n    username: "mysql"\n    password: "mysql"\n    port: "5432"\n    database: "mysql"\n')),(0,o.kt)("h3",{id:"postgres"},"Postgres"),(0,o.kt)("p",null,"For postgres ",(0,o.kt)("inlineCode",{parentName:"p"},"publication")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"slot")," are also required. Statetrace will create these when it frist connects to the database. If you stop using Statetrace you will need to manually cleanup the slot so that the WAL doesn't grow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    host: "application_db"\n    username: "postgres"\n    password: "postgres"\n    port: "5432"\n    database: "postgres"\n    publication: "statetrace"\n    slot: "statetrace"\n')),(0,o.kt)("h2",{id:"configuring-outbounds"},"Configuring Outbounds"),(0,o.kt)("p",null,"Assign outbounds to an inbound to consume the changes. "),(0,o.kt)("h3",{id:"search"},"Search"),(0,o.kt)("p",null,"The search outbound will index the rows in the Buffer DB for fast searching with ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," GraphQL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    ...\n    outbounds:\n      - name: "MySQL Search"\n        handler: "search"\n')),(0,o.kt)("h3",{id:"redshift"},"Redshift"),(0,o.kt)("p",null,"The redshift outbound will stream changes into the datawarehouse into the table designated under ",(0,o.kt)("inlineCode",{parentName:"p"},"table_name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    ...\n    outbounds:\n      - name: "MySQL Redshift"\n        handler: "redshift"\n        host: "examplecluster.abc123xyz789.us-west-2.redshift.amazonaws.com"\n        username: "postgres"\n        password: "postgres"\n        port: "5439"\n        database: "dev"\n        table_name: "statetrace_dump"\n')),(0,o.kt)("h3",{id:"postgres-1"},"Postgres"),(0,o.kt)("p",null,"The postgres outbound is the same as redshift except pipes the changes into a local postgres instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    ...\n    outbounds:\n      - name: "MySQL Postgres"\n        handler: "postgres"\n        host: "postgres_datawarehouse"\n        username: "postgres"\n        password: "postgres"\n        port: "5432"\n        database: "dev"\n        table_name: "statetrace_dump"\n')),(0,o.kt)("h3",{id:"webhook"},"Webhook"),(0,o.kt)("p",null,"The webhook outbound will batch your changes and POST them to a the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_url"),". You can further customize the behavior by supplying a ",(0,o.kt)("inlineCode",{parentName:"p"},"request_builder")," to supply additional headers or change the method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    ...\n    outbounds:\n      - name: "MySQL Webhook"\n        handler: "webhook"\n        target_url: "http://localhost:9999/webhook"\n        request_builder: |\n          auth_token = System.get_env("AUTH_TOKEN")\n          fn rows -> %WebhookRequest{headers: [{"Authorization", "Bearer #{auth_token}"}], method: :put, payload: %{rows: rows}} end\n')),(0,o.kt)("h3",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"All Outbounds have a middleware that lets you skip rows from being processed. Below is how you would index only a particular table for search:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "MySQL DB"\n    database_type: "mysql"\n    ...\n    outbounds:\n      - name: "MySQL Search"\n        handler: "search"\n        middleware: |\n          fn row -> \n            if row.relation_name == "my_special_table" do\n              :ok\n            else\n              :skip\n            end\n          end\n')),(0,o.kt)("h2",{id:"controlling-tables-and-columns"},"Controlling tables and columns"),(0,o.kt)("p",null,"You can control what tables and columns Statetrace includes in its buffer by configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"tables")," property."),(0,o.kt)("h3",{id:"dont-include-a-table"},"Don't include a table"),(0,o.kt)("p",null,"Below is how you exclude a table completely from being processed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    ...\n    tables:\n        - schema: public\n          name: secret_table\n          include: false\n')),(0,o.kt)("h3",{id:"dont-include-a-column"},"Don't include a column"),(0,o.kt)("p",null,"Below is how you exclude a column completely from being processed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    ...\n    tables:\n        - schema: public\n          name: secret_table\n          columns:\n            social_security_number:\n              include: false\n')),(0,o.kt)("h3",{id:"hash-a-column-value"},"Hash a column value"),(0,o.kt)("p",null,"Sometimes you may want a column value to remain secret. Statetrace can hash the value so that the hash is unique to the value and the row (for security you can't compare values across rows). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"name=docker-compose.yaml",name:"docker-compose.yaml"},'inbounds:\n  - name: "Postgres DB"\n    database_type: "postgres"\n    ...\n    tables:\n        - schema: public\n          name: users\n          columns:\n            social_security_number:\n                hash_value_before_logging: true\n')),(0,o.kt)("h2",{id:"the-schema"},"The Schema"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"STATETRACE_INBOUND_CONFIG")," is a YAML document with the JSON schema below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://statetrace.com/schemas/config",\n  "properties": {\n    "inbounds": {\n      "items": {\n        "anyOf": [\n          {\n            "properties": {\n              "database_type": {\n                "const": "postgres"\n              },\n              "publication": {\n                "type": "string"\n              },\n              "slot": {\n                "type": "string"\n              }\n            },\n            "required": [\n              "slot",\n              "publication"\n            ]\n          },\n          {\n            "properties": {\n              "database_type": {\n                "const": "mysql"\n              }\n            }\n          }\n        ],\n        "properties": {\n          "database": {\n            "type": "string"\n          },\n          "database_type": {\n            "enum": [\n              "postgres",\n              "mysql"\n            ],\n            "type": "string"\n          },\n          "host": {\n            "type": "string"\n          },\n          "log_new_attributes": {\n            "type": "boolean"\n          },\n          "name": {\n            "type": "string"\n          },\n          "outbounds": {\n            "items": {\n              "anyOf": [\n                {\n                  "properties": {\n                    "handler": {\n                      "const": "webhook"\n                    },\n                    "target_url": {\n                      "type": "string"\n                    }\n                  },\n                  "required": [\n                    "target_url"\n                  ]\n                },\n                {\n                  "properties": {\n                    "handler": {\n                      "const": "search"\n                    }\n                  }\n                },\n                {\n                  "properties": {\n                    "database": {\n                      "type": "string"\n                    },\n                    "handler": {\n                      "const": "postgres"\n                    },\n                    "host": {\n                      "type": "string"\n                    },\n                    "name": {\n                      "type": "string"\n                    },\n                    "password": {\n                      "type": "string"\n                    },\n                    "port": {\n                      "type": "integer"\n                    },\n                    "table_name": {\n                      "type": "string"\n                    },\n                    "username": {\n                      "type": "string"\n                    }\n                  },\n                  "required": [\n                    "database",\n                    "username",\n                    "host",\n                    "password",\n                    "port",\n                    "table_name"\n                  ]\n                },\n                {\n                  "properties": {\n                    "database": { \n                      "type": "string"\n                    },\n                    "handler": {\n                      "const": "redshift"\n                    },\n                    "host": {\n                      "type": "string"\n                    },\n                    "name": {\n                      "type": "string"\n                    },\n                    "password": {\n                      "type": "string"\n                    },\n                    "port": {\n                      "type": "integer"\n                    },\n                    "table_name": {\n                      "type": "string"\n                    },\n                    "username": {\n                      "type": "string"\n                    }\n                  },\n                  "required": [\n                    "database",\n                    "username",\n                    "host",\n                    "password",\n                    "port",\n                    "table_name"\n                  ]\n                }\n              ],\n              "properties": {\n                "batch_size": {\n                  "type": "integer"\n                },\n                "handler": {\n                  "enum": [\n                    "webhook",\n                    "redshift",\n                    "postgres",\n                    "search"\n                  ]\n                },\n                "middleware": {\n                  "type": "string"\n                },\n                "name": {\n                  "type": "string"\n                },\n                "request_builder": {\n                  "type": "string"\n                }\n              },\n              "required": [\n                "name"\n              ],\n              "type": "object"\n            },\n            "type": "array"\n          },\n          "password": {\n            "type": "string"\n          },\n          "port": {\n            "type": "integer"\n          },\n          "tables": {\n            "items": {\n              "properties": {\n                "columns": {\n                  "additionalProperties": {\n                    "properties": {\n                      "hash_value_before_logging": {\n                        "type": "boolean" \n                      },\n                      "include": {\n                        "type": "boolean"\n                      }\n                    },\n                    "type": "object"\n                  },\n                  "type": "object"\n                },\n                "include": {\n                  "type": "boolean"\n                },\n                "name": {\n                  "type": "string"\n                },\n                "schema": {\n                  "type": "string"\n                }\n              },\n              "required": [\n                "name",\n                "schema"\n              ],\n              "type": "object"\n            },\n            "type": "array"\n          },\n          "username": {\n            "type": "string"\n          }\n        },\n        "required": [\n          "database_type",\n          "database",\n          "username",\n          "host",\n          "password",\n          "name",\n          "port",\n          "log_new_attributes" \n        ],\n        "type": "object"\n      },\n      "type": "array"\n    }\n  },\n  "type": "object"\n}\n')))}d.isMDXComponent=!0}}]);