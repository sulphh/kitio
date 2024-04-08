const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

router.get('/equipment', async (req, res) => {
  try {
    const equipmentList = await Equipment.find({});
    res.json(equipmentList);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment: " + error.message });
  }
});

router.get('/equipment/:id', async (req, res) => {
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

// POST a new piece of equipment
router.post('/equipment', async (req, res) => {
  const newEquipment = new Equipment(req.body);

  try {
    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (error) {
    res.status(400).json({ message: "Failed to create equipment: " + error.message });
  }
});

router.put('/equipment/:id', async (req, res) => {
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

router.delete('/equipment/:id', async (req, res) => {
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
