// src/services/postService.ts
import { PrismaClient, Posts } from "@prisma/client";

export class PostService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllPosts(): Promise<Posts[]> {
    return this.prisma.posts.findMany({
      include: {
        author: {
          select: { id: true, email: true, name: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getPostById(id: number): Promise<Posts | null> {
    return this.prisma.posts.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, email: true, name: true },
        },
      },
    });
  }

  async createPost(data: {
    title: string;
    content?: string;
    published?: boolean;
    authorId: number;
  }): Promise<Posts> {
    const author = await this.prisma.user.findUnique({
      where: { id: data.authorId },
    });
    if (!author) throw new Error("Autor no encontrado");

    return this.prisma.posts.create({
      data: {
        title: data.title,
        content: data.content || "",
        published: data.published ?? false,
        authorId: data.authorId,
      },
    });
  }

  async updatePost(
    id: number,
    data: Partial<Pick<Posts, "title" | "content" | "published">>
  ): Promise<Posts> {
    const existing = await this.prisma.posts.findUnique({ where: { id } });
    if (!existing) throw new Error("Post no encontrado");

    return this.prisma.posts.update({
      where: { id },
      data,
    });
  }

  async deletePost(id: number): Promise<Posts> {
    const existing = await this.prisma.posts.findUnique({ where: { id } });
    if (!existing) throw new Error("Post no encontrado");

    return this.prisma.posts.delete({ where: { id } });
  }
}

