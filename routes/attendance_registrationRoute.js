import express from 'express';

import {
  createAttendance_registration,
  getAttendance_registrations,
  getAttendance_registration,
  updateAttendance_registration,
  deleteAttendance_registration,
} from '../controllers/attendance_registrationController.js';

const router = express.Router();

router.get('/attendance_registrations', getAttendance_registrations);
router.post('/newAttendance_registration', createAttendance_registration);
router.get('/attendance_registration/:id', getAttendance_registration);
router.put('/updateAttendance_registration/:id', updateAttendance_registration);
router.delete('/deleteAttendance_registration/:id', deleteAttendance_registration);

export default router;