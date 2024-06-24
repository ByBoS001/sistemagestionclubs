import express from 'express';

import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', getUsers);
router.post('/newUser', createUser);
router.post('/user/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;
