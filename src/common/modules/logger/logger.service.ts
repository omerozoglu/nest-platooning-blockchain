import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';

@Injectable()
export class LoggerService implements LoggerService {
  private logger: any;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log' }),
      ],
    });
  }
}
