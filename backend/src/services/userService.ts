import { PrismaClient } from '../../generated/prisma';
import { CreateUserData, UpdateUserData } from '../models/Users';

const prisma = new PrismaClient();

export class UserService {
  async getAllUsers() {
    return await prisma.eSTUDIANTES.findMany();
  }

  async getUserById(id: number) {
    return await prisma.eSTUDIANTES.findUnique({
      where: { id_estudiante: id }
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.eSTUDIANTES.findFirst({
      where: { email }
    });
  }

  async createUser(userData: CreateUserData) {
    return await prisma.eSTUDIANTES.create({
      data: {
        nombres: userData.name || '',
        email: userData.email,
        id_pais: 1,
        id_localidad: 1,
        id_area_telefonica: 1,
        id_genero: 1,
        apellidos: '',
        dni: '',
        fecha_nacimiento: new Date(),
        telefono: '',
        domicilio: '',
        fecha_ingreso: new Date(),
        cohorte: '',
        secundario: '',
        cuil: '',
        examen_mayores25: false,
        solicito_beca: false,
        trabajador: false,
        persona_a_cargo: false
      }
    });
  }

  async updateUser(id: number, userData: UpdateUserData) {
    return await prisma.eSTUDIANTES.update({
      where: { id_estudiante: id },
      data: {
        nombres: userData.name || undefined,
        email: userData.email || undefined
      }
    });
  }

  async deleteUser(id: number) {
    return await prisma.eSTUDIANTES.delete({
      where: { id_estudiante: id }
    });
  }
}