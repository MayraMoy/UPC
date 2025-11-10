"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const client_1 = require("@prisma/client");
class PostService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAllPosts() {
        return this.prisma.posts.findMany({
            include: {
                author: {
                    select: { id: true, email: true, name: true },
                },
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async getPostById(id) {
        return this.prisma.posts.findUnique({
            where: { id },
            include: {
                author: {
                    select: { id: true, email: true, name: true },
                },
            },
        });
    }
    async createPost(data) {
        const author = await this.prisma.user.findUnique({
            where: { id: data.authorId },
        });
        if (!author)
            throw new Error("Autor no encontrado");
        return this.prisma.posts.create({
            data: {
                title: data.title,
                content: data.content || "",
                published: data.published ?? false,
                authorId: data.authorId,
            },
        });
    }
    async updatePost(id, data) {
        const existing = await this.prisma.posts.findUnique({ where: { id } });
        if (!existing)
            throw new Error("Post no encontrado");
        return this.prisma.posts.update({
            where: { id },
            data,
        });
    }
    async deletePost(id) {
        const existing = await this.prisma.posts.findUnique({ where: { id } });
        if (!existing)
            throw new Error("Post no encontrado");
        return this.prisma.posts.delete({ where: { id } });
    }
}
exports.PostService = PostService;
//# sourceMappingURL=postService.js.map