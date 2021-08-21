import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';
import { Request } from 'express';

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
  logIn() {
    return;
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  @Render('profile')
  profile(@User() user: Profile) {
    return { user };
  }

  @Get('logout')
  @Redirect('/')
  logOut(@Req() req: Request) {
    req.logOut();
  }
}
