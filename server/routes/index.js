import express from 'express';
import authRoutes from './authRoutes.js';
import messageRoutes from './messageRoutes.js';
import userRoutes from './userRoutes.js';
import roomRoutes from './roomRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/message', messageRoutes);
router.use('/user', userRoutes);
router.use('/room', roomRoutes);

export default router;
