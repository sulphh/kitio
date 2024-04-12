const mongoose = require('mongoose');

const connectToDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    throw new Error("MongoDB URI is not set in environment variables.");
  }

  if ([1, 2].includes(mongoose.connection.readyState)) {
    console.log('Already connected or connecting to MongoDB.');
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw err;
  }
};

module.exports = connectToDB;
