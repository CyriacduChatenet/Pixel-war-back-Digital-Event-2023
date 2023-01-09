import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { SignupUserInputDTO } from '../user/dto/signup-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);

    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
  }

  public async login(user: any) {
    const payload = {
      username: user.username,
      password: user.password,
      id: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async signup(signupUserInputDTO: SignupUserInputDTO) {
    const user = await this.userService.findOneByUsername(
      signupUserInputDTO.username,
    );

    if (user) {
      throw new HttpException(
        'User is already exist',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const password = await bcrypt.hash(signupUserInputDTO.password, 10);

    return this.userService.create({
      ...signupUserInputDTO,
      password,
    });
  }
}
