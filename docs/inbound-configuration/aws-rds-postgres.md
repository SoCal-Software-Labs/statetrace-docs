---
sidebar_position: 1
---

# Connect to AWS RDS/Aurora Postgres


### Configure the parameter group

From the AWS console, configure the parameter group with the following values.

Aws has an [excellent guide to enabling logical replication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.html) available. In short you will need to configure the following variables.

* `rds.logical_replication` -> `1`
* `max_wal_senders` -> `6` (set this higher if you have more replicas)
* `max_replication_slots` -> `6` (set this higher if you have more replicas)
* `wal_sender_timeout` -> `0`

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

You will need to configure your security group so that statetrace can connect to the database.

Follow the [AWS guide](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) to configuring security groups.


### Connect to Statetrace

Configure [STATETRACE_INBOUND_CONFIG](../reference/config) to connect to your RDS instance

```yaml
inbounds:
  - name: "Postgres DB"
    database_type: "postgres"
    host: "mycluster.cluster-123456789012.us-east-1.rds.amazonaws.com"
    username: "postgres"
    password: "postgres"
    port: "5432"
    database: "postgres"
    publication: "statetrace"
    slot: "statetrace"
```