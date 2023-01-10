import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { SignupUserInputDTO } from './dto/signup-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() signupUserDto: SignupUserInputDTO): Promise<User> {
    return this.userService.create(signupUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get(':username')
  findOneByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.findOneByUsername(username);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() signupUserDto: SignupUserInputDTO): Promise<UpdateResult> {
    return this.userService.update(id, signupUserDto);
  }

  @Put('score/:id')
  updateScore(id: string): Promise<User> {
    return this.userService.updateScore(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.remove(id);
  }
}
