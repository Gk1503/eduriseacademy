import express from 'express';
import {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcementController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAnnouncements).post(protect, admin, createAnnouncement);
router.route('/:id').get(getAnnouncement).put(protect, admin, updateAnnouncement).delete(protect, admin, deleteAnnouncement);

export default router;
