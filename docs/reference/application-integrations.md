---
sidebar_position: 3
---

# Framework Integrations

## Ready made libraries

There are some ready to go libraries for some languages that configure the ORM and includes a middleware.

### Python/Django

An official Django integration available that will wrap all requests in transactions and automatically annotate them: [https://github.com/SoCal-Software-Labs/statetrace_django](https://github.com/SoCal-Software-Labs/statetrace_django)

### Elixir/Phoenix

There is an official project for automatically annotating Pheonix project using Ecto. [https://hexdocs.pm/statetrace_elixir/readme.html](https://hexdocs.pm/statetrace_elixir/readme.html)


## Templates

For a few other languages, you can use these templates below to get started annotating transactions:

### Python / SQLAlchemy
```python
class StatetraceAnnotation(Base):
    __tablename__ = 'statetrace_annotations'
    id = Column(Text(), primary_key=True)
    kind = Column(Text())
    meta = Column(JSON())
    payload = Column(JSON())


sess_id = str(uuid.uuid4())
session = Session()
with session.begin():
  session_annotation = StatetraceAnnotation(id=sess_id, kind="_st.app.sess", meta={}, payload={"session_actor_id": 1})
  session.add(session_annotation)


# For each action you want to annotate, connect with session
session = Session()
with session.begin():
  # Do your stuff
  # ...

  session_annotation = StatetraceAnnotation(id=str(uuid.uuid4()), kind="_st.app.act", meta={}, payload={"action_session_id": sess_id})
  session.add(session_annotation)
```

### TypeScript / TypeORM

```typescript
import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity("statetrace_annotations")
export class StatetraceAnnotation {

    @PrimaryColumn()
    id: string;

    @Column()
    kind: string;

    @Column()
    meta: json;

    @Column()
    payload: json;
}

const sessionID = uuidv4();

const sessAnnotation = new StatetraceAnnotation();
sessAnnotation.id = sessionID;
sessAnnotation.kind = "_st.app.sess";
sessAnnotation.payload = {"session_actor_id": 1}; 
sessAnnotation.save()

await getConnection().transaction(async transactionalEntityManager => {
  // Do your work
  // ...

  const annotation = new StatetraceAnnotation();
  annotation.id = uuidv4();
  annotation.kind = "_st.app.act";
  annotation.payload = {"action_session_id": sessionID}; 
  transactionalEntityManager.save(annotation)
});

```