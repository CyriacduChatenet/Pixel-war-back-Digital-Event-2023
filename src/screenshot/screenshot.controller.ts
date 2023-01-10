import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { ScreenshotDto } from './dto/screenshot.dto';

@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Post()
  create(@Body() screenshotDto: ScreenshotDto) {
    return this.screenshotService.create(screenshotDto);
  }

  @Get()
  findAll() {
    return this.screenshotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.screenshotService.findOneById(id);
  }
}
