import { Injectable } from '@nestjs/common';
import { TodoPostEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoPostEntity)
        private readonly todoPostRepository: Repository<TodoPostEntity>
    ) {}

    createTodo(todoPost: TodoPost): Observable<TodoPost> {
        return from(this.todoPostRepository.save(todoPost));
    }
}
