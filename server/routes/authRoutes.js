import express from 'express';
import { login, register, getMe, logout } from '../controllers/authController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', protect, admin, register);
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

export default router;
