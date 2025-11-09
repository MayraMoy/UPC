import { Request, Response } from "express";
import prisma from "../prisma";

export const getCareers = async (_req: Request, res: Response) => {
  try {
    const careers = await prisma.carrera.findMany({
      orderBy: { nombre: "asc" },
    });
    return res.json(careers);
  } catch (error) {
    console.error("Error al obtener carreras:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getCareerById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const career = await prisma.carrera.findUnique({ where: { id } });

    if (!career)
      return res.status(404).json({ error: "Carrera no encontrada" });

    return res.json(career);
  } catch (error) {
    console.error("Error al buscar carrera:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createCareer = async (req: Request, res: Response) => {
  try {
    const { nombre, duracion, tituloOtorgado } = req.body;
    if (!nombre || !duracion || !tituloOtorgado)
      return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existing = await prisma.carrera.findFirst({ where: { nombre } });
    if (existing)
      return res.status(400).json({ error: "Ya existe una carrera con ese nombre" });

    const career = await prisma.carrera.create({
      data: { nombre, duracion: Number(duracion), tituloOtorgado },
    });

    console.log(`[AUDIT] Carrera creada: ${career.nombre}`);
    return res.status(201).json(career);
  } catch (error) {
    console.error("Error al crear carrera:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateCareer = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nombre, duracion, tituloOtorgado } = req.body;

    const existing = await prisma.carrera.findUnique({ where: { id } });
    if (!existing)
      return res.status(404).json({ error: "Carrera no encontrada" });

    const updated = await prisma.carrera.update({
      where: { id },
      data: { nombre, duracion: Number(duracion), tituloOtorgado },
    });

    console.log(`[AUDIT] Carrera actualizada: ${updated.nombre}`);
    return res.json(updated);
  } catch (error) {
    console.error("Error al actualizar carrera:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};