import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
// Initialize Stripe with your secret key from the .env file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key');

// Route: POST /api/orders/create-payment-intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { items } = req.body; 
    
    // Calculate total order amount on the backend to prevent frontend tampering
    // Assuming items is an array of objects like { id, price, quantity }
    const calculateOrderAmount = (items) => {
      return items.reduce((total, item) => total + (item.price * item.quantity), 0) * 100; // Stripe expects cents
    };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;