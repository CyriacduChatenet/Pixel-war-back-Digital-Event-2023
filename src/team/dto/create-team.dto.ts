import { User } from 'src/user/entities/user.entity';

export class CreateTeamDto {
  name: string;
  logoUrl: string;
  users?: User[];
}
