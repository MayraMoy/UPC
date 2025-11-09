import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

// Tipado fuerte del Request con usuario autenticado
export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: string;
  };
}

/**
 * Middleware de autenticación JWT
 * Verifica que el token exista, sea válido y adjunta el usuario al request.
 */
export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token no proporcionado" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);

    if (!decoded || typeof decoded !== "object" || !("id" in decoded)) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }

    req.user = {
      id: (decoded as any).id,
      role: (decoded as any).role,
    };

    next();
    return;
  } catch (err) {
    console.error("[AUTH] Error verificando token:", err);
    res.status(401).json({ error: "Token inválido o expirado" });
    return;
  }
};

/**
 * Middleware de autorización por rol
 * Ejemplo: router.get('/', authenticate, authorizeRoles('ADMIN'), handler)
 */
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({ error: "Usuario no autenticado" });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      console.warn(
        `[AUTH] Acceso denegado: rol '${req.user.role}' no autorizado`
      );
      res.status(403).json({ error: "Acceso denegado" });
      return;
    }

    next();
    return;
  };
};

// Alias opcional (por compatibilidad con código previo)
export const authorize = authorizeRoles;

