import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//使用するテーブルのカラム指定 今回はUser
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    firstname: string;

    @Column({ length: 500 })
    lastname: string;

    @Column()
    age: number;

    @Column()
    updated: Date;
}