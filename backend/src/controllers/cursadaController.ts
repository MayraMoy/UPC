// src/controllers/cursadaController.ts
import { Request, Response } from "express";
import { CursadaService } from "../services/cursadaService";

const cursadaService = new CursadaService();

const parseNumber = (v: any) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
};

const isValidDate = (v: any) => {
  if (!v) return false;
  const t = Date.parse(v);
  return !Number.isNaN(t);
};

// GET /api/cursadas
export const getCursadas = async (req: Request, res: Response) => {
  try {
    const cursadas = await cursadaService.getAll();
    return res.json(cursadas);
  } catch (err: any) {
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
  } catch (err: any) {
    console.error("getCursadaById error:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// POST /api/cursadas
export const createCursada = async (req: Request, res: Response) => {
  try {
    const { estudianteId, materiaId, fechaInicio, fechaFin, notaFinal } = req.body;

    // Validaciones básicas
    const estId = parseNumber(estudianteId);
    const matId = parseNumber(materiaId);

    if (Number.isNaN(estId) || Number.isNaN(matId)) {
      return res.status(400).json({ error: "estudianteId y materiaId son obligatorios y deben ser números" });
    }

    if (!isValidDate(fechaInicio)) {
      return res.status(400).json({ error: "fechaInicio inválida" });
    }
    const payload: any = {
      estudianteId: estId,
      materiaId: matId,
      fechaInicio: new Date(fechaInicio),
    };

    if (fechaFin) {
      if (!isValidDate(fechaFin)) {
        return res.status(400).json({ error: "fechaFin inválida" });
      }
      payload.fechaFin = new Date(fechaFin);
    }

    if (notaFinal !== undefined && notaFinal !== null) {
      const nf = Number(notaFinal);
      if (Number.isNaN(nf)) return res.status(400).json({ error: "notaFinal debe ser un número" });
      payload.notaFinal = nf;
    }

    const newCursada = await cursadaService.create(payload);
    console.log(`[AUDIT] Cursada creada id=${newCursada.id}`);
    return res.status(201).json(newCursada);
  } catch (err: any) {
    console.error("createCursada error:", err);

    // errores de negocio (prisma unique, fk, etc.)
    if (err.code === "P2002") {
      return res.status(400).json({ error: "Registro duplicado" });
    }
    if (err.message && typeof err.message === "string") {
      return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: "Error al crear cursada" });
  }
};

// PUT /api/cursadas/:id
export const updateCursada = async (req: Request, res: Response) => {
  try {
    const id = parseNumber(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const { fechaInicio, fechaFin, notaFinal } = req.body;
    const data: any = {};

    if (fechaInicio !== undefined) {
      if (!isValidDate(fechaInicio)) return res.status(400).json({ error: "fechaInicio inválida" });
      data.fechaInicio = new Date(fechaInicio);
    }
    if (fechaFin !== undefined) {
      if (fechaFin !== null && !isValidDate(fechaFin)) return res.status(400).json({ error: "fechaFin inválida" });
      data.fechaFin = fechaFin ? new Date(fechaFin) : null;
    }
    if (notaFinal !== undefined) {
      const nf = Number(notaFinal);
      if (Number.isNaN(nf)) return res.status(400).json({ error: "notaFinal debe ser un número" });
      data.notaFinal = nf;
    }

    const updated = await cursadaService.update(id, data);
    console.log(`[AUDIT] Cursada actualizada id=${updated.id}`);
    return res.json(updated);
  } catch (err: any) {
    console.error("updateCursada error:", err);
    if (err.message === "Cursada no encontrada") return res.status(404).json({ error: err.message });
    return res.status(500).json({ error: "Error al actualizar cursada" });
  }
};

// DELETE /api/cursadas/:id
export const deleteCursada = async (req: Request, res: Response) => {
  try {
    const id = parseNumber(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const deleted = await cursadaService.delete(id);
    console.log(`[AUDIT] Cursada eliminada id=${deleted.id}`);
    return res.json({ message: "Cursada eliminada", cursada: deleted });
  } catch (err: any) {
    console.error("deleteCursada error:", err);
    if (err.message === "Cursada no encontrada") return res.status(404).json({ error: err.message });
    return res.status(500).json({ error: "Error al eliminar cursada" });
  }
};
