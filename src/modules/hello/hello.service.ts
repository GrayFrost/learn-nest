import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './entity/user.entity';
import {UserDto} from './dto/create-hello.dto';
@Injectable()
export class HelloService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

  findOne(id: string): Promise<User> {
    // return `get Hello ${id}`;
    return this.usersRepository.findOne(id)
  }

  async create(params: UserDto): Promise<string> {
    let user = new User();
    const {name, age, gender, money} = params;
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.money = money;
    await this.usersRepository.save(user);
    return '新增成功';
  }

  async update(id: string, params: UserDto): Promise<string>{
    let currentUser = await this.usersRepository.findOne(id);
    const {name, age, gender, money} = params;
    currentUser.name = name;
    currentUser.age = age;
    currentUser.gender = gender;
    currentUser.money = money;
    await this.usersRepository.save(currentUser);
    return '修改成功';
  }

  async remove(id):Promise<string>{
    await this.usersRepository.findOneOrFail(id);
    await this.usersRepository.delete(id);
    return '删除成功';
  }
}