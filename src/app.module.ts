import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/services/prisma.service';
import { TestController } from 'src/controllers/test.controller';
import { TestService } from 'src/services/test.service';
import { QuestionService } from 'src/services/question.service';
import { UserService } from 'src/services/user.service';
import { UserController } from 'src/controllers/user.controller';
import { QuestionController } from 'src/controllers/question.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TestController,
    UserController,
    QuestionController,
  ],
  providers: [
    AppService,
    PrismaService,
    TestService,
    QuestionService,
    UserService,
  ],
  exports: [PrismaService],
})
export class AppModule {}
