import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
export default class InsertStatus implements EntitySubscriberInterface {
    afterInsert(event: InsertEvent<any>): Promise<void>;
}
