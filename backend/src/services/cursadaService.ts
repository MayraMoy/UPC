import prisma from "../prisma";

export class CursadaService {
  async getAll() {
    return prisma.cursada.findMany({
      include: {
        estudiante: true,
        materia: true,
      },
      orderBy: {
        id: "desc",
      },
    });
  }

  async getById(id: number) {
    return prisma.cursada.findUnique({
      where: { id },
      include: {
        estudiante: true,
        materia: true,
      },
    });
  }

  async create(data: any) {
    return prisma.cursada.create({ data });
  }

  async update(id: number, data: any) {
    const existing = await prisma.cursada.findUnique({ where: { id } });

    if (!existing) throw new Error("Cursada no encontrada");

    return prisma.cursada.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    const existing = await prisma.cursada.findUnique({ where: { id } });

    if (!existing) throw new Error("Cursada no encontrada");

    return prisma.cursada.delete({ where: { id } });
  }
}
