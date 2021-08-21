import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';

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

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  @Render('profile')
  profile(@User() user: Profile) {
    return { user };
  }
}
