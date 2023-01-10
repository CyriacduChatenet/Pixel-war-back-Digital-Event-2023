import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { SignupUserInputDTO } from './dto/signup-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(signupUserDto: SignupUserInputDTO): Promise<User> {
    return this.userRepository.save(signupUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['pixel'],
    });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  async updateScore(id: string): Promise<User> {
    const bonus: number = +process.env.BONUS;
    const score: number = 1 * bonus

    const user = await this.userRepository.findOneBy({ id });

    user.totalScore += score;

    return this.userRepository.save(user);
  }

  update(id: string, signupUserDto: SignupUserInputDTO): Promise<UpdateResult> {
    return this.userRepository.update(id, signupUserDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.userRepository.softDelete(id);
  }
}
