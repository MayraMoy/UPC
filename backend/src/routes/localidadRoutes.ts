// src/routes/localidadRoutes.ts
import { Router } from "express";
import * as localidadController from "../controllers/localidadController";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware"; 

const router = Router();

// GET /api/localidades - Obtener todas las localidades (opcional: ?paisId=1 para filtrar por país)
router.get("/", localidadController.getLocalidades);

// GET /api/localidades/pais/:paisId - Obtener localidades por país
router.get("/pais/:paisId", localidadController.getLocalidadesByPais);

// GET /api/localidades/:id - Obtener una localidad por ID
router.get("/:id", localidadController.getLocalidadById);

// POST /api/localidades - Crear una nueva localidad
router.post("/", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), localidadController.createLocalidad);
//router.post("/", localidadController.createLocalidad);

// PUT /api/localidades/:id - Actualizar una localidad
router.put("/:id", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), localidadController.updateLocalidad);

// DELETE /api/localidades/:id - Eliminar una localidad
router.delete("/:id", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), localidadController.deleteLocalidad);

export default router;

