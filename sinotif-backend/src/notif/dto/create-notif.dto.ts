import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNotifDto {
  topic: string;

  @ApiProperty()
  @IsNotEmpty()
  data: object;

  @ApiProperty()
  @IsNotEmpty()
  notification: object;
}
