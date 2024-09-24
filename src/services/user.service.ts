import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { userSchema } from '../zodSchemas/user/index';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: string): Promise<any> {
    userSchema.parse({ id });

    const result = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!result) {
      throw new Error('Test not found');
    }

    return result;
  }
}
