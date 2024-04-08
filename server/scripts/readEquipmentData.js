const Equipment = require('../models/Equipment'); // Adjust the path as necessary

async function readAndLogEquipment() {
  try {
    const allEquipment = await Equipment.find({});
    // Perform your logic with `allEquipment` here
    console.log('All Equipment:', allEquipment);
    // Return data or confirmation as needed
    return allEquipment; // For example purposes
  } catch (err) {
    console.error('Error fetching equipment:', err);
    throw err; // Rethrow or handle as appropriate
  }
}

module.exports = readAndLogEquipment;