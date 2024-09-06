import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo_post')
export class TodoEntity {
    // Using TYPEORM to define the format of the database table from code, using these @ parameters

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: ''})
    body: string;

    // 'timestamp' is a portgresql data type and CURRENT_TIMESTAMP is a postgres function.
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}