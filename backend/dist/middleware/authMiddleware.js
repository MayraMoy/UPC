"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authorizeRoles = exports.authenticate = void 0;
const jwt_1 = require("../utils/jwt");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Token no proporcionado" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        if (!decoded || typeof decoded !== "object" || !("id" in decoded)) {
            res.status(401).json({ error: "Token inválido" });
            return;
        }
        req.user = {
            id: decoded.id,
            role: decoded.role,
        };
        next();
        return;
    }
    catch (err) {
        console.error("[AUTH] Error verificando token:", err);
        res.status(401).json({ error: "Token inválido o expirado" });
        return;
    }
};
exports.authenticate = authenticate;
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ error: "Usuario no autenticado" });
            return;
        }
        if (!allowedRoles.includes(req.user.role)) {
            console.warn(`[AUTH] Acceso denegado: rol '${req.user.role}' no autorizado`);
            res.status(403).json({ error: "Acceso denegado" });
            return;
        }
        next();
        return;
    };
};
exports.authorizeRoles = authorizeRoles;
exports.authorize = exports.authorizeRoles;
//# sourceMappingURL=authMiddleware.js.map