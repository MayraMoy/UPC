import { PrismaClient } from '@prisma/client';
import { CreatePostData, UpdatePostData } from '../models/Posts';

const prisma = new PrismaClient();

export class PostService {
  async getAllPosts() {
    return await prisma.Posts.findMany({
      include: { author: true }
    });
  }

  async getPostById(id: number) {
    return await prisma.Posts.findUnique({
      where: { id },
      include: { author: true }
    });
  }

  async getPostsByAuthor(authorId: number) {
    return await prisma.Posts.findMany({
      where: { authorId },
      include: { author: true }
    });
  }

  async createPost(postData: CreatePostData) {
    return await prisma.Posts.create({
      data: postData,
      include: { author: true }
    });
  }

  async updatePost(id: number, postData: UpdatePostData) {
    return await prisma.Posts.update({
      where: { id },
      data: postData,
      include: { author: true }
    });
  }

  async deletePost(id: number) {
    return await prisma.Posts.delete({
      where: { id }
    });
  }
}