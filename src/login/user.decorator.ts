import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Profile } from 'passport-42';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Profile => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
