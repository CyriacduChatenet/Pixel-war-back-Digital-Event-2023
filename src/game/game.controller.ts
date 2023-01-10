import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './dto/game.dto';
import { Game } from './entities/game.entity';
import { UpdateResult } from 'typeorm';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() gameDto: GameDto): Promise<Game> {
    return this.gameService.create(gameDto);
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() gameDto: GameDto): Promise<UpdateResult> {
    return this.gameService.update(id, gameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<UpdateResult> {
    return this.gameService.remove(id);
  }
}
