import { Module } from '@nestjs/common';
import { NotifService } from './notif.service';
import { NotifController } from './notif.controller';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [NotifController],
  providers: [NotifService, PostsService],
})
export class NotifModule {}
