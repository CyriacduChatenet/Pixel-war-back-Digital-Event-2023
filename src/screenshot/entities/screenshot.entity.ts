import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'screenshot'})
export class Screenshot {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    url: string

    @Column() // Enlever la valeur par défaut
    game: string // Ajouter une relation OneToOne

    @CreateDateColumn()
    createdAt: Date
}
