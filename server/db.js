const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/kitio';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Connection Events for Debugging
const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connection open to ${mongoURI}`);
});

db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});