import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';

@Controller('send')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  @ApiResponse({
    status: 413,
    description: 'Payload Too Large',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  async send(@Res() res: any, @Body() createPostInput: CreatePostInput) {
    try {
      const result = await this.postsService.sendNotif(createPostInput);
      // console.log(result);

      const dataResponse = {
        response: {
          code: HttpStatus.CREATED,
          message: 'Created',
        },
        data: result,
      };
      res.status(HttpStatus.CREATED).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
