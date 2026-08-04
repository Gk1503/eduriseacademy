import express from 'express';
import {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
  addContactHistory,
} from '../controllers/inquiryController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, admin, getInquiries).post(createInquiry);
router.route('/:id').get(protect, admin, getInquiry).put(protect, admin, updateInquiry).delete(protect, admin, deleteInquiry);
router.post('/:id/contact', protect, admin, addContactHistory);

export default router;
