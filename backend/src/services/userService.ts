import { PrismaClient, Role, User } from "@prisma/client";
import bcrypt from "bcrypt";

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /** Obtener todos los usuarios (solo ADMIN) */
  async getAllUsers(): Promise<Pick<User, "id" | "email" | "role" | "createdAt">[]> {
    try {
      const users = await this.prisma.user.findMany({
        select: { id: true, email: true, role: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      });
      return users;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      throw new Error("No se pudieron obtener los usuarios");
    }
  }

  /** Obtener usuario por ID */
  async getUserById(id: number): Promise<Pick<User, "id" | "email" | "role" | "createdAt"> | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
        select: { id: true, email: true, role: true, createdAt: true },
      });
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      throw new Error("No se pudo obtener el usuario");
    }
  }

  /** Crear nuevo usuario (solo ADMIN) */
  async createUser(data: { email: string; password: string; role: Role }): Promise<User> {
    try {
      // Verificar duplicado
      const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
      if (existing) throw new Error("Ya existe un usuario con ese email");

      // Hashear contraseña
      const hashed = await bcrypt.hash(data.password, 10);

      const user = await this.prisma.user.create({
        data: { email: data.email, password: hashed, role: data.role },
      });

      console.log(`[AUDIT] Usuario creado: ${user.email} (${user.role})`);
      return user;
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw new Error("No se pudo crear el usuario");
    }
  }

  /** Actualizar rol de usuario (solo ADMIN) */
  async updateUserRole(id: number, role: Role): Promise<User> {
    try {
      const existing = await this.prisma.user.findUnique({ where: { id } });
      if (!existing) throw new Error("Usuario no encontrado");

      const updated = await this.prisma.user.update({
        where: { id },
        data: { role },
      });

      console.log(`[AUDIT] Rol actualizado: ${updated.email} → ${updated.role}`);
      return updated;
    } catch (error) {
      console.error("Error al actualizar rol:", error);
      throw new Error("No se pudo actualizar el rol del usuario");
    }
  }

  /** Cambiar contraseña (ADMIN o el propio usuario) */
  async changePassword(id: number, newPassword: string): Promise<void> {
    try {
      const hashed = await bcrypt.hash(newPassword, 10);
      await this.prisma.user.update({
        where: { id },
        data: { password: hashed },
      });
      console.log(`[AUDIT] Contraseña actualizada para usuario ID=${id}`);
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
      throw new Error("No se pudo cambiar la contraseña");
    }
  }

  /** Eliminar usuario (opcional, solo ADMIN) */
  async deleteUser(id: number): Promise<User> {
    try {
      const existing = await this.prisma.user.findUnique({ where: { id } });
      if (!existing) throw new Error("Usuario no encontrado");

      const deleted = await this.prisma.user.delete({ where: { id } });
      console.log(`[AUDIT] Usuario eliminado: ${deleted.email}`);
      return deleted;
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      throw new Error("No se pudo eliminar el usuario");
    }
  }
}
