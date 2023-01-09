import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PixelService } from '../pixel.service';
import { PixelDto } from '../dto/pixel.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: "http://127.0.0.1:5500" } })
export class PixelGateway {
    public server: Server;
    constructor(private readonly pixelService: PixelService) {}

    @SubscribeMessage('createPixel')
    async handleCreatePixel(socket: Socket, payload: PixelDto) {
        console.log(payload);
    }

    @SubscribeMessage('updatePixel')
    async handleUpdatePixel(socket: Socket, payload: PixelDto) {
        console.log(payload);
    }
}
