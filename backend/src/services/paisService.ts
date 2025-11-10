// src/services/paisService.ts
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma";

export class PaisService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async getAllPaises() {
    return this.prisma.pais.findMany({
      include: {
        localidades: {
          orderBy: { nombre: "asc" },
        },
        _count: {
          select: {
            estudiantes: true,
            localidades: true,
          },
        },
      },
      orderBy: { nombre: "asc" },
    });
  }

  async getPaisById(id: number) {
    return this.prisma.pais.findUnique({
      where: { id },
      include: {
        localidades: {
          orderBy: { nombre: "asc" },
        },
        _count: {
          select: {
            estudiantes: true,
            localidades: true,
          },
        },
      },
    });
  }

  async getPaisByNombre(nombre: string) {
    return this.prisma.pais.findUnique({
      where: { nombre },
    });
  }

  async createPais(data: { nombre: string }) {
    // Verificar si ya existe un país con ese nombre
    const existing = await this.getPaisByNombre(data.nombre);
    if (existing) {
      throw new Error("Ya existe un país con ese nombre");
    }

    return this.prisma.pais.create({
      data: {
        nombre: data.nombre,
      },
    });
  }

  async updatePais(id: number, data: { nombre: string }) {
    const existing = await this.prisma.pais.findUnique({ where: { id } });
    if (!existing) {
      throw new Error("País no encontrado");
    }

    // Verificar si el nuevo nombre ya existe en otro país
    const nombreExists = await this.prisma.pais.findFirst({
      where: {
        nombre: data.nombre,
        NOT: { id },
      },
    });

    if (nombreExists) {
      throw new Error("Ya existe otro país con ese nombre");
    }

    return this.prisma.pais.update({
      where: { id },
      data: {
        nombre: data.nombre,
      },
    });
  }

  async deletePais(id: number) {
    const existing = await this.prisma.pais.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            estudiantes: true,
            localidades: true,
          },
        },
      },
    });

    if (!existing) {
      throw new Error("País no encontrado");
    }

    // Verificar si tiene estudiantes asociados
    if (existing._count.estudiantes > 0) {
      throw new Error(
        "No se puede eliminar el país porque tiene estudiantes asociados"
      );
    }

    return this.prisma.pais.delete({
      where: { id },
    });
  }
}

