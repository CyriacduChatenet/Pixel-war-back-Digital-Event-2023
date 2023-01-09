import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  logoUrl: string;

  @OneToMany(() => User, (user) => user.id)
  users: User[];
}
