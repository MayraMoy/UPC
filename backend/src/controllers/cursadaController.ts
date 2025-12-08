// src/controllers/cursadaController.ts
import { Request, Response } from "express";
import { CursadaService } from "../services/cursadaService";

const cursadaService = new CursadaService();

const parseNumber = (v: any) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
};

// GET /api/cursadas
export const getCursadas = async (req: Request, res: Response) => {
  try {
    const cursadas = await cursadaService.getAll();
    return res.json(cursadas);
  } catch (err) {
    console.error("getCursadas error:", err);
    return res.status(500).json({ error: "Error al obtener cursadas" });
  }
};

// GET /api/cursadas/:id
export const getCursadaById = async (req: Request, res: Response) => {
  try {
    const id = parseNumber(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const cursada = await cursadaService.getById(id);
    if (!cursada) return res.status(404).json({ error: "Cursada no encontrada" });

    return res.json(cursada);
  } catch (err) {
    console.error("getCursadaById error:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// POST /api/cursadas
export const createCursada = async (req: Request, res: Response) => {
  try {
    const { estudianteId, materiaId, notaFinal } = req.body;

    const estId = parseNumber(estudianteId);
    const matId = parseNumber(materiaId);

    if (Number.isNaN(estId) || Number.isNaN(matId)) {
      return res.status(400).json({ error: "estudianteId y materiaId deben ser números" });
    }

    const payload: any = {
      estudianteId: estId,
      materiaId: matId,
    };

    // notaFinal es opcional
    if (notaFinal !== undefined && notaFinal !== null) {
      const nf = Number(notaFinal);
      if (Number.isNaN(nf)) return res.status(400).json({ error: "notaFinal debe ser un número" });
      payload.notaFinal = nf;
    }

    const newCursada = await cursadaService.create(payload);
    return res.status(201).json(newCursada);
  } catch (err: any) {
    console.error("createCursada error:", err);

    if (err.code === "P2002") {
      return res.status(400).json({ error: "Ya existe una cursada para ese estudiante y materia" });
    }

    return res.status(500).json({ error: "Error al crear cursada" });
  }
};

// PUT /api/cursadas/:id
export const updateCursada = async (req: Request, res: Response) => {
  try {
    const id = parseNumber(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const { notaFinal } = req.body;
    const data: any = {};

    if (notaFinal !== undefined) {
      const nf = Number(notaFinal);
      if (Number.isNaN(nf)) return res.status(400).json({ error: "notaFinal debe ser un número" });
      data.notaFinal = nf;
    }

    const updated = await cursadaService.update(id, data);
    return res.json(updated);
  } catch (err: any) {
    console.error("updateCursada error:", err);
    if (err.message === "Cursada no encontrada")
      return res.status(404).json({ error: err.message });

    return res.status(500).json({ error: "Error al actualizar cursada" });
  }
};

// DELETE /api/cursadas/:id
export const deleteCursada = async (req: Request, res: Response) => {
  try {
    const id = parseNumber(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const deleted = await cursadaService.delete(id);
    return res.json({ message: "Cursada eliminada", cursada: deleted });
  } catch (err: any) {
    console.error("deleteCursada error:", err);
    if (err.message === "Cursada no encontrada")
      return res.status(404).json({ error: err.message });

    return res.status(500).json({ error: "Error al eliminar cursada" });
  }
};
