import express from 'express';

import {
  createPolicy,
  getPolicys,
  getPolicy,
  updatePolicy,
  deletePolicy,
} from '../controllers/policyController.js';

const router = express.Router();

router.get('/policys', getPolicys);
router.post('/newPolicy', createPolicy);
router.get('/policy/:id', getPolicy);
router.put('/updatePolicy/:id', updatePolicy);
router.delete('/deletePolicy/:id', deletePolicy);

export default router;