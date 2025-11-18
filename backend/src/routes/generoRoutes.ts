import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const generos = await prisma.genero.findMany();
    res.json(generos);
  } catch (error) {
    console.error("Error al obtener géneros:", error);
    res.status(500).json({ message: "Error al obtener géneros" });
  }
});

export default router;
