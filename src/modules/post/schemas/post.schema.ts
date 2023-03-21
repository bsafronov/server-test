import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({
  timestamps: true,
})
export class Post {
  id: string;
  createdAt: string;
  updatedAt: string;

  // @Prop({ required: true })
  // content: PostContentProps[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
