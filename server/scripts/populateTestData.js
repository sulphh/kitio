const mongoose = require('mongoose');
const Equipment = require('../models/Equipment'); 
const connectToDB = require('../db'); 

const testItems = [
  {
    name: "Blackmagic Pocket Cinema Camera 4K",
    manufacturer: "Blackmagic Design",
    category: "Camera",
    inputs: [
      { name: "Mini XLR Audio Input", type: "audio", cableType: "Mini XLR" }
    ],
    outputs: [
      { name: "HDMI Video Output", type: "video", cableType: "HDMI" }
    ],
    sharedWithCommunity: true,
    description: "Compact digital film camera with high dynamic range and dual native ISO."
  },
  {
    name: "Blackmagic URSA Mini Pro 4.6K G2",
    manufacturer: "Blackmagic Design",
    category: "Camera",
    inputs: [
      { name: "XLR Audio Input", type: "audio", cableType: "XLR" }
    ],
    outputs: [
      { name: "12G-SDI Video Output", type: "video", cableType: "SDI" }
    ],
    sharedWithCommunity: false,
    description: "Digital film camera with 4.6K sensor, 15 stops of dynamic range, and high frame rate shooting."
  },
  {
    name: "ATEM Mini Pro",
    manufacturer: "Blackmagic Design",
    category: "Mixer",
    inputs: [
      { name: "HDMI Input", type: "video", cableType: "HDMI" }
    ],
    outputs: [
      { name: "HDMI Output", type: "video", cableType: "HDMI" },
      { name: "USB-C Webcam Output", type: "video", cableType: "USB-C" }
    ],
    sharedWithCommunity: true,
    description: "Live production switcher with 4 HDMI inputs, built-in streaming engine, and recording to USB disks."
  },
  {
    name: "Blackmagic Web Presenter",
    manufacturer: "Blackmagic Design",
    category: "Encoder",
    inputs: [
      { name: "SDI Input", type: "video", cableType: "SDI" },
      { name: "HDMI Input", type: "video", cableType: "HDMI" }
    ],
    outputs: [],
    sharedWithCommunity: true,
    description: "Device that allows any SDI or HDMI source to be streamed as a standard webcam for high-quality streaming."
  },
  {
    name: "Blackmagic SmartView Duo",
    manufacturer: "Blackmagic Design",
    category: "Monitor",
    inputs: [
      { name: "SDI Input", type: "video", cableType: "SDI" }
    ],
    outputs: [],
    sharedWithCommunity: false,
    description: "Dual 8\" LCD monitors for live production monitoring with SDI inputs for compatibility with all SDI and HD-SDI equipment."
  },
  {
    name: "HyperDeck Studio Mini",
    manufacturer: "Blackmagic Design",
    category: "Recorder",
    inputs: [
      { name: "SDI Input", type: "video", cableType: "SDI" }
    ],
    outputs: [
      { name: "SDI Output", type: "video", cableType: "SDI" }
    ],
    sharedWithCommunity: true,
    description: "Miniaturized broadcast deck with non-stop recording to SD and UHS-II cards or external disks."
  },
  {
    name: "Blackmagic Micro Studio Camera 4K",
    manufacturer: "Blackmagic Design",
    category: "Camera",
    inputs: [
      { name: "Expansion Port", type: "video", cableType: "Custom" }
    ],
    outputs: [
      { name: "SDI Video Output", type: "video", cableType: "SDI" }
    ],
    sharedWithCommunity: true,
    description: "Miniaturized Ultra HD studio camera for live production."
  },
  {
    name: "Blackmagic Video Assist 7\" 12G HDR",
    manufacturer: "Blackmagic Design",
    category: "Monitor/Recorder",
    inputs: [
      { name: "HDMI Input", type: "video", cableType: "HDMI" },
      { name: "SDI Input", type: "video", cableType: "SDI" }
    ],
    outputs: [
      { name: "SDI Output", type: "video", cableType: "SDI" }
    ],
    sharedWithCommunity: false,
    description: "Portable monitor and recorder with a 7\" screen, designed to improve the quality and capabilities of any camera."
  },
  {
    name: "Blackmagic MultiDock 10G",
    manufacturer: "Blackmagic Design",
    category: "Storage",
    inputs: [],
    outputs: [
      { name: "USB-C 10Gbps", type: "data", cableType: "USB-C" }
    ],
    sharedWithCommunity: true,
    description: "Rack mount SSD dock that lets you access 4 separate SSDs via a single high-speed 10 Gb/s USB-C connection."
  },
  {
    name: "Blackmagic SmartScope Duo 4K",
    manufacturer: "Blackmagic Design",
    category: "Monitor",
    inputs: [
      { name: "SDI Input", type: "video", cableType: "SDI" }
    ],
    outputs: [],
    sharedWithCommunity: true,
    description: "Dual 8\" monitors with built-in broadcast quality scopes for technical monitoring of signals."
  }
];

module.exports = testItems;

async function insertTestItems() {
  try {
    // Connect to DB using the exported function from db.js
    // This step assumes connectToDB is a function that manages connection,
    // including checking if a connection is already established.
    await connectToDB();

    // Inserting test items
    const inserted = await Equipment.insertMany(testItems);
    console.log('Test items inserted successfully', inserted);

  } catch (error) {
    console.error('Error inserting test items:', error);
  } finally {
    // Check if the connection needs to be closed here
    // If you run this script independently (not from your main application),
    // you might want to close the connection. Otherwise, you can omit this
    // to let the main application manage the connection lifecycle.
    // mongoose.connection.close(() => console.log('Mongoose connection closed.'));
  }
}

insertTestItems();