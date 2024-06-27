import express from 'express';

import {
  createCareer,
  getCareers,
  getCareer,
  updateCareer,
  deleteCareer,
} from '../controllers/careerController.js';

const router = express.Router();

router.get('/careers', getCareers);
router.post('/newCareer', createCareer);
router.get('/career/:id', getCareer);
router.put('/updateCareer/:id', updateCareer);
router.delete('/deleteCareer/:id', deleteCareer);

export default router;