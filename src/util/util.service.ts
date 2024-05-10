import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  double(num: number): number {
    return num * 2
  }
}
