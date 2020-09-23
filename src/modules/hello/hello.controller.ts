import { Controller, Get, Post, Query, Param, Body, Patch, Delete } from '@nestjs/common';
import { HelloService } from './hello.service';
import {ApiTags, ApiOperation} from '@nestjs/swagger';
import {GetHelloDto} from './dto/create-hello.dto';
import { User } from './entity/user.entity';
import {UserDto} from './dto/create-hello.dto'

@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查
  @Get()
  @ApiOperation({summary: 'fetch hello'})
  findOne(@Query() {id}: GetHelloDto): Promise<User> {
    return this.helloService.findOne(id);
  }

  // 增
  @Post()
  create(@Body() params: UserDto): Promise<string> {
    console.log('zzh 新增', params);
    return this.helloService.create(params);
  }

  // 改
  @Patch(':id')
  update(@Param() {id}, @Body() params: UserDto): Promise<string> {
    return this.helloService.update(id, params);
  }

  // 删
  @Delete()
  remove(@Query() {id}): Promise<string> {
    return this.helloService.remove(id);
  }
}
