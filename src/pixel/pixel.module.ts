import { Module } from '@nestjs/common';
import { PixelService } from './pixel.service';
import { PixelGateway } from './gateway/pixel.gateway';

@Module({
  providers: [PixelGateway, PixelService]
})
export class PixelModule {}
