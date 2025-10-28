import { Request, Response } from 'express';
import prisma from '../prisma';

// RF 3.2.1.1: Registro de Estudiante
export const createStudent = async (req: Request, res: Response) => {
  try {
    const {
      nombres,
      apellidos,
      dni,
      email,
      telefono,
      domicilio,
      fecha_nacimiento,
      id_pais,
      id_localidad,
      id_area_telefonica,
      id_genero,
      cohorte,
      secundario,
      cuil,
      examen_mayores25 = false,
      solicito_beca = false,
      trabajador = false,
      persona_a_cargo = false,
      observaciones,
    } = req.body;

    if (!nombres || !apellidos || !dni || !email || !fecha_nacimiento) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const existing = await prisma.ESTUDIANTES.findUnique({ where: { dni } });
    if (existing) {
      return res.status(400).json({ error: 'El DNI ya está registrado' });
    }

    const newStudent = await prisma.ESTUDIANTES.create({
      data: {
        nombres,
        apellidos,
        dni,
        email,
        telefono,
        domicilio,
        fecha_nacimiento: new Date(fecha_nacimiento),
        id_pais: Number(id_pais),
        id_localidad: Number(id_localidad),
        id_area_telefonica: Number(id_area_telefonica),
        id_genero: Number(id_genero),
        cohorte,
        secundario,
        cuil,
        examen_mayores25,
        solicito_beca,
        trabajador,
        persona_a_cargo,
        observaciones,
        estado: 'Activo',
        fecha_ingreso: new Date(),
      },
    });

    console.log(`[AUDIT] Estudiante creado: ${newStudent.id_estudiante}`);
    return res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// RF 3.2.1.2: Consulta de Estudiantes (listado)
export const getStudents = async (req: Request, res: Response) => {
  try {
    const { dni, nombres, apellidos } = req.query;
    const where: any = { estado: 'Activo' };

    if (dni) where.dni = String(dni);
    if (nombres)
      where.nombres = { contains: String(nombres), mode: 'insensitive' };
    if (apellidos)
      where.apellidos = { contains: String(apellidos), mode: 'insensitive' };

    const students = await prisma.ESTUDIANTES.findMany({
      where,
      include: {
        pais: true,
        localidad: true,
        areaTelefonica: true,
        genero: true,
      },
    });

    return res.json(students);
  } catch (error) {
    console.error('Error al consultar estudiantes:', error);
    return res.status(500).json({ error: 'Error al consultar estudiantes' });
  }
};

// RF 3.2.1.2.1: Consulta de Estudiante por ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.ESTUDIANTES.findUnique({
      where: { id_estudiante: Number(id) },
      include: {
        pais: true,
        localidad: true,
        areaTelefonica: true,
        genero: true,
      },
    });

    if (!student) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    return res.json(student);
  } catch (error) {
    console.error('Error al obtener estudiante:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// RF 3.2.1.3: Actualización de Estudiante
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // No permitir cambiar ID ni DNI
    delete data.id_estudiante;
    delete data.dni;

    const updatedStudent = await prisma.ESTUDIANTES.update({
      where: { id_estudiante: Number(id) },
      data: {
        ...data,
        fecha_nacimiento: data.fecha_nacimiento
          ? new Date(data.fecha_nacimiento)
          : undefined,
        id_pais: data.id_pais ? Number(data.id_pais) : undefined,
        id_localidad: data.id_localidad
          ? Number(data.id_localidad)
          : undefined,
        id_area_telefonica: data.id_area_telefonica
          ? Number(data.id_area_telefonica)
          : undefined,
        id_genero: data.id_genero ? Number(data.id_genero) : undefined,
      },
    });

    console.log(`[AUDIT] Estudiante actualizado: ${updatedStudent.id_estudiante}`);
    return res.json(updatedStudent);
  } catch (error) {
    console.error('Error al actualizar estudiante:', error);
    return res.status(500).json({ error: 'Error al actualizar estudiante' });
  }
};

// RF 3.2.1.4: Desactivación (eliminación lógica)
export const deactivateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { causa_inactividad } = req.body;

    const deactivatedStudent = await prisma.ESTUDIANTES.update({
      where: { id_estudiante: Number(id) },
      data: {
        estado: 'Inactivo',
        causa_inactividad: causa_inactividad || 'Desactivado por usuario',
      },
    });

    console.log(`[AUDIT] Estudiante desactivado: ${deactivatedStudent.id_estudiante}`);
    return res.json({
      message: 'Estudiante desactivado correctamente',
      student: deactivatedStudent,
    });
  } catch (error) {
    console.error('Error al desactivar estudiante:', error);
    return res.status(500).json({ error: 'Error al desactivar estudiante' });
  }
};
