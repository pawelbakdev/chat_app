import express from 'express';
import { getMessage } from '../controllers/messageController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/messages', authMiddleware, getMessage);

export default router;
