---
sidebar_position: 2
---

# Connect to AWS RDS MySQL 8.0

Statetrace works with RDS MySQL starting at 8.0. Previous versions of MySQL are missing the `binlog_row_metadata` parameter needed.

### Configure the parameter group

From the AWS console, configure the parameter group with the following values.


* `binlog_format` -> `ROW`
* `binlog_row_image` -> `FULL` 
* `enforce_gtid_consistency` -> `ON`
* `gtid-mode` -> `ON`
* `binlog_rows_query_log_events` -> `ON` (Optional if you want to log queries)
* `binlog_row_metadata` -> `FULL`


### Create the user

Create the database user that will connect to the database from Statetrace

```sql
CREATE USER <db_user>@'%' IDENTIFIED BY '<password>';
GRANT SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO <db_user>;
```

### Configure Firewall

You will need to configure your security group so that statetrace can connect to the database.

Follow the [AWS guide](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) to configuring security groups.


### Connect to Statetrace

Configure [STATETRACE_INBOUND_CONFIG](../reference/config) to connect to your RDS instance

```yaml
inbounds:
  - name: "Mysql DB"
    database_type: "mysql"
    host: "mycluster.cluster-123456789012.us-east-1.rds.amazonaws.com"
    username: "mysql"
    password: "mysql"
    port: "3306"
    database: "application_db"
```