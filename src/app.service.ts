import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getHello(): string {
    this.logger.error('Hello World!');
    return 'Hello World!';
  }
}
