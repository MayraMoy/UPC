import { PrismaClient } from '@prisma/client';
import { CreatePostData, UpdatePostData } from '../models/Post';

const prisma = new PrismaClient();

export class PostService {
  async getAllPosts() {
    return await prisma.post.findMany({
      include: { author: true }
    });
  }

  async getPostById(id: number) {
    return await prisma.post.findUnique({
      where: { id },
      include: { author: true }
    });
  }

  async getPostsByAuthor(authorId: number) {
    return await prisma.post.findMany({
      where: { authorId },
      include: { author: true }
    });
  }

  async createPost(postData: CreatePostData) {
    return await prisma.post.create({
      data: postData,
      include: { author: true }
    });
  }

  async updatePost(id: number, postData: UpdatePostData) {
    return await prisma.post.update({
      where: { id },
      data: postData,
      include: { author: true }
    });
  }

  async deletePost(id: number) {
    return await prisma.post.delete({
      where: { id }
    });
  }
}