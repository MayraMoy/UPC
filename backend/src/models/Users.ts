export interface User {
  id: number;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithPosts extends User {
  posts: Array<{
    id: number;
    title: string;
    content?: string;
    published: boolean;
    authorId: number;
  }>;
}

export interface CreateUserData {
  email: string;
  name?: string;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
}