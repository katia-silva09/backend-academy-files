import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'files', name: 'file' })
export class File {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  user_id: number;

  @Column({ type: 'timestamp', default: () => 'now()' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'now()' })
  updated_at: Date;

  @Column()
  file_name: string;
}