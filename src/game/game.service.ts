import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDto } from './dto/game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>
  ) {}

  create(gameDto: GameDto) {
    return this.gameRepository.save(gameDto);
  }

  findAll() {
    return this.gameRepository.find({
      relations: ['screenshot']
    })
  }

  findOne(id: string) {
    return this.gameRepository.findOneBy({ id })
  }

  update(id: string, gameDto: GameDto) {
    return this.gameRepository.update(id, gameDto)
  }

  remove(id: string) {
    return this.gameRepository.softDelete(id)
  }
}
