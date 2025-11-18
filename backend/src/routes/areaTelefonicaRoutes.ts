import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const areas = await prisma.areaTelefonica.findMany();
    res.json(areas);
  } catch (error) {
    console.error("Error al obtener áreas telefónicas:", error);
    res.status(500).json({ message: "Error al obtener áreas telefónicas" });
  }
});

export default router;
