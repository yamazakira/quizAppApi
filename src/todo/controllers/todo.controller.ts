import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService ) {}
    
    @Post()
    create(@Body() post: TodoPost): Observable<TodoPost>{
        return this.todoService.createTodo(post)
    }
}
