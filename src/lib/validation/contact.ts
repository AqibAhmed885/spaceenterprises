import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required.'),
  company: z.string().trim().optional(),
  email: z.email('Enter a valid email.'),
  phone: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Please tell us a little more about your requirement.'),
});

export type ContactInput = z.infer<typeof contactSchema>;
