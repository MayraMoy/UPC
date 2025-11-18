import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateMateriaDto {
  nombre: string;
  carreraId: number;
}

// Crear
export const createMateria = async (data: CreateMateriaDto) => {
  return prisma.materia.create({ data });
};

// Obtener todas (incluye la carrera relacionada)
export const getAllMaterias = async () => {
  return prisma.materia.findMany({
    include: { carrera: true },
  });
};

// Obtener una por ID
export const getMateriaById = async (id: number) => {
  return prisma.materia.findUnique({
    where: { id },
    include: { carrera: true },
  });
};

// Actualizar
export const updateMateria = async (id: number, data: Partial<CreateMateriaDto>) => {
  return prisma.materia.update({
    where: { id },
    data,
  });
};

// Eliminar
export const deleteMateria = async (id: number) => {
  return prisma.materia.delete({
    where: { id },
  });
};

// Buscar materia por nombre y carrera (para evitar duplicados)
export async function findMateriaByNombreYCarrera(nombre: string, carreraId: number) {
  return prisma.materia.findFirst({
    where: {
      nombre: nombre,
      carreraId: carreraId,
    },
  });
}
