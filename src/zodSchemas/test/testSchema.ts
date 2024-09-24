import { z } from 'zod';

export const testSchema = z.object({
  id: z.string().uuid(),
  title: z.string().optional(),
  description: z.string().optional(),
  userId: z.string().uuid().optional(),
});
