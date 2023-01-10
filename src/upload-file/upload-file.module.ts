import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { UploadFileService } from './upload-file.service';
import { UploadFileController } from './upload-file.controller';
import { Avatar } from './entities/avatar';

@Module({
  imports: [
    TypeOrmModule.forFeature([Avatar]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [UploadFileController],
  providers: [UploadFileService],
})
export class UploadFileModule {}
