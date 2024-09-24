import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { testSchema } from '../zodSchemas/test/index';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {}

  async getTestById(id: string): Promise<any> {
    testSchema.parse({ id });

    const result = await this.prisma.test.findUnique({
      where: { id },
      include: { author: true, questions: true },
    });

    if (!result) {
      throw new Error('Test not found');
    }

    return result;
  }
}
