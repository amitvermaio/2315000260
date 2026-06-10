import { Router } from 'express';
const router = Router();
import { protect } from '../middleware.js';
router.get('/', getAllNotifications)
router.post('/send-all', protect, sendNotifications);

export default notificationRouter;