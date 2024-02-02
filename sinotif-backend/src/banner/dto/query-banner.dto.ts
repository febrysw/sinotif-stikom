import { IsOptional, IsString } from 'class-validator';

export class QueryBannerDto {
  @IsString()
  @IsOptional()
  status: string;
}
