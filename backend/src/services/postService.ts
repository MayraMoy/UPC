import { PrismaClient } from '../../generated/prisma';
import { CreatePostData, UpdatePostData } from '../models/Posts';

const prisma = new PrismaClient();

export class PostService {
  async getAllPosts() {
    return await prisma.eSTUDIANTES.findMany();
  }

  async getPostById(id: number) {
    return await prisma.eSTUDIANTES.findUnique({
      where: { id_estudiante: id }
    });
  }

  async getPostsByAuthor(authorId: number) {
    return await prisma.eSTUDIANTES.findMany({
      where: { id_estudiante: authorId }
    });
  }

  async createPost(postData: CreatePostData) {
    return await prisma.eSTUDIANTES.create({
      data: {
        nombres: postData.title,
        email: postData.content || '',
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

  async updatePost(id: number, postData: UpdatePostData) {
    return await prisma.eSTUDIANTES.update({
      where: { id_estudiante: id },
      data: {
        nombres: postData.title || undefined,
        email: postData.content || undefined
      }
    });
  }

  async deletePost(id: number) {
    return await prisma.eSTUDIANTES.delete({
      where: { id_estudiante: id }
    });
  }
}