// src/services/localidadService.ts
import { PrismaClient } from "@prisma/client";
import prisma from "../prisma";

export class LocalidadService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async getAllLocalidades(paisId?: number) {
    const where = paisId ? { paisId } : {};
    return this.prisma.localidad.findMany({
      where,
      include: {
        pais: {
          select: {
            id: true,
            nombre: true,
          },
        },
        _count: {
          select: {
            estudiantes: true,
          },
        },
      },
      orderBy: [
        { pais: { nombre: "asc" } },
        { nombre: "asc" },
      ],
    });
  }

  async getLocalidadById(id: number) {
    return this.prisma.localidad.findUnique({
      where: { id },
      include: {
        pais: {
          select: {
            id: true,
            nombre: true,
          },
        },
        _count: {
          select: {
            estudiantes: true,
          },
        },
      },
    });
  }

  async getLocalidadesByPais(paisId: number) {
    return this.prisma.localidad.findMany({
      where: { paisId },
      include: {
        _count: {
          select: {
            estudiantes: true,
          },
        },
      },
      orderBy: { nombre: "asc" },
    });
  }

  async createLocalidad(data: {
    nombre: string;
    paisId: number;
  }) {
    // Verificar que el país existe
    const pais = await this.prisma.pais.findUnique({
      where: { id: data.paisId },
    });
    if (!pais) {
      throw new Error("País no encontrado");
    }

    // Verificar si ya existe una localidad con ese nombre en ese país
    const existing = await this.prisma.localidad.findUnique({
      where: {
        nombre_paisId: {
          nombre: data.nombre,
          paisId: data.paisId,
        },
      },
    });

    if (existing) {
      throw new Error(
        "Ya existe una localidad con ese nombre en ese país"
      );
    }

    return this.prisma.localidad.create({
      data: {
        nombre: data.nombre,
        paisId: data.paisId,
      },
      include: {
        pais: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });
  }

  async updateLocalidad(
    id: number,
    data: { nombre: string; paisId?: number }
  ) {
    const existing = await this.prisma.localidad.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new Error("Localidad no encontrada");
    }

    const paisId = data.paisId ?? existing.paisId;

    // Verificar que el país existe (si se está cambiando)
    if (data.paisId && data.paisId !== existing.paisId) {
      const pais = await this.prisma.pais.findUnique({
        where: { id: data.paisId },
      });
      if (!pais) {
        throw new Error("País no encontrado");
      }
    }

    // Verificar si ya existe otra localidad con ese nombre en ese país
    const nombreExists = await this.prisma.localidad.findFirst({
      where: {
        nombre: data.nombre,
        paisId: paisId,
        NOT: { id },
      },
    });

    if (nombreExists) {
      throw new Error(
        "Ya existe otra localidad con ese nombre en ese país"
      );
    }

    return this.prisma.localidad.update({
      where: { id },
      data: {
        nombre: data.nombre,
        ...(data.paisId && { paisId: data.paisId }),
      },
      include: {
        pais: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });
  }

  async deleteLocalidad(id: number) {
    const existing = await this.prisma.localidad.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            estudiantes: true,
          },
        },
      },
    });

    if (!existing) {
      throw new Error("Localidad no encontrada");
    }

    // Verificar si tiene estudiantes asociados
    if (existing._count.estudiantes > 0) {
      throw new Error(
        "No se puede eliminar la localidad porque tiene estudiantes asociados"
      );
    }

    return this.prisma.localidad.delete({
      where: { id },
    });
  }
}

