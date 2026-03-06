import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Process.env accesses the variables in your .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit the process with failure code (1) if the database fails to connect
    process.exit(1); 
  }
};

export default connectDB;