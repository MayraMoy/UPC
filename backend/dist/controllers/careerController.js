"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCareer = exports.createCareer = exports.getCareerById = exports.getCareers = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getCareers = async (_req, res) => {
    try {
        const careers = await prisma_1.default.carrera.findMany({
            orderBy: { nombre: "asc" },
        });
        return res.json(careers);
    }
    catch (error) {
        console.error("Error al obtener carreras:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getCareers = getCareers;
const getCareerById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const career = await prisma_1.default.carrera.findUnique({ where: { id } });
        if (!career)
            return res.status(404).json({ error: "Carrera no encontrada" });
        return res.json(career);
    }
    catch (error) {
        console.error("Error al buscar carrera:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getCareerById = getCareerById;
const createCareer = async (req, res) => {
    try {
        const { nombre, duracion, tituloOtorgado } = req.body;
        if (!nombre || !duracion || !tituloOtorgado)
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        const existing = await prisma_1.default.carrera.findFirst({ where: { nombre } });
        if (existing)
            return res.status(400).json({ error: "Ya existe una carrera con ese nombre" });
        const career = await prisma_1.default.carrera.create({
            data: { nombre, duracion: Number(duracion), tituloOtorgado },
        });
        console.log(`[AUDIT] Carrera creada: ${career.nombre}`);
        return res.status(201).json(career);
    }
    catch (error) {
        console.error("Error al crear carrera:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.createCareer = createCareer;
const updateCareer = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nombre, duracion, tituloOtorgado } = req.body;
        const existing = await prisma_1.default.carrera.findUnique({ where: { id } });
        if (!existing)
            return res.status(404).json({ error: "Carrera no encontrada" });
        const updated = await prisma_1.default.carrera.update({
            where: { id },
            data: { nombre, duracion: Number(duracion), tituloOtorgado },
        });
        console.log(`[AUDIT] Carrera actualizada: ${updated.nombre}`);
        return res.json(updated);
    }
    catch (error) {
        console.error("Error al actualizar carrera:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.updateCareer = updateCareer;
//# sourceMappingURL=careerController.js.map