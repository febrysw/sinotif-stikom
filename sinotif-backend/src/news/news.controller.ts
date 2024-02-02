import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryNewsDto } from './dto/query-news.dto';

@Controller('news')
@ApiTags('Berita')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  async findAll(@Res() res, @Query() query: QueryNewsDto) {
    try {
      const result = await this.newsService.getNews(query.status || '');

      if (result === null) {
        throw new NotFoundException('Document not found');
      }

      const dataResponse = {
        response: {
          code: HttpStatus.OK,
          message: 'Ok',
        },
        data: result,
      };
      res.status(HttpStatus.OK).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Ok',
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
  async findOne(@Res() res, @Param('id') id: string) {
    try {
      const result = await this.newsService.getNewsByDocId(id);

      if (result === null) {
        throw new NotFoundException('Document not found');
      }

      const dataResponse = {
        response: {
          code: HttpStatus.OK,
          message: 'Ok',
        },
        data: result,
      };
      res.status(HttpStatus.OK).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

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
  async create(@Res() res: any, @Body() createNewsDto: CreateNewsDto) {
    try {
      const result = await this.newsService.createNews(createNewsDto);
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

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Ok',
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
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    try {
      const result = await this.newsService.updateNews(id, updateNewsDto);
      // console.log(result);

      const dataResponse = {
        response: {
          code: HttpStatus.OK,
          message: 'Ok',
        },
        data: result,
      };
      res.status(HttpStatus.OK).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Ok',
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
  async remove(@Res() res, @Param('id') id: string) {
    try {
      const result = await this.newsService.removeNews(id);
      // console.log(result);

      const dataResponse = {
        response: {
          code: HttpStatus.OK,
          message: 'Ok',
        },
        data: result,
      };
      res.status(HttpStatus.OK).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
