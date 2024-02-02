import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryBannerDto } from './dto/query-banner.dto';

@Controller('banner')
@ApiTags('Banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  async findAll(@Res() res, @Query() query: QueryBannerDto) {
    try {
      const result = await this.bannerService.getBanner(query.status || '');

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
      const result = await this.bannerService.getBannerByDocId(id);

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
  async create(@Res() res: any, @Body() createBannerDto: CreateBannerDto) {
    try {
      const result = await this.bannerService.createBanner(createBannerDto);
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
    @Body() updateBannerDto: UpdateBannerDto,
  ) {
    try {
      const result = await this.bannerService.updateBanner(id, updateBannerDto);
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
      const result = await this.bannerService.removeBanner(id);
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
