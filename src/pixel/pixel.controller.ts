import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PixelDto } from './dto/pixel.dto';
import { Pixel } from './entities/pixel.entity';
import { PixelService } from './pixel.service';

@Controller('pixel')
export class PixelController {

    constructor(private pixelService: PixelService) {}

    @Get()
    findAll(): Promise<Pixel[]> {
        return this.pixelService.findAll()
    }

    @Post()
    create(@Body() datas: PixelDto): Promise<Pixel> {
        return this.pixelService.create(datas)
    }

    @Get('coordinates/:x/:y')
    findByCoordinates(@Param('x') x: number, @Param('y') y: number): Promise<Pixel[]> {
        return this.pixelService.findByCoordinates(x, y)
    }

    @Get('user/:userId')
    findByUser(@Param('userId') userId: string): Promise<Pixel[]> {
        return this.pixelService.findByUser(userId)
    }

}
