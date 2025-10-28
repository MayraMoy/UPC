// backend/src/controllers/careerController.ts
import { Request, Response } from 'express';
import prisma from '../prisma';

/**
 * RF 3.2.2.1: Registro de Carrera
 */
export const createCareer = async (req: Request, res: Response) => {
  try {
    const { nombre, duracion, tituloOtorgado } = req.body;

    // Validación de campos obligatorios
    if (!nombre || !duracion || !tituloOtorgado) {
      return res.status(400).json({
        error: 'Faltan campos obligatorios: nombre, duracion, tituloOtorgado',
      });
    }

    // Verificar si ya existe una carrera con ese nombre
    const existing = await prisma.carrera.findUnique({ where: { nombre } });
    if (existing) {
      return res.status(400).json({ error: 'Ya existe una carrera con ese nombre' });
    }

    const newCareer = await prisma.carrera.create({
      data: {
        nombre,
        duracion: Number(duracion),
        tituloOtorgado,
      },
    });

    console.log(`[AUDIT] Carrera creada: ID=${newCareer.id_carrera}, Nombre="${newCareer.nombre}"`);
    return res.status(201).json(newCareer);
  } catch (error: any) {
    console.error('Error al crear carrera:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * RF 3.2.2.2: Consulta de Carreras (listado)
 */
export const getCareers = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.query;
    const where: any = {};

    if (nombre) {
      where.nombre = { contains: String(nombre), mode: 'insensitive' };
    }

    const careers = await prisma.carrera.findMany({
      where,
      orderBy: { nombre: 'asc' },
    });

    return res.json(careers);
  } catch (error: any) {
    console.error('Error al consultar carreras:', error);
    return res.status(500).json({ error: 'Error al consultar carreras' });
  }
};

/**
 * RF 3.2.2.2: Consulta de Carrera por ID
 */
export const getCareerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const career = await prisma.carrera.findUnique({
      where: { id_carrera: Number(id) },
    });

    if (!career) {
      return res.status(404).json({ error: 'Carrera no encontrada' });
    }

    return res.json(career);
  } catch (error: any) {
    console.error('Error al obtener carrera:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * RF 3.2.2.3: Actualización de Carrera
 */
export const updateCareer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, duracion, tituloOtorgado } = req.body;

    const career = await prisma.carrera.update({
      where: { id_carrera: Number(id) },
      data: {
        nombre,
        duracion: duracion ? Number(duracion) : undefined,
        tituloOtorgado,
      },
    });

    console.log(`[AUDIT] Carrera actualizada: ID=${career.id_carrera}`);
    return res.json(career);
  } catch (error: any) {
    console.error('Error al actualizar carrera:', error);
    return res.status(500).json({ error: 'Error al actualizar carrera' });
  }
};
