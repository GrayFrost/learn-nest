import { Controller, Get, Post, Query, Param, Body, Patch, Delete } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查
  @Get()
  fetch(@Query() {id}): string {
    return this.helloService.fetch(id);
  }

  // 增
  @Post()
  save(@Body() {message}): string {
    return this.helloService.save(message)
  }

  // 改
  @Patch(':id')
  update(@Param() {id}, @Body(){message}): string {
    return this.helloService.update(id, message);
  }

  // 删
  @Delete()
  remove(@Query() {id}): string {
    return this.helloService.remove(id);
  }
}
