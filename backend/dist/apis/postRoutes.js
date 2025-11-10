"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postService_1 = require("../services/postService");
const authMiddleware_1 = require("../middleware/authMiddleware");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const postService = new postService_1.PostService();
router.get("/", authMiddleware_1.authenticate, async (_req, res) => {
    try {
        const posts = await postService.getAllPosts();
        return res.json(posts);
    }
    catch (error) {
        console.error("Error al obtener posts:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
});
router.get("/:id", authMiddleware_1.authenticate, async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id))
            return res.status(400).json({ error: "ID inválido" });
        const post = await postService.getPostById(id);
        if (!post)
            return res.status(404).json({ error: "Post no encontrado" });
        return res.json(post);
    }
    catch (error) {
        console.error("Error al obtener post:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
});
router.post("/", authMiddleware_1.authenticate, async (req, res) => {
    try {
        const { title, content, published, authorId } = req.body;
        if (!title || !authorId)
            return res.status(400).json({ error: "El título y authorId son obligatorios" });
        const newPost = await postService.createPost({
            title,
            content,
            published: !!published,
            authorId: Number(authorId),
        });
        console.log(`[AUDIT] Nuevo post creado: ${title}`);
        return res.status(201).json(newPost);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError)
            return res.status(400).json({ error: error.message });
        console.error("Error al crear post:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.default = router;
//# sourceMappingURL=postRoutes.js.map