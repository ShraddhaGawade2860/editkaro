const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    
    try {
        await newContact.save();
        res.status(201).json({ message: 'Contact submitted successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ message: 'Error submitting contact', error });
    }
});

module.exports = router;
