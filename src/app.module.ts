import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilController } from './util/util.controller';
import { UtilService } from './util/util.service';

@Module({
  imports: [],
  controllers: [AppController, UtilController],
  providers: [AppService, UtilService],
})
export class AppModule {}
