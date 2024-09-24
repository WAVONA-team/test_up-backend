import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().optional(),
  username: z.string().optional(),
  photoUrl: z.string().optional(),
});
