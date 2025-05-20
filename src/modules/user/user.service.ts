import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data
      });
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const user = await this.prisma.user.findMany();
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }

  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: BigInt(id) },
    });

    if (!user) {
      throw new NotFoundException(`Não foi encontrado user com id ${id}`)
    }

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: BigInt(id) }
    });

    if (!user) {
      throw new NotFoundException(`Não foi encontrado user com id ${id}`)
    }

    await this.prisma.user.update({
      data,
      where: { id: BigInt(id) }
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: BigInt(id),
      }
    });
  }
}
