import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SignupUserInputDTO } from './dto/signup-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() signupUserDto: SignupUserInputDTO) {
    return this.userService.create(signupUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':username')
  findOneByUsername(@Param('username') username: string) {
    return this.userService.findOneByUsername(username);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() signupUserDto: SignupUserInputDTO) {
    return this.userService.update(id, signupUserDto);
  }

<<<<<<< HEAD
=======
  @Put('score/:id')
  updateScore(id: string) {
    return this.userService.updateScore(id);
  }

>>>>>>> main
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
