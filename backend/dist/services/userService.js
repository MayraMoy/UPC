"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAllUsers() {
        try {
            const users = await this.prisma.user.findMany({
                select: { id: true, email: true, role: true, createdAt: true },
                orderBy: { createdAt: "desc" },
            });
            return users;
        }
        catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw new Error("No se pudieron obtener los usuarios");
        }
    }
    async getUserById(id) {
        try {
            return await this.prisma.user.findUnique({
                where: { id },
                select: { id: true, email: true, role: true, createdAt: true },
            });
        }
        catch (error) {
            console.error("Error al buscar usuario:", error);
            throw new Error("No se pudo obtener el usuario");
        }
    }
    async createUser(data) {
        try {
            const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
            if (existing)
                throw new Error("Ya existe un usuario con ese email");
            const hashed = await bcrypt_1.default.hash(data.password, 10);
            const user = await this.prisma.user.create({
                data: { email: data.email, password: hashed, role: data.role },
            });
            console.log(`[AUDIT] Usuario creado: ${user.email} (${user.role})`);
            return user;
        }
        catch (error) {
            console.error("Error al crear usuario:", error);
            throw new Error("No se pudo crear el usuario");
        }
    }
    async updateUserRole(id, role) {
        try {
            const existing = await this.prisma.user.findUnique({ where: { id } });
            if (!existing)
                throw new Error("Usuario no encontrado");
            const updated = await this.prisma.user.update({
                where: { id },
                data: { role },
            });
            console.log(`[AUDIT] Rol actualizado: ${updated.email} → ${updated.role}`);
            return updated;
        }
        catch (error) {
            console.error("Error al actualizar rol:", error);
            throw new Error("No se pudo actualizar el rol del usuario");
        }
    }
    async changePassword(id, newPassword) {
        try {
            const hashed = await bcrypt_1.default.hash(newPassword, 10);
            await this.prisma.user.update({
                where: { id },
                data: { password: hashed },
            });
            console.log(`[AUDIT] Contraseña actualizada para usuario ID=${id}`);
        }
        catch (error) {
            console.error("Error al cambiar contraseña:", error);
            throw new Error("No se pudo cambiar la contraseña");
        }
    }
    async deleteUser(id) {
        try {
            const existing = await this.prisma.user.findUnique({ where: { id } });
            if (!existing)
                throw new Error("Usuario no encontrado");
            const deleted = await this.prisma.user.delete({ where: { id } });
            console.log(`[AUDIT] Usuario eliminado: ${deleted.email}`);
            return deleted;
        }
        catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw new Error("No se pudo eliminar el usuario");
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map