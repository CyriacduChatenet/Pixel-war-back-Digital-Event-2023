import { Module } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { ScreenshotController } from './screenshot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Screenshot } from './entities/screenshot.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Screenshot])
  ],
  controllers: [ScreenshotController],
  providers: [ScreenshotService]
})
export class ScreenshotModule {}
