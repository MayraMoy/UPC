import { PrismaClient } from '../../generated/prisma';
import { CreateUserData, UpdateUserData } from '../models/Users';

const prisma = new PrismaClient();

export class UserService {
  async getAllUsers() {
    return await prisma.users.findMany({
      include: { posts: true }
    });
  }

  async getUserById(id: number) {
    return await prisma.users.findUnique({
      where: { id },
      include: { posts: true }
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.users.findUnique({
      where: { email }
    });
  }

  async createUser(usersData: CreateUserData) {
    return await prisma.users.create({
      data: usersData
    });
  }

  async updateUser(id: number, usersData: UpdateUserData) {
    return await prisma.users.update({
      where: { id },
      data: usersData
    });
  }

  async deleteUser(id: number) {
    return await prisma.users.delete({
      where: { id }
    });
  }
}