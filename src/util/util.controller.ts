import { Controller, Post, Req, UsePipes, Body } from '@nestjs/common';
import { TestRequestBody } from './util';
import { UtilService } from './util.service';
import { UtilPipe } from './util.pipe'

@Controller('api/test')
export class UtilController {
  constructor(private readonly utilService: UtilService) {}
  @Post()
  @UsePipes(UtilPipe)
  async create(@Body() body: TestRequestBody) {
    const { num } = body
    return `Test POST request ${this.utilService.double(num)}`;
  }
}
