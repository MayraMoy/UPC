// src/controllers/localidadController.ts
import { Request, Response } from "express";
import { LocalidadService } from "../services/localidadService";

const localidadService = new LocalidadService();

export const getLocalidades = async (req: Request, res: Response) => {
  try {
    const paisId = req.query.paisId
      ? Number(req.query.paisId)
      : undefined;

    if (req.query.paisId && isNaN(Number(req.query.paisId))) {
      return res.status(400).json({ error: "paisId inválido" });
    }

    const localidades = await localidadService.getAllLocalidades(paisId);
    return res.json(localidades);
  } catch (error) {
    console.error("Error al obtener localidades:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getLocalidadById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const localidad = await localidadService.getLocalidadById(id);
    if (!localidad) {
      return res.status(404).json({ error: "Localidad no encontrada" });
    }

    return res.json(localidad);
  } catch (error) {
    console.error("Error al buscar localidad:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getLocalidadesByPais = async (req: Request, res: Response) => {
  try {
    const paisId = Number(req.params.paisId);
    if (isNaN(paisId)) {
      return res.status(400).json({ error: "paisId inválido" });
    }

    const localidades = await localidadService.getLocalidadesByPais(paisId);
    return res.json(localidades);
  } catch (error) {
    console.error("Error al obtener localidades por país:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createLocalidad = async (req: Request, res: Response) => {
  try {
    const { nombre, paisId } = req.body;

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      return res
        .status(400)
        .json({ error: "El nombre de la localidad es obligatorio" });
    }

    if (!paisId || isNaN(Number(paisId))) {
      return res.status(400).json({ error: "El paisId es obligatorio y debe ser un número" });
    }

    const localidad = await localidadService.createLocalidad({
      nombre: nombre.trim(),
      paisId: Number(paisId),
    });
    console.log(`[AUDIT] Localidad creada: ${localidad.nombre} (País ID: ${localidad.paisId})`);
    return res.status(201).json(localidad);
  } catch (error: any) {
    console.error("Error al crear localidad:", error);
    if (error.message === "País no encontrado") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "Ya existe una localidad con ese nombre en ese país") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateLocalidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const { nombre, paisId } = req.body;

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      return res
        .status(400)
        .json({ error: "El nombre de la localidad es obligatorio" });
    }

    if (paisId && isNaN(Number(paisId))) {
      return res.status(400).json({ error: "paisId debe ser un número" });
    }

    const updated = await localidadService.updateLocalidad(id, {
      nombre: nombre.trim(),
      ...(paisId && { paisId: Number(paisId) }),
    });
    console.log(`[AUDIT] Localidad actualizada: ${updated.nombre} (País ID: ${updated.paisId})`);
    return res.json(updated);
  } catch (error: any) {
    console.error("Error al actualizar localidad:", error);
    if (error.message === "Localidad no encontrada") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "País no encontrado") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "Ya existe otra localidad con ese nombre en ese país") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteLocalidad = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deleted = await localidadService.deleteLocalidad(id);
    console.log(`[AUDIT] Localidad eliminada: ${deleted.nombre}`);
    return res.json({
      message: "Localidad eliminada correctamente",
      localidad: deleted,
    });
  } catch (error: any) {
    console.error("Error al eliminar localidad:", error);
    if (error.message === "Localidad no encontrada") {
      return res.status(404).json({ error: error.message });
    }
    if (
      error.message ===
      "No se puede eliminar la localidad porque tiene estudiantes asociados"
    ) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

