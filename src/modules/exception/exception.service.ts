import {Injectable} from '@nestjs/common';

@Injectable()
export class ExceptionService {
  get(id: string): string{
    return 'exception example';
  }
  patch(id: number): string {
    return `exception get from param ${id}`;
  }
}