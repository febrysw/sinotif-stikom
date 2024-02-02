import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
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
  async login(@Res() res: any, @Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(
        loginDto.email,
        loginDto.password,
      );
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

  @Post('logout')
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  async logout(@Res() res: any) {
    try {
      const dataResponse = {
        response: {
          code: HttpStatus.OK,
          message: 'Ok',
        },
      };
      res.status(HttpStatus.OK).json(dataResponse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
