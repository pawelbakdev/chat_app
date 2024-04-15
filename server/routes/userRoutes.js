import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', authMiddleware, getUsers);

export default router;
