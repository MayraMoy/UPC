// src/controllers/paisController.ts
import { Request, Response } from "express";
import { PaisService } from "../services/paisService";

const paisService = new PaisService();

export const getPaises = async (_req: Request, res: Response) => {
  try {
    const paises = await paisService.getAllPaises();
    return res.json(paises);
  } catch (error) {
    console.error("Error al obtener países:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getPaisById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const pais = await paisService.getPaisById(id);
    if (!pais) {
      return res.status(404).json({ error: "País no encontrado" });
    }

    return res.json(pais);
  } catch (error) {
    console.error("Error al buscar país:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createPais = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      return res
        .status(400)
        .json({ error: "El nombre del país es obligatorio" });
    }

    const pais = await paisService.createPais({ nombre: nombre.trim() });
    console.log(`[AUDIT] País creado: ${pais.nombre}`);
    return res.status(201).json(pais);
  } catch (error: any) {
    console.error("Error al crear país:", error);
    if (error.message === "Ya existe un país con ese nombre") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updatePais = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const { nombre } = req.body;

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      return res
        .status(400)
        .json({ error: "El nombre del país es obligatorio" });
    }

    const updated = await paisService.updatePais(id, {
      nombre: nombre.trim(),
    });
    console.log(`[AUDIT] País actualizado: ${updated.nombre}`);
    return res.json(updated);
  } catch (error: any) {
    console.error("Error al actualizar país:", error);
    if (error.message === "País no encontrado") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "Ya existe otro país con ese nombre") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deletePais = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deleted = await paisService.deletePais(id);
    console.log(`[AUDIT] País eliminado: ${deleted.nombre}`);
    return res.json({ message: "País eliminado correctamente", pais: deleted });
  } catch (error: any) {
    console.error("Error al eliminar país:", error);
    if (error.message === "País no encontrado") {
      return res.status(404).json({ error: error.message });
    }
    if (
      error.message ===
      "No se puede eliminar el país porque tiene estudiantes asociados"
    ) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

