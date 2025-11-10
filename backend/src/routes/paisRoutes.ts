// src/routes/paisRoutes.ts
import { Router } from "express";
import * as paisController from "../controllers/paisController";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware"; 

const router = Router();

// GET /api/paises - Obtener todos los países
router.get("/", paisController.getPaises);

// GET /api/paises/:id - Obtener un país por ID
router.get("/:id", paisController.getPaisById);

// POST /api/paises - Crear un nuevo país
router.post("/", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), paisController.createPais);

// PUT /api/paises/:id - Actualizar un país
router.put("/:id", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), paisController.updatePais);

// DELETE /api/paises/:id - Eliminar un país
router.delete("/:id", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), paisController.deletePais);

export default router;

