import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todos.create({
      data: createTodoDto,
    });
  }

  async findAll() {
    return await this.prisma.todos.findMany();
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.prisma.todos.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        description: updateTodoDto.description,
      },
    });
  }

  async markTodoAsDone(id: number) {
    return await this.prisma.todos.update({
      where: {
        id,
      },
      data: {
        completed: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.todos.delete({ where: { id } });
  }
}
