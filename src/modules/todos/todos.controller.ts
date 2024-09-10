import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Prisma } from '@prisma/client';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() data: Prisma.TodoCreateInput) {
    return this.todosService.createTodo(data);
  }

  @Get()
  async findAll() {
    return this.todosService.findAllTodos()
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: Prisma.TodoCreateInput) {
    return this.todosService.updateTodo(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.todosService.deleteTodo(id)
  }
}
