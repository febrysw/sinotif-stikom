import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [],
  providers: [PostsResolver, PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
