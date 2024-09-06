import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.interface';
import { Observable } from 'rxjs';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService ) {}
    
    @Post()
    create(@Body() post: Todo): Observable<Todo>{
        return this.todoService.createTodo(post)
    }

    @Get()
    readAll(): Observable<Todo[]> {
        return this.todoService.redAllTodo();
    }
}
