import { Request, Response } from 'express';
import * as materiaService from '../services/materiaService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Crear una materia
export const createMateria = async (req: Request, res: Response) => {
  try {
    const { nombre, carreraId, carreraNombre } = req.body;

    if (!nombre || (!carreraId && !carreraNombre)) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Si se envió carreraNombre, buscar la carrera por nombre y obtener su id
    let carreraIdUsado = carreraId;
    if (!carreraIdUsado && carreraNombre) {
      const carrera = await prisma.carrera.findUnique({
        where: { nombre: carreraNombre },
      });

      if (!carrera) {
        return res.status(404).json({ message: 'Carrera no encontrada.' });
      }

      carreraIdUsado = carrera.id;
    }

    // Verificar si ya existe una materia con ese nombre en la misma carrera
    const existente = await materiaService.findMateriaByNombreYCarrera(nombre, Number(carreraIdUsado));
    if (existente) {
      return res.status(409).json({
        message: 'Ya existe una materia con este nombre en la carrera seleccionada.',
      });
    }

    // Crear la materia con el ID de carrera encontrado/usado
    const nuevaMateria = await prisma.materia.create({
      data: {
        nombre,
        carreraId: Number(carreraIdUsado),
      },
    });

    return res.status(201).json(nuevaMateria);
  } catch (error: any) {
    console.error('Error al crear materia:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// Obtener todas las materias
export const getMaterias = async (req: Request, res: Response) => {
  try {
    const materias = await materiaService.getAllMaterias();
    return res.json(materias);
  } catch (error) {
    console.error('Error al obtener materias:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// Obtener materia por ID
export const getMateriaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const materia = await materiaService.getMateriaById(Number(id));

    if (!materia) {
      return res.status(404).json({ message: 'Materia no encontrada.' });
    }

    return res.json(materia);
  } catch (error) {
    console.error('Error al obtener materia:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// Actualizar materia
export const updateMateria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, carreraId } = req.body;

    const materia = await materiaService.updateMateria(Number(id), { nombre, carreraId });
    return res.json(materia);
  } catch (error) {
    console.error('Error al actualizar materia:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// Eliminar materia
export const deleteMateria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await materiaService.deleteMateria(Number(id));
    return res.json({ message: 'Materia eliminada correctamente.' });
  } catch (error) {
    console.error('Error al eliminar materia:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};
