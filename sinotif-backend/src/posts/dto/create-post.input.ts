import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  topic: string;

  @Field()
  @IsNotEmpty()
  data: string;

  @Field()
  @IsNotEmpty()
  notification?: string;
}
