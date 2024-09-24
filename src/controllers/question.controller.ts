import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  async getQuestion(@Param('id') id: string): Promise<string> {
    return this.questionService.getQuestionById(id);
  }
}
