import {IsInt, IsString} from 'class-validator';

export class GetHelloDto {
  @IsString()
  readonly id: string;
}