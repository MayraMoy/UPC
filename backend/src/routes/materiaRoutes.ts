import { Router } from 'express';
import * as materiaController from '../controllers/materiaController';

const router = Router();

// ✅ Definición correcta de las rutas
router.get('/', materiaController.getMaterias);
router.get('/:id', materiaController.getMateriaById);
router.post('/', materiaController.createMateria);
router.put('/:id', materiaController.updateMateria);
router.delete('/:id', materiaController.deleteMateria);

export default router;

