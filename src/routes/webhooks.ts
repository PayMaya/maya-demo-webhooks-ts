import express from 'express';
import { processCancelledWebhook, processFailedWebhook, processSuccessfulWebhook } from '../controllers/webhooks';

const router = express.Router();

router.post('/success', processSuccessfulWebhook());

router.post('/failure', processFailedWebhook());

router.post('/cancelled', processCancelledWebhook());

export default router;