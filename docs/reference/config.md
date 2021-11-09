---
sidebar_position: 1
---

# Statetrace Config

The `STATETRACE_INBOUND_CONFIG` controls inbounds and outbounds connected to Statetrace. 

An example of a `STATETRACE_INBOUND_CONFIG` is below:

```yaml name=docker-compose.yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    host: "application_db"
    username: "postgres"
    password: "postgres"
    port: "5432"
    database: "postgres"
    publication: "statetrace"
    slot: "statetrace"
    tables:
        - schema: public
          name: secret_table
          include: false
        - schema: public
          name: users
          columns:
            social_security_number:
                hash_value_before_logging: true
    outbounds:
        - name: Postgres Search
          handler: search
```

## Setting the environment

### In Docker-Compose

Use the `|` operator to easily embed the configuration in docker-compose

```yaml name=docker-compose.yaml
...

  statetrace:
    image: statetraceofficial/statetrace-beta
    environment:
      - STATETRACE_INBOUND_CONFIG: |
            inbounds:
                name: Postgres DB
                database_type: postgres
                ...
```

### From a file

Read the Yaml from a file:

```bash
export STATETRACE_INBOUND_CONFIG=$(cat ./statetrace-config.yaml)
```

## Configuring Inbounds

###  MySQL

Connect to MySQL by providing the required fields.

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    host: "application_db"
    username: "mysql"
    password: "mysql"
    port: "5432"
    database: "mysql"
```


###  Postgres

For postgres `publication` and `slot` are also required. Statetrace will create these when it frist connects to the database. If you stop using Statetrace you will need to manually cleanup the slot so that the WAL doesn't grow.

```yaml name=docker-compose.yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    host: "application_db"
    username: "postgres"
    password: "postgres"
    port: "5432"
    database: "postgres"
    publication: "statetrace"
    slot: "statetrace"
```

## Configuring Outbounds

Assign outbounds to an inbound to consume the changes. 

###  Search

The search outbound will index the rows in the Buffer DB for fast searching with `search` GraphQL.

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    ...
    outbounds:
      - name: "MySQL Search"
        handler: "search"
```

###  Redshift

The redshift outbound will stream changes into the datawarehouse into the table designated under `table_name`

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    ...
    outbounds:
      - name: "MySQL Redshift"
        handler: "redshift"
        host: "examplecluster.abc123xyz789.us-west-2.redshift.amazonaws.com"
        username: "postgres"
        password: "postgres"
        port: "5439"
        database: "dev"
        table_name: "statetrace_dump"
```

###  Postgres

The postgres outbound is the same as redshift except pipes the changes into a local postgres instance.

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    ...
    outbounds:
      - name: "MySQL Postgres"
        handler: "postgres"
        host: "postgres_datawarehouse"
        username: "postgres"
        password: "postgres"
        port: "5432"
        database: "dev"
        table_name: "statetrace_dump"
```

###  Webhook

The webhook outbound will batch your changes and POST them to a the `target_url`. You can further customize the behavior by supplying a `request_builder` to supply additional headers or change the method.

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    ...
    outbounds:
      - name: "MySQL Webhook"
        handler: "webhook"
        target_url: "http://localhost:9999/webhook"
        request_builder: |
          auth_token = System.get_env("AUTH_TOKEN")
          fn rows -> %WebhookRequest{headers: [{"Authorization", "Bearer #{auth_token}"}], method: :put, payload: %{rows: rows}} end
```

### Middleware

All Outbounds have a middleware that lets you skip rows from being processed. Below is how you would index only a particular table for search:

```yaml name=docker-compose.yaml
inbounds:
  - name: "MySQL DB"
    database_type: "mysql"
    ...
    outbounds:
      - name: "MySQL Search"
        handler: "search"
        middleware: |
          fn row -> 
            if row.relation_name == "my_special_table" do
              :ok
            else
              :skip
            end
          end
```

## Controlling tables and columns

You can control what tables and columns Statetrace includes in its buffer by configuring the `tables` property.

### Don't include a table

Below is how you exclude a table completely from being processed:

```yaml name=docker-compose.yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    ...
    tables:
        - schema: public
          name: secret_table
          include: false
```

### Don't include a column

Below is how you exclude a column completely from being processed:

```yaml name=docker-compose.yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    ...
    tables:
        - schema: public
          name: secret_table
          columns:
            social_security_number:
              include: false
```

### Hash a column value

Sometimes you may want a column value to remain secret. Statetrace can hash the value so that the hash is unique to the value and the row (for security you can't compare values across rows). 

```yaml name=docker-compose.yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    ...
    tables:
        - schema: public
          name: users
          columns:
            social_security_number:
                hash_value_before_logging: true
```





## The Schema

`STATETRACE_INBOUND_CONFIG` is a YAML document with the JSON schema below:

```json
{
  "$id": "https://statetrace.com/schemas/config",
  "properties": {
    "inbounds": {
      "items": {
        "anyOf": [
          {
            "properties": {
              "database_type": {
                "const": "postgres"
              },
              "publication": {
                "type": "string"
              },
              "slot": {
                "type": "string"
              }
            },
            "required": [
              "slot",
              "publication"
            ]
          },
          {
            "properties": {
              "database_type": {
                "const": "mysql"
              }
            }
          }
        ],
        "properties": {
          "database": {
            "type": "string"
          },
          "database_type": {
            "enum": [
              "postgres",
              "mysql"
            ],
            "type": "string"
          },
          "host": {
            "type": "string"
          },
          "log_new_attributes": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "outbounds": {
            "items": {
              "anyOf": [
                {
                  "properties": {
                    "handler": {
                      "const": "webhook"
                    },
                    "target_url": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "target_url"
                  ]
                },
                {
                  "properties": {
                    "handler": {
                      "const": "search"
                    }
                  }
                },
                {
                  "properties": {
                    "database": {
                      "type": "string"
                    },
                    "handler": {
                      "const": "postgres"
                    },
                    "host": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    },
                    "port": {
                      "type": "integer"
                    },
                    "table_name": {
                      "type": "string"
                    },
                    "username": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "database",
                    "username",
                    "host",
                    "password",
                    "port",
                    "table_name"
                  ]
                },
                {
                  "properties": {
                    "database": { 
                      "type": "string"
                    },
                    "handler": {
                      "const": "redshift"
                    },
                    "host": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    },
                    "port": {
                      "type": "integer"
                    },
                    "table_name": {
                      "type": "string"
                    },
                    "username": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "database",
                    "username",
                    "host",
                    "password",
                    "port",
                    "table_name"
                  ]
                }
              ],
              "properties": {
                "batch_size": {
                  "type": "integer"
                },
                "handler": {
                  "enum": [
                    "webhook",
                    "redshift",
                    "postgres",
                    "search"
                  ]
                },
                "middleware": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "request_builder": {
                  "type": "string"
                }
              },
              "required": [
                "name"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "password": {
            "type": "string"
          },
          "port": {
            "type": "integer"
          },
          "tables": {
            "items": {
              "properties": {
                "columns": {
                  "additionalProperties": {
                    "properties": {
                      "hash_value_before_logging": {
                        "type": "boolean" 
                      },
                      "include": {
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "type": "object"
                },
                "include": {
                  "type": "boolean"
                },
                "name": {
                  "type": "string"
                },
                "schema": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "schema"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "username": {
            "type": "string"
          }
        },
        "required": [
          "database_type",
          "database",
          "username",
          "host",
          "password",
          "name",
          "port",
          "log_new_attributes" 
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```