// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';
import prisma from '../prisma';

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
    }

    // Buscar usuario
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Generar token
    const token = generateToken({ id: user.id, role: user.role });

    // Log de auditoría (3.3.2)
    console.log(`[AUDIT] Usuario autenticado: ${user.email} (Rol: ${user.role})`);

    // Responder sin la contraseña
    const { password: _, ...userWithoutPassword } = user;
    return res.json({ token, user: userWithoutPassword });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Logout (opcional, solo frontend)
export const logout = async (req: Request, res: Response) => {
  // En JWT stateless, el logout se maneja en frontend (borrar token)
  return res.json({ message: 'Sesión cerrada' });
};