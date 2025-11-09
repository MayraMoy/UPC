// src/routes/postRoutes.ts
import { Router, Request, Response } from "express";
import { PostService } from "../services/postService";
import { authenticate } from "../middleware/authMiddleware"; // tu middleware JWT
import { Prisma } from "@prisma/client";

const router = Router();
const postService = new PostService();

// GET /api/posts
router.get("/", authenticate, async (_req: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts();
    return res.json(posts);
  } catch (error) {
    console.error("Error al obtener posts:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

// GET /api/posts/:id
router.get("/:id", authenticate, async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const post = await postService.getPostById(id);
    if (!post) return res.status(404).json({ error: "Post no encontrado" });

    return res.json(post);
  } catch (error) {
    console.error("Error al obtener post:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

// POST /api/posts
router.post("/", authenticate, async (req: Request, res: Response) => {
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
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return res.status(400).json({ error: error.message });

    console.error("Error al crear post:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
