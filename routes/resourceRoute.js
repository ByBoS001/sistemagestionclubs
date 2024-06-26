import express from 'express';

import {
  createResource,
  getResources,
  getResource,
  updateResource,
  deleteResource,
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/resources', getResources);
router.post('/newResource', createResource);
router.get('/resource/:id', getResource);
router.put('/updateResource/:id', updateResource);
router.delete('/deleteResource/:id', deleteResource);

export default router;
