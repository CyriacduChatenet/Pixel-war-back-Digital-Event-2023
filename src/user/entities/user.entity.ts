import { Role } from 'src/auth/enums/roles.enum';
import { Pixel } from 'src/pixel/entities/pixel.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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

  @Column()
  team: string; // many to one

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
