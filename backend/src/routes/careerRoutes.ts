// backend/src/routes/careerRoutes.ts
import { Router } from 'express';
import * as careerController from '../controllers/careerController';

const router = Router();

// RF 3.2.2.1: Registro de Carrera
router.post('/', careerController.createCareer);

// RF 3.2.2.2: Consulta de Carreras (listado y por ID)
router.get('/', careerController.getCareers);
router.get('/:id', careerController.getCareerById);

// RF 3.2.2.3: Actualización de Carrera
router.put('/:id', careerController.updateCareer);

// NOTA: Tu SRS no exige eliminación de carreras, así que no se incluye

export default router;