require('dotenv').config();
const mongoose = require('mongoose');
const Equipment = require('../models/Equipment');
const connectToDB = require('../db');

const testItems = [
  {
    name: "Blackmagic Pocket Cinema Camera 4K",
    manufacturer: "Blackmagic Design",
    category: "Camera",
    inputs: [],
    outputs: [
      { name: "HDMI Output", type: "video", cableType: "HDMI", color: "Black" }
    ],
    description: "Compact digital film camera with high dynamic range.",
    sharedWithCommunity: true
  },
  {
    name: "ATEM Television Studio HD",
    manufacturer: "Blackmagic Design",
    category: "Switcher",
    inputs: [
      { name: "SDI Input 1", type: "video", cableType: "SDI", color: "Red" },
      { name: "HDMI Input 1", type: "video", cableType: "HDMI", color: "Blue" }
    ],
    outputs: [
      { name: "SDI Program Output", type: "video", cableType: "SDI", color: "Red" }
    ],
    description: "Live production switcher for broadcast, professional, and AV users.",
    sharedWithCommunity: false
  },
  {
    name: "URSA Broadcast Camera",
    manufacturer: "Blackmagic Design",
    category: "Camera",
    inputs: [
      { name: "Mic Input", type: "audio", cableType: "XLR", color: "Green" }
    ],
    outputs: [
      { name: "SDI Output", type: "video", cableType: "SDI", color: "Yellow" }
    ],
    description: "Advanced HD and Ultra HD broadcast camera.",
    sharedWithCommunity: true
  },
];

async function insertTestData() {
  try {
    await connectToDB();
    const insertedItems = await Equipment.insertMany(testItems);
    console.log(`Successfully inserted ${insertedItems.length} test items.`);
  } catch (error) {
    console.error('Failed to insert test data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertTestData();