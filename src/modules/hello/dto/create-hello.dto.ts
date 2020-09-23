import {IsInt, IsString, IsNumber} from 'class-validator';

export class GetHelloDto {
  @IsString()
  readonly id: string;
}

export class UserDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsNumber()
  readonly money: number;
  @IsString()
  readonly gender: string;
}