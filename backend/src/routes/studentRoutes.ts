// src/routes/studentRoutes.ts
import { Router } from 'express';
import * as studentController from '../controllers/studentController';

const router = Router();

router.post('/', studentController.createStudent);      // RF 3.2.1.1
router.get('/', studentController.getStudents);        // RF 3.2.1.2 (búsqueda por query)
router.get('/:id', studentController.getStudentById);  // RF 3.2.1.2
router.put('/:id', studentController.updateStudent);   // RF 3.2.1.3
router.delete('/:id', studentController.deactivateStudent); // RF 3.2.1.4 (soft delete)

export default router;