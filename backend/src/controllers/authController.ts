import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  prisma  from "../prisma";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(401).json({ error: "Credenciales incorrectas" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Credenciales incorrectas" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    const { password: _, ...userWithoutPassword } = user;
    console.log(`[AUDIT] Login exitoso: ${user.email} (${user.role})`);

    return res.status(200).json({
      message: "Autenticación exitosa",
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const logout = async (_req: Request, res: Response) => {
  try {
    // En JWT, el logout se maneja del lado del cliente.
    // Pero respondemos OK para mantener la API REST completa.
    return res.status(200).json({ message: "Sesión cerrada correctamente" });
  } catch (error) {
    console.error("Error en logout:", error);
    return res.status(500).json({ error: "Error al cerrar sesión" });
  }
};