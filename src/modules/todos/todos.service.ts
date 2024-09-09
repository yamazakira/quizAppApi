import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) { }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    const todo = await this.prisma.todo.create({ data })

    return todo;
  }

  async findAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

}
