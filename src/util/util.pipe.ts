// create-user.pipe.ts

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TestRequestBody } from './util'

@Injectable()
export class UtilPipe implements PipeTransform<any> {
  transform(value: TestRequestBody) {
    const { num } = value
    if (typeof num !== 'number') {
      throw new BadRequestException('Missing parameters');
    }
    return value;
  }
}