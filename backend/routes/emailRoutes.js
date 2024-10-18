const express = require('express');
const Email = require('../models/Email');
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const newEmail = new Email({ email });
    try {
        await newEmail.save();
        res.status(201).json({ message: 'Email added successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error saving email', error });
    }
});

module.exports = router;
