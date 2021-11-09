---
sidebar_position: 1
---


# Statetrace in 10 minutes

There are four major steps to configure Statetrace:

* Configuring your application Postgres database
* Setup the buffer database
* Setup Statetrace
* Change application to annotate transactions

There is no better way to learn than to see a [complete example](#complete-configuration-example). For a more detailed walkthough, follow along below.


### Configuring your application database

Statetrace works by acting as a replica connected to your database. Having a direct source of changes enables statetrace to accurately record your data's story. Each database requires a bit of extra configuration.

#### Postgres
Your postgres application database will need to be configured so that the WAL level is set to logical. You will need to set the following variables:

* `wal_level=logical`
* `max_wal_senders=2`
* `max_replication_slots=2`


In a production environment set `max_wal_senders` and `max_replication_slots` higher if you have other replicas attached to postgres. See specific instructions for [RDS](/inbound-configuration/aws-rds-postgres) and Google Cloud SQL.

#### Mysql

MySQL requires GTID and metadata to be enabled. To enable the features required for Statetrace, run MySQL with the following options:

* `--gtid_mode=ON`
* `--enforce_gtid_consistency=ON`
* `--log_bin=ON`
* `--binlog_format=ROW`
* `--binlog_row_image=FULL`
* `--server-id=1`
* `--binlog-row-metadata=FULL`
* `--binlog_rows_query_log_events=ON`

In a production environment set `max_wal_senders` and `max_replication_slots` higher if you have other replicas attached to postgres. See specific instructions for [RDS](/inbound-configuration/aws-rds-mysql) and Google Cloud SQL.

### Setting up the Statetrace Buffer Database

Statetrace stores events and session information in a seperate Postagres datatabase as a durable buffer. This database can be pruned as events are dispatched to the outbound handlers.

Nothing special regarding the WAL needs to be configured for the buffer database, however it should be a seperate database from your application DB.


### Configuring Statetrace

Statetrace runs inside a container. Either run this container with podman or docker.

```bash
docker run \
    --net="host"\
    -e STATETRACE_DATABASE_URL='postgres://postgres:postgres@localhost:5432/postgres' \
    -e SECRET_KEY_BASE='<...>' \
    -e STATETRACE_LICENSE='<...>' \
    -e STATETRACE_GQL_API_KEY='<...>' \
    -e STATETRACE_INBOUND_CONFIG=$(cat ./statetrace-config.yaml) \
    -p 4000:4000 \
    statetraceofficial/statetrace-beta
```


The following environment variables are required to configure the statetrace daemon.

* `DATABASE_URL` the database url of where to store the statetrace metadata and buffer information
* `SECRET_KEY_BASE` a randomly generated 32 character string (used for cryptographically hashing columns)
* `STATETRACE_LICENSE` the license key downloaded from your [https://www.statetrace.com/](https://www.statetrace.com/login) account.
* `STATETRACE_INBOUND_CONFIG` the configuration of what databases to connect to. See [config](./reference/config) for more info.
* `STATETRACE_GQL_API_KEY` a randomly generated 32 character string to use as authentication for the [GQL API](./reference/gql)



### Complete configuration example

Putting this all together depends on your platform. As an example, the following is a docker-compose file that shows how to configure statetrace for use with Postgres.

```yaml name=docker-compose.yaml
version: '3'
    
services:
  # This is the database to which your application would connect to store application data
  application_db:
    image: postgres
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

    # We need to start postgres with special WAL settings 
    command:
      - "postgres"
      - "-c"
      - "wal_level=logical"
      - "-c"
      - "max_wal_senders=2"
      - "-c"
      - "max_replication_slots=2"
    ports:
      - "5432:5432"
  
  # This is the statetrace daemon that will monitor changes
  statetrace:
    image: statetraceofficial/statetrace-beta
    environment:
      - STATETRACE_DATABASE_URL=postgres://postgres:postgres@statetrace_db:5432/postgres
      - SECRET_KEY_BASE=<...>
      - STATETRACE_LICENSE=<...>
      - STATETRACE_GQL_API_KEY=<...>
      - STATETRACE_INBOUND_CONFIG: |
            inbounds:
              - name: Postgres DB
                database_type: postgres
                host: application_db
                username: postgres
                password: postgres
                port: 5432
                database: postgres
                publication: statetrace
                slot: statetrace
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
      - STATETRACE_PORT=4000
    depends_on:
      - statetrace_db
      - application_db
    ports:
      - "4000:4000"

  # This is the database that stores the buffer and meta-information
  statetrace_db:
    image: postgres
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
```

### Annotating information


There are already some [ready-made integrations](./reference/application-integrations) to use annotations with your favorite framework, however statetrace works effortlessly on anything. 

Statetrace integrates on the transaction level. To annotate your changes in your application, simply insert an entry into a special "statetrace_annotations" table in your application's database.


#### Steps to annotating

To setup annotations, you will need to create a table in your application database:

```sql
CREATE TABLE statetrace_annotations(
   id TEXT PRIMARY KEY,
   kind TEXT,
   meta JSON,
   payload JSON,
);
```

This table can be safely truncated at any time because Statetrace reads its values from the logical replication log.


Now insert the session annotation as JSON data. This requires a unique id that you will later use to link transactions to this session.

```sql
BEGIN;
INSERT INTO 
    statetrace_annotations 
        (id, kind, meta, payload) 
    VALUES (
        (
            'bc573b1d-5ed0-4018-bcf4-74ce1b23875d',
            '_st.app.sess',
            '{}'::JSON,
            '{"session_actor_email": "anon@anon.com", "session_actor_id": "123"}'::JSON,
        )
    );
COMMIT;
```


You only need to insert a session once. Now your application business logic can be wrapped in a transaction that associates it with the session ID from above.

```sql
BEGIN;

--Do all of your work
INSERT ... VALUES ...;
UPDATE ... WHERE ...;
DELETE ... WHERE ...;

-- Annotate transaction with link to session
INSERT INTO 
    statetrace_annotations 
        (id, kind, meta, payload) 
    VALUES (
        (
            '9c4c25de-1bed-4037-b981-e3127fadfc32',
            '_st.app.act',
            '{}'::JSON,
            '{"action_session_id": "bc573b1d-5ed0-4018-bcf4-74ce1b23875d"}'::JSON,
        )
    );
COMMIT;
```

For more information about what additional information can be passed along in the annotations, follow the [guide.](./reference/annotation-reference)

### Using the GQL API

To access the buffer and search information, Statetrace provides a GraphQL API. This API can be accessed by submitting HTTP requests to the endpoint [http://localhost:4000/graphql/api](http://localhost:4000/graphql/api/v1).


To quickly try out the API we can use GraphiQL. GraphiQL is an optional GUI for running GQL queries. It is unsafe to run in production, however to use it locally, just enable graphiQL by setting `STATETRACE_ENABLE_GRAPHIQL` to a truthy value:

```yaml name=docker-compose.yaml
version: '3'
    
 ...

  # This is the statetrace daemon that will monitor changes
  statetrace:
    image: statetraceofficial/statetrace-beta
    environment:
      - STATETRACE_ENABLE_GRAPHIQL=1
```

Next go to the graphiql interface: [http://localhost:4000/graphql/graphiql](http://localhost:4000/graphql/graphiql).

Now you are ready to run a GQL Query:

```graphql
query {
  scan(inboundName:"Postgres DB") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

For a more detailed exploration of the GraphQL API read the [reference.](./reference/gql)