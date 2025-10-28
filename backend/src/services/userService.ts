import { PrismaClient } from '@prisma/client';
import { CreateUserData, UpdateUserData } from '../models/Users';

const prisma = new PrismaClient();

export class UserService {
  async getAllUsers() {
    return await prisma.user.findMany({
      include: { posts: true }
    });
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: { posts: true }
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email }
    });
  }

  async createUser(userData: CreateUserData) {
    return await prisma.user.create({
      data: userData
    });
  }

  async updateUser(id: number, userData: UpdateUserData) {
    return await prisma.user.update({
      where: { id },
      data: userData
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id }
    });
  }
}