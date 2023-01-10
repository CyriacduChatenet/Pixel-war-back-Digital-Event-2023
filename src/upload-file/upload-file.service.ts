import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Avatar } from './entities/avatar.entity';

@Injectable()
export class UploadFileService {
  constructor(
    @InjectRepository(Avatar) private avatarRepository: Repository<Avatar>,
  ) {}
  async uploadAvatar(file: Avatar) {
    await this.avatarRepository.save(file);
  }

  async findAllAvatar() {
    return this.avatarRepository.find();
  }
}
