import { Application } from '@tsexpress-starter/application';
import { EntitySubscriberInterface } from 'typeorm';
export default function connect(app: Application, ...subscribers: EntitySubscriberInterface[]): Promise<void>;
