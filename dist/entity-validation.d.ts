import { EntitySubscriberInterface, InsertEvent, BaseEntity, UpdateEvent } from 'typeorm';
export default class EntityValidation implements EntitySubscriberInterface {
    validateEntity(entity: BaseEntity): Promise<void>;
    beforeInsert(event: InsertEvent<any>): Promise<void>;
    beforeUpdate(event: UpdateEvent<any>): Promise<void>;
}
