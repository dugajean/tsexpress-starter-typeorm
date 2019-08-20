import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';

@EventSubscriber()
export default class InsertStatus implements EntitySubscriberInterface {
  async afterInsert(event: InsertEvent<any>) {
    Object.defineProperty(event.entity, 'statusCode', { value: 201 });
  }
}
