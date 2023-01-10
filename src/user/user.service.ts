import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupUserInputDTO } from './dto/signup-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(signupUserDto: SignupUserInputDTO) {
    return this.userRepository.save(signupUserDto);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['pixel'],
    });
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

<<<<<<< HEAD
=======
  async updateScore(id: string) {
    const bonus: number = +process.env.BONUS;
    const score: number = 1 * bonus

    const user = await this.userRepository.findOneBy({ id });

    user.totalScore += score;

    return this.userRepository.save(user);
  }

>>>>>>> main
  update(id: string, signupUserDto: SignupUserInputDTO) {
    return this.userRepository.update(id, signupUserDto);
  }

  remove(id: string) {
    return this.userRepository.softDelete(id);
  }
}
