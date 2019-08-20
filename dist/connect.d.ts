import { EntitySubscriberInterface } from 'typeorm';
export default function connect(...subscribers: EntitySubscriberInterface[]): Promise<void>;
