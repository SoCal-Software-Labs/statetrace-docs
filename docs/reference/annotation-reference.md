---
sidebar_position: 2
---

# Annotation Table

Statetrace annotations work by writing to a special table. This page describes the low-level implementation. For a higher-level framework oriented discussion see the [frameworks page](./application-integrations).

## Creating

The annotation table should be created on the same database as your application code. It requires no indexes and can be safely truncated at anytime.

```sql
CREATE TABLE statetrace_annotations(
   id TEXT PRIMARY KEY,
   kind TEXT,
   meta JSON,
   payload JSON,
);
```

## Using

There are several types of annotations that you can send to Statetrace.

### Session

A session is a logical grouping of actions. 

To insert the session annotation as JSON data. This requires a unique id that you will later use to link transactions to this session.

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

The following fields are available for sessions:


* session_actor_id
* session_actor_full_name
* session_actor_email
* session_actor_avatar
* session_client_user_agent
* session_application_id
* session_application_type (`<lang>/<framework>` i.e. python/django)


### Actions

An action associates a transaction to a session. There should only be one action per transaction.

Actions should use a unique id and be inserted in the same transaction as other changes you wish to associate with the session.

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

The following fields are available for actions:

* action_session_id (Session ID)
* action_url (URL that identifies action)
* action_method (HTTP method, GQL mutation that triggered action)
* action_version (version of the code (git hash, git tag, etc))
* action_length_ms (length of time the action took in ms)
* action_parent_id (the ID of another action)

### Migrations

After a migration you can tell Statetrace to resynchronize the tables by sending a migration annotation.

```sql
BEGIN;
INSERT INTO 
    statetrace_annotations 
        (id, kind, meta, payload) 
    VALUES (
        (
            'bc573b1d-5ed0-4018-bcf4-74ce1b23875d',
            '_st.app.mig',
            '{}'::JSON,
            '{}'::JSON,
        )
    );
COMMIT;
```

Migrations have no extra fields