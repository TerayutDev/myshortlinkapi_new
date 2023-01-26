import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Modules } from './modules/module.collection';

import { ShortLinkModule } from './modules/shortlink/shortlink.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    ...Modules,
    ShortLinkModule,
    MongooseModule.forRoot(
      'mongodb+srv://shotlinkUsername1111:LEesBpFbFfwNf25@cluster0.iqhjf59.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
