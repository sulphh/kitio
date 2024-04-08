const mongoose = require('mongoose');
const Equipment = require('../models/Equipment'); 

async function deleteAllItems() {
  await mongoose.connect('mongodb://localhost/kitio', {
  });

  try {
    const result = await Equipment.deleteMany({});
    console.log(`Deleted ${result.deletedCount} items.`);
  } catch (error) {
    console.error('Error deleting items:', error);
  } finally {
    mongoose.connection.close();
  }
}

deleteAllItems();
