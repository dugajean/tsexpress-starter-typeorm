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

In your `server.ts` file, add the following lines:

```javascript
// src/server.ts
// ...
import connect from '@tsexpress-starter/typeorm';

const app = new Application(__dirname, express());

app.beforeRoutes = () => connect(app);

app.start();
```

And you're done!

## License

TSExpress Starter is released under the [the MIT License](LICENSE).
