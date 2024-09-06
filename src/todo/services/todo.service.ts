import { Injectable } from '@nestjs/common';
import { TodoEntity } from '../models/todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../models/todo.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository: Repository<TodoEntity>
    ) {}

    createTodo(Todo: Todo): Observable<Todo> {
        return from(this.todoRepository.save(Todo));
    }

    redAllTodo(): Observable<Todo[]> {
        return from(this.todoRepository.find());
    }
}
