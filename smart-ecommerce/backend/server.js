import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import Database Configuration
import connectDB from './config/db.js';

// Import Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';

// Import Custom Error Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the Express application
const app = express();

// Apply App-Level Middleware
app.use(cors()); // Allows your React frontend to communicate with this API
app.use(express.json()); // Allows the server to accept JSON data in the request body (e.g., req.body)

// Mount the Routes
// When a request hits these URLs, Express passes them to the specific route files
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Root Endpoint (Health Check)
app.get('/', (req, res) => {
  res.send('Smart E-commerce API is running successfully...');
});

// Apply Custom Error Handling Middleware
// These must be placed AFTER all the routes
app.use(notFound); // Catches URLs that don't exist
app.use(errorHandler); // Formats all thrown errors into clean JSON responses

// Define the Port and Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});