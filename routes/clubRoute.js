import express from 'express';

import {
  createClub,
  getClubs,
  getClub,
  updateClub,
  deleteClub,
} from '../controllers/clubController.js';

const router = express.Router();

router.get('/clubs', getClubs);
router.post('/newClub', createClub);
router.get('/club/:id', getClub);
router.put('/updateClub/:id', updateClub);
router.delete('/deleteClub/:id', deleteClub);

export default router;