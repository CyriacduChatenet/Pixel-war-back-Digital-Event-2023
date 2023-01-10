import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async findByCoordinates(x: number, y: number) {
    return await this.pixelRepository.find({
      where: {
        x: x,
        y: y
      },
      relations: ['user'],
      order: {
        createdAt: 'DESC'
      }
    })
  }

  async findByUser(userId: string): Promise<Pixel[]>  {
    return await this.pixelRepository.find({
      where: {
        user: {
          id: userId
        }
      }
    })
  }

  async findLastTwentyUser(): Promise<Pixel[]> {
    return await this.pixelRepository.find({
      relations: ['user'],
      order: {
        createdAt: 'DESC'
      },
      select: ['id', 'createdAt', 'user'],
      take: 20
    })
  }
}
