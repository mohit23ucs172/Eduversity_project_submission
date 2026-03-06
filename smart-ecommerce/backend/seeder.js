import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // 1. Wipe the database clean completely
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // 2. Insert the dummy users
    const createdUsers = await User.insertMany(users);

    // 3. Get the Admin user's ID so we can assign them as the creator of the products
    const adminUser = createdUsers[0]._id;

    // 4. Add the admin user ID to every product before saving
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // 5. Insert the products
    await Product.insertMany(sampleProducts);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

// Check if we passed the "-d" flag in the terminal to destroy data
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}