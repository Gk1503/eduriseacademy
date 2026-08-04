import express from 'express';
import {
  getCourses,
  getCourse,
  getCourseBySlug,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getCourses).post(protect, admin, createCourse);
router.get('/slug/:slug', getCourseBySlug);
router.route('/:id').get(getCourse).put(protect, admin, updateCourse).delete(protect, admin, deleteCourse);

export default router;
