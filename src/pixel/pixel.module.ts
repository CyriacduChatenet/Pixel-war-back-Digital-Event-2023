import { Module } from '@nestjs/common';
import { PixelService } from './pixel.service';
import { PixelGateway } from './gateway/pixel.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pixel } from './entities/pixel.entity';
import { PixelController } from './pixel.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pixel]),
    UserModule
  ],
  providers: [PixelGateway, PixelService],
  controllers: [PixelController],
})
export class PixelModule {}
