import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Post, PostDocument } from './schemas/Post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
  ) // @InjectModel(PostComment.name)
  // private postCommentModel: Model<PostCommentDocument>,
  // @InjectModel(PostLike.name) private postLikeModel: Model<PostLikeDocument>,
  {}
}