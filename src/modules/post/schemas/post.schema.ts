import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PosterDocument = HydratedDocument<Poster>;

@Schema({
  timestamps: true,
})
export class Poster {
  id: string;
  createdAt: string;
  updatedAt: string;

  // @Prop({ required: true })
  // content: PostContentProps[];
}

export const PosterSchema = SchemaFactory.createForClass(Poster);
