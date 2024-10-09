import { Router } from 'express';

import { insertImage, deleteImage, getAllUserImages } from '../controllers/images.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = Router();




// Protected routes (require authentication)
router.post('/',protectRoute, insertImage);
router.post('/delete',protectRoute, deleteImage);
router.get('/user/:userId',protectRoute, getAllUserImages);

export default router;