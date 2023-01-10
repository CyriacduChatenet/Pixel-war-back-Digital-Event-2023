import { User } from 'src/user/entities/user.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, DeleteDateColumn } from 'typeorm'

@Entity({name: 'pixel'})
export class Pixel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    x: number

    @Column()
    y: number

    @ManyToOne(() => User, (user) => user.pixels)
    user: User

    @Column()
    color: string

    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date

}
