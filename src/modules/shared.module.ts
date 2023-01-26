import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LinkData,
  LinkDataSchema,
} from 'src/entities/mongodb/schema/linkdata.schema';

import { ModuleServices } from './module-service.collection';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LinkData.name, schema: LinkDataSchema },
    ]),
  ],
  exports: [...ModuleServices],
  providers: [...ModuleServices],
})
export class SharedModule {}
