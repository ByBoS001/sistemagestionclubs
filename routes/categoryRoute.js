import express from 'express';

import {
  createCategory,
  getCategorys,
  getCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categorys', getCategorys);
router.post('/newCategory', createCategory);
router.get('/category/:id', getCategory);
router.put('/updateCategory/:id', updateCategory);
router.delete('/deleteCategory/:id', deleteCategory);

export default router;