import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UploadFileService } from './upload-file.service';
import { UploadFileController } from './upload-file.controller';
import { Avatar } from './entities/avatar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avatar])],
  controllers: [UploadFileController],
  providers: [UploadFileService],
})
export class UploadFileModule {}
