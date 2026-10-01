import type { RFQ } from '../types/domain';
import type { RFQInput } from '../lib/validation/rfq';

export interface RFQRepository {
  create(input: RFQ): Promise<RFQ>;
}
export interface NotificationService {
  sendRFQNotification(rfq: RFQ): Promise<void>;
}

export function createReferenceNumber(sequence = 1, date = new Date()): string {
  return `SE-RFQ-${date.getFullYear()}-${String(sequence).padStart(5, '0')}`;
}

export class InMemoryRFQRepository implements RFQRepository {
  private readonly items: RFQ[] = [];
  async create(input: RFQ): Promise<RFQ> {
    this.items.push(input);
    return input;
  }
}

export class NoopNotificationService implements NotificationService {
  async sendRFQNotification(_rfq: RFQ): Promise<void> {}
}

export async function createRFQ(
  input: RFQInput,
  repository: RFQRepository = new InMemoryRFQRepository(),
  notifier: NotificationService = new NoopNotificationService(),
): Promise<RFQ> {
  const rfq: RFQ = {
    ...input,
    referenceNumber: createReferenceNumber(),
    status: 'NEW',
    createdAt: new Date().toISOString(),
    attachmentName: input.attachment?.name,
  };
  const created = await repository.create(rfq);
  await notifier.sendRFQNotification(created);
  return created;
}
