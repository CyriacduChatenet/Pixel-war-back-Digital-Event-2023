import { Module } from '@nestjs/common';
import { PixelService } from './pixel.service';
import { PixelGateway } from './gateway/pixel.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pixel } from './entities/pixel.entity';
import { PixelController } from './pixel.controller';
<<<<<<< HEAD

@Module({
  imports: [
    TypeOrmModule.forFeature([Pixel])
=======
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pixel]),
    UserModule
>>>>>>> main
  ],
  providers: [PixelGateway, PixelService],
  controllers: [PixelController]
})
export class PixelModule {}
