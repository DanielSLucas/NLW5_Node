import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

@Entity("messages")
class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;
  
  @Column()
  text: string;
  
  @JoinColumn({ name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export default Message;