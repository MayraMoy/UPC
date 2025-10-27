import { Prisma } from '@prisma/client';

export type User = Prisma.UserGetPayload<{}>;
export type UserWithPosts = Prisma.UserGetPayload<{
  include: { posts: true };
}>;

export interface CreateUserData {
  email: string;
  name?: string;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
}