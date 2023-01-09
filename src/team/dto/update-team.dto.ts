import { PartialType } from '@nestjs/swagger';

import { User } from '../../user/entities/user.entity';
import { CreateTeamDto } from './create-team.dto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  name: string;
  logoUrl: string;
  users: User[];
}
