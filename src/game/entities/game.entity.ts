import { Pixel } from "src/pixel/entities/pixel.entity";
import { Screenshot } from "src/screenshot/entities/screenshot.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'game'})
export class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Pixel, (pixel) => pixel.id, { nullable: true })
    pixel: Pixel[]

    @OneToOne(() => Screenshot, (screenshot) => screenshot.game, {nullable: true})
    @JoinColumn()
    screenshot: Screenshot

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}