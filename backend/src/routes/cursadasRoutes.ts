import { Router } from "express";
import { CursadaService } from "../services/cursadaService";

const router = Router();
const service = new CursadaService();

// GET all
router.get("/", async (req, res) => {
  try {
    const cursadas = await service.getAll();
    res.json(cursadas);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const cursada = await service.getById(Number(req.params.id));
    res.json(cursada);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const newCursada = await service.create(req.body);
    res.json(newCursada);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await service.update(Number(req.params.id), req.body);
    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await service.delete(Number(req.params.id));
    res.json(deleted);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
