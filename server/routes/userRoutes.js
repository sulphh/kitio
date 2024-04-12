const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken } = require('../utils/authMiddleware');

// Register a new user
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    let user = new User({ username, password });
    try {
        await user.save();
        res.status(201).send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user.", error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (!user || !user.authenticate(password)) {
            return res.status(401).json({ message: "Username or password is incorrect" });
        }
        const token = generateToken(user);
        res.json({ token, user: { id: user._id, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: "Authentication failed", error: error.message });
    }
});

module.exports = router;
