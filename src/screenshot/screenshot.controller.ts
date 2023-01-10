import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { ScreenshotDto } from './dto/screenshot.dto';
import { Screenshot } from './entities/screenshot.entity';

@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Post()
  create(@Body() screenshotDto: ScreenshotDto): Promise<Screenshot> {
    return this.screenshotService.create(screenshotDto);
  }

  @Get()
  findAll(): Promise<Screenshot[]> {
    return this.screenshotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Screenshot> {
    return this.screenshotService.findOneById(id);
  }
}
