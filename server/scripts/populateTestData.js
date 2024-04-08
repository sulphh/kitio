const mongoose = require('mongoose');
const Equipment = require('../models/Equipment'); 
const db = require('../db'); 

const testItems = [
    {
      name: "Dynamic Microphone SM58",
      type: "Microphone",
      connectivity: [
        { name: "XLR Output", type: "audio", cableType: "XLR" }
      ],
      description: "Ideal for live performances and vocals."
    },
    {
      name: "Condenser Microphone C414",
      type: "Microphone",
      connectivity: [
        { name: "XLR Output", type: "audio", cableType: "XLR" }
      ],
      description: "Versatile studio microphone, perfect for instrument and vocal recording."
    },
    {
      name: "4K Video Camera X150",
      type: "Camera",
      connectivity: [
        { name: "HDMI Output", type: "video", cableType: "HDMI" },
        { name: "SDI Output", type: "video", cableType: "SDI" }
      ],
      description: "High-definition camera suitable for professional video production."
    },
    {
      name: "LED Panel Light LP1200",
      type: "Lighting",
      connectivity: [],
      description: "Adjustable brightness and color temperature for various shooting environments."
    },
    {
      name: "Digital Audio Mixer AMX500",
      type: "Mixer",
      connectivity: [
        { name: "USB Output", type: "audio", cableType: "USB" },
        { name: "MIDI Out", type: "audio", cableType: "MIDI" }
      ],
      description: "12-channel audio mixer with built-in effects and USB connectivity for live sound and recording."
    },
    {
      name: "PA Speaker System PS1000",
      type: "Speaker",
      connectivity: [
        { name: "XLR Input", type: "audio", cableType: "XLR" }
      ],
      description: "Loudspeaker with high output suitable for live events and performances."
    },
    {
      name: "Wireless Lavalier Microphone WL50",
      type: "Microphone",
      connectivity: [
        { name: "Wireless", type: "audio", cableType: "None" }
      ],
      description: "Compact wireless microphone system for interviews and presentations."
    },
    {
      name: "Projector PRJ4K",
      type: "Projector",
      connectivity: [
        { name: "HDMI Input", type: "video", cableType: "HDMI" },
        { name: "VGA Input", type: "video", cableType: "VGA" }
      ],
      description: "4K projector for high-quality presentations and movie screenings."
    },
    {
      name: "Studio Headphones HD800",
      type: "Headphones",
      connectivity: [
        { name: "1/4 inch Jack", type: "audio", cableType: "Jack" }
      ],
      description: "Open-back, over-ear headphones for critical listening and mixing."
    },
    {
      name: "Guitar Amplifier GA100",
      type: "Amplifier",
      connectivity: [
        { name: "1/4 inch Input", type: "audio", cableType: "Jack" }
      ],
      description: "100-watt guitar amplifier with built-in effects and modeling."
    }
  ];  

// Function to insert test items into the database
async function insertTestItems() {
  try {
    await mongoose.connect('mongodb://localhost/kitio'); // Use your connection logic here
    console.log('Connected to MongoDB');

    // Inserting multiple items
    await Equipment.insertMany(testItems);
    console.log('Test items inserted successfully');
  } catch (error) {
    console.error('Error inserting test items:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

insertTestItems();
