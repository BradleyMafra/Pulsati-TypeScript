import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Aeroporto_bradleys')
export class Aeroporto_Bradley {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "number", nullable:false})
    codigo: number

    @Column({type: "varchar2", nullable:false})
    nome: string;

    @Column ({type: "varchar2", nullable:false})
    endereco:string
}