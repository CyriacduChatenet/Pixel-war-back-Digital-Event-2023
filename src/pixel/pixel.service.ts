import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { PixelDto } from './dto/pixel.dto';
import { Pixel } from './entities/pixel.entity';

@Injectable()
export class PixelService {

  constructor(
    @InjectRepository(Pixel) private pixelRepository: Repository<Pixel>
  ) {}

  create(createPixelDto: PixelDto) {
    return this.pixelRepository.save(createPixelDto)
  }

  async findAll() {
    return await this.pixelRepository.find()
  }

  async findByCoordonate(x: number, y: number) {
    return await this.pixelRepository.findOneBy({ x, y })
  }

  // async findByUser(user: User) {
  //   return await this.pixelRepository.find({
  //     where: {
  //       user: user
  //     }
  //   })
  // }

  remove(id: number) {
    return `This action removes a #${id} pixel`;
  }
}
