import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! <button>btn</button>';
  }
  double(num): number {
    return 1
  }
}
