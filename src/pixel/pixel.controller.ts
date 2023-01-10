import { Body, Controller, Get, Post } from '@nestjs/common';
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

}
