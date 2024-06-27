import express from 'express';

import {
  createUserRole,
  getUserRoleS,
  getUserRole,
  updateUserRole,
  deleteUserRole,
} from '../controllers/user_roleController.js';

const router = express.Router();

router.get('/users', getUserRoleS);
router.post('/newUserRole', createUserRole);
router.get('/userRole/:id', getUserRole);
router.put('/updateUserRole/:id', updateUserRole);
router.delete('/deleteUserRole/:id', deleteUserRole);

export default router;