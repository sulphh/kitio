const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
  label: String,
  connectionType: {
    type: String,
    enum: ['HDMI', 'SDI', 'XLR', 'DC'],
  },
});

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  codeName: { type: String, required: false }, 
  manufacturer: { type: String, required: true },
  category: { type: String, required: true },
  inputs: [connectionSchema],
  outputs: [connectionSchema],
  sharedWithCommunity: { type: Boolean, default: false },
  description: String,
}, {
  timestamps: true,
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
