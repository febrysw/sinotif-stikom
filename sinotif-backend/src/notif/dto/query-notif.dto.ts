import { IsOptional, IsString } from 'class-validator';

export class QueryNotifDto {
  @IsString()
  @IsOptional()
  status: string;
}
