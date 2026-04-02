const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/zaidi-portfolio';

  const maxRetries = 5;
  let retries = 0;

  const connectWithRetry = async () => {
    try {
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });

      console.log(`MongoDB Connected: ${conn.connection.host}`);

      // Connection event handlers
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err.message);
      });

      mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected. Attempting to reconnect...');
      });

      // Graceful shutdown
      process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
      });

    } catch (error) {
      retries += 1;
      console.error(`MongoDB connection attempt ${retries}/${maxRetries} failed: ${error.message}`);

      if (retries < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, retries), 30000);
        console.log(`Retrying in ${delay / 1000} seconds...`);
        setTimeout(connectWithRetry, delay);
      } else {
        console.error('Failed to connect to MongoDB after maximum retries. Exiting...');
        process.exit(1);
      }
    }
  };

  await connectWithRetry();
};

module.exports = connectDB;
