export interface Posts {
    id: number;
    title: string;
    content?: string;
    published: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface PostWithAuthor extends Posts {
    author: {
        id: number;
        name: string;
        email: string;
    };
}
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
//# sourceMappingURL=Posts.d.ts.map