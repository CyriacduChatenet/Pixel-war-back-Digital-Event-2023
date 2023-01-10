import { Pixel } from 'src/pixel/entities/pixel.entity';
import { Screenshot } from 'src/screenshot/entities/screenshot.entity';

export class GameDto {
  pixel: Pixel[];
  screenshot: Screenshot;
}
