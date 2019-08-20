import { validate } from 'class-validator';
import { BadRequestError } from '@tsexpress-starter/errors';
import { EventSubscriber, EntitySubscriberInterface, InsertEvent, BaseEntity, UpdateEvent } from 'typeorm';

@EventSubscriber()
export default class EntityValidation implements EntitySubscriberInterface {
  async validateEntity(entity: BaseEntity) {
    const errors = await validate(entity);

    if (errors.length > 0) {
      throw new BadRequestError(errors);
    }
  }

  async beforeInsert(event: InsertEvent<any>) {
    await this.validateEntity(event.entity);
  }

  async beforeUpdate(event: UpdateEvent<any>) {
    await this.validateEntity(event.entity);
  }
}
