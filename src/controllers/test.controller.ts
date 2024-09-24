import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from '../services/test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get(':id')
  async getTest(@Param('id') id: string): Promise<string> {
    return this.testService.getTestById(id);
  }
}
