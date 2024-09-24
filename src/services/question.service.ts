import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { questionSchema } from '../zodSchemas/question/index';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async getQuestionById(id: string): Promise<any> {
    questionSchema.parse({ id });

    const result = await this.prisma.questions.findUnique({
      where: { id },
      include: { test: true },
    });

    if (!result) {
      throw new Error('Test not found');
    }

    return result;
  }
}
