import express from 'express';

import {
  createAuthentication,
  getAuthentications,
  getAuthentication,
  updateAuthentication,
  deleteAuthentication,
} from '../controllers/authenticationController.js';

const router = express.Router();

router.get('/authentications', getAuthentications);
router.post('/newAuthentication', createAuthentication);
router.get('/authentication/:id', getAuthentication);
router.put('/updateAuthentication/:id', updateAuthentication);
router.delete('/deleteAuthentication/:id', deleteAuthentication);

export default router;