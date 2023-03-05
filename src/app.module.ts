import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import Configuration from './configuration';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
