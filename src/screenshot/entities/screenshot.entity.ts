import { Game } from "src/game/entities/game.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'screenshot'})
export class Screenshot {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    url: string

    @OneToOne(() => Game, (game) => game.screenshot)
    @JoinColumn()
    game: Game

    @CreateDateColumn()
    createdAt: Date
}
