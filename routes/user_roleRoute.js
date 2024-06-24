import express from 'express';

import {
  createUser_role,
  getUsers_role,
  getUser_role,
  updateUser_role,
  deleteUser_role,
} from '../controllers/user_roleController.js';

const router = express.Router();

router.get('/users_role', getUsers_role);
router.post('/newUser_role', createUser_role);
router.get('/user_role/:id', getUser_role);
router.put('/updateUser_role/:id', updateUser_role);
router.delete('/deleteUser_role/:id', deleteUser_role);

export default router;