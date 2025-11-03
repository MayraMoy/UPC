export interface Users {
  id: number;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithPosts extends Users {
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
  password: string;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
}