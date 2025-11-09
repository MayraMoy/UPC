// src/routes/studentRoutes.ts
import { Router } from "express";
import * as studentController from "../controllers/studentController";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware"; 

const router = Router();

// Crear estudiante (solo ADMIN o PERSONAL)
router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "PERSONAL"),
  studentController.createStudent
);

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deactivateStudent);

// Obtener todos los estudiantes o filtrar por query
router.get("/", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), studentController.getStudents);

// Obtener estudiante por ID
router.get("/:id", authenticate, authorizeRoles("ADMIN", "DOCENTE", "PERSONAL"), studentController.getStudentById);

// Actualizar estudiante
router.put("/:id", authenticate, authorizeRoles("ADMIN", "PERSONAL"), studentController.updateStudent);

// Desactivar (soft delete) estudiante
router.delete("/:id", authenticate, authorizeRoles("ADMIN"), studentController.deactivateStudent);

export default router;
