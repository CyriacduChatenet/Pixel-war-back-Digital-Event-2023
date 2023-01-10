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

    @Get(':x/:y')
    findByCoordonates(@Param('x') x: number, @Param('y') y: number): Promise<Pixel> {
        return this.pixelService.findByCoordonate(x, y)
    }

    // @Get(':userId')
    // findByUser(@Param('userId') userId: number): Promise<Pixel> {
    //     return this.pixelService.findByUser(userId)
    // }

}
