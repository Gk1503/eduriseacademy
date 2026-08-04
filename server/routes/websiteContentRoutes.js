import express from 'express';
import {
  getAllContent,
  getContentByKey,
  createContent,
  updateContent,
  deleteContent,
} from '../controllers/websiteContentController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllContent).post(protect, admin, createContent);
router.get('/key/:key', getContentByKey);
router.route('/:id').put(protect, admin, updateContent).delete(protect, admin, deleteContent);

export default router;
