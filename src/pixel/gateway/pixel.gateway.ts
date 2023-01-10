import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
<<<<<<< HEAD
=======
  WebSocketServer,
>>>>>>> main
} from '@nestjs/websockets';
import * as dotenv from 'dotenv';

import { PixelService } from '../pixel.service';
import { PixelDto } from '../dto/pixel.dto';
import { Server, Socket } from 'socket.io';
<<<<<<< HEAD
=======
import { ForbiddenException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
>>>>>>> main

dotenv.config();

@WebSocketGateway({ cors: { origin: process.env.FRONT_URL } })
export class PixelGateway {
<<<<<<< HEAD
  public server: Server;
  constructor(private readonly pixelService: PixelService) {}

  @SubscribeMessage('createPixel')
  async handleCreatePixel(socket: Socket, payload: PixelDto) {
    console.log(payload);
  }

  @SubscribeMessage('updatePixel')
  async handleUpdatePixel(socket: Socket, payload: PixelDto) {
    console.log(payload);
=======
  @WebSocketServer()
  public server: Server;

  constructor(private readonly pixelService: PixelService, private readonly userService: UserService) {}

  @SubscribeMessage('createPixel')
  async handleCreatePixel(socket: Socket, payload: PixelDto) {
    try{
      const pixel = await this.pixelService.create(payload);
      const updateUserScore = await this.userService.updateScore(pixel.user.id);
      console.log("updateUserScore => ", updateUserScore);
           
      const pixels = await this.pixelService.findAll();
      const lastUsers = await this.pixelService.findLastTwentyUser();
      const payloadResponse = {
        pixels: pixels,
        lastUsers: lastUsers
      }
      // console.log("payloadResponse => ", payloadResponse);
      await this.server.emit('responsePixel', payloadResponse);
    }catch(error){
      console.log("error => ", error.message);
      this.server.emit('createdPixel', {error: new ForbiddenException(error.message)});
    }
>>>>>>> main
  }
}
