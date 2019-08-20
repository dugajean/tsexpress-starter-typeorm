import path from 'path';
import { log } from '@tsexpress-starter/utils';
import { Application } from '@tsexpress-starter/application';
import { createConnection, EntitySubscriberInterface } from 'typeorm';

import insertStatus from './insert-status';
import entityValidation from './entity-validation';

export default function connect(app: Application, ...subscribers: EntitySubscriberInterface[]): Promise<void> {
  return createConnection({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [path.join(app.appDir, '/app/**/entity.{ts,js}')],
    subscribers: [entityValidation, insertStatus, ...(subscribers as Function[])],
    synchronize: !!process.env.DB_SYNC
  })
    .then(() => log('Connection to the database succeeded.'))
    .catch(console.log);
}

export const InsertStatus = insertStatus;
export const EntityValidation = entityValidation;
