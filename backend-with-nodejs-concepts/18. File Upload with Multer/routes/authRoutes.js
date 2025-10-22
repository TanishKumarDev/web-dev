const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register
router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if user exists
        let user = await User.findOne({email});
        if (user) return res.status(400).json({msg: 'User already exists'});

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        res.json({msg: 'User registered successfully'});

        res.status(201).json({msg: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if user exists
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: 'User does not exist'});

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: 'Invalid credentials'});

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = router;
