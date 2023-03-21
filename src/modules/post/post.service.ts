import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Poster, PosterDocument } from './schemas/Post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Poster.name) private postModel: Model<PosterDocument>, // @InjectModel(PostComment.name)
  ) // private postCommentModel: Model<PostCommentDocument>,
  // @InjectModel(PostLike.name) private postLikeModel: Model<PostLikeDocument>,
  {}
}
