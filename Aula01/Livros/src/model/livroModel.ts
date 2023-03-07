import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("livro_bradleys")
export class livro_bradley {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar2", nullable: false })
  tituloLivro: string;

  @Column({ type: "number", nullable: false })
  numeroEdicao: number;

  @Column({ type: "number", nullable: false })
  anoLancamento: number;

  @Column({ type: "number", nullable: false })
  codigoEditor: number;

  @Column({ type: "number", nullable: false })
  codigoAutor: number;
}
