import { Module } from '@nestjs/common';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoPostEntity } from './models/post.entity';

@Module({
  // this import allows us to use repository design pattern to allow easier query usage (idk if this is correct i'll correct later maybe)
  imports: [
    TypeOrmModule.forFeature([TodoPostEntity])
  ],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
