import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Developers {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public name: string;

}
