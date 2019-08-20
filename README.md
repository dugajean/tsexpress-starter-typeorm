# TypeORM for TSExpress Starter

Using TypeORM with TSExpress starter comes with a few helper classes that may help you interacting with your database.

Two subscribers are provided with this package:

1. `InsertStatus` so that your responses return a 201 status code, indicating a new resource.
2. `EntityValidation` so when you use the [`class-validator`](https://github.com/typestack/class-validator) package in your entity, we return with a 400 status and a proper failure message.

## Getting started

First install this package, TypeORM and class-validator:

```bash
yarn add @tsexpress-starter/typeorm typeorm class-validator mysql
```

> **Note!** You must edit your `.env` file with the necessary database information.

Then, use the following code to make the connection to your database:

```javascript
// src/database/connect.ts

import path from 'path';
import { createConnection } from 'typeorm';
import { log } from '@tsexpress-starter/utils';
import { InsertStatus } from '@tsexpress-starter/typeorm';
import { EntityValidation } from '@tsexpress-starter/typeorm';

export default function connect(): Promise<void> {
  return createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [path.join(__dirname, '/../app/**/entity.{ts,js}')],
    subscribers: [EntityValidation, InsertStatus],
    synchronize: !!process.env.DB_SYNC
  })
    .then(() => log('Connection to the database succeeded.'))
    .catch(console.log);
}
```

> **Note!** Change `mysql` to your desired database driver. Make sure to install the appropriate Node module to support your database. Refer to the TypeORM documentation for more information.

In your `server.ts` file, add the following lines:

```javascript
// src/server.ts

import connect from './database/connect';

// ...

app.beforeRoutes = () => connect();
```

## License

TSExpress Starter is released under the [the MIT License](LICENSE).
