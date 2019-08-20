import { Application } from '@tsexpress-starter/application';
import { EntitySubscriberInterface } from 'typeorm';
import insertStatus from './insert-status';
import entityValidation from './entity-validation';
export declare function connect(app: Application, ...subscribers: EntitySubscriberInterface[]): Promise<void>;
export declare const InsertStatus: typeof insertStatus;
export declare const EntityValidation: typeof entityValidation;
