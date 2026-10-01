import { z } from 'zod';

export const attachmentSchema = z
  .object({
    name: z.string(),
    type: z.string(),
    size: z
      .number()
      .max(10 * 1024 * 1024, 'Attachments must be 10 MB or smaller.'),
  })
  .refine(
    (file) => /\.(pdf|doc|docx|xls|xlsx|csv|jpg|jpeg|png)$/i.test(file.name),
    'Unsupported attachment type.',
  );

export const rfqSchema = z.object({
  name: z.string().trim().min(2, 'Full name is required.'),
  company: z.string().trim().min(2, 'Company name is required.'),
  email: z.email('Enter a valid business email.'),
  phone: z.string().trim().optional(),
  product: z.string().trim().min(2, 'Product or equipment is required.'),
  category: z.string().trim().optional(),
  quantity: z.string().trim().optional(),
  brand: z.string().trim().optional(),
  partNumber: z.string().trim().optional(),
  specifications: z.string().trim().optional(),
  requiredDate: z.string().trim().optional(),
  deliveryCountry: z.string().trim().optional(),
  deliveryCity: z.string().trim().optional(),
  message: z.string().trim().optional(),
  attachment: attachmentSchema.optional(),
});

export type RFQInput = z.infer<typeof rfqSchema>;
