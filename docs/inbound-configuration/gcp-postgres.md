---
sidebar_position: 3
---

# Connect to GCP Cloud SQL Postgres


### Configure the flags

From the Cloud console, configure your instance with the following values.

Google has an [excellent guide to enabling logical replication](https://cloud.google.com/sql/docs/postgres/replication/configure-logical-replication) available. In short you will need to configure the following flags.

* `cloudsql.logical_decoding` -> `on`
* `cloudsql.enable_pglogical` -> `on`
* `max_replication_slots` -> `6` (set this higher if you have more replicas)
* `max_wal_senders` -> `6` (set this higher if you have more replicas)

### Create the user

Create the database user that will connect to the database from Statetrace

```sql
CREATE ROLE <db_user> REPLICATION LOGIN;
CREATE USER <db_user>;
GRANT CONNECT ON DATABASE <db_name> TO <db_user>;
GRANT USAGE ON SCHEMA <schema_name> TO <db_user>;
GRANT SELECT ON DATABASE <database_name> TO <db_user>;
GRANT USAGE ON SCHEMA <schema_name>  TO <db_user>; 
GRANT REFERENCES ON ALL TABLES IN SCHEMA <schema_name> TO <db_user>;
```

### Configure Firewall

You will need to configure your instance so that statetrace can connect to the database.

Follow the [Google guide](https://cloud.google.com/sql/docs/postgres/connect-overview) to configuring connecting to your instance.


### Connect to Statetrace

Configure [STATETRACE_INBOUND_CONFIG](../reference/config) to connect to your Cloud SQL instance

```yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    host: "<...>"
    username: "postgres"
    password: "postgres"
    port: "5432"
    database: "postgres"
    publication: "statetrace"
    slot: "statetrace"
```