import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScreenshotDto } from './dto/screenshot.dto';
import { Screenshot } from './entities/screenshot.entity';

@Injectable()
export class ScreenshotService {

  constructor(
    @InjectRepository(Screenshot) private screenshotRepository: Repository<Screenshot>
  ) {}

  create(screenshotDto: ScreenshotDto) {
    return this.screenshotRepository.save(screenshotDto);
  }

  findAll() {
    return this.screenshotRepository.find({
      // relations: ['game'] Ajouter la relation
    })
  }

  findOneById(id: string) {
    return this.screenshotRepository.findOneBy({ id })
  }

  // Ajouter cet ligne quand l'entité game sera créer
  // findOneByGameId(gameId: string) {
  //   return this.screenshotRepository.findOne({
  //     where: {
  //       game: {
  //         id: gameId
  //       }
  //     }
  //   })
  // }
}
