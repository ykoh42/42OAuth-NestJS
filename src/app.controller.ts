import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  UseGuards,
  Session,
} from '@nestjs/common';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

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

  @Get('data')
  @UseGuards(AuthenticatedGuard)
  @Render('data')
  async data(@User() user: Profile, @Session() session: Record<string, any>) {
    const accessToken: string = session.accessToken;
    console.log(accessToken);
    const data$ = this.httpService
      .get('https://api.intra.42.fr/v2/campus', {
        headers: {
          authorization: 'bearer ' + accessToken,
        },
      })
      .pipe(
        map((response) =>
          response.data
            .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
            .map((item: any) => {
              if (!item.website.match(/^http/)) {
                item.website = 'https://' + item.website;
              }
              return item;
            }),
        ),
      );
    const data = await firstValueFrom(data$);
    return { user, data };
  }

  @Get('logout')
  @Redirect('/')
  logOut(@Req() req: Request) {
    req.logOut();
  }
}
