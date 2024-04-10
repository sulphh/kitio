require('dotenv').config(); // Make sure to require dotenv at the top
const mongoose = require('mongoose');
const Equipment = require('../models/Equipment'); 
const connectToDB = require('../db'); // Ensure this properly sets up and exports a connection function

async function deleteAllItems() {
  try {
    // Use your connectToDB function instead of directly calling mongoose.connect
    // This ensures consistency with how your app connects to the database elsewhere
    await connectToDB();

    const result = await Equipment.deleteMany({});
    console.log(`Deleted ${result.deletedCount} items.`);
  } catch (error) {
    console.error('Error deleting items:', error);
  } finally {
    // Consider whether you want to close the connection here
    // If this script is meant to run standalone, then closing is fine
    // If it's part of a larger application flow, you might not want to close immediately
    mongoose.connection.close();
  }
}

deleteAllItems();
