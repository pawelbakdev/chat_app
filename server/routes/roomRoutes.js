import express from 'express';
import { getRooms } from '../controllers/roomController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/rooms', authMiddleware, getRooms);

export default router;
