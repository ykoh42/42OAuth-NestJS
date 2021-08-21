import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  home(@User() user: Profile) {
    return { user };
  }

  @Get('login')
  @Render('login')
  login() {
    return;
  }
}
