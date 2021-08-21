import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FtStrategy } from './ft.strategy';
import { LoginController } from './login.controller';
import { SessionSerializer } from './session.serializer';

@Module({
  controllers: [LoginController],
  providers: [ConfigService, FtStrategy, SessionSerializer],
})
export class LoginModule {}
