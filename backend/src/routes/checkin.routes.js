import express from 'express';
import dailyCheckIn from '../controllers/checkin.controller.js';

const router = express.Router();

router.post('/dailyCheckIn', dailyCheckIn);

export default router;