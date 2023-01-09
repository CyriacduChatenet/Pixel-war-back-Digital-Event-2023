import { Injectable } from '@nestjs/common';
import { PixelDto } from './dto/pixel.dto';

@Injectable()
export class PixelService {
  create(createPixelDto: PixelDto) {
    return 'This action adds a new pixel';
  }

  findAll() {
    return `This action returns all pixel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pixel`;
  }

  remove(id: number) {
    return `This action removes a #${id} pixel`;
  }
}
