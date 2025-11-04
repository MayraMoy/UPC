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
      examenMayores25 = false,
      solicitoBeca = false,
      trabajador = false,
      personaACargo = false,
      observaciones,
    } = req.body;

    if (!nombres || !apellidos || !dni || !email || !fecha_nacimiento) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const existing = await prisma.estudiante.findUnique({ where: { dni } });
    if (existing) {
      return res.status(400).json({ error: 'El DNI ya está registrado' });
    }

    const newStudent = await prisma.estudiante.create({
      data: {
        nombres,
        apellidos,
        dni,
        email,
        telefono,
        domicilio,
        fechaNacimiento: new Date(fecha_nacimiento),
        paisId: Number(id_pais),
        localidadId: Number(id_localidad),
        areaTelefonicaId: Number(id_area_telefonica),
        generoId: Number(id_genero),
        cohorte,
        secundario,
        cuil,
        examenMayores25,
        solicitoBeca,
        trabajador,
        personaACargo,
        observaciones,
        estado: 'Activo',
        fechaIngreso: new Date(),
      },
    });

    console.log(`[AUDIT] Estudiante creado: ${newStudent.id}`);
    return res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// RF 3.2.1.2: Consulta de Estudiantes
export const getStudents = async (req: Request, res: Response) => {
  try {
    const { dni, nombres, apellidos } = req.query;
    const where: any = { estado: 'Activo' };

    if (dni) where.dni = String(dni);
    if (nombres)
      where.nombres = { contains: String(nombres), mode: 'insensitive' };
    if (apellidos)
      where.apellidos = { contains: String(apellidos), mode: 'insensitive' };

    const students = await prisma.estudiante.findMany({
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

// RF 3.2.1.2.1: Consulta por ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.estudiante.findUnique({
      where: { id: Number(id) },
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

    const updatedStudent = await prisma.estudiante.update({
      where: { id: Number(id) },
      data: {
        nombres: data.nombres,
        apellidos: data.apellidos,
        email: data.email,
        telefono: data.telefono,
        domicilio: data.domicilio,
        cohorte: data.cohorte,
        secundario: data.secundario,
        cuil: data.cuil,
        examenMayores25: data.examenMayores25,
        solicitoBeca: data.solicitoBeca,
        trabajador: data.trabajador,
        personaACargo: data.personaACargo,
        observaciones: data.observaciones,
        fechaNacimiento: data.fecha_nacimiento
          ? new Date(data.fecha_nacimiento)
          : undefined,
        paisId: data.id_pais ? Number(data.id_pais) : undefined,
        localidadId: data.id_localidad ? Number(data.id_localidad) : undefined,
        areaTelefonicaId: data.id_area_telefonica
          ? Number(data.id_area_telefonica)
          : undefined,
        generoId: data.id_genero ? Number(data.id_genero) : undefined,
      },
    });

    console.log(`[AUDIT] Estudiante actualizado: ${updatedStudent.id}`);
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

    const deactivatedStudent = await prisma.estudiante.update({
      where: { id: Number(id) },
      data: {
        estado: 'Inactivo',
        observaciones: causa_inactividad || 'Desactivado por usuario',
      },
    });

    console.log(`[AUDIT] Estudiante desactivado: ${deactivatedStudent.id}`);
    return res.json({
      message: 'Estudiante desactivado correctamente',
      student: deactivatedStudent,
    });
  } catch (error) {
    console.error('Error al desactivar estudiante:', error);
    return res.status(500).json({ error: 'Error al desactivar estudiante' });
  }
};

