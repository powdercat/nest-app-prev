import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("rowid")
  id: number;

  @Index()
  @Column()
  email: string;

  @Column()
  password: string;
}
