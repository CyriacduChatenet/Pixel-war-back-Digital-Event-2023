import { Role } from 'src/auth/enums/roles.enum';
import { Pixel } from 'src/pixel/entities/pixel.entity';
import { Team } from 'src/team/entities/team.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  roles: Role[];

  @ManyToOne(() => Team, (team) => team.users)
  team: Team; // many to one

  @Column({ default: 0 })
  totalScore: number;

  @OneToMany(() => Pixel, (pixel) => pixel.user)
  pixel: Pixel[]; // one to many

  @Column({ default: false })
  isBan: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
