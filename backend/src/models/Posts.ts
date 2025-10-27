import { Prisma } from '@prisma/client';

export type Post = Prisma.PostGetPayload<{}>;
export type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true };
}>;

export interface CreatePostData {
  title: string;
  content?: string;
  published?: boolean;
  authorId: number;
}

export interface UpdatePostData {
  title?: string;
  content?: string;
  published?: boolean;
}