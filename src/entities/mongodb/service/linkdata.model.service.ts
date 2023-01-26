import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepo } from '../mongo.repo';
import { LinkData, LinkDataDocument } from '../schema/linkdata.schema';

@Injectable()
export class LinkDataModelService extends MongoRepo<LinkDataDocument> {
  constructor(
    @InjectModel(LinkData.name)
    private _model: Model<LinkDataDocument>,
  ) {
    super(_model);
  }
}
