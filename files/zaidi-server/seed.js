const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/database');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB');

    // Check if admin user exists
    const adminExists = await User.findOne({ username: 'admin' });
    if (adminExists) {
      console.log('Admin user already exists');
      await mongoose.connection.close();
      process.exit(0);
    }

    // Create default admin user
    const admin = await User.create({
      username: 'admin',
      password: 'naqizadi1i972aeiou007',
      role: 'admin'
    });

    console.log('✓ Default admin user created');
    console.log('Username: admin');
    console.log('Password: naqizadi1i972aeiou007');

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

seedDatabase();
