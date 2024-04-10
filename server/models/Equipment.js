const mongoose = require('mongoose');

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];

const categoryColorMapping = {
  'Video': 'Red',
  'Audio': 'Blue',
  'Network': 'Green',
  'Power': 'Yellow',
  'Computer': 'Black',
};

const cableCategoryMapping = {
  'SDI': 'Video',
  'HDMI': 'Video',
  'XLR': 'Audio',
  'Mini XLR': 'Audio', 
  'AES/EBU': 'Audio',
  'DMX': 'Lighting', 
  'TOSLINK': 'Audio',
  'MADI': 'Audio',
  'Fiber Optic': 'Network',
  'RJ45/Ethernet': 'Network',
  'Dante': 'Network',
  'AVB': 'Network',
  'NDI': 'Video',
  'Thunderbolt': 'Computer',
  'USB': 'Computer',
  'USB-C': 'Computer',
  'MIDI': 'Audio',
  'Power': 'Power',
  'AC Adapter': 'Power',
  'EtherCON': 'Network',
};

// Enhance connectionSchema to determine color based on cableType
const connectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  cableType: { 
    type: String, 
    required: true,
    enum: Object.keys(cableCategoryMapping), // Dynamically generate enum from keys
  },
  color: {
    type: String,
    enum: colors,
    required: true,
    default: function() {
      // Determine the category based on the cableType, then get the default color
      const category = cableCategoryMapping[this.cableType];
      return categoryColorMapping[category] || 'Unknown'; // Provide a fallback color
    },
  },
}, { _id: false });

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  codeName: { type: String, optional: true }, 
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