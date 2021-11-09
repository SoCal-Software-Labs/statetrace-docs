---
sidebar_position: 5
---

# Environment Variables

The following environment variables are avaible to configure the application:

* `SECRET_KEY` (32 char secret)
* `STATETRACE_PORT` (the port to run the HTTP server)
* `STATEATRACE_DATABASE_URL` (the port to run the HTTP server)
* `STATETRACE_BUFFER_POOL_SIZE` (the pool size that connects to the buffer db)
* `STATETRACE_ENABLE_GRAPHIQL` (enable graphiql)
* `STATETRACE_GQL_API_KEY` (32 char token to authenicate GQL requests)
* `STATETRACE_FORCE_SSL` Force the server to only accept SSL connections
* `STATETRACE_WEBHOOK_POOL` Number of workers to use for webhooks
* `STATETRACE_MAX_INBOUND_CHANGES` Maximum changes in a transaction before committing chunk to buffer
* `STATETRACE_INBOUND_CONFIG` The [configuration information](./config) for the inbounds