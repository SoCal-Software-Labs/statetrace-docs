---
sidebar_position: 6
---

# Running Statetrace

### Docker

Statetrace runs inside a container. Either run this container with podman, docker, or on your favorite cloud provider.

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

### Environment variables

See the [complete list of environment variables](./environment-variables) to control statetrace. 


### Docker-Compose

Run Statetrace in docker-compose:

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