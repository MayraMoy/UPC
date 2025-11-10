import { Posts } from "@prisma/client";
export declare class PostService {
    private prisma;
    constructor();
    getAllPosts(): Promise<Posts[]>;
    getPostById(id: number): Promise<Posts | null>;
    createPost(data: {
        title: string;
        content?: string;
        published?: boolean;
        authorId: number;
    }): Promise<Posts>;
    updatePost(id: number, data: Partial<Pick<Posts, "title" | "content" | "published">>): Promise<Posts>;
    deletePost(id: number): Promise<Posts>;
}
//# sourceMappingURL=postService.d.ts.map