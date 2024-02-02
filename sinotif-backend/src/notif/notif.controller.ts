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
import { NotifService } from './notif.service';
import { CreateNotifDto } from './dto/create-notif.dto';
import { UpdateNotifDto } from './dto/update-notif.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryNotifDto } from './dto/query-notif.dto';

@Controller('notif')
@ApiTags('Notif')
export class NotifController {
  constructor(private readonly notifService: NotifService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  async findAll(@Res() res, @Query() query: QueryNotifDto) {
    try {
      const result = await this.notifService.getNotif(query.status || '');

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
      const result = await this.notifService.getNotifByDocId(id);

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
  async create(@Res() res: any, @Body() createNotifDto: CreateNotifDto) {
    try {
      createNotifDto.topic = 'e-sim';
      const result = await this.notifService.createNotif(createNotifDto);
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
    @Body() updateNotifDto: UpdateNotifDto,
  ) {
    try {
      updateNotifDto.topic = 'e-sim';
      const result = await this.notifService.updateNotif(id, updateNotifDto);
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
      const result = await this.notifService.removeNotif(id);
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
