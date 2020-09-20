import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id: string): string {
    return `get Hello ${id}`;
  }
  save(message: string): string {
    return `save Hello: ${message}`;
  }
  update(id: string, message: string): string{
    return `update hello id${id}: ${message}`;
  }
  remove(id): string{
    return `remove hello: ${id}`;
  }
}