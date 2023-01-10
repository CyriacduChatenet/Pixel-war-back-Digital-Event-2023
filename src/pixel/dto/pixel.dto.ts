import { User } from 'src/user/entities/user.entity';

export class PixelDto {
  id: string;
  x: number;
  y: number;
  user: User;
  color: string;
  createdAt: Date;
  deletedAt: Date;
}
