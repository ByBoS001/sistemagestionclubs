import express from 'express';

import {
  createClub_activity,
  getClub_activitys,
  getClub_activity,
  updateClub_activity,
  deleteClub_activity,
} from '../controllers/club_activityController.js';

const router = express.Router();

router.get('/club_activitys', getClub_activitys);
router.post('/newClub_activity', createClub_activity);
router.get('/club_activity/:id', getClub_activity);
router.put('/updateClub_activity/:id', updateClub_activity);
router.delete('/deleteClub_activity/:id', deleteClub_activity);

export default router;