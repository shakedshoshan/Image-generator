import { Router } from 'express';

import { insertImage, deleteImage, getAllUserImages } from '../controllers/images.controller.js';
// import protectRoute from '../middleware/protectRoute.js';

const router = Router();

// Protected routes (require authentication)
router.post('/', insertImage);
router.post('/delete', deleteImage);
router.get('/user/:userId', getAllUserImages);

export default router;