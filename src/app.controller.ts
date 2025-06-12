import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  handleHomePage() {
    return { message: 'message1' };
  }
}
