"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class PaisService {
    constructor() {
        this.prisma = prisma_1.default;
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
    async getPaisById(id) {
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
    async getPaisByNombre(nombre) {
        return this.prisma.pais.findUnique({
            where: { nombre },
        });
    }
    async createPais(data) {
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
    async updatePais(id, data) {
        const existing = await this.prisma.pais.findUnique({ where: { id } });
        if (!existing) {
            throw new Error("País no encontrado");
        }
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
    async deletePais(id) {
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
        if (existing._count.estudiantes > 0) {
            throw new Error("No se puede eliminar el país porque tiene estudiantes asociados");
        }
        return this.prisma.pais.delete({
            where: { id },
        });
    }
}
exports.PaisService = PaisService;
//# sourceMappingURL=paisService.js.map