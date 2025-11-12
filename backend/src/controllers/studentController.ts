import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 🧩 Crear estudiante
export const createStudent = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      dni,
      fechaNacimiento,
      email,
      telefono,
      domicilio,
      cohorte,
      secundario,
      cuil,
      examenMayores25,
      solicitoBeca,
      trabajador,
      personaACargo,
      observaciones,
      paisNombre,
      localidadNombre,
      generoNombre,
      areaTelefonicaCodigo,
    } = req.body;

    // Buscar relaciones por nombre o código
    const pais = await prisma.pais.findUnique({ where: { nombre: paisNombre } });
    const genero = await prisma.genero.findUnique({ where: { nombre: generoNombre } });
    const areaTelefonica = await prisma.areaTelefonica.findUnique({
      where: { codigo: areaTelefonicaCodigo },
    });

    if (!pais || !genero || !areaTelefonica) {
      return res
        .status(400)
        .json({ message: "País, género o área telefónica no válidos." });
    }

    // Buscar localidad por nombre y país
    const localidad = await prisma.localidad.findFirst({
      where: {
        nombre: localidadNombre,
        paisId: pais.id,
      },
    });

    if (!localidad) {
      return res
        .status(400)
        .json({
          message: "La localidad no existe o no pertenece al país indicado.",
        });
    }

    // Crear estudiante
    const nuevoEstudiante = await prisma.estudiante.create({
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
        examenMayores25,
        solicitoBeca,
        trabajador,
        personaACargo,
        observaciones,
        paisId: pais.id,
        localidadId: localidad.id,
        generoId: genero.id,
        areaTelefonicaId: areaTelefonica.id,
      },
    });

    return res.status(201).json(nuevoEstudiante);
  } catch (error) {
    console.error("❌ Error al crear estudiante:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

// 🧩 Actualizar estudiante
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      nombres,
      apellidos,
      dni,
      fechaNacimiento,
      email,
      telefono,
      domicilio,
      cohorte,
      secundario,
      cuil,
      examenMayores25,
      solicitoBeca,
      trabajador,
      personaACargo,
      observaciones,
      paisNombre,
      localidadNombre,
      generoNombre,
      areaTelefonicaCodigo,
    } = req.body;

    const estudiante = await prisma.estudiante.findUnique({
      where: { id: Number(id) },
    });

    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado." });
    }

    const pais = await prisma.pais.findUnique({ where: { nombre: paisNombre } });
    const genero = await prisma.genero.findUnique({ where: { nombre: generoNombre } });
    const areaTelefonica = await prisma.areaTelefonica.findUnique({
      where: { codigo: areaTelefonicaCodigo },
    });

    if (!pais || !genero || !areaTelefonica) {
      return res
        .status(400)
        .json({ message: "País, género o área telefónica no válidos." });
    }

    const localidad = await prisma.localidad.findFirst({
      where: {
        nombre: localidadNombre,
        paisId: pais.id,
      },
    });

    if (!localidad) {
      return res
        .status(400)
        .json({
          message: "La localidad no existe o no pertenece al país indicado.",
        });
    }

    const estudianteActualizado = await prisma.estudiante.update({
      where: { id: Number(id) },
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
        examenMayores25,
        solicitoBeca,
        trabajador,
        personaACargo,
        observaciones,
        paisId: pais.id,
        localidadId: localidad.id,
        generoId: genero.id,
        areaTelefonicaId: areaTelefonica.id,
      },
    });

    return res.json(estudianteActualizado);
  } catch (error) {
    console.error("❌ Error al actualizar estudiante:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

// 🧩 Obtener todos los estudiantes
export const getStudents = async (req: Request, res: Response) => {
  try {
    const estudiantes = await prisma.estudiante.findMany({
      include: {
        pais: true,
        localidad: true,
        genero: true,
        areaTelefonica: true,
      },
    });
    return res.json(estudiantes);
  } catch (error) {
    console.error("❌ Error al obtener estudiantes:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

// 🧩 Obtener un estudiante por ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const estudiante = await prisma.estudiante.findUnique({
      where: { id: Number(id) },
      include: {
        pais: true,
        localidad: true,
        genero: true,
        areaTelefonica: true,
      },
    });

    if (!estudiante) {
      return res.status(404).json({ message: "Estudiante no encontrado." });
    }

    return res.json(estudiante);
  } catch (error) {
    console.error("❌ Error al obtener estudiante:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

// 🧩 Desactivar estudiante
export const deactivateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const estudiante = await prisma.estudiante.update({
      where: { id: Number(id) },
      data: { estado: "Inactivo" },
    });

    return res.json({
      message: "✅ Estudiante desactivado correctamente.",
      estudiante,
    });
  } catch (error) {
    console.error("❌ Error al desactivar estudiante:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
