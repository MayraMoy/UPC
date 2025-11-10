"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getStudents = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getStudents = async (_req, res) => {
    try {
        const students = await prisma_1.default.estudiante.findMany({
            include: {
                pais: true,
                localidad: true,
                genero: true,
                areaTelefonica: true,
            },
            orderBy: { apellidos: "asc" },
            take: 100,
        });
        return res.json(students);
    }
    catch (error) {
        console.error("Error al obtener estudiantes:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getStudents = getStudents;
const getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma_1.default.estudiante.findUnique({
            where: { id },
            include: {
                pais: true,
                localidad: true,
                genero: true,
                areaTelefonica: true,
            },
        });
        if (!student)
            return res.status(404).json({ error: "Estudiante no encontrado" });
        return res.json(student);
    }
    catch (error) {
        console.error("Error al buscar estudiante:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getStudentById = getStudentById;
const createStudent = async (req, res) => {
    try {
        const { nombres, apellidos, dni, fechaNacimiento, email, telefono, domicilio, cohorte, secundario, cuil, examenMayores25, solicitoBeca, trabajador, personaACargo, observaciones, paisId, localidadId, areaTelefonicaId, generoId, } = req.body;
        const existing = await prisma_1.default.estudiante.findUnique({ where: { dni } });
        if (existing)
            return res.status(400).json({ error: "Ya existe un estudiante con ese DNI" });
        const student = await prisma_1.default.estudiante.create({
            data: {
                nombres,
                apellidos,
                dni,
                fechaNacimiento: new Date(fechaNacimiento),
                email,
                telefono,
                domicilio,
                cohorte,
                secundario,
                cuil,
                examenMayores25: Boolean(examenMayores25),
                solicitoBeca: Boolean(solicitoBeca),
                trabajador: Boolean(trabajador),
                personaACargo: Boolean(personaACargo),
                observaciones,
                paisId: Number(paisId),
                localidadId: Number(localidadId),
                areaTelefonicaId: Number(areaTelefonicaId),
                generoId: Number(generoId),
            },
        });
        console.log(`[AUDIT] Estudiante creado: ${student.apellidos}, ${student.nombres}`);
        return res.status(201).json(student);
    }
    catch (error) {
        console.error("Error al crear estudiante:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.createStudent = createStudent;
const updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nombres, apellidos, email, telefono, domicilio, observaciones } = req.body;
        const existing = await prisma_1.default.estudiante.findUnique({ where: { id } });
        if (!existing)
            return res.status(404).json({ error: "Estudiante no encontrado" });
        const updated = await prisma_1.default.estudiante.update({
            where: { id },
            data: { nombres, apellidos, email, telefono, domicilio, observaciones },
        });
        console.log(`[AUDIT] Estudiante actualizado: ${updated.apellidos}, ${updated.nombres}`);
        return res.json(updated);
    }
    catch (error) {
        console.error("Error al actualizar estudiante:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.updateStudent = updateStudent;
const deactivateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await prisma_1.default.estudiante.update({
            where: { id: Number(id) },
            data: { estado: 'Inactivo' },
        });
        res.json(estudiante);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
};
exports.deactivateStudent = deactivateStudent;
//# sourceMappingURL=studentController.js.map