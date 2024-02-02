import { IsOptional, IsString } from 'class-validator';

export class QueryNewsDto {
  @IsString()
  @IsOptional()
  status: string;
}
