import { PrismaClient } from '../../generated/prisma';
import { CreatePostData, UpdatePostData } from '../models/Posts';

const prisma = new PrismaClient();

export class PostService {
  async getAllPosts() {
    return await prisma.posts.findMany({
      include: { author: true }
    });
  }

  async getPostById(id: number) {
    return await prisma.posts.findUnique({
      where: { id },
      include: { author: true }
    });
  }

  async getPostsByAuthor(authorId: number) {
    return await prisma.posts.findMany({
      where: { authorId },
      include: { author: true }
    });
  }

  async createPost(postData: CreatePostData) {
    return await prisma.posts.create({
      data: postData,
      include: { author: true }
    });
  }

  async updatePost(id: number, postData: UpdatePostData) {
    return await prisma.posts.update({
      where: { id },
      data: postData,
      include: { author: true }
    });
  }

  async deletePost(id: number) {
    return await prisma.posts.delete({
      where: { id }
    });
  }
}