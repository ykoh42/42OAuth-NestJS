import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Profile } from 'passport-42';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: Profile, done: (err: Error, user: Profile) => void): any {
    console.log('user: ', user);
    done(null, user);
  }

  deserializeUser(payload: Profile, done: (err: Error, user: Profile) => void) {
    console.log('user: ', payload);
    return done(null, payload);
  }
}
