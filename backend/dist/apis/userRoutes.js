"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userService_1 = require("../services/userService");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
const userService = new userService_1.UserService();
router.get("/", authMiddleware_1.authenticate, (0, authMiddleware_1.authorizeRoles)("ADMIN"), async (_req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.json(users);
    }
    catch (error) {
        console.error("Error al obtener usuarios:", error);
        return res
            .status(500)
            .json({ error: "Error interno al obtener usuarios" });
    }
});
router.post("/", authMiddleware_1.authenticate, (0, authMiddleware_1.authorizeRoles)("ADMIN"), async (req, res) => {
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
    }
    catch (error) {
        console.error("Error al crear usuario:", error);
        return res
            .status(500)
            .json({ error: "Error interno al crear usuario" });
    }
});
router.put("/:id/role", authMiddleware_1.authenticate, (0, authMiddleware_1.authorizeRoles)("ADMIN"), async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { role } = req.body;
        if (!role) {
            return res.status(400).json({ error: "El rol es obligatorio" });
        }
        const updated = await userService.updateUserRole(id, role);
        return res.json(updated);
    }
    catch (error) {
        console.error("Error al actualizar rol:", error);
        return res
            .status(500)
            .json({ error: "Error interno al actualizar rol" });
    }
});
router.delete("/:id", authMiddleware_1.authenticate, (0, authMiddleware_1.authorizeRoles)("ADMIN"), async (req, res) => {
    try {
        const id = Number(req.params.id);
        const deleted = await userService.deleteUser(id);
        return res.json({
            message: `Usuario ${deleted.email} eliminado correctamente`,
        });
    }
    catch (error) {
        console.error("Error al eliminar usuario:", error);
        return res
            .status(500)
            .json({ error: "Error interno al eliminar usuario" });
    }
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map