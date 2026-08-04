import express from 'express';
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  addPayment,
} from '../controllers/studentController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, admin, getStudents).post(protect, admin, createStudent);
router.route('/:id').get(protect, admin, getStudent).put(protect, admin, updateStudent).delete(protect, admin, deleteStudent);
router.post('/:id/payments', protect, admin, addPayment);

export default router;
