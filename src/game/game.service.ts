import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { GameDto } from './dto/game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
  ) {}

  create(gameDto: GameDto): Promise<Game> {
    return this.gameRepository.save(gameDto);
  }

  findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['screenshot'],
    });
  }

  findOne(id: string): Promise<Game> {
    return this.gameRepository.findOneBy({ id })
  }

  update(id: string, gameDto: GameDto): Promise<UpdateResult> {
    return this.gameRepository.update(id, gameDto)
  }

  remove(id: string): Promise<UpdateResult> {
    return this.gameRepository.softDelete(id)
  }
}
