const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sulphh:mZFhrBv2sCfxcrop@kitio.myjpvfk.mongodb.net/?retryWrites=true&w=majority&appName=Kitio';

const connectToDB = async () => {
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    console.log('Already connected or connecting to MongoDB.');
    return;
  }

  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    // Handle error (optional: rethrow or process error further)
    throw err;
  }
};

// Export the connectToDB function
module.exports = connectToDB;