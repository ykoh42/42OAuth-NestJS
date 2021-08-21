import { Controller, Get, Redirect, UseGuards } from '@nestjs/common';
import { FtOauthGuard } from './guards/ft-oauth.guard';

@Controller('login')
export class LoginController {
  @Get('42')
  @UseGuards(FtOauthGuard)
  ftAuth() {
    return;
  }

  @Get('42/return')
  @UseGuards(FtOauthGuard)
  @Redirect('/')
  ftAuthCallback() {
    return;
  }
}
