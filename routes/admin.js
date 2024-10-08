const express = require('express');
const router = express.Router();

const Application = require('../models/applicationSchema');
const Jobs = require("../models/jobschema");
const Users = require("../models/userSchema");
// Fetch all applications
 router.get(("/student-application"), async (req, res) => {
    try {
        const applications = await Application.find(); // Fetch all applications from the DB
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})


 router.get(("/posted-jobs"), async (req, res) => {
    try {
        const postedjobs = await Jobs.find(); // Fetch all applications
        res.status(200).json(postedjobs);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})


router.get(("/users-admin"), async (req, res) => {
    try {
        const users_admin = await Users.find(); // Fetch all applications
        res.status(200).json(users_admin);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})  

router.delete("/users-admin/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Users.findByIdAndDelete(id); // Delete the user by ID
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.delete("/applications/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Application.findByIdAndDelete(id); // Delete the user by ID
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.delete("/posted-jobs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Jobs.findByIdAndDelete(id); // Delete 
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully', deletedUse})
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});








module.exports = router
