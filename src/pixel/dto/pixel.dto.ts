import { User } from 'src/user/entities/user.entity';

export class PixelDto {
  x: number;
  y: number;
  user: User;
  color: string;
}
