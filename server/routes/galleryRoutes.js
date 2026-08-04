import express from 'express';
import {
  getGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from '../controllers/galleryController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getGalleryItems).post(protect, admin, createGalleryItem);
router.route('/:id').get(getGalleryItem).put(protect, admin, updateGalleryItem).delete(protect, admin, deleteGalleryItem);

export default router;
