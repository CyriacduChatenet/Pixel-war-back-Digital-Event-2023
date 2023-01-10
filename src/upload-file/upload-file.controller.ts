import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadFileService } from './upload-file.service';

@Controller('upload-file')
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFileWithPost(@UploadedFile() file, @Body() body) {
    console.log(file);
    console.log(body.firstName);
    console.log(body.favoriteColor);
  }
}
