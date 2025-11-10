"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../prisma"));
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ error: "Email y contraseña son obligatorios" });
        const user = await prisma_1.default.user.findUnique({ where: { email } });
        if (!user)
            return res.status(401).json({ error: "Credenciales incorrectas" });
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ error: "Credenciales incorrectas" });
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "8h" });
        const { password: _, ...userWithoutPassword } = user;
        console.log(`[AUDIT] Login exitoso: ${user.email} (${user.role})`);
        return res.status(200).json({
            message: "Autenticación exitosa",
            token,
            user: userWithoutPassword,
        });
    }
    catch (error) {
        console.error("Error en login:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.login = login;
const logout = async (_req, res) => {
    try {
        return res.status(200).json({ message: "Sesión cerrada correctamente" });
    }
    catch (error) {
        console.error("Error en logout:", error);
        return res.status(500).json({ error: "Error al cerrar sesión" });
    }
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map