import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Route: POST /api/recommendations
// Logic: Recommends products based on the category of the item the user is currently viewing
router.post('/', async (req, res) => {
  try {
    const { currentProductId, category } = req.body;

    // Find up to 4 other products in the same category, excluding the one they are viewing
    const recommendations = await Product.find({
      category: category,
      _id: { $ne: currentProductId } // $ne means "not equal"
    }).limit(4);

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate recommendations' });
  }
});

export default router;