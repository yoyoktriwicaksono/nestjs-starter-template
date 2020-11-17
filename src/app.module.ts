import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersService } from './service/users/users.service';
import { RulesService } from './service/rules/rules.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UsersService, RulesService],
})
export class AppModule {}
