import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import * as dotenv from 'dotenv';

import { PixelService } from '../pixel.service';
import { PixelDto } from '../dto/pixel.dto';
import { Server, Socket } from 'socket.io';

dotenv.config();

@WebSocketGateway({ cors: { origin: process.env.FRONT_URL } })
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
