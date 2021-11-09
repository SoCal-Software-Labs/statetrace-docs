---
sidebar_position: 4
---

# GraphQL

## Quick Reference

The best way to explore the GQL API is through GraphiQL. [See how to setup GraphiQL in the turorial.](../intro#using-the-gql-api) 

To learn more about GraphQL itself, [read the docs](https://graphql.org/learn/).

### Setup

Configure the `STATETRACE_GQL_API_KEY` environment variable of your state instance with a key at least 32 characters long. Set the `STATETRACE_PORT` environment variable to what you want the HTTP server to bind to:

```yaml
  statetrace:
    image: statetraceofficial/statetrace-beta
    environment:
      - STATETRACE_GQL_API_KEY=12345678901234567890123456789012
      - PORT=4000
```


The GraphQL endpoint will run located at `/graphql/api/v1/` of your running statetrace instance.

Now you can make a GQL query:

```bash
curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 12345678901234567890123456789012" \
  -d '{"query":"query{scan(inboundName: \"Postgres DB\") { rowLsnId }}"}' \
  http://localhost:4000/graphql/api/v1/
```


### Query Reference

Below is a list of all available queries

![Docusaurus Plushie](../../static/img/root_query.png)

### StreamRow Refrence

Scan and Search results come in as a StreamRow, below find all available fields to query:

![Docusaurus Plushie](../../static/img/stream_row.png)


## Scanning the Buffer's Stream

Scanning the stream of changes from the buffer is easy. The scan starts from the earliest changes to the most recent changes at the end. 

`rowLsnId` (LSN = Log Sequence Number) uniquely identifies a row change within an inbound and is monotonically incrementing logical timestamp.  This means that all changes are ordered based on `rowLsnId`.


### Get beginning of buffer

To grab the beginning of the buffer run `scan`

```graphql
query{
  scan(inboundName: "Postgres DB") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

Results in:

```json
{
  "data": {
    "scan": [
      {
        "relationName": "django_migrations",
        "relationSchema": "public",
        "rowLsnId": "0x0DC97A33405711ECA69C0242AC1A0004000000000000000500000004",
        "rowPk": [
          "1"
        ],
        "rowRecord": {
          ...
        }
      },
    ],
    ...
  }
}
```


### Get the next slice of buffer

To grab the next group of events from the buffer use the `fromLsn` argument with the last `rowLsnId` of the previous chunk.

```graphql
query{
  scan(inboundName: "Postgres DB", fromLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Limit buffer slice by size

Limit the number of results returned by the scan.

```graphql
query{
  scan(inboundName: "Postgres DB", limit: 3) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Limit buffer slice by Lsn

Use `limitLsn` to contrain the maximum ID that is returned.

```graphql
query{
  scan(
    inboundName: "Postgres DB",
    fromLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C",
    limitLsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007E"
  ) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```
This allows you to scan the buffer completely. 

## Get a single change

If you already know the LSN of the change you wish to query you can access it directly.

### getChange

```graphql
query{
  getChange(
    inboundName: "Postgres DB",
    lsn: "0x0DC97A33405711ECA69C0242AC1A000400000000000000050000007C"
  ) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

## Collector States

Sometimes you need to know whether or not an inbound collector is online. You can do this by querying the latest statuses of inbound and outbounds.

### Get latest statuses for inbound

```graphql
query{
  getLatestInboundStatuses(inboundName: "Postgres DB") {
    status
    extraText
    timestamp
  }
}
```

Results in:

```json
{
  "data": {
    "getLatestInboundStatuses": [
      {
        "extraText": null,
        "status": "running",
        "timestamp": "2021-11-08T18:43:15.303707"
      }
    ]
  }
}
```

### Get latest statuses for outbound

Sometimes you need to know whether or not an inbound collector is online. You can do this by querying the latest statuses.

```graphql
query{
  getLatestOutboundStatuses(inboundName: "Postgres Redshift") {
    status
    extraText
    timestamp
  }
}
```

Results in:

```json
{
  "data": {
    "getLatestOutboundStatuses": [
      {
        "extraText": null,
        "status": "running",
        "timestamp": "2021-11-08T18:42:58.299150"
      }
    ]
  }
}
```


## Search

Search requires the search outbound be enabled for your database. Search gives results with the most recent change first and the oldest change last (opposite of scan).


### Search by email

```graphql
query{
  search(outboundName:"Search", actorEmail: "john_do@example.com") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Search by actor id

```graphql
query{
  search(outboundName:"Search", actorID: "1") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```
### Search limit

```graphql
query{
  search(outboundName:"Search", limit: 1) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Search for table

```graphql
query{
  search(outboundName:"Search", table: {schema: "public", name: "table_name"}, pks:["1"]) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```



### Search for row

```graphql
query{
  search(outboundName:"Search", table: {schema: "public", name: "table_name"}) {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Search for Data Organization

```graphql
query{
  search(outboundName:"Search", dataOrganization: "1") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

### Search for User Organization

```graphql
query{
  search(outboundName:"Search", userOrganization: "1") {
    rowLsnId
    relationSchema
    relationName
    rowPk
    rowRecord
  }
}
```

