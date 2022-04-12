import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tools {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public title: string;

    @Column()
    public link: string;

    @Column()
    public description: string;

    @Column("text", {array: true})
    tags: string[];
    
}
