import { z } from 'zod';

export const questionSchema = z.object({
  id: z.string().uuid(),
  question: z.string().optional(),
  correctAnswer: z.string().optional(),
  answerVariants: z.array(z.string()).optional(),
  testId: z.string().uuid().optional(),
});
