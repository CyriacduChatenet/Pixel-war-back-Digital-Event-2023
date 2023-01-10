import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadFileService } from './upload-file.service';

@Controller('upload-file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSingleFileWithPost(@UploadedFile() file) {
    console.log(file);
    return await this.uploadFileService.uploadAvatar(file);
  }

  @Get('avatar')
  async findAllAvatar() {
    return await this.uploadFileService.findAllAvatar();
  }
}
