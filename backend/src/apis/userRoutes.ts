import { Router, Request, Response } from "express";
import { UserService } from "../services/userService";
import {
  authenticate,
  authorizeRoles,
} from "../middleware/authMiddleware";

const router = Router();
const userService = new UserService();

/**
 * GET /api/users
 * Solo ADMIN puede listar usuarios
 */
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  async (_req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return res
        .status(500)
        .json({ error: "Error interno al obtener usuarios" });
    }
  }
);

/**
 * POST /api/users
 * Crear usuario (solo ADMIN)
 */
router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN"),
  async (req: Request, res: Response) => {
    try {
      const { email, password, role } = req.body;

      if (!email || !password || !role) {
        return res
          .status(400)
          .json({ error: "Email, contraseña y rol son obligatorios" });
      }

      const user = await userService.createUser({ email, password, role });
      return res.status(201).json({
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      });
    } catch (error) {
      console.error("Error al crear usuario:", error);
      return res
        .status(500)
        .json({ error: "Error interno al crear usuario" });
    }
  }
);

/**
 * PUT /api/users/:id/role
 * Actualizar rol de usuario (solo ADMIN)
 */
router.put(
  "/:id/role",
  authenticate,
  authorizeRoles("ADMIN"),
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { role } = req.body;

      if (!role) {
        return res.status(400).json({ error: "El rol es obligatorio" });
      }

      const updated = await userService.updateUserRole(id, role);
      return res.json(updated);
    } catch (error) {
      console.error("Error al actualizar rol:", error);
      return res
        .status(500)
        .json({ error: "Error interno al actualizar rol" });
    }
  }
);

/**
 * DELETE /api/users/:id
 * Eliminar usuario (solo ADMIN)
 */
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const deleted = await userService.deleteUser(id);
      return res.json({
        message: `Usuario ${deleted.email} eliminado correctamente`,
      });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      return res
        .status(500)
        .json({ error: "Error interno al eliminar usuario" });
    }
  }
);

export default router;
