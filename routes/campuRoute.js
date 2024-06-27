import express from 'express';

import {
  createCampu,
  getCampus,
  getCampu,
  updateCampu,
  deleteCampu,
} from '../controllers/campuController.js';

const router = express.Router();

router.get('/campus', getCampus);
router.post('/newCampu', createCampu);
router.get('/campu/:id', getCampu);
router.put('/updateCampu/:id', updateCampu);
router.delete('/deleteCampu/:id', deleteCampu);

export default router;