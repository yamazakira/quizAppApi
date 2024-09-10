import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  // good practice: have each method in it's own file. i, however, will not be doing that :^)
  constructor(private prisma: PrismaService) { }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    const todo = await this.prisma.todo.create({ data })

    return todo;
  }

  async findAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async updateTodo(id: string, data: Prisma.TodoCreateInput) {
    const todoExists = await this.prisma.todo.findUnique({
      where: {
        id,
      }
    })

    if (!todoExists) {
      throw new Error("ToDo does not exist")
    }

    return await this.prisma.todo.update({
      data,
      where: {
        id,
      }
    })
  }

  async deleteTodo(id: string) {
    const todoExists = await this.prisma.todo.findUnique({
      where: {
        id,
      }
    })

    if (!todoExists) {
      throw new Error("ToDo does not exist")
    }

    return await this.prisma.todo.delete({
      where: {
        id,
      }
    })
  }
}
