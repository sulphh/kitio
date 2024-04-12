const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');
const { authenticate } = require('../utils/authMiddleware'); // Ensure this is imported correctly

// Get all equipment - Protected route
router.get('/equipment', authenticate, async (req, res) => {
  try {
    const equipmentList = await Equipment.find({});
    res.json(equipmentList);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment: " + error.message });
  }
});

// Get a single piece of equipment - Protected route
router.get('/equipment/:id', authenticate, async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching equipment: " + error.message });
  }
});

// Create a new piece of equipment - Protected route
router.post('/equipment', authenticate, async (req, res) => {
  const newEquipment = new Equipment(req.body);
  try {
    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (error) {
    res.status(400).json({ message: "Failed to create equipment: " + error.message });
  }
});

// Update existing equipment - Protected route
router.put('/equipment/:id', authenticate, async (req, res) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.json(updatedEquipment);
  } catch (error) {
    res.status(400).json({ message: "Failed to update equipment: " + error.message });
  }
});

// Delete a piece of equipment - Protected route
router.delete('/equipment/:id', authenticate, async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!deletedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete equipment: " + error.message });
  }
});

module.exports = router;
