import type { ContactInquiry } from '../types/domain';
import type { ContactInput } from '../lib/validation/contact';

export interface ContactRepository {
  create(input: ContactInquiry): Promise<ContactInquiry>;
}
export class InMemoryContactRepository implements ContactRepository {
  async create(input: ContactInquiry): Promise<ContactInquiry> {
    return input;
  }
}
export async function createContactInquiry(
  input: ContactInput,
  repository: ContactRepository = new InMemoryContactRepository(),
): Promise<ContactInquiry> {
  return repository.create(input);
}
