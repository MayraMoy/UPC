import { Router } from "express";
import * as studentController from "../controllers/studentController";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware";

const router = Router();

/**
 * Rutas del módulo de Estudiantes
 * Se aplican roles y autenticación según operación
 */

// 🧩 Crear estudiante (solo ADMIN o PERSONAL)
router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "PERSONAL"),
  studentController.createStudent
);

// 🧩 Obtener todos los estudiantes (ADMIN, DOCENTE o PERSONAL)
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"),
  studentController.getStudents
);

// 🧩 Obtener estudiante por ID (ADMIN, DOCENTE o PERSONAL)
router.get(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"),
  studentController.getStudentById
);

// 🧩 Actualizar estudiante (solo ADMIN o PERSONAL)
router.put(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN", "PERSONAL"),
  studentController.updateStudent
);

// 🧩 Desactivar estudiante (solo ADMIN)
router.patch(
  "/:id/deactivate",
  authenticate,
  authorizeRoles("ADMIN"),
  studentController.deactivateStudent
);

export default router;

