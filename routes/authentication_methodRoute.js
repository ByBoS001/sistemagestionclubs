import express from 'express';

import {
  createAuthentication_method,
  getAuthentication_methods,
  getAuthentication_method,
  updateAuthentication_method,
  deleteAuthentication_method,
} from '../controllers/authentication_methodController.js';

const router = express.Router();

router.get('/authentication_methods', getAuthentication_methods);
router.post('/newAuthentication_method', createAuthentication_method);
router.get('/authentication_method/:id', getAuthentication_method);
router.put('/updateAuthentication_method/:id', updateAuthentication_method);
router.delete('/deleteAuthentication_method/:id', deleteAuthentication_method);

export default router;