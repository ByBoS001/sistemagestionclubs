import express from 'express';

import {
  createUniversity,
  getUniversitys,
  getUniversity,
  updateUniversity,
  deleteUniversity,
} from '../controllers/universityController.js';

const router = express.Router();

router.get('/universitys', getUniversitys);
router.post('/newUniversity', createUniversity);
router.get('/university/:id', getUniversity);
router.put('/updateUniversity/:id', updateUniversity);
router.delete('/deleteUniversity/:id', deleteUniversity);

export default router;