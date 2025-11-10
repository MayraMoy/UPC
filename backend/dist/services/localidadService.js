"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalidadService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class LocalidadService {
    constructor() {
        this.prisma = prisma_1.default;
    }
    async getAllLocalidades(paisId) {
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
    async getLocalidadById(id) {
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
    async getLocalidadesByPais(paisId) {
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
    async createLocalidad(data) {
        const pais = await this.prisma.pais.findUnique({
            where: { id: data.paisId },
        });
        if (!pais) {
            throw new Error("País no encontrado");
        }
        const existing = await this.prisma.localidad.findUnique({
            where: {
                nombre_paisId: {
                    nombre: data.nombre,
                    paisId: data.paisId,
                },
            },
        });
        if (existing) {
            throw new Error("Ya existe una localidad con ese nombre en ese país");
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
    async updateLocalidad(id, data) {
        const existing = await this.prisma.localidad.findUnique({
            where: { id },
        });
        if (!existing) {
            throw new Error("Localidad no encontrada");
        }
        const paisId = data.paisId ?? existing.paisId;
        if (data.paisId && data.paisId !== existing.paisId) {
            const pais = await this.prisma.pais.findUnique({
                where: { id: data.paisId },
            });
            if (!pais) {
                throw new Error("País no encontrado");
            }
        }
        const nombreExists = await this.prisma.localidad.findFirst({
            where: {
                nombre: data.nombre,
                paisId: paisId,
                NOT: { id },
            },
        });
        if (nombreExists) {
            throw new Error("Ya existe otra localidad con ese nombre en ese país");
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
    async deleteLocalidad(id) {
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
        if (existing._count.estudiantes > 0) {
            throw new Error("No se puede eliminar la localidad porque tiene estudiantes asociados");
        }
        return this.prisma.localidad.delete({
            where: { id },
        });
    }
}
exports.LocalidadService = LocalidadService;
//# sourceMappingURL=localidadService.js.map