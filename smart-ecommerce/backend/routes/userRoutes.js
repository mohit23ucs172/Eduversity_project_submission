import express from 'express';
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js'; // Import middleware

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

// Notice how we use the protect middleware before the controller
router.route('/profile').get(protect, getUserProfile); 

export default router;